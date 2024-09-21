

//title: Maxie and Minnie

//tags: arrays,numbers,strings

//url: https://edabit.com/challenge/AoZkgsYvGxx2gsFCP

//Description:
//Maxie is the largest number that can be obtained by swapping two digits, Minnie is the smallest. Write a function that takes a number and returns an array of length 2, Maxie and Minnie. Leading zeros are not permitted.
//Examples
//maxMin(12340) ➞ [42310, 10342]
//
//maxMin(98761) ➞ [98761, 18769]
//
//maxMin(9000) ➞ [9000, 9000]
//// Sometimes no swap needed.
//
//maxMin(11321) ➞ [31121, 11123]
//Notes
//All inputs are positive, integers.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(maxMin(9876543210), [9876543210, 1876543290])
//Test.assertSimilar(maxMin(1234567890), [9234567810, 1034567892])
//Test.assertSimilar(maxMin(190015878798001), [990015878718001, 100015878798091])
//Test.assertSimilar(maxMin(411347917692022), [911347917642022, 111347947692022])
//Test.assertSimilar(maxMin(91620336331950), [99620336331150, 11620336339950])
//Test.assertSimilar(maxMin(428256072523076), [824256072523076, 228256072543076])
//Test.assertSimilar(maxMin(999607251369567), [999907251366567, 199607259369567])
//Test.assertSimilar(maxMin(10936404093733), [90936404013733, 10036404993733])
//Test.assertSimilar(maxMin(116962727585478), [916162727585478, 112962767585478])
//Test.assertSimilar(maxMin(645440811595719), [945440811595716, 145440811595769])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Secret Function 3.0

//tags: language_fundamentals,strings

//url: https://edabit.com/challenge/SPsf87irFHTimcDCS

//Description:
//Create a function based on the input and output. Look at the examples, there is a pattern.
//Examples
//secret("div>p.a$$*2") ➞ `<div><p class="a01"></p><p class="a02"></p></div>`
//// Only whitespace in the entire string ===  One whitespace before each class. Total " " === 2
//
//secret("ul>li.b$*3") ➞ `<ul><li class="b1"></li><li class="b2"></li><li class="b3"></li></ul>`
//// Only whitespace in the entire string === One whitespace before each class. Total " " === 3
//
//secret("p>h1.c$$$*2") ➞ `<p><h1 class="c001"></h1><h1 class="c002"></h1></p>`
//// Only whitespace in the entire string === One whitespace before each class. Total " " === 2
//Notes
//Input is a string.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(
//  secret("ul>li.item$$$*5"),
//  `<ul><li class="item001"></li><li class="item002"></li><li class="item003"></li><li class="item004"></li><li class="item005"></li></ul>`
//)
//​
//Test.assertEquals(
//  secret("div>p.menu$*2"),
//  `<div><p class="menu1"></p><p class="menu2"></p></div>`
//)
//​
//Test.assertEquals(
//  secret("div>p.menu$$*2"),
//  `<div><p class="menu01"></p><p class="menu02"></p></div>`
//)
//​
//Test.assertEquals(
//  secret("div>p.header$$*3"),
//  `<div><p class="header01"></p><p class="header02"></p><p class="header03"></p></div>`
//)
//​
//Test.assertEquals(
//  secret("ul>li.nav$$$$*3"),
//  `<ul><li class="nav0001"></li><li class="nav0002"></li><li class="nav0003"></li></ul>`
//)
//​

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Evaluating Simple Algebra

//tags: algebra,math,numbers,strings

//url: https://edabit.com/challenge/CtYopj8BW3Cz78Pb4

//Description:
//Given a string containing an algebraic equation, calculate and return the value of x. You'll only be given equations for simple addition and subtraction.
//Examples
//evalAlgebra("2 + x = 19") ➞ 17
//
//evalAlgebra("4 - x = 1") ➞ 3
//
//evalAlgebra("23 + 1 = x") ➞ 24
//Notes
//There are spaces between every number and symbol in the string.
//x may be a negative number.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(evalAlgebra("2 + x = 19"), 17)
//Test.assertEquals(evalAlgebra("4 - x = 1"), 3)
//Test.assertEquals(evalAlgebra("23 + 1 = x"), 24)
//Test.assertEquals(evalAlgebra("25 - 1 = x"), 24)
//Test.assertEquals(evalAlgebra("x + 10 = 53"), 43)
//Test.assertEquals(evalAlgebra("-23 + x = -20"), 3)
//Test.assertEquals(evalAlgebra("10 + x = 5"), -5)
//Test.assertEquals(evalAlgebra("-49 - x = -180"), 131)
//Test.assertEquals(evalAlgebra("x + 118 = 151"), 33)
//Test.assertEquals(evalAlgebra("x - 46 = -2"), 44)
//Test.assertEquals(evalAlgebra("70 - x = -38"), 108)
//Test.assertEquals(evalAlgebra("-4 - 10 = x"), -14)
//Test.assertEquals(evalAlgebra("x - 22 = -56"), -34)
//Test.assertEquals(evalAlgebra("x - 57 = 62"), 119)
//Test.assertEquals(evalAlgebra("x + 141 = 111"), -30)
//Test.assertEquals(evalAlgebra("15 - 98 = x"), -83)
//Test.assertEquals(evalAlgebra("15 + x = 71"), 56)
//Test.assertEquals(evalAlgebra("-19 - 104 = x"), -123)
//Test.assertEquals(evalAlgebra("x + 19 = 156"), 137)
//Test.assertEquals(evalAlgebra("x + 65 = 155"), 90)
//Test.assertEquals(evalAlgebra("x + 31 = 19"), -12)
//Test.assertEquals(evalAlgebra("39 + 11 = x"), 50)
//Test.assertEquals(evalAlgebra("x - 93 = -16"), 77)
//Test.assertEquals(evalAlgebra("x + 95 = 216"), 121)
//Test.assertEquals(evalAlgebra("-21 - 108 = x"), -129)

