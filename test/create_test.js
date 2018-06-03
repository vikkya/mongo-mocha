const assert = require('assert');
const MarioChar = require('../models/mariochar');

//Describe test
describe('Saving data', function(){
    //create test
    it('saving to database', function(done){
        var char1 = new MarioChar({
            name: 'Mario'
        });
        char1.save().then(function(){
            assert(char1.isNew === false);
            done();
        })
    })
})