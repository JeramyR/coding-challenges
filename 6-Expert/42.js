

//title: Ruth and Aaron

//tags: math,numbers,validation

//url: https://edabit.com/challenge/YKvQKCnCdxPbjbmfD

//Description:
//Two consecutive integers a and b are considered a Ruth-Aaron pair if the sum of the prime factors of a is equal to the sum of the prime factors of b.
//Two definitions exist:
//Summing up distinct prime factors. For example, 24 and 25 constitute a Ruth-Aaron pair by this definition. 8 and 9 do not.
//P24 = [2, 3]  // sum = 5
//
//P25 = [5]  // sum = 5, equal to 24
//
//P8 = [2]  // sum = 2
//
//P9 = [3]  // sum = 3
//Summing up repeated prime factors. By this definition, 24 and 25 do not constitute a Ruth-Aaron pair. But 8 and 9 do.
//P24 = [2, 2, 2, 3]  // sum = 9
//
//P25 = [5, 5]  // sum = 10
//
//P8 = [2, 2, 2]  // sum = 6
//
//P9 = [3, 3]  // sum = 6, equal to 8
//If two consecutive numbers have only distinct prime factors and have equal sums of prime factors, they are considered Ruth-Aaron pairs by both definitions.
//P77 = [7, 11]  // sum = 18
//
//P78 = [2, 3, 13]  // sum = 18
//Create a function that takes a number n and returns:
//false if it is not part of a Ruth-Aaron pair.
//A 2-element array if it is part of a Ruth-Aaron pair.
//The first element should be "Ruth" if n is the smaller number in the pair, or "Aaron" if it is the larger.
//The second element should be 1 if n is part of a Ruth-Aaron pair under the first definition (sum of distinct prime factors), 2 if it qualifies by the second definition, 3 if it qualifies under both.
//Examples
//ruthAaron(5) ➞ ["Ruth", 3]
//
//ruthAaron(25) ➞ ["Aaron", 1]
//
//ruthAaron(9) ➞ ["Aaron", 2]
//
//ruthAaron(11) ➞ false
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(ruthAaron(5), ['Ruth',3])
//Test.assertSimilar(ruthAaron(25), ['Aaron',1])
//Test.assertSimilar(ruthAaron(498), false)
//Test.assertSimilar(ruthAaron(125), ['Ruth',2])
//Test.assertSimilar(ruthAaron(715), ['Aaron',3])
//Test.assertSimilar(ruthAaron(1470), false)
//Test.assertSimilar(ruthAaron(21183), ['Ruth',1])
//Test.assertSimilar(ruthAaron(5561), ['Aaron',2])
//Test.assertSimilar(ruthAaron(6225), false)
//Test.assertSimilar(ruthAaron(26642), ['Ruth',3])
//Test.assertSimilar(ruthAaron(18656), ['Aaron',1])
//Test.assertSimilar(ruthAaron(8558), false)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Simplified Proper Fractions

//tags: algorithms,loops,math,numbers

//url: https://edabit.com/challenge/ZbTx5ArPfmS6zghvx

//Description:
//Create a function that takes a number maxDen and returns the total number of fully simplified proper fractions that exist with denominator less than or equal to maxDen.
//You only need to return the number of fractions; NOT the fractions themselves. In the examples below, I list the fractions simply for your reference.
//Examples
//simPropFrac(10) ➞ 31
//// 1/2, 1/3, 2/3, 1/4, 3/4, 1/5, 2/5, 3/5, 4/5, 1/6, 5/6, 1/7, 2/7, 3/7, 4/7, 5/7, 6/7, 1/8, 3/8, 5/8, 7/8, 1/9, 2/9, 4/9, 5/9, 7/9, 8/9, 1/10, 3/10, 7/10, 9/10
//
//simPropFrac(7) ➞ 17
//// 1/2, 1/3, 2/3, 1/4, 3/4, 1/5, 2/5, 3/5, 4/5, 1/6, 5/6, 1/7, 2/7, 3/7, 4/7, 5/7, 6/7
//Notes
//A fully simplified proper fraction is a fraction where both the numerator and denominator share no common factors besides 1 and the fraction is less than 1.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(simPropFrac(10), 31)
//Test.assertEquals(simPropFrac(2), 1)
//Test.assertEquals(simPropFrac(30), 277)
//Test.assertEquals(simPropFrac(100), 3043)
//Test.assertEquals(simPropFrac(56), 963)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Recursion: Are the Objects Equal?

//tags: arrays,objects,recursion,validation

//url: https://edabit.com/challenge/d8BiMfrtcyyzq23MM

//Description:
//Create a function that recursively checks if each and every element in the first object is similar to that of the second object's (i.e. type, value, index, key, etc.), returns true if it is and false otherwise.
//Objects referred to in this challenge are instances of Array, Map, or Object. An object's element can be another object within another object and so on. Whilst this challenge can be equivocally easy with JSON.stringify, it is humbly by the author's intent that the concept of recursion is imposed.
//Examples
//isSimilar(["cars", "trains", ["roads", ["railways"]]], ["cars", "trains", ["roads", ["railways"]]]) ➞ true
//
//isSimilar({"pairs": [[3, 5], [1, 7], [2, 6], [0, 8]]}, {"pairs": [[3, 5], [1, 1], [2, 6], [0, 8]]}) ➞ false
//
//isSimilar({"Sam": 4, "Elliot": 4, "equality": true}, {"Sam": 4, "Elliot": 5, "equality": false}) ➞ false
//
//isSimilar([{"D": [0, 3]}, {"X": [1, 3]}, {"D": [3, 7]}], [{"D": [0, 3]}, {"X": [1, 3]}, {"D": [3, 7]}]) ➞ true
//Notes
//You can read on more topics about recursion (see Resources tab) if you aren't familiar with it yet or haven't fully understood the concept behind it before taking up this challenge.
//If you think recursion is fun, you can find a collection of those challenges in here.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//const noJSON = fn => !RegExp(/JSON|stringify/, 'gm').test(fn)
//const recursive = f => (`${f}`.match(RegExp(`${f.name}`,'gm'))||[]).length > +(/function/.test(f))
//Test.assertNotEquals(noJSON(isSimilar), false, "JSON conversion is not allowed!")
//Test.assertNotEquals(recursive(isSimilar), false, "Recursion is required!")
//​
//let [objVector, resVector] = [[
//  [["cars", "trains", ["roads", ["railways"]]], ["cars", "trains", ["roads", ["railways"]]]],
//  [{"pairs": [[3, 5], [1, 7], [2, 6], [0, 8]]}, {"pairs": [[3, 5], [1, 1], [2, 6], [0, 8]]}],
//  [{"Sam": 4, "Elliot": 4, "equality": true}, {"Sam": 4, "Elliot": 5, "equality": false}],
//  [[{"D": [0, 3]}, {"X": [1, 3]}, {"D": [3, 7]}], [{"D": [0, 3]}, {"X": [1, 3]}, {"D": [3, 7]}]],
//  [{"Sam": 4, "Elliot": 6, "equality": false, "difference": 2}, {"Sam": 4, "Elliot": 6, "equality": false, "difference": 2}],
//  [[3, [[4, 3, 2, 1], [3, 2, 1], [1]]], [3, [[1, 2, 3, 4], [1, 2, 3], [1]]]],
//  [[{"D": [1, 4]}, {"E": [2, 6]}, {"E": [3, 6]}, {"P": [4, 6]}], [{"D": [1, 4]}, {"E": [2, 6]}, {"E": [3, 6]}, {"P": [4, 6]}]],
//  [{"Peter": 6, "Paul": 6, "equality": true}, {"Peter": 6, "Paul": 6, "equality": true}],
//  [{"r": 255, "g": 255, "b": 255}, {"r": 255, "g": 254, "b": 255}]],
//  [true, false, false, true, true, false, true, true, false]]
//for (let i in objVector) Test.assertEquals(isSimilar(...objVector[i]), resVector[i])

