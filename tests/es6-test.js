var Leaf = require('../index.js');
var assert = require('assert');
var fs = require('fs');
var expect = require('chai').expect;

describe('Leaf - es6', function() {
  it('has correct import/exports', function() {
    var source = fs.readFileSync('./tests/fixtures/es6.js');
    var m = new Leaf('./tests/fixtures/es6.js', source);

    assert.equal(m.hasDefine(), false, 'module is not defined');
    assert.equal(m.isAnonymous, undefined, 'module is anonymous');

    expect(m.imports).to.deep.equal({bar: ['default']});

    expect(m.exports).to.deep.equal({'.': ['default']});
  });
});
