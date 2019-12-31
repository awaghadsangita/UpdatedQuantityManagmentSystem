let assert=require('assert');
let volume=require('../main/Volume');

describe('tests for volume conversion',()=>{
    it('given 1 gallon should return 3.78 litres',()=>{
        let oneGallon=new volume.Volume(1,volume.volumeUnit.GALLON).unitConversion();
        assert.equal(3.78,oneGallon);
    });

    it('given 1 litre should return 1000 ml',()=>{
        let oneLitre=new volume.Volume(1,volume.volumeUnit.LITRE).unitConversion();
        let thousandMl=new volume.Volume(1000,volume.volumeUnit.MILILITIRE).unitConversion();
        assert.equal(thousandMl,oneLitre);
    })

});