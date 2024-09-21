

//title: CMS Selector Based on a Given String

//tags: arrays,formatting,strings

//url: https://edabit.com/challenge/9wL6dXj2tKNCe5pFz

//Description:
//Write a function that takes an array of strings and a pattern (string) and returns the strings that contain the pattern in alphabetical order. If the pattern is an empty string, return all the strings passed in the input array.
//Examples
//cmsSelector(["WordPress", "Joomla", "Drupal"], "w") ➞ ["WordPress"]
//
//cmsSelector(["WordPress", "Joomla", "Drupal", "Magento"], "ru") ➞ ["Drupal"]
//
//cmsSelector(["WordPress", "Joomla", "Drupal", "Magento"], "") ➞ ["Drupal", "Joomla", "Magento", "WordPress"]
//Notes
//The given letter(s) are case sensitive and can be more than one.
//In the case of an empty string, return the entire array.
//A CMS is a Content Management System.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(cmsSelector(["WordPress", "Joomla", "Drupal", "Magento", "Shopify", "Blogger"], "er"), ["Blogger"])
//Test.assertSimilar(cmsSelector(["WordPress", "Joomla", "Drupal", "Magento", "Shopify", "Blogger"], ""), ["Blogger", "Drupal", "Joomla", "Magento", "Shopify", "WordPress"])
//Test.assertSimilar(cmsSelector(["WordPress", "Joomla", "Drupal", "Magento", "Shopify", "Blogger"], "oJ"), [])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Find the Bug: Returning Valid Units of Measure

//tags: bugs,conditions,control_flow,logic,objects

//url: https://edabit.com/challenge/oGYGaavTNoYDjykJY

//Description:
//There has been a masterdata issue which affected the unit of measure of the products. All values need to be checked if they are valid. The unit of measure is valid when it is either "L" (liters), "PCE" (pieces) OR when the product has a comment.
//The return value should be a Boolean.
//Expected results
//hasValidUnitOfMeasure({ "product": "Milk", unitOfMeasure: "L" }) ➞ true
//
//hasValidUnitOfMeasure({ "product": "Cereals", unitOfMeasure: "" }) ➞ false
//
//hasValidUnitOfMeasure({ "product": "Beer", unitOfMeasure: false }) ➞ false
//
//hasValidUnitOfMeasure({ "product": "Beef", unitOfMeasure: "Cow" }) ➞ false
//Notes
//Run the tests first to see the results before making changes and understand why eggs is not returning a boolean.
//Why is eggs not returning a boolean?
//When merging conditions through ||, the returned value is the result of the last truthy condition.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(hasValidUnitOfMeasure({ "product": "Milk", unitOfMeasure: "L" }), true)
//Test.assertEquals(hasValidUnitOfMeasure({ "product": "Cheese", unitOfMeasure: "PCE" }), true)
//Test.assertEquals(hasValidUnitOfMeasure({ "product": "Eggs", comment: "Eggs are too different in size" }), true)
//// Test.assertEquals(hasValidUnitOfMeasure({ "product": "Cerials", unitOfMeasure: "" }), false)
//Test.assertEquals(hasValidUnitOfMeasure({ "product": "Flour" }), false)
//Test.assertEquals(hasValidUnitOfMeasure({ "product": "Beer", unitOfMeasure: false }), false)
//Test.assertEquals(hasValidUnitOfMeasure({ "product": "Beef", unitOfMeasure: "Cow" }), false)
//Test.assertEquals(hasValidUnitOfMeasure(), false)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Get Word Count

//tags: math,numbers,strings

//url: https://edabit.com/challenge/FydPqxRiosP7EBiQh

//Description:
//Create a function that takes a string and returns the word count. The string will be a sentence.
//Examples
//countWords("Just an example here move along") ➞ 6
//
//countWords("This is a test") ➞ 4
//
//countWords("What an easy task, right") ➞ 5
//Notes
//If you get stuck on a challenge, find help in the Resources tab.
//If you're really stuck, unlock solutions in the Solutions tab.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(countWords("It's high noon"), 3)
//Test.assertEquals(countWords("Is this easy mode"), 4)
//Test.assertEquals(countWords("What an easy task, right"), 5)
//Test.assertEquals(countWords("This is a test"), 4)
//Test.assertEquals(countWords("Just an example here move along"), 6)
//Test.assertEquals(countWords("How are you today?"), 4)

