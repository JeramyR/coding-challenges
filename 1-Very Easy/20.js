

//title: Century Crisis

//tags: algorithms,loops,math

//url: https://edabit.com/challenge/DcmB9Ycm58FdkPe7k

//Description:
//Scientists have discovered that in four decades, the world will EXPLODE! It will also take three decades to make a spaceship to travel to a new planet that can hold the entire world population.
//You must calculate the number of people there will be in three decades from now.
//The variable population is the world population now.
//Assume that every month, someone gives birth to more people n.
//Return the number of people there will be when the spaceship is complete.
//Examples
//futurePeople(256, 2) ➞ 976
//
//futurePeople(3248, 6) ➞ 5408
//
//futurePeople(5240, 3) ➞ 6320
//Notes
//Humanity's fate lies in your calculation.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(futurePeople(256, 2), 976)
//Test.assertEquals(futurePeople(3248, 6), 5408)
//Test.assertEquals(futurePeople(5240, 3), 6320)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Format I: Template String

//tags: language_fundamentals,strings

//url: https://edabit.com/challenge/DCmM4Eo6GQfrJoKXc

//Description:
//Write a template string according to the following example:
//Example
//const a = "John";
//const b = "Joe";
//const c = "Jack";
//const template = "your template string" ➞ "Their names were:  John,  Joe  and  Jack."
//Tips
//A template string is a string that uses a Dollar sign and curly braces inside backticks ${} as a placeholder that can then be formatted:
//const name = John;
//`hello, my name is ${name}.` ➞ "hello, my name is John."
//You can put an expression inside the curly braces :
//const age = 12;
//`Hello, you are ${age < 18 ? 'young' : 'old'}.` ➞ "Hello, you are young."
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(format("John", "Joe", "Jack"), "Their names were: John, Joe and Jack.")
//Test.assertEquals(format("Peter", "Pin", "Pan"), "Their names were: Peter, Pin and Pan.")
//Test.assertEquals(format("E", "Da", "Bit"), "Their names were: E, Da and Bit.")
//Test.assertEquals(format("Bulbasaur", "Charmander", "Squirtle"), "Their names were: Bulbasaur, Charmander and Squirtle.")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Arrow Functions

//tags: closures,higher_order_functions,language_fundamentals,logic

//url: https://edabit.com/challenge/qcw8QBqa4amN2x4q4

//Description:
//In the Code tab you will find code that is missing a single character in order to pass the tests. However, your goal is to submit a function as minimalist as possible. Use the tips in the tips section below.
//Write five adder functions:
//add2(x) should return 2 + x.
//add3(x) should return 3 + x.
//add5(x) should return 5 + x.
//add7(x) should return 7 + x.
//add11(x) should return 11 + x.
//Tips
//Functions that consist only of a return can be written as a one-liner with an arrow function.
//For example, the code:
//function areSame(a, b) {
//    return a == b;
//}
//Can be simplified to:
//areSame = (a, b) => a == b;
//Bonus
//(a, b) => a == b is technically an anonymous function. However, it can be assigned to the identifier areSame and it can then be called using areSame().
//Notes
//This is an open series: there isn't a definite list of features for the challenges. Please, do not hesitate to leave your suggestions in the Comments.
//Readability is indeed a subjective concept. Let's discuss it! Feel free to leave your opinion in the Comments.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(add2(1), 3)
//Test.assertEquals(add2(9), 11)
//Test.assertEquals(add2(435), 437)
//​
//Test.assertEquals(add3(1), 4)
//Test.assertEquals(add3(9), 12)
//Test.assertEquals(add3(435), 438)
//​
//Test.assertEquals(add5(1), 6)
//Test.assertEquals(add5(9), 14)
//Test.assertEquals(add5(435), 440)
//​
//Test.assertEquals(add7(1), 8)
//Test.assertEquals(add7(9), 16)
//Test.assertEquals(add7(435), 442)
//​
//Test.assertEquals(add11(1), 12)
//Test.assertEquals(add11(9), 20)
//Test.assertEquals(add11(435), 446)

