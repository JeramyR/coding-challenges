

//title: Count the Points in a Circle

//tags: arrays,math

//url: https://edabit.com/challenge/jdYxyKyppvogyhBJ6

//Description:
//Count the total number of coordinates on a two-dimensional grid that are inside a given circle. The function has four parameters: the points (provided as a list of objects), the circle's center x coordinate, the circle's center y coordinate, and the circle's radius. For example:
//Examples
//pointsInCircle([
//  { x: 0, y: 0 },
//  { x: 1, y: 1 },
//  { x: 0, y: 5 },
//  { x: 10, y: 10 }
//], 0, 0, 5) ➞ 2
//Notes
//Only count the coordinates that are in the circle, not the ones that are on the border.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(pointsInCircle([{x: 0, y: 0}, {x: 1, y: 1}, {x: 0, y: 5}, {x: 10, y: 10}], 0, 0, 5), 2)
//Test.assertEquals(pointsInCircle([{x: 9, y: 6}, {x: 9, y: 3}, {x: 4, y: 8}, {x: 3, y: 10}, {x: 1, y: 6}], 0, 0, 7.5), 1)
//Test.assertEquals(pointsInCircle([{x: 8, y: 8}, {x: 8, y: 6}, {x: 4, y: 7}], 0, 0, 1), 0)
//Test.assertEquals(pointsInCircle([{x: 0, y: 0}, {x: 1, y: 1}, {x: 0, y: 5}, {x: 10, y: 10}], 50, 50, 40), 0)
//Test.assertEquals(pointsInCircle([{x: 10, y: 10}, {x: 33, y: 54}, {x: 7, y: 98}, {x: 516, y: 85}], 23, 94, 100), 3)
//Test.assertEquals(pointsInCircle([{x: 6, y: 3}, {x: 1, y: 4}, {x: 1, y: 9}, {x: 4, y: 9}, {x: 9, y: 3}, {x: 10, y: 8}, {x: 2, y: 2}, {x: 4, y: 3}, {x: 4, y: 4}, {x: 1, y: 2}, {x: 8, y: 9}, {x: 6, y: 10}, {x: 10, y: 6}, {x: 8, y: 8}, {x: 2, y: 1}, {x: 7, y: 4}, {x: 6, y: 1}, {x: 8, y: 1}, {x: 8, y: 5}, {x: 2, y: 1}, {x: 10, y: 5}, {x: 6, y: 5}, {x: 8, y: 3}, {x: 7, y: 8}, {x: 1, y: 6}, {x: 8, y: 7}, {x: 4, y: 10}, {x: 6, y: 5}, {x: 4, y: 5}, {x: 1, y: 10}, {x: 4, y: 4}, {x: 6, y: 8}, {x: 2, y: 8}, {x: 2, y: 8}, {x: 1, y: 10}, {x: 3, y: 2}, {x: 5, y: 7}, {x: 10, y: 2}, {x: 9, y: 8}, {x: 4, y: 3}, {x: 9, y: 5}, {x: 6, y: 3}, {x: 1, y: 3}, {x: 5, y: 10}, {x: 2, y: 7}, {x: 10, y: 6}, {x: 8, y: 4}, {x: 9, y: 9}, {x: 1, y: 8}, {x: 1, y: 3}, {x: 2, y: 2}, {x: 10, y: 1}, {x: 5, y: 6}, {x: 10, y: 5}, {x: 8, y: 5}, {x: 9, y: 10}, {x: 1, y: 4}, {x: 5, y: 6}, {x: 6, y: 5}, {x: 2, y: 2}, {x: 10, y: 10}, {x: 6, y: 7}, {x: 2, y: 1}, {x: 4, y: 4}, {x: 8, y: 4}, {x: 6, y: 10}, {x: 6, y: 7}, {x: 3, y: 5}, {x: 9, y: 1}, {x: 1, y: 7}, {x: 2, y: 9}, {x: 7, y: 4}, {x: 9, y: 5}, {x: 7, y: 6}, {x: 9, y: 6}, {x: 3, y: 1}, {x: 2, y: 9}, {x: 7, y: 1}, {x: 3, y: 7}, {x: 6, y: 5}, {x: 8, y: 8}, {x: 7, y: 5}, {x: 6, y: 4}, {x: 6, y: 5}, {x: 7, y: 2}, {x: 7, y: 10}, {x: 7, y: 1}, {x: 3, y: 1}, {x: 9, y: 10}, {x: 6, y: 7}, {x: 5, y: 9}, {x: 2, y: 6}, {x: 10, y: 1}, {x: 9, y: 1}, {x: 7, y: 3}, {x: 3, y: 1}, {x: 7, y: 9}, {x: 2, y: 5}, {x: 1, y: 9}, {x: 8, y: 8}], 0, 0, 7.5), 34)
//Test.assertEquals(pointsInCircle([{x: 16, y: 98}, {x: 48, y: 5}, {x: 66, y: 18}, {x: 87, y: 8}, {x: 37, y: 94}, {x: 69, y: 49}, {x: 85, y: 37}, {x: 61, y: 63}, {x: 19, y: 4}, {x: 81, y: 3}, {x: 90, y: 30}, {x: 35, y: 65}, {x: 30, y: 92}, {x: 72, y: 38}, {x: 67, y: 4}, {x: 41, y: 70}, {x: 93, y: 92}, {x: 43, y: 17}, {x: 22, y: 12}, {x: 5, y: 58}, {x: 27, y: 73}, {x: 42, y: 70}, {x: 40, y: 61}, {x: 75, y: 99}, {x: 41, y: 79}, {x: 98, y: 99}, {x: 20, y: 64}, {x: 2, y: 74}, {x: 69, y: 44}, {x: 39, y: 58}, {x: 6, y: 11}, {x: 51, y: 34}, {x: 32, y: 19}, {x: 50, y: 12}, {x: 16, y: 91}, {x: 1, y: 99}, {x: 13, y: 60}, {x: 16, y: 64}, {x: 34, y: 25}, {x: 41, y: 68}, {x: 61, y: 57}, {x: 61, y: 17}, {x: 47, y: 17}, {x: 10, y: 63}, {x: 40, y: 76}, {x: 82, y: 93}, {x: 54, y: 14}, {x: 6, y: 28}, {x: 21, y: 69}, {x: 76, y: 79}, {x: 37, y: 5}, {x: 85, y: 73}, {x: 24, y: 72}, {x: 36, y: 75}, {x: 72, y: 4}, {x: 71, y: 80}, {x: 37, y: 13}, {x: 62, y: 83}, {x: 45, y: 43}, {x: 95, y: 67}, {x: 6, y: 12}, {x: 79, y: 27}, {x: 1, y: 12}, {x: 19, y: 51}, {x: 94, y: 27}, {x: 29, y: 34}, {x: 21, y: 43}, {x: 8, y: 81}, {x: 98, y: 65}, {x: 63, y: 82}, {x: 45, y: 38}, {x: 70, y: 19}, {x: 61, y: 30}, {x: 47, y: 86}, {x: 52, y: 41}, {x: 89, y: 16}, {x: 28, y: 75}, {x: 21, y: 98}, {x: 54, y: 68}, {x: 80, y: 46}, {x: 82, y: 71}, {x: 36, y: 91}, {x: 76, y: 20}, {x: 33, y: 81}, {x: 56, y: 57}, {x: 6, y: 47}, {x: 85, y: 62}, {x: 83, y: 67}, {x: 98, y: 66}, {x: 92, y: 54}, {x: 70, y: 88}, {x: 42, y: 38}, {x: 66, y: 100}, {x: 92, y: 22}, {x: 77, y: 36}, {x: 90, y: 57}, {x: 48, y: 39}, {x: 49, y: 97}, {x: 12, y: 66}, {x: 30, y: 85}], 0, 0, 50), 16)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Verbed Nouns

//tags: language_fundamentals,regex,strings

//url: https://edabit.com/challenge/R7g5N9rscC6jgec5G

//Description:
//Create a function that ends the first word of a phrase with "ed", essentially verbifying a noun.
//Examples
//verbify("cheese burger") ➞ "cheesed burger"
//
//verbify("salt water") ➞ "salted water"
//
//verbify("orange juice") ➞ "oranged juice"
//
//verbify("shredded cheese") ➞ "shredded cheese"
//Notes
//Change only the first word.
//Note that some words may already end in "e" or "ed".
//All phrases will be in lowercase.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(verbify("cheese burger"), "cheesed burger")
//Test.assertEquals(verbify("bean toast"), "beaned toast")
//Test.assertEquals(verbify("orange juice"), "oranged juice")
//Test.assertEquals(verbify("verb noun"), "verbed noun")
//Test.assertEquals(verbify("apple sauce"), "appled sauce")
//Test.assertEquals(verbify("girl friend"), "girled friend")
//Test.assertEquals(verbify("shredded cheese"), "shredded cheese")
//Test.assertEquals(verbify("cheese cake"), "cheesed cake")
//Test.assertEquals(verbify("lemon cheesecake"), "lemoned cheesecake")
//Test.assertEquals(verbify("air plane"), "aired plane")
//Test.assertEquals(verbify("pumpkin pie"), "pumpkined pie")
//Test.assertEquals(verbify("salt water"), "salted water")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Reversible Inclusive List Ranges

//tags: loops,math,numbers,scope

//url: https://edabit.com/challenge/2HZ8DqCaZxLHN6cP6

//Description:
//Write a function that, given the start and end values, returns an array containing all the numbers inclusive to that range. See examples below.
//Examples
//reversibleInclusiveList(1, 5) ➞ [1, 2, 3, 4, 5]
//
//reversibleInclusiveList(2, 8) ➞ [2, 3, 4, 5, 6, 7, 8]
//
//reversibleInclusiveList(10, 20) ➞[10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
//
//reversibleInclusiveList(24, 17) ➞[24, 23, 22, 21, 20, 19, 18, 17]
//Notes
//The sort order of the resulting array is dependent of the input values.
//All inputs provided in the test scenarios are valid.
//If start is greater than end, return a descendingly sorted array, otherwise, ascendingly sorted.
//A recursive version of this challenge can be found here.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//let [actualParam, expectedParam] = [
//  [[5, 1], [6, 2], [10, 20], [24, 17], [40, 50], [51, 41], [11, 66], [9, 3], [6, 16]],
//  [[5, 4, 3, 2, 1],
//  [6, 5, 4, 3, 2],
//  [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
//  [24, 23, 22, 21, 20, 19, 18, 17],
//  [40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
//  [51, 50, 49, 48, 47, 46, 45, 44, 43, 42, 41],
//  [11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
//   40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66],
//  [9, 8, 7, 6, 5, 4, 3],
//  [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]]
//]
//for (let i in actualParam) Test.assertSimilar(reversibleInclusiveList(...actualParam[i]), expectedParam[i])

