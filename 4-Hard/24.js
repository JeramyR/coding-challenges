

//title: Multiplication Table

//tags: arrays,math,numbers

//url: https://edabit.com/challenge/gqrAzKFddwBM2uknn

//Description:
//Create a function that takes an integer n and returns multiplication table of 1 to n numbers up to nth multiple.
//Examples
//multTable(2) ➞ [
//  [1, 2],
//  [2, 4]
//]
//
//multTable(3) ➞ [
//  [1, 2, 3],
//  [2, 4, 6],
//  [3, 6, 9]
//]
//
//multTable(5) ➞ [
//  [1, 2, 3, 4, 5],
//  [2, 4, 6, 8, 10],
//  [3, 6, 9, 12, 15],
//  [4, 8, 12, 16, 20],
//  [5, 10, 15, 20, 25]
//]
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(multTable(1),[[1]])
//Test.assertSimilar(multTable(2),[[1,2],[2,4]])
//Test.assertSimilar(multTable(3),[[1,2,3],[2,4,6],[3,6,9]])
//Test.assertSimilar(multTable(4),[[1,2,3,4],[2,4,6,8],[3,6,9,12],[4,8,12,16]])
//Test.assertSimilar(multTable(5),[[1,2,3,4,5],[2,4,6,8,10],[3,6,9,12,15],[4,8,12,16,20],[5,10,15,20,25]])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Concatenate to Form Target Array

//tags: arrays,sorting,validation

//url: https://edabit.com/challenge/f3Lc7Z5dK3p8dahoz

//Description:
//Create a function that returns true if smaller arrays can concatenate to form the target array and false otherwise.
//Examples
//canConcatenate([[1, 2, 3, 4], [5, 6], [7]], [1, 2, 3, 4, 5, 6, 7]) ➞ true
//
//canConcatenate([[2, 1, 3], [5, 4, 7, 6]], [7, 6, 5, 4, 3, 2, 1]) ➞ true
//
//canConcatenate([[2, 1, 3], [5, 4, 7, 6, 7]], [1, 2, 3, 4, 5, 6, 7]) ➞ false
//// Duplicate 7s not found in target array.
//
//canConcatenate([[2, 1, 3], [5, 4, 7]], [1, 2, 3, 4, 5, 6, 7]) ➞ false
//// Missing 6 from target array.
//Notes
//Arrays do not have to be sorted (see example #2).
//Arrays should concatenate to create the final array exactly (see examples #3 and #4).

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(canConcatenate([[1, 2, 3, 4], [5, 6], [7]], [1, 2, 3, 4, 5, 6, 7]), true)
//Test.assertEquals(canConcatenate([[2, 1, 3], [5, 4, 7, 6]], [1, 2, 3, 4, 5, 6, 7]), true)
//Test.assertEquals(canConcatenate([[2, 1, 3], [5, 4, 7, 6]], [7, 6, 5, 4, 3, 2, 1]), true)
//Test.assertEquals(canConcatenate([[2, 1, 3], [5, 4, 7, 6, 7]], [1, 2, 3, 4, 5, 6, 7]), false)
//Test.assertEquals(canConcatenate([[2, 1, 3], [5, 4, 7]], [1, 2, 3, 4, 5, 6, 7]), false)
//Test.assertEquals(canConcatenate([[1, 4], [3]], [1, 3, 4]), true)
//Test.assertEquals(canConcatenate([[1, 4], [3]], [1, 2, 3, 4]), false)
//Test.assertEquals(canConcatenate([[1, 4], [3]], [4, 3, 1]), true)
//Test.assertEquals(canConcatenate([[1, 4], [2, 3]], [4, 3, 1, 2]), true)
//Test.assertEquals(canConcatenate([[1], [2], [3, 4]], [4, 3, 1, 2]), true)
//Test.assertEquals(canConcatenate([[1], [2], [3], [4]], [4, 3, 1, 2]), true)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Unmix My Strings

//tags: formatting,strings

//url: https://edabit.com/challenge/JCs8xAksBjF2M6kjf

//Description:
//lPaeesh le pemu mnxit ehess rtnisg! Oh, sorry, that was supposed to say: Please help me unmix these strings!
//Somehow my strings have all become mixed up; every pair of characters has been swapped. Help me undo this so I can understand my strings again.
//Examples
//unmix("123456") ➞ "214365"
//
//unmix("hTsii  s aimex dpus rtni.g") ➞ "This is a mixed up string."
//
//unmix("badce") ➞ "abcde"
//Notes
//The length of a string can be odd — in this case the last character is not altered (as there's nothing to swap it with).

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(unmix('123456'), '214365')
//Test.assertEquals(unmix('hTsii  s aimex dpus rtni.g'),'This is a mixed up string.')
//Test.assertEquals(unmix('badce'),'abcde')
//Test.assertEquals(unmix(' Imaf eeilgna l tilt eidzz!y'),'I am feeling a little dizzy!')
//Test.assertEquals(unmix(''), '', 'Should work with empty strings as well.')

