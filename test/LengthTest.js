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
        assert.equal(oneFeet.unitConversion(),twelveInch.unitValue);
    })

    it('given 1 feet compare with 1 inch should not equal',function(){
        oneFeet=new length.Length(1,length.LengthUnit.FEET);
        oneInch=new length.Length(1,length.LengthUnit.INCH);
        assert.notEqual(oneFeet.unitConversion(),oneInch.unitValue);
    })

    it('given 1 inch compare with 1 feet should not equal',function(){
        oneInch=new length.Length(1,length.LengthUnit.INCH);
        oneFeet=new length.Length(1,length.LengthUnit.FEET);
        assert.notEqual(oneInch.unitValue,oneFeet.unitConversion());
    })

    it('given 12 inch compare with 1 feet should equal',function(){
        twelveInch=new length.Length(12,length.LengthUnit.INCH);
        oneFeet=new length.Length(1,length.LengthUnit.FEET);
        assert.notEqual(oneInch.unitValue,oneFeet.unitConversion());
    })

    it('given 3 feet compare with 1 yard should equal',function(){
        threeFeet=new length.Length(3,length.LengthUnit.FEET);
        oneYard=new length.Length(1,length.LengthUnit.YARD);
        assert.equal(oneYard.unitConversion(),threeFeet.unitConversion());
    })

    it('given 1 feet should not be equal 1 yard',function(){
        let oneFeet=new length.Length(1,length.LengthUnit.FEET).unitConversion();
        let oneYard=new length.Length(1,length.LengthUnit.YARD).unitConversion();
        assert.notEqual(oneYard,oneFeet);
    })

    it('given 1 inch should not be equal 1 yard',function(){
        let oneInch=new length.Length(1,length.LengthUnit.INCH).unitConversion();
        let oneYard=new length.Length(1,length.LengthUnit.YARD).unitConversion();
        assert.notEqual(oneYard,oneInch);
    })

    it('given 1 yard should return 36 inch',function(){
        let oneYard=new length.Length(1,length.LengthUnit.YARD).unitConversion();
        let thirtySixInch=new length.Length(36,length.LengthUnit.INCH).unitConversion();
        assert.equal(thirtySixInch,oneYard);
    })

    it('given 1 yard should return 3 feet',function(){
        let oneYard=new length.Length(1,length.LengthUnit.YARD).unitConversion();
        let threeFeet=new length.Length(3,length.LengthUnit.FEET).unitConversion();
        assert.equal(threeFeet,oneYard);
    })
});