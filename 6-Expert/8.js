

//title: Deep Arithmetic

//tags: arrays,language_fundamentals,objects

//url: https://edabit.com/challenge/E8WcotHKRGfYodchW

//Description:
//Write a function that takes an array of strings of arbitrary dimensionality ([], [][], [][][], etc.) and returns the sum of every separate number in each string in the array.
//Examples
//sum(["1", "five", "2wenty", "thr33"]) ➞ 36
//
//sum([["1X2", "t3n"],["1024", "5", "64"]]) ➞ 1099
//
//sum([[["1"], "10v3"], ["738h"], [["s0"], ["1mu4ch3"],"-1s0"]]) ➞ 759
//Notes
//Numbers in strings can be negative, but will all be base-10 integers.
//Negative numbers may directly follow another number.
//The hyphen or minus character ("-") does not only occur in numbers.
//Arrays may be ragged or empty.

//code area
///////////////////////////////////////////////////////////////////////////

// You can write the sumNumbers function to work with the provided test case in the following way. Here’s the complete implementation of the function and the test cases you mentioned:

// javascript
// Copy code
function sum(arr) {
    // Function to extract numbers from a string
    function extractNumbers(str) {
        // This regex matches all integers, including negatives
        const matches = str.match(/-?\d+/g);
        // Convert the matched substrings to numbers and return them as an array
        return matches ? matches.map(Number) : [];
    }

    // Recursive function to handle arrays of arbitrary depth
    function flattenAndSum(item) {
        if (typeof item === 'string') {
            // If the item is a string, extract numbers from it and sum them
            return extractNumbers(item).reduce((acc, num) => acc + num, 0);
        } else if (Array.isArray(item)) {
            // If the item is an array, recursively process each element
            return item.reduce((acc, subItem) => acc + flattenAndSum(subItem), 0);
        }
        return 0;
    }
    return flattenAndSum(arr);
}

//////////////////////////////////////////////////////////////////////////

//tests:

// let [actualParam, expectedParam] = [
//  [
sum(["1", "five", "2wenty-one", "thr33"])// 36
//    ,
//    [["1X2", "t3n"],["1024", "5", "64"]],
//    [[["1"], "10v3"], ["738h"], [["s0"], ["1mu4ch3"],"-1s0"]],
//    [[["0", "0x2", "z3r1"],["1", "55a46"]],[["1", "0b2", "4"],["0x5fp-2", "nine", "09"],["4", "4", "4"]],[["03"]], []],
//    [[[[[[[[[[[[[[[["-1", "1"], ["3"], [""], []]]]]]]]]]]]]]]],
//    [[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]],
//    [[[[[["-32-64", "a-zA-Z"], ["01-1"]]]]]]
// //  ],
//  [36, 1099, 759, 142, 3, 0, -96]
// ]
// for (let i in actualParam) Test.assertEquals(sum(actualParam[i]), expectedParam[i])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Land Perimeter

//tags: arrays,conditions,language_fundamentals,loops

//url: https://edabit.com/challenge/GoYnq9yauqKA6vbbT

//Description:
//The function is given a map with 1 representing land, 0 representing water. A land cell can have four neighbors along its edges. Compute the total perimeter of shore-lines that are defined by land cells touching water or the outer edges of the map. Each cell edge has a length equal to 1. An isolated cell without neighbors has a total perimeter length of 4.
//Examples
//islandsPerimeter([
//  [0, 1, 0, 0],
//  [1, 1, 1, 0],
//  [0, 1, 0, 0],
//  [1, 1, 0, 0]
//]) ➞ 16
//islandsPerimeter([
//  [1, 1, 1, 1, 1, 1],
//  [1, 0, 0, 0, 0, 1],
//  [1, 0, 1, 1, 0, 1],
//  [1, 0, 0, 0, 0, 1],
//  [1, 1, 1, 1, 1, 1],
//]), 42)
//islandsPerimeter([
//  [1, 0]
//]) ➞ 4
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//area = [
//    [0, 1, 0, 0],
//    [1, 1, 1, 0],
//    [0, 1, 0, 0],
//    [1, 1, 0, 0]
//]
//Test.assertEquals(islandsPerimeter(area), 16)
//​
//area = [[1, 0]]
//Test.assertEquals(islandsPerimeter(area), 4)
//​
//area = [
//    [0, 1, 0, 0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 1],
//    [1, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 1],
//    [0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0],
//    [0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0],
//    [0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1],
//    [0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 0],
//    [1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1],
//    [0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1]
//]
//Test.assertEquals(islandsPerimeter(area), 140)
//​
//area = [
//    [1, 1, 1, 1, 1, 1],

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Syllabification

//tags: regex,strings

//url: https://edabit.com/challenge/5kKM5pdWTWfbh2Nfe

//Description:
//The syllabic structure of the Persian language is CV(C)(C). C stands for Consonants and V stands for Vowels. The CV(C)(C) means that there are three types of syllables in Persian:
//CV
//CVC
//CVCC
//Write a function that takes the phonetic transcription of a Persian word as an argument and returns the syllabified word based on the syllabic structure. In other words, put a period between syllables.
//Examples
//syllabification("kAr") ➞ "kAr"
//
//syllabification("bArAn") ➞ "bA.rAn"
//
//syllabification("tA") ➞ "tA"
//
//syllabification("deraxt") ➞ "de.raxt"
//
//syllabification("pust") ➞ "pust"
//
//syllabification("lAjevard") ➞ "lA.je.vard"
//Notes
//Mono-syllabic words don't need syllabification.
//Persian has six vowels: a, A, e, i, o, u
//Persian has 23 consonants: p, b, t, d, k, g, G, ?, f, v, s, z, S, Z, x, h, c, j, m, n, r, l, y
//Try to solve the problem by using RegEx.
//Hint
//Since each syllable has only one vowel, it's not necessary to know the consonants. Just knowing that there is only one consonant before the vowel and 0 to 2 consonants after the vowel is enough to solve the challenge.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(syllabification("kAr"), "kAr", "example #1")
//Test.assertEquals(syllabification("bArAn"), "bA.rAn", "example #2")
//Test.assertEquals(syllabification("tA"), "tA", "example #3")
//Test.assertEquals(syllabification("deraxt"), "de.raxt", "example #4")
//Test.assertEquals(syllabification("pust"), "pust", "example #5")
//Test.assertEquals(syllabification("lAjevard"), "lA.je.vard", "example #6")
//Test.assertEquals(syllabification("barAbar"), "ba.rA.bar")
//Test.assertEquals(syllabification("panjare"), "pan.ja.re")
//Test.assertEquals(syllabification("?eZdehA"), "?eZ.de.hA")
//Test.assertEquals(syllabification("?Aheste"), "?A.hes.te")

