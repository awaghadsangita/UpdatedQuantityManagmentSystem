let assert=require('assert');
let length=require('../main/Length')
describe('tests for length conversion',function(){
    it('given 0 feet and 0 feet should return true',function(){
        zeroFeet=new length(0);
        anotherZeroFeet=new length(0);
        assert.equal(true,anotherZeroFeet.equalality(zeroFeet));
    })
});