

//title: Check If an Array Is Sorted and Rotated

//tags: algorithms,arrays,conditions

//url: https://edabit.com/challenge/ion4uWdfdZ5SZNWXJ

//Description:
//Given an array of distinct integers, create a function that checks if the array is sorted and rotated clockwise. If so, return "YES"; otherwise return "NO".
//Examples
//check([3, 4, 5, 1, 2]) ➞ "YES"
//// The above array is sorted and rotated.
//// Sorted array: [1, 2, 3, 4, 5].
//// Rotating this sorted array clockwise
//// by 3 positions, we get: [3, 4, 5, 1, 2].
//
//check([1, 2, 3]) ➞ "NO"
//// The above array is sorted but not rotated.
//
//check([7, 9, 11, 12, 5]) ➞ "YES"
//// The above array is sorted and rotated.
//// Sorted array: [5, 7, 9, 11, 12].
//// Rotating this sorted array clockwise
//// by 4 positions, we get: [7, 9, 11, 12, 5].
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(check([3, 4, 5, 1, 2]), "YES")
//Test.assertEquals(check([1, 2, 3]), "NO")
//Test.assertEquals(check([7, 9, 11, 12, 5]), "YES")
//Test.assertEquals(check([13, 22, 34, 1, 11]), "YES")
//Test.assertEquals(check([5, 3, 4, 1]), "NO")
//Test.assertEquals(check([100, 120, 130, 50, 120, 111]), "NO")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Selective Array Reversal

//tags: algorithms,arrays,numbers

//url: https://edabit.com/challenge/LMRMELZHhzvdqaQE8

//Description:
//Create a function that takes an array and a number and selectively reverse the order of the array based on the number you're given (second argument). If you're given the arguments [1,2,3,4,5,6] and 2, you would return the array [2,1, 4,3, 6,5].
//Examples
//selReverse([1,2,3,4,5,6], 2) ➞ [2,1, 4,3, 6,5]
//
//selReverse([2,4,6,8,10,12,14,16], 3) ➞ [6,4,2, 12,10,8, 16,14]
//
//selReverse([5,7,2,6,0,4,6], 100) ➞ [6,4,0,6,2,7,5]
//Notes
//If the array you're given can't be broken up into equal parts, just reverse the remaining numbers (see 2nd expample).
//If len exceeds the array length, reverse everything.
//If len is zero, return the original array.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(selReverse([1, 2, 3, 4, 5, 6], 2), [2, 1, 4, 3, 6, 5]);
//Test.assertSimilar(selReverse([2, 4, 6, 8, 10, 12, 14, 16], 3), [6, 4, 2, 12, 10, 8, 16, 14]);
//Test.assertSimilar(selReverse([5, 7, 2, 6, 0, 4, 6], 100), [6, 4, 0, 6, 2, 7, 5]);
//Test.assertSimilar(selReverse([6, 0, 0, 0, 3, 8, 9, 7, 1], 9), [1, 7, 9, 8, 3, 0, 0, 0, 6]);
//Test.assertSimilar(selReverse([12, 54, 67, 34, 65, 34, 33], 0), [12, 54, 67, 34, 65, 34, 33]);
//Test.assertSimilar(selReverse([12, 54, 67, 34, 65, 34, 33], 1), [12, 54, 67, 34, 65, 34, 33]);
//Test.assertSimilar(selReverse([22, 13, 22, 13, 13, 22, 22, 13], 5), [13, 13, 22, 13, 22, 13, 22, 22]);
//Test.assertSimilar(selReverse([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2), [2, 1, 4, 3, 6, 5, 8, 7, 10, 9]);
//Test.assertSimilar(selReverse([1], 2), [1]);
//Test.assertSimilar(selReverse([1, 2], 2), [2, 1]);

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: 25% Discount on the Most Expensive Item

//tags: arrays,math,objects

//url: https://edabit.com/challenge/7DiEaqrnap9DDXnSo

//Description:
//You want to introduce a discount for your online store. Every customer gets a 25% discount on the most expensive item in the shopping cart. The discount will be calculated on just one item, even if the customer buys more than one of the most expensive item.
//Create a function that takes an object and returns the total price after discount.
//Examples
//twentyFiveOnOne([
//  { name: "Iphone 20x", quantity: 1, price: 1350 },
//  { name: "Samsung x30", quantity: 1, price: 1225 },
//  { name: "Nokia 9250", quantity: 1, price: 800 },
//  { name: "Tesla Model Y", quantity: 1, price: 72999 }
//]) ➞ 58124.25
//
//twentyFiveOnOne([
//  { name: "jogging pants", quantity: 1, price: 29.99 },
//  { name: "tennis socks", quantity: 2, price: 5.99 },
//  { name: "sweat shirt", quantity: 1, price: 59.99 }
//]) ➞ 86.96
//Notes
//The total returned price is calculated upon two decimals.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(twentyFiveOnOne([
//  { name: 'jogging pants', quantity: 1, price: 29.99 },
//  { name: 'tennis socks', quantity: 2, price: 5.99 },
//  { name: 'sweat shirt', quantity: 1, price: 59.99 }
//]), 86.96)
//Test.assertEquals(twentyFiveOnOne([
//  { name: 'chocolate bar', quantity: 3, price: 1.63 },
//  { name: 'chewing gum', quantity: 6, price: 0.25 },
//  { name: 'lolly pop', quantity: 1, price: 0.15 }
//]), 6.13)
//Test.assertEquals(twentyFiveOnOne([
//  { name: 'chair', quantity: 4, price: 125 },
//  { name: 'table', quantity: 1, price: 450 },
//  { name: 'couch', quantity: 1, price: 899.95 }
//]), 1624.96)
//Test.assertEquals(twentyFiveOnOne([
//  { name: 'bag of potatoes', quantity: 4, price: 3.49 },
//  { name: 'can of beans', quantity: 1, price: 1.25 },
//  { name: 'cauliflower', quantity: 1, price: 2.64 }
//]), 16.98)
//Test.assertEquals(twentyFiveOnOne([
//  { name: 'Iphone 20x', quantity: 1, price: 1350 },
//  { name: 'Samsung x30', quantity: 1, price: 1225 },
//  { name: 'Nokia 9250', quantity: 1, price: 800 },
//  { name: 'Tesla Model Y', quantity: 1, price: 72999 }

