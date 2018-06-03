var mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/testaroo");


before(function(done){
    //creating a connection
    mongoose.connection.once('open', function(){
        console.log('Connected to mongodb');
        done();
    }).on('error', function(error){
        console.log('connection error', error );
    });
})

//dropping a collection
beforeEach(function(done){
    mongoose.connection.collections.mariochars.drop(function(){
        done();
    })
})