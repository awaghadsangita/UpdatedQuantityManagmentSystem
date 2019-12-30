const LengthUnit={
    FEET:12
}
class Length{
    constructor(value,lengthUnit){
        this.unitValue=value;
        this.lengthUnitType=lengthUnit;
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