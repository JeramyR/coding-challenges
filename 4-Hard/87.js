

//title: Geometric Mean

//tags: geometry,math,numbers

//url: https://edabit.com/challenge/7PS8pQieTWw5vrRYM

//Description:
//The geometric mean of numbers a and b is the square root of their product (i.e. √(ab)). For example, the geometric mean of 2 and 8 is √(2*8)=4.
//Two integers (a and b) are randomly (and independently) chosen between 1 and n (inclusive) where n is an integer greater than one. Create a function that takes a number n as an argument and returns the probability that the geometric mean of a and b is an integer.
//Examples
//f(2) ➞ 0.5
//// There are four possible pairs: (1, 1), (2, 1), (1, 2) and (2, 2).
//// The pairs (1, 1) and (2, 2) are wanted (√(1*1)=1 and √(2*2)=2)
//// but the pairs (2, 1) and (1, 2) are not (√(2*1)=√2 and √(1*2)=√2).
//// Thus, the probability is 2/4 = 0.5.
//
//f(10) ➞ 0.18
//
//f(100) ➞ 0.031
//Notes
//Do not round your answer.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(f(2), 0.5)
//Test.assertEquals(f(10), 0.18)
//Test.assertEquals(f(100), 0.031)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Mexican Wave Simulator

//tags: arrays,loops,strings

//url: https://edabit.com/challenge/Jqp5E7SNY3gYFBNRL

//Description:
//
//The wave (known as a Mexican wave in the English-speaking world outside North America) is an example of metachronal rhythm achieved in a packed stadium when successive groups of spectators briefly stand, yell, and raise their arms.
//Create a function that takes a string and turns it into a Mexican Wave.
//Examples
//wave("edabit") ➞ ["Edabit", "eDabit", "edAbit", "edaBit", "edabIt", "edabiT"]
//
//wave("just do it") ➞ ["Just do it", "jUst do it", "juSt do it", "jusT do it", "just Do it", "just dO it", "just do It", "just do iT"]
//
//wave(" ") ➞ []
//Notes
//All test cases will be lowercase strings.
//Ignore spaces (they are considered empty seats).
//An empty string should return an empty array.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(wave("edabit"), ["Edabit", "eDabit", "edAbit", "edaBit", "edabIt", "edabiT"]);
//Test.assertSimilar(wave("dogs cats pigs"), ["Dogs cats pigs", "dOgs cats pigs", "doGs cats pigs", "dogS cats pigs", "dogs Cats pigs", "dogs cAts pigs", "dogs caTs pigs", "dogs catS pigs", "dogs cats Pigs", "dogs cats pIgs", "dogs cats piGs", "dogs cats pigS"], "Ignore spaces.");
//Test.assertSimilar(wave(" "), [], "Ignore spaces.");
//Test.assertSimilar(wave(""), [], "An empty string should return an empty array.");
//Test.assertSimilar(wave("g"), ["G"]);
//Test.assertSimilar(wave(" blue"), [" Blue", " bLue", " blUe", " bluE"], "Space at the beginning.");
//Test.assertSimilar(wave("green "), ["Green ", "gReen ", "grEen ", "greEn ", "greeN "], "Space at the end.");

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Deep Array Count

//tags: algorithms,arrays,recursion

//url: https://edabit.com/challenge/Aq9mrJ9FWyxWCpgLq

//Description:
//Create a function that takes an array and returns the number of ALL elements within it (including those within the inner-level array(s)).
//Examples
//deepCount([1, 2, 3]) ➞ 3
//
//deepCount([[1], [2], [3]]) ➞ 6
//
//deepCount(["x", "y", ["z"]]) ➞ 4
//
//deepCount(["a", "b", ["c", "d", ["e"]]]) ➞ 7
//Notes
//In the examples above, notice how the sub-arrays within the main array count as an element as well as the elements within that sub-array.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(deepCount([1, 2, 3]), 3);
//Test.assertEquals(deepCount(["x", "y", ["z"]]), 4);
//Test.assertEquals(deepCount(["a", "b", ["c", "d", ["e"]]]), 7);
//Test.assertEquals(deepCount([[1], [2], [3]]), 6);
//Test.assertEquals(deepCount([[[[[[[[[]]]]]]]]]), 8);
//Test.assertEquals(deepCount([null]), 1);
//Test.assertEquals(deepCount([[]]), 1);
//Test.assertEquals(deepCount([[undefined], [null, ["edabit"]], [0]]), 8);

