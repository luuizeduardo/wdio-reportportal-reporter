const { assert } = require('chai');

describe('test footer', function () {
  this.retries(2);

  beforeEach(() => {
    browser.url('https://ya.ru/');
  }, 2);

  it('Verify footer is displayed @ta-g @tag tag3 @Footer', function () {
    assert.isTrue(false, 'test 1 failed')
  });

  it('Verify footer is displayed @ta-g @Smoke @Footer', function () {
    browser.url('some url');
    assert.isTrue(false, 'test 2 failed')
  })

});
