

//title: Sum and Product

//tags: algebra,math,numbers

//url: https://edabit.com/challenge/KHviGBCvBXHLAGuPA

//Description:
//Write a function that takes in two floating-point numbers s and p and returns two floating-point numbers [x, y], where x + y = s and x * y = p. Round x and y to three decimal places.
//If there are multiple solutions, return the solution with the lesser x (or lesser y, if the x values are equal).
//Imaginary/complex number solutions are not allowed. If no real-valued solutions exist, return null.
//Examples
//sumAndProduct(2, -15) ➞ [-3.0, 5.0]
//
//sumAndProduct(144, 144) ➞ [1.007, 142.993]
//
//sumAndProduct(-42.7, 144.5) ➞ [-38.994, -3.706]
//
//sumAndProduct(10, 30) ➞ null
//Notes
//To solve this problem, consider setting up a system of two equations and solving for x and y.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(sumAndProduct(2, -15), [-3.0, 5.0])
//Test.assertSimilar(sumAndProduct(144, 144), [1.007, 142.993])
//Test.assertSimilar(sumAndProduct(-42.7, 144.5), [-38.994, -3.706])
//Test.assertSimilar(sumAndProduct(10, 30), null)
//Test.assertSimilar(sumAndProduct(-11, 33), null)
//Test.assertSimilar(sumAndProduct(-13, -99), [-18.385, 5.385])
//Test.assertSimilar(sumAndProduct(1111, 1234), [1.112, 1109.888])
//Test.assertSimilar(sumAndProduct(1234, 1111), [0.901, 1233.099])
//Test.assertSimilar(sumAndProduct(34, 289), [17.0, 17.0])
//Test.assertSimilar(sumAndProduct(-26.6, 176.89), [-13.3, -13.3])
//Test.assertSimilar(sumAndProduct(0, -25), [-5.0, 5.0])
//Test.assertSimilar(sumAndProduct(0, 25), null)
//Test.assertSimilar(sumAndProduct(-25, 0), [-25.0, 0.0])
//Test.assertSimilar(sumAndProduct(25, 0), [0.0, 25.0])
//Test.assertSimilar(sumAndProduct(0, 0), [0.0, 0.0])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: New Numbers

//tags: math,numbers,validation

//url: https://edabit.com/challenge/dydxdTCEpELGMRWeB

//Description:
//A new number is a number that is not a permutation of any smaller number. 869 is not a new number because it is just a permutation of smaller numbers, 689 and 698. 509 is a new number because it can't be formed by a permutation of any smaller number (leading zeros not allowed).
//Write a function that takes a non-negative integer and returns true if the integer is a new number and false if it is not.
//Examples
//isNew(3) ➞ true
//
//isNew(30) ➞ true
//
//isNew(321) ➞ false
//
//isNew(123) ➞ true
//Notes
//A curious fact: out of the first one million integers, only 8002 are new.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(isNew(0), true)
//Test.assertEquals(isNew(90), true)
//Test.assertEquals(isNew(601), false) 
//Test.assertEquals(isNew(123), true)
//Test.assertEquals(isNew(321), false)
//Test.assertEquals(isNew(40567), true)
//Test.assertEquals(isNew(10783), false)
//Test.assertEquals(isNew(4444), true)
//Test.assertEquals(isNew(102), true)
//Test.assertEquals(isNew(30004), true)
//Test.assertEquals(isNew(40003), false)
//Test.assertEquals(isNew(125609), false)
//Test.assertEquals(isNew(23401), false)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Burglary Series (18): Detailed List

//tags: arrays,loops,objects

//url: https://edabit.com/challenge/u8SiTaBmMKCYAfK3J

//Description:
//The police call. They need a more detailed list of the stolen goods.
//You are given an array with nested arrays that represent each room in your mansion where the goods were stolen. Each room will have two sub-arrays, one for the stolen items and the other for its values. They always match, the stolen item at index 0 is worth the value at index 0 of the values array, the stolen item at index 1 is worth the value at index 1, and so forth. Look at the example for a clearer picture.
//Return an object that represents where the goods were stolen from and which goods were stolen from each room and their value.
//Examples
//makeDetailedList([["kitchen", ["piano", "tv"], [1000, 50]]])
//➞ { kitchen: { piano: 1000, tv: 50 } }
//
//
//makeDetailedList([
//  ["basement", ["baseball bat"], [500] ],
//  ["garage", ["horses", "cadillac", "flowers"], [110, 2000, 30]]
//]) ➞ {
//  basement: {
//    "baseball bat": 500
//  },
//  garage: {
//    horses : 110,
//    cadillac: 2000,
//    flowers: 30
//  }
//}
//Notes
//This series is part of a collection that focuses on objects. If you are interested in following the breath-taking narrative skills of yours truly or just do some object focused challenges (the challenges are ordered in ascending difficulty order), you can more easily do that here.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//const random = Test.randomNumber()
//const arr = [["kitchen", ["piano", "tv"], [random, 50]]];
//const arr2 =  
//[
//  ["basement", ["baseball bat"], [random] ],
//  ["garage", ["horses", "cadillac", "flowers"], [110, 2000, 30] ]
//]
//​
//Test.assertSimilar(makeDetailedList(arr), { kitchen: { piano: random, tv: 50 } })
//Test.assertSimilar(makeDetailedList(arr2), { basement: { 
//                                              "baseball bat": random
//                                            }, 
//                                            garage: { 
//                                              horses : 110,
//                                              cadillac: 2000,
//                                              flowers: 30
//                                            }
//                                           })

