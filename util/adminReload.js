// check if isAdmin state has changed if so
// return true to cause getInitialProps to reload

const adminReload = (props, prevProps) => {
  if (!prevProps.users.curUser || !props.users.curUser) return
  const prevUsers = prevProps.users
  const prevIsAdmin = prevUsers[prevUsers.curUser].isAdmin
  const { users } = props
  const { isAdmin } = users[users.curUser]
  if (!prevIsAdmin && isAdmin) return true
}

export default adminReload
