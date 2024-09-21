

//title: Switching Between Pencils

//tags: algorithms,arrays

//url: https://edabit.com/challenge/Np7R8F24PaqBShZc5

//Description:
//When coloring a striped pattern, you may start by coloring each square sequentially, meaning you spend time needing to switch coloring pencils.
//Create a function where given an array of colors cols, return how long it takes to color the whole pattern. Note the following times:
//It takes 1 second to switch between pencils.
//It takes 2 seconds to color a square.
//See the example below for clarification.
//color_pattern_times(["Red", "Blue", "Red", "Blue", "Red"]) ➞ 14
//
//// There are 5 colors so it takes 2 seconds to color each one (2 x 5 = 10).
//// You need to switch the pencils 4 times and it takes 1 second to switch (1 x 4 = 4).
//// 10 + 4 = 14
//Examples
//colorPatternTimes(["Blue"]) ➞ 2
//
//colorPatternTimes(["Red", "Yellow", "Green", "Blue"]) ➞ 11
//
//colorPatternTimes(["Blue", "Blue", "Blue", "Red", "Red", "Red"]) ➞ 13
//Notes
//Only change coloring pencils if the next color is different to the color before it.
//Return a number in seconds.

//code area
///////////////////////////////////////////////////////////////////////////
const colorPatternTimes = arr => {
    let squareCount = arr.length * 2
    let colorSwitch = 0

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] === arr[i + 1]) {
            continue
        }
        else {
            colorSwitch++
        }
    }
    return squareCount + colorSwitch
}
//////////////////////////////////////////////////////////////////////////

//tests:

// Test.assertEquals(colorPatternTimes(["Red", "Green", "Blue", "Yellow", "Red", "Red", "Yellow", "Green", "Green", "Green", "Red", "Blue", "Yellow", "Blue", "Green", "Green", "Red", "Red", "Red", "Blue", "Green", "Red", "Blue", "Blue", "Red", "Blue"]), 70)
// Test.assertEquals(colorPatternTimes(["Red", "Blue", "Yellow", "Blue", "Green", "Green", "Yellow", "Green", "Blue", "Blue", "Blue", "Red", "Blue", "Red", "Green", "Red"]), 44)
// Test.assertEquals(colorPatternTimes(["Yellow", "Green", "Blue"]), 8)
// Test.assertEquals(colorPatternTimes(["Green", "Green", "Red", "Green", "Yellow", "Red", "Red", "Green", "Red", "Green"]), 27)
// Test.assertEquals(colorPatternTimes(["Red"]), 2)
// Test.assertEquals(colorPatternTimes(["Red", "Red", "Blue", "Red", "Green", "Red", "Blue", "Green", "Green", "Yellow", "Red"]), 30)
// Test.assertEquals(colorPatternTimes(["Green", "Green", "Blue", "Red", "Red", "Blue", "Yellow", "Red", "Red", "Green", "Yellow", "Red", "Yellow", "Red", "Green", "Yellow", "Red", "Green", "Yellow", "Blue", "Yellow", "Red", "Green", "Green", "Blue", "Yellow", "Green", "Green", "Green", "Blue"]), 83)
// Test.assertEquals(colorPatternTimes(["Red", "Blue", "Red", "Blue", "Green", "Blue", "Yellow", "Blue", "Yellow", "Yellow", "Yellow", "Red"]), 33)
// Test.assertEquals(colorPatternTimes(["Yellow", "Green", "Yellow", "Yellow"]), 10)
// Test.assertEquals(colorPatternTimes(["Blue", "Blue", "Yellow", "Green", "Green", "Red", "Blue", "Yellow", "Red", "Yellow", "Green", "Red", "Yellow", "Green", "Yellow", "Blue", "Yellow", "Green", "Green", "Blue"]), 56)
// Test.assertEquals(colorPatternTimes(["Red", "Blue", "Yellow", "Blue", "Green", "Yellow", "Yellow", "Yellow", "Yellow", "Red", "Red", "Yellow", "Yellow"]), 33)
// Test.assertEquals(colorPatternTimes(["Blue", "Red", "Red"]), 7)
// Test.assertEquals(colorPatternTimes(["Red", "Blue", "Yellow", "Green", "Blue", "Yellow", "Blue", "Yellow", "Red", "Green", "Green", "Blue", "Blue", "Green", "Green", "Red", "Green", "Red", "Green", "Red", "Red", "Green", "Red", "Red", "Green", "Red", "Blue", "Yellow", "Red", "Red"]), 83)
// Test.assertEquals(colorPatternTimes(["Yellow", "Blue", "Yellow", "Yellow", "Yellow", "Blue", "Blue"]), 17)
// Test.assertEquals(colorPatternTimes(["Yellow", "Red", "Green", "Green", "Yellow", "Green", "Green", "Yellow", "Yellow", "Red", "Green", "Green", "Blue", "Green", "Red", "Yellow"]), 43)
// Test.assertEquals(colorPatternTimes(["Red", "Red", "Blue", "Yellow", "Red", "Red", "Red", "Yellow", "Blue", "Blue", "Yellow", "Yellow", "Red", "Yellow", "Red", "Blue", "Blue", "Yellow", "Yellow", "Blue", "Blue", "Yellow", "Red", "Blue", "Red", "Blue", "Red", "Yellow", "Blue"]), 78)
// Test.assertEquals(colorPatternTimes(["Yellow", "Red", "Green"]), 8)
// Test.assertEquals(colorPatternTimes(["Green", "Red", "Yellow", "Yellow", "Blue", "Red", "Blue", "Blue", "Yellow", "Red", "Yellow", "Green", "Green", "Red", "Green", "Blue", "Green", "Red", "Blue", "Yellow", "Red"]), 59)
// Test.assertEquals(colorPatternTimes(["Yellow", "Red", "Blue", "Green", "Red", "Green", "Yellow", "Yellow", "Yellow", "Red", "Green", "Blue", "Blue"]), 35)
// Test.assertEquals(colorPatternTimes(["Green", "Blue", "Blue", "Red", "Yellow", "Red", "Red", "Yellow", "Red", "Red", "Blue", "Red", "Red"]), 34)
// Test.assertEquals(colorPatternTimes(["Yellow", "Yellow", "Red", "Blue"]), 10)
// Test.assertEquals(colorPatternTimes(["Green", "Red", "Red", "Blue", "Yellow", "Blue", "Yellow", "Yellow", "Green", "Red", "Red", "Green", "Red", "Yellow", "Yellow", "Green", "Green", "Yellow", "Blue", "Blue", "Red", "Yellow", "Red", "Blue", "Red", "Blue", "Blue", "Yellow", "Blue", "Yellow"]), 82)
// Test.assertEquals(colorPatternTimes(["Red", "Blue", "Green", "Yellow", "Yellow", "Yellow", "Yellow", "Blue"]), 20)
// Test.assertEquals(colorPatternTimes(["Green", "Red", "Green", "Red", "Yellow", "Green", "Green", "Red", "Red", "Yellow", "Green", "Yellow", "Yellow", "Yellow"]), 37)
// Test.assertEquals(colorPatternTimes(["Yellow", "Red", "Green", "Blue", "Blue", "Red", "Red", "Yellow", "Red", "Green", "Red"]), 30)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Layers in a Rug

//tags: logic,strings

//url: https://edabit.com/challenge/8khL2WEhZ6M9onHL4

//Description:
//Write a function that counts how many concentric layers a rug has.
//Examples
//countLayers([
//  "AAAA",
//  "ABBA",
//  "AAAA"
//]) ➞ 2
//
//countLayers([
//  "AAAAAAAAA",
//  "ABBBBBBBA",
//  "ABBAAABBA",
//  "ABBBBBBBA",
//  "AAAAAAAAA"
//]) ➞ 3
//
//countLayers([
//  "AAAAAAAAAAA",
//  "AABBBBBBBAA",
//  "AABCCCCCBAA",
//  "AABCAAACBAA",
//  "AABCADACBAA",
//  "AABCAAACBAA",
//  "AABCCCCCBAA",
//  "AABBBBBBBAA",
//  "AAAAAAAAAAA"
//]) ➞ 5
//Notes
//Multiple layers can share the same component so count them separately (example #2).
//Layers will be horizontally and vertically symmetric.
//There will be at least one layer for each rug.

//code area
///////////////////////////////////////////////////////////////////////////
const countLayers = arr => {
    let set = new Set(arr)

    return set.size
}
//////////////////////////////////////////////////////////////////////////

//tests:

// Test.assertEquals(countLayers([
// "AAA"]), 1)
// Test.assertEquals(countLayers([
// "AAAA", 
// "AAAA", 
// "AAAA"]), 1)
// Test.assertEquals(countLayers([
// "AAAA", 
// "ABBA", 
// "AAAA"]), 2)
// Test.assertEquals(countLayers([
// "AAAAAAAAA", 
// "ABBBBBBBA", 
// "ABBBBBBBA", 
// "ABBBBBBBA", 
// "AAAAAAAAA"]), 2)
// Test.assertEquals(countLayers([
//  "AAAAAAAAAAA",
//  "AABBBBBBBAA",
//  "AABCCCCCBAA",
//  "AABCAAACBAA",
//  "AABCADACBAA",
//  "AABCAAACBAA",
//  "AABCCCCCBAA",
//  "AABBBBBBBAA",
//  "AAAAAAAAAAA"
// ]), 5)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: LCM of Two Numbers

//tags: math,numbers

//url: https://edabit.com/challenge/ERmrS3QrK7sEt4PAt

//Description:
//Write a function that returns the least common multiple (LCM) of two integers.
//Examples
//lcm(9, 18) ➞ 18
//
//lcm(8, 5) ➞ 40
//
//lcm(17, 11) ➞ 187
//Notes
//Both values will be positive.
//The LCM is the smallest integer that is divisible by both numbers such that the remainder is zero.

//code area
///////////////////////////////////////////////////////////////////////////
const lcm = (n1, n2) => {
    let sorted = [n1, n2].sort((a, b) => b - a)
    let i = 2
    let j = 2
    let numArr = []

    // while ()
    console.log()
}


//////////////////////////////////////////////////////////////////////////

//tests:

// Test.assertEquals(lcm(9, 18), 18)
// Test.assertEquals(lcm(8, 5), 40)
// Test.assertEquals(lcm(17, 11), 187)
// Test.assertEquals(lcm(17, 5), 85)
// Test.assertEquals(lcm(3, 12), 12)
// Test.assertEquals(lcm(9, 9), 9)

