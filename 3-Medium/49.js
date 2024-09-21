

//title: Double Factorial

//tags: numbers,recursion

//url: https://edabit.com/challenge/ZYE9zs95bJrBWpDxg

//Description:
//Create a function that takes a number num and returns its double factorial.
//Examples
//doubleFactorial(0) ➞ 1
//
//doubleFactorial(2) ➞ 2
//
//doubleFactorial(9) ➞ 945
//// 9*7*5*3*1 = 945
//
//doubleFactorial(14) ➞ 645120
//Notes
//Assume all input values are greater than or equal to -1.
//Try to solve it with recursion.
//Double factorial is not the same as factorial * 2.

//code area
///////////////////////////////////////////////////////////////////////////
const doubleFactorial = function factorial(n) {
    // return n < 2 ? 1 : n * factorial(n - 2)


    // let total = num
    // let n = 1
    // while (total > 1) {
    //     n *= total
    //     total -= 2
    // }
    // return n
}
//////////////////////////////////////////////////////////////////////////

//tests:

// Test.assertEquals(doubleFactorial(-1), 1)
// Test.assertEquals(doubleFactorial(0), 1)
// Test.assertEquals(doubleFactorial(1), 1)
// Test.assertEquals(doubleFactorial(2), 2)
// Test.assertEquals(doubleFactorial(7), 105)
// Test.assertEquals(doubleFactorial(9), 945)
// Test.assertEquals(doubleFactorial(14), 645120)
// Test.assertEquals(doubleFactorial(22), 81749606400)
// Test.assertEquals(doubleFactorial(25), 7905853580625)
// Test.assertEquals(doubleFactorial(27), 213458046676875)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Neatly Formatted Math

//tags: formatting,math,strings

//url: https://edabit.com/challenge/QtEsWc3qmxWReBNmK

//Description:
//Given a simple math expression as a string, neatly format it as an equation.
//Examples
//formatMath("3 + 4") ➞ "3 + 4 = 7"
//
//formatMath("3 - 2") ➞ "3 - 2 = 1"
//
//formatMath("4 x 5") ➞ "4 x 5 = 20"
//
//formatMath("6 / 3") ➞ "6 / 3 = 2"
//Notes
//You will need to deal with addition, subtraction, multiplication and division.
//Division will have whole number answers (and will obviously not involve 0).

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(formatMath("3 + 4"), "3 + 4 = 7")
//Test.assertEquals(formatMath("3 - 2"), "3 - 2 = 1")
//Test.assertEquals(formatMath("4 x 5"), "4 x 5 = 20")
//Test.assertEquals(formatMath("6 / 3"), "6 / 3 = 2")
//Test.assertEquals(formatMath("9 / 3"), "9 / 3 = 3")
//Test.assertEquals(formatMath("21 / 3"), "21 / 3 = 7")
//Test.assertEquals(formatMath("24 / 3"), "24 / 3 = 8")
//Test.assertEquals(formatMath("80 / 8"), "80 / 8 = 10")
//Test.assertEquals(formatMath("60 / 30"), "60 / 30 = 2")
//Test.assertEquals(formatMath("44 - 11"), "44 - 11 = 33")
//Test.assertEquals(formatMath("48 + 35"), "48 + 35 = 83")
//Test.assertEquals(formatMath("8 + 5"), "8 + 5 = 13")
//Test.assertEquals(formatMath("46 - 11"), "46 - 11 = 35")
//Test.assertEquals(formatMath("23 x 46"), "23 x 46 = 1058")
//Test.assertEquals(formatMath("11 + 1"), "11 + 1 = 12")
//Test.assertEquals(formatMath("29 - 21"), "29 - 21 = 8")
//Test.assertEquals(formatMath("24 x 26"), "24 x 26 = 624")
//Test.assertEquals(formatMath("47 + 8"), "47 + 8 = 55")
//Test.assertEquals(formatMath("42 - 48"), "42 - 48 = -6")
//Test.assertEquals(formatMath("33 x 44"), "33 x 44 = 1452")
//Test.assertEquals(formatMath("26 + 3"), "26 + 3 = 29")
//Test.assertEquals(formatMath("32 + 17"), "32 + 17 = 49")
//Test.assertEquals(formatMath("3 x 26"), "3 x 26 = 78")
//Test.assertEquals(formatMath("12 x 25"), "12 x 25 = 300")
//Test.assertEquals(formatMath("43 + 31"), "43 + 31 = 74")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Can You Spare a Square?

//tags: conditions,math,objects

//url: https://edabit.com/challenge/xhrEw5w9N45TfsgiY

//Description:
//Try to imagine a world in which you might have to stay home for 14 days at any given time. Do you have enough TP to make it through?
//Although the number of squares per roll of TP varies significantly, we'll assume each roll has 500 sheets, and the average person uses 57 sheets per day.
//Create a function that will receive an object with two key/values:
//people ⁠— Number of people in the household.
//tp ⁠— Number of rolls.
//Return a statement telling the user if they need to buy more TP!
//Examples
//tpChecker({ people: 4, tp: 1 }) ➞ "Your TP will only last 2 days, buy more!"
//
//tpChecker({ people: 3, tp: 20 }) ➞ "Your TP will last 58 days, no need to panic!"
//
//tpChecker({ people: 4, tp: 12 }) ➞ "Your TP will last 26 days, no need to panic!"
//Notes
//Stay safe, and happy coding!

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(tpChecker({ people: 4, tp: 1 }), "Your TP will only last 2 days, buy more!")
//Test.assertEquals(tpChecker({ people: 2, tp: 4 }), "Your TP will last 17 days, no need to panic!")
//Test.assertEquals(tpChecker({ people: 3, tp: 20 }), "Your TP will last 58 days, no need to panic!")
//Test.assertEquals(tpChecker({ people: 4, tp: 12 }), "Your TP will last 26 days, no need to panic!")
//Test.assertEquals(tpChecker({ people: 6, tp: 8 }), "Your TP will only last 11 days, buy more!")
//Test.assertEquals(tpChecker({ people: 1, tp: 1 }), "Your TP will only last 8 days, buy more!")

