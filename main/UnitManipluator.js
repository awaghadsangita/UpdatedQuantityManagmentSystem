class UnitManipulator{
    constructor(unitValue,unitType){
        this.unitValue=unitValue;
        this.unitType=unitType;
    }

    compare(unitOne,unitTwo){
        if(unitOne.unitType===null||unitTwo.unitType===null)
            throw new Error('Invalid Unit Type');
                
        if(unitOne.unitType.name==unitTwo.unitType.name)
            return unitOne.unitValue*unitOne.unitType.value==unitTwo.unitValue*unitTwo.unitType.value;
            
        throw new Error('Invalid Unit Type');
    }

    equal(unitOne,unitTwo){
        if(unitOne===null || unitTwo===null){
            return false;
        }
        if(unitOne===unitTwo||(unitOne.unitValue==unitTwo.unitValue && typeof unitOne===typeof unitTwo && unitOne.unitType==unitTwo.unitType)){
            return true;
        }
        return false;
    }
}
module.exports=UnitManipulator;