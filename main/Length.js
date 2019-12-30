class Length{
    constructor(value){
        this.value=value;
    }
    
    equalality(thatObj){
        if(thatObj===null){
            return false;
        }
        if(this===thatObj||(this.value==thatObj.value && typeof this==typeof thatObj)){
            return true;
        }
        return false;
    }

}
module.exports=Length;