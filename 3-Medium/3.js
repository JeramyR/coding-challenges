

//title: Which Generation Are You?

//tags: conditions,logic,objects,strings

//url: https://edabit.com/challenge/48EJWLhF224na8po3

//Description:
//Try finding your ancestors and offspring with code.
//Create a function that takes a number x and a character y ("m" for male, "f" for female), and returns the name of an ancestor (m/f) or descendant (m/f).
//If the number is negative, return the related ancestor.
//If positive, return the related descendant.
//You are generation 0. In the case of 0 (male or female), return "me!".
//Examples
//generation(2, "f") ➞ "granddaughter"
//
//generation(-3, "m") ➞ "great grandfather"
//
//generation(1, "f") ➞ "daughter"
//Notes
//Check the Resources tab for helpful hints.
//Generation	Male	Female
//-3	great grandfather	great grandmother
//-2	grandfather	grandmother
//-1	father	mother
//0	me!	me!
//1	son	daughter
//2	grandson	granddaughter
//3	great grandson	great granddaughter

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(generation(-3, "m"), "great grandfather", "3 generations before you, male...")
//Test.assertEquals(generation(1, "f"), "daughter", "1 generation after you, female...")
//Test.assertEquals(generation(-3, "f"), "great grandmother")
//Test.assertEquals(generation(-2, "m"), "grandfather")
//Test.assertEquals(generation(-2, "f"), "grandmother")
//Test.assertEquals(generation(-1, "m"), "father")
//Test.assertEquals(generation(-1, "f"), "mother")
//Test.assertEquals(generation(0, "f"), "me!")
//Test.assertEquals(generation(1, "m"), "son")
//Test.assertEquals(generation(1, "f"), "daughter")
//Test.assertEquals(generation(2, "m"), "grandson")
//Test.assertEquals(generation(2, "f"), "granddaughter")
//Test.assertEquals(generation(3, "m"), "great grandson")
//Test.assertEquals(generation(3, "f"), "great granddaughter")
//Test.assertEquals(generation(0, "m"), "me!")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Find the nth Tetrahedral Number

//tags: logic,math,numbers

//url: https://edabit.com/challenge/zRCyxKBBmr4F2x4Bv

//Description:
//A tetrahedron is a pyramid with a triangular base and three sides. A tetrahedral number is a number of items within a tetrahedron.
//Create a function that takes an integer n and returns the nth tetrahedral number.
//
//Examples
//tetra(2) ➞ 4
//
//tetra(5) ➞ 35
//
//tetra(6) ➞ 56
//Notes
//There is a formula for the nth tetrahedral number.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(tetra(1), 1)
//Test.assertEquals(tetra(2), 4)
//Test.assertEquals(tetra(3), 10)
//Test.assertEquals(tetra(4), 20)
//Test.assertEquals(tetra(5), 35)
//Test.assertEquals(tetra(9), 165)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Learn Lodash (2): Compact

//tags: arrays,sorting

//url: https://edabit.com/challenge/M6fbYyBkzJXMAu39G

//Description:
//According to the lodash documentation, _.compact creates an array with all falsey values removed. The values false, null, 0, "", undefined, and NaN are falsey.
//Your task is to build this helper function without using lodash. You will write a function that receives an array and removes all falsey values.
//Examples
//compact([0, 1, false, 2, "", 3]);   // => [1, 2, 3]
//Notes
//Do not attempt to import lodash; you are simply writing your own version.
//This entire series of challenges can be found here.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(compact([1,0,false,null,undefined,"banana"]), [1,'banana']);
//Test.assertSimilar(compact([]), []);
//Test.assertSimilar(
//  compact(
//    [
//      {
//        color: "red",
//        make: "toyota",
//      },
//      {
//        color: "blue",
//        make: "mazda",
//      },
//    ],
//    null
//  ),
//  [
//    {
//      color: "red",
//      make: "toyota",
//    },
//    {
//      color: "blue",
//      make: "mazda",
//    },

