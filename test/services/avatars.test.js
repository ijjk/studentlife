const assert = require('assert')
const app = require('../../server/app')

describe("'avatars' service", () => {
  it('registered the service', () => {
    const service = app.service('avatars')

    assert.ok(service, 'Registered the service')
  })
})
