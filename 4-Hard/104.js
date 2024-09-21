

//title: Super Strict Grading

//tags: arrays,loops,objects,sorting

//url: https://edabit.com/challenge/jq6Ra5ms4hPTk9GNi

//Description:
//Given an object literal of student names and an array of their test scores over the semester, return a list of all the students who passed the course (in alphabetical order). However, there is one more thing to mention: the pass mark is 100% in everything!
//Examples
//whoPassed({
//  "John" : ["5/5", "50/50", "10/10", "10/10"],
//  "Sarah" : ["4/8", "50/57", "7/10", "10/18"],
//  "Adam" : ["8/10", "22/25", "3/5", "5/5"],
//  "Barry" : ["3/3", "20/20"]
//}) ➞ ["Barry", "John"]
//
//whoPassed({
//  "Zara" : ["10/10"],
//  "Kris" : ["30/30"],
//  "Charlie" : ["100/100"],
//  "Alex" : ["1/1"]
//}) ➞ ["Alex", "Charlie", "Kris", "Zara"]
//
//whoPassed({
//  "Zach" : ["10/10", "2/4"],
//  "Fred" : ["7/9", "2/3"]
//}) ➞ []
//Notes
//All of a student's test scores must be 100% to pass.
//Remember to return an array of student names sorted alphabetically.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(whoPassed({
//  "John" : ["5/5", "50/50", "10/10", "10/10"],
//  "Sarah" : ["4/5", "50/50", "10/10", "10/10"],
//  "Adam" : ["3/5", "46/50", "9/10", "10/10"],
//  "Barry" : ["5/5", "50/50", "10/10", "10/10"]
//}), ["Barry", "John"])
//​
//Test.assertSimilar(whoPassed({
//  "Zara" : ["10/10"],
//  "Kris" : ["10/10"],
//  "Charlie" : ["10/10"],
//  "Alex" : ["10/10"]
//}), ["Alex", "Charlie", "Kris", "Zara"])
//​
//Test.assertSimilar(whoPassed({
//  "Zach" : ["10/10", "2/4"],
//  "Fred" : ["10/10", "3/4"]
//}), [])
//​
//Test.assertSimilar(whoPassed({
//  "John" : ["5/5", "50/50", "10/10", "10/10"],
//  "Sarah" : ["4/8", "50/57", "7/10", "10/18"],
//  "Adam" : ["8/10", "22/25", "3/5", "5/5"],
//  "Barry" : ["3/3", "20/20", "5/5", "2/2"]
//}), ["Barry", "John"])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Persistence

//tags: math,numbers,recursion

//url: https://edabit.com/challenge/hLZPoBBa745aWAsnm

//Description:
//If you take an integer and form the product of its individual digits, you get a smaller number. Keep doing this and eventually you end up with a single digit.
//The number of steps it takes to reach this point is known as the integer's multiplicative persistence. For example, 347 has a persistence of 3: 3*4*7 = 84, 8*4 = 32, 3*2 = 6.
//Devise a function that returns the persistence of an integer.
//Examples
//persistence(9) ➞ 0
//
//persistence(12) ➞ 1
//
//persistence(6788) ➞ 6
//
//persistence(678852) ➞ 2
//Notes
//The smallest number with persistence 11 is 277777788888899.
//A number has never been found, no matter how large, that has a persistence greater than 11.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(persistence(0), 0)
//Test.assertEquals(persistence(10), 1)
//Test.assertEquals(persistence(25), 2)
//Test.assertEquals(persistence(39), 3)
//Test.assertEquals(persistence(77), 4)
//Test.assertEquals(persistence(679), 5)
//Test.assertEquals(persistence(6788), 6)
//Test.assertEquals(persistence(68889), 7)
//Test.assertEquals(persistence(2677889), 8)
//Test.assertEquals(persistence(26888999), 9)
//Test.assertEquals(persistence(3778888999), 10)
//Test.assertEquals(persistence(277777788888899), 11)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: A Simple Modification

//tags: algorithms,interview,numbers,strings

//url: https://edabit.com/challenge/sgQHrZ9g43ryTGFtR

//Description:
//Mubashir needs your help to learn javaScript Programming. Help him by modifying a given string txt as follows:
//Reverse the string given.
//Replace each letter to its position in the alphabet for example (a = 1, b = 2, c = 3, ...).
//Join the array and convert it to a number.
//Convert the number to binary.
//Convert the string back to a number.
//See below example for more understanding :
//modify("hello") ➞ 111001101011101101101010
// "hello" = "olleh"
//
// "olleh" = ['15', '12', '12', '5', '8']
//
// ['15', '12', '12', '5', '8'] = 15121258
//
// 15121258 = "111001101011101101101010"
//
// "111001101011101101101010" = 111001101011101101101010
//Examples
//modify("hello") ➞ 111001101011101101101010
//
//modify("mubashir") ➞ 10110000110010000110011111000111000001
//
//modify("edabit") ➞ 111111110110001110001
//Notes
//There are no spaces and the string is lowercase.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(modify("mubashir"), 10110000110010000110011111000111000001)
//Test.assertEquals(modify("edabit"), 111111110110001110001)
//Test.assertEquals(modify("airforce"), 110001100001110111100011110000100011)
//Test.assertEquals(modify("pakistan"), 10100100011000010111100011111100111001100)
//Test.assertEquals(modify("hello"), 111001101011101101101010)
////Mubashir

