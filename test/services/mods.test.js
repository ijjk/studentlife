const assert = require('assert')
const app = require('../../server/app')

describe("'mods' service", () => {
  it('registered the service', () => {
    const service = app.service('mods')

    assert.ok(service, 'Registered the service')
  })
})
