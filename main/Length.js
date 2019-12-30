class Length{
    constructor(value){
        this.value=value;
    }
    
    equalality(thatObj){
        if(this===thatObj){
            return true;
        }
        if(thatObj==null){
            return false;
        }
        if(this.value==thatObj.value){
            return true;
        }
        
    }

}
module.exports=Length;