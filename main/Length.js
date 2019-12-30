class Length{
    constructor(value){
        this.value=value;
    }
    
    equalality(thatObj){
        if(this.value==thatObj.value){
            return true;
        }
    }

}
module.exports=Length;