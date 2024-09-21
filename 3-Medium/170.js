

//title: Count the Number of Duplicate Characters

//tags: interview,strings,validation

//url: https://edabit.com/challenge/p7vkhrwcWK7iPSqix

//Description:
//Create a function that takes a string and returns the number of alphanumeric characters that occur more than once.
//Examples
//duplicateCount("abcde") ➞ 0
//
//duplicateCount("aabbcde") ➞ 2
//
//duplicateCount("Indivisibilities") ➞ 2
//
//duplicateCount("Aa") ➞ 0
//// Case sensitive
//Notes
//Duplicate characters are case sensitive.
//The input string will contain only alphanumeric characters.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(duplicateCount("abcde"), 0)
//Test.assertEquals(duplicateCount("Aa"), 0, "Duplicate characters are case sensitive.")
//Test.assertEquals(duplicateCount("aabbcde"), 2)
//Test.assertEquals(duplicateCount("aabbcdeB"), 2)
//Test.assertEquals(duplicateCount("indivisibility"), 1)
//Test.assertEquals(duplicateCount("Indivisibilities"), 2)
//Test.assertEquals(duplicateCount("aa1112"), 2)
//Test.assertEquals(duplicateCount("bb2c"), 1)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Calculated Bonus

//tags: conditions,math

//url: https://edabit.com/challenge/cYcKEFos6DjYQpGS7

//Description:
//A financial institution provides professional services to banks and claims charges from the customers based on the number of man-days provided. Internally, it has set a scheme to motivate and reward staff to meet and exceed targeted billable utilization and revenues by paying a bonus for each day claimed from customers in excess of a threshold target.
//This quarterly scheme is calculated with a threshold target of 32 days per quarter, and the incentive payment for each billable day in excess of such threshold target is shown as follows:
//Days	Bonus
//0 to 32 days	Zero
//33 to 40 days	$325 per billable day
//41 to 48 days	$550 per billable day
//Greater than 48 days	$600 per billable day
//Please note that incentive payment is calculated progressively. As an example, if an employee reached total billable days of 45 in a quarter, his/her incentive payment is computed as follows:
//32*0 + 8*325 + 5*550 = 5350
//Write a function to read the billable days of an employee and return the bonus he/she has obtained in that quarter.
//Examples
//calculateBonus(15) ➞ 0
//
//calculateBonus(37) ➞ 1625
//
//calculateBonus(50) ➞ 8200
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(calculateBonus(9), 0)
//Test.assertEquals(calculateBonus(15), 0)
//Test.assertEquals(calculateBonus(26), 0)
//Test.assertEquals(calculateBonus(32), 0)
//Test.assertEquals(calculateBonus(33), 325)
//Test.assertEquals(calculateBonus(37), 1625)
//Test.assertEquals(calculateBonus(39), 2275)
//Test.assertEquals(calculateBonus(40), 2600)
//Test.assertEquals(calculateBonus(41), 3150)
//Test.assertEquals(calculateBonus(43), 4250)
//Test.assertEquals(calculateBonus(50), 8200)
//Test.assertEquals(calculateBonus(51), 8800)
//Test.assertEquals(calculateBonus(65), 17200)
//Test.assertEquals(calculateBonus(68), 19000)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Which Number Is Not like the Others?

//tags: algorithms,arrays,numbers

//url: https://edabit.com/challenge/GYXsAp7AabbzuRPbt

//Description:
//Create a function that takes an array of numbers and returns the number that's unique.
//Examples
//unique([3, 3, 3, 7, 3, 3]) ➞ 7
//
//unique([0, 0, 0.77, 0, 0]) ➞ 0.77
//
//unique([0, 1, 1, 1, 1, 1, 1, 1]) ➞ 0
//Notes
//Test cases will always have exactly one unique number while all others are the same.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(unique([3, 3, 3, 7, 3, 3]), 7);
//Test.assertEquals(unique([0, 0, 0.77, 0, 0]), 0.77);
//Test.assertEquals(unique([0, 1, 1, 1, 1, 1, 1, 1]), 0);
//Test.assertEquals(unique([-4, -4, -4, 4]), 4);
//Test.assertEquals(unique([8, 8, 8, 8, 8, 8, 8, 0.5]), 0.5);
//Test.assertEquals(unique([2, 1, 2, 2, 2, 2, 2, 2]), 1);

