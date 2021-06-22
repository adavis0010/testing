const { expect, test, describe } = require('@jest/globals');
const { returnTwo, greeting, add } = require('./functions');

test('2 function should return 2', function(){
    expect(returnTwo()).toEqual(2)
});


describe('greeting tests', function(){

    test('greeting should return James',function(){
        expect(greeting('James')).toBe('hello James')
    })
    test('greeting should return Jill',function(){
        expect(greeting('Jill')).toBe('hello Jill')
    })
});



describe('operations', function(num1, num2){

    test('one and two are three',function(){
        expect(add(1, 2)).toBe(3)
    })
    test('five and nine are 14',function(){
        expect(add(5, 9)).toBe(14)
    })
})

// Create a test for add:

// This test should expect add(1, 2) to equal 3.

// This test should expect add(5, 9) to equal 14.