const assert = require('assert');
const MarioChar = require('../models/mariochar');

//Describe test
describe('updating records', function(){
    var char1;
    beforeEach(function(done){
        char1 = new MarioChar({
            name: 'Mario',weight: 50
        });
        char1.save().then(function(){
            assert(char1.isNew === false);
            done();
        })
    })
    //create test
    it('updates one record in database', function(done){
        MarioChar.findOneAndUpdate({name: 'Mario'}, {name: 'Luigi'}).then(function(){
            MarioChar.findOne({_id: char1._id}).then(function(result){
                assert(result.name === 'Luigi');
                done();
            })
            
        })
    })

    it('increments weight by 1', function(done){
        MarioChar.update({}, {$inc: {weight: 1}}).then(function(){
            MarioChar.findOne({name: 'Mario'}).then(function(result){
                assert(result.weight === 51);
                done();
            })
            
        })
            
      
    })
})