

//title: Climbing Competition

//tags: algorithms,arrays,conditions,logic

//url: https://edabit.com/challenge/RRnQGsi222hiDjdkz

//Description:
//You are in some climbing competition. You start with some stamina which is a positive integer number. And you have obstacles in an array. Each number in array represents obstacle height.
//While climbing up you lose 2 stamina for up to 1 meter climbed. So if you climb 0.3m up you lose 2 stamina, if you climb 1m you lose 2 stamina, if you climb 1.8m you lose 4 stamina(2 for 1m and 2 for 0.8m) and so on.
//While climbing down you lose 1 stamina for up to 1 meter climbed. So if you climb 0.5m you lose 1 stamina, if you climb 1.2m you lose 2 stamina (1 for 1m and 1 for 0.2m) etc.
//You start by standing on first obstacle in array.
//Given a stamina number and an array of obstacles write a function that returns how many obstacles you can pass.
//Examples
//climb(5, [5, 4.2, 3, 3.5, 6, 4, 6, 8, 1]) ➞ 3
//Starting with 5 stamina.
//Climing down from 5m to 4.2m ➞ 0.8m so we lose 1 stamina (so stamina =4) and we pass 1 obstacle.
//From 4.2m to 3m we climb down 1.2m so we lose 2 stamina (so stamina = 2) and we pass 2 obstacles in total.
//From 3m to 3.5m we climb up 0.5m so we lose 2 stamina (stamina=0 - exhaustion!) and we pass 3 obstacles in total.
//We can't go further becouse we don't have stamina to do so.
//climb(10, [5, 4.2, 3, 3.5, 6, 4, 6, 8, 1]) ➞ 3
//Same example as above but more stamina so when we are standing on 3.5m obstacle we have 5 stamina left.
//To climb up from 3.5m to 6m we would need 6 stamina (0.5m +1m +1m ➞2+2+2) but we have only 5 so we can't got further.
//Notes
//In all test cases: Stamina - integer greater than 0, all numbers in arrays are positive floats or integers.
//Result should be an integer.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(climb(5,[5, 4.2, 3, 3.5, 6, 4, 6, 8, 1]), 3)
//Test.assertEquals(climb(10,[5, 4.2, 3, 3.5, 6, 4, 6, 8, 1]), 3)
//Test.assertEquals(climb(20,[5, 4.2, 3, 3.5, 6, 4, 6, 8, 1]), 6)
//Test.assertEquals(climb(100,[5, 4.2, 3, 3.5, 6, 4, 6, 8, 1]), 8)
//Test.assertEquals(climb(5,[0, 1, 2.5, 0.8]), 1)
//Test.assertEquals(climb(10,[0, 1, 2.5, 0.8]), 3)
//Test.assertEquals(climb(10,[0.3, 2, 2.8, 3, 3, 0.8, 3.2,2,0]), 4)
//Test.assertEquals(climb(11,[0.3, 2, 2.8, 3, 3, 0.8, 3.2,2,0]), 5)
//Test.assertEquals(climb(12,[0.3, 2, 2.8, 3, 3, 0.8, 3.2,2,0]), 5)
//Test.assertEquals(climb(13,[0.3, 2, 2.8, 3, 3, 0.8, 3.2,2,0]), 5)
//Test.assertEquals(climb(14,[0.3, 2, 2.8, 3, 3, 0.8, 3.2,2,0]), 5)
//Test.assertEquals(climb(15,[0.3, 2, 2.8, 3, 3, 0.8, 3.2,2,0]), 5)
//Test.assertEquals(climb(16,[0.3, 2, 2.8, 3, 3, 0.8, 3.2,2,0]), 5)
//Test.assertEquals(climb(17,[0.3, 2, 2.8, 3, 3, 0.8, 3.2,2,0]), 6)
//Test.assertEquals(climb(18,[0.3, 2, 2.8, 3, 3, 0.8, 3.2,2,0]), 6)
//Test.assertEquals(climb(19,[0.3, 2, 2.8, 3, 3, 0.8, 3.2,2,0]), 7)
//Test.assertEquals(climb(20,[0.3, 2, 2.8, 3, 3, 0.8, 3.2,2,0]), 7)
//Test.assertEquals(climb(30,[0.3, 2, 2.8, 3, 3, 0.8, 3.2,2,0]), 8)
//Test.assertEquals(climb(15,[0.3, 2, 2.8, 3, 3, 0.8, 3.2,2,0]), 5)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Image Manipulation: 255 Shades of Grey (Part 2)

//tags: algorithms,arrays,logic,loops

//url: https://edabit.com/challenge/BDbY3zSN8mcBN2Xrn

//Description:
//Images can be described as 3D arrays.
//// This image has only one white pixel:
//
//[
//  [[255, 255, 255]]
//]
//// This one is a 2 by 2 black image:
//
//[
//  [[0, 0, 0], [0, 0, 0]],
//  [[0, 0, 0], [0, 0, 0]]
//]
//Your task is to create a function that takes a 3D array representation of an image and returns the grayscale version of that.
//Examples
//grayscale([
//  [[0, 0, 0], [0, 0, 157]],
//  [[1, 100, 0], [0, 10, 0]]
//]) ➞ [
//  [[0, 0, 0], [52, 52, 52]],
//  [[34, 34, 34], [3, 3, 3]]
//]
//Notes
//A valid RGB value ranges from 0 to 255 (inclusive).
//If the given array contains out of bound values, convert them to the nearest valid one.
//Previous challenge in this series: Image Manipulation: Invert (Part 1)
//Grayscaling an image is adjusting to have the same amount of (Red, Green, Blue) from their combined average to produce different shades of gray.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(grayscale([
//  [[0,0,0], [0,0,157]],
//  [[1,100,0], [0,10,0]]
//]), [
//  [[0,0,0], [52,52,52]],
//  [[34,34,34], [3,3,3]]
//])
//​
//Test.assertSimilar(grayscale([
//  [[0,0,0], [0,0,157], [100,229,4]],
//  [[1,100,0], [0,10,0], [0,168,0]],
//  [[0,125,0], [15,0,9], [0,139,0]],
//  [[0,125,0], [0,0,9], [0,200,0]]
//]), [
//  [[0,0,0], [52,52,52], [111,111,111]],
//  [[34,34,34], [3,3,3], [56,56,56]],
//  [[42,42,42], [8,8,8], [46,46,46]],
//  [[42,42,42], [3,3,3], [67,67,67]]
//])
//​
//Test.assertSimilar(grayscale([
//  [[0,0,255], [0,0,0], [0,0,157], [100,229,4]],
//  [[100,0,3], [1,100,0], [0,10,0], [0,168,0]],
//  [[16,30,0], [0,125,0], [15,0,9], [0,139,0]],
//  [[200,2,0], [0,125,0], [0,0,9], [0,200,0]]

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Secret Agent Password

//tags: algorithms,cryptography,strings

//url: https://edabit.com/challenge/WboAruyx4HQ3Q553q

//Description:
//Mubashir is going on a secret mission. He needs your help but you have to learn how to encode a secret password to communicate safely with other agents. Create a function that takes an argument message and returns the encoded password.
//There are some variations on the rules of encipherment. One version of the cipher rules are outlined below:
//secretPassword("mubashirh") ➞ "hsajsi13u2"
//Step 1: Message length should be of nine characters containing only lowercase letters from 'a' to 'z'. If the argument doesn't meet this requirement you must return "BANG! BANG! BANG!" (Remember, there are no second chances in the spy world!)
//Step 2: Divide the string into three equal parts of three characters each:
//1 - mub
//2 - ash
//3 - irh
//Step 3: Convert the first and third letter to the corresponding number, according to the English alphabets (ex. a = 1, b = 2, c = 3 ... z = 26, etc).
//mub = 13u2
//Step 4: Reverse the fourth, fifth, and sixth letters:
//ash = hsa
//Step 5: Replace seventh, eighth, and ninth letter with next letter (z will be substituted with a).
//irh = jsi
//Step 6: Return the string in the following order: "Part_2+Part_3+Part_1"
//"hsajsi13u2"
//See the below examples for a better understanding:
//Examples
//secretPassword("mubashirh") ➞ "hsajsi13u2"
//
//secretPassword("mattedabi") ➞ "detbcj13a20"
//
//secretPassword("HeLen-eda") ➞ "BANG! BANG! BANG!"
//// Length is not equal to 9
//// Contains characters other than lower alphabets
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(secretPassword("mubashirh"), "hsajsi13u2")
//Test.assertEquals(secretPassword("mattedabi"), "detbcj13a20")
//Test.assertEquals(secretPassword("HeLen-eda"), "BANG! BANG! BANG!")
//Test.assertEquals(secretPassword("pakistani"), "tsiboj16a11")
//Test.assertEquals(secretPassword("airforce1"), "BANG! BANG! BANG!")
//Test.assertEquals(secretPassword("airforces"), "rofdft1i18")
//Test.assertEquals(secretPassword("Airforcee"), "BANG! BANG! BANG!")
//Test.assertEquals(secretPassword("pilotmuba"), "mtovcb16i12")
//Test.assertEquals(secretPassword("a_rforcee"), "BANG! BANG! BANG!")
//Test.assertEquals(secretPassword("iloveherh"), "hevfsi9l15")
//Test.assertEquals(secretPassword("airforcess"), "BANG! BANG! BANG!")
//Test.assertEquals(secretPassword("edabit"), "BANG! BANG! BANG!")
//// Mubashir

