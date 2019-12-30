let assert=require('assert');
let length=require('../main/Length')
describe('tests for length conversion',function(){
    it('given 0 feet should return 0 feet',function(){
        assert.equal(0,new length(0).giveFeet());
    });

});