

//title: Char-to-ASCII

//tags: algorithms,numbers,strings

//url: https://edabit.com/challenge/xPAPYC24EEpwzwQDy

//Description:
//Create a function that returns the ASCII value of the passed in character.
//Examples
//ctoa("A") ➞ 65
//
//ctoa("m") ➞ 109
//
//ctoa("[") ➞ 91
//
//ctoa("\") ➞ 92
//Notes
//Don't forget to return the result.
//If you get stuck on a challenge, find help in the Resources tab.
//If you're really stuck, unlock solutions in the Solutions tab.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(ctoa(' '), 32)
//Test.assertEquals(ctoa('A'), 65)
//Test.assertEquals(ctoa(']'), 93)
//Test.assertEquals(ctoa('^'), 94)
//Test.assertEquals(ctoa('c'), 99)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Burglary Series (14): Adjectives Total

//tags: arrays,language_fundamentals,objects

//url: https://edabit.com/challenge/NkMTBCxMkt4meHpa4

//Description:
//You call your spouse in anger and a "little" argument takes place. Count the total amount of insults used. Given an object of insults, return the total amount of insults used.
//Examples
//totalAmountAdjectives({ a: "moron" }) ➞ 1
//
//totalAmountAdjectives({ a: "idiot", b: "idiot", c: "idiot" }) ➞ 3
//
//totalAmountAdjectives({ a: "moron", b: "scumbag", c: "moron", d: "dirtbag" }) ➞ 4
//Notes
//The list will never be empty (no empty object).

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//const obj = { a: "moron" }
//const obj2 = { a: "moron", b: "scumbag", c: "moron", d: "dirtbag" } 
//const obj3 = {b: "scumbag", c: "moron", d: "dirtbag" } 
//let dynamic = {}
//const random = Test.randomNumber()
//let arr = new Array(random).fill(".")
//arr.forEach((item, i) => dynamic[i] = item)
//​
//Test.assertEquals(totalAmountAdjectives(obj), 1)
//Test.assertEquals(totalAmountAdjectives(obj2), 4)
//Test.assertEquals(totalAmountAdjectives(obj3), 3)
//Test.assertEquals(totalAmountAdjectives(dynamic), random)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: First Class, Second Class and Third Class Levers

//tags: arrays,conditions,objects,physics

//url: https://edabit.com/challenge/RxsaajpPai3CB9G9e

//Description:
//Levers are simple machines with a rigid beam and a fulcrum. From the picture below, you can see that there are 3-types of levers: first class, second class and third class.
//In a first class lever, the fulcrum is situated in the middle with the effort and the load being positioned opposite of each other.
//In a second class lever, the fulcrum is situated in the right with the effort on the left and the load in the middle.
//In a third class lever, the fulcrum is situated in the left with the effort being in the middle and the load being on the right.
//
//Given an array that contains the fulcrum "f", the effort "e", and the load "l", write a function that determines whether or not the array shows a first class lever, second class lever, or a third class lever.
//Examples
//determineLever(["e", "f", "l"]) ➞ "first class lever"
//
//determineLever(["e", "l", "f"]) ➞ "second class lever"
//
//determineLever(["f", "e", "l"]) ➞ "third class lever"
//Notes
//A pair of scissors is a first class lever, a nutcracker is a second class lever and a broom is a third class lever.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(determineLever(["e", "f", "l"]), "first class lever")
//Test.assertEquals(determineLever(["e", "l", "f"]), "second class lever")
//Test.assertEquals(determineLever(["f", "e", "l"]), "third class lever")
//​
//// Author: comecheckoutmycode

