

//title: Area of a Polygon

//tags: algebra,algorithms,math,trigonometry

//url: https://edabit.com/challenge/pd9Pf2vzfrdbFPhov

//Description:
//Given a unordered array of the vertices of a convex polygon, find its area.
//Examples
//polygon([[2, 5], [5, 1], [-4, 3]]) ➞ 15.0
//
//polygon([[-1, 1], [1, 1], [-1, -1], [1, -1]]) ➞ 4.0
//
//polygon([[2, 2], [11, 2], [4, 10], [9, 7]]) ➞ 45.5
//
//polygon([[5, 3], [3, 4], [12, 8], [5, 11], [9, 5]]) ➞ 39.0
//Notes
//A convex polygon has all interior angles less than 180 degrees.
//The first example has only 3 vertices so this list is ordered by default.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(polygon([[2, 5], [5, 1], [-4, 3]]), 15.0)
//Test.assertEquals(polygon([[-1, 1], [1, 1], [-1, -1], [1, -1]]), 4.0)
//Test.assertEquals(polygon([[2, 2], [11, 2], [4, 10], [9, 7]]), 45.5)
//Test.assertEquals(polygon([[-1, 1], [1, 8], [1, -3], [3, 1], [3, -1]]), 24.0)
//Test.assertEquals(polygon([[5, 3], [3, 4], [12, 8], [5, 11], [9, 5]]), 39.0)
//Test.assertEquals(polygon([[77, 10], [92, 71], [51, 9], [62, 84], [29, 94]]), 3274.5)
//Test.assertEquals(polygon([[8199, 8629], [424, 4349], [5026, 68], [7682, 3184], [7561, 9036], [1813, 8798], [5360, 92], [9676, 6684], [4597, 9802], [760, 2765], [5872, 557], [4446, 423]]), 59253602.0)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Any Combined Array Sequence

//tags: arrays,logic

//url: https://edabit.com/challenge/paBuxiNBgHDDW4vEJ

//Description:
//The goal is to test if a consecutive sequence can be formed. A consecutive sequence is defined as a sequence of incrementing numbers (e.g. 1, 2, 3 or 5, 6, 7, 8). The twist is that you have to consider the combination of arrays as shown. You can combine any two elements from different arrays.
//[-5 1 3 5 ] => [3 5 1 -5 ] => [3+4  5+3  1+8  15-5] = [7 8 9 10] => true
//[4 3 8  15] => [4 3 8  15]
//Also important is that the arrays can be of different sizes, allowing for partially unpaired numbers in some cases.
//[2 2 2  ] => [2 2 2 0] => [2+5  2+6  2+7  10+0] = [7 8 9 10] => true
//[10 5 6 7] => [5 7 6 10]
//Notes
//Each array has at least 2 elements.
//Try the easier version.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(hasConsecutiveSeries([16, 6, 7, 20, 12], [15, 15, 3, 12, 4, 26, 25]),true)
//Test.assertEquals(hasConsecutiveSeries([18, 17, 3, 25, 9, 0, 25, 20], [9, 35, 22, 11, 32, 36, 14, 26, 8, 5]),true)
//Test.assertEquals(hasConsecutiveSeries([9, 7, 6, 20, 25, 24, 20, 15, 25, 22], [18, 12, 22, 25, 41, 10, 23, 14, 14, 17, 27]),true)
//Test.assertEquals(hasConsecutiveSeries([21, 9, 8, 20, 15, 0, 11], [50, 40, 52, 37, 12, 28, 24, 34]),false)
//Test.assertEquals(hasConsecutiveSeries([14, 1, 1, 6, 16, 13, 6], [42, 35, 32, 23, 36, 27, 21, 35]),true)
//Test.assertEquals(hasConsecutiveSeries([7, 5, 23, 0, 23, 16, 23, 10], [9, 12, -1, -5, 13, 5, 19, -3]),true)
//Test.assertEquals(hasConsecutiveSeries([21, 12, 21, 20, 1, 2, 22, 19, 5, 18], [5, 41, 29, 19, 21, 18, 41, 27, 26, 22]),false)
//Test.assertEquals(hasConsecutiveSeries([20, 12, 25, 5, 22, 24, 20, 2, 15], [25, -3, 0, 13, 1, 9, 6, 18, 2]),true)
//Test.assertEquals(hasConsecutiveSeries([0, 10, 20, 3, 10, 15], [4, -14, -5, 4, -2, -6]),true)
//Test.assertEquals(hasConsecutiveSeries([25, 10, 7, 20, 7], [29, 25, 9, 40, 31, 17, 7]),false)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Ragbaby Cipher

//tags: algorithms,cryptography,logic,strings

//url: https://edabit.com/challenge/uYfDwainfQ8FNRZLe

//Description:
//In Ragbaby Cipher, encoding is done by a string of keys and their position in the plaintext word of a message.
//Create a function that takes two arguments, key and message, and returns the encoded message.
//There are some variations on the rules of encipherment. One version of the cipher rules are outlined below:
//message = "This is an example."
//key = "cipher"
//
//ragbabyCipher(message, key) ➞ "Urew pu bq rzfsbtj."
//Step 1: Remove duplicate alphabets of the key. Rearrange alphabets from A-Z, such that the keyword appears first, followed by the rest of the alphabets in the usual order.
//c i p h e r a b d f g j k l m n o q s t u v w x y z
//Step 2: Word-by-word, assign numbers to the letters of the given message:
//T h i s   i s   a n   e x a m p l e .
//1 2 3 4   1 2   1 2   1 2 3 4 5 6 7
//Step 3: Replace each alphabet of the word with the letter in the keyed alphabet the corresponding number of places to the right of it (wrapping if necessary). Keep all characters other than alphabets in the same order and without any change.
//eMessage = "Urew pu bq rzfsbtj."
//// 'u' is 1 place right to 't'
//// 'r' is 2 places right to 'h'
//// 'e' is 3 places right to 'i' and so on.
//// keep the '.' in the same position.
//See the below examples for a better understanding:
//Examples
//ragbabyCipher("This is an example.", "cipher") ➞ "Urew pu bq rzfsbtj."
//
//ragbabyCipher("mubashir", "edabit") ➞ "nwccyoke"
//
//ragbabyCipher("mattttt", "eedddabit") ➞ "nighjkl"
//Notes
//Keys will have lowercase letters only but encoded messages should keep the order of uppercase and lowercase as the original message.
//The assigning of numbers to letters resets with every non-letter character.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(ragbabyCipher("l-o-v-e","googlehele"), "e-l-w-h")
//Test.assertEquals(ragbabyCipher("mubashir","edabit"), "nwccyoke")
//Test.assertEquals(ragbabyCipher("My name is Mubashir and I am a stupid Engineer","nottrue"), "Pn ocsd jw Paffzpsg bth J bq b vubwpk Atjmeghg")
//Test.assertEquals(ragbabyCipher("I wish I could tell her before she went away","whocares"), "J hkfr J aayqk ubpq obb dbjefi bcd hbty roso")
//Test.assertEquals(ragbabyCipher("mattttt","eedddabit"), "nighjkl")
//Test.assertEquals(ragbabyCipher("m.u^b#a@s!h4ir","helen"), "o.v^c#b@t!e4jt")
//Test.assertEquals(ragbabyCipher("cipher","cipher"), "ihrbfj")
//Test.assertEquals(ragbabyCipher("$@pakistan..","airforce"), "$@qrncxzbx..")
//Test.assertEquals(ragbabyCipher("cipher","cccciiiiippphheeeeerrrrr"), "ihrbfj" )
//Test.assertEquals(ragbabyCipher("This is an example.","cipher"), "Urew pu bq rzfsbtj." )
//Test.assertEquals(ragbabyCipher("This.tHis.thIs.thiS...","cipher"), "Urew.uRew.urEw.ureW..." )

