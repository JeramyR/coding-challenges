

//title: Edabit`s Encryption Scheme

//tags: cryptography,loops,strings,validation

//url: https://edabit.com/challenge/mNinzJLXY7QdRmqMN

//Description:
//An English text needs to be encrypted using Edabit’s encryption scheme. First, the spaces are removed from the text. Let L be the length of this text. Then, characters are written into a grid, whose rows and columns have the following constraints:
//For example, the sentence "if man was meant to stay on the ground god would have given us roots", after removing spaces, is 54 characters long. The square root of 54 is between 7 and 8, so it is written in the form of a grid with 7 rows and 8 columns.
//ifmanwas
//meanttos
//tayonthe
//groundgo
//dwouldha
//vegivenu
//sroots
//Ensure that rows x column >= L
//If multiple grids satisfy the above conditions, choose the one with the minimum area.
//rows x columns >= L
//The encoded message is obtained by displaying the characters in a column, inserting a space, and then displaying the next column and inserting a space, and so on. For example, the encoded message for the above rectangle is:
//imtgdvs fearwer mayoogo anouuio ntnnlvt wttddes aohghn sseoau
//Examples
//encryption(“haveaniceday”) ➞ “hae and via ecy”
//
//// have
//// anic
//// eday
//
//encryption(“feedthedog”) ➞ “fto ehg ee dd”
//
//encryption(“chillout”) ➞ “clu hlt io”
//
//encryption(“A Fool and His Money Are Soon Parted.”) ➞ "Anoea FdnSr oHeot oiyoe lsAnd aMrP."
//Notes
//Ensure capitalization remains the same in encrypted text.
//Do not remove special characters.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(encryption("haveaniceday"), "hae and via ecy")
//Test.assertEquals(encryption("feedthedog"), "fto ehg ee dd")
//Test.assertEquals(encryption("chillout"), "clu hlt io")
//Test.assertEquals(encryption("A Fool and His Money Are Soon Parted."), "Anoea FdnSr oHeot oiyoe lsAnd aMrP.")
//Test.assertEquals(encryption("One should not worry over things that have already happened and that cannot be changed."), "Onvtlphb. noehreae etraentc swttaech hohhddaa oriayann urnvhnng lygeadoe dosapttd")
//Test.assertEquals(encryption("Back to Square One is a popular saying that means a person has to start over, similar to: back to the drawing board."), "Brpgatroea aeutpo,:dr cOlhessbrd knaartiaa. tertsamcw oismoriki Ssaentltn qayahoaog upinavrtb aonssetho")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Knights on a Board

//tags: arrays,games,validation

//url: https://edabit.com/challenge/YFkyAh5sm9Guqth85

//Description:
//Write a function that returns true if the knights are placed on a chessboard such that no knight can capture another knight. Here, 0s represent empty squares and 1s represent knights.
//Examples
//cannotCapture([
//  [0, 0, 0, 1, 0, 0, 0, 0],
//  [0, 0, 0, 0, 0, 0, 0, 0],
//  [0, 1, 0, 0, 0, 1, 0, 0],
//  [0, 0, 0, 0, 1, 0, 1, 0],
//  [0, 1, 0, 0, 0, 1, 0, 0],
//  [0, 0, 0, 0, 0, 0, 0, 0],
//  [0, 1, 0, 0, 0, 0, 0, 1],
//  [0, 0, 0, 0, 1, 0, 0, 0]
//]) ➞ true
//
//cannotCapture([
//  [1, 0, 1, 0, 1, 0, 1, 0],
//  [0, 1, 0, 1, 0, 1, 0, 1],
//  [0, 0, 0, 0, 1, 0, 1, 0],
//  [0, 0, 1, 0, 0, 1, 0, 1],
//  [1, 0, 0, 0, 1, 0, 1, 0],
//  [0, 0, 0, 0, 0, 1, 0, 1],
//  [1, 0, 0, 0, 1, 0, 1, 0],
//  [0, 0, 0, 1, 0, 1, 0, 1]
//]) ➞ false
//Notes
//Knights can be present in any of the 64 squares.
//No other pieces except knights exist.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(cannotCapture([
//[0, 0, 0, 1, 0, 0, 0, 0],
//[0, 0, 0, 0, 0, 0, 0, 0],
//[0, 1, 0, 0, 0, 1, 0, 0],
//[0, 0, 0, 0, 1, 0, 1, 0],
//[0, 1, 0, 0, 0, 1, 0, 0],
//[0, 0, 0, 0, 0, 0, 0, 0],
//[0, 1, 0, 0, 0, 0, 0, 1],
//[0, 0, 0, 0, 1, 0, 0, 0]
//]), true)
//​
//Test.assertEquals(cannotCapture([
//[1, 0, 1, 0, 1, 0, 1, 0],
//[0, 1, 0, 1, 0, 1, 0, 1],
//[0, 0, 1, 0, 1, 0, 1, 0],
//[0, 0, 0, 1, 0, 1, 0, 1],
//[0, 0, 0, 0, 1, 0, 1, 0],
//[0, 0, 0, 0, 0, 1, 0, 1],
//[0, 0, 0, 0, 0, 0, 1, 0],
//[0, 0, 0, 0, 0, 0, 0, 1]
//]), true)
//​
//Test.assertEquals(cannotCapture([
//[1, 0, 1, 0, 1, 0, 1, 0],
//[0, 1, 0, 1, 0, 1, 0, 1],

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Exactly Three

//tags: algebra,math,numbers,validation

//url: https://edabit.com/challenge/8vJaRDKxoGQ5JnCCz

//Description:
//You are given a number n. Determine whether n has exactly 3 divisors or not.
//Examples
//isExactlyThree(4) ➞ true
//// 4 has only 3 divisors: 1, 2 and 4
//
//isExactlyThree(12) ➞ false
//// 12 has 6 divisors: 1, 2, 3, 4, 6, 12
//
//isExactlyThree(25) ➞ true
//// 25 has only 3 divisors: 1, 5, 25
//Notes
//1 ≤ n ≤ 10^12

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(isExactlyThree(4), true)
//Test.assertEquals(isExactlyThree(12), false)
//Test.assertEquals(isExactlyThree(25), true)
//Test.assertEquals(isExactlyThree(121), true)
//Test.assertEquals(isExactlyThree(48), false)
//Test.assertEquals(isExactlyThree(1), false)
//Test.assertEquals(isExactlyThree(81), false)
//Test.assertEquals(isExactlyThree(1521), false)
//Test.assertEquals(isExactlyThree(225), false)
//Test.assertEquals(isExactlyThree(27550356289), true)
//Test.assertEquals(isExactlyThree(25235235235), false)
//Test.assertEquals(isExactlyThree(10), false)
//Test.assertEquals(isExactlyThree(64), false)
//Test.assertEquals(isExactlyThree(9), true)
//Test.assertEquals(isExactlyThree(144), false)
//Test.assertEquals(isExactlyThree(3), false)
//Test.assertEquals(isExactlyThree(2), false)
//Test.assertEquals(isExactlyThree(42351351), false)
//Test.assertEquals(isExactlyThree(999966000289), true)
//Test.assertEquals(isExactlyThree(20152357681), true)
//Test.assertEquals(isExactlyThree(531625249), true)
//Test.assertEquals(isExactlyThree(264306808866), false)
//Test.assertEquals(isExactlyThree(975179493674), false)
//Test.assertEquals(isExactlyThree(49), true)
//Test.assertEquals(isExactlyThree(165983), false)

