const path = require('path');
const assert = require('assert');

const cmacc = require('cmacc-compiler');

describe('mortage', function () {

  global.fs = require('fs');

  it('agreement', function () {

    const root = path.join('file://', __dirname);
    const file = path.join(root, '../doc/index.cmacc');

    return cmacc.compile(file)
      .then(ast => {
        //assert.deepEqual(ast.agreement.party, {})
        return ast.agreement;
      })
      .then(cmacc.render)
      .then(md => {
        return cmacc.remarkable.render(md);
      })
      .then(html => {
        const output = path.join(__dirname, '../test/agreement.html');
        const expect = fs.readFileSync(output).toString();
        assert.equal(html, expect);
      })
  });

  it('overview', function () {

    const root = path.join('file://', __dirname);
    const file = path.join(root, '../doc/index.cmacc');

    return cmacc.compile(file)
      .then(ast => {
        return ast.overview;
      })
      .then(cmacc.render)
      .then(md => {
        return cmacc.remarkable.render(md);
      })
      .then(html => {
        const output = path.join(__dirname, '../test/overview.html');
        const expect = fs.readFileSync(output).toString();
        assert.equal(html, expect);
      })
  });

});