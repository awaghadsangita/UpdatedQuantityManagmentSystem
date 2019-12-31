let assert=require('assert');
let unit=require('../main/Unit');
let unitManipulator=require('../main/UnitManipluator');

describe('tests for length conversion',()=>{
    it('given 1 feet compare 1 feet should true',()=>{
        oneFeet=new unitManipulator(1,unit.lengthUnit.FEET);
        anotherOneFeet=new unitManipulator(1,unit.lengthUnit.FEET);
        assert.equal(new unitManipulator().compare(oneFeet,anotherOneFeet),true);
    });

    it('given 1 feet and 12 inch when compare should return true',()=>{
        oneFeet=new unitManipulator(1,unit.lengthUnit.FEET);
        twelveInch=new unitManipulator(12,unit.lengthUnit.INCH);
        assert.equal(new unitManipulator().compare(twelveInch,oneFeet),true);
    })

    it('given 1 feet and 1 inch when compare should return false',()=>{
        oneFeet=new unitManipulator(1,unit.lengthUnit.FEET);
        oneInch=new unitManipulator(1,unit.lengthUnit.INCH);
        assert.equal(new unitManipulator().compare(oneFeet,oneInch),false);
    })

    it('given 1 inch and 1 feet when compare should return false',()=>{
        oneInch=new unitManipulator(1,unit.lengthUnit.INCH);
        oneFeet=new unitManipulator(1,unit.lengthUnit.FEET);
        assert.equal(new unitManipulator().compare(oneInch,oneFeet),false);
    })

    it('given 12 inch and 1 feet when compare should return false',()=>{
        twelveInch=new unitManipulator(12,unit.lengthUnit.INCH);
        oneFeet=new unitManipulator(1,unit.lengthUnit.FEET);
        assert.equal(new unitManipulator().compare(twelveInch,oneFeet),true);
    })

    it('given 3 feet and 1 yard when compare should return true',()=>{
        threeFeet=new unitManipulator(3,unit.lengthUnit.FEET);
        oneYard=new unitManipulator(1,unit.lengthUnit.YARD);
        assert.equal(new unitManipulator().compare(oneYard,threeFeet),true);
    })

    it('given 1 feet and 1 yard when compare should return true ',()=>{
        oneFeet=new unitManipulator(1,unit.lengthUnit.FEET);
        oneYard=new unitManipulator(1,unit.lengthUnit.YARD);
        assert.notEqual(new unitManipulator().compare(oneYard,oneFeet),true);
    })

    it('given 1 inch and 1 yard when compare should return true',()=>{
        oneInch=new unitManipulator(1,unit.lengthUnit.INCH);
        oneYard=new unitManipulator(1,unit.lengthUnit.YARD);
        assert.notEqual(new unitManipulator().compare(oneYard,oneInch),true);
    })

    it('given 1 yard and 36 inch when compare should return true',()=>{
        oneYard=new unitManipulator(1,unit.lengthUnit.YARD);
        thirtySixInch=new unitManipulator(36,unit.lengthUnit.INCH);
        assert.equal(new unitManipulator().compare(thirtySixInch,oneYard),true);
    })

    it('given 1 yard and 3 feet when compare should return true',()=>{
        oneYard=new unitManipulator(1,unit.lengthUnit.YARD);
        threeFeet=new unitManipulator(3,unit.lengthUnit.FEET);
        assert.equal(new unitManipulator().compare(threeFeet,oneYard),true);
    })
});

describe('tests for length conversion',()=>{
    it('given 1 gallon and 3.78 litres when compare should return true',()=>{
        let oneGallon=new unitManipulator(1,unit.volumeUnit.GALLON);
        let threePtSevenEightLitre=new unitManipulator(3.78,unit.volumeUnit.LITRE)
        assert.equal(new unitManipulator().compare(oneGallon,threePtSevenEightLitre),true);
    });

    it('given 1 litre and 1000 ml when compare should return true',()=>{
        let oneLitre=new unitManipulator(1,unit.volumeUnit.LITRE);
        let thousandMl=new unitManipulator(1000,unit.volumeUnit.MILILITIRE);
        assert.equal(new unitManipulator().compare(thousandMl,oneLitre),true);
    })
});

