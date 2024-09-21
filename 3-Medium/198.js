

//title: Spelling Bee

//tags: regex,strings,validation

//url: https://edabit.com/challenge/LFdGBECCHWfyyZ7fg

//Description:
//Given a sentence spelling out a word, return true if the spelled letters match the word at the end of the string, or false otherwise.
//Examples
//validateSpelling("C. Y. T. O. P. L. A. S. M. Cytoplasm?") ➞ true
//
//validateSpelling("P. H. A. R. A. O. H. Pharaoh!") ➞ true
//
//validateSpelling("H. A. N. K. E. R. C. H. E. I. F. Handkerchief.") ➞ false
//Notes
//The word at the end is always spelled correctly.
//Spelled letters and words will always end in punctuation (but ignore all punctuation).

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(validateSpelling("C. Y. T. O. P. L. A. S. M. Cytoplasm?"), true)
//Test.assertEquals(validateSpelling("P. H. A. R. A. O. H. Pharaoh!"), true)
//Test.assertEquals(validateSpelling("H. A. N. K. E. R. C. H. E. I. F. Handkerchief."), false)
//Test.assertEquals(validateSpelling("M. E. C. O. M. M. E. N. N. Recommend."), false)
//Test.assertEquals(validateSpelling("C. H. R. Y. S. A. N. T. H. E. M. U. M. Chrysanthemum!"), true)
//Test.assertEquals(validateSpelling("A. C. C. O. M. M. O. D. A. M. E. Accommodate!"), false)
//Test.assertEquals(validateSpelling("S. U. A. C. E. I. L. L. A. N. C. E. Surveillance."), false)
//Test.assertEquals(validateSpelling("B. U. S. I. N. E. S. S. Business."), true)
//Test.assertEquals(validateSpelling("C. O. N. V. E. N. I. E. N. T. Convenient."), true)
//Test.assertEquals(validateSpelling("C. O. N. V. E. N. O. E. N. T. Convenient!"), false)
//Test.assertEquals(validateSpelling("C. H. A. U. F. F. E. U. R. Chauffeur."), true)
//Test.assertEquals(validateSpelling("L. I. A. A. S. O. N. Liaison!"), false)
//Test.assertEquals(validateSpelling("O. C. C. U. R. R. E. N. C. E. Occurrence?"), true)
//Test.assertEquals(validateSpelling("E. C. C. C. R. R. E. N. C. E. Occurrence!"), false)
//Test.assertEquals(validateSpelling("E. A. B. A. R. R. A. S. S. Embarrass!"), false)
//Test.assertEquals(validateSpelling("C. O. N. V. E. N. I. E. N. T. Convenient?"), true)
//Test.assertEquals(validateSpelling("U. N. C. O. N. S. C. I. C. U. U. Unconscious!"), false)
//Test.assertEquals(validateSpelling("I. E. D. R. D. Weird!"), false)
//Test.assertEquals(validateSpelling("D. F. F. T. N. I. T. E. L. Y. Definitely?"), false)
//Test.assertEquals(validateSpelling("C. A. A. E. N. D. A. R. Calendar."), false)
//Test.assertEquals(validateSpelling("A. C. C. O. M. M. O. D. C. T. E. Accommodate!"), false)
//Test.assertEquals(validateSpelling("A. C. C. O. M. M. O. D. A. O. O. Accommodate!"), false)
//Test.assertEquals(validateSpelling("S. U. R. V. E. I. L. L. A. N. C. E. Surveillance."), true)
//Test.assertEquals(validateSpelling("S. E. P. A. R. A. T. E. Separate!"), true)
//Test.assertEquals(validateSpelling("Q. U. O. S. T. I. O. N. N. A. U. R. E. Questionnaire."), false)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Making a Box

//tags: formatting,strings

//url: https://edabit.com/challenge/eqzf7Mtxqa6bgQX3o

//Description:
//Create a function that creates a box based on dimension n.
//Examples
//makeBox(5) ➞ [
//  "#####",
//  "#   #",
//  "#   #",
//  "#   #",
//  "#####"
//]
//
//makeBox(3) ➞ [
//  "###",
//  "# #",
//  "###"
//]
//
//makeBox(2) ➞ [
//  "##",
//  "##"
//]
//
//makeBox(1) ➞ [
//  "#"
//]
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(makeBox(5), [
//    "#####",
//    "#   #",
//    "#   #",
//    "#   #",
//    "#####"
//])
//​
//Test.assertSimilar(makeBox(6), [
//    "######",
//    "#    #",
//    "#    #",
//    "#    #",
//    "#    #",
//    "######"
//])
//​
//Test.assertSimilar(makeBox(4), [
//    "####",
//    "#  #",
//    "#  #",
//    "####"
//])
//​
//Test.assertSimilar(makeBox(2), [

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Centroid of a Triangle

//tags: algebra,math

//url: https://edabit.com/challenge/zjhrGKFnMYSTTXAK7

//Description:
//If you have a triangular shape cut from a piece of cardboard, the centroid of the triangle would be the spot where it balances on the point of a pencil. The location of the centroid is easy to calculate if you know the x, y coordinates of the vertices:
//The x coordinate of the centroid is at (x1 + x2 + x3) / 3
//The y coordinate of the centroid is at (y1 + y2 + y3) / 3
//x1, y1, x2, y2, x3, y3 are the coordinates of the three vertices.
//Create a function that calculates the position of the centroid given the coordinates of the vertices. Round the answers to two decimal places. If the three points given do not form a triangle, return false.
//Examples
//centroid(0, 0, 3, 0, 3, 3) ➞ [2.0, 1.0]
//
//centroid(2, 2, 8, -2, 0, -3) ➞ [3.33, -1.0]
//
//centroid(1, 1, 2, 2, 3, 3) ➞ false
//Notes
//The arguments are given in the order shown above: x1, y1, x2, y2, x3, y3.
//If the three points do not form a triangle, they must lie in a straight line.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(centroid(0, 0, 3, 0, 3, 3), [2.0, 1.0])
//Test.assertSimilar(centroid(5, 3, -3, -2, -1, 4), [0.33, 1.67])
//Test.assertSimilar(centroid(2, 2, 8, -2, 0, -3), [3.33, -1.0])
//Test.assertSimilar(centroid(5, 3, 5, -1, -4, 1), [2.0, 1.0])
//Test.assertSimilar(centroid(-1, -3, 1, 3, 2, 6), false)
//Test.assertSimilar(centroid(3, 0, 0, 3, 6, 3), [3.0, 2.0])

