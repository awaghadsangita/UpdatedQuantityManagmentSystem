let assert = require('assert');
let unit = require('../main/Unit');
let UnitManipulator = require('../main/UnitManipluator');

describe('tests for length conversion', () => {
    it('given 1 feet compare 1 feet should true', () => {
        oneFeet = new UnitManipulator(1, unit.lengthUnit.FEET);
        anotherOneFeet = new UnitManipulator(1, unit.lengthUnit.FEET);
        assert.equal(new UnitManipulator().compare(oneFeet, anotherOneFeet), true);
    });

    it('given 1 feet and 12 inch when compare should return true', () => {
        oneFeet = new UnitManipulator(1, unit.lengthUnit.FEET);
        twelveInch = new UnitManipulator(12, unit.lengthUnit.INCH);
        assert.equal(new UnitManipulator().compare(twelveInch, oneFeet), true);
    })

    it('given 1 feet and 1 inch when compare should return false', () => {
        oneFeet = new UnitManipulator(1, unit.lengthUnit.FEET);
        oneInch = new UnitManipulator(1, unit.lengthUnit.INCH);
        assert.equal(new UnitManipulator().compare(oneFeet, oneInch), false);
    })

    it('given 1 inch and 1 feet when compare should return false', () => {
        oneInch = new UnitManipulator(1, unit.lengthUnit.INCH);
        oneFeet = new UnitManipulator(1, unit.lengthUnit.FEET);
        assert.equal(new UnitManipulator().compare(oneInch, oneFeet), false);
    })

    it('given 12 inch and 1 feet when compare should return false', () => {
        twelveInch = new UnitManipulator(12, unit.lengthUnit.INCH);
        oneFeet = new UnitManipulator(1, unit.lengthUnit.FEET);
        assert.equal(new UnitManipulator().compare(twelveInch, oneFeet), true);
    })

    it('given 3 feet and 1 yard when compare should return true', () => {
        threeFeet = new UnitManipulator(3, unit.lengthUnit.FEET);
        oneYard = new UnitManipulator(1, unit.lengthUnit.YARD);
        assert.equal(new UnitManipulator().compare(oneYard, threeFeet), true);
    })

    it('given 1 feet and 1 yard when compare should return true ', () => {
        oneFeet = new UnitManipulator(1, unit.lengthUnit.FEET);
        oneYard = new UnitManipulator(1, unit.lengthUnit.YARD);
        assert.notEqual(new UnitManipulator().compare(oneYard, oneFeet), true);
    })

    it('given 1 inch and 1 yard when compare should return true', () => {
        oneInch = new UnitManipulator(1, unit.lengthUnit.INCH);
        oneYard = new UnitManipulator(1, unit.lengthUnit.YARD);
        assert.notEqual(new UnitManipulator().compare(oneYard, oneInch), true);
    })

    it('given 1 yard and 36 inch when compare should return true', () => {
        oneYard = new UnitManipulator(1, unit.lengthUnit.YARD);
        thirtySixInch = new UnitManipulator(36, unit.lengthUnit.INCH);
        assert.equal(new UnitManipulator().compare(thirtySixInch, oneYard), true);
    })

    it('given 1 yard and 3 feet when compare should return true', () => {
        oneYard = new UnitManipulator(1, unit.lengthUnit.YARD);
        threeFeet = new UnitManipulator(3, unit.lengthUnit.FEET);
        assert.equal(new UnitManipulator().compare(threeFeet, oneYard), true);
    })
});

describe('tests for volume conversion', () => {
    it('given 1 gallon and 3.78 litres when compare should return true', () => {
        let oneGallon = new UnitManipulator(1, unit.volumeUnit.GALLON);
        let threePtSevenEightLitre = new UnitManipulator(3.78, unit.volumeUnit.LITRE)
        assert.equal(new UnitManipulator().compare(oneGallon, threePtSevenEightLitre), true);
    });

    it('given 1 litre and 1000 ml when compare should return true', () => {
        let oneLitre = new UnitManipulator(1, unit.volumeUnit.LITRE);
        let thousandMl = new UnitManipulator(1000, unit.volumeUnit.MILILITIRE);
        assert.equal(new UnitManipulator().compare(thousandMl, oneLitre), true);
    })
});

describe('test for comparision', () => {
    it('given 1 gallon and 1 centimeter when compare should throw error', () => {
        try {
            oneGallon = new UnitManipulator(1, unit.volumeUnit.GALLON);
            oneCentimer = new UnitManipulator(1, unit.lengthUnit.CENTIMETER);
            new UnitManipulator().compare(oneGallon, oneCentimer);
        } catch (e) {
            assert.equal(e.message, 'Invalid Unit Type');
        }
    });

    it('given null as unit type and two objects when compare should throw error', () => {
        try {
            nullUnitType1 = new UnitManipulator(1, null);
            nullUnitType2 = new UnitManipulator(1, null);
            new UnitManipulator().compare(nullUnitType1, nullUnitType2);
        } catch (e) {
            assert.equal(e.message, 'Invalid Unit');
        }
    });

    it('given undefined as unit type and two objects when compare should throw error', () => {
        try {
            undefinedUnitType1 = new UnitManipulator(1, undefined);
            undefinedUnitType2 = new UnitManipulator(1, undefined);
            new UnitManipulator().compare(undefinedUnitType1, undefinedUnitType2);
        } catch (e) {
            assert.equal(e.message, 'Invalid Unit');
        }
    });

    it('given null and null when compare should return throw error', () => {
        try {
            new UnitManipulator().compare(null, null);
        } catch (e) {
            assert.equal(e.message, "Invalid Unit");
        }
    });
});

describe("tests for addition of length units", () => {
    it('2 inch added with 2 inch should return 4 inch', () => {
        twoInch1 = new UnitManipulator(2, unit.lengthUnit.INCH);
        twoInch2 = new UnitManipulator(2, unit.lengthUnit.INCH);
        assert.equal(new UnitManipulator().add(twoInch1, twoInch2), 4);
    });

    it('2 inch added with 2 inch should return 4 inch', () => {
        oneFeet = new UnitManipulator(1, unit.lengthUnit.FEET);
        twoInch = new UnitManipulator(2, unit.lengthUnit.INCH);
        assert.equal(new UnitManipulator().add(oneFeet, twoInch), 14);
    });

    it('1 feet added with 1 feet should return 24 inch', () => {
        oneFeet1 = new UnitManipulator(1, unit.lengthUnit.FEET);
        oneFeet2 = new UnitManipulator(1, unit.lengthUnit.FEET);
        assert.equal(new UnitManipulator().add(oneFeet1, oneFeet2), 24);
    })

    it('2 inch added with 2.5 centimeter should return 3 inch', () => {
        twoInch = new UnitManipulator(2, unit.lengthUnit.INCH);
        twoPointFiveCentimeter = new UnitManipulator(2.5, unit.lengthUnit.CENTIMETER);
        assert.equal(Math.round(new UnitManipulator().add(twoInch, twoPointFiveCentimeter)), 3);
    })
});

describe("tests for addition of volume units", () => {
    it('1 gallon added with 3.78 liter should return 7.56 litre', () => {
        oneGallon = new UnitManipulator(1, unit.volumeUnit.GALLON);
        threePtSevenEightLitre = new UnitManipulator(3.78, unit.volumeUnit.LITRE);
        assert.equal(new UnitManipulator().add(oneGallon, threePtSevenEightLitre), 7.56);
    });

    it('1 liter added with 1000 milillitre should return 2 litre', () => {
        oneLitre = new UnitManipulator(1, unit.volumeUnit.LITRE);
        thousandMilillitre = new UnitManipulator(1000, unit.volumeUnit.MILILITIRE);
        assert.equal(new UnitManipulator().add(oneLitre, thousandMilillitre), 2);
    });
});

describe("tests for comparision of weight units", () => {
    it('given 1 kilogram and 1000 gram when compare should return true', () => {
        oneKillogram = new UnitManipulator(1, unit.weightUnit.KILOGRAM);
        thousandGram = new UnitManipulator(1000, unit.weightUnit.GRAM);
        assert.equal(new UnitManipulator().compare(oneKillogram, thousandGram), true);
    });

    it('given 1 tonne and 1000 kilogram when compare should return true', () => {
        oneTonne = new UnitManipulator(1, unit.weightUnit.TONNE);
        thousandKilogram = new UnitManipulator(1000, unit.weightUnit.KILOGRAM);
        assert.equal(new UnitManipulator().compare(oneTonne, thousandKilogram), true);
    });
});


describe("tests for addition of weight units", () => {
    it('1 tonne added with 1000 gram should return 1001 kilogram', () => {
        oneTonne = new UnitManipulator(1, unit.weightUnit.TONNE);
        thousandGram = new UnitManipulator(1000, unit.weightUnit.GRAM);
        assert.equal(new UnitManipulator().add(oneTonne, thousandGram), 1001);
    });
});

describe("tests for addition method", () => {
    it('null added with null should return throw error', () => {
        try {
            new UnitManipulator().add(null, null);
        } catch (e) {
            assert.equal(e.message, "Invalid Unit");
        }
    });

    it('undefined added with undefined should return throw error', () => {
        try {
            new UnitManipulator().add(undefined, undefined);
        } catch (e) {
            assert.equal(e.message, "Invalid Unit");
        }
    });

    it('given undefined as unit type ,two objects when added should throw error', () => {
        try {
            undefinedUnitType1 = new UnitManipulator(1, undefined);
            undefinedUnitType2 = new UnitManipulator(1, undefined);
            new UnitManipulator().add(undefinedUnitType1, undefinedUnitType2);
        } catch (e) {
            assert.equal(e.message, 'Invalid Unit');
        }
    });

    it('given null as unit type,two objects when added should throw error', () => {
        try {
            nullUnitType1 = new UnitManipulator(1, null);
            nullUnitType2 = new UnitManipulator(1, null);
            new UnitManipulator().add(nullUnitType1, nullUnitType2);
        } catch (e) {
            assert.equal(e.message, 'Invalid Unit');
        }
    });
});

describe("tests for comparision of temperature units", () => {
    it('given 212 Fahrenheit and 100 Celcius when compare should return true', () => {
        fahrenheit212 = new UnitManipulator(212, unit.temparatureUnit.FAHRENHEIT);
        hundredCelcius = new UnitManipulator(100, unit.temparatureUnit.CELSIUS);
        assert.equal(new UnitManipulator().compare(fahrenheit212, hundredCelcius), true);
    });
});