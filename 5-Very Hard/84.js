

//title: Learn Lodash (21): OrderBy, Write Your Own Version of Lodash`s orderBy Sorting Functi

//tags: arrays

//url: https://edabit.com/challenge/pF3fcpEuBfiojtw4q

//Description:
//Write your own version of the Lodash _.oderBy function which allows you to sort an array or object in ascending or descending order with different criteria.
//Real-Life Example
//You work at a car dealership. Your boss would like the cars to be parked in the lot sorted by year so customers will see the newest ones first. You park the cars in descending order by year. He then wants to show the ones with the lowest mileage first, so after the cars are sorted by year you park them in ascending order according to mileage. So all the cars for 2021 are in the first row and the lowest mileage is at the front. Then the next row has all cars from 2020 with the lowest mileage first.
//If he passed you this order as an orderBy function, he would write it like so:
//orderBy(cars, ["year", "mileage], ["desc", "asc"])
//Arguments
//collection ( Array | Object): The collection to iterate over. - in this case the unsorted parking lot.
//iteratee The specific items to sort by. - each car you are checking.
//order eg. "asc" or "desc" - the sort orders - either ascending or descending order.
//If orders is unspecified, all values are sorted in ascending order. Otherwise, specify an order of "desc" for:
//var users = [
//  { "user": "fred",   "age": 48 },
//  { "user": "barney", "age": 34 },
//  { "user": "fred",   "age": 40 },
//  { "user": "barney", "age": 36 }
//]
//Sort by user in ascending order and by age in descending order.
//orderBy(users, ["user", "age"], ["asc", "desc"]);
//=> objects for [["barney", 36], ["barney", 34], ["fred", 48], ["fred", 40]]
//Notes
//Please don't import lodash, your challenge is to write your own version. I can write complicated checking functions to prevent you from importing lodash, but that can cause problems in the tests. If you cheat, everyone will be able to see it and it will defeat the purpose of the challenge.
//This entire series of challenges can be found here.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//const _ = require("lodash")
//​
//cars = [
//  { make: "toyota", year: 2021, mileage: 1241 },
//  { make: "toyota", year: 2019, mileage: 35243 },
//  { make: "ford", year: 2012, mileage: 246244 },
//  { make: "ford", year: 2021, mileage: 34 },
//  { make: "ford", year: 2017, mileage: 109345 },
//  { make: "mazda", year: 2021, mileage: 0 },
//  { make: "mazda", year: 2018, mileage: 120363 },
//]
//​
//carsObject = {
//  stall1: { make: "toyota", year: 2021, mileage: 1241 },
//  stall2: { make: "toyota", year: 2019, mileage: 35243 },
//  stall3: { make: "ford", year: 2012, mileage: 246244 },
//  stall4: { make: "ford", year: 2021, mileage: 34 },
//  stall5: { make: "ford", year: 2017, mileage: 109345 },
//  stall6: { make: "mazda", year: 2021, mileage: 0 },
//  stall7: { make: "mazda", year: 2018, mileage: 120363 },
//}
//​
//​
//​
//Test.assertSimilar(

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Block Dude

//tags: arrays,games,higher_order_functions,validation

//url: https://edabit.com/challenge/K8ydJQoJTq7yEJyk2

//Description:
//In Block Dude, the main character can climb boxes, but only if they are stacked in a particular way so that he is able to climb them one at a time. More specifically, he can only climb UP or DOWN one box at a time.
//Let 1s represent the boxes, and 0 represent the background. Write a function that returns true if block dude can travel from the left side to the right side of the screen given his constraints.
//For example, the sample layout below should return true.
//[
//  [0, 0, 0, 0, X, 0, 0, 0, 0],
//  [0, 0, 0, X, 1, X, X, 0, 0],
//  [0, X, X, 1, 1, 1, 1, X, 0],
//  [X, 1, 1, 1, 1, 1, 1, 1, X]
//]
//Since block dude can travel across these boxes (note: X's are just to show walking path and are not part of the actual input). On the other hand:
//[
//  [0, 0, 0, 0, 0, 0, 0, 0, 0],
//  [0, 0, 0, 1, 1, 0, 0, 0, 0],
//  [0, X, X, 1, 1, 1, 1, 0, 0],
//  [X, 1, 1, 1, 1, 1, 1, 1, 0]
//]
//Should return false, since block dude is stuck at column 3, being unable to climb 2 boxes at once.
//Examples
//canTraverse([
//  [0, 0, 0, 0, 0, 0, 0, 0, 0],
//  [0, 0, 0, 1, 0, 0, 0, 0, 0],
//  [0, 0, 1, 1, 0, 0, 1, 0, 0],
//  [0, 1, 1, 1, 1, 1, 1, 1, 0]
//]) ➞ false
//
//// Block dude can't jump down 2 blocks.
//
//canTraverse([
//  [0, 0, 0, 0, 0, 0, 0, 0, 0],
//  [0, 0, 0, 1, 0, 0, 0, 0, 1],
//  [0, 0, 1, 1, 1, 0, 1, 1, 1],
//  [0, 1, 1, 1, 1, 1, 1, 1, 1]
//]) ➞ true
//
//// Note: Sometimes the exit is at the top!
//
//canTraverse([
//  [0, 0, 0, 0, 0, 0, 0, 0, 0],
//  [0, 0, 0, 1, 0, 0, 0, 0, 0],
//  [0, 0, 1, 1, 1, 1, 1, 0, 0],
//  [0, 1, 1, 1, 1, 1, 1, 1, 0]
//]) ➞ true
//
//canTraverse([
//  [0, 0, 0, 0, 0, 0, 0, 0, 0],
//  [0, 0, 0, 1, 0, 0, 0, 0, 0],
//  [0, 1, 1, 1, 1, 1, 1, 0, 0],
//  [0, 1, 1, 1, 1, 1, 1, 1, 0]
//]) ➞ false
//
//// Block dude can't climb 2 blocks.
//Notes
//Check the Resources tab for a link to play block dude.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(canTraverse([
//  [0, 0, 0, 0, 0, 0, 0, 0, 0], 
//  [0, 0, 0, 1, 0, 0, 0, 0, 0], 
//  [0, 0, 1, 1, 0, 0, 1, 0, 0], 
//  [0, 1, 1, 1, 1, 1, 1, 1, 0]
//]), false)
//​
//Test.assertEquals(canTraverse([
//  [0, 0, 0, 0, 0, 0, 0, 0, 0], 
//  [0, 0, 0, 1, 0, 0, 0, 0, 0], 
//  [0, 0, 1, 1, 1, 0, 1, 0, 0], 
//  [0, 1, 1, 1, 1, 1, 1, 1, 0]
//]), true)
//​
//Test.assertEquals(canTraverse([
//  [0, 0, 0, 0, 0, 0, 0, 0, 0], 
//  [0, 0, 0, 1, 0, 0, 0, 0, 0], 
//  [0, 0, 1, 1, 1, 1, 1, 0, 0], 
//  [0, 1, 1, 1, 1, 1, 1, 1, 0]
//]), true)
//​
//Test.assertEquals(canTraverse([
//  [0, 0, 0, 0, 0, 0, 0, 0, 0], 
//  [0, 0, 0, 1, 0, 0, 0, 0, 0], 
//  [0, 1, 1, 1, 1, 1, 1, 0, 0], 

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: License Plate

//tags: formatting,strings

//url: https://edabit.com/challenge/nPrhSwreEiyTKNLSR

//Description:
//Travelling through Europe one needs to pay attention to how the license plate in the given country is displayed. When crossing the border you need to park on the shoulder, unscrew the plate, re-group the characters according to the local regulations, attach it back and proceed with the journey.
//Create a solution that can format the dmv number into a plate number with correct grouping. The function input consists of string s and group length n. The output has to be upper case characters and digits. The new groups are made from right to left and connected by -. The original order of the dmv number is preserved.
//Examples
//licensePlate("5F3Z-2e-9-w", 4) ➞ "5F3Z-2E9W"
//
//licensePlate("2-5g-3-J", 2) ➞ "2-5G-3J"
//
//licensePlate("2-4A0r7-4k", 3) ➞ "24-A0R-74K"
//
//licensePlate("nlj-206-fv", 3) ➞ "NL-J20-6FV"
//Notes
//A recursive version of this challenge can be found here.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//let [strVector, resVector] = [
//  [["5F3Z-2e-9-w", 4], ["2-5g-3-J", 2], ["2-4A0r7-4k", 3], ["GB-bd519-KFC", 2], ["BF-11gf9i-7819iT", 3],
//   ["Fin-Mmg-418", 3], ["sPx-o755", 3], ["de57-uk", 2], ["d-kapa-7778", 4], ["nlj-206-fv", 3]],
//  ["5F3Z-2E9W", "2-5G-3J", "24-A0R-74K", "GB-BD-51-9K-FC",  "BF-11G-F9I-781-9IT", "FIN-MMG-418",
//   "S-PXO-755", "DE-57-UK", "D-KAPA-7778", "NL-J20-6FV"]
//]
//for (let i in strVector) Test.assertEquals(licensePlate(...strVector[i]), resVector[i])

