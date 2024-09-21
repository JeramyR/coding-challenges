

//title: Correct Inequality Signs

//tags: regex,strings,validation

//url: https://edabit.com/challenge/Y2H2aDQhfeE9bHg6m

//Description:
//Create a function that returns true if a given inequality expression is correct and false otherwise.
//Examples
//correctSigns("3 < 7 < 11") ➞ true
//
//correctSigns("13 > 44 > 33 > 1") ➞ false
//
//correctSigns("1 < 2 < 6 < 9 > 3") ➞ true
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(correctSigns("3 < 7 < 11"), true)
//Test.assertEquals(correctSigns("13 > 44 > 33 > 1"), false)
//Test.assertEquals(correctSigns("1 < 2 < 6 < 9 > 3"), true)
//Test.assertEquals(correctSigns("4 > 3 > 2 > 1"), true)
//Test.assertEquals(correctSigns("5 < 7 > 1"), true)
//Test.assertEquals(correctSigns("5 > 7 > 1"), false)
//Test.assertEquals(correctSigns("9 < 9"), false)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Add Dollar Bills

//tags: language_fundamentals,strings

//url: https://edabit.com/challenge/74z6ajLYX4oLAF5zb

//Description:
//Create a function that takes a string containing money in dollars and pounds sterling (seperated by comma) and returns the sum of dollar bills only, as an integer.
//For the input string:
//Each amount is prefixed by the currency symbol: $ for dollars and £ for pounds.
//Thousands are represented by the suffix k.
//i.e. $4k = $4,000 and £40k = £40,000
//Examples
//addBill("$20, £40, £60, $50") ➞ 70
//// 20 + 50 = 70
//
//addBill("£30, $20, £60, $150, £360") ➞ 170
//// 20  + 150 = 170
//
//addBill("£30, $2k, £60, $200, £360") ➞ 2200
//// 2 * 1000 + 200 = 2200
//Notes
//There is at least one dollar bill in string.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(addBill("$200, £40, £60, $1k"), 1200)
//Test.assertEquals(addBill("$10, $40, £60, $200"), 250)
//Test.assertEquals(addBill("$10k"), 10000)
//Test.assertEquals(addBill("£400, $200, £40, £60"), 200)
//Test.assertEquals(addBill("$20k, $100, £40"), 20100)
//Test.assertEquals(addBill("$100"), 100)
//Test.assertEquals(addBill("$100k"), 100000)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Sample Points from a Curve

//tags: algebra,arrays,math

//url: https://edabit.com/challenge/9se2zfxxSrLPKpyH9

//Description:
//Create a function that given a type of curve will generate an array containing a samples amount of numbers calculated from said curve.
//It's easier to see with a visual representation:
//
//If samples = 3 and curve = "pow", we would sample 3 points along the x axis [0, 0.5, 1] and figure out the value of y, in the case of the pow curve the values are [0, 0.25, 1].
//Examples
//samplesFromCurve(3, "linear") ➞ [0, 0.5, 1]
//
//samplesFromCurve(3, "pow") ➞ [0, 0.25, 1]
//
//samplesFromCurve(3, "sqrt") ➞ [0, 0.71, 1]
//
//samplesFromCurve(5, "linear") ➞ [0, 0.25, 0.5, 0.75, 1]
//Notes
//The available curves are linear, pow, sqrt as shown in the picture.
//All values returned must have a maximum of 2 decimals to avoid floating point problems in the tests.
//All values returned must be between 0 and 1 (inclusive).
//The samples parameter will always be ≥ 2.
//The samples are evenly distributed along the x axis.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//// Linear
//Test.assertSimilar(samplesFromCurve(2, 'linear'), [0, 1])
//Test.assertSimilar(samplesFromCurve(3, 'linear'), [0, 0.5, 1])
//Test.assertSimilar(samplesFromCurve(11, 'linear'), [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1])
//​
//// Pow
//Test.assertSimilar(samplesFromCurve(4, 'pow'), [0, 0.11, 0.44, 1])
//Test.assertSimilar(samplesFromCurve(5, 'pow'), [0, 0.06, 0.25, 0.56, 1])
//Test.assertSimilar(samplesFromCurve(11, 'pow'), [0, 0.01, 0.04, 0.09, 0.16, 0.25, 0.36, 0.49, 0.64, 0.81, 1])
//​
//// Sqrt
//Test.assertSimilar(samplesFromCurve(6, 'sqrt'), [0, 0.45, 0.63, 0.77, 0.89, 1])
//Test.assertSimilar(samplesFromCurve(7, 'sqrt'), [0, 0.41, 0.58, 0.71, 0.82, 0.91, 1])
//Test.assertSimilar(samplesFromCurve(11, 'sqrt'), [0, 0.32, 0.45, 0.55, 0.63, 0.71, 0.77, 0.84, 0.89, 0.95, 1])

