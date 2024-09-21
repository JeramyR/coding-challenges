

//title: Microwave Buttons

//tags: math,numbers,validation

//url: https://edabit.com/challenge/goPXhZwywzpkZFx3A

//Description:
//In microwave ovens, when buttons are pressed from 0-9, it will add that number to the microwave oven timer (starting from the left). All microwave ovens have the functionality where you can hit a "+30" button and it will add 30 seconds to the timer to cook your food. If you want to heat something for 5 mins, you can hit the "+30" button 10 times instead of thinking if there are fewer button presses that can give you the same result.
//Create a function that takes an argument time and returns the shortest amount of button presses to set the given time on the microwave oven. The microwave oven timer always starts at 00:00.
//Buttons
//Buttons from "0-9"
//
//// It will add that number to the microwave oven timer (starting from the left).
//// If the number "5" is pressed followed by "0" twice, it will put 05:00 on the timer.
//// If the number "3" is pressed followed by "0", it will put 00:30 on the timer.
//
//Button "+30", which adds 30 seconds to the current timer.
//
//// If the number "+30" is pressed twice, it will put 00:60 on the timer.
//
//A "Start" button which you have to finally press to start the microwave oven.
//
//// Remember to press this!
//Examples
//microwaveButtons("00:30") ➞ 2
//// "+30" to put 30 seconds on the timer.
//// "Start" button to start the oven.
//
//microwaveButtons("00:70") ➞ 3
//// "7" followed by "0" to put 70 seconds on the timer.
//// "Start" button to start the oven.
//
//microwaveButtons("00:00") ➞ 1
//// "Start" button to start the oven.
//Notes
//Input may not always be what you expect (e.g. you can put in 00:70, which is valid).
//No exception handling is required for this challenge.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//function getRandomInt(max) {
//  return Math.floor(Math.random() * Math.floor(max));
//}
//const chai = require("chai");
//const assert = chai.assert;
//describe("Solution", function() {
//  it("Passes Basic Tests", function() {
//    assert.strictEqual(microwaveButtons('00:30'), 2)
//    assert.strictEqual(microwaveButtons('01:00'), 3)
//    assert.strictEqual(microwaveButtons('00:60'), 3)
//    assert.strictEqual(microwaveButtons('00:20'), 3)
//    assert.strictEqual(microwaveButtons('00:10'), 3)
//    assert.strictEqual(microwaveButtons('00:70'), 3)
//    assert.strictEqual(microwaveButtons('10:00'), 5)
//    assert.strictEqual(microwaveButtons('00:00'), 1)
//  })
//  it("00:31", function() {
//    assert.strictEqual(microwaveButtons('00:31'), 3)
//  })
//  it("Passes Random Tests", function() {
//    var array = Array(100).fill(0)
//    for (var i of array) {
//      var random = [getRandomInt(10).toString() + getRandomInt(10).toString(), getRandomInt(10).toString() + getRandomInt(10).toString()]
//      assert.strictEqual(microwaveButtons(random.join(':')), microwaveButtonsModel(random.join(':')))
//    }

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: toString() Hooking

//tags: arrays,functional_programming,language_fundamentals

//url: https://edabit.com/challenge/P8eaoczqtnNAkm7Gs

//Description:
//You have one job and one job only, to ruin the day of any unsuspecting victim using the toString() function. Hook the String prototype toString() to instead return a string that is in reverse.
//Examples
//("Hello World!").toString() ➞ "!dlroW olleH"
//
//("My hooking function! :3").toString() ➞ "3: !noitcnuf gnikooh yM"
//
//("RaceCar").toString() ➞ "raCecaR"
//Notes
//Remember that this is an object!

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(("Hello World!").toString(), "!dlroW olleH")
//Test.assertEquals(("My hooking function! :3").toString(), "3: !noitcnuf gnikooh yM")
//Test.assertEquals(("RaceCar").toString(), "raCecaR")
//Test.assertEquals(("Level").toString(), "leveL")
//Test.assertEquals(("live").toString(), "evil")
//Test.assertEquals(("penut butter").toString(), "rettub tunep")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Turn That Frown Upside Down

//tags: formatting,regex,strings

//url: https://edabit.com/challenge/3HcuuwEyBAExktt6c

//Description:
//It is important to be happy! Therefore, you must create a function that takes a sentence containing sad faces and turn them into happy ones! This involves changing only the mouths.
//Sad face examples: :( 8( x( ;(
//Happy face examples: :) 8) x) ;)
//Make sure to only change the face if there are eyes before them, round(3.4) wouldn't become round)3.4) (for example).
//Examples
//makeHappy("My current mood: :(") ➞ "My current mood: :)"
//
//makeHappy("I was hungry 8(") ➞ "I was hungry 8)"
//
//makeHappy("print('x(')") ➞ "print('x)')"
//Notes
//Faces such as :((((((( are not included.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(makeHappy('My current mood: :('), 'My current mood: :)')
//Test.assertEquals(makeHappy('I was hungry 8('), 'I was hungry 8)')
//Test.assertEquals(makeHappy('print("x(")'), 'print("x)")')
//Test.assertEquals(makeHappy("I'm thirsty ;("), "I'm thirsty ;)")
//Test.assertEquals(makeHappy('(((:())))'), '(((:)))))')
//Test.assertEquals(makeHappy('I am :( :( 8( :)'), 'I am :) :) 8) :)')
//Test.assertEquals(makeHappy('l'), 'l')
//​
//// made by @Joshua Señoron

