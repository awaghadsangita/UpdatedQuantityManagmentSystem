class UnitManipulator{
    constructor(unitValue,unitType){
        this.unitValue=unitValue;
        this.unitType=unitType;
    }

    compare(unitOne,unitTwo){
        if(typeof unitOne.unitType==typeof unitTwo.unitType)
            return unitOne.unitValue*unitOne.unitType==unitTwo.unitValue*unitTwo.unitType;
        
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