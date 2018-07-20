const getError = (error, fallback) => {
  let msg = fallback

  if (
    typeof error === 'object' &&
    (error.message ||
      (error.response && error.response.data && error.response.data.message))
  ) {
    msg = error.response ? error.response.data.message : error.message
  } else if (typeof error === 'string') {
    msg = error
  }

  switch (msg) {
    case 'Authentication timed out':
    case 'Socket connection timed out': {
      return 'Could not connect to the server'
    }
    case 'too many messages': {
      return 'You are sending too many messages'
    }
    default: {
      return msg
    }
  }
}

export default getError
