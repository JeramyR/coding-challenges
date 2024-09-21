

//title: Video Streaming Plans

//tags: classes,language_fundamentals,objects

//url: https://edabit.com/challenge/SrCTGbhwPRyHZSAGu

//Description:
//Given a class for a BasicPlan, write the classes for StandardPlan and PremiumPlan which have class properties of the following:
//BasicPlan	StandardPlan	PremiumPlan
//✓	✓	✓	canStream
//✓	✓	✓	canDownload
//✓	✓	✓	hasSD
//	✓	✓	hasHD
//		✓	hasUHD
//1	2	4	numOfDevices
//$8.99	$12.99	$15.99	price
//Examples
//BasicPlan.hasSD ➞ true 
//
//PremiumPlan.hasSD ➞ true
//
//BasicPlan.hasUHD ➞ false
//
//BasicPlan.price ➞ '$8.99'
//
//PremiumPlan.numOfDevices ➞ 4
//Notes
//Try to extend the classes to complete the challenge! If you're unsure what that means, try checking out the JavaScript class tutorials in the Resources tab.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(BasicPlan.canStream, true)
//Test.assertEquals(BasicPlan.canDownload, true)
//Test.assertEquals(BasicPlan.numOfDevices, 1)
//Test.assertEquals(BasicPlan.hasSD, true)
//Test.assertEquals(BasicPlan.hasHD, false)
//Test.assertEquals(BasicPlan.hasUHD, false)
//Test.assertEquals(BasicPlan.price, '$8.99')
//Test.assertEquals(StandardPlan.canStream, true, 'Remember to add the StandardPlan class!')
//Test.assertEquals(StandardPlan.canDownload, true)
//Test.assertEquals(StandardPlan.numOfDevices, 2)
//Test.assertEquals(StandardPlan.hasSD, true)
//Test.assertEquals(StandardPlan.hasHD, true)
//Test.assertEquals(StandardPlan.hasUHD, false)
//Test.assertEquals(StandardPlan.price, '$12.99')
//Test.assertEquals(PremiumPlan.canStream, true, 'Remember to add the PremiumPlan class!')
//Test.assertEquals(PremiumPlan.canDownload, true)
//Test.assertEquals(PremiumPlan.numOfDevices, 4)
//Test.assertEquals(PremiumPlan.hasSD, true)
//Test.assertEquals(PremiumPlan.hasHD, true)
//Test.assertEquals(PremiumPlan.hasUHD, true)
//Test.assertEquals(PremiumPlan.price, '$15.99')
//​
//// made by @Joshua Señoron

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Typing Game

//tags: arrays,games,loops

//url: https://edabit.com/challenge/KESyfS3A5vB2jkxFR

//Description:
//You're in the midst of creating a typing game.
//Create a function that takes in two arrays: the array of user-typed words, and the array of correctly-typed words and outputs an array containing 1s (correctly-typed words) and -1s (incorrectly-typed words).
//Inputs:
//User-typed Array: ["cat", "blue", "skt", "umbrells", "paddy"]
//Correct Array: ["cat", "blue", "sky", "umbrella", "paddy"]
//
//Output: [1, 1, -1, -1, 1]
//Examples
//correctStream(
//  ["it", "is", "find"],
//  ["it", "is", "fine"]
//) ➞ [1, 1, -1]
//
//correctStream(
//  ["april", "showrs", "bring", "may", "flowers"],
//  ["april", "showers", "bring", "may", "flowers"]
//) ➞ [1, -1, 1, 1, 1]
//Notes
//The input array lengths will always be the same.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(correctStream(["it", "is", "find"], ["it", "is", "fine"]), [1, 1, -1])
//Test.assertSimilar(correctStream(["april", "showrs", "bring", "may", "flowers"], ["april", "showers", "bring", "may", "flowers"]), [1, -1, 1, 1, 1])
//Test.assertSimilar(correctStream(["weird", "indicr", "moment"], ["weird", "indict", "moment"]), [1, -1, 1])
//Test.assertSimilar(correctStream(["starry", "wind", "skies"], ["starry", "wind", "skies"]), [1, 1, 1])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Calculate the Profit

//tags: data_structures,language_fundamentals,math,objects

//url: https://edabit.com/challenge/GJn7xcBiCLdCNXFgy

//Description:
//You work for a manufacturer, and have been asked to calculate the total profit made on the sales of a product. You are given an object containing the cost price per unit (in dollars), sell price per unit (in dollars), and the starting inventory. Return the total profit made, rounded to the nearest dollar.
//Examples
//profit({
//  costPrice: 32.67,
//  sellPrice: 45.00,
//  inventory: 1200
//}) ➞ 14796
//
//profit({
//  costPrice: 225.89,
//  sellPrice: 550.00,
//  inventory: 100
//}) ➞ 32411
//
//profit({
//  costPrice: 2.77,
//  sellPrice: 7.95,
//  inventory: 8500
//}) ➞ 44030
//Notes
//Assume all inventory has been sold.
//Profit = Total Sales - Total Cost

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(profit({costPrice: 32.67, sellPrice: 45.00, inventory: 1200}), 14796)
//Test.assertEquals(profit({costPrice: 0.1, sellPrice: 0.18, inventory: 259800}), 20784)
//Test.assertEquals(profit({costPrice: 185.00, sellPrice: 299.99, inventory: 300}), 34497)
//Test.assertEquals(profit({costPrice: 378.11, sellPrice: 990.00, inventory: 99}), 60577)
//Test.assertEquals(profit({costPrice: 4.67, sellPrice: 5.00, inventory: 78000}), 25740)
//Test.assertEquals(profit({costPrice: 19.87, sellPrice: 110.00, inventory: 350}), 31546)
//Test.assertEquals(profit({costPrice: 2.91, sellPrice: 4.50, inventory: 6000}), 9540)
//Test.assertEquals(profit({costPrice: 68.01, sellPrice: 149.99, inventory: 500}), 40990)
//Test.assertEquals(profit({costPrice: 1.45, sellPrice: 8.50, inventory: 10000}), 70500)
//Test.assertEquals(profit({costPrice: 10780, sellPrice: 34999, inventory: 10}), 242190)

