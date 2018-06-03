const assert = require('assert');
const mongoose = require('mongoose');
const Author = require('../models/author');

describe('nesting records', function(){
beforeEach(function(done){
    mongoose.connection.collections.authors.drop(function(){
        done();
    })
})
    it('Create a author with sub details', function(done){
        var pat = new Author({
            name: 'Lemony Snicket',
            books: [
                {title: 'The Reptile Room', pages: 190},
                {title: 'The bad Beginning', pages: 180}]
        })
        pat.save().then(function(){
            Author.findOne({name: 'Lemony Snicket'}).then(function(result){
                assert(result.books.length === 2)
                done();
            })
        })
    })

    it('adding a new book to records', function(done){
        var pat = new Author({
            name: 'Lemony Snicket',
            books: [
                {title: 'The Reptile Room', pages: 190},
                {title: 'The bad Beginning', pages: 180}]
        })
        pat.save().then(function(){
            Author.findOne({name: 'Lemony Snicket'}).then(function(result){
               //add book
               result.books.push({title: 'The Wild Wind', pages: 180});
               result.save().then(function(){
                   Author.findOne({name: 'Lemony Snicket'}).then(function(res){
                       assert(res.books.length === 3)
                       done();
                   })
               })
            })
        })
    })
})