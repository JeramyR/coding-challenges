

//title: The Reverser!

//tags: formatting,language_fundamentals,strings

//url: https://edabit.com/challenge/m3Ho3E9KDE7i8XKCn

//Description:
//The "Reverser" takes a string as input and returns that string in reverse order, with the opposite case.
//Examples
//reverse("Hello World") ➞ "DLROw OLLEh"
//
//reverse("ReVeRsE") ➞ "eSrEvEr"
//
//reverse("Radar") ➞ "RADAr"
//Notes
//There will be no punctuation in any of the test cases.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(reverse("Hello World"), "DLROw OLLEh")
//Test.assertEquals(reverse("ReVeRsE"), "eSrEvEr")
//Test.assertEquals(reverse(""), "")
//Test.assertEquals(reverse("Radar"), "RADAr")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Positive Count / Negative Sum

//tags: arrays,conditions,numbers

//url: https://edabit.com/challenge/xXJLZry3vYd4erPct

//Description:
//Create a function that takes an array of positive and negative numbers. Return an array where the first element is the count of positive numbers and the second element is the sum of negative numbers.
//Examples
//countPosSumNeg([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]) ➞ [10, -65]
//// There are a total of 10 positive numbers.
//// The sum of all negative numbers equals -65.
//
//countPosSumNeg([92, 6, 73, -77, 81, -90, 99, 8, -85, 34]) ➞ [7, -252]
//
//countPosSumNeg([91, -4, 80, -73, -28]) ➞ [2, -105]
//
//countPosSumNeg([]) ➞ []
//Notes
//If given an empty array, return an empty array: []
//0 is not positive.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(countPosSumNeg([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]), [10, -65])
//Test.assertSimilar(countPosSumNeg([92, 6, 73, -77, 81, -90, 99, 8, -85, 34]), [7, -252])
//Test.assertSimilar(countPosSumNeg([91, -4, 80, -73, -28]), [2, -105])
//Test.assertSimilar(countPosSumNeg([]), [])
//Test.assertSimilar(countPosSumNeg([69, 100, 28, 47, 53, -61, -24]), [5, -85])
//Test.assertSimilar(countPosSumNeg([5, 7, 9, -3, -7, 61, -24]), [4, -34])
//Test.assertSimilar(countPosSumNeg([98, 51, -19, -97]), [2, -116])
//Test.assertSimilar(countPosSumNeg([-42, 3, -51, -64, 69, 77, -20, -5, 68, -76]), [4, -258])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Remove Repeated Characters

//tags: data_structures,strings

//url: https://edabit.com/challenge/cgSmKhr3Hzez2Pt9n

//Description:
//Create a function that will remove any repeated character(s) in a word passed to the function. Not just consecutive characters, but characters repeating anywhere in the input.
//Examples
//unrepeated("hello") ➞ "helo"
//
//unrepeated("aaaaa") ➞ "a"
//
//unrepeated("WWE!!!") ➞ "WE!"
//
//unrepeated("call 911") ➞ "cal 91"
//Notes
//No more than two words will be passed.
//Try to use new data type introduced in ES6.
//Notice that a string is iterable.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(unrepeated("hello"), "helo")
//Test.assertEquals(unrepeated("aaaaa"), "a")
//Test.assertEquals(unrepeated("WWE!!!"), "WE!")
//Test.assertEquals(unrepeated("call 911"), "cal 91")
//Test.assertEquals(unrepeated("altwaff test"), "altwf es")

