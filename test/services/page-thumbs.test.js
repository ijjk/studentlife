const assert = require('assert')
const app = require('../../server/app')

describe("'page-thumbs' service", () => {
  it('registered the service', () => {
    const service = app.service('page-thumbs')

    assert.ok(service, 'Registered the service')
  })
})
