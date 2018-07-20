const { restrictToRoles } = require('feathers-authentication-hooks')

module.exports = restrictToRoles({
  roles: ['admin'],
  fieldName: 'role',
  idField: '_id',
  owner: false,
})
