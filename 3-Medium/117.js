

//title: Hall Monitor

//tags: algorithms,loops,validation

//url: https://edabit.com/challenge/igaRcBWdqjik9oY7K

//Description:
//A floor plan is arranged as follows:
//Four rooms, which all lead into the hallway.
//It's impossible to move between rooms without first going into the hallway.
//
//Create a function which validates whether the path between rooms is possible. The hallway will be given as the letter 'H'.
//Examples
//possiblePath([1, "H", 2, "H", 3, "H", 4]) ➞ true
//
//possiblePath(["H", 3, "H"]) ➞ true
//
//possiblePath([1, 2, "H", 3]) ➞ false
//Notes
//A route may begin or end in a hallway.
//All inputs are either numbers 1-4, or the letter "H".
//No rooms will repeat.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(possiblePath([1, 'H', 2, 'H', 3, 'H', 4]), true)
//Test.assertEquals(possiblePath(['H', 3, 'H']), true)
//Test.assertEquals(possiblePath(['H']), true)
//Test.assertEquals(possiblePath([3]), true)
//Test.assertEquals(possiblePath([1, 2, 'H', 3]), false)
//Test.assertEquals(possiblePath(['H', 1, 3]), false)
//Test.assertEquals(possiblePath([2, 4, 'H']), false)
//Test.assertEquals(possiblePath([1, 'H', 1, 'H', 1, 'H']), true)
//Test.assertEquals(possiblePath([3, 'H', 2, 'H', 3, 'H', 1]), true)
//Test.assertEquals(possiblePath(['H', 2, 'H', 3, 4, 'H', 1, 'H', 2, 'H']), false)
//​
//// Author: Joshua Señoron

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Total Count of Numbers in a MultiDimensional Array

//tags: arrays,data_structures,language_fundamentals,recursion,regex

//url: https://edabit.com/challenge/6dC7GRf5SsbsNvYdk

//Description:
//Create a function that takes a multidimensional array and return the total count of numbers in that array.
//Examples
//countNumber([["", 17.2, 5, "edabit"]]) ➞ 2
//// 17.2 and 5.
//
//countNumber([[[[[2, 14]]], 2, 3, 4]]) ➞ 5
//// 2, 14, 2, 3 and 4.
//
//countNumber([["balkot"]]) ➞ 0
//Notes
//Input may be array of numbers, strings and empty arrays.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(countNumber([["", 17.2,5,"edabit"]]),2)
//Test.assertSimilar(countNumber([[[[[2,14,"nepal"]]], 2,3,4]]),5)
//Test.assertSimilar(countNumber([0, [12,"biratnagar",[[2]]]]),3)
//Test.assertSimilar(countNumber([["balkot"]]),0)
//Test.assertSimilar(countNumber([1,2,3,4,5,6]),6)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Fruit Juices

//tags: loops,strings

//url: https://edabit.com/challenge/7DL9criQPMMFTEdpL

//Description:
//A fruit juice company tags their fruit juices by concatenating the first three letters of the words in a flavor's name and its capacity.
//Create a function that creates the product IDs for the variety of fruit juices.
//Examples
//getDrinkID("apple", "500ml") ➞ "APP500"
//
//getDrinkID("pineapple", "45ml") ➞ "PIN45"
//
//getDrinkID("passion fruit", "750ml") ➞ "PASFRU750"
//Notes
//Capacity will be given as a string and will always be given in ml.
//Return the product ID in UPPERCASE.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(getDrinkID("apple", "500ml"), "APP500")
//Test.assertEquals(getDrinkID("pineapple", "45ml"), "PIN45")
//Test.assertEquals(getDrinkID("orange", "750ml"), "ORA750")
//Test.assertEquals(getDrinkID("passion fruit", "1ml"), "PASFRU1")
//Test.assertEquals(getDrinkID("mango", "1000ml"), "MAN1000")
//Test.assertEquals(getDrinkID("very berry", "253ml"), "VERBER253")
//Test.assertEquals(getDrinkID("raspberry and lime", "350ml"), "RASANDLIM350")

