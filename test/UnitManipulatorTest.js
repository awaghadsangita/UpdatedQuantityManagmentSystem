let assert=require('assert');
let unit=require('../main/Unit');
let unitManipulator=require('../main/UnitManipluator');

describe('tests for length conversion',()=>{
    it('given 1 feet and 1 feet should return equal',()=>{
        oneFeet=new unitManipulator(1,unit.lengthUnit.FEET).unitConversion();
        anotherOneFeet=new unitManipulator(1,unit.LengthUnit.FEET).unitConversion();
        assert.equal(oneFeet,anotherOneFeet);
    });

    it('given 1 feet should return 12 inch',()=>{
        let oneFeet=new unitManipulator(1,unit.lengthUnit.FEET).unitConversion();
        let twelveInch=new unitManipulator(12,unit.lengthUnit.INCH).unitConversion();
        assert.equal(twelveInch,oneFeet);
    })

    it('given 1 feet compare with 1 inch should not equal',()=>{
        let oneFeet=new unitManipulator(1,unit.lengthUnit.FEET).unitConversion();
        let oneInch=new unitManipulator(1,unit.lengthUnit.INCH).unitConversion();
        assert.notEqual(oneFeet,oneInch);
    })

    it('given 1 inch compare with 1 feet should not equal',()=>{
        let oneInch=new unitManipulator(1,unit.lengthUnit.INCH).unitConversion();
        let oneFeet=new unitManipulator(1,unit.lengthUnit.FEET).unitConversion();
        assert.notEqual(oneInch,oneFeet);
    })

    it('given 12 inch compare with 1 feet should equal',()=>{
        let twelveInch=new unitManipulator(12,unit.lengthUnit.INCH).unitConversion();
        let oneFeet=new unitManipulator(1,unit.lengthUnit.FEET).unitConversion();
        assert.equal(twelveInch,oneFeet);
    })

    it('given 3 feet compare with 1 yard should equal',()=>{
        let threeFeet=new unitManipulator(3,unit.lengthUnit.FEET).unitConversion();
        let oneYard=new unitManipulator(1,unit.lengthUnit.YARD).unitConversion();
        assert.equal(oneYard,threeFeet);
    })

    it('given 1 feet should not be equal 1 yard',()=>{
        let oneFeet=new unitManipulator(1,unit.lengthUnit.FEET).unitConversion();
        let oneYard=new unitManipulator(1,unit.lengthUnit.YARD).unitConversion();
        assert.notEqual(oneYard,oneFeet);
    })

    it('given 1 inch should not be equal 1 yard',()=>{
        let oneInch=new unitManipulator(1,unit.lengthUnit.INCH).unitConversion();
        let oneYard=new unitManipulator(1,unit.lengthUnit.YARD).unitConversion();
        assert.notEqual(oneYard,oneInch);
    })

    it('given 1 yard should return 36 inch',()=>{
        let oneYard=new unitManipulator(1,unit.lengthUnit.YARD).unitConversion();
        let thirtySixInch=new unitManipulator(36,unit.lengthUnit.INCH).unitConversion();
        assert.equal(thirtySixInch,oneYard);
    })

    it('given 1 yard should return 3 feet',()=>{
        let oneYard=new unitManipulator(1,unit.lengthUnit.YARD).unitConversion();
        let threeFeet=new unitManipulator(3,unit.lengthUnit.FEET).unitConversion();
        assert.equal(threeFeet,oneYard);
    })
});

describe('tests for length conversion',()=>{
    it('given 1 gallon should return 3.78 litres',()=>{
        let oneGallon=new unitManipulator(1,unit.volumeUnit.GALLON).unitConversion();
        assert.equal(3.78,oneGallon);
    });

    it('given 1 litre should return 1000 ml',()=>{
        let oneLitre=new unitManipulator(1,unit.volumeUnit.LITRE).unitConversion();
        let thousandMl=new unitManipulator(1000,unit.volumeUnit.MILILITIRE).unitConversion();
        assert.equal(thousandMl,oneLitre);
    })
});

