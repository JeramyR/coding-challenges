

//title: Sums of Powers of Two

//tags: algorithms,math,numbers

//url: https://edabit.com/challenge/Cn3Xg9uYFbYj2QHZz

//Description:
//Every number can be expressed as the sum between unique powers of two. For example, the number 21 can be expressed as 1 + 4 + 16, which can also be written as 2^0 + 2^2 + 2^4.
//Create a function that returns a sorted list of powers of two, which add together to make n.
//Examples
//sumsPowersTwo(21) ➞ [1, 4, 16]
//
//sumsPowersTwo(8) ➞ [8]
//
//sumsPowersTwo(63) ➞ [1, 2, 4, 8, 16, 32]
//Notes
//Tests will only include positive whole numbers.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(sumsPowersTwo(1), [1])
//Test.assertSimilar(sumsPowersTwo(5), [1, 4])
//Test.assertSimilar(sumsPowersTwo(7), [1, 2, 4])
//Test.assertSimilar(sumsPowersTwo(8), [8])
//Test.assertSimilar(sumsPowersTwo(10), [2, 8])
//Test.assertSimilar(sumsPowersTwo(21), [1, 4, 16])
//Test.assertSimilar(sumsPowersTwo(53), [1, 4, 16, 32])
//Test.assertSimilar(sumsPowersTwo(63), [1, 2, 4, 8, 16, 32])
//Test.assertSimilar(sumsPowersTwo(99), [1, 2, 32, 64])
//Test.assertSimilar(sumsPowersTwo(100), [4, 32, 64])
//Test.assertSimilar(sumsPowersTwo(556846320), [16, 32, 64, 128, 1024, 2048, 16384, 32768, 1048576, 2097152, 16777216, 536870912])
//Test.assertSimilar(sumsPowersTwo(509104470), [2, 4, 16, 64, 256, 4096, 16384, 524288, 1048576, 4194304, 33554432, 67108864, 134217728, 268435456])
//Test.assertSimilar(sumsPowersTwo(929640411), [1, 2, 8, 16, 64, 128, 256, 512, 1024, 2048, 8192, 65536, 524288, 2097152, 4194304, 16777216, 33554432, 67108864, 268435456, 536870912])
//Test.assertSimilar(sumsPowersTwo(341971175), [1, 2, 4, 32, 64, 128, 4096, 131072, 2097152, 4194304, 67108864, 268435456])
//Test.assertSimilar(sumsPowersTwo(329418410), [2, 8, 32, 128, 512, 1024, 32768, 131072, 2097152, 8388608, 16777216, 33554432, 268435456])
//// Joshua Señoron

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Can You Make the Numbers?

//tags: arrays,higher_order_functions,loops

//url: https://edabit.com/challenge/sEn8HvF2pHiv4La2N

//Description:
//You are given an array representing the number of 0s, 1s, 2s, ..., 9s you have. The function will look like:
//can_build([#0s, #1s, #2s, ..., #9s], [num1, num2, ...])
//Write a function that returns true if you can build the following numbers using only the digits you have.
//Examples
//canBuild([0, 1, 2, 2, 3, 0, 0, 0, 1, 1], [123, 444, 92]) ➞ true
//
//// You have: one 1, two 2s, two 3s, three 4s, one 8 and one 9
//// Using only these digits, you can build 123, 444, and 92
//
//canBuild([10, 2, 3, 8, 5, 8, 5, 5, 3, 1], [11, 2, 22, 49, 444, 998, 87, 44]) ➞ false
//
//canBuild([0, 0, 0, 0, 0, 0, 0, 0, 0, 0], []) ➞ true
//
//canBuild([0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [3]) ➞ false
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(canBuild([0, 0, 0, 0, 0, 0, 0, 0, 0, 0], []), true)
//Test.assertEquals(canBuild([1, 1, 0, 0, 0, 0, 0, 0, 1, 0], [1, 8]), true)
//Test.assertEquals(canBuild([1, 1, 0, 0, 0, 0, 0, 0, 1, 0], [1, 80]), true)
//Test.assertEquals(canBuild([0, 1, 2, 2, 3, 0, 0, 0, 1, 1], [123, 444, 92]), true)
//Test.assertEquals(canBuild([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [10, 23, 45, 6789]), true)
//Test.assertEquals(canBuild([0, 2, 3, 0, 5, 0, 0, 0, 0, 1], [11, 2, 22, 49, 444, 4]), true)
//Test.assertEquals(canBuild([1, 1, 0, 0, 0, 0, 0, 0, 1, 0], [1, 80, 0]), false)
//Test.assertEquals(canBuild([0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [1]), false)
//Test.assertEquals(canBuild([0, 2, 3, 0, 5, 0, 0, 0, 0, 1], [11, 7, 2, 22, 49, 444, 4]), false)
//Test.assertEquals(canBuild([0, 2, 3, 0, 5, 0, 0, 0, 0, 1], [11, 2, 22, 49, 444, 44]), false)
//Test.assertEquals(canBuild([10, 2, 3, 8, 5, 8, 5, 5, 3, 1], [11, 2, 22, 49, 444, 998, 87, 44]), false)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Repeat a Char

//tags: algorithms

//url: https://edabit.com/challenge/HQXJLmsGK9KiKmeDf

//Description:
//In this challenge you should repeat a specific given char x times. Create a function that takes a string and a number as arguments and return a string.
//Examples
//repeat("-", 3) ➞ "---"
//
//repeat("A", 0) ➞ ""
//
//repeat("c", -1) ➞ ""
//Notes
//Tests can repeat a char 268435440 times, no more.
//Repeat should be fast maximum execution time : 5 ms.
//Total maximum execution time : 3800 ms.
//Native repeat is forbidden.
//Using of an existing repeat polyfill too (that's not the challenge objective).

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//const Proxy = {};
//​
//Object.defineProperty(String.prototype,"repeat",{  
//  value: function repeat(){console.log("Native repeat is not allowed !"); return ":("},
//  writable: false,
//  configurable: false,
//})
//​
//// Check time, valid string and length of string
//const checkRepeat = function(fct,arg1,arg2) {
//    var timerStart = +new Date();
//    var str = fct(arg1,arg2);
//    var timerEnd =  +new Date();
//    var time = (timerEnd - timerStart <= 5) ? true : false;
//    var strLength = str.length;
//    var isValidStr = true;
//    for (var i = 0; i < 2000;i++){
//        var rand = Math.floor(Math.random()*strLength);
//        if(str[rand] != arg1){
//            isValidStr = false;
//        }
//    }
//    console.log("Execution time : "+(timerEnd - timerStart)+" ms");
//    return (time && strLength == arg2 && isValidStr);
//}

