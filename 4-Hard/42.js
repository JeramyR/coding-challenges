

//title: Digital Cipher

//tags: algorithms,cryptography,logic

//url: https://edabit.com/challenge/zsj2TPP8fNmXwsDs5

//Description:
//In Digital Cipher, encoding is done by the simple addition of numbers in the key and the corresponding characters on a string input.
//Create a function that takes two arguments; a positive integer and a string and returns an encoded array of integers as message.
//Assign a unique number to each letter of the alphabet.
// a  b  c  d  e  f  g  h  i  j  k  l  m
// 1  2  3  4  5  6  7  8  9  10 11 12 13
// n  o  p  q  r  s  t  u  v  w  x  y  z
// 14 15 16 17 18 19 20 21 22 23 24 25 26
//There are some variations on the rules of encipherment. One version of the cipher rules are outlined below:
//message = "scout"
//key = 1939
//
//digitalCipher(message, key) ➞ [20, 12, 18, 30, 21]
//Write the corresponding number against each character:
// s  c  o  u  t
//19  3 15 21 20
//Add to each obtained digit consecutive digits from the key:
//   s  c  o  u  t
//  19  3 15 21 20
// + 1  9  3  9  1
// ---------------
//  20 12 18 30 21
//See the below example for a better understanding:
//message = "masterpiece"
//key = 1939
//
//digitalCipher(message, key) ➞ [14, 10, 22, 29, 6, 27, 19, 18, 6, 12, 8]
//
//   m  a  s  t  e  r  p  i  e  c  e
//  13  1 19 20  5 18 16  9  5  3  5
//+  1  9  3  9  1  9  3  9  1  9  3
//  --------------------------------
//  14 10 22 29  6 27 19 18  6  12 8
//Examples
//digitalCipher("scout", 1939) ➞ [20, 12, 18, 30, 21]
//
//digitalCipher("mubashir", 1990) ➞ [14, 30, 11, 1, 20, 17, 18, 18]
//
//digitalCipher("edabit", 100) ➞ [6, 4, 1, 3, 9, 20]
//Notes
//Liked this challenge ? Let's decode your encrypted version here!!!

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(digitalCipher("scout", 1939), [20, 12, 18, 30, 21])
//Test.assertSimilar(digitalCipher("masterpiece", 1939), [14, 10, 22, 29, 6, 27, 19, 18, 6, 12, 8])
//Test.assertSimilar(digitalCipher("nomoretears", 12), [15, 17, 14, 17, 19, 7, 21, 7, 2, 20, 20])
//Test.assertSimilar(digitalCipher("mubashir", 1990), [14, 30, 11, 1, 20, 17, 18, 18])
//Test.assertSimilar(digitalCipher("pakistan", 1947), [17, 10, 15, 16, 20, 29, 5, 21])
//Test.assertSimilar(digitalCipher("pakistanairforce", 1965), [17,10, 17, 14, 20, 29, 7, 19, 2, 18, 24, 11, 16, 27, 9, 10])
//Test.assertSimilar(digitalCipher("edabit", 100), [6, 4, 1, 3, 9, 20])
//​
//// Mubashir

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Expand a Number I

//tags: arrays,language_fundamentals,math,numbers

//url: https://edabit.com/challenge/vqud59XWHn5BRA7P7

//Description:
//Create a function that expands a number into a string as shown below:
//25 ➞ "20 + 5"
//70701 ➞ "70000 + 700 + 1"
//685 ➞ "600 + 80 + 5"
//Examples
//expandedForm(70304) ➞ "70000 + 300 + 4"
//
//expandedForm(1037903) ➞ "1000000 + 30000 + 7000 + 900 + 3"
//
//expandedForm(802539) ➞ "800000 + 2000 + 500 + 30 + 9"
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(expandedForm(12), '10 + 2')
//Test.assertEquals(expandedForm(42), '40 + 2')
//Test.assertEquals(expandedForm(70304), '70000 + 300 + 4')
//Test.assertEquals(expandedForm(1037903), '1000000 + 30000 + 7000 + 900 + 3')
//Test.assertEquals(expandedForm(802539), '800000 + 2000 + 500 + 30 + 9')
//Test.assertEquals(expandedForm(3307098), '3000000 + 300000 + 7000 + 90 + 8')
//Test.assertEquals(expandedForm(2736692), '2000000 + 700000 + 30000 + 6000 + 600 + 90 + 2')
//Test.assertEquals(expandedForm(5030708), '5000000 + 30000 + 700 + 8')
//Test.assertEquals(expandedForm(903305), '900000 + 3000 + 300 + 5')
//Test.assertEquals(expandedForm(2900837), '2000000 + 900000 + 800 + 30 + 7')
//Test.assertEquals(expandedForm(607805), '600000 + 7000 + 800 + 5')
//Test.assertEquals(expandedForm(2070504), '2000000 + 70000 + 500 + 4')
//Test.assertEquals(expandedForm(700681), '700000 + 600 + 80 + 1')
//Test.assertEquals(expandedForm(70903), '70000 + 900 + 3')

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Fret Frequencies on the Guitar

//tags: algorithms,math,numbers

//url: https://edabit.com/challenge/4qimb3QisL8wNbSCd

//Description:
//Create a function that takes a number of a guitar string and the number of the fret and returns the corresponding frequency of the note.
//Check the Resources Tab, for the correct frequencies per string.
//The formula to calculate the frequency is: String Frequency * 2^(fret/12).
//Round the frequency to the nearest hundreth.
//For this challenge, we use "Standard Tuning".
//So, one fret = a semitone = a half step. From D to D♯ for instance.
//Examples
//fretFreq(5, 12) ➞ 220
//
//fretFreq(4, 6) ➞ 207.65
//
//fretFreq(2, 23) ➞ 932.32
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(fretFreq(3, 21), 659.26)
//Test.assertEquals(fretFreq(3, 15), 466.17)
//Test.assertEquals(fretFreq(6, 17), 220.01)
//Test.assertEquals(fretFreq(5, 12), 220)
//Test.assertEquals(fretFreq(2, 5), 329.63)
//Test.assertEquals(fretFreq(3, 9), 329.63)
//Test.assertEquals(fretFreq(1, 16), 830.62)
//Test.assertEquals(fretFreq(1, 4), 415.31)
//Test.assertEquals(fretFreq(3, 16), 493.89)
//Test.assertEquals(fretFreq(4, 6), 207.65)
//Test.assertEquals(fretFreq(2, 13), 523.25)
//Test.assertEquals(fretFreq(6, 12), 164.82)
//Test.assertEquals(fretFreq(5, 16), 277.18)
//Test.assertEquals(fretFreq(5, 19), 329.63)
//Test.assertEquals(fretFreq(4, 0), 146.83)
//Test.assertEquals(fretFreq(2, 6), 349.23)
//Test.assertEquals(fretFreq(3, 9), 329.63)
//Test.assertEquals(fretFreq(3, 5), 261.63)
//Test.assertEquals(fretFreq(5, 18), 311.13)
//Test.assertEquals(fretFreq(2, 23), 932.32)
//Test.assertEquals(fretFreq(2, 16), 622.25)
//Test.assertEquals(fretFreq(4, 6), 207.65)
//Test.assertEquals(fretFreq(4, 9), 246.94)
//Test.assertEquals(fretFreq(5, 8), 174.61)
//Test.assertEquals(fretFreq(3, 1), 207.65)

