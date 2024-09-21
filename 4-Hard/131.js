

//title: Matrix Padder

//tags: arrays,logic

//url: https://edabit.com/challenge/JxdXoCGeWpk4ktevH

//Description:
//Create a function that takes a matrix of size (m, n) and returns a matrix of size (m+2, n+2) with a pad of 0s around the perimeter.
//Examples
//padMatrix([[]]) ➞ [[0, 0], [0, 0], [0, 0]]
//
//padMatrix([[9]]) ➞ [
//  [0, 0, 0],
//  [0, 9, 0],
//  [0, 0, 0]
//]
//
//padMatrix([["hi", True]]) ➞ [
//  [0, 0, 0, 0],
//  [0, "hi", True, 0],
//  [0, 0, 0, 0]
//]
//
//padMatrix([
//  [1, 2, 5],
//  [8, 6, 7],
//  [3, 4, 9]
//]) ➞ [
//  [0, 0, 0, 0, 0],
//  [0, 1, 2, 5, 0],
//  [0, 8, 6, 7, 0],
//  [0, 3, 4, 9, 0],
//  [0, 0, 0, 0, 0]
//]
//Notes
//All inputs will be arrays of arrays.
//Refer to the first example to handle an empty input.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//// Author : Elias Williamson
//​
//function range(start = 0, stop = 0, step = 1) {
//  if (stop === 0) {
//    stop = start;
//    start = 0;
//  }
//  if ((step > 0 && start >= stop) || (step < 0 && start <= stop)) {
//    return [];
//  }
//  const result = [];
//  for (let i = start; step > 0 ? i < stop : i > stop; i += step) {
//    result.push(i);
//  }
//  return result;
//}
//​
//Test.assertSimilar(padMatrix([[]]), [[0,0],[0,0],[0,0]], 'Check empty case.')
//Test.assertSimilar(padMatrix([['hi'],['downstairs']]), [[0,0,0],[0,'hi',0],[0,'downstairs',0],[0,0,0]])
//Test.assertSimilar(padMatrix([[1,'beep',true],['oink',99,1.1],[[1,1],'e',99]]), [[0,0,0,0,0],[0,1,'beep',true,0],[0,'oink',99,1.1,0],[0,[1,1],'e',99,0],[0,0,0,0,0]])
//​
//for(const i of range(4)){
//  Test.assertSimilar(padMatrix([[i**2]]), [[0,0,0],[0,i**2,0],[0,0,0]])
//  Test.assertSimilar(padMatrix([[i,i**3]]), [[0,0,0,0],[0,i,i**3,0],[0,0,0,0]])
//}

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Mystery Challenge

//tags: algorithms,loops

//url: https://edabit.com/challenge/rbop9mHNAdCLwHK6n

//Description:
//Write a function that takes an integer n and turns it into the ouput. No further instructions.
//Examples
//mysteryFunc(521) ➞ "151211"
//
//mysteryFunc(5211255) ➞ "1512211225"
//
//mysteryFunc(513515) ➞ "151113151115"
//Notes
//The result has to do with counting something.
//Check the Tests tab for some extra hints.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//// count digits, and then for each digit, add "the amount of the digit 
//// in a row (and the) digit"
//// 15 = 1*1 1*5(1115)
//​
//Test.assertEquals(mysteryFunc(15), "1115")
//Test.assertEquals(mysteryFunc(15212), "1115121112")
//Test.assertEquals(mysteryFunc(111111422), "611422")
//Test.assertEquals(mysteryFunc(1), "11")
//Test.assertEquals(mysteryFunc(513515), "151113151115")
//Test.assertEquals(mysteryFunc(666), "36")
//Test.assertEquals(mysteryFunc(69), "1619")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Count the Primes within a Range

//tags: logic,loops,math

//url: https://edabit.com/challenge/kqeXu4S4cyfzNExk3

//Description:
//Given two integers create a function that counts the number of primes between the two given integers.
//Examples
//primeCount(1, 10) ➞ 4
//// range = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//// primes = [2, 3, 5, 7]
//// answer = 4
//
//primeCount(1, 100) ➞ 25
//
//primeCount(1, 1000) ➞ 168
//Notes
//If there are no primes within the given range, return 0.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(primeCount(1, 10), 4)
//Test.assertEquals(primeCount(1, 100), 25)
//Test.assertEquals(primeCount(1, 1000), 168)
//Test.assertEquals(primeCount(1, 10000), 1229)
//Test.assertEquals(primeCount(1, 100000), 9592)
//Test.assertEquals(primeCount(2090, 2098), 0)
//Test.assertEquals(primeCount(548, 556), 0)
//Test.assertEquals(primeCount(3297, 4297), 128)

