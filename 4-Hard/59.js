

//title: Extend the Array Prototype with a `compact()` Method

//tags: arrays,language_fundamentals

//url: https://edabit.com/challenge/SNornDmdQ7ZJngoTn

//Description:
//Extend the global Array object to have an instance method named compact() which returns a copy of the array without duplicate entries, and falsey values (with the exception of 0 and false).
//Examples
//[1, 2, 2, 3, 4, 4, 5].compact() ➞ [1, 2, 3, 4, 5]
//
//[true, false, true, false].compact() ➞ [true, false]
//
//[0, "hello", undefined, 17.2].compact() ➞ [0, "hello", 17.2]
//
//[null, 0, undefined, 1, "h", "", 892].compact() ➞ [0, 1, "h", 892]
//Notes
//This does not need to consider / work with objects, arrays, or non-primitive types as entries. Bonus if it does though!

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar([9, 9, 9, 8, 0, undefined].compact(), [9, 8, 0], "Test #1")
//Test.assertSimilar(["", "hello", null, null, "hello"].compact(), ["hello"], "Test #2")
//Test.assertSimilar([1, 2, 2, 3, null, 0, "", undefined, "another"].compact(), [1, 2, 3, 0, "another"], "Test #3")
//Test.assertSimilar([true, true, false, 0, null].compact(), [true, false, 0], "Test #4")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Standard Deviation

//tags: arrays,math,numbers

//url: https://edabit.com/challenge/viGn9gKzCLTJLKkjA

//Description:
//The central tendency measures (mean, mode and median) sometimes aren't enough descriptives in a data set analysis. For example, given two arrays A=[15, 15, 15, 14, 16] and B=[2, 7, 14, 22, 30] the mean is μ=15 in both cases, however the values of second array are clearly more spread out from the average value. The standard deviation (also called sigma, the greek lowercase letter σ) measures the spread of the values in a data set and transform the "clearly more spread out than" assertion in a proofed statistical assertion. You can find more information in the Resources tab.
//The standard deviation is calculated following five steps:
//Obtain the mean of the data set.
//For each value in the set calculate the absolute difference between the value and the mean.
//Square each value obtained and sum them cumulatively.
//Divide the result by the data set length.
//Get the square root of the value obtained.
//Given an array of values return the standard deviation rounded to the nearest hundredth.
//Examples
//standardDeviation([3, 5, 7]) ➞ 1.63
//// |(3-5)|+|(5-5)|+|(7-5)| = 2² + 0 + 2² = 8 / 3 = square root of 2.66 = 1.63
//
//standardDevition([5, 5, 5]) ➞ 0
//// Values aren't deviating from the mean.
//
//standardDeviation([-3, -5, -7]) ➞ 1.63
//// Remember: absolute differences!
//Notes
//All given arrays are valid, no exceptions to handle.
//Arrays can contain either positive or negative integers.
//Remember to round to the nearest hundredth at the end.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(standardDeviation([15, 15, 15, 14, 16]), 0.63)
//Test.assertEquals(standardDeviation([1, 2, 3, 4, 5]), 1.41)
//Test.assertEquals(standardDeviation([-24, 3, -15, 131, 8, 42, 11, -70, 12, 0, 33, 48, 20, 20, 20]), 41.43)
//Test.assertEquals(standardDeviation([-10, -1, -100]), 44.70)
//Test.assertEquals(standardDeviation([18, 18, 18]), 0)
//Test.assertEquals(standardDeviation([2, 7, 14, 22, 30]), 10.08)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Get Real Type

//tags: strings,validation

//url: https://edabit.com/challenge/yfRLRFYF8sdr7kRRq

//Description:
//Create a function that takes a value as an argument and returns the type of this value. You should get the real type of a value (JavaScript typeof doesn't return the real object type of values and you need to fix that).
//Examples
//realType(1) ➞ "number"
//
//realType("a") ➞ "string"
//
//realType(true) ➞ "boolean"
//
//realType([]) ➞ "array"
//
//realType(null) ➞ "null"
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//const values = [[],{},"",1,function(){},new RegExp(),true,null,undefined,Date, new Date(),NaN, Infinity,Error, new Error(), new String(), new Number(),0xFF];
//const answers = ["array","object","string","number","function","regexp","boolean","null","undefined","function","date","number","number","function","error","string","number","number"];
//​
//for (var i = 0; i < values.length;i++){
//  Test.assertEquals(realType(values[i]), answers[i]);
//}

