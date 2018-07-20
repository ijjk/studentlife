const assert = require('assert')
const app = require('../../server/app')

describe("'opps' service", () => {
  it('registered the service', () => {
    const service = app.service('opps')

    assert.ok(service, 'Registered the service')
  })
})
