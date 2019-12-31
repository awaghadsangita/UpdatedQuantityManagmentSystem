class UnitManipulator{
    constructor(unitValue,unitType){
        this.unitValue=unitValue;
        this.unitType=unitType;
    }

    unitConversion(){
        return this.unitValue*this.unitType;
    }
}
module.exports=UnitManipulator;