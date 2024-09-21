

//title: Product Divisible by Sum?

//tags: arrays,math,numbers,validation

//url: https://edabit.com/challenge/aJzvBZgp8nzwSk94A

//Description:
//Write a function that returns true if the product of an array is divisible by the sum of that same array. Otherwise, return false.
//Examples
//divisible([3, 2, 4, 2]) ➞ false
//
//divisible([4, 2, 6]) ➞ true
//// 4 * 2 * 6 / (4 + 2 + 6)
//
//divisible([3, 5, 1]) ➞ false
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(divisible([3, 2, 4, 1]), false)
//Test.assertEquals(divisible([4, 4, 4, 4]), true)
//Test.assertEquals(divisible([4, 2, 6]), true)
//Test.assertEquals(divisible([1, 1, 1, 1, 10]), false)
//Test.assertEquals(divisible([10, 5, 10]), true)
//Test.assertEquals(divisible([3, 5, 1]), false)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Where is Bob!?!

//tags: arrays,data_structures,language_fundamentals

//url: https://edabit.com/challenge/L76DRaqDXkBJJ7tBr

//Description:
//Write a function that searches an array of names (unsorted) for the name "Bob" and returns the location in the array. If Bob is not in the array, return -1.
//Examples
//findBob(["Jimmy", "Layla", "Bob"]) ➞ 2
//
//findBob(["Bob", "Layla", "Kaitlyn", "Patricia"]) ➞ 0
//
//findBob(["Jimmy", "Layla", "James"]) ➞ -1
//Notes
//Assume all names start with a capital letter and are lowercase thereafter (i.e. don't worry about finding "BOB" or "bob").

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(findBob(["Jimmy", "Layla", "Mandy"]), -1)
//Test.assertEquals(findBob(["Bob", "Nathan", "Hayden"]), 0)
//Test.assertEquals(findBob(["Paul", "Layla", "Bob"]), 2)
//Test.assertEquals(findBob(["Garry", "Maria", "Bethany", "Bob", "Pauline"]), 3)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: RegEx: Boundary Assertions II

//tags: arrays,formatting,regex,validation

//url: https://edabit.com/challenge/sq7ZNMhAZ5ao8BMum

//Description:
//You are given an array with random words but your program doesn't accept words that begin with the capital letter "C". Remove the unaccepted words and return the new array.
//Examples
//accepted(["Ducks", "Bears",  "Cats"]) ➞ ["Ducks", "Bears"]
//
//accepted(["cars", "trucks", "planes"] ➞ ["cars", trucks", "planes"]
//
//accepted(["Cans", "Worms", "Bugs", "Cold", "Beans"]) ➞ ["Worms", "Bugs", "Beans"]
//Notes
//Use a RegEx boundary assertion in your function.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(acceptedWords(["Cans", "Worms", "Bugs", "Cold", "Beans"]), ["Worms", "Bugs", "Beans"])
//Test.assertSimilar(acceptedWords(["Ducks", "Bears",  "Cats"]), ["Ducks", "Bears"])
//Test.assertSimilar(acceptedWords(["cars", "trucks", "planes"]), ["cars", "trucks", "planes"])

