

//title: Number of Boomerangs

//tags: arrays,loops

//url: https://edabit.com/challenge/b7iHQDw72zzkmgCun

//Description:
//A boomerang is a V-shaped sequence that is either upright or upside down. Specifically, a boomerang can be defined as: sub-array of length 3, with the first and last digits being the same and the middle digit being different.
//Some boomerang examples:
//[3, 7, 3], [1, -1, 1], [5, 6, 5]
//Create a function that returns the total number of boomerangs in an array.
//To illustrate:
//[3, 7, 3, 2, 1, 5, 1, 2, 2, -2, 2]
//// 3 boomerangs in this sequence:  [3, 7, 3], [1, 5, 1], [2, -2, 2]
//Be aware that boomerangs can overlap, like so:
//[1, 7, 1, 7, 1, 7, 1]
//// 5 boomerangs (from left to right): [1, 7, 1], [7, 1, 7], [1, 7, 1], [7, 1, 7], and [1, 7, 1]
//Examples
//countBoomerangs([9, 5, 9, 5, 1, 1, 1]) ➞ 2
//
//countBoomerangs([5, 6, 6, 7, 6, 3, 9]) ➞ 1
//
//countBoomerangs([4, 4, 4, 9, 9, 9, 9]) ➞ 0
//Notes
//[5, 5, 5] (triple identical digits) is NOT considered a boomerang because the middle digit is identical to the first and last.

//code area
///////////////////////////////////////////////////////////////////////////
const countBoomerangs = arr => {
    let count = 0

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i + 2] && arr[i] !== arr[i + 1]) {
            count++
        }
    }
    return count
}
//////////////////////////////////////////////////////////////////////////

//tests:

// Test.assertEquals(countBoomerangs([9, 5, 9, 5, 1, 1, 1]), 2)
// Test.assertEquals(countBoomerangs([5, 6, 6, 7, 6, 3, 9]), 1)
// Test.assertEquals(countBoomerangs([4, 4, 4, 9, 9, 9, 9]), 0)
// Test.assertEquals(countBoomerangs([5, 9, 5, 9, 5]), 3)
// Test.assertEquals(countBoomerangs([4, 4, 4, 8, 4, 8, 4]), 3)
// Test.assertEquals(countBoomerangs([2, 2, 2, 2, 2, 2, 3]), 0)
// Test.assertEquals(countBoomerangs([2, 2, 2, 2, 3, 2, 3]), 2)
// Test.assertEquals(countBoomerangs([1, 2, 1, 1, 1, 2, 1]), 2)
// Test.assertEquals(countBoomerangs([5, 1, 1, 1, 1, 4, 1]), 1)
// Test.assertEquals(countBoomerangs([3, 7, 3, 2, 1, 5, 1, 2, 2, -2, 2]), 3)
// Test.assertEquals(countBoomerangs([1, 7, 1, 7, 1, 7, 1]), 5)
// Test.assertEquals(countBoomerangs([5, 5, 5]), 0)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Oddish vs. Evenish

//tags: conditions,math,numbers,validation

//url: https://edabit.com/challenge/r6TSNwkLZ2DgsoKiH

//Description:
//Create a function that determines whether a number is Oddish or Evenish. A number is Oddish if the sum of all of its digits is odd, and a number is Evenish if the sum of all of its digits is even. If a number is Oddish, return "Oddish". Otherwise, return "Evenish".
//For example, oddishOrEvenish(121) should return "Evenish", since 1 + 2 + 1 = 4. oddishOrEvenish(41) should return "Oddish", since 4 + 1 = 5.
//Examples
//oddishOrEvenish(43) ➞ "Oddish"
//// 4 + 3 = 7
//// 7 % 2 = 1
//
//oddishOrEvenish(373) ➞ "Oddish"
//// 3 + 7 + 3 = 13
//// 13 % 2 = 1
//
//oddishOrEvenish(4433) ➞ "Evenish"
//// 4 + 4 + 3 + 3 = 14
//// 14 % 2 = 0
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////
const oddishOrEvenish = num => {
    return num
        .toString()
        .split('')
        .map(e => +e)
        .reduce((a, c) => a + c, 0) % 2 !== 0 ?
        "Oddish" : "Evenish"
}
//////////////////////////////////////////////////////////////////////////

//tests:

// Test.assertEquals(oddishOrEvenish(43), "Oddish");
// Test.assertEquals(oddishOrEvenish(373), "Oddish");
// Test.assertEquals(oddishOrEvenish(55551), "Oddish");
// Test.assertEquals(oddishOrEvenish(694), "Oddish");
// Test.assertEquals(oddishOrEvenish(4433), "Evenish");
// Test.assertEquals(oddishOrEvenish(11), "Evenish");
// Test.assertEquals(oddishOrEvenish(211112), "Evenish");

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: How Many Days Between Two Dates

//tags: dates,language_fundamentals

//url: https://edabit.com/challenge/3hdXjfJozQySRC3gE

//Description:
//Create a function that takes two dates and returns the number of days between the first and second date.
//Examples
//getDays(
//  new Date("June 14, 2019"),
//  new Date("June 20, 2019")
//) ➞ 6
//
//
//getDays(
//  new Date("December 29, 2018"),
//  new Date("January 1, 2019")
//) ➞ 3
//// Dates may not all be in the same month/year.
//
//
//getDays(
//  new Date("July 20, 2019"),
//  new Date("July 30, 2019")
//) ➞ 10
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////
const getDays = (par1, par2) => {
    let year1 = +par1.toISOString().slice(0, 4)
    let leap = year1 % 4 === 0 ? true : false
    let x = par1.toISOString().match(/-\d{2}-/g)[0]
    let month1 = +x.match(/\d{2}/)[0]
    let day1 = +par1.toISOString().slice(8, 10)
    let y = par2.toISOString().match(/-\d{2}-/g)[0]
    let month2 = +y.match(/\d{2}/g)
    let day2 = +par2.toISOString().slice(8, 10)
    let daysLeft = 0
    
    if (month1 === month2) {
        daysLeft = day2 - day1
    }
    else {
        let days
        if (month1 < 8) {
            if (month1 % 2 === 1 && month1 !== 2) {
                days = 31 - day1
            }
            else if (month1 !== 2){
                days = 30 - day1
            }
            else {
                if (month1 === 2 && leap) {
                    days = 29 - day1
                }
                else {
                    days = 28 - day1
                }
                return days + day2
            }
        }
        else {
            if (month1 % 2 === 0) {
                days = 31 - day1
            }
            else {
                days = 30 - day1
            }
        }
        return days + day2
    }
    return daysLeft
}
//////////////////////////////////////////////////////////////////////////

//tests:
// 
// Test.assertEquals(getDays(new Date('June 14, 2019'), new Date('June 20, 2019')), 6)
// Test.assertEquals(getDays(new Date('December 29, 2018'), new Date('January 1, 2019')), 3)
// Test.assertEquals(getDays(new Date('July 20, 2019'), new Date('July 30, 2019')), 10)
// Test.assertEquals(getDays(new Date('February 20, 2020'), new Date('March 1, 2020')), 10)
// 