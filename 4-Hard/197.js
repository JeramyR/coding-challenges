

//title: Highest Index (With a Twist)

//tags: language_fundamentals,numbers,sorting

//url: https://edabit.com/challenge/zujgM52Xr4MogBjgH

//Description:
//Given a name, return the letter with the highest index in alphabetical order, with its corresponding index, in the form of a string. You are prohibited to use max() nor is reassigning a value to the alphabet array.
//Examples
//alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
//
//
//alphabetIndex(alphabet, "Flavio") ➞ "22v"
//
//alphabetIndex(alphabet, "Andrey") ➞ "25y"
//
//alphabetIndex(alphabet, "Oscar") ➞ "19s"
//Notes
//If you're stuck, check the Resources tab.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
//Test.assertEquals(alphabetIndex(alphabet, "Oscar"), "19s")
//Test.assertEquals(alphabetIndex(alphabet, "Lucas"), "21u")
//Test.assertEquals(alphabetIndex(alphabet, "Marko"), "18r")
//Test.assertEquals(alphabetIndex(alphabet, "Esley"), "25y")
//Test.assertEquals(alphabetIndex(alphabet, "Rogei"), "18r")
//Test.assertEquals(alphabetIndex(alphabet, "Nicolas"), "19s")
//Test.assertEquals(alphabetIndex(alphabet, "Flavio"), "22v")
//Test.assertEquals(alphabetIndex(alphabet, "Andrey"), "25y")
//Test.assertEquals(alphabetIndex(alphabet, "Hello"), "15o")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Sum of Round Numbers

//tags: algorithms,math

//url: https://edabit.com/challenge/cfkBaFXFcGomJBX2j

//Description:
//Given a number, find the "round" of each digit of the number. An integer is called "round" if all its digits except the leftmost (most significant) are equal to zero.
//Round numbers: 4000, 1, 9, 800, 90
//Not round numbers: 110, 707, 222, 1001
//Create a function that takes a number and returns the "round" of each digit (except if the digit is zero) as a string. Check out the following examples for more clarification.
//Examples
//sumRound(101) ➞ "1 100"
//
//sumRound(1234) ➞ "4 30 200 1000"
//
//sumRound(54210) ➞ "10 200 4000 50000"
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(sumRound(101), "1 100")
//Test.assertEquals(sumRound(1010), "10 1000")
//Test.assertEquals(sumRound(1234), "4 30 200 1000")
//Test.assertEquals(sumRound(54213), "3 10 200 4000 50000")
//Test.assertEquals(sumRound(548741), "1 40 700 8000 40000 500000")
//Test.assertEquals(sumRound(1234567), "7 60 500 4000 30000 200000 1000000")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Find the Bug: Annual Price and Deposit Increasement

//tags: arrays,bugs,data_structures,language_fundamentals,objects

//url: https://edabit.com/challenge/5zyJ7DunEikvzcWzf

//Description:
//The annual price increasement needs to be done and we have written a script to migrate a product. An object needs to be returned with the old product and the new migrated product for pricing history records.
//All prices need to raised by 15% and the deposit of bottles is increased from $0.15 to $0.20.
//During the tests the old product seems to be the new product as well. Something is not working like expected.
//Expected result
//migrateProduct({
//  product: "Milk",
//  price: 1.2,
//  containers: [
//    { type: "bottle", deposit: 0.15, liters: 1.5 },
//    { type: "can", deposit: 0.1, liters: 0.33 },
//    { type: "carton", deposit: null, liters: 1 }
//  ]
//}) ➞ {
//  oldProduct: {
//    product: "Milk",
//    price: 1.2,
//    containers: [
//      { type: "bottle", deposit: 0.15, liters: 1.5 },
//      { type: "can", deposit: 0.1, liters: 0.33 },
//      { type: "carton", deposit: null, liters: 1 }
//    ]
//  },
//  newProduct: {
//    product: "Milk",
//    price: 1.38,
//    containers: [
//      { type: "bottle", deposit: 0.2, liters: 1.5 },
//      { type: "can", deposit: 0.1, liters: 0.33 },
//      { type: "carton", deposit: null, liters: 1 }
//    ]
//  }
//}
//Notes
//JSON object functions may not be used due to performance issues.
//Check the Resources tab for tips! :)

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertDeepEquals(migrateProduct({
//  product: 'Milk',
//  price: 1.2,
//  containers: [
//    { type: 'bottle', deposit: 0.15, liters: 1.5 },
//    { type: 'can', deposit: 0.1, liters: 0.33 },
//    { type: 'carton', deposit: null, liters: 1 }
//  ]
//}), {
//  oldProduct: {
//    product: 'Milk',
//    price: 1.2,
//    containers: [
//      { type: 'bottle', deposit: 0.15, liters: 1.5 },
//      { type: 'can', deposit: 0.1, liters: 0.33 },
//      { type: 'carton', deposit: null, liters: 1 }
//    ]
//  },
//  newProduct: {
//    product: 'Milk',
//    price: 1.38,
//    containers: [
//      { type: 'bottle', deposit: 0.2, liters: 1.5 },
//      { type: 'can', deposit: 0.1, liters: 0.33 },
//      { type: 'carton', deposit: null, liters: 1 }

