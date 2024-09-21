

//title: Merge Arrays in Order

//tags: arrays,sorting

//url: https://edabit.com/challenge/PvGApka4RyYsQ3cA8

//Description:
//Given two arrays, merge them to one array and sort the new array in the same order as the first array.
//Examples
//mergeSort([1, 2, 3], [5, 4, 6]) ➞ [1, 2, 3, 4, 5, 6]
//
//mergeSort([8, 6, 4, 2], [-2, -6, 0, -4]) ➞ [8, 6, 4, 2, 0, -2, -4, -6]
//
//mergeSort([120, 180, 200], [190, 175, 130]) ➞ [120, 130, 175, 180, 190, 200]
//Notes
//You'll always get two arrays as arguments.
//The first array is always sorted, either asc or desc.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(mergeSort([1, 2, 3], [5, 4, 6]), [1, 2, 3, 4, 5, 6])
//Test.assertSimilar(mergeSort([8, 6, 4, 2], [-2, -6,  0, -4 ]), [8, 6, 4, 2, 0, -2, -4, -6])
//Test.assertSimilar(mergeSort([120, 180, 200], [190, 175, 130]), [120, 130, 175, 180, 190, 200])
//Test.assertSimilar(mergeSort([25, 21, 17, 13], []), [25, 21, 17, 13])
//Test.assertSimilar(mergeSort([1024, 2048], [512, 128, 64]), [64, 128, 512, 1024, 2048])
//Test.assertSimilar(mergeSort([0, 1], [1, 1, 1, 1, 0, 0, 0, 0]), [0, 0, 0, 0, 0, 1, 1, 1, 1, 1])
//Test.assertSimilar(mergeSort([-1, -3], [11, -5, 7, -11]), [11, 7, -1, -3, -5, -11])
//Test.assertSimilar(mergeSort([10, 20, 30, 40, 50, 60, 80, 90], [70]), [10, 20, 30, 40, 50, 60, 70, 80, 90])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Noddy`s Mystery Function

//tags: strings,validation

//url: https://edabit.com/challenge/u7keqjWnKXcYz9DMN

//Description:
//Noddy has written a mysterious function which takes in a word and returns true if it's passed a specific test. Solve the riddle of what Noddy's function is by having a look at some of the examples below.
//Examples
//noddyFunction("FANTASTIC") ➞ true
//
//noddyFunction("wonderful") ➞ false
//
//noddyFunction("NODDY") ➞ false
//Notes
//Check the Tests tab for more examples.
//This isn't really a coding challenge, more of a fun riddle ;)

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(noddyFunction("fantastic"), true)
//Test.assertEquals(noddyFunction("wonderful"), false)
//Test.assertEquals(noddyFunction("noddy"), false)
//Test.assertEquals(noddyFunction("blessed"), false)
//Test.assertEquals(noddyFunction("Wonder"), false)
//Test.assertEquals(noddyFunction("waterfall"), true)
//Test.assertEquals(noddyFunction("nature"), true)
//Test.assertEquals(noddyFunction("ADVENTUROUS"), false)
//Test.assertEquals(noddyFunction("Benevolent"), true)
//Test.assertEquals(noddyFunction("courageous"), true)
//Test.assertEquals(noddyFunction("End"), false)
//Test.assertEquals(noddyFunction("virtue"), true)
//Test.assertEquals(noddyFunction("Kindness"), false)
//Test.assertEquals(noddyFunction("CREATURE"), true)
//Test.assertEquals(noddyFunction("Planet"), true)
//Test.assertEquals(noddyFunction("disaster"), false)
//Test.assertEquals(noddyFunction("possibility"), true)
//Test.assertEquals(noddyFunction("Inspiration"), true)
//Test.assertEquals(noddyFunction("Hope"), true)
//Test.assertEquals(noddyFunction("nurture"), true)
//Test.assertEquals(noddyFunction("UNDERSTANDING"), false)
//Test.assertEquals(noddyFunction("Edabit"), false)
//​
//// made by @Joshua Señoron

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Height of the Tallest Building

//tags: arrays,strings

//url: https://edabit.com/challenge/rpTEWc6boQEgQB8D6

//Description:
//Given an array of strings (depicting a skyline of several buildings), return in meters the height of the tallest building. Each line in the list represents 20m.
//Examples
//tallestBuildingHeight([
//  "            ##",
//  "            ##",
//  "            ##",
//  "###   ###   ##",
//  "###   ###   ###",
//  "###   ###   ###",
//  "###   ###   ###"
//]) ➞ "140m"
//
//// Tallest building is 7 rows
//// 7 x 20m = 140m
//
//tallestBuildingHeight([
//  "               ",
//  "               ",
//  "               ",
//  "       #    ###",
//  "      # #   ###",
//  "###   ###   ###",
//  "###   ###   ###"
//]) ➞ "80m"
//
//// tallest building is 4 rows
//// 4 x 20m = 80m
//
//tallestBuildingHeight([
//  "                              ",
//  "                         ###  ",
//  "                         ###  ",
//  "###                    #####  ",
//  "###      #             #####  ",
//  "###     ###            #####  ",
//  "######  ###            #######",
//  "######  ######  ###    #######",
//  "###################    #######",
//  "###############################",
//  "###############################"
//]) ➞ "200m"
//
//// Tallest building is 10 rows
//// 10 x 20m = 200m
//Notes
//There may be some open sky above buildings (can't just find the length of the array).
//There may be multiple tallest buildings (see example #2).

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(tallestBuildingHeight([
//  "         ",
//  " ##      ",
//  " ##      ",
//  "###   ## ",
//  "###   ## ",
//  "###   ###",
//  "###   ###"
//]), "120m")
//​
//Test.assertEquals(tallestBuildingHeight([
//  "            ##",
//  "            ##",
//  "            ##",
//  "###   ###   ##",
//  "###   ###   ###",
//  "###   ###   ###",
//  "###   ###   ###"
//]), "140m")
//​
//Test.assertEquals(tallestBuildingHeight([
//  "               ",
//  "               ",
//  "               ",
//  "       #    ###",

