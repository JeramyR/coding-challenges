

//title: Rational Number

//tags: algorithms,logic,math

//url: https://edabit.com/challenge/wDupLvaX3ptSQEh6r

//Description:
//Declare a rational() function that gets two natural numbers (a, b) and return a string containing a record of the rational number a / b in the form of a decimal fraction, possibly periodic.
//Examples
//rational(2, 5) ➞ "0.4"
//
//rational(1, 6) ➞ "0.1(6)"
//
//rational(1, 3) ➞ "0.(3)"
//
//rational(1, 7) ➞ "0.(142857)"
//
//rational(1, 77) ➞ "0.(012987)"
//Notes
//Always a < b.
//The length of a periodic fraction can be more than 20 numbers
//You can find a hint in the Comments.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(Rational(2, 5),  "0.4")
//Test.assertEquals(Rational(1, 6),  "0.1(6)")
//Test.assertEquals(Rational(1, 3),  "0.(3)")
//Test.assertEquals(Rational(1, 7),  "0.(142857)")
//Test.assertEquals(Rational(1, 77),  "0.(012987)")
//Test.assertEquals(Rational(13, 26),  "0.5")
//Test.assertEquals(Rational(1, 13),  "0.(076923)")
//Test.assertEquals(Rational(1, 125),  "0.008")
//Test.assertEquals(Rational(1, 450),  "0.00(2)")
//Test.assertEquals(Rational(27, 125000),  "0.000216")
//Test.assertEquals(Rational(9, 125000),  "0.000072")
//Test.assertEquals(Rational(1, 152),  "0.006(578947368421052631)")
//Test.assertEquals(Rational(1, 1225),  "0.00(081632653061224489795918367346938775510204)")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Who`s That Polygon?

//tags: data_structures,strings

//url: https://edabit.com/challenge/8ezPNZZpLTzCHotmw

//Description:
//Every polygon has an official name. Individual polygons are named according to the number of sides, combining a Greek-derived numerical prefix with the suffix -gon, e.g. pentagon, dodecagon.
//Write a function that takes an integer n as argument and returns the official name of a n-sided polygon.
//The following prefixes table is used to construct the name of a polygon.
//	Ones		Tens		Hundreds
//1	hena-, hen-	10	deca-	100	hecta-
//2	di-, do-	20	icosi-, icosa-	200	dohecta-
//3	tri-, tria-	30	triaconta-	300	triahecta-
//4	tetra-	40	tetraconta-	400	tetrahecta-
//5	penta-	50	pentaconta-	500	pentahecta-
//6	hexa-	60	hexaconta-	600	hexahecta-
//7	hepta-	70	heptaconta-	700	heptahecta-
//8	octa-	80	octaconta-	800	octahecta-
//9	ennea-	90	enneaconta-	900	enneahecta-
//For polygons with 3 through 9 sides, simply add "-gon" to the ones prefixes. For 10 through 99 sides, you return the tens prefix followed by the ones prefix and then by "-gon". For 100 through 999 sides, you start from the hundreds prefix, then add the tens prefix and finally the ones prefix followed by "-gon".
//For polygons with more than 999 sides, the following prefixes are used similarly to how "conta-" and "hecta-" are used for tens and hundreds places respectively:
//Place	Prefix
//10	conta-
//100	hecta-
//1000	chilia-
//10,000	myria-
//100,000	decamyria-
//200,000	icosamyria-
//300,000	triacontamyria-
//1,000,000	mega-
//1,000,000,000	giga-
//1,000,000,000,000	tera-
//And finally, the 10¹⁰⁰-gon is called googolgon and the ∞-gon (with a countable infinite number of sides) is called apeirogon.
//Examples
//polygonName(3) ➞ "triangle"
//// exception of: tri-gon
//
//polygonName(4) ➞ "quadrilateral"
//// exception of: tetra-gon
//
//polygonName(5) ➞ "pentagon"
//// penta-gon
//
//polygonName(7) ➞ "heptagon"
//// hepta-gon
//
//polygonName(19) ➞ "enneadecagon"
//// ennea-deca-gon
//
//polygonName(36) ➞ "triacontahexagon"
//// triaconta-hexa-gon
//
//polygonName(428) ➞ "tetrahectaicosioctagon"
//// tetrahecta-icosi-octa-gon
//
//polygonName(12345) ➞ "myriadichiliatriahectatetracontapentagon"
//// myria-dichilia-triahecta-tetraconta-penta-gon
//Notes
//The triangle, quadrilateral and nonagon are exceptions, although the regular forms trigon, tetragon, and enneagon are sometimes encountered as well.
//Check Tests to spot other exceptions.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(polygonName(1), "henagon")
//Test.assertEquals(polygonName(2), "digon")
//Test.assertEquals(polygonName(3), "triangle")
//Test.assertEquals(polygonName(4), "quadrilateral")
//Test.assertEquals(polygonName(5), "pentagon")
//Test.assertEquals(polygonName(6), "hexagon")
//Test.assertEquals(polygonName(7), "heptagon")
//Test.assertEquals(polygonName(8), "octagon")
//Test.assertEquals(polygonName(9), "nonagon")
//Test.assertEquals(polygonName(10), "decagon")
//Test.assertEquals(polygonName(11), "hendecagon")
//Test.assertEquals(polygonName(12), "dodecagon")
//Test.assertEquals(polygonName(13), "tridecagon")
//Test.assertEquals(polygonName(14), "tetradecagon")
//Test.assertEquals(polygonName(15), "pentadecagon")
//Test.assertEquals(polygonName(16), "hexadecagon")
//Test.assertEquals(polygonName(17), "heptadecagon")
//Test.assertEquals(polygonName(18), "octadecagon")
//Test.assertEquals(polygonName(19), "enneadecagon")
//Test.assertEquals(polygonName(20), "icosagon")
//Test.assertEquals(polygonName(21), "icosihenagon")
//Test.assertEquals(polygonName(22), "icosidigon")
//Test.assertEquals(polygonName(23), "icositrigon")
//Test.assertEquals(polygonName(24), "icositetragon")
//Test.assertEquals(polygonName(25), "icosipentagon")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Chance of a Specific Sum for N Dice

//tags: algorithms,games,loops,math

//url: https://edabit.com/challenge/iqtrk4xGqAzqp4m3M

//Description:
//Given the number of dices and the sum we want to get the chance of, return the chance rounded to 2 decimals, formatted as shown (with the % at the end).
//Examples
//chance(3, 6) ➞ "4.63%"
//// There is approximately 4.63% chance for rolling 6 with 3 dice.
//
//chance(5, 20) ➞ "8.37%"
//
//chance(2, 7) ➞ "16.67%"
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(chance(3, 6), "4.63%")
//Test.assertEquals(chance(4, 9), "4.32%")
//Test.assertEquals(chance(3, 9), "11.57%")
//Test.assertEquals(chance(6, 7), "0.01%")
//Test.assertEquals(chance(1, 5), "16.67%")
//Test.assertEquals(chance(5, 16), "9.45%")
//Test.assertEquals(chance(2, 6), "13.89%")
//Test.assertEquals(chance(2, 11), "5.56%")

