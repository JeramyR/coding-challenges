

//title: Frequency Distribution

//tags: language_fundamentals,loops,objects

//url: https://edabit.com/challenge/uScx6aGXmNu27NYWz

//Description:
//Create a function that returns the frequency distribution of an array. This function should return an object, where the keys are the unique elements and the values are the frequency in which those elements occur.
//Examples
//getFrequencies(["A", "B", "A", "A", "A"]) ➞ { A: 4, B: 1 }
//
//getFrequencies([1, 2, 3, 3, 2]) ➞ { "1": 1, "2": 2, "3": 2 }
//
//getFrequencies([true, false, true, false, false]) ➞ { true: 2, false: 3 }
//
//getFrequencies([]) ➞ {}
//Notes
//If given an empty array, return an empty object (see example #4).
//The object should be in the same order as in the input array.

//code area
///////////////////////////////////////////////////////////////////////////
const getFrequencies = arr => {
    let countedObj = {}
    
    for (const key of arr) {
        let count = countedObj[key] ?? 0
        countedObj[key] = count + 1
    }
    return countedObj
}
////////////////////////////////////////////////////////////////
//tests:
// Test.assertSimilar(getFrequencies(['A', 'A']), {A: 2})
// Test.assertSimilar(getFrequencies(['A', 'B', 'A', 'A', 'A']), {A: 4, B: 1})
// Test.assertSimilar(getFrequencies(['A', 'B', 'C', 'A', 'A']), {A: 3, B: 1, C: 1})
// Test.assertSimilar(getFrequencies([true, false, true, false, false]), {'true': 2, 'false': 3})
// Test.assertSimilar(getFrequencies([1, 2, 3, 3, 2]), {'1': 1, '2': 2, '3': 2})
// Test.assertSimilar(getFrequencies([]), {})

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Function Times 3

//tags: closures,functional_programming,language_fundamentals,scope

//url: https://edabit.com/challenge/95YiRnBSnfzSQWAuu

//Description:
//Create a function that takes three collections of arguments and returns the sum of the product of numbers. Add the result of the first digit in each collection multiplied together to the result of the second digit in each collection multiplied together to get the final solution.
//Examples
//product(1,2)(1,1)(2,3) ➞ 8
//// 1 * 1 * 2 + 2 * 1 * 3
//
//product(10,2)(5,0)(2,3) ➞ 100
//// 10 * 5 * 2 + 2 * 0 * 3
//
//product(1,2)(2,3)(3,4) ➞ 30
//// 1 * 2 * 3 + 2 * 3 * 4
//
//product(1,2)(0,3)(3,0) ➞ 0
//// 1 * 0 * 3 + 2 * 3 * 0
//Notes
//All test input is valid.

//code area
///////////////////////////////////////////////////////////////////////////
const product = (a1, b1) => (a2, b2) => (a3, b3) => {
    return (a1 * a2 * a3) + (b1 * b2 * b3)
}
//////////////////////////////////////////////////////////////////////////

//tests:

// Test.assertEquals(product(1,2)(1,1)(2,3), 8)
// Test.assertEquals(product(10,2)(5,0)(2,3), 100)
// Test.assertEquals(product(1,2)(2,3)(3,4), 30)
// Test.assertEquals(product(1,2)(0,3)(3,0), 0)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Smooth Sentences

//tags: strings,validation

//url: https://edabit.com/challenge/wRX9cFtAxPZj86Drp

//Description:
//Carlos is a huge fan of something he calls smooth sentences.
//A smooth sentence is one where the last letter of each word is identical to the first letter the following word (and not case sensitive, so "A" would be the same as "a").
//The following would be a smooth sentence "Carlos swam masterfully" because "Carlos" ends with an "s" and swam begins with an "s" and swam ends with an "m" and masterfully begins with an "m".
//Create a function that determines whether the input sentence is a smooth sentence, returning a boolean value true if it is, false if it is not.
//Examples
//isSmooth("Marta appreciated deep perpendicular right trapezoids") ➞ true
//
//isSmooth("Someone is outside the doorway") ➞ false
//
//isSmooth("She eats super righteously") ➞ true
//Notes
//The last and first letters are case insensitive.
//There will be no punctuation in each sentence.

//code area
////////////////////////////////////////////////////////////////
const isSmooth = str => {
    let arr = str.toLowerCase().match(/[a-z]\s[a-z]/g)
    return arr.every(e => e[0] === e[2])
}
////////////////////////////////////////////////////////////////
//tests:
// Test.assertEquals(isSmooth("Marta appreciated deep perpendicular right trapezoids"), true)
// Test.assertEquals(isSmooth("Someone is outside the doorway"), false)
// Test.assertEquals(isSmooth("She eats super righteously"), true)
// Test.assertEquals(isSmooth("Ben naps so often"), true)
// Test.assertEquals(isSmooth("Cute triangles are cute"), false)
// Test.assertEquals(isSmooth("Mad dislikes sharp pointy yoyos"), true)
// Test.assertEquals(isSmooth("Rita asks Sam mean numbered dilemmas"), true)
// Test.assertEquals(isSmooth("Marigold daffodils streaming happily."), false)
// Test.assertEquals(isSmooth("Simply wonderful laughing."), false)

