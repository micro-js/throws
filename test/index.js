/**
 * Imports
 */

var throws = require('..')
var test = require('tape')

/**
 * Tests
 */

test('should do nothing', function (t) {
  t.throws(function () {
    throws(new Error)
  });
  t.end()
})
