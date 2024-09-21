

//title: Solving Exponential Equations With Logarithms

//tags: algorithms,math,numbers

//url: https://edabit.com/challenge/PXau3Fzk8GXgF6oRQ

//Description:
//Create a function that takes a number a and finds the missing exponent x so that a when raised to the power of x is equal to b.
//Examples
//solveForExp(4, 1024) ➞ 5
//
//solveForExp(2, 1024) ➞ 10
//
//solveForExp(9, 3486784401) ➞ 10
//Notes
//a is raised to the power of what in order to equal b?

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(solveForExp(4, 1024), 5)
//Test.assertEquals(solveForExp(2, 1024), 10)
//Test.assertEquals(solveForExp(9, 3486784401), 10)
//Test.assertEquals(solveForExp(4, 4294967296), 16)
//Test.assertEquals(solveForExp(8, 134217728), 9)
//Test.assertEquals(solveForExp(19, 47045881), 6)
//Test.assertEquals(solveForExp(10, 100000000), 8)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Online Shopping

//tags: objects,validation

//url: https://edabit.com/challenge/5qYYauQwYwxz3nd9R

//Description:
//Create a function that determines whether a shopping order is eligible for free shipping. An order is eligible for free shipping if the total cost of items purchased exceeds $50.00.
//Examples
//freeShipping({ "Shampoo": 5.99, "Rubber Ducks": 15.99 }) ➞ false
//
//freeShipping({ "Flatscreen TV": 399.99 }) ➞ true
//
//freeShipping({ "Monopoly": 11.99, "Secret Hitler": 35.99, "Bananagrams": 13.99 }) ➞ true
//Notes
//Ignore tax or additional fees when calculating the total order cost.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(freeShipping({'Shampoo' : 5.99, 'Rubber Ducks': 15.99}), false)
//Test.assertEquals(freeShipping({'Flatscreen TV': 399.99}), true)
//Test.assertEquals(freeShipping({'Monopoly': 11.99, 'Secret Hitler': 35.99, 'Bananagrams': 13.99}), true)
//Test.assertEquals(freeShipping({'Scrabble': 12.32, 'Jenga': 5.55, 'Clue': 20.00}), false)
//Test.assertEquals(freeShipping({'Elephant Plushie': 40.55, 'Octopus Plushie': 20.33, 'Spongebob Plushie': 20.00}), true)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Is the Word an Isogram?

//tags: loops,strings,validation

//url: https://edabit.com/challenge/rJPgai5r5XdXeQmLg

//Description:
//An isogram is a word that has no duplicate letters. Create a function that takes a string and returns either true or false depending on whether or not it's an "isogram".
//Examples
//isIsogram("Algorism") ➞ true
//
//isIsogram("PasSword") ➞ false
//// Not case sensitive.
//
//isIsogram("Consecutive") ➞ false
//Notes
//Ignore letter case (should not be case sensitive).
//All test cases contain valid one word strings.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(isIsogram("Algorism"), true)
//Test.assertEquals(isIsogram("PasSword"), false)
//Test.assertEquals(isIsogram("Dermatoglyphics"), true)
//Test.assertEquals(isIsogram("Cat"), true)
//Test.assertEquals(isIsogram("Filmography"), true)
//Test.assertEquals(isIsogram("Consecutive"), false)
//Test.assertEquals(isIsogram("Bankruptcies"), true)
//Test.assertEquals(isIsogram("Unforgivable"), true)
//Test.assertEquals(isIsogram("Unpredictably"), true)
//Test.assertEquals(isIsogram("Moose"), false)

