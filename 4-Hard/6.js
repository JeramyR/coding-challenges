

//title: Reverse the Odd Length Words

//tags: formatting,loops,strings

//url: https://edabit.com/challenge/yYfQoo6rkMezauG77

//Description:
//Given a string, reverse all the words which have odd length. The even length words are not changed.
//Examples
//reverseOdd("Bananas") ➞ "sananaB"
//
//reverseOdd("One two three four") ➞ "enO owt eerht four"
//
//reverseOdd("Make sure uoy only esrever sdrow of ddo length")
//➞ "Make sure you only reverse words of odd length"
//Notes
//There is exactly one space between each word and no punctuation is used.

//code area
///////////////////////////////////////////////////////////////////////////
const reverseOdd = str => {
    let arr = str.split(' ')
    let newArr = []
    let newStr = ''

    arr.map(e => {
        e.length % 2 !== 0 ?
            newArr.push(e.split('').reverse().join(''))
            :
            newArr.push(e)
    })

    newArr.forEach(e => {
        newStr === '' ?
            newStr += `${e}`
            :
            newStr += ` ${e}`
    })
    return newStr
}
//////////////////////////////////////////////////////////////////////////

//tests:
// Test.assertEquals(reverseOdd("One two three four"), 'enO owt eerht four')
// Test.assertEquals(reverseOdd('Make sure uoy only esrever sdrow of ddo length'),'Make sure you only reverse words of odd length')
// Test.assertEquals(reverseOdd(''),'','Should work with empty string.')
// Test.assertEquals(reverseOdd('Bananas'),'sananaB','Should work with only one word.')
// Test.assertEquals(reverseOdd('Even even even even even even even even even'),'Even even even even even even even even even')
// Test.assertEquals(reverseOdd('Odd odd odd odd odd odd odd odd odd odd odd'),'ddO ddo ddo ddo ddo ddo ddo ddo ddo ddo ddo')

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Pandigital Numbers

//tags: math,numbers,validation

//url: https://edabit.com/challenge/NXTrfGBXTKg3Z9jkz

//Description:
//A pandigital number contains all digits (0-9) at least once. Write a function that takes an integer, returning true if the integer is pandigital, and false otherwise.
//Examples
//isPandigital(98140723568910) ➞ true
//
//isPandigital(90864523148909) ➞ false
//// 7 is missing.
//
//isPandigital(112233445566778899) ➞ false
//Notes
//Think about the properties of a pandigital number when all duplicates are removed.

//code area
///////////////////////////////////////////////////////////////////////////
const isPandigital = num => {
    let arr = new Set(
        num
            .toString()
            .split('')
    )
    return arr.size === 10 ? true : false
}
//////////////////////////////////////////////////////////////////////////

//tests:

// Test.assertEquals(isPandigital(84847473937), false)
// Test.assertEquals(isPandigital(546732965015), false)
// Test.assertEquals(isPandigital(6781235184590), true)
// Test.assertEquals(isPandigital(9432821089765), true)
// Test.assertEquals(isPandigital(629764), false)
// Test.assertEquals(isPandigital(90864523148909), false)
// Test.assertEquals(isPandigital(7296012), false)
// Test.assertEquals(isPandigital(647380265483206), false)
// Test.assertEquals(isPandigital(38165975424790), true)
// Test.assertEquals(isPandigital(8146327815320), false)
// Test.assertEquals(isPandigital(768431605430), false)
// Test.assertEquals(isPandigital(4920124852367763), true)
// Test.assertEquals(isPandigital(60543981597247), true)
// Test.assertEquals(isPandigital(10282343456789), true)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Converting One Binary String to Another

//tags: logic,loops,recursion,strings

//url: https://edabit.com/challenge/HZcpmfBg6NstB5soN

//Description:
//Write a function that returns the minimum number of swaps to convert the first binary string into the second.
//Examples
//minSwaps("1100", "1001") ➞ 1
//
//minSwaps("110011", "010111") ➞ 1
//
//minSwaps("10011001", "01100110") ➞ 4
//Notes
//Both binary strings will be of equal length.
//Both binary strings will have an equal number of zeroes and ones.
//A swap is switching two elements in a string (swaps do not have to be adjacent).

//code area
///////////////////////////////////////////////////////////////////////////
const minSwaps = (first, second) => {
    let count = 0
    let newSecond = ''

    for (let i = 0; i < first.length; i++) { 
        if (first[i] === second[i]) {
            newSecond += second[i]
        }
        else {
            newSecond += first[i]
            count++
        }
    }

    return first === newSecond ? count / 2 : false
}
//////////////////////////////////////////////////////////////////////////

//tests:

// Test.assertEquals(minSwaps("1001", "1001"), 0)
// Test.assertEquals(minSwaps("1100", "1001"), 1)
// Test.assertEquals(minSwaps("110011", "010111"), 1)
// Test.assertEquals(minSwaps("1100", "0011"), 2)
// Test.assertEquals(minSwaps("110011", "001111"), 2)
// Test.assertEquals(minSwaps("10011001", "01100101"), 3)
// Test.assertEquals(minSwaps("11111000001100", "10110010100110"), 3)
// Test.assertEquals(minSwaps("01100100100111", "10110010100110"), 3)
// Test.assertEquals(minSwaps("11110011001", "01100110111"), 3)
// Test.assertEquals(minSwaps("100110001", "010100110"), 3)
// Test.assertEquals(minSwaps("100101011", "011001101"), 3)
// Test.assertEquals(minSwaps("10011001", "01100110"), 4)

