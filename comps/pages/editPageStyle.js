import { sizes, flexRowCenter, colors } from '../../style/theme'

const style = {
  padding: 10,

  '& .denied': {
    padding: 10,
    textAlign: 'center',
  },

  '& .wrapDel': {
    textAlign: 'right',
    paddingTop: 5,
  },

  '& .fields, & .mods': {
    width: '100%',
    margin: '15px auto',
    maxWidth: sizes.maxBlockWidth + 130,
  },

  '& .fields': {
    margin: '30px auto',
    ...flexRowCenter,
    flexWrap: 'wrap',

    '& img': {
      margin: '15px 30px 0 0',
      alignSelf: 'flex-start',
    },
    '& .field': {
      width: '100%',
      marginTop: 15,
      ...flexRowCenter,
      alignItems: 'flex-start',

      '& label': {
        margin: '5px 5px 0 0',
      },
      '& input, & textarea': {
        padding: 5,
        flexGrow: 1,
        minWidth: 175,
        maxWidth: 275,
        border: 'none',
        background: 'transparent',
        transition: 'border-color 150ms ease',
        borderBottom: `1px solid ${colors.blackFg}`,
      },

      '&.btns': {
        ...flexRowCenter,
        '& button': {
          ':nth-child(1)': {
            margin: '0 10px 0 auto',
          },
        },
      },
    },
  }, // .fields

  '& .mods': {
    '& .wrap': {
      maxWidth: sizes.maxBlockWidth,
    },

    '& .note': {
      fontSize: 14,
      marginTop: 2,
      maxWidth: '80%',
    },

    '& .items': {
      margin: '15px 0',

      '& .none': {
        textAlign: 'center',
      },
      '& div': {
        width: '100%',
        ...flexRowCenter,
        alignItems: 'flex-start',

        '& p': {
          flexGrow: 1,
          padding: '2px 0 0 5px',
        },
        '& svg': {
          cursor: 'pointer',
        },
      },
    },

    '& .addMod': {
      ...flexRowCenter,
      flexWrap: 'wrap',

      '& label': {
        marginRight: 5,
      },
      '& input': {
        padding: 5,
        flexGrow: 1,
        flexShrink: 1,
        minWidth: 175,
        border: 'none',
        background: 'none',
        borderBottom: `1px solid ${colors.blackFg}`,
      },
      '& button': {
        marginLeft: 10,
      },
      '& p': {
        marginTop: 10,
      },
    },
  }, // .mods
}

export default style
