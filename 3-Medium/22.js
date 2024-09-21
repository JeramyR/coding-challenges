

//title: Mirror Array

//tags: arrays,logic,numbers

//url: https://edabit.com/challenge/GMh85YdL7kAutJ5YN

//Description:
//Given an integer array, transform that array into a mirror.
//Examples
//mirror([0, 2, 4, 6]) ➞ [0, 2, 4, 6, 4, 2, 0]
//
//mirror([1, 2, 3, 4, 5]) ➞ [1, 2, 3, 4, 5, 4, 3, 2, 1]
//
//mirror([3, 5, 6, 7, 8]) ➞ [3, 5, 6, 7, 8, 7, 6, 5, 3]
//Notes
//Do not repeat the last item of the given array.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(mirror([1, 2, 3, 4, 5]), [1, 2, 3, 4, 5, 4, 3, 2, 1])
//Test.assertSimilar(mirror([0, 2, 4, 6]), [0, 2, 4, 6, 4, 2, 0])
//Test.assertSimilar(mirror([1, 2, 2, 3, 3, 4]), [1, 2, 2, 3, 3, 4, 3, 3, 2, 2, 1])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Remove Duplicates from an Array

//tags: arrays,interview,language_fundamentals,strings

//url: https://edabit.com/challenge/Wd7WKqm95jhcAGATG

//Description:
//Create a function that takes an array of items, removes all duplicate items and returns a new array in the same sequential order as the old array (minus duplicates).
//Examples
//removeDups([1, 0, 1, 0]) ➞ [1, 0]
//
//removeDups(["The", "big", "cat"]) ➞ ["The", "big", "cat"]
//
//removeDups(["John", "Taylor", "John"]) ➞ ["John", "Taylor"]
//Notes
//Tests contain arrays with both strings and numbers.
//Tests are case sensitive.
//Each array item is unique.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(removeDups(['John', 'Taylor', 'John']), ['John', 'Taylor'])
//Test.assertSimilar(removeDups(['John', 'Taylor', 'John', 'john']), ['John', 'Taylor', 'john'])
//Test.assertSimilar(removeDups(['javascript', 'python', 'python', 'ruby', 'javascript', 'c', 'ruby']), ['javascript', 'python', 'ruby', 'c'])
//Test.assertSimilar(removeDups([1, 2, 2, 2, 3, 2, 5, 2, 6, 6, 3, 7, 1, 2, 5]), [1, 2, 3, 5, 6, 7])
//Test.assertSimilar(removeDups(['#', '#', '%', '&', '#', '$', '&']), ['#', '%', '&', '$'])
//Test.assertSimilar(removeDups([3, 'Apple', 3, 'Orange', 'Apple']), [3, 'Apple', 'Orange'])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Promises I: What Is a Closure?

//tags: closures,functional_programming

//url: https://edabit.com/challenge/rLybgi7vcxL2ykt8F

//Description:
//Closures are functions that remember their lexical environments. Lexical environments mean the environment in which the function was declared.
//function parent(x) {
//  return function closure() {    // Closure is declared here.
//    return x
//  }
//}
//
//const remember = parent("remembers me")
//// Seems like the variable x would be gone after
//// parent is executed, but it's not.
//
//closure()
//// Returns "remembers me" because the inner
//// function remembers x.
//Fix the greetingMaker() function so that it works with the greeting() function.
//The greeting() function has already been created (check the Tests tab).
//Example
//const greeting = greetingMaker("Hello")
//greeting("James") ➞ "Hello, James"
//Notes
//Check the Resources tab for more info on closures.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//const greeting = greetingMaker("Hello")
//​
//Test.assertEquals(greeting("James"), "Hello, James")
//Test.assertEquals(greeting("John"), "Hello, John")
//Test.assertEquals(greeting("Jacob"), "Hello, Jacob")
//Test.assertEquals(greeting("Joseph"), "Hello, Joseph")

