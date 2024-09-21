

//title: Popping Blocks

//tags: arrays,games,loops,regex

//url: https://edabit.com/challenge/MTSETAhgv24aeZ6wP

//Description:
//When two blocks of the same "type" are adjacent to each other, the entire contiguous block disappears (pops off). If this occurs, this can allow previously separated blocks to be in contact with each other, setting off a chain reaction. This will continue until each block is surrounded by a different block.
//Here's a demonstration:
//["A", "B", "C", "C", "B", "D", "A"]
//// The two adjacent Cs pop off
//
//["A", "B", "B", "D", "A"]
//// Two adjacent Bs pop off
//
//["A", "D", "A"]
//// No more blocks can be popped off
//Another demonstration:
//["A", "B", "A", "A", "A", "B", "B"]
//// The three adjacent As will pop off
//// (before the two adjacent Bs)
//
//["A", "B", "B", "B"]
//// 3 adjacent Bs pop off
//
//["A"]
//// Final result
//Examples
//finalResult(["B", "B", "A", "C", "A", "A", "C"]) ➞ ["A"]
//
//finalResult(["B", "B", "C", "C", "A", "A", "A"]) ➞ []
//
//finalResult(["C", "A", "C"]) ➞ ["C", "A", "C"]
//Notes
//If the first round has multiple poppable blocks, pop starting from the left.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(finalResult(['B', 'B', 'A', 'C', 'A', 'A', 'C']), ['A'])
//Test.assertSimilar(finalResult(['B', 'B', 'C', 'C', 'A', 'A', 'A']), [])
//Test.assertSimilar(finalResult(['C', 'A', 'C']), ['C', 'A', 'C'])
//Test.assertSimilar(finalResult(['C', 'A', 'A', 'C', 'B']), ['B'])
//Test.assertSimilar(finalResult(['C', 'C']), [])
//Test.assertSimilar(finalResult(['A', 'B', 'C', 'C', 'B', 'D', 'A']), ['A', 'D', 'A'])
//Test.assertSimilar(finalResult(['A', 'B', 'A', 'A', 'A', 'B', 'B']), ['A'])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Maximum Product of Digits

//tags: math,numbers

//url: https://edabit.com/challenge/79WaA8XtaACx8FND5

//Description:
//Write a function that returns all numbers less than or equal to N with the maximum product of digits.
//Examples
//maxProduct(8) ➞ [8]
//
//maxProduct(27) ➞ [27]
//
//maxProduct(211) ➞ [99, 199]
//
//maxProduct(9578) ➞ [8999]
//Notes
//Search for numbers in the range: [0, n].

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(maxProduct(8), [8])
//Test.assertSimilar(maxProduct(21), [9, 19])
//Test.assertSimilar(maxProduct(26), [26])
//Test.assertSimilar(maxProduct(27), [27])
//Test.assertSimilar(maxProduct(43), [39])
//Test.assertSimilar(maxProduct(90), [89])
//Test.assertSimilar(maxProduct(199), [99, 199])
//Test.assertSimilar(maxProduct(211), [99, 199])
//Test.assertSimilar(maxProduct(455), [399])
//Test.assertSimilar(maxProduct(917), [899])
//Test.assertSimilar(maxProduct(1578), [999])
//Test.assertSimilar(maxProduct(9578), [8999])
//Test.assertSimilar(maxProduct(11111), [9999])
//Test.assertSimilar(maxProduct(41111), [39999])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Matryoshka Dolls

//tags: arrays,logic,sorting,validation

//url: https://edabit.com/challenge/GSJ5RYWDQBiKnfpWP

//Description:
//Matryoshka dolls are traditionally wooden dolls that can be nested by fitting smaller dolls into larger ones. Suppose arrays can be nested similarly, placing smaller arrays into larger ones, in the following sense:
//Array A can be nested inside Array B if:
//min(array A) > min(array B)
//max(array A) < max(array B)
//For example, if A = [2, 3, 9, 5] and B = [10, 2, 1], then A can be nested inside B, since:
//min(A) = 2 > 1 = min(B) and
//max(A) = 9 < 10 = max(B)
//Create a function that returns true if every single sub-array inside an array can be nested Matroyshka style, and false otherwise.
//Examples
//matryoshka([[2, 2, 7], [3, 4, 5, 6], [4, 5]]) ➞ true
//// [4, 5] nested inside [3, 4, 5, 6], [3, 4, 5, 6] nested inside [2, 2, 7], etc.
//// Dolls nested from largest to smallest.
//
//matryoshka([[4, 5], [6, 3], [7, 6, 5, 4, 3, 2], [8, 1]]) ➞ true
//// Dolls nested from smallest to largest.
//
//matryoshka([[7, 1], [7, 6, 5, 4, 3, 2], [6, 3], [4, 5]]) ➞ false
//// [7, 1] and [7, 6, 5, 4, 3, 2] share the same max.
//// Second doll cannot be nested properly inside first doll.
//
//matryoshka([[1, 5], [2, 6], [3, 7]]) ➞ false
//// Elements are overlapping, cannot be nested.
//Notes
//Subarrays can be nested from smallest to largest or largest to smallest.
//Elements must be strictly nested - e.g. no two arrays can share either the same MAX or the same MIN (see example #3).
//Subarrays may not necessarily have unique elements (see example #1).
//Subarrays can be in any order (see example #2).

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(matryoshka([[1, 2, 3, 4, 5, 6, 7, 8], [2, 3, 4, 5, 6, 7], [3, 4, 5, 6], [4, 5]]), true)
//Test.assertEquals(matryoshka([[4, 5], [2, 6], [1, 9], [-5, 10, 11]]), true)
//Test.assertEquals(matryoshka([[3, 3], [4, 4], [5, 5, 5]]), false)
//Test.assertEquals(matryoshka([[1, 1, 1, 1, 2], [3, 2, 5, 0], [-1, 500]]), true)
//Test.assertEquals(matryoshka([[1, 8], [2, 3, 4, 5, 6, 7], [3, 6], [4, 5]]), true)
//Test.assertEquals(matryoshka([[6, 2], [9, 4]]), false, 'cannot be overlapping')
//Test.assertEquals(matryoshka([[7, 1], [7, 6, 5, 4, 3, 2], [6, 3], [4, 5]]), false, 'must be strictly nested')
//Test.assertEquals(matryoshka([[1, 5], [2, 6], [3, 7]]), false)
//Test.assertEquals(matryoshka([[5, 1], [4, 2], [4, 2]]), false, 'must be strictly nested')
//Test.assertEquals(matryoshka([[5, 1], [4, 2], [3, 3]]), true)
//Test.assertEquals(matryoshka([[5, 1], [4, 2], [3, 3, 3, 3, 3, 3, 3]]), true)
//Test.assertEquals(matryoshka([[1, 2, 3, 4], [2, 3, 4]]), false, 'must be strictly nested')
//Test.assertEquals(matryoshka([[1, 2, 3, 4], [2, 3]]), true)
//Test.assertEquals(matryoshka([[1, 50, 100], [3, 25, 75], [10, 40, 50], [25, 45]]), true)
//Test.assertEquals(matryoshka([[1, 50, 100], [3, 25, 75], [10, 40, 50], [25, 55]]), false, 'cannot be overlapping')

