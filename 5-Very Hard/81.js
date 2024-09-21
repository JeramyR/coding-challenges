

//title: Decrypt the String from Digits to Letters

//tags: conditions,cryptography,loops,regex,strings

//url: https://edabit.com/challenge/NmBBGYTMNugKTSMkX

//Description:
//Given a string s consisting from digits and #, translate s to English lowercase characters as follows:
//Characters ("a" to "i") are represented by ("1" to "9").
//Characters ("j" to "z") are represented by ("10#" to "26#").
//Examples
//decrypt("10#11#12") ➞ "jkab"
//
//decrypt("1326#") ➞ "acz"
//
//decrypt("25#") ➞ "y"
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(decrypt("10#11#12"), "jkab")
//Test.assertEquals(decrypt("1326#"), "acz")
//Test.assertEquals(decrypt("25#"), "y")
//Test.assertEquals(decrypt("12345678910#11#12#13#14#15#16#17#18#19#20#21#22#23#24#25#26#"), "abcdefghijklmnopqrstuvwxyz")
//​
//// From Evgeny SH's Python Challenge

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Farey Sequence

//tags: math

//url: https://edabit.com/challenge/QKj3nR5yATPMCkSw7

//Description:
//The Farey sequence of order n is the set of all fractions with a denominator between 1 and n, reduced and returned in ascending order. Given n, return the Farey sequence as an array, with each fraction being represented by a string in the form "numerator/denominator".
//Examples
//farey(1) ➞ ["0/1", "1/1"]
//
//farey(4) ➞ ["0/1", "1/4", "1/3", "1/2", "2/3", "3/4", "1/1"]
//
//farey(5) ➞ ["0/1", "1/5", "1/4", "1/3", "2/5", "1/2", "3/5", "2/3", "3/4", "4/5", "1/1"]
//Notes
//The Farey sequence will always begin with "0/1" and end with "1/1".

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(farey(2), ['0/1', '1/2', '1/1'])
//Test.assertSimilar(farey(3), ['0/1', '1/3', '1/2', '2/3', '1/1'])
//Test.assertSimilar(farey(4), ['0/1', '1/4', '1/3', '1/2', '2/3', '3/4', '1/1'])
//Test.assertSimilar(farey(5), ['0/1', '1/5', '1/4', '1/3', '2/5', '1/2', '3/5', '2/3', '3/4', '4/5', '1/1'])
//Test.assertSimilar(farey(6), ['0/1', '1/6', '1/5', '1/4', '1/3', '2/5', '1/2', '3/5', '2/3', '3/4', '4/5', '5/6', '1/1'])
//Test.assertSimilar(farey(7), ['0/1', '1/7', '1/6', '1/5', '1/4', '2/7', '1/3', '2/5', '3/7', '1/2', '4/7', '3/5', '2/3', '5/7', '3/4', '4/5', '5/6', '6/7', '1/1'])
//Test.assertSimilar(farey(8), ['0/1', '1/8', '1/7', '1/6', '1/5', '1/4', '2/7', '1/3', '3/8', '2/5', '3/7', '1/2', '4/7', '3/5', '5/8', '2/3', '5/7', '3/4', '4/5', '5/6', '6/7', '7/8', '1/1'])
//Test.assertSimilar(farey(9), ['0/1', '1/9', '1/8', '1/7', '1/6', '1/5', '2/9', '1/4', '2/7', '1/3', '3/8', '2/5', '3/7', '4/9', '1/2', '5/9', '4/7', '3/5', '5/8', '2/3', '5/7', '3/4', '7/9', '4/5', '5/6', '6/7', '7/8', '8/9', '1/1'])
//Test.assertSimilar(farey(10), ['0/1', '1/10', '1/9', '1/8', '1/7', '1/6', '1/5', '2/9', '1/4', '2/7', '3/10', '1/3', '3/8', '2/5', '3/7', '4/9', '1/2', '5/9', '4/7', '3/5', '5/8', '2/3', '7/10', '5/7', '3/4', '7/9', '4/5', '5/6', '6/7', '7/8', '8/9', '9/10', '1/1'])
//Test.assertSimilar(farey(11), ['0/1', '1/11', '1/10', '1/9', '1/8', '1/7', '1/6', '2/11', '1/5', '2/9', '1/4', '3/11', '2/7', '3/10', '1/3', '4/11', '3/8', '2/5', '3/7', '4/9', '5/11', '1/2', '6/11', '5/9', '4/7', '3/5', '5/8', '7/11', '2/3', '7/10', '5/7', '8/11', '3/4', '7/9', '4/5', '9/11', '5/6', '6/7', '7/8', '8/9', '9/10', '10/11', '1/1'])
//Test.assertSimilar(farey(12), ['0/1', '1/12', '1/11', '1/10', '1/9', '1/8', '1/7', '1/6', '2/11', '1/5', '2/9', '1/4', '3/11', '2/7', '3/10', '1/3', '4/11', '3/8', '2/5', '5/12', '3/7', '4/9', '5/11', '1/2', '6/11', '5/9', '4/7', '7/12', '3/5', '5/8', '7/11', '2/3', '7/10', '5/7', '8/11', '3/4', '7/9', '4/5', '9/11', '5/6', '6/7', '7/8', '8/9', '9/10', '10/11', '11/12', '1/1'])
//Test.assertSimilar(farey(13), ['0/1', '1/13', '1/12', '1/11', '1/10', '1/9', '1/8', '1/7', '2/13', '1/6', '2/11', '1/5', '2/9', '3/13', '1/4', '3/11', '2/7', '3/10', '4/13', '1/3', '4/11', '3/8', '5/13', '2/5', '5/12', '3/7', '4/9', '5/11', '6/13', '1/2', '7/13', '6/11', '5/9', '4/7', '7/12', '3/5', '8/13', '5/8', '7/11', '2/3', '9/13', '7/10', '5/7', '8/11', '3/4', '10/13', '7/9', '4/5', '9/11', '5/6', '11/13', '6/7', '7/8', '8/9', '9/10', '10/11', '11/12', '12/13', '1/1'])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Simplified Josephus

//tags: algebra,math

//url: https://edabit.com/challenge/6TNRMTDDqdmnLeWMZ

//Description:
//Given n people, find the survivor. Starting from the first person, they kill the person to their left and the next surviving person kills the person to their left. This keeps happening until 1 person survives. Return that person's number.
//Examples
//josephus(1) ➞ 1
//
//josephus(8) ➞ 1
//
//josephus(41) ➞ 19
//Notes
//You can search up the problem if you are too confused about the instructions.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(josephus(1), 1)
//Test.assertEquals(josephus(41), 19)
//Test.assertEquals(josephus(8), 1)
//Test.assertEquals(josephus(5), 3)
//Test.assertEquals(josephus(7), 7)
//​
////Made by c h a e r (11level360) 
////             <3

