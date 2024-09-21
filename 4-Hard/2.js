

//title: Length of a Nested Array

//tags: arrays,recursion

//url: https://edabit.com/challenge/yXSTvCNen2DQHyrh6

//Description:
//The .length property on an array will return the number of elements in the array. For example, the array below contains 2 elements:
//[1, [2, 3]]
//// 2 elements, number 1 and array [2, 3]
//Suppose we instead wanted to know the total number of non-nested items in the nested array. In the above case, [1, [2, 3]] contains 3 non-nested items, 1, 2 and 3.
//Write a function that returns the total number of non-nested items in a nested array.
//Examples
//getLength([1, [2, 3]]) ➞ 3
//
//getLength([1, [2, [3, 4]]]) ➞ 4
//
//getLength([1, [2, [3, [4, [5, 6]]]]]) ➞ 6
//
//getLength([1, [2], 1, [2], 1]) ➞ 5
//Notes
//An empty array should return 0.

//code area
///////////////////////////////////////////////////////////////////////////
const getLength = par =>{
    return par.flat(Infinity).length
}


//////////////////////////////////////////////////////////////////////////

//tests:

// Test.assertEquals(getLength([1, [2,3]]), 3)
// Test.assertEquals(getLength([1, [2, [3, 4]]]), 4)
// Test.assertEquals(getLength([1, [2, [3, [4, [5, 6]]]]]), 6)
// Test.assertEquals(getLength([1, 7, 8]), 3)
// Test.assertEquals(getLength([2]), 1)
// Test.assertEquals(getLength([2, [3], 4, [7]]), 4)
// Test.assertEquals(getLength([2, [3, [5, 7]], 4, [7]]), 6)
// Test.assertEquals(getLength([2, [3, [4, [5]]], [9]]), 5)
// Test.assertEquals(getLength([]), 0)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Numbers in Strings

//tags: arrays,loops,numbers,regex,strings

//url: https://edabit.com/challenge/eCPim4XcssdZdvs32

//Description:
//Create a function that takes an array of strings and returns an array with only the strings that have numbers in them. If there are no strings containing numbers, return an empty array.
//Examples
//numInStr(["1a", "a", "2b", "b"]) ➞ ["1a", "2b"]
//
//numInStr(["abc", "abc10"]) ➞ ["abc10"]
//
//numInStr(["abc", "ab10c", "a10bc", "bcd"]) ➞ ["ab10c", "a10bc"]
//
//numInStr(["this is a test", "test1"]) ➞ ["test1"]
//Notes
//The strings can contain white spaces or any type of characters.
//Bonus: Try solving this without RegEx.

//code area
///////////////////////////////////////////////////////////////////////////
const numInStr = par => {
    let blank = []

    for (let i = 0; i < par.length; i++) {
        if (par[i].match(/\d+/)) {
            blank.push(par[i])
        }
    }
    return blank
}
//////////////////////////////////////////////////////////////////////////

//tests:

// Test.assertSimilar(numInStr(['abc', 'abc10']), ['abc10'])
// Test.assertSimilar(numInStr(['abc', 'ab10c',  'a10bc', 'bcd']),['ab10c', 'a10bc'])
// Test.assertSimilar(numInStr(['1', 'a' , ' ' ,'b']), ['1'])
// Test.assertSimilar(numInStr(['rct', 'ABC', 'Test', 'xYz']), [])
// Test.assertSimilar(numInStr(['this IS','10xYZ', 'xy2K77', 'Z1K2W0', 'xYz']), ['10xYZ', 'xy2K77', 'Z1K2W0'])
// Test.assertSimilar(numInStr(['-/>', '10bc', 'abc ']), ['10bc'])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Find Value in a Binary Tree

//tags: data_structures,validation

//url: https://edabit.com/challenge/GGDMJ33wg8y3EHQfP

//Description:
//An array that represents a Binary Tree is in the following form:
//binaryTree = [val, arrLeft, arrRight]
//When arrLeft is the left side of the tree and arrRight is the right side of the tree.
//To illustrate:
//const arr1 = [3, [ 8, [ 5, null, null], null], [ 7, null, null]]
//
//// arr1 represents the following Binary Tree:
//
//                    3
//                   / \
//                  8   7
//                 /\   /\
//                5  N N  N
//               /\
//               N N
//
//// Where N represents null.
//Create a function that takes an array that represent a Binary Tree and a value and return true if the value is in the tree and, false otherwise.
//Examples
//valueInTree(arr1, 5) ➞ true
//
//valueInTree(arr1, 9) ➞ false
//
//valueInTree(arr2, 51) ➞ false
//Notes
//The tree will contain integers only and will be presented by an array in the specified format.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//lst1 = [3, [7, [1, null, null], [8, null, null]], [5, null, [4, null, null]]]
//lst2_8 = [2, null, null]
//lst2_6 = [24, null, null]
//lst2_7 = [18, null, null]
//lst2_4 = [4, lst2_8, null]
//lst2_3 = [12, null, lst2_4]
//lst2_2 = [10, null, lst2_3]
//lst2_1 = [15, lst2_2, null]
//lst2_5 = [6, lst2_6, lst2_7]
//lst2 = [9, lst2_1, lst2_5]
//lst3_1 = [4, null, null]
//lst3_2 = [9, null, null]
//lst3_3 = [21, null, null]
//lst3_4 = [17, null, null]
//lst3_5 = [25, null, null]
//lst3_6 = [18, lst3_5, null]
//lst3_7 = [20, lst3_3, lst3_4]
//lst3_8 = [91, lst3_2, null]
//lst3_9 = [75, null, lst3_1]
//lst3_10 = [45, null, null]
//lst3_11 = [71, null, null]
//lst3_12 = [34, null, null]
//lst3_13 = [11, null, null]
//lst3_14 = [10, lst3_6, lst3_13]
//lst3_15 = [3, lst3_7, lst3_12]

