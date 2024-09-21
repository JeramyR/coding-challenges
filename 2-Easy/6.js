

//title: Drink Sorting

//tags: objects,sorting

//url: https://edabit.com/challenge/nuXdWHAoHv9y38sn7

//Description:
//You will be given an array of drinks, with each drink being an object with two properties: name and price. Create a function that has the drinks array as an argument and return the drinks objects sorted by price in ascending order.
//Assume that the following array of drink objects needs to be sorted:
//drinks = [
//  {name: "lemonade", price: 50},
//  {name: "lime", price: 10}
//]
//The output of the sorted drinks object will be:
//Examples
//sortDrinkByPrice(drinks) ➞ [{name: "lime", price: 10}, {name: "lemonade", price: 50}]
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//const drinks1 = [
//  {name: 'lemonade', price: 90}, 
//  {name: 'lime', price: 432}, 
//  {name: 'peach', price: 23}
//];
//​
//const sorted1 = [
//  {name: 'peach', price: 23},
//  {name: 'lemonade', price: 90}, 
//  {name: 'lime', price: 432}
//];
//​
//const drinks2 = [
//  {name: 'water', price: 120}, 
//  {name: 'lime', price: 80}, 
//  {name: 'peach', price: 90}
//];
//​
//const sorted2 = [
//  {name: 'lime', price: 80},
//  {name: 'peach', price: 90}, 
//  {name: 'water', price: 120}
//];
//​
//Test.assertSimilar(sortDrinkByPrice(drinks1), sorted1, "Object is not sorted.");

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Tuck in Array

//tags: arrays,formatting

//url: https://edabit.com/challenge/7ysTEDruHz2prcJQ9

//Description:
//Create a function that takes two arrays and insert the second array in the middle of the first array.
//Examples
//tuckIn([1, 10], [2, 3, 4, 5, 6, 7, 8, 9]) ➞ [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//
//tuckIn([15,150], [45, 75, 35]) ➞ [15, 45, 75, 35, 150]
//
//tuckIn([[1, 2], [5, 6]], [[3, 4]]) ➞ [[1, 2], [3, 4], [5, 6]]
//Notes
//The first array always has two elements.
//Use the spread syntax to solve this challenge.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(tuckIn([1, 10], [2, 3, 4, 5, 6, 7, 8, 9]), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
//Test.assertSimilar(tuckIn([15, 150], [45, 75, 35]), [15, 45, 75, 35, 150])
//Test.assertSimilar(tuckIn(["bottom", "topping"], ["tomatosauce", "vegetables", "cheese"]), ["bottom", "tomatosauce", "vegetables", "cheese", "topping"])
//Test.assertSimilar(tuckIn([[1, 2], [5, 6]], [[3, 4]]), [[1, 2], [3, 4], [5, 6]])
//Test.assertSimilar(tuckIn([true, false], [false, true, null, undefined]), [true, false, true, null, undefined, false])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Find the Amount of Potatoes

//tags: language_fundamentals,regex,strings

//url: https://edabit.com/challenge/u6iaymtE4eYXQ2ZWR

//Description:
//Create a function to return the amount of potatoes there are in a string.
//Examples
//potatoes("potato") ➞ 1
//
//potatoes("potatopotato") ➞ 2
//
//potatoes("potatoapple") ➞ 1
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(potatoes("potato"), 1)
//Test.assertEquals(potatoes("potatopotatocherry"),2 )
//Test.assertEquals(potatoes("potatopotatopotatoorange"), 3)
//Test.assertEquals(potatoes("potatopotatobananapotatopotato"), 4)
//Test.assertEquals(potatoes("potatopotatomangopotatopotatopotato"), 5)
//Test.assertEquals(potatoes("potatocucumberpotatopotatopotatopotatopotato"), 6)

