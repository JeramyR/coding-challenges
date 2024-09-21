

//title: Multidimensional Array into Single Dimensional Array

//tags: arrays,recursion

//url: https://edabit.com/challenge/2oMTwjqmmXD8XBuMn

//Description:
//Create a function that takes multidimensional array, converts into one dimensional array and returns it using recursion.
//Examples
//flatten([[17.2, 5, "code"]]) ➞ [17.2, 5, "code"]
//
//flatten([[[[[2, 14, "rubber"]]], 2, 3, 4]])) ➞ [2, 14, "rubber", 2, 3, 4]
//
//flatten([["balkot"]]) ➞ ["balkot"]
//Notes
//Input contains at least one element.
//Use of built in methods is discouraged.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(flatten([[17.2,5,"edabit"]]),[17.2,5,"edabit"])
//Test.assertSimilar(flatten([[[[[2,14,"rubber"]]], 2,3,4]]),[2,14,"rubber",2,3,4])
//Test.assertSimilar(flatten([0, [12,"biratnagar",[[2]]]]),[0,12,"biratnagar",2])
//Test.assertSimilar(flatten([["balkot"]]),["balkot"])
//Test.assertSimilar(flatten([1,2,3,4,5,6]),[1,2,3,4,5,6])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Odds vs. Evens

//tags: language_fundamentals,math

//url: https://edabit.com/challenge/Hxc6AgMFdKqdprpdt

//Description:
//Given an integer, return "odd" if the sum of all odd digits is greater than the sum of all even digits. Return "even" if the sum of even digits is greater than the sum of odd digits, and "equal" if both sums are the same.
//Examples
//oddsVsEvens(97428) ➞ "odd"
//// odd = 16 (9+7)
//// even = 14 (4+2+8)
//
//oddsVsEvens(81961) ➞ "even"
//// odd = 11 (1+9+1)
//// even = 14 (8+6)
//
//oddsVsEvens(54870) ➞ "equal"
//// odd = 12 (5+7)
//// even = 12 (4+8+0)
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(oddsVsEvens(44547), 'equal')
//Test.assertEquals(oddsVsEvens(412420), 'even')
//Test.assertEquals(oddsVsEvens(128797), 'odd')
//Test.assertEquals(oddsVsEvens(838768), 'even')
//Test.assertEquals(oddsVsEvens(371910), 'odd')
//Test.assertEquals(oddsVsEvens(769431), 'odd')
//Test.assertEquals(oddsVsEvens(221294), 'equal')
//Test.assertEquals(oddsVsEvens(859307), 'odd')
//Test.assertEquals(oddsVsEvens(847617), 'even')
//Test.assertEquals(oddsVsEvens(348466), 'even')
//Test.assertEquals(oddsVsEvens(50236), 'equal')
//Test.assertEquals(oddsVsEvens(133987), 'odd')
//Test.assertEquals(oddsVsEvens(698570), 'odd')
//Test.assertEquals(oddsVsEvens(822406), 'even')
//Test.assertEquals(oddsVsEvens(54313), 'odd')
//Test.assertEquals(oddsVsEvens(17788), 'even')
//Test.assertEquals(oddsVsEvens(72083), 'equal')
//Test.assertEquals(oddsVsEvens(649924), 'odd')
//Test.assertEquals(oddsVsEvens(968740), 'even')
//Test.assertEquals(oddsVsEvens(942674), 'equal')

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Partially Hidden String

//tags: arrays,formatting,strings

//url: https://edabit.com/challenge/odpZ7xKpEpMKgasXb

//Description:
//Create a function that takes a phrase and transforms each word using the following rules:
//Keep first and last character the same.
//Transform middle characters into a dash -.
//Examples
//partiallyHide("skies were pretty") ➞ "s---s w--e p----y"
//
//partiallyHide("red is not my color") ➞ "r-d is n-t my c---r"
//
//partiallyHide("She rolled her eyes") ➞ "S-e r----d h-r e--s"
//
//partiallyHide("Harry went to fight the basilisk") ➞ "H---y w--t to f---t t-e b------k"
//Notes
//Words with two or fewer letters should not be hidden at all.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(partiallyHide('Harry went to fight the basilisk'), 'H---y w--t to f---t t-e b------k')
//Test.assertEquals(partiallyHide('She rolled her eyes'), 'S-e r----d h-r e--s')
//Test.assertEquals(partiallyHide('skies were so beautiful'), 's---s w--e so b-------l')
//Test.assertEquals(partiallyHide('red is not my color'), 'r-d is n-t my c---r')
//Test.assertEquals(partiallyHide('so many options'), 'so m--y o-----s')
//Test.assertEquals(partiallyHide('the orient express'), 't-e o----t e-----s')
//Test.assertEquals(partiallyHide('went to the post office'), 'w--t to t-e p--t o----e')

