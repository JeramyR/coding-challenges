

//title: Adding Both Ends Together

//tags: arrays,loops,numbers

//url: https://edabit.com/challenge/ki2njto7agJD3EdZ6

//Description:
//Given an array of numbers, of any length, create a function which counts how many of those numbers pass the following criteria:
//The first and last digits of a number must add to 10.
//Examples
//endsAddTo10([19, 46, 2098]) ➞ 3
//
//endsAddTo10([33, 44, -55]) ➞ 1
//
//endsAddTo10([]) ➞ 0
//Notes
//All items in the array will be numbers.
//Ignore negative signs (see example #2).
//If the number contains only one digit, that digit will be the first and the last digit.
//If given an empty array, return 0.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(endsAddTo10([19, 46, 2098]), 3)
//Test.assertEquals(endsAddTo10([33, 44, -55]), 1)
//Test.assertEquals(endsAddTo10([]), 0)
//Test.assertEquals(endsAddTo10([-91, 55, -33]), 2)
//Test.assertEquals(endsAddTo10([100, -10, 1, 3, 2, 5, 2]), 1) // I think 5 should count.
//Test.assertEquals(endsAddTo10([19, 28, 37, 46, 55, 64, 73, 82, 91]), 9)
//Test.assertEquals(endsAddTo10([-19, -28, -37, -46, -55, -64, -73, -82, -91]), 9)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Accumulating Product

//tags: arrays,numbers

//url: https://edabit.com/challenge/QXRdQoWRMx4rZ8WDR

//Description:
//Create a function that takes an array and returns an array of the accumulating product.
//Examples
//accumulatingProduct([1, 2, 3, 4]) ➞ [1, 2, 6, 24]
//// [1, 2, 6, 24] can be written as [1, 1 x 2, 1 x 2 x 3, 1 x 2 x 3 x 4]
//
//accumulatingProduct([1, 5, 7]) ➞ [1, 5, 35]
//
//accumulatingProduct([1, 0, 1, 0]) ➞ [1, 0, 0, 0]
//
//accumulatingProduct([]) ➞ []
//Notes
//An empty array should return an empty array [].

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(accumulatingProduct([1, 2, 3, 4]), [1, 2, 6, 24])
//Test.assertSimilar(accumulatingProduct([5, 10, 1, 1]), [5, 50, 50, 50])
//Test.assertSimilar(accumulatingProduct([1, 5, 7]), [1, 5, 35])
//Test.assertSimilar(accumulatingProduct([1, 0, 1, 0]), [1, 0, 0, 0])
//Test.assertSimilar(accumulatingProduct([1]), [1])
//Test.assertSimilar(accumulatingProduct([1, 2, 2, 2, 2, 2, 2]), [1, 2, 4, 8, 16, 32, 64])
//Test.assertSimilar(accumulatingProduct([1, 1, 1, 1, 1, 1, 1]), [1, 1, 1, 1, 1, 1, 1])
//Test.assertSimilar(accumulatingProduct([]), [])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Time Conversion

//tags: algebra,math,numbers,strings

//url: https://edabit.com/challenge/vGg5Q5WGHw5fNgwr7

//Description:
//Write a function that takes the number of seconds and returns the digital format clock time as a string. Time should be counted from 00:00:00.
//Examples
//digitalClock(5025) ➞ "01:23:45"
//// 5025 seconds is 1 hour, 23 mins, 45 secs.
//
//digitalClock(61201) ➞ "17:00:01"
//// No AM/PM. 24h format.
//
//digitalClock(87000) ➞ "00:10:00"
//// It's 00:10 next day.
//Notes
//seconds is always greater than or equal to 0.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//let [arrVector, resVector] = [
//    [5025, 61201, 87000, 40271, 86399, 4666, 178056],
//    ["01:23:45", "17:00:01", "00:10:00", "11:11:11", "23:59:59", "01:17:46", "01:27:36"]
//]
//for (let i in arrVector) Test.assertEquals(digitalClock(arrVector[i]), resVector[i])

