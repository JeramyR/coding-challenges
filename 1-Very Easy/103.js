

//title: Vowel Replacer

//tags: regex,strings

//url: https://edabit.com/challenge/5FhabpvT3FF75kgCi

//Description:
//Create a function that replaces all the vowels in a string with a specified character.
//Examples
//replaceVowels("the aardvark", "#") ➞ "th# ##rdv#rk"
//
//replaceVowels("minnie mouse", "?") ➞ "m?nn?? m??s?"
//
//replaceVowels("shakespeare", "*") ➞ "sh*k*sp**r*"
//Notes
//All characters will be in lower case.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(replaceVowels("the aardvark", "#"), "th# ##rdv#rk")
//Test.assertEquals(replaceVowels("minnie mouse", "?"), "m?nn?? m??s?")
//Test.assertEquals(replaceVowels("shakespeare", "*"), "sh*k*sp**r*")
//Test.assertEquals(replaceVowels("all is fair in love and war", "<"), "<ll <s f<<r <n l<v< <nd w<r")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Next Element in Arithmetic Sequence

//tags: arrays,math,numbers

//url: https://edabit.com/challenge/dzdoYrTL5vws4dFud

//Description:
//Create a function that returns the next element in an arithmetic sequence. In an arithmetic sequence, each element is formed by adding the same constant to the previous element.
//Examples
//nextElement([3, 5, 7, 9]) ➞ 11
//
//nextElement([-5, -6, -7]) ➞ -8
//
//nextElement([2, 2, 2, 2, 2]) ➞ 2
//Notes
//All input arrays will contain integers only.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(nextElement([3, 5, 7, 9]), 11) 
//Test.assertEquals(nextElement([-5, -6, -7]), -8) 
//Test.assertEquals(nextElement([2, 2, 2, 2, 2]), 2)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Capture the Rook

//tags: arrays,conditions,games,validation

//url: https://edabit.com/challenge/H7cs3TS87sFX72mjF

//Description:
//Write a function that returns true if two rooks can attack each other, and false otherwise.
//Examples
//canCapture(["A8", "E8"]) ➞ true
//
//canCapture(["A1", "B2"]) ➞ false
//
//canCapture(["H4", "H3"]) ➞ true
//
//canCapture(["F5", "C8"]) ➞ false
//Notes
//Assume no blocking pieces.
//Two rooks can attack each other if they share the same row (letter) or column (number).

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(canCapture(['A8', 'E8']), true)
//Test.assertEquals(canCapture(['A1', 'B2']), false)
//Test.assertEquals(canCapture(['H4', 'H3']), true)
//Test.assertEquals(canCapture(['F5', 'C8']), false)
//Test.assertEquals(canCapture(['G3', 'G7']), true)
//Test.assertEquals(canCapture(['B3', 'B2']), true)
//Test.assertEquals(canCapture(['F5', 'B2']), false)
//Test.assertEquals(canCapture(['H5', 'C8']), false)

