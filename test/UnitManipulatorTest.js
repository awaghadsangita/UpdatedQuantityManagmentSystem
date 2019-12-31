let assert = require('assert');
let unit = require('../main/Unit');
let volume = require('../main/Volume');
let unitManipulator = require('../main/UnitManipluator');

describe('tests for length conversion', () => {
    it('given 1 feet compare 1 feet should true', () => {
        oneFeet = new unitManipulator(1, unit.lengthUnit.FEET);
        anotherOneFeet = new unitManipulator(1, unit.lengthUnit.FEET);
        assert.equal(new unitManipulator().compare(oneFeet, anotherOneFeet), true);
    });

    it('given 1 feet and 12 inch when compare should return true', () => {
        oneFeet = new unitManipulator(1, unit.lengthUnit.FEET);
        twelveInch = new unitManipulator(12, unit.lengthUnit.INCH);
        assert.equal(new unitManipulator().compare(twelveInch, oneFeet), true);
    })

    it('given 1 feet and 1 inch when compare should return false', () => {
        oneFeet = new unitManipulator(1, unit.lengthUnit.FEET);
        oneInch = new unitManipulator(1, unit.lengthUnit.INCH);
        assert.equal(new unitManipulator().compare(oneFeet, oneInch), false);
    })

    it('given 1 inch and 1 feet when compare should return false', () => {
        oneInch = new unitManipulator(1, unit.lengthUnit.INCH);
        oneFeet = new unitManipulator(1, unit.lengthUnit.FEET);
        assert.equal(new unitManipulator().compare(oneInch, oneFeet), false);
    })

    it('given 12 inch and 1 feet when compare should return false', () => {
        twelveInch = new unitManipulator(12, unit.lengthUnit.INCH);
        oneFeet = new unitManipulator(1, unit.lengthUnit.FEET);
        assert.equal(new unitManipulator().compare(twelveInch, oneFeet), true);
    })

    it('given 3 feet and 1 yard when compare should return true', () => {
        threeFeet = new unitManipulator(3, unit.lengthUnit.FEET);
        oneYard = new unitManipulator(1, unit.lengthUnit.YARD);
        assert.equal(new unitManipulator().compare(oneYard, threeFeet), true);
    })

    it('given 1 feet and 1 yard when compare should return true ', () => {
        oneFeet = new unitManipulator(1, unit.lengthUnit.FEET);
        oneYard = new unitManipulator(1, unit.lengthUnit.YARD);
        assert.notEqual(new unitManipulator().compare(oneYard, oneFeet), true);
    })

    it('given 1 inch and 1 yard when compare should return true', () => {
        oneInch = new unitManipulator(1, unit.lengthUnit.INCH);
        oneYard = new unitManipulator(1, unit.lengthUnit.YARD);
        assert.notEqual(new unitManipulator().compare(oneYard, oneInch), true);
    })

    it('given 1 yard and 36 inch when compare should return true', () => {
        oneYard = new unitManipulator(1, unit.lengthUnit.YARD);
        thirtySixInch = new unitManipulator(36, unit.lengthUnit.INCH);
        assert.equal(new unitManipulator().compare(thirtySixInch, oneYard), true);
    })

    it('given 1 yard and 3 feet when compare should return true', () => {
        oneYard = new unitManipulator(1, unit.lengthUnit.YARD);
        threeFeet = new unitManipulator(3, unit.lengthUnit.FEET);
        assert.equal(new unitManipulator().compare(threeFeet, oneYard), true);
    })
});

describe('tests for volume conversion', () => {
    it('given 1 gallon and 3.78 litres when compare should return true', () => {
        let oneGallon = new unitManipulator(1, unit.volumeUnit.GALLON);
        let threePtSevenEightLitre = new unitManipulator(3.78, unit.volumeUnit.LITRE)
        assert.equal(new unitManipulator().compare(oneGallon, threePtSevenEightLitre), true);
    });

    it('given 1 litre and 1000 ml when compare should return true', () => {
        let oneLitre = new unitManipulator(1, unit.volumeUnit.LITRE);
        let thousandMl = new unitManipulator(1000, unit.volumeUnit.MILILITIRE);
        assert.equal(new unitManipulator().compare(thousandMl, oneLitre), true);
    })
});

describe('test for comparision', () => {
    it('given 1 gallon and 1 centimeter when compare should throw error', () => {
        try {
            oneGallon = new unitManipulator(1, unit.volumeUnit.GALLON);
            oneCentimer = new unitManipulator(1, unit.lengthUnit.CENTIMETER);
            new unitManipulator().compare(oneGallon, oneCentimer);
        } catch (e) {
            assert.equal(e.message, 'Invalid Unit Type');
        }
    });

    it('given null as unit type and two objects when compare should throw error', () => {
        try {
            nullUnitType1 = new unitManipulator(1, null);
            nullUnitType2 = new unitManipulator(1, null);
            new unitManipulator().compare(nullUnitType1, nullUnitType2);
        } catch (e) {
            assert.equal(e.message, 'Invalid Unit');
        }
    });

    it('given undefined as unit type and two objects when compare should throw error', () => {
        try {
            undefinedUnitType1 = new unitManipulator(1, undefined);
            undefinedUnitType2 = new unitManipulator(1, undefined);
            new unitManipulator().compare(undefinedUnitType1, undefinedUnitType2);
        } catch (e) {
            assert.equal(e.message, 'Invalid Unit');
        }
    });
});

describe("tests for addition of length units",()=>{
    it('2 inch added with 2 inch should return 4 inch',()=>{
        twoInch1=new unitManipulator(2,unit.lengthUnit.INCH);
        twoInch2=new unitManipulator(2,unit.lengthUnit.INCH);
        assert.equal(new unitManipulator().add(twoInch1,twoInch2),4);
    });

    it('2 inch added with 2 inch should return 4 inch',()=>{
        oneFeet=new unitManipulator(1,unit.lengthUnit.FEET);
        twoInch=new unitManipulator(2,unit.lengthUnit.INCH);
        assert.equal(new unitManipulator().add(oneFeet,twoInch),14);
    });

    it('1 feet added with 1 feet should return 24 inch',()=>{
        oneFeet1=new unitManipulator(1,unit.lengthUnit.FEET);
        oneFeet2=new unitManipulator(1,unit.lengthUnit.FEET);
        assert.equal(new unitManipulator().add(oneFeet1,oneFeet2),24);
    })

    it('2 inch added with 2.5 centimeter should return 3 inch',()=>{
        twoInch=new unitManipulator(2,unit.lengthUnit.INCH);
        twoPointFiveCentimeter=new unitManipulator(2.5,unit.lengthUnit.CENTIMETER);
        assert.equal(Math.round(new unitManipulator().add(twoInch,twoPointFiveCentimeter)),3);
    })
});

describe("tests for addition of volume units",()=>{
    it('1 gallon added with 3.78 liter should return 7.56 litre',()=>{
        oneGallon=new unitManipulator(1,unit.volumeUnit.GALLON);
        threePtSevenEightLitre=new unitManipulator(3.78,unit.volumeUnit.LITRE);
        assert.equal(new unitManipulator().add(oneGallon,threePtSevenEightLitre),7.56);
    });

    it('1 liter added with 1000 milillitre should return 2 litre',()=>{
        oneLitre=new unitManipulator(1,unit.volumeUnit.LITRE);
        thousandMilillitre=new unitManipulator(1000,unit.volumeUnit.MILILITIRE);
        assert.equal(new unitManipulator().add(oneLitre,thousandMilillitre),2);
    });
});

describe("tests for comparision of weight units",()=>{
    it('given 1 kilogram and 1000 gram when compare should return true',()=>{
        oneKillogram=new unitManipulator(1,unit.weightUnit.KILOGRAM);
        thousandGram=new unitManipulator(1000,unit.weightUnit.GRAM);
        assert.equal(new unitManipulator().compare(oneKillogram,thousandGram),true);
    });

    it('given 1 tonne and 1000 kilogram when compare should return true',()=>{
        oneTonne=new unitManipulator(1,unit.weightUnit.TONNE);
        thousandKilogram=new unitManipulator(1000,unit.weightUnit.KILOGRAM);
        assert.equal(new unitManipulator().compare(oneTonne,thousandKilogram),true);
    });
});


describe("tests for addition of weight units",()=>{
    it('1 tonne added with 1000 gram should return 1001 kilogram',()=>{
        oneTonne=new unitManipulator(1,unit.weightUnit.TONNE);
        thousandGram=new unitManipulator(1000,unit.weightUnit.GRAM);
        assert.equal(new unitManipulator().add(oneTonne,thousandGram),1001);
    });
});

describe("tests for addition method",()=>{
    it('null added with null should return throw error',()=>{
        try{
            new unitManipulator().add(null,null);
        }catch(e){
            assert.equal(e.message,"Invalid Unit");
        }
    });
});