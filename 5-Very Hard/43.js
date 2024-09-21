

//title: Get SHA-256 Hash

//tags: algorithms,cryptography,strings

//url: https://edabit.com/challenge/tPK2g4dGnrnqLZRX2

//Description:
//Hash algorithms are easy to do one way, but essentially impossible to do in reverse. For example, if you hash something simple, like password123, it will give you a long code, unique to that word or phrase. Ideally, there's no way to do this in reverse. You can't take the hash code and go back to the word or phrase you started with.
//Make a function that returns the SHA-256 secure hash for a given string. The hash should be formatted in a hexadecimal digit string.
//Examples
//getSha256Hash("password123") ➞ "ef92b778bafe771e89245b89ecbc08a44a4e166c06659911881f383d4473e94f"
//
//getSha256Hash("Fluffy@home") ➞ "dcc1ac3a7148a2d9f47b7dbe3d733040c335b2a3d8adc7984e0c483c5b2c1665"
//
//getSha256Hash("Hey dude!") ➞ "14f997f08b8ad032dcb274198684f995d34043f9da00acd904dc72836359ae0f"
//Notes
//Bonus if you can do it without importing any libraries ;)

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(getSha256Hash("hi"), "8f434346648f6b96df89dda901c5176b10a6d83961dd3c1ac88b59b2dc327aa4")
//Test.assertEquals(getSha256Hash("password123"), "ef92b778bafe771e89245b89ecbc08a44a4e166c06659911881f383d4473e94f")
//Test.assertEquals(getSha256Hash("don't use easy passwords"), "9fdfef802f06e384101080935fd3c938c60f92f528d520528b5c0491471a2be1")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: A Watermelon 🍉

//tags: arrays,loops,numbers,validation

//url: https://edabit.com/challenge/qfuLGaQJw36X9BXuW

//Description:
//Mubashir is eating a watermelon.
//He spits out all watermelon seeds if seeds are more than five.
//He can swallow all watermelon seeds if seeds are less than or equal to five.
//He can eat 1/4 of a watermelon each time.
//Given a 2D array of watermelon where 0 is representing juicy watermelon while 1 is representing seed, return total number of seeds spit-out. See below example for detailed explanation :
//Given a watermelon:
//1, 0, 0, 1, 1, 1, 0, 1
//1, 0, 1, 0, 1, 1, 0, 0
//1, 1, 1, 1, 0, 0, 0, 0
//0, 1, 0, 1, 1, 1, 1, 0
//0, 0, 0, 1, 0, 1, 0, 0
//1, 1, 1, 0, 0, 0, 1, 1
//1, 0, 1, 1, 0, 0, 0, 0
//0, 0, 0, 0, 0, 0, 0, 0
//
//seeds = 0
//total seeds = 0
//Mubashir eats 1/4 piece (4x4 matrix) of watermelon :
//x, x, x, x, 1, 1, 0, 1
//x, x, x, x, 1, 1, 0, 0
//x, x, x, x, 0, 0, 0, 0
//x, x, x, x, 1, 1, 1, 0
//0, 0, 0, 1, 0, 1, 0, 0
//1, 1, 1, 0, 0, 0, 1, 1
//1, 0, 1, 1, 0, 0, 0, 0
//0, 0, 0, 0, 0, 0, 0, 0
//
//seeds = 10
//total seeds = 10 (All seeds were spit-out)
//Mubashir eats next 1/4 piece (4x4 matrix) of watermelon :
//x, x, x, x, x, x, x, x
//x, x, x, x, x, x, x, x
//x, x, x, x, x, x, x, x
//x, x, x, x, x, x, x, x
//0, 0, 0, 1, 0, 1, 0, 0
//1, 1, 1, 0, 0, 0, 1, 1
//1, 0, 1, 1, 0, 0, 0, 0
//0, 0, 0, 0, 0, 0, 0, 0
//
//seeds = 8
//total seeds = 10+8 = 18 (All seeds were spit-out)
//Mubashir eats next 1/4 piece (4x4 matrix) of watermelon :
//x, x, x, x, x, x, x, x
//x, x, x, x, x, x, x, x
//x, x, x, x, x, x, x, x
//x, x, x, x, x, x, x, x
//x, x, x, x, 0, 1, 0, 0
//x, x, x, x, 0, 0, 1, 1
//x, x, x, x, 0, 0, 0, 0
//x, x, x, x, 0, 0, 0, 0
//
//seeds = 7
//total seeds = 18+7 = 25 (All seeds were spit-out)
//Mubashir eats last 1/4 piece (4x4 matrix) of watermelon :
//x, x, x, x, x, x, x, x
//x, x, x, x, x, x, x, x
//x, x, x, x, x, x, x, x
//x, x, x, x, x, x, x, x
//x, x, x, x, x, x, x, x
//x, x, x, x, x, x, x, x
//x, x, x, x, x, x, x, x
//x, x, x, x, x, x, x, x
//
//seeds = 3
//total seeds = 25+0 = 25
//Examples
//totalSeeds(watermelon) ➞ 25

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//var watermelon1=[
//[1, 0, 0, 1, 1, 1, 0, 1], 
//[1, 0, 1, 0, 1, 1, 0, 0], 
//[1, 1, 1, 1, 0, 0, 0, 0], 
//[0, 1, 0, 1, 1, 1, 1, 0], 
//[0, 0, 0, 1, 0, 1, 0, 0], 
//[1, 1, 1, 0, 0, 0, 1, 1], 
//[1, 0, 1, 1, 0, 0, 0, 0], 
//[0, 0, 0, 0, 0, 0, 0, 0]]
//Test.assertSimilar(totalSeeds(watermelon1), 25)
//​
//var watermelon2=[
//[0, 1, 0, 0, 0, 0, 1, 0], 
//[0, 0, 1, 0, 1, 0, 0, 0], 
//[0, 1, 1, 0, 1, 0, 0, 0], 
//[0, 0, 0, 0, 0, 0, 0, 0], 
//[1, 0, 0, 0, 0, 0, 1, 0], 
//[0, 0, 1, 0, 1, 0, 1, 0], 
//[0, 1, 0, 1, 1, 0, 0, 0], 
//[0, 1, 0, 0, 0, 0, 0, 1]]
//Test.assertSimilar(totalSeeds(watermelon2), 0)
//​
//var watermelon3=[
//[0, 0, 0, 0, 0, 0, 0, 0], 
//[0, 0, 0, 0, 1, 0, 0, 1], 

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Area of Overlapping Rectangles

//tags: algebra,geometry,math,objects

//url: https://edabit.com/challenge/dejHsfH2qWpgu4CGC

//Description:
//Create a function that returns the area of the overlap between two rectangles. The function will receive two rectangles, each with the coordinates of two of its opposite angles.
//Examples
//overlappingRectangles(
//  [{ x: 2, y: 1 }, { x: 5, y: 5 }],
//  [{ x: 3, y: 2 }, { x: 5, y: 7 }]
//) ➞ 6
//
//overlappingRectangles(
//  [{ x: 2, y: -9 }, { x: 13, y: -4 }],
//  [{ x: 5, y: -11 }, { x: 7, y: -2 }]
//) ➞ 10
//
//overlappingRectangles(
//  [{ x: -8, y: -7 }, { x: -4, y: 0 }],
//  [{ x: -5, y: -9 }, { x: -1, y: -2 }]
//) ➞ 5
//
//
//
//Notes
//Coordinates can be positive or negative integers.
//Not all examples have overlaps.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//// With overlaps
//Test.assertEquals(
//  overlappingRectangles(
//    [{ x: 2, y: 1 }, { x: 5, y: 5 }],
//    [{ x: 3, y: 2 }, { x: 5, y: 7 }]
//  ),
//  6
//);
//Test.assertEquals(
//  overlappingRectangles(
//    [{ x: 2, y: -9 }, { x: 13, y: -4 }],
//    [{ x: 5, y: -11 }, { x: 7, y: -2 }]
//  ),
//  10
//);
//Test.assertEquals(
//  overlappingRectangles(
//    [{ x: -8, y: -7 }, { x: -4, y: 0 }],
//    [{ x: -5, y: -9 }, { x: -1, y: -2 }]
//  ),
//  5
//);
//Test.assertEquals(
//  overlappingRectangles(
//    [{ x: -11, y: 2 }, { x: -1, y: 6 }],

