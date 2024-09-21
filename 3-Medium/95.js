

//title: Valid Variable Names

//tags: conditions,regex,strings,validation

//url: https://edabit.com/challenge/cGXwWujXdkx6BS3CX

//Description:
//When creating variables, the variable name must always start with a letter and cannot contain spaces, though numbers and underscores are allowed to be contained in it also.
//Create a function which returns true if a given variable name is valid, otherwise return false.
//Examples
//variableValid("result") ➞ true
//
//variableValid("odd_nums") ➞ true
//
//variableValid("2TimesN") ➞ false
//Notes
//Inputs are given as strings.
//Variable names with spaces are not allowed.
//Although this question may seem like otherwise, you can't actually assign words with quotes around them as variables.
//The rules exposed in this challenge are an oversimplification on how variable and identifier names are considered valid in JavaScript.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(variableValid("result"), true)
//Test.assertEquals(variableValid("odd_nums"), true)
//Test.assertEquals(variableValid("2TimesN"), false)
//Test.assertEquals(variableValid("rather_long_variable_name"), true)
//Test.assertEquals(variableValid("count spaces"), false)
//Test.assertEquals(variableValid("nTimes2"), true)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Calculate the Shortest Distance Between Two Points

//tags: math,numbers,strings

//url: https://edabit.com/challenge/W6H4Bcaiu6svso7vT

//Description:
//Create a function that takes a string of four numbers. These numbers represent two separate points on a graph known as the x-axis (horizontal axis) and y-axis (vertical axis).
//The order of coordinates in the string corresponds as follows:
//"x1,y1,x2,y2"
//Calculate the distance between x and y.
//Examples
//shortestDistance("1,1,2,1") ➞ 1
//
//shortestDistance("1,1,3,1") ➞ 2
//
//shortestDistance("-5,1,3,1") ➞ 8
//
//shortestDistance("-5,2,3,1") ➞ 8.06
//Notes
//All floats fixed to two decimal places (e.g. 2.34).

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(shortestDistance('1,1,2,1'), 1)
//Test.assertEquals(shortestDistance('1,1,3,1'), 2)
//Test.assertEquals(shortestDistance('-5,1,3,1'), 8)
//Test.assertEquals(shortestDistance('-5,2,3,1'), 8.06)
//Test.assertEquals(shortestDistance('18174,773931,851747,490653'), 880392.17)
//Test.assertEquals(shortestDistance('737017,82252,882429,883228'), 814068.3)
//Test.assertEquals(shortestDistance('700230,523734,877217,172766'), 393068.61)
//Test.assertEquals(shortestDistance('354972,19774,976623,664356'), 895508.75)
//Test.assertEquals(shortestDistance('587568,609626,654834,18784'), 594658.71)
//Test.assertEquals(shortestDistance('66662,790481,873587,545905'), 843175.77)
//Test.assertEquals(shortestDistance('332500,825806,905569,98242'), 926151.96)
//Test.assertEquals(shortestDistance('699436,718399,148249,268862'), 711259.88)
//Test.assertEquals(shortestDistance('569116,693885,298926,707866'), 270551.48)
//Test.assertEquals(shortestDistance('31746,315604,33219,558330'), 242730.47)
//Test.assertEquals(shortestDistance('269374,778748,642370,575892'), 424589.89)
//Test.assertEquals(shortestDistance('31569,18273,773659,944231'), 1186632.12)
//Test.assertEquals(shortestDistance('939517,332491,433853,846748'), 721218.65)
//Test.assertEquals(shortestDistance('683331,360682,350306,419799'), 338231.39)
//Test.assertEquals(shortestDistance('432164,634064,426613,762549'), 128604.86)
//Test.assertEquals(shortestDistance('104921,837065,896870,361030'), 924008.95)
//Test.assertEquals(shortestDistance('922238,809131,213159,45327'), 1042204.19)
//Test.assertEquals(shortestDistance('758369,659880,695294,282443'), 382671.07)
//Test.assertEquals(shortestDistance('919543,155658,842376,916848'), 765091.47)
//Test.assertEquals(shortestDistance('584808,222082,926167,794435'), 666418.73)
//Test.assertEquals(shortestDistance('875800,489178,754311,314534'), 212744.22)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Valid Hex Code

//tags: regex,strings,validation

//url: https://edabit.com/challenge/cWvYKp8JTE9ozC6NF

//Description:
//Create a function that determines whether a string is a valid hex code.
//A hex code must begin with a pound key # and is exactly 6 characters in length. Each character must be a digit from 0-9 or an alphabetic character from A-F. All alphabetic characters may be uppercase or lowercase.
//Examples
//isValidHexCode("#CD5C5C") ➞ true
//
//isValidHexCode("#EAECEE") ➞ true
//
//isValidHexCode("#eaecee") ➞ true
//
//isValidHexCode("#CD5C58C") ➞ false
//// Length exceeds 6
//
//isValidHexCode("#CD5C5Z") ➞ false
//// Not all alphabetic characters in A-F
//
//isValidHexCode("#CD5C&C") ➞ false
//// Contains unacceptable character
//
//isValidHexCode("CD5C5C") ➞ false
//// Missing #
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(isValidHexCode('#CD5C5C'), true)
//Test.assertEquals(isValidHexCode('#EAECEE'), true)
//Test.assertEquals(isValidHexCode('#eaecee'), true)
//Test.assertEquals(isValidHexCode('#CD5C58C'), false, 'Length exceeds 6.')
//Test.assertEquals(isValidHexCode('#CD5C5Z'), false, 'Alphabetic characters not in A-F.')
//Test.assertEquals(isValidHexCode('#CD5C&C'), false, 'Unacceptable character.')
//Test.assertEquals(isValidHexCode('CD5C5C'), false, 'Does not start with #.')
//Test.assertEquals(isValidHexCode('#123CCCD'), false, 'Length exceeds 6.')
//Test.assertEquals(isValidHexCode('#123456'), true)
//Test.assertEquals(isValidHexCode('#987654'), true)
//Test.assertEquals(isValidHexCode('#9876543'), false, 'Length exceeds 6.')
//Test.assertEquals(isValidHexCode('#CCCCCC'), true)
//Test.assertEquals(isValidHexCode('#ZCCZCC'), false, 'Not acceptable alphabetic characters.')
//Test.assertEquals(isValidHexCode('#Z88Z99'), false, 'Not acceptable alphabetic characters.')
//Test.assertEquals(isValidHexCode('#Z88!99'), false, 'Unacceptable character.')

