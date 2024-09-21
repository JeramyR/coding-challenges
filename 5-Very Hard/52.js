

//title: Piggy Bank

//tags: algebra,loops,math

//url: https://edabit.com/challenge/R47nHwvmDetfFbgpz

//Description:
//John wants to save money for his first car. He puts money in his piggy bank every day. Every day, he puts in $1 more than the previous day. Every Monday he starts with a new value ⁠— $1 more than the previous Monday.
//Week 1 (starting at $1)
//Day	Amount	Sum
//Monday	$1	$1
//Tuesday	$2	$3
//Wednesday	$3	$6
//Thursday	$4	$10
//Friday	$5	$15
//Saturday	$6	$21
//Sunday	$7	$28
//Week 2
//Day	Amount	Sum
//Monday	$2	$30
//Tuesday	$3	$33
//Wednesday	$4	$37
//etc ...
//Write a function that returns the number of days he needs to buy his first car cost. John had some savings (include it before counting). On the first Monday, he puts the start amount into his piggy bank.
//Examples
//numOfDays(2050, 1200, 10) ➞ 53
//// 2050: cost of car, 1200: savings, 10: start amount
//// After 53 days he can buy a car.
//
//numOfDays(10000, 2500, 50) ➞ 123
//// After 123 days he can buy a car.
//
//numOfDays(500, 300, 50) ➞ 4
//// After 4 days he can buy a car.
//Notes
//The first day is always Monday.
//To buy a car, he needs money greater than or equal to cost.
//All given numbers will be greater than 0.
//BONUS: Try not adding the sum every day!

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(numOfDays(2050, 1200, 10), 53)
//Test.assertEquals(numOfDays(10000, 2500, 50), 123)
//Test.assertEquals(numOfDays(3333, 1111, 22), 75)
//Test.assertEquals(numOfDays(1000, 100, 0), 97)
//Test.assertEquals(numOfDays(19999, 5000, 5), 409)
//Test.assertEquals(numOfDays(500, 300, 50), 4)
//Test.assertEquals(numOfDays(7000, 6500, 250), 2)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: RGB or Hex Colour

//tags: formatting,numbers

//url: https://edabit.com/challenge/3XPCu7AYtCfpKFfSi

//Description:
//RGB is a color model that defines color by the combination of Red, Green, and Blue. An RGB tuple is composed of three numbers that specify the intensity of each color. Because it uses 8 bits (0s or 1s) for each color, each intensity can be transformed into a hexadecimal number with two digits at most.
//There are 256 possible shades for each color, since "11111111" (or hex "ff") corresponds to decimal 255, plus the number 000. The combination of all 256 possible shades for the three primary colors gives 256 cubed, or over 16 million possible colors.
//Write a function that takes a color in RGB or hex and returns the opposite. If it takes in the three integers in an RGB, it should return a string with the equivalent hexadecimal notation, plus a hash sign (#) at the front. If it takes in a string in hex, it should return an array with the three integers corresponding to RGB.
//Examples
//rgbHex(150, 50, 76) ➞ "#96324c"
//// 150 is hex 96, 50 is hex 32 and 76 is hex 4c.
//
//rgbHex("#303749") ➞ (48, 55, 73)
//// 30 is dec 48, 37 is dec 55 and 49 is dec 73.
//
//rgbHex(170, 14, 0) ➞ "#aa0e00"
//// 170 is hex aa, 14 is hex e and 0 is hex 0.
//Notes
//Remember that all three colors should be two-digit hex numbers, so for Green value 14, the hex value should be 0e rather than just e.
//Trivia
//Black is defined as the absence of color, or RGB(0,0,0), while white is defined as all colors at full intensity, or RGB(255,255,255). When all colors are at the same intensity and some value between 0 and 255, the resulting color is a darker or lighter grey.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//// Author : MyName
//​
//Test.assertEquals(rgbHex(0, 0, 0), "#000000")
//Test.assertSimilar(rgbHex("#000000"), [0, 0, 0])
//Test.assertEquals(rgbHex(148, 0, 255), "#9400ff")
//Test.assertSimilar(rgbHex("#9400ff"), [148, 0, 255])
//Test.assertEquals(rgbHex(15, 59, 122), "#0f3b7a")
//Test.assertSimilar(rgbHex("#0f3b7a"), [15, 59, 122])
//Test.assertEquals(rgbHex(180, 15, 59), "#b40f3b")
//Test.assertSimilar(rgbHex("#b40f3b"), [180, 15, 59])
//Test.assertEquals(rgbHex(200, 14, 0), "#c80e00")
//Test.assertSimilar(rgbHex("#c80e00"), [200, 14, 0])
//Test.assertEquals(rgbHex(255, 255, 0), "#ffff00")
//Test.assertSimilar(rgbHex("#ffff00"), [255, 255, 0])
//Test.assertEquals(rgbHex(100, 50, 50), "#643232")
//Test.assertSimilar(rgbHex("#643232"), [100, 50, 50])
//Test.assertEquals(rgbHex(160, 45, 99), "#a02d63")
//Test.assertSimilar(rgbHex("#a02d63"), [160, 45, 99])
//Test.assertEquals(rgbHex(0, 203, 70), "#00cb46")
//Test.assertSimilar(rgbHex("#00cb46"), [0, 203, 70])
//Test.assertEquals(rgbHex(200, 50, 0), "#c83200")
//Test.assertSimilar(rgbHex("#c83200"), [200, 50, 0])
//Test.assertSimilar(rgbHex(80, 13, 1), "#500d01")
//Test.assertSimilar(rgbHex("#500d01"), [80, 13, 1])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Does the Cargo Fit? (Part 2)

//tags: arrays,logic,numbers,strings,validation

//url: https://edabit.com/challenge/yX8HRSfdHjKji8ikf

//Description:
//A ship has to transport cargo from one place to another, while picking up cargo along the way. Given the total amount of cargo and the types of cargo holds in the ship as arrays, create a function that returns true if each weight of cargo can fit in one hold, and false if it can't.
//"S" means 50 cargo space.
//"M" means 100 cargo space.
//"L" means 200 cargo space.
//Examples
//willFit(["M", "L", "L", "M"], [56, 62, 84, 90]) ➞ true
//
//willFit(["S", "S", "S", "S", "L"], [40, 50, 60, 70 , 80, 90, 200]) ➞ false
//
//willFit(["L", "L", "M"], [56, 62, 84, 90]) ➞ true
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(willFit(["M", "L", "L", "M"], [56, 62, 84, 90]), true)
//Test.assertEquals(willFit(["L", "L", "M"], [56, 62, 84, 90]), true)
//Test.assertEquals(willFit(["S", "S", "S", "S", "L"], [40, 50, 60, 70 , 80, 90, 200]), false)
//Test.assertEquals(willFit(["S", "L"], [73 , 87, 95, 229]), false)
//Test.assertEquals(willFit(["L", "L", "L", "L"], [54, 54, 200, 200, 200]), true, "54 and 54 can fit in one hold.")

