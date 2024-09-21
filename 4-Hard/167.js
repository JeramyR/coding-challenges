

//title: Equalize an Array

//tags: algorithms,arrays,logic,loops

//url: https://edabit.com/challenge/6xfeFywjKqinKsmwd

//Description:
//Mubashir needs your help to equalize (make all array elements the same) an array.
//Create a function that takes an array of integers arr and a constant c and returns minimum number of operations required to equalize the given array.
//Rules
//You can choose any integer x to equalize the given array.
//Pick a contiguous subarray of length not greater than the given c
//Examples
//arr = [1, 2, 2, 1, 2, 1, 2, 2, 2, 1, 1, 1], c = 2
//equalize(arr, c) ➞ 4
//You have chosen x = 1 (change all values of the array to 1)
//
//[1, 2, 2, 1, 2, 1, 2, 2, 2, 1, 1, 1]
//[1, 1, 1, 1, 2, 1, 2, 2, 2, 1, 1, 1] -> Step 1
//[1, 1, 1, 1, 1, 1, 2, 2, 2, 1, 1, 1] -> Step 2
//[1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1] -> Step 3
//[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] -> Step 4
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(equalize([1, 2, 2, 1, 2, 1, 2, 2, 2, 1, 1, 1], 2), 4)
//Test.assertEquals(equalize([5, 2, 3, 5, 2, 2, 3, 5, 1, 2, 5, 1, 2, 5, 3], 7), 2)
//Test.assertEquals(equalize([1, 2, 2, 1, 1, 1, 2, 2, 2, 1, 1, 1], 9), 1)
//// Mubashir

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Find the Lost Dog

//tags: arrays,language_fundamentals,logic,loops,math

//url: https://edabit.com/challenge/3zx9SHGic8mpoMhQs

//Description:
//0 represents the dog.
//Each array represents a house and each 1 represents an empty room.
//Return the house and the room where it is located, there can be only one dog lost per building.
//Examples
//lostDog([1, 1, 1, 1, 1, 1],  [1, 1, 1, 1, 1, 1],  [1, 1, 1, 1, 1, 1],  [1, 1, 1, 1, 1, 1])
//➞ "Dog not found!"
//
//lostDog([1, 1, 1, 1, 1, 1],  [0, 1, 1, 1, 1, 1],  [1, 0, 1, 1, 1, 1],  [1, 1, 1, 1, 1, 1])
//➞ {"Dog1": "House (2) and Room (1)", "Dog2": "House (3) and Room (2)"}
//
//lostDog([1, 1, 1, 1, 1, 0],  [0, 1, 1, 1, 1, 1],  [1, 0, 1, 1, 1, 1],  [1, 1, 0, 1, 1, 1])
//➞ {"Dog1": "House (1) and Room (6)", "Dog2": "House (2) and Room (1)", "Dog3": "House (3) and Room (2)", "Dog4": "House (4) and Room (3)"}
//Notes
//Check the Resources if you're stuck.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(lostDog([1,1,1,1,1,0], [0,1,1,1,1,1], [1,0,1,1,1,1], [1,1,0,1,1,1]), {'Dog1': 'House (1) and Room (6)', 'Dog2': 'House (2) and Room (1)', 'Dog3': 'House (3) and Room (2)', 'Dog4': 'House (4) and Room (3)'})
//Test.assertSimilar(lostDog([1,1,0,1,1,1], [1,1,1,1,1,1], [1,1,1,1,1,1], [1,1,0,1,1,1]), {'Dog1': 'House (1) and Room (3)', 'Dog2': 'House (4) and Room (3)'})
//Test.assertSimilar(lostDog([1,1,0,1,1,1], [1,1,1,1,1,1], [1,1,1,1,1,1], [1,1,1,1,1,1]), {'Dog1': 'House (1) and Room (3)'})
//Test.assertSimilar(lostDog([1,1,1,1,1,1], [0,1,1,1,1,1], [0,1,1,1,1,1], [1,1,1,1,1,1]),{'Dog1': 'House (2) and Room (1)', 'Dog2': 'House (3) and Room (1)'})
//Test.assertSimilar(lostDog([1,1,1,1,1,1], [1,1,1,1,1,1], [1,1,1,1,1,1], [1,1,1,1,1,1]), 'Dog not found!')
//Test.assertSimilar(lostDog([1,1,1,1,1,1], [1,1,1,1,1,1], [1,1,1,1,1,1], [1,1,1,0,1,1]), {'Dog1': 'House (4) and Room (4)'})

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: The Nth Term of the Sequence

//tags: loops,math,numbers

//url: https://edabit.com/challenge/SaP7mAdsQCrN4ShCi

//Description:
//Write a function containing an expression, in terms of n, for the nth term of the sequence that has the following first six terms:
//2, 6, 13, 23, 36, 52 ...and the sequence continues.
//Examples
//seq(1) ➞ 2
//
//seq(2) ➞ 6
//
//seq(6) ➞ 52
//Notes
//The parameter n is always >= 0.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(seq(1), 2)
//Test.assertEquals(seq(2), 6)
//Test.assertEquals(seq(0), 1, "If the formula is right, 0 can be an input.")
//Test.assertEquals(seq(18), 478)
//Test.assertEquals(seq(27), 1081)
//Test.assertEquals(seq(6), 52)
//Test.assertEquals(seq(99), 14653)

