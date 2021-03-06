let unit = require('./Unit');
class UnitManipulator {
    constructor(unitValue, unitType) {
        this.unitValue = unitValue;
        this.unitType = unitType;
    }

    compare(unitOne, unitTwo) {
        if (unitOne == null 
            || unitTwo == null 
            || unitOne.unitType === null 
            || unitTwo.unitType === null 
            || unitOne.unitType === undefined 
            || unitTwo.unitType === undefined)
            throw new Error('Invalid Unit');

        if (unitOne.unitType == unit.temparatureUnit.FAHRENHEIT)
            return Math.round((unitOne.unitValue - 32) * (5 / 9)) == unitTwo.unitValue

        if (unitOne.unitType == unit.temparatureUnit.CELSIUS)
            return Math.round((unitOne.unitValue * (9 / 5)) + 32) == unitTwo.unitValue

        if (unitOne.unitType.type == unitTwo.unitType.type)
            return unitOne.unitValue * unitOne.unitType.value == unitTwo.unitValue * unitTwo.unitType.value;

        throw new Error('Invalid Unit Type');
    }

    add(unitOne, unitTwo) {
        if (unitOne == null 
            || unitTwo == null 
            || unitOne == undefined 
            || unitTwo == undefined 
            || unitOne.unitType === null 
            || unitTwo.unitType === null 
            || unitOne.unitType === undefined 
            || unitTwo.unitType === undefined 
            || unitOne.unitType.type != unitTwo.unitType.type)
            throw new Error('Invalid Unit');

        return (unitOne.unitValue * unitOne.unitType.value) + (unitTwo.unitValue * unitTwo.unitType.value);
    }

    equal(unitOne, unitTwo) {
        if (unitOne === null || unitTwo === null) {
            return false;
        }
        if (unitOne === unitTwo 
            || (unitOne.unitValue == unitTwo.unitValue 
                && typeof unitOne === typeof unitTwo 
                && unitOne.unitType == unitTwo.unitType)) {
            return true;
        }
        return false;
    }
}
module.exports = UnitManipulator;