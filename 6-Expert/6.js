

//title: Ascending Consecutive Numbers

//tags: functional_programming,loops,strings

//url: https://edabit.com/challenge/jN89tuARCFbtQm6vE

//Description:
//Write a function that returns true if a string consists of ascending or ascending AND consecutive numbers.
//Examples
//ascending("232425") ➞ true
//// Consecutive numbers 23, 24, 25
//
//ascending("2324256") ➞ false
//// No matter how this string is divided, the numbers are not consecutive.
//
//ascending("444445") ➞ true
//// Consecutive numbers 444 and 445.
//Notes
//A number can consist of any number of digits, so long as the numbers are adjacent to each other, and the string has at least two of them.


//code area
///////////////////////////////////////////////////////////////////////////
const ascending = num => {
    // let numArr = num.split('')
    // let halfArr = Math.floor(numArr.length / 2)

    // let possible = []

    // for (let i = 0; i < numArr.length - 1; i++) {



    //     return +numArr[i] + 1 === +numArr[i + 1] ? true : false

    // }
    // return numArr.every((e, i) => +e[i] + 1 === +e[i + 1])
}
//////////////////////////////////////////////////////////////////////////

//tests:

// Test.assertEquals(ascending("444445"), true)
// Test.assertEquals(ascending("232425"), true)
//     Test.assertEquals(ascending("123412351236"), true)
//     Test.assertEquals(ascending("57585960616263"), true)
//     Test.assertEquals(ascending("500001500002500003"), true)
//     Test.assertEquals(ascending("919920921"), true)
// Test.assertEquals(ascending("1234567"), true)

    // Test.assertEquals(ascending("2324256"), false)
    // Test.assertEquals(ascending("1235"), false)
    // Test.assertEquals(ascending("121316"), false)
    // Test.assertEquals(ascending("12131213"), false)
    // Test.assertEquals(ascending("54321"), false)
    // Test.assertEquals(ascending("56555453"), false)
    // Test.assertEquals(ascending("90090190290"), false)
    // Test.assertEquals(ascending("35236237238"), false)

    //////////////////////////////////////////////////
    //////////////////////////////////////////////////
    //////////////////////////////////////////////////
    //////////////////////////////////////////////////
    //////////////////////////////////////////////////
    //////////////////////////////////////////////////


    //title: Langton`s Ant

    //tags: algorithms,arrays,games

    //url: https://edabit.com/challenge/LG82m8Q4YoowC7tbk

    //Description:
    //Langton's ant is a two-dimensional Turing machine invented in the late 1980s. The ant starts out on a grid of black and white cells and follows a simple set of rules that has complex emergent behavior.
    //
    //The ant can travel in any of the four cardinal directions on each step. The ant moves according to the following rules:
    //At a white square (1), turn 90° right, flip the color of the square, and move forward one unit.
    //At a black square (0), turn 90° left, flip the color of the square, and move forward one unit.
    //The grid has no limits and therefore if the ant moves outside the borders, the grid should be expanded with 0s, respectively maintaining the rectangle shape.
    //Create a function Langton's Ant with the following parameters:
    //grid - a two-dimensional array of 1s and 0s
    //// representing white and black cells respectively
    //
    //column - horizontal position of the ant
    //
    //row - ant's vertical position
    //
    //n - number of iterations
    //
    //direction - ant's current direction
    //// 0 - north, 1 - east, 2 - south, 3 - west
    //// default value will be 0
    //... and returns the state of the grid after n iterations.
    //Examples
    //langtons_ant([[1]], 0, 0, 1, 0) ➞ [[0, 0]]
    //// Initially facing north (0), at the first iteration the ant turns
    //// right because it stands on a white square, 1. After that, it flips
    //// the square and moves forward.
    //
    //langtons_ant([[0]], 0, 0, 1, 0) ➞ [[0, 1]]
    //
    //langtons_ant([[0, 0, 0], [0, 0, 0], [0, 0, 0]], 2, 2, 10, 1) ➞ [[0, 0, 0, 0], [0, 1, 1, 0], [0, 1, 1, 1], [0, 0, 0, 1]]
    //Notes
    //N/A

    //code area
    ///////////////////////////////////////////////////////////////////////////



    //////////////////////////////////////////////////////////////////////////

    //tests:

    //Test.assertSimilar(langtonsAnt([[1]], 0, 0, 1, 0), [[0,0]])
    //Test.assertSimilar(langtonsAnt([[0]], 0, 0, 1, 0), [[0,1]])
    //Test.assertSimilar(langtonsAnt([[1]], 0, 0, 3, 0), [[0,1],[0,1]])
    //Test.assertSimilar(langtonsAnt([[1]], 0, 0, 1), [[0,0]], 'Direction should default to North - 0')
    //Test.assertSimilar(langtonsAnt([[0,0,0],[0,0,0],[0,0,0]], 2, 2, 10, 1),
    //[[0,0,0,0],
    // [0,1,1,0],
    // [0,1,1,1],
    // [0,0,0,1]])
    //
    //Test.assertSimilar(langtonsAnt([[0,0,0],[0,0,0],[0,0,0]], 1, 1, 20, 2),
    //[[0,0,0,0],
    // [0,1,0,1],
    // [1,0,0,1],
    // [0,1,1,0]])
    //
    //Test.assertSimilar(langtonsAnt([[0,0,0],[0,0,0],[0,0,0]], 0, 0, 30, 0),
    //[[0,1,1,0,0],
    // [1,0,0,1,0],
    // [1,0,1,1,1],
    // [0,0,0,1,1],
    // [0,0,1,1,0]])

    //////////////////////////////////////////////////
    //////////////////////////////////////////////////
    //////////////////////////////////////////////////
    //////////////////////////////////////////////////
    //////////////////////////////////////////////////
    //////////////////////////////////////////////////


    //title: Numbers First, Letters Second

    //tags: arrays,sorting

    //url: https://edabit.com/challenge/wkD5ChYH9ukyNSmZm

    //Description:
    //Write a function that sorts array while keeping the array structure. Numbers should be first then letters both in ascending order.
    //Examples
    //numThenChar([
    //  [1, 2, 4, 3, "a", "b"],
    //  [6, "c", 5], [7, "d"],
    //  ["f", "e", 8]
    //]) ➞ [
    //  [1, 2, 3, 4, 5, 6],
    //  [7, 8, "a"],
    //  ["b", "c"], ["d", "e", "f"]
    //]
    //
    //numThenChar([
    //  [1, 2, 4.4, "f", "a", "b"],
    //  [0], [0.5, "d","X",3,"s"],
    //  ["f", "e", 8],
    //  ["p","Y","Z"],
    //  [12,18]
    //]) ➞ [
    //  [0, 0.5, 1, 2, 3, 4.4],
    //  [8],
    //  [12, 18, "X", "Y", "Z"],
    //  ["a", "b", "d"],
    //  ["e", "f", "f"],
    //  ["p", "s"]
    //]
    //Notes
    //Test cases will contain integer and float numbers and single letters.

    //code area
    ///////////////////////////////////////////////////////////////////////////
    // const numThenChar = arrInput => {
    //     let newArr = [],
    //         subArrayLengths = [],
    //         i = 0,
    //         a = [],
    //         b = []

    //     arrInput.map(e => subArrayLengths.push(e.length))
    //     arrInput.forEach(e => e.forEach(el =>
    //         typeof el === 'number' ? a.push(el) : b.push(el)
    //     ))

    //     let flatSort = [a.sort((x, y) => x - y), b.sort()].flat()

    //     while (flatSort.length > 0) {
    //         let sub = flatSort.splice(0, subArrayLengths[i])
    //         newArr.push(sub)
    //         i++
    //     }
    //     return newArr
    // }
//////////////////////////////////////////////////////////////////////////

//tests:

// Test.assertSimilar(numThenChar([
//     [1, 2, 4, 3, "a", "b"],
//     [6, "c", 5],
//     [7, "d"],
//     ["f", "e", 8]
// ]), [
//     [1, 2, 3, 4, 5, 6],
//     [7, 8, 'a'],
//     ['b', 'c'],
//     ['d', 'e', 'f']
// ])

// Test.assertSimilar(numThenChar([
//     [1, 2, 4.4, "f", "a", "b"],
//     [0],
//     [0.5, "d", "X", 3, "s"],
//     ["f", "e", 8],
//     ["p", "Y", "Z"],
//     [12, 18]
// ]), [
//     [0, 0.5, 1, 2, 3, 4.4],
//     [8],
//     [12, 18, 'X', 'Y', 'Z'],
//     ['a', 'b', 'd'],
//     ['e', 'f', 'f'],
//     ['p', 's']
// ])

// Test.assertSimilar(numThenChar([
//     [10, 2],
//     ["a", 3],
//     [2.2, "d", "h", 6, "s", 14, 1],
//     ["f", "e"],
//     ["p", "y", "z", "V"],
//     [5]
// ]), [
//     [1, 2], 
//     [2.2, 3], 
//     [5, 6, 10, 14, 'V', 'a', 'd'], 
//     ['e', 'f'], 
//     ['h', 'p', 's', 'y'], 
//     ['z']
// ])