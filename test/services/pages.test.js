const assert = require('assert')
const app = require('../../server/app')

describe("'pages' service", () => {
  it('registered the service', () => {
    const service = app.service('pages')

    assert.ok(service, 'Registered the service')
  })
})
