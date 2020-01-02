const lengthUnit={
        FEET:{value:12,type:'length'},
        INCH:{value:1,type:'length'},
        YARD:{value:36,type:'length'},
        CENTIMETER:{value:0.393701,type:'length'}
       }
const volumeUnit={
        GALLON:{value:3.78,type:'volume'},
        MILILITIRE:{value:0.001,type:'volume'},
        LITRE:{value:1,type:'volume'}
    }
const weightUnit={
    KILOGRAM:{value:1,type:'weight'},
    GRAM:{value:0.001,type:'weight'},
    TONNE:{value:1000,type:'weight'}
}
const temparatureUnit={
    FAHRENHEIT:{value:'fahrenheit'},
    CELSIUS:{value:'celsius'}
}
module.exports={
    lengthUnit,
    volumeUnit,
    weightUnit,
    temparatureUnit
};