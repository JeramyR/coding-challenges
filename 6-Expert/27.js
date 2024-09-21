

//title: Hexagonal Grid: Distance

//tags: arrays,games,logic

//url: https://edabit.com/challenge/YuWnXNtiRAnETbf3P

//Description:
//A hexagonal grid is a commonly used game board design based on hexagonal tiling. In the following grid, the two marked locations have a minimum distance of 6 because at least 6 steps are needed to reach the second location starting from the first one.
//
//Write a function that takes a hexagonal grid with two marked locations as input and returns their distance.
//The input grid will be a list of strings in which each tile is represented with o and the two marked locations with x.
//Examples
//hexDistance([
//  "  o o  ",
//  " o x o ",
//  "  o x  ",
//]) ➞ 1
//
//hexDistance([
//  "  o o  ",
//  " x o o ",
//  "  o x  ",
//]) ➞ 2
//
//hexDistance([
//  "   o o o   ",
//  "  o o o o  ",
//  " o o o o o ",
//  "  x o o x  ",
//  "   o o o   ",
//]) ➞ 3
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(hexDistance([
//  "  o o  ",
//  " o x o ",
//  "  o x  ",
//]), 1)
//​
//Test.assertEquals(hexDistance([
//  "  x o  ",
//  " o o x ",
//  "  o o  ",
//]), 2)
//​
//Test.assertEquals(hexDistance([
//  "   o o o   ",
//  "  o o o o  ",
//  " o o o o o ",
//  "  x o o x  ",
//  "   o o o   ",
//]), 3)
//​
//Test.assertEquals(hexDistance([
//  "   o x o   ",
//  "  o x o o  ",
//  " o o o o o ",
//  "  o o o o  ",

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Centered Polygonal Number

//tags: math,numbers

//url: https://edabit.com/challenge/ec8eWXPWK7JtPNP8d

//Description:
//The centered polygonal numbers are a family of sequences of 2-dimensional figurate numbers, each formed by a central dot, sorrounded by polygonal layers with a constant number of sides. Each side of a polygonal layer contains one dot more than a side in the previous layer.
//	
//Centered triangular numbers	Centered square numbers
//	
//Centered pentagonal numbers	Centered hexagonal numbers
//In the following table are listed the first 12 terms of the sequences of centered k-polygonal numbers, with k from 3 to 22:
//k	Name	0	1	2	3	4	5	6	7	8	9	10	11
//3	Triangular	1	4	10	19	31	46	64	85	109	136	166	199
//4	Square	1	5	13	25	41	61	85	113	145	181	221	265
//5	Pentagonal	1	6	16	31	51	76	106	141	181	226	276	331
//6	Hexagonal	1	7	19	37	61	91	127	169	217	271	331	397
//7	Heptagonal	1	8	22	43	71	106	148	197	253	316	386	463
//8	Octagonal	1	9	25	49	81	121	169	225	289	361	441	529
//9	Nonagonal	1	10	28	55	91	136	190	253	325	406	496	595
//10	Decagonal	1	11	31	61	101	151	211	281	361	451	551	661
//11	Hendecagonal	1	12	34	67	111	166	232	309	397	496	606	727
//12	Dodecagonal	1	13	37	73	121	181	253	337	433	541	661	793
//13	Tridecagonal	1	14	40	79	131	196	274	365	469	586	716	859
//14	Tetradecagonal	1	15	43	85	141	211	295	393	505	631	771	925
//15	Pentadecagonal	1	16	46	91	151	226	316	421	541	676	826	991
//16	Hexadecagonal	1	17	49	97	161	241	337	449	577	721	881	1057
//17	Heptadecagonal	1	18	52	103	171	256	358	477	613	766	936	1123
//18	Octadecagonal	1	19	55	109	181	271	379	505	649	811	991	1189
//19	Enneadecagonal	1	20	58	115	191	286	400	533	685	856	1046	1255
//20	Icosagonal	1	21	61	121	201	301	421	561	721	901	1101	1321
//21	Icosihenagonal	1	22	64	127	211	316	442	589	757	946	1156	1387
//22	Icosidigonal	1	23	67	133	221	331	463	617	793	991	1211	1453
//As you can see:
//6 is the 1st pentagonal number;
//16 is the 2nd pentagonal number and the 1st pentadecagonal number;
//19 is the 3rd triangular number, the 2nd hexagonal number and the 1st octadecagonal number.
//Write a function that takes an integer n as argument and returns its classification as polygonal number:
//return "0th of all" if n is 1, since it is the 0th term of every centered polygonal number sequence;
//return a list whose generic element is a string formatted as "{i}th {k}-gonal number" if n is the i-th k-gonal number, in k-ascending order;
//return false if n is not a k-gonal number for any k > 2.
//Examples
//isPolygonal(3) ➞ false
//
//isPolygonal(4) ➞ ["1st 3-gonal number"]
//
//isPolygonal(16) ➞ ["2nd 5-gonal number", "1st 15-gonal number"]
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(isPolygonal(1), "0th of all")
//Test.assertSimilar(isPolygonal(2), false)
//Test.assertSimilar(isPolygonal(3), false)
//Test.assertSimilar(isPolygonal(4), ["1st 3-gonal number"])
//Test.assertSimilar(isPolygonal(5), ["1st 4-gonal number"])
//Test.assertSimilar(isPolygonal(6), ["1st 5-gonal number"])
//Test.assertSimilar(isPolygonal(7), ["1st 6-gonal number"])
//Test.assertSimilar(isPolygonal(8), ["1st 7-gonal number"])
//Test.assertSimilar(isPolygonal(9), ["1st 8-gonal number"])
//Test.assertSimilar(isPolygonal(10), ["2nd 3-gonal number", "1st 9-gonal number"])
//Test.assertSimilar(isPolygonal(11), ["1st 10-gonal number"])
//Test.assertSimilar(isPolygonal(13), ["2nd 4-gonal number", "1st 12-gonal number"])
//Test.assertSimilar(isPolygonal(16), ["2nd 5-gonal number", "1st 15-gonal number"])
//Test.assertSimilar(isPolygonal(19), ["3rd 3-gonal number", "2nd 6-gonal number", "1st 18-gonal number"])
//Test.assertSimilar(isPolygonal(19), ["3rd 3-gonal number", "2nd 6-gonal number", "1st 18-gonal number"])
//Test.assertSimilar(isPolygonal(25), ["3rd 4-gonal number", "2nd 8-gonal number", "1st 24-gonal number"])
//Test.assertSimilar(isPolygonal(31), ["4th 3-gonal number", "3rd 5-gonal number", "2nd 10-gonal number", "1st 30-gonal number"])
//Test.assertSimilar(isPolygonal(37), ["3rd 6-gonal number", "2nd 12-gonal number", "1st 36-gonal number"])
//Test.assertSimilar(isPolygonal(43), ["3rd 7-gonal number", "2nd 14-gonal number", "1st 42-gonal number"])
//Test.assertSimilar(isPolygonal(46), ["5th 3-gonal number", "2nd 15-gonal number", "1st 45-gonal number"])
//Test.assertSimilar(isPolygonal(49), ["3rd 8-gonal number", "2nd 16-gonal number", "1st 48-gonal number"])
//Test.assertSimilar(isPolygonal(55), ["3rd 9-gonal number", "2nd 18-gonal number", "1st 54-gonal number"])
//Test.assertSimilar(isPolygonal(61), ["5th 4-gonal number", "4th 6-gonal number", "3rd 10-gonal number", "2nd 20-gonal number", "1st 60-gonal number"])
//Test.assertSimilar(isPolygonal(64), ["6th 3-gonal number", "2nd 21-gonal number", "1st 63-gonal number"])
//Test.assertSimilar(isPolygonal(67), ["3rd 11-gonal number", "2nd 22-gonal number", "1st 66-gonal number"])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Sorting in R: Order (Part I)

//tags: arrays,sorting

//url: https://edabit.com/challenge/2eeiWCm9APTAortcv

//Description:
//R, a programming language used for Statistics and Data Analysis, has the function order, which returns a list with the indices needed to sort the original vector(∗).
//For example:
//my_arr = [1, 3, 3, 9, 8]
//// Ordered would be: [0, 1, 2, 4, 3]
//In plain words, order tells you what elements to look at in your original vector to sort it. The list my_arr[0] + my_arr[1] + my_arr[2] + my_arr[4] + my_arr[3] is equivalent to sorted(my_arr).
//If two or more elements have the same order, their original order is preserved. Here, [0, 1, 2, 4, 3] and [0, 2, 1, 4, 3] would both sort the vector, but only the first one preserves the original order for the two 3s.
//Implement the function order() so that it works the same way it does in R.
//Examples
//order([9, 1, 4, 5, 4]) ➞ [1, 2, 4, 3, 0]
//
//order(["z", "c", "f", "b", "c"]) ➞ [3, 1, 4, 2, 0]
//
//order(["order", "my", "words"]) ➞ [1, 0, 2]
//Notes
//Expect numbers and lower-case alphabetic characters only.
//Find Part II: Rank here.
//Vectors in R are similar to a list. Although vectors in R are 1-indexed, your function should be 0-indexed. Other differences between vectors and lists will be ignored for the scope of this challenge.
//If you implement your own algorithm, it must be stable, meaning that the order of identical elements doesn't get switched around.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(order([1, 3, 3, 9, 8]), [0, 1, 2, 4, 3])
//Test.assertSimilar(order([9, 1, 4, 5, 4]), [1, 2, 4, 3, 0])
//Test.assertSimilar(order([1, 1, 1, 1, 1]), [0, 1, 2, 3, 4])
//Test.assertSimilar(order([1, 2, 0, 3, 7, 1, 11, 1, 2]), [2, 0, 5, 7, 1, 8, 3, 4, 6])
//Test.assertSimilar(order([1, -4, 5.5, -1, 4, 7.5]), [1, 3, 0, 4, 2, 5])
//Test.assertSimilar(order(["z", "c", "f", "b", "c"]), [3, 1, 4, 2, 0])
//Test.assertSimilar(order(["d", "f", "g", "a", "d", "a", "d", "y"]), [3, 5, 0, 4, 6, 1, 2, 7])
//Test.assertSimilar(order(["order", "my", "words"]), [1, 0, 2])
//Test.assertSimilar(order(["a", "rose", "is", "a", "rose", "is", "a", "rose"]), [0, 3, 6, 2, 5, 1, 4, 7])
//Test.assertSimilar(order(["z", "zz", "zzz"]), [0, 1, 2])

