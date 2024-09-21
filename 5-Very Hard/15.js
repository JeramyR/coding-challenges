

//title: Souvenir Shop

//tags: algorithms,arrays,loops

//url: https://edabit.com/challenge/KTrcDJkkW9inXesDy

//Description:
//On a vacation abroad, you see a souvenir shop and decide to head inside. There are snow globes, postcards, fridge magnets and all the other goodies you'd typically find.
//Given an array of prices of things in the store and the amount of money you have, return the maximum number of items you could possibly buy.
//Examples
//maxItems(["$1", "$1", "$2"], "$3") ➞ 2
//
//maxItems(["$10", "$7", "$2", "$60"], "$20") ➞ 3
//
//maxItems(["$15", "$5", "$30", "$30", "$10"], "$2") ➞ "Not enough funds!"
//Notes
//If you cannot afford anything, return "Not enough funds!"
//Prices will be whole numbers.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(maxItems(["$1", "$1", "$2"], "$3"), 2)
//Test.assertEquals(maxItems(["$10", "$7", "$2", "$60"], "$20"), 3)
//Test.assertEquals(maxItems(["$15", "$5", "$30", "$30", "$10"], "$2"), "Not enough funds!")
//Test.assertEquals(maxItems(["$99", "$8"], "$9"), 1)
//Test.assertEquals(maxItems(["$85", "$88", "$72", "$77", "$53"], "$56"), 1)
//Test.assertEquals(maxItems(["$12", "$2", "$49", "$21", "$76", "$64"], "$37"), 3)
//Test.assertEquals(maxItems(["$3", "$17", "$12", "$98", "$12", "$91", "$41", "$73"], "$116"), 5)
//Test.assertEquals(maxItems(["$18", "$16", "$32", "$30", "$43", "$80", "$13"], "$86"), 4)
//Test.assertEquals(maxItems(["$20", "$11", "$8", "$59", "$64", "$36", "$41", "$99", "$98"], "$357"), 8)
//Test.assertEquals(maxItems(["$12", "$98", "$56", "$88"], "$489"), 4)
//Test.assertEquals(maxItems(["$12"], "$26"), 1)
//Test.assertEquals(maxItems(["$65", "$78", "$78", "$61", "$51", "$91", "$76", "$27", "$85", "$70"], "$64"), 1)
//Test.assertEquals(maxItems(["$28", "$64"], "$404"), 2)
//Test.assertEquals(maxItems(["$69"], "$188"), 1)
//Test.assertEquals(maxItems(["$59", "$99", "$59", "$90", "$75", "$19", "$36", "$56", "$79", "$5"], "$74"), 3)
//Test.assertEquals(maxItems(["$73", "$7", "$75", "$33", "$7", "$95", "$11"], "$463"), 7)
//Test.assertEquals(maxItems(["$58", "$64", "$85", "$21", "$91", "$1"], "$333"), 6)
//Test.assertEquals(maxItems(["$89", "$7", "$27"], "$451"), 3)
//Test.assertEquals(maxItems(["$10", "$63", "$25", "$2", "$10", "$59", "$71", "$60", "$88"], "$129"), 5)
//Test.assertEquals(maxItems(["$23", "$82", "$75", "$17", "$67", "$67", "$95", "$48", "$15"], "$185"), 5)
//Test.assertEquals(maxItems(["$86", "$22", "$92", "$8", "$44", "$97"], "$102"), 3)
//Test.assertEquals(maxItems(["$16"], "$136"), 1)
//Test.assertEquals(maxItems(["$37", "$46", "$68", "$7", "$75", "$53", "$79"], "$20"), 1)
//Test.assertEquals(maxItems(["$71", "$36", "$5", "$56", "$33", "$66", "$91", "$49"], "$120"), 3)
//Test.assertEquals(maxItems(["$43", "$70", "$25", "$100", "$47", "$95", "$8"], "$66"), 2)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Palindrome Timestamps

//tags: math,numbers

//url: https://edabit.com/challenge/j8bPBvzSTsrXpoMHB

//Description:
//Create a function that takes two times of day (hours, minutes, seconds) and returns the number of occurences of palindrome timestamps within that range, inclusive.
//A palindrome timestamp should be read the same hours : minutes : seconds as seconds : minutes : hours, keeping in mind the seconds and hours digits will reverse. For example, 02 : 11 : 20 is a palindrome timestamp.
//Examples
//palendromeTimestamps(2, 12, 22, 4, 35, 10) ➞ 14
//
//palendromeTimestamps(12, 12, 12, 13, 13, 13) ➞ 6
//
//palendromeTimestamps(6, 33, 15, 9, 55, 10) ➞ 0
//Notes
//Expect military time.
//Include the given time parameters if they happen to be palendromes.
//The parameter timestamps are chronological.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(palendromeTimestamps(2, 12, 22, 4, 35, 10), 14)
//Test.assertEquals(palendromeTimestamps(12, 12, 12, 13, 13, 13), 6)
//Test.assertEquals(palendromeTimestamps(6, 33, 15, 9, 55, 10), 0)
//Test.assertEquals(palendromeTimestamps(11, 00, 11, 11, 00, 11), 1)
//Test.assertEquals(palendromeTimestamps(10, 22, 01, 12, 22, 21), 13)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Which Promise Resolves Faster?

//tags: numbers,validation

//url: https://edabit.com/challenge/HKb4mBgT9RoPuK9Dx

//Description:
//Given two promises, create a function to determine whether the second promise is faster than the first. If it is, return true. Otherwise, return false.
//Examples
//speedTest(promise1, promise2) ➞ true
//// promise2 resolves faster
//
//speedTest(promise1, promise2) ➞ false
//// promise1 resolves faster
//Notes
//Make sure you await both promises when executing them.
//Check the Resources tab for a hint.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//const tests = [
//  [6000, 3000, true],
//  [1000, 5000, false],
//  [8000, 6000, true],
//  [3000, 1000, true],
//]
//​
//tests.forEach(([t1, t2, bool]) =>
//  speedTest(
//    new Promise((r) => setTimeout(() => r(), t1)),
//    new Promise((r) => setTimeout(() => r(), t2))     
//  ).then((time) => Test.assertEquals(time, bool))
//)

