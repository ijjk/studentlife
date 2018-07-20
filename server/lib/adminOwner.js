const { restrictToRoles } = require('feathers-authentication-hooks')

module.exports = ownerField => {
  return restrictToRoles({
    roles: ['admin'],
    fieldName: 'role',
    idField: '_id',
    owner: true,
    ownerField,
  })
}
