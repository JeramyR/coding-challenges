

//title: Mr Bond Buys an Island

//tags: algorithms,arrays,logic,recursion

//url: https://edabit.com/challenge/nNPTevXWPjQMLGG3v

//Description:
//Having spent decades doing dangerous stuff like running away from explosions, running towards explosions, running alongside explosions, and other Cool Spy Things, Commander James Bond has finally decided to retire. Mr. Bond wishes to follow (somewhat) in Dr. No's footsteps, and buy a private island.
//Fortunately, the illustrious archipelago nation of Edabitia has decided to offer its land up for sale. The problem, however, is that most of the unoccupied islands of Edabitia are... rather small. As in, they wouldn't even be able to fit a broom closet, much less the sprawling mansion deserving of Bond!
//Bond, not wanting to deal with all this nasty real estate stuff, hires you to find him an island.
//Your Job
//Given a grid of an area of Edabitia, and a desired that describes the area Bond desires for his mansion, determine whether there exists, on that map, an island that would be suitable.
//Map
//The map will be represented by a 2-dimensional array with two possible values for each "cell":
//1: The cell is land.
//0: The cell is water.
//Build Rules
//Bond's house base will be built up of square subsections, with each subsection occupying one cell of the map. So that Bond can actually walk between sections, each section must be connected to other sections in the house by a full wall. In other words, two cells connected by only a diagonal don't "count". In "math" terms: Two cells A and B are part of the same island only if B is directly north, east, south, or west of A.
//Other than that, a mansion can be any shape.
//Confused? Let's look at a few examples:
//enoughRoom([
//  [0, 0, 0, 0, 0],
//  [0, 1, 1, 0, 0],
//  [0, 1, 1, 0, 0],
//  [0, 0, 0, 0, 0]
//],  5) ➞ false
//
//
//enoughRoom([
//  [0, 0, 0, 0, 0],
//  [0, 1, 1, 0, 0],
//  [0, 0, 0, 1, 0],
//  [0, 0, 0, 1, 0]
//],  4) ➞ false
//
//
//enoughRoom([
//  [1, 1, 1, 0, 0],
//  [0, 0, 1, 0, 0],
//  [0, 0, 1, 1, 0],
//  [0, 0, 0, 1, 0]
//],  6) ➞ true
//In the first example, we only have a 4x4 square. We're asked to find an area for a mansion of 5 cells in size, so that won't work.
//In the second example, while we do have 4 total squares of land (our desired land total), the two islands (one "wide" and one "tall") are only connected by a diagonal, and so must be treated as two separate islands.
//In the third example, even though the island itself is a weird, snakey, z-shape, it still is one island of area = 7, which is more than enough for our needs.
//Notes
//For the sake of this problem, assume that Bond can build his house right up against the water's edge. That is, while normally you'd want to avoid building right at the water (because of, you know, erosion), you can safely ignore that here.
//Again, other than the No Diagonals rule, Bond's house can be any shape.
//Assume that the current map you're looking at is entirely surrounded by water. That is, assume that the only nearby land available is the land you see.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//const scenarios = [{
//  map:[ [ 0, 0, 1 ], [ 1, 0, 0 ], [ 1, 0, 0 ] ],
//  desired:2,
//  expected:true,
//  reason:`Just a simple island. Welcome home.`
//},{
//  map:[
//  [ 0, 0, 0, 0, 0, 0 ],
//  [ 0, 1, 1, 1, 1, 0 ],
//  [ 0, 1, 1, 0, 1, 0 ],
//  [ 0, 1, 1, 1, 1, 0 ],
//  [ 0, 0, 0, 0, 0, 0 ],
//  [ 0, 0, 0, 0, 0, 0 ]
//],
//  desired:8,
//  expected:true,
//  reason:'A bigger island. Room to stretch out!'
//},{
//  map:[[0,0,0,0,0],
// [0,1,1,0,0],
// [0,1,1,0,0],
// [0,0,0,0,0]],
//  desired:5,
//  expected:false,
//  reason:'Land too small'

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Sorting in R: Rank (Part II)

//tags: arrays,sorting

//url: https://edabit.com/challenge/WTH9NveTMed5vtyaA

//Description:
//R, a programming language used for Statistics and Data Analysis, has the function rank, which returns the rank for each value in a vector.
//For example:
//my_arr = [1, 3, 3, 9, 8]
//// Ranked would be: [0, 1.5, 1.5, 4, 3]
//When two or more values have the same rank, they are assigned the mean of their rankings. Here, the two 3s have ranks 1 and 2, so both are assigned rank 1.5.
//Implement the function rank() so that it works the same it does in R.
//Examples
//rank([9, 1, 4, 5, 4]) ➞ [4.0, 0.0, 1.5, 3.0, 1.5]
//
//rank(["z", "c", "f", "b", "c"]) ➞ [4.0, 1.5, 3.0, 0.0, 1.5]
//Notes
//Expect numbers and lower-case alphabetic characters only.
//Find Part I: Order here.
//Vectors in R are similar to an array. Although vectors in R are 1-indexed, your function should be 0-indexed. Other differences between vectors and arrays will be ignored for the scope of this challenge.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(rank([1, 3, 3, 9, 8]), [0, 1.5, 1.5, 4, 3])
//Test.assertSimilar(rank([9, 1, 4, 5, 4]), [4.0, 0.0, 1.5, 3.0, 1.5])
//Test.assertSimilar(rank([1, 1, 1, 1, 1]), [2.0, 2.0, 2.0, 2.0, 2.0])
//Test.assertSimilar(rank([1, 2, 0, 3, 7, 1, 11, 1, 2]), [2.0, 4.5, 0.0, 6.0, 7.0, 2.0, 8.0, 2.0, 4.5])
//Test.assertSimilar(rank([1, -4, 5.5, -1, 4, 7.5]), [2.0, 0.0, 4.0, 1.0, 3.0, 5.0])
//Test.assertSimilar(rank(["z", "c", "f", "b", "c"]), [4.0, 1.5, 3.0, 0.0, 1.5])
//Test.assertSimilar(rank(["d", "f", "g", "a", "d", "a", "d", "y"]), [3.0, 5.0, 6.0, 0.5, 3.0, 0.5, 3.0, 7.0])
//Test.assertSimilar(rank(["rank", "my", "words"]), [1.0, 0.0, 2.0])
//Test.assertSimilar(rank(["a", "rose", "is", "a", "rose", "is", "a", "rose"]), [1.0, 6.0, 3.5, 1.0, 6.0, 3.5, 1.0, 6.0])
//Test.assertSimilar(rank(["z", "zz", "zzz"]), [0.0, 1.0, 2.0])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: A Hot Brick

//tags: arrays,loops,math

//url: https://edabit.com/challenge/2kKvJ5CaQZp2DJDSk

//Description:
//A brick in the shape of a cube sits on a heated surface capable of heating the bottom of the brick to a constant temperature of 90 degrees. The air around the brick is a constant 25 degrees. A perpendicular section through the center of the brick is a 10x10 array showing the temperature at each of 100 points.
//Let's specify that we can determine the temperature change of any point in the array by averaging its temperature with the temperatures of its 8 contiguous points (vertically, horizontally and diagonally). If the point is on the edge or the corner of the array then some of those 8 points will be at the ambient 25 degrees.
//Given that at time t=0, the bottom of the brick is at 90 degrees and the rest of the brick is at the ambient 25 degrees, devise a function that will calculate the array of temperatures at a later time t in minutes. You will recalculate the temperatures at one minute intervals. Round them to the nearest degree.
//Examples
//hotBrick(0) ➞ [
//  [25, 25, 25, 25, 25, 25, 25, 25, 25, 25]
//  [25, 25, 25, 25, 25, 25, 25, 25, 25, 25]
//  [25, 25, 25, 25, 25, 25, 25, 25, 25, 25]
//  [25, 25, 25, 25, 25, 25, 25, 25, 25, 25]
//  [25, 25, 25, 25, 25, 25, 25, 25, 25, 25]
//  [25, 25, 25, 25, 25, 25, 25, 25, 25, 25]
//  [25, 25, 25, 25, 25, 25, 25, 25, 25, 25]
//  [25, 25, 25, 25, 25, 25, 25, 25, 25, 25]
//  [25, 25, 25, 25, 25, 25, 25, 25, 25, 25]
//  [90, 90, 90, 90, 90, 90, 90, 90, 90, 90]
//]
//
//hotBrick(1) ➞ [
//  [25, 25, 25, 25, 25, 25, 25, 25, 25, 25]
//  [25, 25, 25, 25, 25, 25, 25, 25, 25, 25]
//  [25, 25, 25, 25, 25, 25, 25, 25, 25, 25]
//  [25, 25, 25, 25, 25, 25, 25, 25, 25, 25]
//  [25, 25, 25, 25, 25, 25, 25, 25, 25, 25]
//  [25, 25, 25, 25, 25, 25, 25, 25, 25, 25]
//  [25, 25, 25, 25, 25, 25, 25, 25, 25, 25]
//  [25, 25, 25, 25, 25, 25, 25, 25, 25, 25]
//  [39, 47, 47, 47, 47, 47, 47, 47, 47, 39]
//  [90, 90, 90, 90, 90, 90, 90, 90, 90, 90]
//]
//
//hotBrick(10) ➞ [
//  [25, 25, 25, 25, 25, 25, 25, 25, 25, 25]
//  [25, 25, 25, 25, 25, 25, 25, 25, 25, 25]
//  [25, 25, 25, 25, 25, 25, 25, 25, 25, 25]
//  [25, 26, 26, 26, 26, 26, 26, 26, 26, 25]
//  [26, 27, 28, 28, 28, 28, 28, 28, 27, 26]
//  [28, 30, 32, 33, 33, 33, 33, 32, 30, 28]
//  [31, 36, 39, 41, 41, 41, 41, 39, 36, 31]
//  [38, 47, 51, 53, 54, 54, 53, 51, 47, 38]
//  [50, 65, 69, 70, 71, 71, 70, 69, 65, 50]
//  [90, 90, 90, 90, 90, 90, 90, 90, 90, 90]
//]
//Notes
//Due to the symmetry of the problem, the array is always horizontally symmetrical.
//Calculations at any time t are solely based on the previous time's t-1 numbers.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(hotBrick(0), [[25, 25, 25, 25, 25, 25, 25, 25, 25, 25], [25, 25, 25, 25, 25, 25, 25, 25, 25, 25], [25, 25, 25, 25, 25, 25, 25, 25, 25, 25], [25, 25, 25, 25, 25, 25, 25, 25, 25, 25], [25, 25, 25, 25, 25, 25, 25, 25, 25, 25], [25, 25, 25, 25, 25, 25, 25, 25, 25, 25], [25, 25, 25, 25, 25, 25, 25, 25, 25, 25], [25, 25, 25, 25, 25, 25, 25, 25, 25, 25], [25, 25, 25, 25, 25, 25, 25, 25, 25, 25], [90, 90, 90, 90, 90, 90, 90, 90, 90, 90]])
//Test.assertSimilar(hotBrick(1), [[25, 25, 25, 25, 25, 25, 25, 25, 25, 25], [25, 25, 25, 25, 25, 25, 25, 25, 25, 25], [25, 25, 25, 25, 25, 25, 25, 25, 25, 25], [25, 25, 25, 25, 25, 25, 25, 25, 25, 25], [25, 25, 25, 25, 25, 25, 25, 25, 25, 25], [25, 25, 25, 25, 25, 25, 25, 25, 25, 25], [25, 25, 25, 25, 25, 25, 25, 25, 25, 25], [25, 25, 25, 25, 25, 25, 25, 25, 25, 25], [39, 47, 47, 47, 47, 47, 47, 47, 47, 39], [90, 90, 90, 90, 90, 90, 90, 90, 90, 90]])
//Test.assertSimilar(hotBrick(2), [[25, 25, 25, 25, 25, 25, 25, 25, 25, 25], [25, 25, 25, 25, 25, 25, 25, 25, 25, 25], [25, 25, 25, 25, 25, 25, 25, 25, 25, 25], [25, 25, 25, 25, 25, 25, 25, 25, 25, 25], [25, 25, 25, 25, 25, 25, 25, 25, 25, 25], [25, 25, 25, 25, 25, 25, 25, 25, 25, 25], [25, 25, 25, 25, 25, 25, 25, 25, 25, 25], [29, 31, 32, 32, 32, 32, 32, 32, 31, 29], [43, 53, 54, 54, 54, 54, 54, 54, 53, 43], [90, 90, 90, 90, 90, 90, 90, 90, 90, 90]])
//Test.assertSimilar(hotBrick(5), [[25, 25, 25, 25, 25, 25, 25, 25, 25, 25], [25, 25, 25, 25, 25, 25, 25, 25, 25, 25], [25, 25, 25, 25, 25, 25, 25, 25, 25, 25], [25, 25, 25, 25, 25, 25, 25, 25, 25, 25], [25, 25, 25, 25, 25, 25, 25, 25, 25, 25], [26, 26, 27, 27, 27, 27, 27, 27, 26, 26], [28, 30, 32, 32, 32, 32, 32, 32, 30, 28], [34, 40, 43, 44, 44, 44, 44, 43, 40, 34], [48, 61, 63, 64, 64, 64, 64, 63, 61, 48], [90, 90, 90, 90, 90, 90, 90, 90, 90, 90]])
//Test.assertSimilar(hotBrick(10), [[25, 25, 25, 25, 25, 25, 25, 25, 25, 25], [25, 25, 25, 25, 25, 25, 25, 25, 25, 25], [25, 25, 25, 25, 25, 25, 25, 25, 25, 25], [25, 26, 26, 26, 26, 26, 26, 26, 26, 25], [26, 27, 28, 28, 28, 28, 28, 28, 27, 26], [28, 30, 32, 33, 33, 33, 33, 32, 30, 28], [31, 36, 39, 41, 41, 41, 41, 39, 36, 31], [38, 47, 51, 53, 54, 54, 53, 51, 47, 38], [50, 65, 69, 70, 71, 71, 70, 69, 65, 50], [90, 90, 90, 90, 90, 90, 90, 90, 90, 90]])
//Test.assertSimilar(hotBrick(20), [[25, 25, 25, 25, 25, 25, 25, 25, 25, 25], [25, 25, 26, 26, 26, 26, 26, 26, 25, 25], [26, 26, 27, 27, 28, 28, 27, 27, 26, 26], [26, 28, 29, 30, 30, 30, 30, 29, 28, 26], [28, 31, 33, 34, 35, 35, 34, 33, 31, 28], [30, 35, 38, 40, 41, 41, 40, 38, 35, 30], [34, 41, 46, 49, 50, 50, 49, 46, 41, 34], [40, 51, 57, 60, 61, 61, 60, 57, 51, 40], [51, 67, 72, 74, 75, 75, 74, 72, 67, 51], [90, 90, 90, 90, 90, 90, 90, 90, 90, 90]])
//Test.assertSimilar(hotBrick(40), [[25, 26, 26, 26, 26, 26, 26, 26, 26, 25], [26, 27, 27, 28, 28, 28, 28, 27, 27, 26], [27, 28, 29, 30, 31, 31, 30, 29, 28, 27], [28, 30, 32, 34, 34, 34, 34, 32, 30, 28], [29, 33, 36, 38, 39, 39, 38, 36, 33, 29], [31, 37, 42, 45, 46, 46, 45, 42, 37, 31], [35, 43, 49, 53, 55, 55, 53, 49, 43, 35], [41, 53, 60, 63, 65, 65, 63, 60, 53, 41], [52, 69, 74, 76, 77, 77, 76, 74, 69, 52], [90, 90, 90, 90, 90, 90, 90, 90, 90, 90]])

