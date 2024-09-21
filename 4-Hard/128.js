

//title: Sort Authors Last Names Alphabetically

//tags: arrays,objects,sorting,strings

//url: https://edabit.com/challenge/vtFsh5CzFep6b9gDf

//Description:
//Today you volunteered as a librarian. You were given an array of objects, each one containing different book information. You need to sort the objects in alphabetical order of the author's last name.
//Examples
//sortByLastName([
//  { name: "Harry Potter", rating: "8+", author: "Joanne Rowling" },
//  { name: "Warcross", rating: "13+", author: "Marie Lu" },
//  { name: "The Hunger Games", rating: "12+", author: "Suzanne Collins" },
//]) ➞ [
//  { name: "The Hunger Games", rating: "12+", author: "Suzanne Collins" },
//  { name: "Warcross", rating: "13+", author: "Marie Lu" },
//  { name: "Harry Potter", rating: "8+", author: "Joanne Rowling" },
//]
//Notes
//There will always be a name, rating, and author property on each object.
//The array will never be empty.
//The author property will always feature only a first and last name.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//const tests = [
//  [
//    [
//      { name: "Harry Potter", rating: "8+", author: "Joanne Rowling" },
//      { name: "Warcross", rating: "13+", author: "Marie Lu" },
//      { name: "The Hunger Games", rating: "12+", author: "Suzanne Collins" },
//    ],
//    [
//      { name: "The Hunger Games", rating: "12+", author: "Suzanne Collins" },
//      { name: "Warcross", rating: "13+", author: "Marie Lu" },
//      { name: "Harry Potter", rating: "8+", author: "Joanne Rowling" },
//    ],
//  ],
//  [
//    [
//      { name: "The Night Gardner", rating: "10+", author: "Jonathan Auxier" },
//      { name: "Harry Potter", rating: "8+", author: "Joanne Rowling" },
//    ],
//    [
//      { name: "The Night Gardner", rating: "10+", author: "Jonathan Auxier" },
//      { name: "Harry Potter", rating: "8+", author: "Joanne Rowling" },
//    ],
//  ],
//  [
//    [

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Smallest Square Ending

//tags: algorithms,logic,math

//url: https://edabit.com/challenge/sDbNXjBdo4AbeZGfe

//Description:
//In a letter to Lord Bowden in 1837, Charles Babbage asked, "What is the smallest positive integer whose square ends in 269,696?". He thought the answer was 99,736 whose square is 9,947,269,696. Was he right?
//Write a function that takes a positive integer n and returns the smallest number whose square ends with n. One small twist, if n == 269696 return "Babbage was correct!" if the smallest number whose square ends with 269,696 is 99,736, otherwise return "Babbage was incorrect!".
//Examples
//babbage(25) ➞ 5
//
//babbage(161) ➞ 119
//// 119 * 119 == 14,161
//// Ends with 161
//
//babbage(269696) ➞ "Babbage was {?}!"
//// Replace {?} with the word "correct" or "incorrect".
//Notes
//n will always be a positive integer n > 0.
//Make sure your solution is efficient enough to pass the tests within a 12 second time limit.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(babbage(481), 59)
//Test.assertEquals(babbage(7009), 497)
//Test.assertEquals(babbage(990025), 995)
//Test.assertEquals(babbage(327369), 57213)
//Test.assertEquals(babbage(269696), "Babbage was incorrect!")
//Test.assertEquals(babbage(33765625), 28875)
//Test.assertEquals(babbage(314062500), 36250)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Goldbach Conjecture

//tags: arrays,logic,math,numbers

//url: https://edabit.com/challenge/CtzrFDd3wpDtu9TCg

//Description:
//Goldbach's Conjecture is amongst the oldest and well-known unsolved mathematical problems. In correspondence with Leonhard Euler in 1742, German mathematician Christian Goldbach made a conjecture, which states:
//"Every even whole number greater than 2 is the sum of two prime numbers."
//Even though it's been thoroughly tested and analyzed and seems to be true, it hasn't been proved yet (thus, remaining a conjecture.)
//Create a function that takes a number and returns an array as per the following rules:
//If the given number is odd and greater than two, return an empty array.
//If the given number is even and greater than two, return an array of two prime numbers whose sum is the given input.
//Both prime numbers must be the farthest (with the greatest difference).
//Examples
//goldbachConjecture(1) ➞ []
//// The given number is not greater than 2.
//
//goldbachConjecture(7) ➞ []
//// The given number is not an even number.
//
//goldbachConjecture(14) ➞ [3, 11]
//Notes
//Return array in sequence: [smaller, bigger]

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(goldbachConjecture(1), [])
//Test.assertSimilar(goldbachConjecture(4), [2, 2])
//Test.assertSimilar(goldbachConjecture(7), [])
//Test.assertSimilar(goldbachConjecture(8), [3, 5])
//Test.assertSimilar(goldbachConjecture(10), [3, 7])
//Test.assertSimilar(goldbachConjecture(24), [5, 19])
//Test.assertSimilar(goldbachConjecture(100), [3, 97])
//Test.assertSimilar(goldbachConjecture(1234), [3, 1231])
//Test.assertSimilar(goldbachConjecture(1400), [19, 1381])
//Test.assertSimilar(goldbachConjecture(1566), [7, 1559])
//Test.assertSimilar(goldbachConjecture(3444), [11, 3433])
//// Mubashir

