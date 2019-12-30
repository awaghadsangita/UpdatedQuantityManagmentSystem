class Length{
    constructor(value){
        this.value=value;
    }
    
    equalality(thatObj){
        if(thatObj===null){
            return false;
        }
        if(this===thatObj||(this.value==thatObj.value && typeof thatObj===typeof new Length())){
            return true;
        }
        return false;
    }

}
module.exports=Length;