let assert=require('assert');
let length=require('../main/Length')
describe('tests for length conversion',function(){
    it('given 0 feet and 0 feet should return true',function(){
        zeroFeet=new length.Length(1,length.LengthUnit.FEET);
        anotherZeroFeet=new length.Length(1,length.LengthUnit.FEET);
        assert.equal(anotherZeroFeet.equalality(zeroFeet),true);
    })

    it('given 0 feet object and null check for equality should return false',function(){
        zeroFeet=new length.Length(0,length.LengthUnit.FEET);
        assert.equal(false,zeroFeet.equalality(null));
    })

    it('given 0 feet object check itself for equality should return false',function(){
        zeroFeet=new length.Length(0,length.LengthUnit.FEET);
        assert.equal(true,zeroFeet.equalality(zeroFeet));
    })

    it('given different typeof object for equality should return false',function(){
        zeroFeet=new length.Length(0,length.LengthUnit.FEET);
        let object=new Object();
        assert.equal(false,zeroFeet.equalality(object));
    })

    it('given 1 feet should return 12 inch',function(){
        oneFeet=new length.Length(1,length.LengthUnit.FEET);
        twelveInch=new length.Length(12,length.LengthUnit.INCH);
        assert.equal(oneFeet.FeetToInch(),twelveInch.unitValue);
    })
});