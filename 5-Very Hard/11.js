

//title: Gauss`s Addition

//tags: math,numbers

//url: https://edabit.com/challenge/cagrnZjzsNcKonrZM

//Description:
//Watch the video about Gauss's Addition in the Resources tab to see how you can use the formula for your function.
//
//Create a function that adds all the numbers together from 1 to n or, if two numbers are given: n to m. The input can be in any order.
//Examples
//gauss(100) ➞ 5050 // From the video
//
//gauss(5001, 7000) ➞ 12001000 // Also ^^
//
//gauss(1975, 165) ➞ 1937770
//Notes
//Try not to use a for or while loop.
//Try not to create a recursive function.
//Use the formula explained in the video.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//[[[100], 5050], 
//[[1, 100], 5050], 
//[[5000], 12502500], 
//[[5001, 7000], 12001000], 
//[[3, 5], 12], 
//[[1800, 250], 1589775], 
//[[1, 5000], 12502500], 
//[[5, 500], 125240], 
//[[1975, 165], 1937770], 
//[[50000], 1250025000], 
//[[28, 123], 7248], 
//[[7000, 5001], 12001000],
//[[0, 100], 5050],
//[[5000, 1], 12502500], 
//[[100, 1], 5050]]
//  .forEach(c => Test.assertEquals(gauss(...c[0]), c[1]));

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Gaderypoluki Cipher

//tags: algorithms,cryptography,strings

//url: https://edabit.com/challenge/y5hDyugNk5A9KRbLc

//Description:
//Create a function that takes an encryption key (a string with an even number of characters) and a message to encrypt. Group the letters of the key by two:
//"gaderypoluki" -> "ga de ry po lu ki"
//Now take the message for encryption. If the message character appears in the key, replace it with an adjacent character in the grouped version of the key. If the message character does not appear in the key, leave it as is. If the letter in the key occurs more than once, the first result is used. Create a function that takes an encryption key (a string with an even number of characters) and a message to encrypt. Group the letters of the key by two:
//"gaderypoluki" -> "ga de ry po lu ki"
//Now take the message for encryption. If the message character appears in the key, replace it with an adjacent character in the grouped version of the key. If the message character does not appear in the key, leave it as is. If the letter in the key occurs more than once, the first result is used. For example: use the above key, if the letter "a" appeared in the message, it would be replaced with "g" since "g" in the adjacent letter.
//Return the encrypted message.
//Examples
//encrypt("ab c", "abc ab") ➞ "ba cba"
//
//encrypt("otorhinolaryngological", "My name is Paul") ➞ "Mr olme hs Plua"
//
//encrypt("gaderypoluki", "This is an encrypted message") ➞ "Thks ks gn dncyrotde mdssgad"
//Notes
//N/A
//Return the encrypted message.
//Examples
//encrypt("ab c", "abc ab") ➞ "ba cba"
//
//encrypt("otorhinolaryngological", "My name is Paul") ➞ "Mr olme hs Plua"
//
//encrypt("gaderypoluki", "This is an encrypted message") ➞ "Thks ks gn dncyrotde mdssgad"
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(encrypt("gaderypoluki", "This is an encrypted message"), "Thks ks gn dncyrotde mdssgad")
//Test.assertEquals(encrypt("otorhinolaryngological", "My name is Paul"), "Mr olme hs Plua")
//Test.assertEquals(encrypt("ab c","abc ab"), "ba cba")
//Test.assertEquals(encrypt("1234567890", "1029384756"), "2910473865")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Calculate Depth of Array

//tags: arrays,recursion

//url: https://edabit.com/challenge/JJtafXGmNegpQMp6p

//Description:
//Given an array, write a function to calculate it's depth. Assume that a normal array has a depth of 1.
//Examples
//depth([1, 2, 3, 4]) ➞ 1
//
//depth([1, [2, 3, 4]]) ➞ 2
//
//depth([1, [2, [3, 4]]]) ➞ 3
//
//depth([1, [2, [3, [4]]]]) ➞ 4
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////
// const depth = arr => {
    
// }

//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(depth([1, 2, 3, 4]), 1)
//Test.assertEquals(depth([1, [2, 3, 4]]), 2)
//Test.assertEquals(depth([1, [2, [3, 4]]]), 3)
//Test.assertEquals(depth([1, [2, [3, [4]]]]), 4)
//​
//Test.assertEquals(depth([1, [2, [3, [4]]], 4]), 4)
//Test.assertEquals(depth([1, [2], 3, [4], 5, [6]]), 2)
//Test.assertEquals(depth([1, 2, 3, 4, [[5]], [6], 7]), 3)

