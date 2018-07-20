const assert = require('assert')
const app = require('../../server/app')

describe("'oppsCats' service", () => {
  it('registered the service', () => {
    const service = app.service('opps-cats')

    assert.ok(service, 'Registered the service')
  })
})
