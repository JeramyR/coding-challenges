

//title: Three Arrays!

//tags: arrays,interview,math,numbers

//url: https://edabit.com/challenge/Ff2iFMu3exGJ4StTc

//Description:
//Given three arrays of integers: arr1, arr2, arr3, return the sum of integers which are common in all three arrays.
//Examples
//sumCommon([1, 2, 3], [5, 3, 2], [7, 3, 2]) ➞ 5
//// 2 & 3 are common in all 3 arrays.
//
//sumCommon([1, 2, 2, 3], [5, 3, 2, 2], [7, 3, 2, 2]) ➞ 7
//// 2, 2 & 3 are common in all 3 arrays.
//
//sumCommon([1], [1], [2]) ➞ 0
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(sumCommon([1, 2, 3], [5, 3, 2], [7, 3, 2]), 5)
//Test.assertEquals(sumCommon([1, 2, 2, 3], [5, 3, 2, 2], [7, 3, 2, 2]), 7)
//Test.assertEquals(sumCommon([1], [1], [1]), 1)
//Test.assertEquals(sumCommon([1], [1], [2]), 0)
//Test.assertEquals(sumCommon([1, 2, 2, 3, 2], [5, 3, 2, 2, 1], [7, 3, 2, 2, 1]), 8);
//// Mubashir

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: A Possible Shape?

//tags: arrays,math,validation

//url: https://edabit.com/challenge/H2fcrbXCBPpsJ59wv

//Description:
//Given the number n and an array of interior angles angles, return whether or not it's possible to make a polygon with n sides with the angles given. Remember that angles must be equals or under 180° and over 0°.
//isShapePossible(3, [80, 70, 30]) ➞ true
//
//A shape with 3 sides and the angles 80°, 70° and 30° is a possible shape.
//Examples
//isShapePossible(4, [90, 90, 90, 90]) ➞ true
//
//isShapePossible(3, [20, 20, 140]) ➞ true
//
//isShapePossible(1, [21]) ➞ false
//// n must be larger than 2
//
//isShapePossible(5, [500, 0, 20, 10, 10]) ➞ false
//// You can't have an interior angle bigger than 180°
//// You can't have an interior angle lower than 0° or equal to 0°
//Notes
//Return false if n is less than 3 (see example #3).
//There will always be an n number of positive integers given as angles.
//The sum of interior angles is (n - 2) x 180°.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(isShapePossible(4, [90, 90, 90, 90]), true);
//Test.assertEquals(isShapePossible(3, [20, 20, 140]), true);
//Test.assertEquals(isShapePossible(1, [21]), false, 'Remember not to allow shapes with under 3 sides');
//Test.assertEquals(isShapePossible(5, [100, 100, 100, 200, 40]), false);
//Test.assertEquals(isShapePossible(7, [830, 20, 20, 10, 10, 5, 5]), false, 'Angles cannot be larger than 180');
//Test.assertEquals(isShapePossible(4, [90, 90, 90, 89]), false);
//Test.assertEquals(isShapePossible(2, [21, 78]), false);
//Test.assertEquals(isShapePossible(8, [135, 135, 135, 135, 135, 135, 135, 135]), true);
//Test.assertEquals(isShapePossible(5, [500, 10, 10, 10, 10]), false);
//Test.assertEquals(isShapePossible(10, [21, 12, 333, 2, 2532, 52, 2, 2, 1, 8]), false);
//Test.assertEquals(isShapePossible(5, [108, 108, 108, 108, 108]), true);
//Test.assertEquals(isShapePossible(3, [180, 0, 0]), false, 'Angles cannot be equal to 0°');
//Test.assertEquals(isShapePossible(4, [180, 180, -10, 10]), false, 'Angles cannot be lower than 0°');
//​
//// made by @Joshua Señoron

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Who`s The Oldest?

//tags: data_structures,language_fundamentals,objects

//url: https://edabit.com/challenge/vPmDvWoP2wj5KpWZi

//Description:
//Given an object containing the names and ages of a group of people, return the name of the oldest person.
//Examples
//oldest({
//  Emma: 71,
//  Jack: 45,
//  Amy: 15,
//  Ben: 29
//}) ➞ "Emma"
//
//oldest({
//  Max: 9,
//  Josh: 13,
//  Sam: 48,
//  Anne: 33
//}) ➞ "Sam"
//Notes
//All ages will be different.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(oldest({Charlotte: 53, Oliver: 15, Henry: 18, Gabriel: 46, Violet: 13}), "Charlotte")
//Test.assertEquals(oldest({Grayson: 50, Imogen: 63, Logan: 21, Daniel: 64, Rory: 19}), "Daniel")
//Test.assertEquals(oldest({Josh: 78, Adam: 63, Aria: 65, Grace: 51, Bella: 37}), "Josh")
//Test.assertEquals(oldest({Alex: 9, Jayden: 18, Julia: 43, Penelope: 32, Ella: 34}), "Julia")
//Test.assertEquals(oldest({Sam: 65, Joseph: 60, Mia: 41, Thomas: 31, Rebecca: 5}), "Sam")
//Test.assertEquals(oldest({Eden: 64, Archie: 18, Olivia: 32, Kai: 84, Harry: 14}), "Kai")
//Test.assertEquals(oldest({Anna: 67, Elijah: 10, Cole: 31, Andrew: 24, Elliot: 77}), "Elliot")
//Test.assertEquals(oldest({Innes: 77, Lilly: 11, Hallie: 41, Nina: 66, Ryan: 9}), "Innes")
//Test.assertEquals(oldest({Isla: 73, Elsie: 6, Frankie: 36, Robbie: 75, Kayla: 9}), "Robbie")
//Test.assertEquals(oldest({Jack: 64, Jacob: 33, Tommy: 17, Finn: 5, Isaac: 13}), "Jack")
//Test.assertEquals(oldest({Carson: 81, Charlie: 33, Riley: 28, Maria: 39, Sadie: 67}), "Carson")
//Test.assertEquals(oldest({Amy: 70, Owen: 11, Matilda: 64, Lexi: 37, Lena: 26}), "Amy")
//Test.assertEquals(oldest({Lola: 45, Tyler: 23, Hope: 4, Phoebe: 86, Freya: 44}), "Phoebe")
//Test.assertEquals(oldest({Hollie: 48, Harris: 24, Ava: 72, Alfie: 9, Louis: 47}), "Ava")
//Test.assertEquals(oldest({Erica: 32, Eve: 82, Harper: 74, Summer: 38, Ben: 72}), "Eve")
//Test.assertEquals(oldest({Michael: 63, Jessica: 65, Reuben: 25, Aiden: 82, Emily: 18}), "Aiden")
//Test.assertEquals(oldest({Brooke: 8, Lucy: 44, Cooper: 33, Ellie: 82, Millie: 7}), "Ellie")
//Test.assertEquals(oldest({Piper: 10, Quinn: 62, David: 20, John: 61, Noah: 17}), "Quinn")
//Test.assertEquals(oldest({Cara: 5, Max: 81, Lucas: 62, Sophie: 71, Amelia: 79}), "Max")
//Test.assertEquals(oldest({Leo: 29, Clara: 8, Florence: 69, Lewis: 38, James: 47}), "Florence")

