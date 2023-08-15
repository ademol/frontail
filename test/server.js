const { IgnoreLine, SetIgnoreConfig } = require('../lib/server');
let assert = require('assert');

describe('should line be ignored',  function() {
    
    let ignoreConfig =  [
            new RegExp('ignore_me','i'),
            new RegExp('also me','i')
        ];
    SetIgnoreConfig(ignoreConfig);
    
    it('return true if matches any ignoreRegex', function () {
        assert.strictEqual(true, IgnoreLine('line ignore_me data'));
        assert.strictEqual(true, IgnoreLine('also me'));
    });
    it('return false if not matches no ignoreRegex', function () {
        assert.strictEqual(false, IgnoreLine('line data'));
    });
});
