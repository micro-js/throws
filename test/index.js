/**
 * Imports
 */

var throws = require('..')
var assert = require('assert')

/**
 * Tests
 */

describe('throws', function () {
  it('should work', function () {
    assert.throws(function () {
      throws(new Error)
    })
  })
})
