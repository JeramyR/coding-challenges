

//title: Find the Bugs: Returning Valid Prices

//tags: bugs,conditions,control_flow,logic

//url: https://edabit.com/challenge/nQx5XHtWurbGrFJww

//Description:
//There has been a masterdata issue which affected the prices of the products. Check if each product has a valid price (integer or float, and greater than or equal to zero). Products with a price of 0 are free and count as a valid price.
//The return value should be a Boolean.
//Examples
//hasValidPrice({ "product": "Milk", price: 1.50 }) ➞ true
//
//hasValidPrice({ "product": "Cheese", price: -1 }) ➞ false
//
//hasValidPrice({ "product": "Eggs", price: 0 }) ➞ true
//
//hasValidPrice({ "product": "Cereals", price: "3.0" }) ➞ false
//
//hasValidPrice() ➞ false
//Notes
//Run the tests first to see the results before making changes and understand why eggs is returning 0 and flour is returning undefined.
//Why is eggs 0?
//.denruter si 0 erofereht os ,ecirp.tcudorp ta eulav yslaf a si 0 .noitidnoc tsal eht ro noitidnoc yslaf tsal eht fo tluser eht si eulav denruter eht ,&& hguorht snoitidnoc gnigrem nehW (https://www.textreverse.com)
//Why is flour undefined?
//.denruter si denifednu erofereht os ,denifednu si ecirp.tcudorp .noitidnoc tsal eht ro noitidnoc yslaf tsal eht fo tluser eht si eulav denruter eht ,&& hguorht snoitidnoc gnigrem nehw ,ereh emaS (https://www.textreverse.com)

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(hasValidPrice({ "product": "Milk", price: 1.50 }), true)
//Test.assertEquals(hasValidPrice({ "product": "Cheese", price: -1 }), false)
//Test.assertEquals(hasValidPrice({ "product": "Eggs", price: 0 }), true)
//Test.assertEquals(hasValidPrice({ "product": "Flour" }), false)
//Test.assertEquals(hasValidPrice({ "product": "Cerials", price: '3.0' }), false)
//Test.assertEquals(hasValidPrice({ "product": "Beer", price: NaN }), false)
//Test.assertEquals(hasValidPrice(), false)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Preventing the Collapse of the Universe

//tags: language_fundamentals,math,numbers,validation

//url: https://edabit.com/challenge/2ncgPqA3cY35op7B2

//Description:
//Dividing by 0 is a huge mistake and should be avoided at all costs.
//Create a function that when given a math expression as a string, return True if at any point, the expression involves dividing by 0.
//Examples
//catchZeroDivision("2 / 0") ➞ true
//
//catchZeroDivision("4 / (2 + 3 - 5)") ➞ true
//
//catchZeroDivision("2 * 5 - 10") ➞ false
//Notes
//Multiplication signs will be given as an asterisk *.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(catchZeroDivision("2 / 0"), true)
//Test.assertEquals(catchZeroDivision("4 / (2 + 3 - 5)"), true)
//Test.assertEquals(catchZeroDivision("2 * 5 - 3"), false)
//Test.assertEquals(catchZeroDivision("3 / 0"), true)
//Test.assertEquals(catchZeroDivision("23 - 23 / 23"), false)
//Test.assertEquals(catchZeroDivision("0 + 1 + 2 + 3 + 0"), false)
//Test.assertEquals(catchZeroDivision("0+0+0+0+0+0+0"), false)
//Test.assertEquals(catchZeroDivision("0-0-0-0-0-0-0-0-0-0"), false)
//Test.assertEquals(catchZeroDivision("4 / 3"), false)
//Test.assertEquals(catchZeroDivision("5343456787543234567 / 743044830483009043909003"), false)
//Test.assertEquals(catchZeroDivision("0 / 0"), true)
//Test.assertEquals(catchZeroDivision("(-100 + 50 + 50) / (60 - 50 - 10)"), true)
//Test.assertEquals(catchZeroDivision("0 + 0 + (3 / (3 - 3))"), true)
//Test.assertEquals(catchZeroDivision("7 / ((7**2) - ((-7)**2))"), true)
//​
//// made by @Joshua Señoron

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: An Introduction to the Map-Reduce Pattern

//tags: arrays,functional_programming,higher_order_functions,math

//url: https://edabit.com/challenge/yyKv8f4FrZPDaJbDs

//Description:
//You will be implementing a basic case of the map-reduce pattern in programming. Use the built in JavaScript array functions .map() and .reduce() to solve the following problem.
//Given a vector stored as an array of numbers, find the magnitude of the vector (this is similar to the function Math.hypot()). Use the standard distance formula for n-dimensional Cartesian coordinates.
//Examples
//magnitude([3, 4]) ➞ 5
//
//magnitude([0, 0, -10]) ➞ 10
//
//magnitude([]) ➞ 0
//
//magnitude([2, 3, 6, 1, 8] ) ➞ 10.677078252031311
//Notes
//The array can have any length.
//The input array will contain integers (except for empty array [] ➞ 0).
//Use both .map() and .reduce().
//Don't use Math.hypot().

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//// Basic tests
//Test.assertEquals(magnitude([3,4]),5,'basic test not met');
//Test.assertEquals(magnitude([0,0,-10]),10,'basic test not met');
//Test.assertEquals(magnitude([]),0,'basic test not met');
//Test.assertEquals(magnitude([2,3,6,1,8]),10.677078252031311,'basic test not met');
//​
//// Extra tests
//Test.assertEquals(magnitude([9,-9,3]),13.076696830622021);
//Test.assertEquals(magnitude([-24,94,4,0,10]),97.61147473529944);

