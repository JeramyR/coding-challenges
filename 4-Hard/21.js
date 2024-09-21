

//title: Seven Segment Display

//tags: functional_programming,loops

//url: https://edabit.com/challenge/5s6d2BfJw2r8W4SqZ

//Description:
//Create a function that takes a single Hexadecimal number as an argument and returns the equivalent six-digit binary number to light the display. Consider the six-digit binary number as an incoming input from a serial port. The segment display is a common cathode segment display that means you need to give a logical 1 to light up each segment.
//
//Examples
//toDisplay(0x1) ➞ 0x06
//// [dp, g, f, e, d, c, b, a] = [0, 0, 0, 0, 0, 1, 1, 0]
//
//toDisplay(0x8) ➞ 0x7F
//// [dp, g, f, e, d, c, b, a] = [0, 1, 1, 1, 1, 1, 1, 1]
//
//toDisplay(0x0) ➞ 0x3F
//// [dp, g, f, e, d, c, b, a] = [0, 0, 1, 1, 1, 1, 1, 1]
//Notes
//Bit order is as follows MSB [dp, g, f, e, d, c, b, a] LSB.
//This is something that comes up in FPGA work a lot, where you have to make some kind of conversion between numerical values and bits controlling hardware. These conversions often have no simple algorithm and require hard coding.
//If you do hard code this challenge you can try to determine the correct values by yourself but in industry if you can just look up a reference, you do. In this case the code tests have all the required values.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(toDisplay(0x0), 0x3F) // 0
//Test.assertEquals(toDisplay(0x1), 0x06) // 1 right side
//Test.assertEquals(toDisplay(0x2), 0x5B) // 2
//Test.assertEquals(toDisplay(0x3), 0x4F) // 3
//Test.assertEquals(toDisplay(0x4), 0x66) // 4
//Test.assertEquals(toDisplay(0x5), 0x6D) // 5
//Test.assertEquals(toDisplay(0x6), 0x7D) // 6 top hook
//Test.assertEquals(toDisplay(0x7), 0x07) // 7 no middle slash
//Test.assertEquals(toDisplay(0x8), 0x7F) // 8
//Test.assertEquals(toDisplay(0x9), 0x6F) // 9 bottom hook
//Test.assertEquals(toDisplay(0xA), 0x77) // A Upper case
//Test.assertEquals(toDisplay(0xB), 0x7C) // b lower case
//Test.assertEquals(toDisplay(0xC), 0x39) // C Upper case
//Test.assertEquals(toDisplay(0xD), 0x5E) // d lower case
//Test.assertEquals(toDisplay(0xE), 0x79) // E Upper case
//Test.assertEquals(toDisplay(0xF), 0x71) // F Upper case

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Sorting Time

//tags: algorithms,language_fundamentals,logic,sorting

//url: https://edabit.com/challenge/38Ctuc4jKhExdE6uQ

//Description:
//JavaScript has a beautiful built-in function sort that sorts an iterable, usually an array of numbers, sorting them in ascending order, but using a block you can sort the iterable in different ways.
//Create a function that takes an array of integers as an argument and returns the same array in ascending order. Using sort() would be easy, but for this challenge YOU have to sort the array creating your own algorithm.
//Examples
//sortArray([2, -5, 1, 4, 7, 8]) ➞ [-5, 1, 2, 4, 7, 8]
//
//sortArray([23, 15, 34, 17, -28]) ➞ [-28, 15, 17, 23, 34]
//
//sortArray([38, 57, 45, 18, 47, 39]) ➞ [18, 38, 39, 45, 47, 57]
//Notes
//The arrays can contain either positive or negative elements.
//The arrays will only contain integers.
//The arrays won't contain duplicate numbers.
//This is a challenge to enhance your ability, using the sort built-in won't enhance your skills.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(sortArray([2, -5, 1, 4, 7, 8]), [-5, 1, 2, 4, 7, 8])
//Test.assertSimilar(sortArray([23, 15, 34, 17, -28]), [-28, 15, 17, 23, 34])
//Test.assertSimilar(sortArray([38, 57, 45, 18, 47, 39]), [18, 38, 39, 45, 47, 57])
//Test.assertSimilar(sortArray([26, -1, -45, 74, 20]), [-45, -1, 20, 26, 74])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Find First Character That Repeats

//tags: conditions,logic,loops,strings

//url: https://edabit.com/challenge/aMyRSjKakeDauFfkX

//Description:
//Create a function that takes a string and returns the first character that repeats. If there is no repeat of a character, return "-1".
//Examples
//firstRepeat("legolas") ➞ "l"
//
//firstRepeat("Gandalf") ➞ "a"
//
//firstRepeat("Balrog") ➞ "-1"
//
//firstRepeat("Isildur") ➞ "-1"
//// Case sensitive "I" not equal to "i"
//Notes
//Tests are case sensitive.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(firstRepeat("legolas"), "l")
//Test.assertEquals(firstRepeat("Balrog"), "-1")
//Test.assertEquals(firstRepeat("Isildur"), "-1")
//Test.assertEquals(firstRepeat("Gollum"), "l")
//Test.assertEquals(firstRepeat("Galadriel"), "a")
//Test.assertEquals(firstRepeat("pippin"), "p")
//Test.assertEquals(firstRepeat("Saruman"), "a")

