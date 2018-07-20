const assert = require('assert')
const app = require('../../server/app')

describe("'resources' service", () => {
  it('registered the service', () => {
    const service = app.service('resources')

    assert.ok(service, 'Registered the service')
  })
})
