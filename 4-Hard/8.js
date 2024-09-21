

//title: Histogram Function

//tags: data_structures,logic,strings

//url: https://edabit.com/challenge/st8SZGoa3WE8Xrhf7

//Description:
//Build a function that creates histograms. Every bar needs to be on a new line and its length corresponds to the numbers in the array passed as an argument. The second argument of the function represents the character to be used for the bar.
//histogram(arr, char) ➞ str
//Examples
//histogram([1, 3, 4], "#") ➞ "#\n###\n####"
//
//#
//###
//####
//
//histogram([6, 2, 15, 3], "=") ➞ "======\n==\n===============\n==="
//
//======
//==
//===============
//===
//
//histogram([1, 10], "+") ➞ "+\n++++++++++"
//
//+
//++++++++++
//Notes
//For better understanding try printing out the result.

//code area
///////////////////////////////////////////////////////////////////////////
const histogram = (arr, symbol) => {
    let str = ''
    let j = 0
    let cuts = []

    for (let i = 0; i < arr.length; i++) {
        let num = arr[i]
        
        while (num > 0) {
            str += symbol
            num--
        }
    }
    while (j < arr.length) {
        if (j === 0) {
            cuts.push(str.split('').splice(0, arr[j]))
            j++
        }
        else  {
            cuts.push(str.split('').splice(0, arr[j], ))
            j++
        }
    }
    for (let k = 1; k < cuts.length; k++) {
        cuts[k].splice(0, 0, '\n')
    }

    return cuts.flat(Infinity).join('')
}

//////////////////////////////////////////////////////////////////////////

//tests:

// Test.assertEquals(histogram([2, 4, 5, 6], "o"), 'oo\noooo\nooooo\noooooo')
// Test.assertEquals(histogram([4,2], "*"), '****\n**')
// Test.assertEquals(histogram([20,1,12], "H"), 'HHHHHHHHHHHHHHHHHHHH\nH\nHHHHHHHHHHHH')
// Test.assertEquals(histogram([2,1,2,4,5,2,3], "#"), '##\n#\n##\n####\n#####\n##\n###')

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Disarium Number

//tags: loops,math,numbers,strings,validation

//url: https://edabit.com/challenge/pyxXekyofGasXX2me

//Description:
//A number is said to be Disarium if the sum of its digits raised to their respective positions is the number itself.
//Create a function that determines whether a number is a Disarium or not.
//Examples
//isDisarium(75) ➞ false
//// 7^1 + 5^2 = 7 + 25 = 32
//
//isDisarium(135) ➞ true
//// 1^1 + 3^2 + 5^3 = 1 + 9 + 125 = 135
//
//isDisarium(544) ➞ false
//
//isDisarium(518) ➞ true
//
//isDisarium(8) ➞ true
//
//isDisarium(466) ➞ false
//Notes
//Position of the digit is 1-indexed.
//A recursive version of this challenge can be found via this link.

//code area
///////////////////////////////////////////////////////////////////////////
const isDisarium = num => {
    let total = 0
    let string = num.toString()
    let strArr = string.split('')
    let n = 1

    for (let i = 0; i < strArr.length; i++) {
        let multiple = i + 1

        n = +(strArr[i] ** multiple)
        total += n
    }

    return total === num ? true : false
}
// //////////////////////////////////////////////////////////////////////////

// //tests:

// let [numVector, resVector] = [
//  [
//     6, 
//     75, 
//     135,
//     466, 
//     372, 
//     175, 
//     1, 
//     696, 
//     876, 
//     89, 
//     518, 
//     598
// ],
//  [
//     true, 
//     false, 
//     true, 
//     false, 
//     false, 
//     true, 
//     true, 
//     false, 
//     false, 
//     true, 
//     true, 
//     true
// ]
// ]
// for (let i in numVector) Test.assertEquals(isDisarium(numVector[i]), resVector[i])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: RegEx: Character Classes X ⁠- \W

//tags: formatting,regex

//url: https://edabit.com/challenge/YxsH3nB9Z5n5Tbupd

//Description:
//You can think of character classes as characters with special meaning. They are recognized as special when you place the \ before the character.
//Here are a list of the characters classes in JavaScript:
//., \cX, \d, \D, \f, \n, \r, \s, \S, \t, \v, \w, \W, \0, \xhh, \uhhhh, \uhhhhh, [\b]
//HTML elements are everything from the start tag to the end tag. An example of one div element would be: <div>edabit</div>.
//Find out how many <div> elements are used in a string. Use the character class \W in your expression.
//Example
//const str = "<div>Hello.</div><div>My name is <b>George</b>.</div>"
//// 2 times
//
//const str = "<div><h1>The Word for Today</h1><div>aardvark</div></div>"
//// 2 times
//
//const str = "<div></div>"
//// 1 time
//Notes
//Check the Resources tab for details on character classes if you're stuck.

//code area
///////////////////////////////////////////////////////////////////////////
// const testReg = str => {
//     console.log(str)
// }
//////////////////////////////////////////////////////////////////////////

//tests:

// const str1 = "<div>Hello.</div><div>My name is <b>George</b>.</div>"
// const str2 = "<div><h1>The Word for Today</h1><div>aardvark</div></div>"
// const str3 = "<div><div><div></div></div></div>"

// const validate = (REGEXP) => {
//   if(!/\\W/.test(String(REGEXP))) return () => "required"
//   return function testReg(str) {
//     return str.match(REGEXP).length
//   }
// }

// const testExp = validate(REGEXP)

// Test.assertNotEquals(testExp(str1), "required", "You are required to use a \W character class in your expression.")
// Test.assertSimilar(testExp(str1), 2)
// Test.assertSimilar(testExp(str2), 2)
// Test.assertSimilar(testExp(str3), 3)

