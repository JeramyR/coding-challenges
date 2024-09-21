

//title: Smallest N Digit Number

//tags: math,numbers

//url: https://edabit.com/challenge/hzCaSMeqkErxixioy

//Description:
//Write a function that returns the smallest N-digit number which is a multiple of the specified value.
//Examples
//smallest(3, 8) ➞ 104
//// Smallest 3-digit integer that is a multiple of 8
//
//smallest(5, 12) ➞ 10008
//
//smallest(7, 1) ➞ 1000000
//
//smallest(2, 3) ➞ 12
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(smallest(3, 8), 104)
//Test.assertEquals(smallest(5, 12), 10008)
//Test.assertEquals(smallest(7, 1), 1000000)
//Test.assertEquals(smallest(2, 3), 12)
//Test.assertEquals(smallest(9, 33), 100000032)
//Test.assertEquals(smallest(8, 17), 10000012)
//Test.assertEquals(smallest(4, 67), 1005)
//Test.assertEquals(smallest(4, 432), 1296)
//Test.assertEquals(smallest(3, 432), 432)
//Test.assertEquals(smallest(3, 77), 154)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Product of All Other Numbers

//tags: arrays,loops,math

//url: https://edabit.com/challenge/r9yzk5388xhrsrLv2

//Description:
//You have an array of integers, and for each index you want to find the product of every integer except the integer at that index.
//Create a function that takes an array of integers and returns an array of the products.
//Examples
//getProducts([1, 7, 3, 4]) ➞ [84, 12, 28, 21]
//
//getProducts([1, 2, 6, 5, 9]) ➞ [540, 270, 90, 108, 60]
//
//getProducts([1, 2, 3, 0, 5]) ➞ [0, 0, 0, 30, 0]
//Notes
//You can't use division, otherwise you might end up dividing by 0 and the universe would end.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(getProducts([1, 2, 6, 5, 9]), [540, 270, 90, 108, 60])
//Test.assertSimilar(getProducts([1, 7, 3, 4]), [84, 12, 28, 21])
//Test.assertSimilar(getProducts([1, 2, 3, 0, 5]), [0, 0, 0, 30, 0])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: ES6: Destructuring Objects IX

//tags: arrays,formatting,language_fundamentals,objects

//url: https://edabit.com/challenge/4k9HnP6bF5ptHjmxE

//Description:
//Given an array of user objects. If we just wanted to get the name of the third object in the array, one way could be to use an array method like:
//let users = [
//  { name: "John", email: "john@example.com" },
//  { name: "Jason", email: "jason@example.com" },
//  { name: "Jeremy", email: "jeremy@example.com" },
//  { name: "Jacob", email: "jacob@example.com" }
//]
//
//let thirdUser = users.filter((e, i) => i === 2 )[0].name
//console.log(thirdUser)  // "Jeremy"
//However, you can combine array and Object destructuring to extract it more declaratively. Use array and object destructuring to extract the name from the third object in the users array and assign it to the variable thirdUser. Provide the solution inside the brackets only. Ignore the .toString() function (used for validation).
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//let users = [
//  { name: "John", email: "john@example.com" },
//  { name: "Jason", email: "jason@example.com" },
//  { name: "Jeremy", email: "jeremy@example.com" },
//  { name: "Jacob", email: "jacob@example.com" }
//] 
//​
//eval(str)
//​
//function validation() {
//  return /\,.*\,.*thirdUser/.test(str) ? "valid" : "not valid" 
//}
//​
//Test.assertEquals(validation(), "valid", "You must assign thirdUser inside the brackets")
//Test.assertEquals(thirdUser, "Jeremy")

