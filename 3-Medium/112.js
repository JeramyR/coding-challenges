

//title: ES6: Destructuring Objects VI

//tags: bugs,formatting,language_fundamentals,objects

//url: https://edabit.com/challenge/7yCojzi2ye2Fn6iQT

//Description:
//function shirtSize({size = "big"}) {
//  return size
//}
//
//shirtSize()  // error: Cannot destructure property "size" of "undefined" or "null"
//The preceding code produces an error because no object was passed to the function. Fix the function to return the default size, even if nothing is passed to the function. Don't remove the {size = "big"} object in the parameter and don't change the return statement.
//Example
//shirtSize( ) ➞ "big"
//Notes
//If you get stuck the answer is in one of the yellow notes on the MDN docs page (link in the Resources tab).

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//eval(str)
//​
//const result = shirtSize()
//​
//const code = str.slice(str.lastIndexOf("return"), str.lastIndexOf('}'))
//const param = str.slice(0, 26) 
//​
//const validParams = () => {
//  return /\{.*size/.test(param) ? "valid" : "not valid" 
//}
//​
//const validReturn = () => {
//  return code.includes("size")  ? "valid" : "not valid" 
//}
//​
//const doubleReturns = () => {
//  return str.match(/return/g).length >= 2 ?  "not valid" : "valid" 
//} 
//​
//Test.assertEquals(doubleReturns(), "valid", 'Multiple returns are not allowed.')
//Test.assertEquals(validParams(), "valid", 'Do not remove or manipulate the object {size = "big"} inside of the parameters.')
//Test.assertEquals(validReturn(), "valid", "Changing the return statement is not allowed.")
//Test.assertEquals(result, "big")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Bundle Up!

//tags: loops,math,strings

//url: https://edabit.com/challenge/saKcrsreCGXD28hgE

//Description:
//Let's assume for the purposes of this challenge that for every layer of fabric you wear when it's cold outside (coats, cardigans, etc), the temperature increases by a tenth of the total.
//Given n number of layers and a given temperature, return the temperature inside of all those warm fuzzy layers. Round to the nearest tenth of a degree.
//calcBundledTemp(2, "10*C") ➞ "12.1*C"
//// 10 * 1.1 = 11
//// 11 * 1.1 = 12.1
//Examples
//calcBundledTemp(1, "2*C") ➞ "2.2*C"
//
//calcBundledTemp(4, "6*C") ➞ "8.8*C"
//
//calcBundledTemp(20, "4*C") ➞ "26.9*C"
//Notes
//The temperature will be given in Celsius and as a string.
//Note that the degrees sign is given as an asterisk.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(calcBundledTemp(2, "10*C"), "12.1*C")
//Test.assertEquals(calcBundledTemp(1, "2*C"), "2.2*C")
//Test.assertEquals(calcBundledTemp(4, "6*C"), "8.8*C")
//Test.assertEquals(calcBundledTemp(20, "4*C"), "26.9*C")
//Test.assertEquals(calcBundledTemp(5, "20*C"), "32.2*C")
//Test.assertEquals(calcBundledTemp(20, "3*C"), "20.2*C")
//Test.assertEquals(calcBundledTemp(5, "18*C"), "29.0*C")
//Test.assertEquals(calcBundledTemp(4, "5*C"), "7.3*C")
//Test.assertEquals(calcBundledTemp(16, "17*C"), "78.1*C")
//Test.assertEquals(calcBundledTemp(15, "2*C"), "8.4*C")
//Test.assertEquals(calcBundledTemp(14, "10*C"), "38.0*C")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Guess the Sequence

//tags: algorithms,logic,math,numbers

//url: https://edabit.com/challenge/vQT39GoCCQjKFHhrB

//Description:
//Mubashir is trying to figure out the corresponding quadratic formula for the following quadratic sequence of numbers:
//N	Result
//1	90
//2	240
//3	450
//4	720
//5	1050
//If you can figure this out, then help him by creating a function that takes a number n and returns the nth number of this quadratic sequence.
//Examples
//guessSequence(1) ➞ 90
//
//guessSequence(2) ➞ 240
//
//guessSequence(3) ➞ 450
//Notes
//If you are not sure about how to find the formula of a quadratic sequence, check the Resources.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(guessSequence(1), 90)
//Test.assertEquals(guessSequence(2), 240)
//Test.assertEquals(guessSequence(3), 450)
//Test.assertEquals(guessSequence(4), 720)
//Test.assertEquals(guessSequence(5), 1050)
//Test.assertEquals(guessSequence(6), 1440)
//Test.assertEquals(guessSequence(7), 1890)
//Test.assertEquals(guessSequence(8), 2400)
//Test.assertEquals(guessSequence(9), 2970)
//Test.assertEquals(guessSequence(10), 3600)
//Test.assertEquals(guessSequence(11), 4290)
//Test.assertEquals(guessSequence(12), 5040)
//Test.assertEquals(guessSequence(13), 5850)
//Test.assertEquals(guessSequence(14), 6720)
//Test.assertEquals(guessSequence(15), 7650)
//Test.assertEquals(guessSequence(16), 8640)
//Test.assertEquals(guessSequence(17), 9690)
//Test.assertEquals(guessSequence(18), 10800)
//Test.assertEquals(guessSequence(19), 11970)
//Test.assertEquals(guessSequence(20), 13200)
//Test.assertEquals(guessSequence(21), 14490)
//Test.assertEquals(guessSequence(22), 15840)
//Test.assertEquals(guessSequence(23), 17250)
//Test.assertEquals(guessSequence(24), 18720)
//Test.assertEquals(guessSequence(25), 20250)

