

//title: Shopping for Memorial Day!

//tags: arrays,objects

//url: https://edabit.com/challenge/rAgNy2t47iMqxz2Wu

//Description:
//Create a function that takes an array of objects and calculate the total based on the quantity of items purchased. Apply a 6% sales tax for each item when appropriate.
//Examples
//checkout([
//  { desc: "potato chips", prc: 2, qty: 2, taxable: false },
//  { desc: "soda", prc: 3, qty: 2, taxable: false },
//  { desc: "paper plates", prc: 5, qty: 1, taxable: true }
//]) ➞ 15.3
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(
//  checkout([
//    { desc: "grill", prc: 300, qty: 1, taxable: true },
//    { desc: "hotdogs", prc: 10, qty: 2, taxable: false },
//    { desc: "US Flag", prc: 30, qty: 1, taxable: true }
//  ]), 369.8)
//  
//Test.assertEquals(
//  checkout([
//    { desc: "hamburger", prc: 5, qty: 2, taxable: false },
//    { desc: "potato salad", prc: 8, qty: 1, taxable: false },
//    { desc: "potato chips", prc: 2, qty: 2, taxable: false },
//    { desc: "soda", prc: 3, qty: 2, taxable: false },
//    { desc: "paper plates", prc: 5, qty: 1, taxable: true },
//  ]), 33.3)
//​
//Test.assertEquals(
//  checkout([
//    { desc: "beach umbrella", prc: 58, qty: 1, taxable: true },
//    { desc: "beach towel", prc: 9, qty: 2, taxable: true },
//    { desc: "swim suit", prc: 25, qty: 2, taxable: false },
//    { desc: "soda", prc: 3, qty: 2, taxable: false },
//    { desc: "cooler", prc: 25, qty: 1, taxable: true },
//  ]), 163.06)
//​

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: String Flips

//tags: language_fundamentals,strings

//url: https://edabit.com/challenge/DmKPX7XLSTFPBxysD

//Description:
//Create a function that takes a string as the first argument, and a (string) specification as a second argument. If the specification is "word", return a string with each word reversed while maintaining their original order. If the specification is "sentence", reverse the order of the words in the string, while keeping the words intact.
//Examples
//str = "There's never enough time to do all the nothing you want"
//
//
//flip("Hello", "word") ➞ "olleH"
//
//flip("Hello", "sentence") ➞ "Hello"
//
//flip(str, "word") ➞ "s'erehT reven hguone emit ot od lla eht gnihton uoy tnaw"
//
//flip(str, "sentence") ➞ "want you nothing the all do to time enough never There's"
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//str1 = "There's never enough time to do all the nothing you want"
//str2 = "I have all these great genes but they're recessive"
//str3 = "I like maxims that don't encourage behavior modification"
//​
//Test.assertEquals(flip('Hello', 'word'), 'olleH')
//Test.assertEquals(flip('Hello', 'sentence'), 'Hello')
//Test.assertEquals(flip(str1, 'word'), "s'erehT reven hguone emit ot od lla eht gnihton uoy tnaw")
//Test.assertEquals(flip(str1, 'sentence'), "want you nothing the all do to time enough never There's")
//Test.assertEquals(flip(str2, 'word'), "I evah lla eseht taerg seneg tub er'yeht evissecer")
//Test.assertEquals(flip(str2, 'sentence'), "recessive they're but genes great these all have I")
//Test.assertEquals(flip(str3, 'word'), "I ekil smixam taht t'nod egaruocne roivaheb noitacifidom")
//Test.assertEquals(flip(str3, 'sentence'), "modification behavior encourage don't that maxims like I")
//​
//// Quotes credit: Bill Watterson

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Rotated Words

//tags: logic,regex,strings,validation

//url: https://edabit.com/challenge/M9NxjPQQynDtqp743

//Description:
//Some characters do not change after a rotation of 180 degrees. They can be read, although sometimes in a different way. For example, uppercase letters "H", "I", "N", "O", "S", "X", "Z" after rotation are not changed, the letter "M" becomes a "W", and vice versa.
//So, the word "WOW" turns into the word "MOM". On the other hand, the word "HOME" cannot be rotated.
//Find the number of unique readable Rotated Words in the input string txt (without duplicates).
//Examples
//rotatedWords("HSSN") ➞ 1
//// String can be rotated to a valid string
//
//rotatedWords("OS IS UPDATED") ➞ 2
//// "OS" and "IS" can be rotated to a valid string
//
//rotatedWords("MUBASHIR") ➞ 0
//Notes
//String contains only uppercase letters.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(rotatedWords("MUBASHIR"), 0)
//Test.assertEquals(rotatedWords("HSSN"), 1)
//Test.assertEquals(rotatedWords("ON"), 1, 'Wrong result for "ON". It should be 1')
//Test.assertEquals(rotatedWords("OS IS UPDATED"), 2, 'Wrong result for "OS IS UPDATED". It should be 2')
//Test.assertEquals(rotatedWords("WHO IS WHO"), 2, 'Wrong result for "WHO IS WHO". It should be 2')
//Test.assertEquals(rotatedWords("JS"), 0, 'Wrong result for "JS". It should be 0')
//Test.assertEquals(rotatedWords("I III I III"), 2, 'Wrong result for "I III I III". It should be 2')
//Test.assertEquals(rotatedWords("SOS IN THE SEA"), 2, 'Wrong result for "SOS IN THE SEA". It should be 2')
//Test.assertEquals(rotatedWords("WHO IS rotatedWords AND WHO IS NO"), 3, 'Wrong result for "WHO IS rotatedWords AND WHO IS NO". It should be 3')
//Test.assertEquals(rotatedWords("SIN AND COS"), 1, 'Wrong result for "SIN AND COS". It should be 1')
//Test.assertEquals(rotatedWords("I HAVE A GOOD JOB"), 1, 'Wrong result for "I HAVE A GOOD JOB". It should be 1')
//Test.assertEquals(rotatedWords("HAVE A GOOD DAY"), 0, 'Wrong result for "HAVE A GOOD DAY". It should be 0')
//Test.assertEquals(rotatedWords(""), 0, 'Wrong result for "". It should be 0.')
////Mubashir

