class Length{
    constructor(value){
        this.value=value;
    }
    
    equalality(thatObj){
        if(thatObj==null){
            return false;
        }
        if(this.value==thatObj.value){
            return true;
        }
        
    }

}
module.exports=Length;