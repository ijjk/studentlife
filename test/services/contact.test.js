const assert = require('assert')
const app = require('../../server/app')

describe("'contact' service", () => {
  it('registered the service', () => {
    const service = app.service('contact')

    assert.ok(service, 'Registered the service')
  })
})
