

//title: RegEx XVI : Quantifiers - x*, x+, x?

//tags: formatting,regex

//url: https://edabit.com/challenge/u4xcCumCfmK92nf2K

//Description:
//Quantifiers indicate numbers of characters or expressions to match.
//x* matches the preceding item "x" 0 or more times.
//"A ghost booooed".match(/bo*/) ➞ "boooo"
//x+ matches the preceding item "x" 1 or more times. Equivalent to {1,}.
//"caaaaaaandy".match(/a+/) ➞ "aaaaaa"
//x? matches the preceding item "x" 0 or 1 times. If used immediately after any of the quantifiers *, +, ?, or {}, makes the quantifier non-greedy (matching the minimum number of times), as opposed to the default, which is greedy (matching the maximum number of times).
//"angle.".match(/e?le?/) ➞ "le"
//"angel.".match(/e?le?/) ➞ "el"
//Write the regex to match only the street.
//Use a quantifier in your expression.
//Example
//let address = "Harry Potter, 4 Privet Drive, Little Whinging, Surrey"
//address.match(REGEXP) ➞ "4 Privet Drive"
//Notes
//Check the Resources tab if you get stuck.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//const address1 = "Harry Potter, 4 Privet Drive, Little Whinging, Surrey"
//const address2 = "Sherlock Holmes, 221B Baker St, Marylebone London NW1 6XE, UK"
//const address3 = "The White House, 1600 Pennsylvania Avenue, Washington, DC"
//​
//Test.assertEquals(address1.match(REGEXP)[0], "4 Privet Drive")
//Test.assertEquals(address2.match(REGEXP)[0], "221B Baker St")
//Test.assertEquals(address3.match(REGEXP)[0], "1600 Pennsylvania Avenue")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Diamond Shaped Array

//tags: arrays,loops,numbers

//url: https://edabit.com/challenge/BPjwuov9iAA6gosGH

//Description:
//Create a function that returns an array that expands by 1 from 1 to the value of the input, and then reduces back to 1. Items in the arrays will be the same as the length of the arrays.
//Examples
//diamondArrays(1) ➞ [[1]]
//
//diamondArrays(2) ➞ [[1], [2, 2], [1]]
//
//diamondArrays(5) ➞ [[1], [2, 2], [3, 3, 3], [4, 4, 4, 4], [5, 5, 5, 5, 5], [4, 4, 4, 4], [3, 3, 3], [2, 2], [1]]
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(diamondArrays(1), [[1]])
//Test.assertSimilar(diamondArrays(2), [[1], [2, 2], [1]])
//Test.assertSimilar(diamondArrays(3), [[1], [2, 2], [3, 3, 3], [2, 2], [1]])
//Test.assertSimilar(diamondArrays(5), [[1], [2, 2], [3, 3, 3], [4, 4, 4, 4], [5, 5, 5, 5, 5], [4, 4, 4, 4], [3, 3, 3], [2, 2], [1]])
//Test.assertSimilar(diamondArrays(7), [[1], [2, 2], [3, 3, 3], [4, 4, 4, 4], [5, 5, 5, 5, 5], [6, 6, 6, 6, 6, 6], [7, 7, 7, 7, 7, 7, 7], [6, 6, 6, 6, 6, 6], [5, 5, 5, 5, 5], [4, 4, 4, 4], [3, 3, 3], [2, 2], [1]])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Don`t Be in Such a Curry

//tags: functional_programming

//url: https://edabit.com/challenge/tG8feBkvmQtsv7s6m

//Description:
//One of the pratical use cases for currying a function in JavaScript is to reduce duplication:
//function add5(num) {
//  return num + 5
//}
//
//function add6(num) {
//  return num + 6
//}
//
//add5(2) // 7
//add6(3) // 9
//Instead of having to create a new function for every new number we can just create a function that returns a new function and pass in the any number we want to add.
//function add(add) {
//  return function(num) {
//    return num + add
//  }
//}
//
//const add5 = add(5)
//add5(2) // 7
//const add6 = add(6)
//add6(3) // 9
//Create a function using currying that will add a car maker name as a property to the carLot object if it doesn't have one. Then have the function add up the number we pass in when we call the curried function.
//function toyotaCars("Toyota")
//function hyundaiCars("Hyundai")
//
//kiaCars(3)
//kiaCars(4)
//hyundaiCars(2)
//hyundaiCars(1)
//
//console.log(carLot) // { Kia: 7, Hyundai: 3}
//Notes
//You only have to create the carMaker() function, not the curried function.
//Check the Resources for more info on currying.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//carLot = {}
//​
//const toyotaCars = carMaker("Toyota")
//const fordCars = carMaker("Ford")
//​
//toyotaCars(5)
//toyotaCars(3)
//toyotaCars(13)
//fordCars(3)
//fordCars(8)
//fordCars(9)
//​
//Test.assertSimilar(carLot, { Toyota: 21, Ford: 20})

