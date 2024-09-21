

//title: Face Interval

//tags: algorithms,math,sorting,validation

//url: https://edabit.com/challenge/ABYkebcQ4RQSEz5gc

//Description:
//In mathematics, interval is the difference between the largest number and the smallest number in an array.
//To illustrate:
//A = (3, 5, 7, 23, 11, 42, 80)
//
//Interval of A = 80 - 3 = 77
//Create a function that takes an array and returns ":)" if the interval of the array is equal to any other element; otherwise return ":(".
//Examples
//faceInterval([1, 2, 5, 8, 3, 9]) ➞ ":)"
//// Array interval is equal to one of the other elements.
//
//faceInterval([5, 2, 8, 3, 11]) ➞ ":("
//// Array interval is not among the other elements.
//
//faceInterval("bruh") ➞ ":/"
//// "bruh" is not an array. It's string.
//Notes
//Arrays won't contain any duplicate numbers.
//If you're not given an array, return ":/"

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(faceInterval([1, 2, 5, 8, 3, 9]), ":)")
//Test.assertEquals(faceInterval([5, 2, 8, 3, 11]), ":(")
//Test.assertEquals(faceInterval([20, 50, 13, 60, 22, 72, 99]), ":(")
//Test.assertEquals(faceInterval([11, 42, 83, 28, 47, 94]), ":)")
//Test.assertEquals(faceInterval("bruh"), ":/")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Burglary Series (08): Remove an Entry

//tags: loops,objects

//url: https://edabit.com/challenge/y4K6Mi7XfaauvoT3u

//Description:
//Your spouse tells you that one of the items on the list wasn't stolen, it is in your castle in Transilvania. Given an object of the stolen items and an item name, return a copy without that item on the list.
//Examples
//removeEntry({ piano: 300, tv: 100, skate: 50 }, "skate") ➞ { piano: 300, tv: 100 }
//
//removeEntry({ mirror: 500, painting: 1 }, "mirror") ➞ { painting: 1 }
//Notes
//The object will contain at least two items.
//Preferably, mutate the copy, not the original.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//const random = Math.random()
//const obj = {piano: random, tv: 100}
//const obj2 = {piano: random, tv: 100, skate: 50}
//const res = Object.is(removeEntry(obj, "tv"), obj)
//Test.assertEquals(res, false)
//Test.assertSimilar(removeEntry(obj, "tv"), {piano: random})
//Test.assertSimilar(removeEntry(obj2, "tv"), {piano: random, skate:50})

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: In the Centre?

//tags: strings,validation

//url: https://edabit.com/challenge/EatpBWKGDGvntrMmo

//Description:
//Given a string containing mostly spaces and one non-space character, return whether the character is positioned in the very centre of the string. This means the number of spaces on both sides should be the same.
//Examples
//isCentral("  #  ") ➞ true
//
//isCentral(" 2    ") ➞ false
//
//isCentral("@") ➞ true
//Notes
//Only one character other than spaces will be given at a time.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(isCentral('  #  '), true)
//Test.assertEquals(isCentral(' 2    '), false)
//Test.assertEquals(isCentral('@'), true)
//Test.assertEquals(isCentral(' 1'), false)
//Test.assertEquals(isCentral('7 '), false)
//Test.assertEquals(isCentral('  l '), false)
//Test.assertEquals(isCentral(' a  '), false)
//Test.assertEquals(isCentral('    G    '), true)
//Test.assertEquals(isCentral('        %        '), true)

