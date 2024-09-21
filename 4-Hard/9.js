

//title: Reversing a Binary String

//tags: bit_operations,language_fundamentals

//url: https://edabit.com/challenge/4s93F8ZiEdHjmMnMv

//Description:
//Write a function that takes an integer n, reverses the binary representation of that integer, and returns the new integer from the reversed binary.
//Examples
//reversedBinaryInteger(10) ➞ 5
//// 10 = 1010 -> 0101 = 5
//
//reversedBinaryInteger(12) ➞ 3
//// 12 = 1100 -> 0011 = 3
//
//reversedBinaryInteger(25) ➞ 19
//// 25 = 11001 -> 10011 = 19
//
//reversedBinaryInteger(45) ➞ 45
//// 45 = 101101 -> 101101 = 45
//Notes
//All values of n will be positive.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(reversedBinaryInteger(1), 1)
//Test.assertEquals(reversedBinaryInteger(4), 1)
//Test.assertEquals(reversedBinaryInteger(5), 5)
//Test.assertEquals(reversedBinaryInteger(31), 31)
//Test.assertEquals(reversedBinaryInteger(82), 37)
//Test.assertEquals(reversedBinaryInteger(90), 45)
//Test.assertEquals(reversedBinaryInteger(255), 255)
//Test.assertEquals(reversedBinaryInteger(446), 251)
//Test.assertEquals(reversedBinaryInteger(451), 391)
//Test.assertEquals(reversedBinaryInteger(634), 377)
//Test.assertEquals(reversedBinaryInteger(776), 67)
//Test.assertEquals(reversedBinaryInteger(898), 263)
//Test.assertEquals(reversedBinaryInteger(1103), 1937)
//Test.assertEquals(reversedBinaryInteger(3801), 2487)
//Test.assertEquals(reversedBinaryInteger(4096), 1)
//Test.assertEquals(reversedBinaryInteger(8505), 10017)
//Test.assertEquals(reversedBinaryInteger(428293), 328843)
//Test.assertEquals(reversedBinaryInteger(547643), 904609)
//Test.assertEquals(reversedBinaryInteger(612965), 681385)
//Test.assertEquals(reversedBinaryInteger(999999), 1033263)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Burglary Series (12): Get Vodka Bottle

//tags: arrays,loops,objects

//url: https://edabit.com/challenge/paMpZoEJ6gr4feMS3

//Description:
//The insurance guy laughs, he's just kidding. He just needs an updated list. You just need one of those Rammstein Vodka bottles.
//Given an object with alcoholic drinks and a number, return a string with the name of the Rammstein bottle that matches the given number.
//Examples
//{ whiskey: 100, "Rammstein A": 100, "Rammstein B": 50 } ➞ "Rammstein A"
//// number = 100
//
//{ whiskey: 100, "Rammstein A": 100, "Rammstein B": 50 } ➞ "Rammstein B"
//// number = 50
//
//{ whiskey: 100, "Rammstein A": 100, "Rammstein D": 70, beer: 70 } ➞ "Rammstein D"
//// number = 70
//Notes
//There will always be a corresponding Rammstein bottle for the number given.
//There will never be 2 Rammstein bottles with the same number.
//You always return one Rammstein bottle.

//code area
///////////////////////////////////////////////////////////////////////////
const getVodkaBottle = (obj, num) => {
    let arr = Object.entries(obj)
    let ram = /Rammstein/

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] === num && ram.test(arr[i][j - 1])) {
                return arr[i][j - 1]
            }
        }
    }

}


//////////////////////////////////////////////////////////////////////////

//tests:

// const random = Math.random()
// const obj = {absinth: 100, whiskey: 100, "Rammstein A": 100, "Rammstein B": 50, "Rammstein C": random };

// Test.assertEquals(getVodkaBottle(obj, 100),"Rammstein A")
// Test.assertEquals(getVodkaBottle(obj, 50),"Rammstein B")
// Test.assertEquals(getVodkaBottle(obj, random),"Rammstein C")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Double Character Swap

//tags: regex,strings

//url: https://edabit.com/challenge/NfBqxaDu4KoxAysWF

//Description:
//Write a function to replace all instances of character c1 with character c2 and vice versa.
//Examples
//doubleSwap( "aabbccc", "a", "b") ➞ "bbaaccc"
//
//doubleSwap("random w#rds writt&n h&r&", "#", "&")
//➞ "random w&rds writt#n h#r#"
//
//doubleSwap("128 895 556 788 999", "8", "9")
//➞ "129 985 556 799 888"
//Notes
//Both characters will show up at least once in the string.

//code area
///////////////////////////////////////////////////////////////////////////
const doubleSwap = (strIn, char1, char2) => {
    let str = ''

    for (let i = 0; i < strIn.length; i++) {
        strIn[i] === char1 ?
            str += strIn[i].replace(char1, char2)
            :
            strIn[i] === char2 ?
                str += strIn[i].replace(char2, char1)
                :
                str += strIn[i]
    }
    return str
}
//////////////////////////////////////////////////////////////////////////

//tests:

// Test.assertEquals(doubleSwap("aabbccc", "a", "b"), "bbaaccc")
// Test.assertEquals(doubleSwap("random w#rds writt&n h&r&", "#", "&"), "random w&rds writt#n h#r#")
// Test.assertEquals(doubleSwap("128 895 556 788 999", "8", "9"), "129 985 556 799 888")
// Test.assertEquals(doubleSwap("mamma mia", "m", "a"), "amaam aim")
// Test.assertEquals(doubleSwap("**##**", "*", "#"), "##**##")
// Test.assertEquals(doubleSwap("123456789", "4", "5"), "123546789")
// Test.assertEquals(doubleSwap("445566&&", "4", "&"), "&&556644")
// Test.assertEquals(doubleSwap("!?@,.", ",", "."), "!?@.,")
// Test.assertEquals(doubleSwap("Q_Q T_T =.= >.<", "Q", "T"), "T_T Q_Q =.= >.<")
// Test.assertEquals(doubleSwap("(Q_Q) (T_T) (=.=) (>.<)", ")", "("), ")Q_Q( )T_T( )=.=( )>.<(")
// Test.assertEquals(doubleSwap("<>", ">", "<"), "><")
// Test.assertEquals(doubleSwap("001101", "1", "0"), "110010")
// Test.assertEquals(doubleSwap("!\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_`abcdefghijklmnopqrstuvwxyz{|}~", "a", "b"), "!\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_`bacdefghijklmnopqrstuvwxyz{|}~")

