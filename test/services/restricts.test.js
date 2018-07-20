const assert = require('assert')
const app = require('../../server/app')

describe("'restricts' service", () => {
  it('registered the service', () => {
    const service = app.service('restricts')

    assert.ok(service, 'Registered the service')
  })
})
