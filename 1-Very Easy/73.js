

//title: A Simple Task

//tags: math,numbers

//url: https://edabit.com/challenge/rSEX5xL3H3yYj6HLS

//Description:
//Mubashir needs your help in a simple task.
//Create a function that takes a number n and return its decimal part.
//Examples
//decimalPart(1.2) ➞ 0.2
//
//decimalPart(-3.73) ➞ 0.73
//
//decimalPart(10) ➞ 0
//Notes
//Don't forget to return the result.
//If you get stuck on a challenge, find help in the Resources tab.
//If you're really stuck, unlock solutions in the Solutions tab.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//describe("partDecimal", function() {
//  var mubashirEquals = function(actual, expected, msg){
//    var inrange = Math.abs((actual - expected)) <= 1e-7;
//    Test.expect(inrange,
//      msg || "Expected value near " + expected.toExponential(13) +
//             ", but got " + actual.toExponential(13)
//    );
//  }
//  it("returns decimal part from 10 as 0", function() {
//    mubashirEquals(decimalPart(10), 0);
//  });
//​
//  it("returns decimal part from -1.2 as 0.2", function() {
//    mubashirEquals(decimalPart(-1.2), 0.2);
//  });
//​
//  it("returns decimal part from 4.5 as 0.5", function() {
//    mubashirEquals(decimalPart(4.5), 0.5);
//  });
//    it("returns decimal part", function() {
//    mubashirEquals(decimalPart(85824.5254243), 0.5254243);
//  });
//    it("returns decimal part", function() {
//    mubashirEquals(decimalPart(122.111111111), 0.111111111);
//  });

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: The Modulus Operator Function

//tags: functional_programming,math,numbers

//url: https://edabit.com/challenge/ZrACgdprYx7YTTP7d

//Description:
//Create a function that will work as the modulus operator % without using the modulus operator. The modulus operator is a way to determine the remainder of a division operation. Instead of returning the result of the division, the modulo operation returns the whole number remainder.
//Examples
//mod(5, 2) ➞ 1
//
//mod(218, 5) ➞ 3
//
//mod(6, 3) ➞ 0
//Notes
//Don't use the % operator to return the results.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(mod(0, 3), 0)
//Test.assertEquals(mod(1, 3), 1)
//Test.assertEquals(mod(5, 3), 2)
//Test.assertEquals(mod(4, 5), 4)
//Test.assertEquals(mod(218, 5), 3)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Burglary Series (11): Say What

//tags: arrays,loops,objects,strings

//url: https://edabit.com/challenge/7hrjegxToTSF4zAoM

//Description:
//The insurance guy calls again. Apparently, they were informed by your spouse that some items were not stolen at all and you failed to mention this detail to them. This is a fraud attempt! You freeze and mumble something unintelligible. Find out what you said.
//Given an object, return a string that concatenates all the values and adds the 2nd key at the end. Make sure you keep an empty space between them but not at the beginning or end of the string. Look at the examples for a clearer picture.
//Examples
//{ 1: "Mommy", 2: "please", 3: "help" } ➞ "Mommy please help please"
//
//{ 1: "Me", 2: "innocent", 3: "is" } ➞ "Me innocent is innocent"
//
//{ 1: "Must", 2: "lawyer", 3: "call" } ➞ "Must lawyer call lawyer"
//Notes
//The keys will always be 1: 2: 3: in this order. Don't mistake keys with indexes.
//I'm rating the challenge very easy because it can be hardcoded but try to do it dynamically, that is, imagine tomorrow you receive an object with 4 keys instead, your function would still work.
//Check the Resources for tips if needed.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//const random = Test.randomToken()
//const obj = { 1: "Mommy", 2: "please", 3: "help" }
//const obj2 = { 1: random, 2: "innocent", 3: "is" }
//Test.assertEquals(sayWhat(obj), "Mommy please help please")
//Test.assertEquals(sayWhat(obj2), `${obj2[1]} innocent is innocent`)

