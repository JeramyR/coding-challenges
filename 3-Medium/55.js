

//title: Sum of the Items in an Array

//tags: arrays,language_fundamentals,recursion

//url: https://edabit.com/challenge/27Toh4rACcmRvRLrb

//Description:
//Create a function that takes an array and returns the sum of all items in the array.
//Examples
//sumArray([1, 2, 3]) ➞ 6
//// 1 + 2 + 3 = 6
//
//sumArray([1, [2, [1]], 3]) ➞ 7
//// 1 + 2 + 1 + 3 = 7
//Notes
//The item in an array can be another array.

//code area
///////////////////////////////////////////////////////////////////////////
const sumArray = arr => {
    let ar = arr.flat(Infinity)
    return ar.reduce((a, c) => a + c)
}
//////////////////////////////////////////////////////////////////////////

//tests:

// Test.assertEquals(sumArray([1, 2, 3]), 6)
// Test.assertEquals(sumArray([1, [1, 2], [3, 1]]), 8)
// Test.assertEquals(sumArray([[1, 1], [2, 8], 8]), 20)
// Test.assertEquals(sumArray([1, 2]), 3)
// Test.assertEquals(sumArray([1, [2, [1]], 3]), 7)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Find the Highest Integer in the Array Using Recursion

//tags: data_structures,numbers,recursion

//url: https://edabit.com/challenge/szYmNqApJyQ3ePnKH

//Description:
//Create a function that finds the highest integer in the array using recursion.
//Examples
//findHighest([-1, 3, 5, 6, 99, 12, 2]) ➞ 99
//
//findHighest([0, 12, 4, 87]) ➞ 87
//
//findHighest([6,7,8]) ➞ 8
//Notes
//Please use the recursion to solve this (not the max() method).

//code area
////////////////////////////////////////////////////////////////


const findHighest = inputArr => {
    if (inputArr.length > 1) {
        if (inputArr[0] > inputArr[inputArr.length - 1]) {
            inputArr.pop()
            findHighest(inputArr)
        }
        else {
            inputArr.shift()
            findHighest(inputArr)
        }
    }
    else if (inputArr.length === 1) {
        // console.log(inputArr[0])
        return inputArr[0]
    }
}


//////////////////////////////////////////////////////////////////////////

//tests:

// Test.assertEquals(findHighest([6, 7, 8]), 8)
// Test.assertEquals(findHighest([-1, 3, 5, 6, 99, 12, 2]), 99)
// Test.assertEquals(findHighest([0, 12, 4, 87]), 87)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Magic Date

//tags: dates,numbers,validation

//url: https://edabit.com/challenge/x6bADPfDJPMYyzpBa

//Description:
//You are to read each part of the date into its own integer type variable. The year should be a 4 digit number. You can assume the user enters a correct date formatted d m yyyy (no error checking required).
//Determine whether the entered date is a magic date. Here are the rules for a magic date:
//mm * dd is a 1-digit number that matches the last digit of yyyy or
//mm * dd is a 2-digit number that matches the last 2 digits of yyyy or
//mm * dd is a 3-digit number that matches the last 3 digits of yyyy
//The program should then display true if the date is magic, or false if it is not.
//Examples
//Magic("1 1 2011") ➞ true
//
//Magic("4 1 2001") ➞ false
//
//Magic("5 2 2010") ➞ true
//
//Magic("9 2 2011") ➞ false
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(Magic('1 1 2011'), true, 'magic date')
//Test.assertEquals(Magic('4 1 2001'), false, 'is not a magic date')
//Test.assertEquals(Magic('2 4 2008'), true, 'magic date')
//Test.assertEquals(Magic('3 3 2009'), true, 'magic date')
//Test.assertEquals(Magic('5 2 2010'), true, 'magic date')
//Test.assertEquals(Magic('1 2 2011'), false, 'is not a magic date')
//Test.assertEquals(Magic('9 2 2011'), false, 'is not a magic date')
//Test.assertEquals(Magic('1 4 2011'), false, 'is not a magic date')

