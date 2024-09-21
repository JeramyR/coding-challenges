

//title: Outlier Number

//tags: arrays,math,numbers

//url: https://edabit.com/challenge/rThajiu3LF7qiKpv9

//Description:
//Given an array of either entirely odd integers or entirely even integers except for a single Outlier Number, create a function to return this number.
//Examples
//outlierNumber([2, 3, 4]) ➞ 3
//// 2 and 4 are even numbers.
//// 3 is an outlier number.
//
//outlierNumber([1, 2, 3]) ➞ 2
//
//outlierNumber([4, 1, 3, 5, 9]) ➞ 4
//Notes
//Array size will always be >= 3.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(outlierNumber([2, 3, 4]), 3)
//Test.assertEquals(outlierNumber([1, 2, 3]), 2)
//Test.assertEquals(outlierNumber([4, 1, 3, 5, 9]), 4)
//Test.assertEquals(outlierNumber([2, 6, 8, 10, 3]), 3)
//Test.assertEquals(outlierNumber([2,6,8,200,700,1,84,10,4]), 1)
//Test.assertEquals(outlierNumber([17,6,8,10,6,12,24,36]), 17)
//Test.assertEquals(outlierNumber([1,1,1,1,1,44,7,7,7,7,7,7,7,7]), 44)
//Test.assertEquals(outlierNumber([3,3,3,3,3,3,3,3,3,3,3,3,3,3,35,5,5,5,5,5,5,5,5,5,5,7,7,7,7,1000]), 1000)
//Test.assertEquals(outlierNumber([1, 0, 0]), 1)
//Test.assertEquals(outlierNumber([3,7,-99,81,90211,0,7]), 0)
//Test.assertEquals(outlierNumber([2,-6,8,-10,-3]), -3)
//Test.assertEquals(outlierNumber([2,6,8,2,-66,34,-35,66,700,1002,-84,10,4]), -35)
//Test.assertEquals(outlierNumber([-20,1,7,17,19,211,7]), -20)
//Test.assertEquals(outlierNumber([1,1,-1,1,1,-44,7,7,7,7,7,7,7,7]), -44)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Return Odd > Even

//tags: math,numbers,validation

//url: https://edabit.com/challenge/PqriC6CkLE5JW57aW

//Description:
//Given an array, return true if there are more odd numbers than even numbers, otherwise return false.
//Examples
//oddeven([1, 2, 3, 4, 5, 6, 7, 8, 9]) ➞ true
//
//oddeven([1]) ➞ true
//
//oddeven([13452394823795273847528572346]) ➞ false
//Notes
//All arrays will have at least 1 item.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(oddeven([1, 2, 3, 4, 5, 6, 7, 8, 9]), true)
//Test.assertEquals(oddeven([1]), true)
//Test.assertEquals(oddeven([1, 2, 3, 4, 5, 6, 7, 9]), true)
//Test.assertEquals(oddeven([42, 1, 66]), false)
//Test.assertEquals(oddeven([2, 3, 4, 5, 6, 7, 8]), false)
//Test.assertEquals(oddeven([43264573658142353463158]), false)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Move Zeroes

//tags: arrays,interview,sorting

//url: https://edabit.com/challenge/5cGbZP8N9mQXzDwML

//Description:
//Create a function that takes an array arr of numbers and moves all zeros to the end, preserving the order of the other elements.
//Examples
//moveZeros([1, 0, 1, 2, 0, 1, 3]) ➞ [1, 1, 2, 1, 3, 0, 0]
//
//moveZeros([0, 1, null, 2, false, 1, 0]) ➞ [1, null, 2, false, 1, 0, 0]
//
//moveZeros(['a', 0, 0, 'b', 'c', 'd', 0, 1, 0, 1, 0, 3, 0, 1, 9, 0, 0, 0, 0, 9]) ➞ ['a', 'b', 'c', 'd', 1, 1, 3, 1, 9, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(moveZeros([1,2,0,1,0,1,0,3,0,1]), [1,2,1,1,3,1,0,0,0,0])
//Test.assertSimilar(moveZeros([9,0.0,0,9,1,2,0,1,0,1,0.0,3,0,1,9,0,0,0,0,9]), [9,9,1,2,1,1,3,1,9,9,0,0,0,0,0,0,0,0,0,0])
//Test.assertSimilar(moveZeros(["a",0,0,"b","c","d",0,1,0,1,0,3,0,1,9,0,0,0,0,9]), ["a","b","c","d",1,1,3,1,9,9,0,0,0,0,0,0,0,0,0,0])
//Test.assertSimilar(moveZeros(["a",0,0,"b",null,"c","d",0,1,false,0,1,0,3,[],0,1,9,0,0,0,0,9]), ["a","b",null,"c","d",1,false,1,3,[],1,9,9,0,0,0,0,0,0,0,0,0,0])
//Test.assertSimilar(moveZeros([0,1,null,2,false,1,0]), [1,null,2,false,1,0,0])
//Test.assertSimilar(moveZeros(["a","b"]), ["a","b"])
//Test.assertSimilar(moveZeros(["a"]), ["a"])
//Test.assertSimilar(moveZeros([0,0]), [0,0])
//Test.assertSimilar(moveZeros([0]), [0])
//Test.assertSimilar(moveZeros([false]), [false])
//Test.assertSimilar(moveZeros([]), [])
////Mubashir

