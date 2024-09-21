

//title: Advanced Array Sort

//tags: algorithms,arrays,loops,sorting

//url: https://edabit.com/challenge/SAeaT8pzJDkSoACsi

//Description:
//Create a function that takes in an array of numbers or strings and returns an array with the items from the original array stored in subarrays. Items of the same value should be in the same subarray.
//Examples
//advancedSort([2, 1, 2, 1]) ➞ [[2, 2], [1, 1]]
//
//advancedSort([5, 4, 5, 5, 4, 3]) ➞ [[5, 5, 5], [4, 4], [3]]
//
//advancedSort(["b", "a", "b", "a", "c"]) ➞ [["b", "b"], ["a", "a"], ["c"]]
//Notes
//The subarrays should be returned in the order of each element's first appearance in the given array.

//code area
///////////////////////////////////////////////////////////////////////////
const advancedSort = inputs => {
    let final = [], i = 0
    let singles = Array.from(new Set(inputs))
    let sorts = inputs.sort()

    while (i < singles.length) {
        let sub = []
        sub.push(sorts.slice(sorts.indexOf(singles[i]), sorts.lastIndexOf(singles[i]) + 1))
        final.push(sub[0])
        i++
    }
    return final
}
//////////////////////////////////////////////////////////////////////////

//tests:

// Test.assertSimilar(advancedSort([2,1,2,1]) , [[2,2],[1,1]])
// Test.assertSimilar(advancedSort([1, 2, 1, 2]), [[1, 1], [2, 2]])
// Test.assertSimilar(advancedSort([3,2,1,3,2,1]) , [[3,3],[2,2],[1,1]])
// Test.assertSimilar(advancedSort([5, 5, 4, 3, 4, 4]), [[5, 5], [4, 4, 4], [3]])
// Test.assertSimilar(advancedSort([80,80,4,60,60,3]),[[80,80],[4],[60,60],[3]])
// Test.assertSimilar(advancedSort(['c', 'c', 'b', 'c', 'b', 1, 1]), [['c', 'c', 'c'], ['b', 'b'], [1, 1]])
// Test.assertSimilar(advancedSort([1234, 1235, 1234, 1235, 1236, 1235]),[[1234, 1234],[1235, 1235, 1235],[1236]])
// Test.assertSimilar(advancedSort(['1234', '1235', '1234', '1235', '1236', '1235']),[['1234', '1234'],['1235', '1235', '1235'],['1236']])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Dividing into Chunks of Maximum Sum N

//tags: arrays,functional_programming

//url: https://edabit.com/challenge/RaxaX4wmKKCsrzKwJ

//Description:
//Write a function that divides an array into chunks such that the sum of each chunk is <= n. Start from the left side of the array and move to the right.
//Examples
//divide([1, 2, 3, 4, 1, 0, 2, 2], 5)
//➞ [[1, 2], [3], [4, 1, 0], [2, 2]]
//
//divide([1, 0, 1, 1, -1, 0, 0], 1)
//➞ [[1, 0], [1], [1, -1, 0, 0]]
//
//divide([2, 1, 0, -1, 0, 0, 2, 1, 3], 3)
//➞ [[2, 1, 0, -1, 0, 0], [2, 1], [3]]
//Notes
//The max of the array will always be smaller than or equal to n.
//Use the greedy approach when solving the problem (e.g. fit as many elements you can into a chunk as long as you satisfy the sum constraint).

//code area
///////////////////////////////////////////////////////////////////////////
const divide = (arr, n) => {
    let chunk = []
    let count = 0

    for (let i = 0; i < arr.length; i++) {
       
    }
}


//////////////////////////////////////////////////////////////////////////

//tests:

// Test.assertSimilar(divide([1, 2, 3, 4, 1, 0, 2, 2], 5), [[1, 2], [3], [4, 1, 0], [2, 2]])
//Test.assertSimilar(divide([1, 2, 3, 4, 1, 0, 2, 2], 4), [[1, 2], [3], [4], [1, 0, 2], [2]])
//Test.assertSimilar(divide([1, 3, 2, -1, 2, 1, 1, 3, 1], 3), [[1], [3], [2, -1, 2], [1, 1], [3], [1]])
//Test.assertSimilar(divide([1, 2, 2, -1, 2, 0, 1, 0, 1], 2), [[1], [2], [2, -1], [2, 0], [1, 0, 1]])
//Test.assertSimilar(divide([1, 2, 2, -1, 2, 0, 1, 0, 1], 3), [[1, 2], [2, -1, 2, 0], [1, 0, 1]])
//Test.assertSimilar(divide([1, 2, 2, -1, 2, 0, 1, 0, 1], 5), [[1, 2, 2, -1], [2, 0, 1, 0, 1]])
//Test.assertSimilar(divide([2, 1, 0, -1, 0, 0, 2, 1, 3], 3), [[2, 1, 0, -1, 0, 0], [2, 1], [3]])
//Test.assertSimilar(divide([2, 1, 0, -1, 0, 0, 2, 1, 3], 4), [[2, 1, 0, -1, 0, 0, 2], [1, 3]])
//Test.assertSimilar(divide([1, 0, 1, 1, -1, 0, 0], 1), [[1, 0], [1], [1, -1, 0, 0]])
//Test.assertSimilar(divide([1, 0, 1, 1, -1, 0, 0], 2), [[1, 0, 1], [1, -1, 0, 0]])
//Test.assertSimilar(divide([1, 0, 1, 1, -1, 0, 0], 3), [[1, 0, 1, 1, -1, 0, 0]])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: pigLatin 3.0

//tags: loops,regex,strings

//url: https://edabit.com/challenge/bzir2NMSGMYDXeNEG

//Description:
//Write a function that converts a sentence into pig latin.
//Rules for converting to pig latin:
//For words that begin with a vowel (a, e, i, o, u), add "way".
//Otherwise, move all letters before the first vowel to the end and add "ay".
//For simplicity, no punctuation will be present in the inputs.
//Examples
//pigLatinSentence("this is pig latin") ➞ "isthay isway igpay atinlay"
//
//pigLatinSentence("wall street journal") ➞ "allway eetstray ournaljay"
//Notes
//All letters will be in lowercase.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(pigLatinSentence("this is pig latin"), "isthay isway igpay atinlay")
//Test.assertEquals(pigLatinSentence("wall street journal"), "allway eetstray ournaljay")

