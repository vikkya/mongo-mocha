const assert = require('assert');
const MarioChar = require('../models/mariochar');

//Describe test
describe('finding database', function(){
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
    it('finding one record in database', function(done){
        MarioChar.findOne({name: 'Mario'}).then(function(result){
            assert(result.name === 'Mario');
            done();
        })
    })
// finding record by ID
    it('finding one record by ID in database', function(done){
        MarioChar.findOne({_id: char1._id}).then(function(result){
            assert(result._id.toString() === char1._id.toString());
            done();
        })
    })
})