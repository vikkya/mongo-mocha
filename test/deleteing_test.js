const assert = require('assert');
const MarioChar = require('../models/mariochar');

//Describe test
describe('deleting records', function(){
    var char1;
    beforeEach(function(done){
        char1 = new MarioChar({
            name: 'Mario'
        });
        char1.save().then(function(){
            assert(char1.isNew === false);
            done();
        })
    })
    //create test
    it('deletes one record in database', function(){
        MarioChar.findOneAndRemove({name: 'Mario'}).then(function(){
            MarioChar.findOne({name: 'Mario'}).then(function(result){
                assert(result === null)
                
            })
        })
    })
})