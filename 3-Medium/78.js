

//title: Name Classes

//tags: classes,language_fundamentals,objects

//url: https://edabit.com/challenge/qNMtrtizgssAQqP2b

//Description:
//Write a class called Name and create the following attributes given a first name and last name (as fname and lname):
//An attribute called fullname which returns the first and last names.
//An attribute called initials which returns the first letters of the first and last name. Put a . between the two letters.
//Remember to allow the attributes fname and lname to be accessed individually as well.
//Examples
//a1 = new Name("john", "SMITH")
//a1.fname ➞ "John"
//
//a1.lname ➞ "Smith"
//
//a1.fullname ➞ "John Smith"
//
//a1.initials ➞ "J.S"
//Notes
//Make sure only the first letter of each name is capitalised.
//Check the Resources tab for some helpful tutorials on JavaScript classes.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//a1 = new Name("john", "SMITH")
//Test.assertEquals(a1.fname, "John")
//Test.assertEquals(a1.lname, "Smith")
//Test.assertEquals(a1.fullname, "John Smith")
//Test.assertEquals(a1.initials, "J.S")
//​
//a2 = new Name("sARah", "fRolliE")
//Test.assertEquals(a2.fname, "Sarah")
//Test.assertEquals(a2.lname, "Frollie")
//Test.assertEquals(a2.fullname, "Sarah Frollie")
//Test.assertEquals(a2.initials, "S.F")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Switcharoo

//tags: arrays,conditions,strings,validation

//url: https://edabit.com/challenge/2dcXsuTD68iRK5MiT

//Description:
//Create a function that takes a string and returns a new string with its first and last characters swapped, except under three conditions:
//If the length of the string is less than two, return "Incompatible.".
//If the argument is not a string, return "Incompatible.".
//If the first and last characters are the same, return "Two's a pair.".
//Examples
//flipEndChars("Cat, dog, and mouse.") ➞ ".at, dog, and mouseC"
//
//flipEndChars("ada") ➞ "Two's a pair."
//
//flipEndChars("Ada") ➞ "adA"
//
//flipEndChars("z") ➞ "Incompatible."
//
//flipEndChars([1, 2, 3]) ➞ "Incompatible."
//Notes
//Tests are case sensitive (e.g. "A" and "a" are not the same character).

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(flipEndChars("Cat, dog, and mouse."), ".at, dog, and mouseC");
//Test.assertEquals(flipEndChars("Anna, Banana"), "anna, BananA");
//Test.assertEquals(flipEndChars("[]"), "][");
//Test.assertEquals(flipEndChars(""), "Incompatible.");
//Test.assertEquals(flipEndChars([1, 2, 3]), "Incompatible.");
//Test.assertEquals(flipEndChars("dfdkf49824fdfdfjhd"), "Two's a pair.");
//Test.assertEquals(flipEndChars("#343473847#"), "Two's a pair.");

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Fix the Code: Un-Mutating an Array

//tags: bugs,loops,scope

//url: https://edabit.com/challenge/wTQpSEZPpPdyLtK9k

//Description:
//Your friend is trying to write a function to accomplish the following transformations:
//let x = [3, 3, 3, 3, 3, 3, 3]
//
//// Each time x is called, the following results are shown:
//
//change(x, 0)  // [3, 3, 3, 3, 3, 3, 3]
//change(x, 1)  // [3, 2, 2, 2, 2, 2, 3]
//change(x, 2)  // [3, 2, 1, 1, 1, 2, 3]
//change(x, 3)  // [3, 2, 1, 0, 1, 2, 3]
//Note: The change() function should not mutate the original array. After each call to the function, the original x should still equal [3, 3, 3, 3, 3, 3, 3].
//He comes up with the following code:
//function change(x, times) {
//  for(let i = 0; i < x.length; i++) {
//    let j = 1; 
//    while (j <= times) {
//      if (i >= j && i < x.length-j) {
//        x[i]--; 
//      }
//      j++; 
//    }
//  }
//  return x; 
//}
//Oops! The code appears to mutate the original array. Fix this incorrect code so that the function no longer mutates the original array.
//See below:
//Examples
//let x = [3, 3, 3, 3, 3, 3, 3]
//
//// What we want:
//change(x, 2) => [3, 2, 1, 1, 1, 2, 3]
//
//change(x, 2) => [3, 2, 1, 1, 1, 2, 3]
//
//// What we get:
//change(x, 2) => [3, 2, 1, 1, 1, 2, 3]  // Good so far...
//
//change(x, 2) => [3, 1, -1, -1, -1, 1, 3] // Array is mutated :(
//Notes
//If this is confusing, copy and paste the incorrect code in a REPL environment and play around with the code to understand what the function is doing.
//Hint: Try to make a copy of the input array.
//If this looks familiar, it is part of a solution for the Concentric Rug problem.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(change(x, 2), [3, 2, 1, 1, 1, 2, 3])
//Test.assertSimilar(change(x, 2), [3, 2, 1, 1, 1, 2, 3])
//Test.assertSimilar(change(x, 1), [3, 2, 2, 2, 2, 2, 3])
//Test.assertSimilar(change(x, 3), [3, 2, 1, 0, 1, 2, 3])

