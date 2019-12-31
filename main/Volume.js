const volumeUnit={
    GALLON:3.78,
    MILILITIRE:0.001,
    LITRE:1
}

class Volume{
    constructor(value,lengthUnit){
        this.unitValue=value;
        this.lengthUnitType=lengthUnit;
    }
    
    unitConversion(){
        return this.unitValue*this.lengthUnitType;
    }
}

module.exports={volumeUnit,Volume}