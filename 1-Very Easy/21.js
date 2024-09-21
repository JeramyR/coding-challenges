

//title: Using Ternary Operators

//tags: conditions,language_fundamentals,validation

//url: https://edabit.com/challenge/32rk4qSmtrB6oJGyn

//Description:
//The ternary operator (sometimes called Conditional Expressions) in JavaScript is an alternative to the if... else... statement.
//It is written in the format:
//condition ? result_if_true : result_if_false
//Ternary operators are often more compact than multi-line if statements, and are useful for simple conditional tests.
//For example:
//is_nice = true
//
//// Using ternary operator.
//state = is_nice ? "nice" : "not nice"
//
//// Equivalent code using multi-line if statements.
//if (is_nice)
//  state = "nice"
//else
//  state = "not nice"
//Write a function that uses the ternary operator to return "yeah" if bool is true, and "nope" otherwise.
//Examples
//yeah_nope(true) ➞ "yeah"
//
//yeah_nope(false) ➞ "nope"
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(yeah_nope(true), "yeah")
//Test.assertEquals(yeah_nope(false), "nope")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Minimal IV: if-else if-else Inferno

//tags: conditions,language_fundamentals,logic

//url: https://edabit.com/challenge/MiLoSm7STCWcrPC3k

//Description:
//Check the principles of minimalist code in the intro to the first challenge.
//In the Code tab you will find a code that is missing a single character in order to pass the tests. However, your goal is to submit a function as minimalist as possible. Use the tips in the tips section below.
//Write a function that returns the boolean true if the given number is zero, the string "positive" if the number is greater than zero or the string "negative" if it's smaller than zero.
//Tips
//Executing a return will effectively end your function.
//For example, the code:
//function compare_to_100 (x) {
//  if (x > 100) {
//      return "greater"
//  } else if (x < 100) {
//        return "smaller"
//    } else {
//      return "equal"
//    }
//}
//Can be simplified to:
//function compare_to_100 (x) {
//    if (x > 100) return "greater"
//    if (x < 100) return "smaller"
//    return "equal"
//}
//If x is greater than 100, JavaScript will not execute the code past the first return.
//If x is smaller than 100, JavaScript will not execute the code inside the first if statement or past the second return.
//If x is equal to 100, JavaScript will not execute the code inside the two if statements.
//This can only be used if you have a return inside your if statement.
//Notes
//This is an open series: there isn't a definite list of features for the challenges. Please, do not hesitate to leave your suggestions in the Comments.
//Readability is indeed a subjective concept. Let's discuss it! Feel free to leave your opinion in the Comments.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(equilibrium(0.000), true)
//Test.assertEquals(equilibrium(0), true)
//​
//Test.assertEquals(equilibrium(3), "positive")
//Test.assertEquals(equilibrium(66), "positive")
//Test.assertEquals(equilibrium(5425), "positive")
//Test.assertEquals(equilibrium(1111.1), "positive")
//Test.assertEquals(equilibrium(0.0001), "positive")
//​
//Test.assertEquals(equilibrium(-3), "negative")
//Test.assertEquals(equilibrium(-66), "negative")
//Test.assertEquals(equilibrium(-5425), "negative")
//Test.assertEquals(equilibrium(-1111.1), "negative")
//Test.assertEquals(equilibrium(-0.0001), "negative")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Is the String Odd or Even?

//tags: conditions,strings,validation

//url: https://edabit.com/challenge/2tcuBxn37oouMeErN

//Description:
//Given a string, return true if its length is even or false if the length is odd.
//Examples
//oddOrEven("apples") ➞ true
//// The word "apples" has 6 characters.
//// 6 is an even number, so the program outputs true.
//
//oddOrEven("pears") ➞ false
//// "pears" has 5 letters, and 5 is odd.
//// Therefore the program outputs false.
//
//oddOrEven("cherry") ➞ true
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(oddOrEven("apples"), true)
//Test.assertEquals(oddOrEven("banana"), true)
//Test.assertEquals(oddOrEven("cherry"), true)
//Test.assertEquals(oddOrEven("mango"), false)
//Test.assertEquals(oddOrEven("peach"), false)
//Test.assertEquals(oddOrEven("pears"), false)

