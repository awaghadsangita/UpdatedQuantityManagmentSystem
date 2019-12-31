const LengthUnit={
    FEET:12,
    INCH:1,
    YARD:36,
    CENTIMETER:2.54
}
class Length{
    constructor(value,lengthUnit){
        this.unitValue=value;
        this.lengthUnitType=lengthUnit;
    }
    unitConversion(){
        return this.unitValue*this.lengthUnitType;
    }

    add(thatUnit){
        return this.unitConversion()+thatUnit.unitConversion();
    }
    equalality(thatObj){
        if(thatObj===null){
            return false;
        }
        if(this===thatObj||(this.unitValue==thatObj.unitValue && typeof thatObj===typeof new Length() && this.lengthUnitType==thatObj.lengthUnitType)){
            return true;
        }
        return false;
    }
}
module.exports={Length,LengthUnit};