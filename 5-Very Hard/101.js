

//title: Spiral Matrix

//tags: arrays,strings

//url: https://edabit.com/challenge/u2QGaxT455XTmd5xg

//Description:
//In this challenge, transform a string into a spiral contained inside a regular square matrix. To build the matrix, you are given the dimension of its side:
//If the side of the matrix is odd, the spiral starting point will be the exact center of the matrix.
//If the side of the matrix is even, the spiral starting point will be placed in the lower columns half of the lower rows half.
//// "x" represents the matrix center
//
//side = 3 (odd)
//matrix = [
//  [" ", " ", " "],
//  [" ", "x", " "],
//  [" ", " ", " "]
//]
//
//side = 4 (even)
//matrix = [
//  [" ", " ", " ", " "],
//  [" ", "x", " ", " "],
//  [" ", " ", " ", " "],
//  [" ", " ", " ", " "],
//]
//The length of the string has to match exactly the number of cells inside the matrix:
//If the string length is greater than the number of cells, you have to cut off the unnecessary characters.
//If the string length is lower than the number of cells, you have to add a series of "+" to the end of the string until its length match the number of cells.
//side = 3 (9 cells)
//string = "EDABITTEROUS"
//// You'll need only "EDABITTER", while "OUS" is discarded.
//string = "EDABITTER"
//
//side = 4 (16 cells)
//string = "EDABITTEROUS"
//// You'll need all the string plus 4 "+" to match the cells.
//string = "EDABITTEROUS++++"
//Starting from the center that you found, you have to fill a regular square matrix side * side placing the characters of the given string str, following a clockwise spiral pattern (first move to the right).
//side = 3 (odd)
//string = "EDABITTEROUS"
//matrix = [
//  ["T", "E", "R"],
//  ["T", "E", "D"],
//  ["I", "B", "A"]
//]
//
//side = 4 (even)
//string = "EDABITTEROUS"
//matrix = [
//  ["T", "E", "R", "O"],
//  ["T", "E", "D", "U"],
//  ["I", "B", "A", "S"],
//  ["+", "+", "+", "+"],
//]
//Examples
//spiralMatrix(2, "DOG") ➞ [
//  ["D", "O"],
//  ["+", "G"]
//]
//
//spiralMatrix(3, "COPYRIGHTS") ➞ [
//  ["G", "H", "T"],
//  ["I", "C", "O"],
//  ["R", "Y", "P"]
//]
//
//spiralMatrix(4, "SUPERLUMBERJACK") ➞ [
//  ["U", "M", "B", "E"],
//  ["L", "S", "U", "R"],
//  ["R", "E", "P", "J"],
//  ["+", "K", "C", "A"]
//]
//Notes
//Remember, the first move from the center is to the right, and then you proceed clockwise and concentrically.
//As given side, you can expect any valid value greater than 1.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(spiralMatrix(2, "DOG"), [
//  [ "D", "O" ],
//  [ "+", "G" ]
//])
//​
//Test.assertSimilar(spiralMatrix(3, "COPYRIGHTS"), [
//  [ "G", "H", "T" ],
//  [ "I", "C", "O" ],
//  [ "R", "Y", "P" ]
//])
//​
//Test.assertSimilar(spiralMatrix(3, "EDABITTER"), [
//  [ "T", "E", "R" ],
//  [ "T", "E", "D" ],
//  [ "I", "B", "A" ]
//])
//​
//Test.assertSimilar(spiralMatrix(3, "EDABITTEROUS"), [
//  [ "T", "E", "R" ],
//  [ "T", "E", "D" ],
//  [ "I", "B", "A" ]
//])
//​
//Test.assertSimilar(spiralMatrix(4, "SUPERLUMBERJACK"), [
//  [ "U", "M", "B", "E" ],

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Recursion: Count The Digits

//tags: math,numbers,recursion

//url: https://edabit.com/challenge/uL2Hi8Aj3FDgW9F7q

//Description:
//Create a function that will recursively count the number of digits of a number. Conversion of the number to a string is not allowed, thus, the approach is recursive.
//Examples
//digitsCount(4666) ➞ 4
//
//digitsCount(544) ➞ 3
//
//digitsCount(121317) ➞ 6
//
//digitsCount(0) ➞ 1
//
//digitsCount(12345) ➞ 5
//
//digitsCount(1289396387328L) ➞ 13
//Notes
//All inputs are integers but some are in exponential form, deal with it accordingly.
//You are expected to come up with a solution using the concept of recursion or the so-called recursive approach.
//Check out the Resources for more topics about recursion to read on (if you aren't familiar with it yet or haven't fully understood the concept behind it before taking up this challenge or unless otherwise).
//An iterative version of this challenge can be found via this link.
//A collection of challenges alike can be found via this link.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//const noStrConvert = fn => !RegExp('`|String|\'|\"', 'gm').test(fn)
//Test.assertNotEquals(noStrConvert(digitsCount), false, "String manipulation is not allowed.")
//​
//const recursive = f => (`${f}`.match(RegExp(`${f.name}`,'gm'))||[]).length > +(/function/.test(f))
//Test.assertNotEquals(recursive(digitsCount), false, "Recursion is required!")
//​
//let [actualParam, expectedParam] = [
//  [ 
//    0, 4666, 544, 121317, 12345, 1289396387328, -1232323, 
//    3463463874638476, -231.2e6, 1283939312321, -231273683, 
//    3.2e6, 314890e3 
//  ],
//  [1, 4, 3, 6, 5, 13, 7, 16, 9, 13, 9, 7, 9]
//]
//for (let i in actualParam) Test.assertEquals(digitsCount(actualParam[i]), expectedParam[i])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Sales Season

//tags: arrays,math

//url: https://edabit.com/challenge/4tPpAMZ4LM67Fz8m8

//Description:
//A retailer is having a store-wide "buy 2, get 1 free" sale. For legal reasons, they can't charge their customers $0 for an article so a discount is applied to all products instead. For example, if a customer gets three products a, b and c:
//Product A	Product B	Product C
//$15.99	$23.50	$10.75
//She gets the cheapest one for free, so she ends up paying $15.99 + $23.50 = $39.49, but what her receipt says is:
//Product A: $15.99 − Special Discount = $12.57
//Product B: $23.50 − Special Discount = $18.47
//Product C: $10.75 − Special Discount = $8.45
//Total: $39.49
//Create a function that takes an array of prices for a customer's shopping cart and returns the prices with the discount applied. Round all prices to the cent.
//Examples
//discount([2.99, 5.75, 3.35, 4.99]) ➞[2.47, 4.74, 2.76, 4.12]
//// First product for free.
//
//discount([10.75, 11.68]) ➞ [10.75, 11.68]
//// No discounts applied.
//
//discount([68.74, 17.85, 55.99]) ➞ [60.13, 15.62, 48.98]
//// Second product for free.
//
//discount([5.75, 14.99, 36.83, 12.15, 25.30, 5.75, 5.75, 5.75]) ➞ [5.16, 13.45, 33.06, 10.91, 22.71, 5.16, 5.16, 5.16]
//// First and sixth products for free (see second note).
//Notes
//The discount is calculated in percentual terms.
//The deal applies to sets of three products: if a customer gets 9 products, she will get the three cheapest ones for free, but if she gets 10 or 11 products, she will still get three for free. Buying a 12th product would get her a fourth free product.
//No cart splitting allowed.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(discount([2.99, 5.75, 3.35, 4.99]), [2.47, 4.74, 2.76, 4.12])
//Test.assertSimilar(discount([10.75, 11.68]), [10.75, 11.68])
//Test.assertSimilar(discount([68.74, 17.85, 55.99]), [60.13, 15.62, 48.98])
//Test.assertSimilar(discount([5.75, 14.99, 36.83, 12.15, 25.30, 5.75, 5.75, 5.75]), [5.16, 13.45, 33.06, 10.91, 22.71, 5.16, 5.16, 5.16])
//Test.assertSimilar(discount([14.15, 9.45, 3.72, 5.99, 8.13, 8.85]), [11.42, 7.63, 3.0, 4.83, 6.56, 7.14])
//Test.assertSimilar(discount([2.98, 0.25, 1.25]), [2.81, 0.24, 1.18])
//Test.assertSimilar(discount([9.20]), [9.20])

