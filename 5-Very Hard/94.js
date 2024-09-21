

//title: Shiny Semiprimes: Brilliant Numbers

//tags: higher_order_functions,loops,math,numbers

//url: https://edabit.com/challenge/Kj9uzWHcb5bdDp9NK

//Description:
//In this challenge, you have to establish if a given number is Brilliant. A Brilliant number is a semiprime that can be obtained only by multiplicating two, and only two, different primes with the same number of digits.
//A semiprime can be:
//A composite number equal to the product of two different primes.
//A composite number equal to the square of a prime.
//Given an integer n, implement a function that returns true if n is a Brilliant number, or false if it's not.
//Examples
//isBrilliant(11) ➞ false
//// 11 is a prime.
//
//isBrilliant(9) ➞ true
//// 9 is equal to the square of a prime: 3²
//
//isBrilliant(21) ➞ true
//// 21 is equal to the product of two different primes: 3 x 7
//// 3 and 7 have the same digital length.
//
//isBrilliant(22) ➞ false
//// 22 is equal to the product of two different primes: 2 x 11
//// 2 and 11 have different digital lengths.
//Notes
//The given n will be a positive integer greater than 0.
//Remember that a Brilliant number is a semiprime that can be obtained only with a single combination of different primes having the same digital length.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(isBrilliant(11), false, "Example #1")
//Test.assertEquals(isBrilliant(9), true, "Example #2")
//Test.assertEquals(isBrilliant(21), true, "Example #3")
//Test.assertEquals(isBrilliant(22), false, "Example #4")
//Test.assertEquals(isBrilliant(1001), false)
//Test.assertEquals(isBrilliant(77), false)
//Test.assertEquals(isBrilliant(209), true)
//Test.assertEquals(isBrilliant(211), false)
//Test.assertEquals(isBrilliant(780), false)
//Test.assertEquals(isBrilliant(703), true)
//Test.assertEquals(isBrilliant(1000), false)
//Test.assertEquals(isBrilliant(1003), true)
//Test.assertEquals(isBrilliant(1008), false)
//Test.assertEquals(isBrilliant(16459), true)
//Test.assertEquals(isBrilliant(348166), false)
//Test.assertEquals(isBrilliant(768017), true)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: A Knapsack

//tags: algorithms,objects,recursion

//url: https://edabit.com/challenge/uqwmC7RJF98xr3TiD

//Description:
//Given a knapsack with a certain weight capacity, fill it with loot from a list of items to achieve the highest value possible.
//The function takes two parameters: an int specifying the maximum weight the knapsack can hold, and an array of item Objects to choose from. Each item has a name, a weight, and a value. The total weight of all chosen items cannot exceed the capacity of the knapsack.
//The function should return an object containing the capacity of the bag, a list of items that were added to the bag (in the same order that they were given), the total weight of those items, and the total value of the items.
//Example
//knapsack(0, items) ➞ {
//  capacity: 0,
//  items: [],
//  weight: 0,
//  value: 0
//}
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//var items = [
//  {name:"desk lamp",weight:2,value:12},
//  {name:"beach towel",weight:1,value:10},
//  {name:"textbook",weight:3,value:20},
//  {name:"wall clock",weight:2,value:15},
//  {name:"frozen dinners",weight:10,value:50},
//  {name:"tablet",weight:7,value:1400},
//  {name:"smartphone",weight:1,value:200},
//  {name:"paper",weight:2,value:5},
//  {name:"laser printer",weight:25,value:400},
//  {name:"shoes",weight:1,value:79},
//  {name:"medicine",weight:1,value:17},
//  {name:"decorative cushion",weight:1,value:11},
//  {name:"gold necklace",weight:1,value:2500},
//  {name:"toaster oven",weight:5,value:129}
//];
//Test.assertSimilar(Test.inspect(knapsack(0, items)), Test.inspect({
//  capacity: 0,
//  items: [],
//  weight: 0,
//  value: 0
//}));
//Test.assertSimilar(Test.inspect(knapsack(1, items)), Test.inspect({
//  capacity: 1,
//  items: [

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Count How Many Times an Element is Repeated

//tags: arrays,loops,numbers,objects

//url: https://edabit.com/challenge/XWXprtaTWYCWBGAax

//Description:
//Given an array, create a function that returns an object detailing how many times each element was repeated. Sort the object by value in descending order.
//Examples
//countRepetitions(["cat", "dog", "cat", "cow", "cow", "cow"]) ➞ { cow: 3, cat: 2, dog: 1 }
//
//countRepetitions([1, 5, 5, 5, 12, 12, 0, 0, 0, 0, 0, 0]) ➞ { 0: 6, 5: 3, 12: 2, 1: 1 }
//
//countRepetitions(["Infinity", "null", "Infinity", "null", "null"]) ➞ { null: 3, Infinity: 2}
//Notes
//The array elements can be anything.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//const tests = [
//  [["cat", "dog", "cat", "cow", "cow", "cow"], { cow: 3, cat: 2, dog: 1 }],
//  [[1, 5, 5, 5, 12, 12, 0, 0, 0, 0, 0, 0], { 0: 6, 5: 3, 12: 2, 1: 1 }],
//  [
//    [Infinity, null, Infinity, "😀", null, null],
//    { null: 3, Infinity: 2, "😀": 1 },
//  ],
//];
//​
//tests.forEach(([a, e]) => Test.assertSimilar(countRepetitions(a), e));

