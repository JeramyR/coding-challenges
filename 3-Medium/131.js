

//title: Counting Adverbs

//tags: loops,regex,strings

//url: https://edabit.com/challenge/sjeXqkCFvv6qSchtA

//Description:
//Create a function that counts the number of adverbs in a sentence. An adverb is a word that ends with ly.
//Examples
//countAdverbs("She ran hurriedly towards the stadium.") ➞ 1
//
//countAdverbs("She ate the lasagna heartily and noisily.") ➞ 2
//
//countAdverbs("He hates potatoes.") ➞ 0
//
//countAdverbs("He was happily, crazily, foolishly over the moon.") ➞ 3
//Notes
//Do NOT count words where the ly is in the beginning or the middle (e.g. Lysol, Illya).
//For the purpose of this exercise, ignore the nuances of the English language (some adjectives also end in ly).

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(countAdverbs("She ran hurriedly towards the stadium."), 1)
//Test.assertEquals(countAdverbs("She ate the lasagna heartily and noisily."), 2)
//Test.assertEquals(countAdverbs("He hates potatoes."), 0)
//Test.assertEquals(countAdverbs("He was happily, crazily, foolishly over the moon."), 3)
//Test.assertEquals(countAdverbs("She writes poetry beautifully."), 1)
//Test.assertEquals(countAdverbs("There are many fat geese in the park."), 0)
//Test.assertEquals(countAdverbs("The horse acted aggressively and stubbornly."), 2)
//Test.assertEquals(countAdverbs("She forgot where to buy the lysol."), 0, '-ly should not be counted if it is not at the end.')
//Test.assertEquals(countAdverbs("Ilya ran to the store."), 0, '-ly should not be counted if it is not at the end.')

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Intersecting Intervals

//tags: algorithms,arrays,validation

//url: https://edabit.com/challenge/FqdfcJ65WkiSn5WpJ

//Description:
//Create a function that takes in an array of intervals and returns how many intervals overlap with a given point.
//An interval overlaps a particular point if the point exists inside the interval, or on the interval's boundary. For example the point 3 overlaps with the interval [2, 4] (it is inside) and [2, 3] (it is on the boundary).
//To illustrate:
//countOverlapping([[1, 2], [2, 3], [1, 3], [4, 5], [0, 1]], 2) ➞ 3
//// Since [1, 2], [2, 3] and [1, 3] all overlap with point 2.
//Examples
//countOverlapping([[1, 2], [2, 3], [3, 4]], 5) ➞ 0
//
//countOverlapping([[1, 2], [5, 6], [5, 7]], 5) ➞ 2
//
//countOverlapping([[1, 2], [5, 8], [6, 9]], 7) ➞ 2
//Notes
//Each interval is represented as an array with a start point and an endpoint.
//Intervals count as intersecting even if they only intersect at one point, i.e. [2, 3] and [3, 4] both intersect at point 3.
//If it's helpful, you can draw these intervals on a line on a piece of paper.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(countOverlapping([[1, 2], [2, 3], [3, 4]], 5),0)
//Test.assertEquals(countOverlapping([[1, 2], [5, 6], [5, 7]], 5),2)
//Test.assertEquals(countOverlapping([[1, 2], [5, 8], [6, 9]], 7),2)
//Test.assertEquals(countOverlapping([[1, 5], [2, 5], [3, 6], [4, 5], [5, 6]], 5), 5)
//Test.assertEquals(countOverlapping([[1, 5], [2, 5], [3, 6], [4, 5], [5, 6]], 6), 2)
//Test.assertEquals(countOverlapping([[1, 5], [2, 5], [3, 6], [4, 5], [5, 6]], 2), 2)
//Test.assertEquals(countOverlapping([[1, 5], [2, 5], [3, 6], [4, 5], [5, 6]], 1), 1)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Mumbling Challenge

//tags: interview,logic,loops,strings

//url: https://edabit.com/challenge/ECoaEwFfLwF3Z8EE9

//Description:
//Create a function that takes a string str and modifies the given string as per the below examples:
//Examples
//mumbling("MubAshIr") ➞ "M-Uu-Bbb-Aaaa-Sssss-Hhhhhh-Iiiiiii-Rrrrrrrr"
//
//mumbling("maTT") ➞ "M-Aa-Ttt-Tttt"
//
//mumbling("EdaBit") ➞ "E-Dd-Aaa-Bbbb-Iiiii-Tttttt"
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(mumbling("MubAshIr"), "M-Uu-Bbb-Aaaa-Sssss-Hhhhhh-Iiiiiii-Rrrrrrrr")
//Test.assertEquals(mumbling("maTT"), "M-Aa-Ttt-Tttt")
//Test.assertEquals(mumbling("airForce"), "A-Ii-Rrr-Ffff-Ooooo-Rrrrrr-Ccccccc-Eeeeeeee")
//Test.assertEquals(mumbling("EdaBit"), "E-Dd-Aaa-Bbbb-Iiiii-Tttttt")
//Test.assertEquals(mumbling("PaKiStAn"), "P-Aa-Kkk-Iiii-Sssss-Tttttt-Aaaaaaa-Nnnnnnnn")
//// Mubashir

