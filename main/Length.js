const LengthUnit={
    FEET:12,
    INCH:1
}
class Length{
    constructor(value,lengthUnit){
        this.unitValue=value;
        this.lengthUnitType=lengthUnit;
    }
    FeetToInch(){
        return this.unitValue*this.lengthUnitType;
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