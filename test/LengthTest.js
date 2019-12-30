let assert=require('assert');
let length=require('../main/Length')
describe('tests for length conversion',function(){
    it('given 0 feet and 0 feet should return true',function(){
        zeroFeet=new length(1);
        anotherZeroFeet=new length(1);
        assert.equal(anotherZeroFeet.equalality(zeroFeet),true);
    })

    it('given 0 feet object and null check for equality should return false',function(){
        zeroFeet=new length(0);
        assert.equal(false,zeroFeet.equalality(null));
    })

    it('given 0 feet object check itself for equality should return false',function(){
        zeroFeet=new length(0);
        assert.equal(true,zeroFeet.equalality(zeroFeet));
    })

    it('given different typeof object for equality should return false',function(){
        zeroFeet=new length(0);
        let object=new Object();
        assert.equal(false,zeroFeet.equalality(object));
    })
});