import React, { Component } from 'react'
import { css } from 'glamor'
import { flexRowCenter, sizes, colors, media } from '../../style/theme'
import { setDialog, createUser, createRestrict } from '../../redux/actions'
import Papa from 'papaparse'
import Layout from '../../comps/Layout'
import getError from '../../util/getError'
import Icon from '@fortawesome/react-fontawesome'
import AdminRestrict from '../../comps/AdminRestrict'
import FileDropBox from '../../comps/util/FileDropBox'
import List from 'react-virtualized/dist/commonjs/List'
import AutoSizer from 'react-virtualized/dist/commonjs/AutoSizer'

// (175px + 10px margin + 4px padding) * 5 text fields + (145px * 4 checkboxes) + 30px for trash icon
const rowWidth = 189 * 5 + 145 * 4 + 30
const rowHeight = 30 // 18px + 12px margin-bottom
const style = {
  padding: 10,
  height: '100%',
  display: 'flex',
  flexDirection: 'column',

  '& h5': {
    padding: '0 0 10px 0',
  },

  '& .wrapRows': {
    flexGrow: 1,
    minHeight: 200,
    maxHeight: 300,
    overflow: 'auto',
    display: 'flex',
    flexDirection: 'column',
    maxWidth: `calc(100vw - ${sizes.navWidth}px - 20px)`,

    [media.lessThan(sizes.mobileBreak)]: {
      maxWidth: 'calc(100vw - 20px)',
    },
  },

  '& .wrapSizer': {
    flexGrow: 1,
  },

  '& .row': {
    marginBottom: 12,
    ...flexRowCenter,
    width: rowWidth,

    '& *': {
      width: 175,
      marginRight: 10,
    },

    '& i, & svg': {
      width: 20,
      height: 18,
    },

    '& svg': {
      cursor: 'pointer',
    },

    '& input[type="text"], & input[type="email"]': {
      padding: 2,
      border: 'none',
      background: 'none',
      borderBottom: `1px solid ${colors.blackFg}`,
    },

    '& input[type="checkbox"]': {
      width: 145,
      cursor: 'pointer',
    },

    '& .check': {
      width: 145,
    },
  },

  '& .btns': {
    margin: '10px 0',
    ...flexRowCenter,

    '& p': {
      margin: '0 auto 0 0',
    },

    '& button': {
      ':nth-child(2)': {
        marginRight: 10,
      },
      ':nth-child(3)': {
        width: 121,
      },
    },
  },

  '& .err': {
    padding: 10,
    textAlign: 'right',
  },

  '& .hint': {
    margin: '10px 0',

    '& p': {
      maxWidth: 600,
    },
  },
}

const emptyRow = {
  email: '',
  password: '',
  firstName: '',
  lastName: '',
  username: '',
  admin: false,
  posting: true,
  making_pages: true,
  updating_profile: true,
}
const fields = Object.keys(emptyRow)
const placeholders = [
  'Email',
  'Password',
  'First name',
  'Last name',
  'Username',
  'Is admin',
  'Can post',
  'Can make pages',
  'Can update profile',
]

class AddUsers extends Component {
  state = {
    rows: [{ ...emptyRow }],
    fileError: null,
    submitError: null,
    submitProgress: 0,
    submitPending: false,
  }

  addRow = () =>
    this.setState({
      rows: this.state.rows.concat({ ...emptyRow }),
    })

  removeRow = e => {
    const { rows } = this.state
    const idx = typeof e === 'number' ? e : e.currentTarget.id
    rows.splice(idx, 1)
    if (!rows.length) rows.push({ ...emptyRow })
    this.setState({ rows })
  }

  addUser = (rows, total) => {
    if (!rows.length || this.unmounted) return Promise.resolve()
    const {
      idx,
      email,
      password,
      firstName,
      lastName,
      username,
      admin,
      ...restricts
    } = rows.pop()

    let toRestrict
    const { posting, making_pages, updating_profile } = restricts
    const doRestricts = !posting || !making_pages || !updating_profile
    const user = { email, password, firstName, lastName, username }
    user.role = admin ? 'admin' : 'user'

    if (doRestricts) {
      // 6 is start of restricts in fields array
      for (let i = 6; i < fields.length; i++) {
        const field = fields[i]
        if (restricts[field]) toRestrict[field] = true
      }
    }
    const numDone = total - rows.length
    const newIdx = idx - (numDone - 1)

    return createUser(user)
      .then(({ _id }) => doRestricts && createRestrict({ ...toRestrict, _id }))
      .then(() => {
        if (this.unmounted) return
        this.removeRow(newIdx)
        const submitProgress = Math.round((numDone / total) * 100)
        this.setState({ submitProgress })
      })
      .then(() => this.addUser(rows, total))
      .catch(err => {
        this.setState({
          submitPending: false,
          submitError:
            `Error adding users at row ${newIdx + 1} ` + getError(err, ''),
        })
      })
  }

  submitUsers = () => {
    const rows = []
    let missingField
    const hasEmpty = this.state.rows.some((row, idx) => {
      rows.push({ ...row, idx })
      return fields.some((field, idx) => {
        const missing = row[field] === emptyRow[field] && idx < 4
        if (missing) missingField = placeholders[idx]
        return missing
      })
    })
    if (hasEmpty) {
      return setDialog({
        title: 'Error...',
        message: `Row ${
          rows.length
        } is missing "${missingField}" value. Please enter it or delete the row to continue.`,
        button1Txt: 'OK',
        button2Txt: null,
      })
    }
    if (!rows.length) return
    const s = rows.length === 1 ? '' : 's'
    setDialog({
      message: `Are you sure you want to add ${
        rows.length
      } user${s}? You will not be able to navigate away from this page or else users might fail to be added. Note: Adding a lot of users can take a while`,
      button1Act: () => {
        this.setState({
          submitError: null,
          submitPending: true,
          submitProgress: 0,
        })
        this.addUser(rows.reverse(), rows.length).then(() => {
          this.setState({ submitPending: false })
        })
      },
    })
  }

  handleChange = e => {
    const { rows } = this.state
    const { id } = e.target.closest('div')
    const field = e.target.id
    if (e.target.type === 'checkbox') {
      rows[id][field] = e.target.checked
    } else {
      rows[id][field] = e.target.value
    }
    this.setState({ rows })
  }

  // eslint-disable-next-line no-unused-vars
  handleUsers = ({ data, errors, meta }) => {
    if (!data.length) return
    const rows = []
    data.forEach(row => {
      const rowObj = {}
      let isEmpty = true
      fields.forEach((field, idx) => {
        if (idx >= row.length) {
          rowObj[field] = emptyRow[field]
        } else {
          let val = row[idx].trim()
          if (isEmpty) {
            isEmpty = !val.length
          }
          // bool values
          if (idx > 4) {
            if (val === 'yes' || val === 'no') {
              val = Boolean(val === 'yes')
            } else {
              val = emptyRow[field]
            }
          }
          rowObj[field] = val
        }
      })
      if (!isEmpty) rows.push(rowObj)
    })
    if (!rows.length) return
    this.setState({ rows })
  }

  usersFileError = fileError => this.setState({ fileError })

  handleUsersFile = file => {
    if (!file) return
    this.setState({ fileError: null })
    Papa.parse(file, {
      skipEmptyLines: true,
      complete: this.handleUsers,
      error: this.usersFileError,
    })
  }

  rowRenderer = ({ index, style, key }) => {
    const row = this.state.rows[index]
    return (
      <div className="row" style={style} key={key} id={index}>
        <Icon icon="trash" id={index} onClick={this.removeRow} />
        {fields.map((field, idx) => {
          let elProps = { key: idx }
          if (typeof row[field] === 'string') {
            elProps = {
              ...elProps,
              type: idx === 0 ? 'email' : 'text',
              id: field,
              value: row[field],
              onChange: this.handleChange,
              placeholder: placeholders[idx],
            }
          } else {
            elProps = {
              ...elProps,
              id: field,
              type: 'checkbox',
              checked: row[field],
              onChange: this.handleChange,
            }
          }
          return React.createElement('input', elProps)
        })}
      </div>
    )
  }

  componentWillUnmount() {
    this.unmounted = true
  }

  render() {
    const {
      rows,
      fileError,
      submitError,
      submitPending,
      submitProgress,
    } = this.state
    return (
      <Layout className={css(style)} restrict>
        <AdminRestrict>
          <h5>Add users</h5>
          <div className="wrapRows">
            <div className="row">
              <i />
              {fields.map((field, idx) => (
                <h6
                  key={field}
                  className={
                    typeof emptyRow[field] === 'string' ? null : 'check'
                  }
                >
                  {placeholders[idx]}
                </h6>
              ))}
            </div>
            <div className="wrapSizer">
              <AutoSizer>
                {({ height }) => (
                  <List
                    height={height}
                    width={rowWidth}
                    rowHeight={rowHeight}
                    rowCount={rows.length}
                    style={{ outline: 0 }}
                    rowRenderer={this.rowRenderer}
                  />
                )}
              </AutoSizer>
            </div>
          </div>
          <div className="btns">
            <p>{rows.length} rows</p>
            <button className="btn-alt" onClick={this.addRow}>
              Add row
            </button>
            <button onClick={submitPending ? null : this.submitUsers}>
              {submitPending ? submitProgress + '%' : 'Submit users'}
            </button>
          </div>
          <div>{submitError && <p className="err">{submitError}</p>}</div>
          <div className="hint">
            <p>
              {
                'Note: To create the csv file you can start with an excel file and just save it as csv. For the "admin", "posting", "make pages", and "update profile" fields just enter "yes" or "no" without the " or leave empty to use default of (no, yes, yes, yes). If you get a message about styling or formatting not able to be saved in this format just say OK. You do not need to add a header row with email, username... in the csv file you just need to use the same order as the table above.'
              }
            </p>
          </div>
          <div>{fileError && <p className="errMsg">{fileError}</p>}</div>
          <FileDropBox
            style={{ margin: '15px auto' }}
            onFileChange={this.handleUsersFile}
            checkFileParams={{ customExtension: 'csv' }}
            message="Drag and drop or click below to select users csv file"
          />
        </AdminRestrict>
      </Layout>
    )
  }
}

export default AddUsers
