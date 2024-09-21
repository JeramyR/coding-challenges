

//title: Knights Jump

//tags: algorithms,arrays,games,logic

//url: https://edabit.com/challenge/iDzRZJNrnT7JryKEF

//Description:
//Knights can jump across the board.
//
//Create a function that takes a square where a knight jumps from as a string and returns all the possible squares the knight can land on as a string. Ignore capturing and further Chess rules. Be aware of the sides of the board. Knights don't go over the edge, obviously.
//Examples
//knightsJump("F4") ➞ "E2,G2,D3,H3,D5,H5,E6,G6"
//
//knightsJump("A1") ➞ "C2,B3"
//
//knightsJump("E2") ➞ "C1,G1,C3,G3,D4,F4"
//Notes
//The input is always a valid square on the board.
//The order of the return string is 1 ➞ 8, A ➞ H.

//code area
///////////////////////////////////////////////////////////////////////////
// const knightsJump = arr => {
//     let H = arr.charCodeAt(0) // the Letter coordinate
//     let V = arr.charCodeAt(1) // the number coordinate
//     let allPossible = [] // unsorted squares
//     let sortingArr = [] // valid options, unsorted

//     allPossible.push(
//         [H - 1, V - 2], [H + 1, V - 2],
//         [H - 2, V - 1], [H + 2, V - 1],
//         [H - 2, V + 1], [H + 2, V + 1],
//         [H - 1, V + 2], [H + 1, V + 2]
//     )

//     allPossible.map((e, i, r) => {
//         if (e[0] >= 65 && e[0] <= 72 && e[1] >= 49 && e[1] <= 56) {
//             sortingArr.push(String.fromCharCode(e[0]) + String.fromCharCode(e[1]))
//         }
//         return
//     })
//     return sortingArr
// }
//////////////////////////////////////////////////////////////////////////

//tests:

// [
//     ['A1', "C2,B3"]
//     ,
//     ['H1', "F2,G3"],
//     ['F4', "E2,G2,D3,H3,D5,H5,E6,G6"],
//     ['E5', "D3,F3,C4,G4,C6,G6,D7,F7"],
//     ['A7', "B5,C6,C8"], 
//     ['B4', "A2,C2,D3,D5,A6,C6"], 
//     ['F3', "E1,G1,D2,H2,D4,H4,E5,G5"], 
//     ['C8', "B6,D6,A7,E7"], 
//     ['E4', "D2,F2,C3,G3,C5,G5,D6,F6"], 
//     ['G1', "E2,F3,H3"], 
//     ['G7', "F5,H5,E6,E8"], 
//     ['F3', "E1,G1,D2,H2,D4,H4,E5,G5"], 
//     ['C8', "B6,D6,A7,E7"], 
//     ['B6', "A4,C4,D5,D7,A8,C8"], 
//     ['E2', "C1,G1,C3,G3,D4,F4"], 
//     ['H5', "G3,F4,F6,G7"], 
//     ['D1', "B2,F2,C3,E3"], 
//     ['G1', "E2,F3,H3"]
// ]
//     .forEach(c => Test.assertEquals(knightsJump(c[0]), c[1]));

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: International Standard Book Numbers

//tags: algorithms,loops,validation

//url: https://edabit.com/challenge/C5mooK3wfdhoooeLw

//Description:
//The International Standard Book Number (ISBN) is a unique identifying number given to each published book. ISBNs assigned after January 2007 are 13 digits long (ISBN-13), however books with 10-digit ISBNs are still in wide use.
//An ISBN-10 is verified this way:
//isbn10 = "0330301624"
//Line up the digits with the numbers 10 to 1:
//									
//0	3	3	0	3	0	1	6	2	4
//10	9	8	7	6	5	4	3	2	1
//Multiply each digit with the number below it (the 10th digit in an ISBN can be an X. This last X simply means 10).
//Sum up the products:
//0 + 27 + 24 + 0 + 18 + 0 + 4 + 18 + 4 + 4 = 99
//If the sum is divisible by 11, the ISBN-10 is valid.
//An ISBN-13 is verified this way:
//isbn13 = "9780316066525"
//Line up the digits with alternating 1s and 3s:
//												
//9	7	8	0	3	1	6	0	6	6	5	2	5
//1	3	1	3	1	3	1	3	1	3	1	3	1
//Multiply each digit with the number below it and get the sum:
//9 + 21 + 8 + 0 + 3 + 3 + 6 + 0 + 6 + 18 + 5 + 6 + 5 = 90
//If the sum is divisible by 10, the ISBN-13 is valid.
//Create a function that takes a string of numbers (possibly with an X at the end) and...
//Return "Invalid" if it is not a valid ISBN-10 or ISBN-13.
//Return "Valid" if it is a valid ISBN-13.
//If it is a valid ISBN-10, convert it into an ISBN-13 and return the ISBN-13 number.
//Convert a valid ISBN-10 to ISBN-13 by tacking 978 to the start, then changing the last digit (the check digit) so that the resulting number passes the ISBN-13 check.
//Examples
//isbn13("9780316066525") ➞ "Valid"
//
//isbn13("0330301824") ➞ "Invalid"
//
//isbn13("0316066524") ➞ "9780316066525"
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(isbn13('9780316066525'),'Valid')
//Test.assertEquals(isbn13('9783866155237'),'Valid')
//Test.assertEquals(isbn13('9780345453747'),'Valid')
//Test.assertEquals(isbn13('031606652X'),'Invalid')
//Test.assertEquals(isbn13('9783876155237'),'Invalid')
//Test.assertEquals(isbn13('0345453747'),'Invalid')
//Test.assertEquals(isbn13('0316066524'),'9780316066525')
//Test.assertEquals(isbn13('3866155239'),'9783866155237')
//Test.assertEquals(isbn13('817450494X'),'9788174504944')

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Sherlock and the Valid String

//tags: algorithms,strings,validation

//url: https://edabit.com/challenge/WtECAHJYzoXKy9m4v

//Description:
//Sherlock considers a string to be valid if all characters of the string appear the same number of times. It is also valid if he can remove just 1 character at 1 index in the string, and the remaining characters will occur the same number of times. Given a string str, determine if it is valid. If so, return "YES", otherwise return "NO".
//For example, If str = "abc", the string is valid because the frequencies of characters are all the same. If str = "abcc", the string is also valid, because we can remove 1 "c" and have one of each character remaining in the string. However, if str = "abccc", the string is not valid, because removing one character does not result in the same frequency of characters.
//Examples
//isValid("aabbcd") ➞ "NO"
//# We would need to remove two characters, both c and d  -> aabb or a and b -> abcd, to make it valid.
//# We are limited to removing only one character, so it is invalid.
//
//isValid("aabbccddeefghi") ➞ "NO"
//# Frequency counts for the letters are as follows:
//# {"a": 2, "b": 2, "c": 2, "d": 2, "e": 2, "f": 1, "g": 1, "h": 1, "i": 1}
//# There are two ways to make the valid string:
//# Remove 4 characters with a frequency of 1: {f, g, h, i}.
//# Remove 5 characters of frequency 2: {a, b, c, d, e}.
//# Neither of these is an option.
//
//isValid("abcdefghhgfedecba") ➞ "YES"
//# All characters occur twice except for e which occurs 3 times.
//# We can delete one instance of e to have a valid string.
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(isValid("aabbccddeefghi"), "NO")
//Test.assertEquals(isValid("aabbcd"), "NO")
//Test.assertEquals(isValid("abcdefghhgfedecba"), "YES")
//Test.assertEquals(isValid("abc"), "YES")
//Test.assertEquals(isValid("abcc"), "YES")
//Test.assertEquals(isValid("abccc"), "NO")

