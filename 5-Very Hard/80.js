

//title: Fruit Smoothie

//tags: classes,data_structures,formatting,objects

//url: https://edabit.com/challenge/7ytmgtAXGAccwpvJN

//Description:
//Create a class Smoothie and do the following:
//Create a constructor property called ingredients.
//Create a getCost method which calculates the total cost of the ingredients used to make the smoothie.
//Create a getPrice method which returns the number from getCost plus the number from getCost multiplied by 1.5. Round to two decimal places.
//Create a getName method which gets the ingredients and puts them in alphabetical order into a nice descriptive sentence. If there are multiple ingredients, add the word "Fusion" to the end but otherwise, add "Smoothie". Remember to change "-berries" to "-berry". See the examples below.
//Ingredient	Price
//Strawberries	$1.50
//Banana	$0.50
//Mango	$2.50
//Blueberries	$1.00
//Raspberries	$1.00
//Apple	$1.75
//Pineapple	$3.50
//Examples
//s1 = new Smoothie(["Banana"])
//
//s1.ingredients ➞ ["Banana"]
//
//s1.getCost() ➞ "$0.50"
//
//s1.getPrice() ➞ "$1.25"
//
//s1.getName() ➞ "Banana Smoothie"
//s2 = Smoothie(["Raspberries", "Strawberries", "Blueberries"])
//
//s2.ingredients ➞ ["Raspberries", "Strawberries", "Blueberries"]
//
//s2.getCost() ➞ "$3.50"
//
//s2.getPrice() ➞ "$8.75"
//
//s2.getName() ➞ "Blueberry Raspberry Strawberry Fusion"
//Notes
//Feel free to check out the Resources tab for a refresher on classes.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//let s1 = new Smoothie(["Banana"]),
//    s2 = new Smoothie(["Raspberries", "Strawberries", "Blueberries"]),
//    s3 = new Smoothie(["Mango", "Apple", "Pineapple"]),
//    s4 = new Smoothie(["Pineapple", "Strawberries", "Blueberries", "Mango"]),
//    s5 = new Smoothie(["Blueberries"])
//​
//Test.assertSimilar(s1.ingredients, ["Banana"])
//Test.assertEquals(s1.getCost(), "$0.50")
//Test.assertEquals(s1.getPrice(), "$1.25")
//Test.assertEquals(s1.getName(), "Banana Smoothie")
//Test.assertSimilar(s2.ingredients, ["Raspberries", "Strawberries", "Blueberries"])
//Test.assertEquals(s2.getCost(), "$3.50")
//Test.assertEquals(s2.getPrice(), "$8.75")
//Test.assertEquals(s2.getName(), "Blueberry Raspberry Strawberry Fusion")
//Test.assertSimilar(s3.ingredients, ["Mango", "Apple", "Pineapple"])
//Test.assertEquals(s3.getCost(), "$7.75")
//Test.assertEquals(s3.getPrice(), "$19.38")
//Test.assertEquals(s3.getName(), "Apple Mango Pineapple Fusion")
//Test.assertSimilar(s4.ingredients, ["Pineapple", "Strawberries", "Blueberries", "Mango"])
//Test.assertEquals(s4.getCost(), "$8.50")
//Test.assertEquals(s4.getPrice(), "$21.25")
//Test.assertEquals(s4.getName(), "Blueberry Mango Pineapple Strawberry Fusion")
//Test.assertSimilar(s5.ingredients, ["Blueberries"])
//Test.assertEquals(s5.getCost(), "$1.00")
//Test.assertEquals(s5.getPrice(), "$2.50")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Bell Number

//tags: loops,math

//url: https://edabit.com/challenge/AS2DsdhRkALvAmNKc

//Description:
//The Bell number is the number of ways an array of n items can be partitioned into non-empty subarrays. See the resources section for an in-depth explanation.
//Create a function that takes a number n and returns the corresponding Bell number.
//Examples
//bell(1) ➞ 1
//// sampleArr = [1]
//// possiblePartitions = [[[1]]]
//
//bell(2) ➞ 2
//// sampleArr = [1, 2]
//// possiblePartitions = [[[1, 2]], [[1], [2]]]
//
//bell(3) ➞ 5
//// sampleArr = [1, 2, 3]
//// possiblePartitions = [[[1, 2, 3]], [[1, 2], [3]], [[1], [2, 3]], [[1, 3], [2]], [[1], [2], [3]]]
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(bell(1), 1)
//Test.assertEquals(bell(2), 2)
//Test.assertEquals(bell(3), 5)
//Test.assertEquals(bell(4), 15)
//Test.assertEquals(bell(5), 52)
//Test.assertEquals(bell(6), 203)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: The Out-Shuffle

//tags: logic,loops,validation

//url: https://edabit.com/challenge/oJs9RW9rjQosxT8Xu

//Description:
//An out-shuffle, also known as an out faro shuffle or a perfect shuffle, is a controlled method for shuffling playing cards. It is performed by splitting the deck into two equal halves and interleaving them together perfectly, with the condition that the top card of the deck remains in place.
//Using an array to represent a deck of cards, an out-shuffle looks like:
//[1, 2, 3, 4, 5, 6, 7, 8] ➞ [1, 5, 2, 6, 3, 7, 4, 8]
//// Card 1 remains in the first position.
//If we repeat the process, the deck eventually returns to original order.
//Shuffle 1:
//[1, 2, 3, 4, 5, 6, 7, 8] ➞ [1, 5, 2, 6, 3, 7, 4, 8]
//Shuffle 2:
//[1, 5, 2, 6, 3, 7, 4, 8] ➞ [1, 3, 5, 7, 2, 4, 6, 8]
//Shuffle 3:
//[1, 3, 5, 7, 2, 4, 6, 8] ➞ [1, 2, 3, 4, 5, 6, 7, 8]
//// Back where we started.
//Write a function that takes a positive even integer representing the number of the cards in a deck, and returns the number of out-shuffles required to return the deck to its original order.
//Examples
//shuffleCount(8) ➞ 3
//
//shuffleCount(14) ➞ 12
//
//shuffleCount(52) ➞ 8
//Notes
//The number of cards is always even and greater than one. Thus, the smallest possible deck size is two.
//A recursive version of this challenge can be found here.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//let [numVector, resVector] = [
//  [2, 8, 14, 26, 52, 70, 104, 208],
//  [1, 3, 12, 20, 8, 22, 51, 66]
//]
//for (let i in numVector) Test.assertEquals(shuffleCount(numVector[i]), resVector[i])

