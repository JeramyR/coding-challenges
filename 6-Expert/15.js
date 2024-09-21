

//title: Prince of Persia Turned Around

//tags: algebra,math,numbers,validation

//url: https://edabit.com/challenge/Z7nDvtQ5JduwjvoGD

//Description:
//You're working for Jaffar in the newest game of Prince of Persia. The prince is coming to get the princess and you have to stop him. He's entering the castle on a horse, don't ask me why he's riding a horse... he just is!
//You're standing next to the cannon and you have to check if the aim / velocity / height is ok for hitting the prince on his horse.
//Your function will get four values / circumstances:
//Velocity
//Angle
//Height
//Distance to the prince
//With the formula of Ballistic Trajectory you'll be able to calculate the distance the cannonball is gonna travel for impact. You don't need to apply rounding.
//The complete formula is found in the Resources section. Computations are based on the acceleration of gravity on the earth's surface (9.81 m/s/s), atmospheric drag is neglected. The chance of hitting the prince / his horse is plus or minus 0.5m.
//Examples
//hitPrince(10, 10, 10, 16) ➞ true
//
//hitPrince(20, 45, 0, 45) ➞ false
//
//hitPrince(5, 45, 10, 6) ➞ true
//
//Notes
//No actual princes / horses are harmed during the making of this challenge.
//All the inputs are correct. 0 > Angle < 90, and so on.
//Values will be in meters per second / degrees / meters.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//[
//  [[10,10,10,16], true],
//  [[50,5,5,76], false],
//  [[16,16,16,36], true],
//  [[20,20,20,54], false],
//  [[20,45,0,45], false],
//  [[100,30,100,1031], true], // Good shot!
//  [[50,5,50,182], false],
//  [[10,10,10,17], false],
//  [[5,45,10,6], true]
//].forEach(x => Test.assertEquals(hitPrince(...x[0]), x[1]));

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Sudoku Validation

//tags: functional_programming,higher_order_functions,validation

//url: https://edabit.com/challenge/rGTJckjQsBDq2M8WL

//Description:
//Write a sudoku validator. This function should return true if the 2-D array represents a valid sudoku and false otherwise. To be a valid sudoku:
//Each row must have the digits from 1 to 9 exactly once.
//Each column must have the digits from 1 to 9 exactly once.
//Each 3x3 box must have the digits from 1 to 9 exactly once.
//Examples
//sudokuValidator([
//  [ 1, 5, 2, 4, 8, 9, 3, 7, 6 ],
//  [ 7, 3, 9, 2, 5, 6, 8, 4, 1 ],
//  [ 4, 6, 8, 3, 7, 1, 2, 9, 5 ],
//  [ 3, 8, 7, 1, 2, 4, 6, 5, 9 ],
//  [ 5, 9, 1, 7, 6, 3, 4, 2, 8 ],
//  [ 2, 4, 6, 8, 9, 5, 7, 1, 3 ],
//  [ 9, 1, 4, 6, 3, 7, 5, 8, 2 ],
//  [ 6, 2, 5, 9, 4, 8, 1, 3, 7 ],
//  [ 8, 7, 3, 5, 1, 2, 9, 6, 4 ]
//]) ➞ true
//
//sudokuValidator([
//  [ 1, 1, 2, 4, 8, 9, 3, 7, 6 ],
//  [ 7, 3, 9, 2, 5, 6, 8, 4, 1 ],
//  [ 4, 6, 8, 3, 7, 1, 2, 9, 5 ],
//  [ 3, 8, 7, 1, 2, 4, 6, 5, 9 ],
//  [ 5, 9, 1, 7, 6, 3, 4, 2, 8 ],
//  [ 2, 4, 6, 8, 9, 5, 7, 1, 3 ],
//  [ 9, 1, 4, 6, 3, 7, 5, 8, 2 ],
//  [ 6, 2, 5, 9, 4, 8, 1, 3, 7 ],
//  [ 8, 7, 3, 5, 1, 2, 9, 6, 4 ]
//]) ➞ false
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//// Validate 3 x 3 Boxes
//Test.assertEquals(sudokuValidator(
//[ [ 1, 5, 2, 4, 8, 9, 3, 7, 6 ],
//  [ 7, 3, 9, 2, 5, 6, 8, 4, 1 ],
//  [ 4, 6, 5, 3, 7, 1, 2, 9, 8 ],
//  [ 3, 8, 7, 1, 2, 4, 6, 5, 9 ],
//  [ 8, 9, 1, 7, 6, 3, 4, 2, 5 ],
//  [ 2, 4, 6, 5, 9, 8, 7, 1, 3 ],
//  [ 9, 1, 4, 6, 3, 7, 5, 8, 2 ],
//  [ 6, 2, 8, 9, 4, 5, 1, 3, 7 ],
//  [ 5, 7, 3, 8, 1, 2, 9, 6, 4 ] ]), 
//false)
//​
////
//Test.assertEquals(sudokuValidator(
//[ [ 1, 5, 2, 4, 8, 9, 3, 7, 6 ],
//  [ 7, 3, 9, 2, 5, 6, 8, 4, 1 ],
//  [ 4, 6, 8, 3, 7, 1, 2, 9, 5 ],
//  [ 3, 8, 7, 1, 2, 4, 6, 5, 9 ],
//  [ 5, 9, 1, 7, 6, 3, 4, 2, 8 ],
//  [ 2, 4, 6, 8, 9, 5, 7, 1, 3 ],
//  [ 9, 1, 4, 6, 3, 7, 5, 8, 2 ],
//  [ 6, 2, 5, 9, 4, 8, 1, 3, 7 ],
//  [ 8, 7, 3, 5, 1, 2, 9, 6, 4 ] ]), 
//true)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Fit the Pattern

//tags: arrays,functional_programming

//url: https://edabit.com/challenge/oXWwHkutPD5Aer6Db

//Description:
//Create a function that checks if the sub-arrays in an array adhere to the specified pattern.
//Examples
//checkPattern([[1, 1], [2, 2], [1, 1], [2, 2]], "ABAB") ➞ true
//
//checkPattern([[1, 2], [1, 3], [1, 4], [1, 2]], "ABCA") ➞ true
//
//checkPattern([[1, 2, 3], [1, 2, 3], [3, 2, 1], [3, 2, 1]], "AABB") ➞ true
//
//checkPattern([[8, 8, 8, 8], [7, 7, 7, 7], [6, 6, 6, 6], [5, 5, 5, 5]], "ABCD") ➞ true
//
//checkPattern([[8, 8, 8, 8], [7, 7, 7, 7], [6, 6, 6, 6], [5, 5, 5, 5]], "DCBA") ➞ true
//Notes
//The length of the pattern will always be the same as the length of the (main) array.
//The pattern does not necessarily have to be alphabetically ordered (see last example).

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(checkPattern([[1, 1], [2, 2], [1, 1], [2, 2]], "ABAB"), true)
//Test.assertEquals(checkPattern([[1, 2], [1, 2], [1, 2], [1, 2]], "AAAA"), true)
//Test.assertEquals(checkPattern([[1, 2], [1, 3], [1, 4], [1, 2]], "ABCA"), true)
//Test.assertEquals(checkPattern([[1, 2, 3], [1, 2, 3], [3, 2, 1], [3, 2, 1]], "AABB"), true)
//Test.assertEquals(checkPattern([[8, 8, 8, 8], [7, 7, 7, 7], [6, 6, 6, 6], [5, 5, 5, 5]], "ABCD"), true)
//Test.assertEquals(checkPattern([[8, 8, 8, 8], [7, 7, 7, 7], [6, 6, 6, 6], [5, 5, 5, 5]], "DCBA"), true)
//Test.assertEquals(checkPattern([[8], [7], [6], [6]], "ABCC"), true)
//Test.assertEquals(checkPattern([[8], [9], [9], [9]], "ABBB"), true)
//Test.assertEquals(checkPattern([[1, 1], [2, 2], [1, 1], [1, 2]], "ABAB"), false)
//Test.assertEquals(checkPattern([[1, 2], [1, 2], [2, 2], [3, 2]], "AAAA"), false)
//Test.assertEquals(checkPattern([[8], [9], [9], [8]], "ABBB"), false)
//Test.assertEquals(checkPattern([[8], [7], [6], [5]], "ABCC"), false)
//Test.assertEquals(checkPattern([[8, 8, 8, 8], [7, 7, 7, 7], [6, 6, 6, 6], [5, 5, 5, 5]], "DDBA"), false)
//Test.assertEquals(checkPattern([[1, 2], [1, 2], [1, 2], [1, 2]], "AABA"), false)

