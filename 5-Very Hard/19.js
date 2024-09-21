

//title: Basic Statistics: Mode

//tags: arrays,math,numbers

//url: https://edabit.com/challenge/biyHa34iTd58LfFFb

//Description:
//The mode of a group of numbers is the value (or values) that occur most often (values have to occur more than once). Given a sorted array of numbers, return an array of all modes in ascending order.
//Examples
//mode([4, 5, 6, 6, 6, 7, 7, 9, 10]) ➞ [6]
//
//mode([4, 5, 5, 6, 7, 8, 8, 9, 9]) ➞ [5, 8, 9]
//
//mode([1, 2, 2, 3, 6, 6, 7, 9]) ➞ [2, 6]
//Notes
//In this challenge, all group of numbers will have at least one mode.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(mode([1, 2, 3, 3, 6, 7, 8, 9]), [3])
//Test.assertSimilar(mode([2, 3, 3, 4, 4, 6, 7, 8]), [3, 4])
//Test.assertSimilar(mode([1, 6, 6, 7, 7, 8, 9]), [6, 7])
//Test.assertSimilar(mode([4, 4, 4, 6, 8, 9, 10, 10]), [4])
//Test.assertSimilar(mode([1, 4, 6, 7, 9, 9]), [9])
//Test.assertSimilar(mode([2, 2, 2, 3, 7, 8, 9, 9]), [2])
//Test.assertSimilar(mode([2, 4, 5, 5, 7, 8, 10, 10]), [5, 10])
//Test.assertSimilar(mode([1, 1, 4, 4, 5, 7, 9]), [1, 4])
//Test.assertSimilar(mode([2, 3, 3, 3, 4, 7, 9]), [3])
//Test.assertSimilar(mode([1, 1, 2, 4, 4, 6, 6, 9]), [1, 4, 6])
//Test.assertSimilar(mode([1, 2, 3, 3, 3, 7, 9, 10]), [3])
//Test.assertSimilar(mode([1, 2, 5, 6, 6, 6, 7, 10]), [6])
//Test.assertSimilar(mode([2, 2, 6, 9, 10, 10, 10]), [10])
//Test.assertSimilar(mode([1, 1, 5, 6, 6, 10, 10]), [1, 6, 10])
//Test.assertSimilar(mode([2, 2, 3, 3, 4, 8]), [2, 3])
//Test.assertSimilar(mode([2, 3, 8, 10, 10, 10, 10]), [10])
//Test.assertSimilar(mode([2, 2, 3, 4, 6, 9]), [2])
//Test.assertSimilar(mode([1, 2, 5, 8, 9, 9, 10, 10]), [9, 10])
//Test.assertSimilar(mode([2, 3, 3, 4, 4, 5]), [3, 4])
//Test.assertSimilar(mode([2, 2, 3, 3, 4, 5, 10, 10]), [2, 3, 10])
//Test.assertSimilar(mode([1, 3, 3, 5, 5, 9, 10, 10]), [3, 5, 10])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Find the Most Frequent Element in an Array

//tags: arrays,loops

//url: https://edabit.com/challenge/hxHBsYebaBM3ff5s6

//Description:
//Create a function that takes an array and returns the most frequently occurring element contained within it.
//Examples
//findFrequent([3, 7, 3]) ➞ 3
//
//findFrequent([null, "hello", true, null]) ➞ null
//
//findFrequent([false, "up", "down", "left", "right", true, false]) ➞ false
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(findFrequent([3, 7, 3]), 3);
//Test.assertEquals(findFrequent([null, "hello", true, null]), null);
//Test.assertEquals(findFrequent([false, "up", "down", "left", "right", true, false]), false);
//Test.assertEquals(findFrequent([undefined]), undefined);
//Test.assertEquals(findFrequent([1, 2, -3, true, false, undefined, "yes", "yeah", "yup", 2]), 2);
//Test.assertEquals(findFrequent(["Batman", "Superman", "Batman"]), "Batman");

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Vending Machine

//tags: arrays,interview,loops,objects,recursion

//url: https://edabit.com/challenge/PYXbvQh9W3c9i72xx

//Description:
//Your task is to create a function that simulates a vending machine.
//Given an amount of money (in cents ¢ to make it simpler) and a productNumber, the vending machine should output the correct product name and give back the correct amount of change.
//The coins used for the change are the following: [500, 200, 100, 50, 20, 10]
//The return value is an object with 2 properties:
//product: the product name that the user selected.
//change: an array of coins (can be empty, must be sorted in descending order).
//Examples
//vendingMachine(products, 200, 7) ➞ { product: "Crackers", change: [ 50, 20, 10 ] }
//
//vendingMachine(products, 500, 0) ➞ "Enter a valid product number"
//
//vendingMachine(products, 90, 1) ➞ "Not enough money for this product"
//Notes
//The products are fixed and you can find them in the Tests tab.
//If productNumber is invalid (out of range) you should return the string: "Enter a valid product number".
//If money is not enough to buy a certain product you should return the string: "Not enough money for this product".
//If there's no change, return an empty array as the change.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//// Products available
//const products = [
//  { number: 1, price: 100, name: 'Orange juice' },
//  { number: 2, price: 200, name: 'Soda' },
//  { number: 3, price: 150, name: 'Chocolate snack' },
//  { number: 4, price: 250, name: 'Cookies' },
//  { number: 5, price: 180, name: 'Gummy bears' },
//  { number: 6, price: 500, name: 'Condoms' },
//  { number: 7, price: 120, name: 'Crackers' },
//  { number: 8, price: 220, name: 'Potato chips' },
//  { number: 9, price: 80,  name: 'Small snack' },
//];
//​
//// Tests
//Test.assertSimilar(vendingMachine(products, 500, 8), { product: 'Potato chips', change: [ 200, 50, 20, 10 ] });
//Test.assertSimilar(vendingMachine(products, 500, 1), { product: 'Orange juice', change: [ 200, 200 ] });
//Test.assertSimilar(vendingMachine(products, 200, 7), { product: 'Crackers', change: [ 50, 20, 10 ] });
//Test.assertSimilar(vendingMachine(products, 100, 9), { product: 'Small snack', change: [ 20 ] });
//Test.assertSimilar(vendingMachine(products, 1000, 6), { product: 'Condoms', change: [ 500 ] });
//Test.assertSimilar(vendingMachine(products, 250, 4), { product: 'Cookies', change: [] });
//Test.assertEquals(vendingMachine(products, 500, 0), 'Enter a valid product number');
//Test.assertEquals(vendingMachine(products, 90, 1), 'Not enough money for this product');
//Test.assertEquals(vendingMachine(products, 0, 0), 'Enter a valid product number');

