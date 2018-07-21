import React from 'react'
import { css } from 'glamor'
import { flexRowCenter } from '../../style/theme'
import { uploadsUrl, allowedExts } from '../../util/config'
import { expandPost } from '../../redux/actions'
import Icon from '@fortawesome/react-fontawesome'
import ExtLink from '../util/ExtLink'

const viewerUrl = 'https://docs.google.com/viewer?url='
const style = {
  width: '100%',
  textAlign: 'center',
  margin: '10px 0',

  '& img': {
    width: 'auto',
    height: 'auto',
    maxHeight: 400,
    maxWidth: '98%',
    cursor: 'pointer',
  }, // img

  '& a': {
    fontSize: 15,
    ...flexRowCenter,
    display: 'inline-flex',
    padding: '8px 10px',
    margin: '10px 5px 0',
    textDecoration: 'none',

    '& svg': {
      marginRight: 5,
    },
    '& span': {
      height: 16,
    },
  },
}
const btnIconStyle = {
  height: 16,
  width: 16,
}

const PostFile = ({ _id, file }) => (
  <div className={css(style)}>
    {(() => {
      let icon = 'file',
        fileExt = file.split('.').pop()
      if (allowedExts.images.indexOf(fileExt) > -1) {
        return <img src={uploadsUrl + file} onClick={() => expandPost(_id)} />
      }
      switch (fileExt) {
        case 'pdf':
          icon += '-pdf'
          break
        case 'xls':
        case 'xlsx':
          icon += '-excel'
          break
        case 'doc':
        case 'docx':
          icon += '-word'
          break
        case 'ppt':
        case 'pptx':
          icon += '-powerpoint'
          break
        default:
          break
      }
      return (
        <div>
          <div>
            <Icon
              {...{ icon }}
              style={{ height: 72, width: 72, color: '#555555' }}
            />
          </div>
          <ExtLink href={uploadsUrl + file} download className='btn'>
            <Icon icon="download" style={btnIconStyle} />
            <span>Download</span>
          </ExtLink>

          <ExtLink href={viewerUrl + uploadsUrl + file} className='btn'>
            <Icon icon="eye" style={btnIconStyle} />
            <span>View</span>
          </ExtLink>
        </div>
      )
    })()}
  </div>
)

export default PostFile
