

//title: Strong Password Checker

//tags: functional_programming,higher_order_functions,logic,numbers

//url: https://edabit.com/challenge/DHXAMErsWL4y98hH6

//Description:
//A password is considered strong if all the following conditions are met:
//It has at least 8 characters and at most 20 characters.
//It contains at least one lowercase letter, one uppercase letter and one digit.
//It must NOT contain three repeating characters in a row (e.g. "...aaa..." is weak, but "...aa...a..." is strong, assuming other conditions are met).
//Write a function that takes a string str and return the MINIMUM change required to make it a strong password. If it's already strong, return 0.
//Examples
//strongPasswordChecker("Edabit!") ➞ 1
//// 7 characters total, need to add one more digit for a strong password.
//// 1 minimum change.
//
//strongPasswordChecker("edabit1!") ➞ 1
//// 8 characters total, need to add an uppercase letter.
//// 1 minimum change.
//
//strongPasswordChecker("EDABITEDABITEDABITEDA") ➞ 3
//// 21 characters total, only uppercase letters, need to delete one
//// character and replace two characters, 1 with a digit, 1 with a
//// lowercase letter.
//// 3 minimum changes.
//
//strongPasswordChecker("Edaaaabit!!1") ➞ 1
//// Contains more than 3 repeating characters in a row - "aaaa", need
//// to replace an "a" with a different character (e.g. "a3aa" or in some
//// cases add a character in the middle "aa2aa".
//// 1 minimum change.
//Notes
//Insertion, deletion or replacement of any one character is considered one change.
//Spaces will be ignored for this challange.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(strongPasswordChecker('Edabit!'), 1)
//Test.assertEquals(strongPasswordChecker('edabit1!'), 1)
//Test.assertEquals(strongPasswordChecker('EDABITEDABITEDABITEDA'), 3)
//Test.assertEquals(strongPasswordChecker('Edaaaabit!!1'), 1)
//Test.assertEquals(strongPasswordChecker('Edab1111111t!!!'), 3)
//Test.assertEquals(strongPasswordChecker('1234'), 4)
//Test.assertEquals(strongPasswordChecker('1234ABCD'), 1)
//Test.assertEquals(strongPasswordChecker('ilikeapples'), 2)
//Test.assertEquals(strongPasswordChecker('password1234'), 1)
//Test.assertEquals(strongPasswordChecker('passAword123B!2%##4'), 0)
//Test.assertEquals(strongPasswordChecker('S$t@r1o2n3gPas3swrd'), 0)
//Test.assertEquals(strongPasswordChecker('!!2aEd'), 2)
//Test.assertEquals(strongPasswordChecker('Arewehumanorarewecoders?'), 5)
//Test.assertEquals(strongPasswordChecker('RosesAreRedVioletsAreBlue'), 6)
//Test.assertEquals(strongPasswordChecker('Unexpected"{"OnLine32'), 1)
//Test.assertEquals(strongPasswordChecker('ICanTypeAnythingHereAndGetAwayWithIt'), 17)
//Test.assertEquals(strongPasswordChecker('orcani?'), 2)
//Test.assertEquals(strongPasswordChecker('ULTRAstrongP455w0rdthatstoolong'), 11)
//Test.assertEquals(strongPasswordChecker('7777777777777777777777777'), 11)
//Test.assertEquals(strongPasswordChecker('aaaaaaaaaaaaaaaaaaaaaaa'), 9)
//Test.assertEquals(strongPasswordChecker('aaaaaaaa'), 2)
//Test.assertEquals(strongPasswordChecker('LLLLLLLLLLLLLLLLLLLL'), 6)
//Test.assertEquals(strongPasswordChecker(''), 8)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Recursion: Parity of the Smallest Integer

//tags: arrays,recursion

//url: https://edabit.com/challenge/q3LpnKujfvSZpu9qQ

//Description:
//Write a function that returns the smallest integer in an array with its corresponding index and its parity. Although these tasks can be equivocally achievable with the use of some built-in and Array functions, the purpose and intent of this challenge is for you to solve it recursively.
//Output Structure
//{"@index " + index_of_smallest: smallest_integer, "parity": "odd|even"}
//Examples
//bitwiseOneZero([107, 19, -18, -79, 36, 23, 97]) ➞ {"@index 3": -79, "parity": "odd"}
//
//bitwiseOneZero([31, 7, 2, 13, 7, 9, 10, 13]) ➞ {"@index 2": 2, "parity": "even"}
//
//bitwiseOneZero([3, 3, 3, 3, 3, 3]) ➞ {"@index 0": 3, "parity": "odd"}
//Notes
//The use of indexOf() and min() are restricted.
//You can read more about recursion (see Resources tab) if you aren't familiar with it or haven't fully understood the concept before taking up this challenge.
//If you think recursion is fun, you can find a collection of those challenges here.
//Another version of this challenge which is non-recursive can be found here.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//const noIndexOfMin = f => !RegExp('indexOf|min','gm').test(f)
//const nonRecur = f => (`${f}`.match(RegExp(`${f.name}`,'gm'))||[]).length > +(/function/.test(f))
//Test.assertNotEquals(noIndexOfMin(bitwiseOneZero), false, "min() and indexOf() functions aren't allowed!")
//Test.assertNotEquals(nonRecur(bitwiseOneZero), false, "Recursion is required!")
//​
//let numVector = [
//  [107, 19, -18, -79, 36, 23, 97],
//  [31, 7, 2, 13, 7, 9, 10, 13],
//  [3, 3, 3, 3, 3, 3],
//  [-31, -7, -13, -7, -9, -13],
//  [1, 3, 9, 5, -1, 7, 9, 49],
//  [63, 77, 13, 75, 91, 113],
//  [6, 6, 6, 6, 6, 6]
//],
//resVector = [
//  {"@index 3": -79, "parity": "odd"},
//  {"@index 2": 2, "parity": "even"},
//  {"@index 0": 3, "parity": "odd"},
//  {"@index 0": -31, "parity": "odd"},
//  {"@index 4": -1, "parity": "odd"},
//  {"@index 2": 13, "parity": "odd"},
//  {"@index 0": 6, "parity": "even"}]
//for (let i in numVector) Test.assertSimilar(bitwiseOneZero(numVector[i]), resVector[i])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Factorial Trailing Zeroes

//tags: math,numbers

//url: https://edabit.com/challenge/5s9TFExBx8sbreoeF

//Description:
//Create a function that, given a positive integer n, returns the number of trailing zeroes in n!.
//Examples
//trailingZeroes(6) ➞ 1
//// factorial(6) = 720
//
//trailingZeroes(30) ➞ 7
//// factorial(30) = 265252859812191058636308480000000
//Notes
//Create a solution that works in logarithmic time complexity.
//n! = n * (n-1) * (n-2) * ... * 2 * 1

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//const lst_test = [[6, 1], [11, 2], [30, 7], [150, 37], [786, 195], [5017, 1252],
//[11693, 2919], [26677, 6666], [69101, 17272], [333571, 83388]];
//for (t of lst_test) {
//    let ans = trailingZeroes(t[0]);
//    Test.assertEquals(ans, t[1]);
//}

