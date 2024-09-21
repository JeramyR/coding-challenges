

//title: The Collatz Conjecture

//tags: algebra,algorithms,loops,numbers,recursion

//url: https://edabit.com/challenge/PyLwHawLofXKZWw4i

//Description:
//Consider the following operation on an arbitrary positive integer:
//If n is even -> n / 2
//If n is odd -> n * 3 + 1
//Create a function to repeatedly evaluate these operations, until reaching 1. Return the number of steps it took.
//See the following example, using 10 as the input, with 6 steps:
//10 is even - 10 / 2 = 5
//5 is odd - 5 * 3 + 1 = 16
//16 is even - 16 / 2 = 8
//8 is even - 8 / 2 = 4
//4 is even - 4 / 2 = 2
//2 is even - 2 / 2 = 1 -> Reached 1, so return 6
//Examples
//collatz(2) ➞ 1
//
//collatz(3) ➞ 7
//
//collatz(10) ➞ 6
//Notes
//For further information, check the Resources tab.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(collatz(2), 1)
//Test.assertEquals(collatz(3), 7)
//Test.assertEquals(collatz(10), 6)
//Test.assertEquals(collatz(6), 8)
//Test.assertEquals(collatz(345), 125)
//Test.assertEquals(collatz(72), 22)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: How Good is Your Name?

//tags: interview,language_fundamentals,objects,strings,validation

//url: https://edabit.com/challenge/M9KuMowrYvH24Jwio

//Description:
//Create a function that takes a string of name and checks how much good is the given name. A preloaded dictionary of alphabet scores is available in the Code tab. Add up the letters of your name to get the total score.
//const scores = {"A": 100, "B": 14, "C": 9, "D": 28, "E": 145, "F": 12, "G": 3,
//"H": 10, "I": 200, "J": 100, "K": 114, "L": 100, "M": 25,
//"N": 450, "O": 80, "P": 2, "Q": 12, "R": 400, "S": 113,
//"T": 405, "U": 11, "V": 10, "W": 10, "X": 3, "Y": 210, "Z": 23}
//Return your result as per the following rules:
//score <= 60:   "NOT TOO GOOD"
//
//61 <= score <= 300:  "PRETTY GOOD"
//
//301 <= score <= 599:  "VERY GOOD"
//
//score >= 600:  "THE BEST"
//Examples
//nameScore("MUBASHIR") ➞ "THE BEST"
//
//nameScore("YOU") ➞ "VERY GOOD"
//
//nameScore("MATT") ➞ "THE BEST"
//
//nameScore("PUBG") ➞ "NOT TOO GOOD"
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(nameScore('MUBASHIR'), "THE BEST")
//Test.assertEquals(nameScore('MATT'), "THE BEST")
//Test.assertEquals(nameScore('PAKISTAN'), "THE BEST")
//Test.assertEquals(nameScore('AIRFORCE'), "THE BEST")
//Test.assertEquals(nameScore('GUV'), 'NOT TOO GOOD')
//Test.assertEquals(nameScore('PUBG'),"NOT TOO GOOD")
//Test.assertEquals(nameScore('ME'), "PRETTY GOOD")
//Test.assertEquals(nameScore('BOB'),"PRETTY GOOD")
//Test.assertEquals(nameScore('JLJ'), 'PRETTY GOOD')
//Test.assertEquals(nameScore('YOU'), 'VERY GOOD')
//Test.assertEquals(nameScore('FABIO'),"VERY GOOD")
//Test.assertEquals(nameScore('ROBBY'), 'THE BEST')
//Test.assertEquals(nameScore('BILL GATES'), "THE BEST")
//// Author: Mubashir

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Compounding Letters

//tags: formatting,loops,strings

//url: https://edabit.com/challenge/aThG46eyi9LhGdTFY

//Description:
//Create a function that takes a string and returns a new string with each new character accumulating by +1. Separate each set with a dash.
//Examples
//accum("abcd") ➞ "A-Bb-Ccc-Dddd"
//
//accum("RqaEzty") ➞ "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
//
//accum("cwAt") ➞ "C-Ww-Aaa-Tttt"
//Notes
//Capitalize the first letter of each set.
//All tests contain valid strings with alphabetic characters (a-z, A-Z).

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(accum("abcd"), "A-Bb-Ccc-Dddd");
//Test.assertEquals(accum("RqaEzty"), "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy");
//Test.assertEquals(accum("cwAt"), "C-Ww-Aaa-Tttt");
//Test.assertEquals(accum("VgyCdnQa"), "V-Gg-Yyy-Cccc-Ddddd-Nnnnnn-Qqqqqqq-Aaaaaaaa");
//Test.assertEquals(accum("nRBSdNOsMl"), "N-Rr-Bbb-Ssss-Ddddd-Nnnnnn-Ooooooo-Ssssssss-Mmmmmmmmm-Llllllllll");
//Test.assertEquals(accum("nuE"), "N-Uu-Eee");
//Test.assertEquals(accum("RlDrhZuQaqsoHEfziByObtMxkFCJVe"), "R-Ll-Ddd-Rrrr-Hhhhh-Zzzzzz-Uuuuuuu-Qqqqqqqq-Aaaaaaaaa-Qqqqqqqqqq-Sssssssssss-Oooooooooooo-Hhhhhhhhhhhhh-Eeeeeeeeeeeeee-Fffffffffffffff-Zzzzzzzzzzzzzzzz-Iiiiiiiiiiiiiiiii-Bbbbbbbbbbbbbbbbbb-Yyyyyyyyyyyyyyyyyyy-Oooooooooooooooooooo-Bbbbbbbbbbbbbbbbbbbbb-Tttttttttttttttttttttt-Mmmmmmmmmmmmmmmmmmmmmmm-Xxxxxxxxxxxxxxxxxxxxxxxx-Kkkkkkkkkkkkkkkkkkkkkkkkk-Ffffffffffffffffffffffffff-Ccccccccccccccccccccccccccc-Jjjjjjjjjjjjjjjjjjjjjjjjjjjj-Vvvvvvvvvvvvvvvvvvvvvvvvvvvvv-Eeeeeeeeeeeeeeeeeeeeeeeeeeeeee");
//Test.assertEquals(accum("EXpzPFx"), "E-Xx-Ppp-Zzzz-Ppppp-Ffffff-Xxxxxxx");
//Test.assertEquals(accum("NU"), "N-Uu");
//Test.assertEquals(accum("g"), "G");

