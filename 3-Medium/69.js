

//title: Chess Board Squares

//tags: algebra,algorithms,logic

//url: https://edabit.com/challenge/kDoi6Eob7KuELwjjp

//Description:
//Create a function that takes a chess board square's coordinate and return its color.
//
//Examples
//chessBoard("a1") ➞ "black"
//
//chessBoard("e5") ➞ "black"
//
//chessBoard("d1") ➞ "white"
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(chessBoard('a1'), 'black')
//Test.assertEquals(chessBoard('e5'), 'black')
//Test.assertEquals(chessBoard('d1'), 'white')
//Test.assertEquals(chessBoard('c7'), 'black')
//Test.assertEquals(chessBoard('h5'), 'white')
//Test.assertEquals(chessBoard('g2'), 'white')
//Test.assertEquals(chessBoard('b3'), 'white')
//Test.assertEquals(chessBoard('f6'), 'black')
//Test.assertEquals(chessBoard('g5'), 'black')

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Distance Between Two Points

//tags: algebra,geometry,language_fundamentals,math,objects

//url: https://edabit.com/challenge/caeSeQ3K53GMQKenX

//Description:
//In this challenge, you have to find the distance between two points placed on a Cartesian plane. Knowing the coordinates of both the points, you have to apply the Pythagorean theorem to find the distance between them.
//
//Given two object literals a and b being the two points coordinates (x and y), implement a function that returns the distance between the points, rounded to the nearest thousandth.
//Examples
//getDistance({x: -2, y: 1}, {x: 4, y: 3}) ➞ 6.325
//
//getDistance({x: 0, y: 0}, {x: 1, y: 1}) ➞ 1.414
//
//getDistance({x: 10, y: -5}, {x: 8, y: 16}) ➞ 21.095
//Notes
//Take a look at the Resources tab if you need a refresher on the geometry related to this challenge.
//The "distance" is the shortest distance between the two points, or the straight line generated from a to b.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(getDistance({x: -2, y: 1}, {x: 4, y: 3}), 6.325, "Example #1")
//Test.assertEquals(getDistance({x: 0, y: 0}, {x: 1, y: 1}), 1.414, "Example #2")
//Test.assertEquals(getDistance({x: 10, y: -5}, {x: 8, y: 16}), 21.095, "Example #3")
//Test.assertEquals(getDistance({x: 4, y: 3}, {x: 3, y: -2}), 5.099)
//Test.assertEquals(getDistance({x: -1, y: -1}, {x: 10, y: 10}), 15.556)
//Test.assertEquals(getDistance({x: 100, y: 100}, {x: 100, y: 100}), 0)
//Test.assertEquals(getDistance({x: 14239, y: -11222}, {x: -12301, y: 12888}), 35856.153)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Joining Digits Together

//tags: loops,numbers,strings

//url: https://edabit.com/challenge/9qrjtshZq8L5ATcKt

//Description:
//Create a function which takes in a number n as input and returns all numbers up to and including n joined together in a string. Separate each digit from each other with the character "-".
//Examples
//joinDigits(4) ➞ "1-2-3-4"
//
//joinDigits(11) ➞ "1-2-3-4-5-6-7-8-9-1-0-1-1"
//
//joinDigits(15) ➞ "1-2-3-4-5-6-7-8-9-1-0-1-1-1-2-1-3-1-4-1-5"
//Notes
//Remember to start at 1 and include n as the last number.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(joinDigits(1), "1")
//Test.assertEquals(joinDigits(2), "1-2")
//Test.assertEquals(joinDigits(3), "1-2-3")
//Test.assertEquals(joinDigits(4), "1-2-3-4")
//Test.assertEquals(joinDigits(5), "1-2-3-4-5")
//Test.assertEquals(joinDigits(6), "1-2-3-4-5-6")
//Test.assertEquals(joinDigits(7), "1-2-3-4-5-6-7")
//Test.assertEquals(joinDigits(8), "1-2-3-4-5-6-7-8")
//Test.assertEquals(joinDigits(9), "1-2-3-4-5-6-7-8-9")
//Test.assertEquals(joinDigits(10), "1-2-3-4-5-6-7-8-9-1-0")
//Test.assertEquals(joinDigits(11), "1-2-3-4-5-6-7-8-9-1-0-1-1")
//Test.assertEquals(joinDigits(12), "1-2-3-4-5-6-7-8-9-1-0-1-1-1-2")
//Test.assertEquals(joinDigits(13), "1-2-3-4-5-6-7-8-9-1-0-1-1-1-2-1-3")
//Test.assertEquals(joinDigits(14), "1-2-3-4-5-6-7-8-9-1-0-1-1-1-2-1-3-1-4")
//Test.assertEquals(joinDigits(15), "1-2-3-4-5-6-7-8-9-1-0-1-1-1-2-1-3-1-4-1-5")
//Test.assertEquals(joinDigits(16), "1-2-3-4-5-6-7-8-9-1-0-1-1-1-2-1-3-1-4-1-5-1-6")
//Test.assertEquals(joinDigits(17), "1-2-3-4-5-6-7-8-9-1-0-1-1-1-2-1-3-1-4-1-5-1-6-1-7")
//Test.assertEquals(joinDigits(18), "1-2-3-4-5-6-7-8-9-1-0-1-1-1-2-1-3-1-4-1-5-1-6-1-7-1-8")
//Test.assertEquals(joinDigits(19), "1-2-3-4-5-6-7-8-9-1-0-1-1-1-2-1-3-1-4-1-5-1-6-1-7-1-8-1-9")
//Test.assertEquals(joinDigits(20), "1-2-3-4-5-6-7-8-9-1-0-1-1-1-2-1-3-1-4-1-5-1-6-1-7-1-8-1-9-2-0")
//Test.assertEquals(joinDigits(21), "1-2-3-4-5-6-7-8-9-1-0-1-1-1-2-1-3-1-4-1-5-1-6-1-7-1-8-1-9-2-0-2-1")
//Test.assertEquals(joinDigits(22), "1-2-3-4-5-6-7-8-9-1-0-1-1-1-2-1-3-1-4-1-5-1-6-1-7-1-8-1-9-2-0-2-1-2-2")
//Test.assertEquals(joinDigits(23), "1-2-3-4-5-6-7-8-9-1-0-1-1-1-2-1-3-1-4-1-5-1-6-1-7-1-8-1-9-2-0-2-1-2-2-2-3")
//Test.assertEquals(joinDigits(24), "1-2-3-4-5-6-7-8-9-1-0-1-1-1-2-1-3-1-4-1-5-1-6-1-7-1-8-1-9-2-0-2-1-2-2-2-3-2-4")
//Test.assertEquals(joinDigits(25), "1-2-3-4-5-6-7-8-9-1-0-1-1-1-2-1-3-1-4-1-5-1-6-1-7-1-8-1-9-2-0-2-1-2-2-2-3-2-4-2-5")

