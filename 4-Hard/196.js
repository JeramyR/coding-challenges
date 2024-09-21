

//title: Scrabble Scores (Part 1)

//tags: games,sorting

//url: https://edabit.com/challenge/Q54dLnhYKHBfc7aKp

//Description:
//Create a function that takes an array of words, scores the words based on the Scrabble scoring table below, and returns an array of the highest scoring words. The words on the resulting array should be in the same relative order as the original array.
//Letter	Points
//A	1
//B	3
//C	3
//D	2
//E	1
//F	4
//G	2
//H	4
//I	1
//J	8
//K	5
//L	2
//M	3
//N	1
//O	1
//P	3
//Q	10
//R	1
//S	1
//T	1
//U	1
//V	4
//W	4
//X	8
//Y	4
//Z	10
//Examples
//bestWords(["got", "test", "oh", "sat", "rents"]) ➞ ["oh", "rents"]
//
//bestWords(["digest", "divest", "verge", "honey", "money"]) ➞ ["honey"]
//
//bestWords(["berry", "whiz", "laughed", "ghetto", "psychic"]) ➞ ["whiz", "psychic"]
//Notes
//Input and output should both be arrays (see tests).

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(bestWords(['got','test','oh','sat','rents']),['oh','rents'])
//Test.assertSimilar(bestWords(['digest','divest','verge','honey','money']),['honey'])
//Test.assertSimilar(bestWords(['wig','jury','interim','size','hunter']),['jury'])
//Test.assertSimilar(bestWords(['berry','whiz','laughed','ghetto','psychic']),['whiz', 'psychic'])
//Test.assertSimilar(bestWords(['library','index','memory','ghosts','quit']),['library','index','memory','quit'])
//Test.assertSimilar(bestWords(['singing','swine','llamas','crunchy','creamy']),['crunchy'])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Matrix Multiplication

//tags: algebra,algorithms,arrays,math

//url: https://edabit.com/challenge/D5GzkngEBCHmAbcFd

//Description:
//The main condition of matrix multiplication is that the number of columns of the 1st matrix must equal to the number of rows of the 2nd one.
//As a result of multiplication you will get a new matrix that has the same quantity of rows as the 1st one has and the same quantity of columns as the 2nd one.
//For example if you multiply a matrix of "n" * "k" by "k" * "m" size you"ll get a new one of "n" * "m" dimensions.
//Create a function that takes 2 x 2D array (matrix A, matrixB) as an argument and returns a 2D array (matrix C). C = A*B.
//If the number of columns of the 1st matrix isn't equal to the number of rows of the 2nd: return "ERROR".
//Or the number of rows of the 1st matrix isn't equal to the number of columns of the 2nd: return "ERROR".
//Examples
//mul([
//  [1, 2, 3],
//  [4, 5, 6],
//  [7, 8, 9]
//], [
//  [1, 2, 3],
//  [4, 5, 6],
//  [7, 8, 9]
//]) ➞ [
//  [30, 36, 42],
//  [66, 81, 96],
//  [102, 126, 150]
//]
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(mul([[1,2,3],[4,5,6],[7,8,9]],[[1,2,3],[4,5,6],[7,8,9]]), [[30,36,42],[66,81,96],[102,126,150]])
//Test.assertEquals(mul([[1,2],[4,5]],[[1,2,3],[4,5,6],[7,8,9]]), "ERROR")
//Test.assertEquals(mul([[1,2,3],[4,5,6],[7,8,9]],[[1,2],[4,5]]), "ERROR")
//Test.assertSimilar(mul([[1,2,3]],[[1],[2],[3]]), [[14]])
//Test.assertSimilar(mul([[1],[2],[3]], [[1,2,3]]), [[1,2,3],[2,4,6],[3,6,9]])
//Test.assertSimilar(mul([[8,8],[8,8]],[[7,7],[7,7]]), [[112,112],[112,112]])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Flipping Bits

//tags: bit_operations,formatting

//url: https://edabit.com/challenge/Gnxxmwnis4JcZKmNN

//Description:
//You will be given a list of 32-bit unsigned integers. Flip all the bits 1 -> 0 and 0 -> 1 and return the result as an unsigned integer.
//Worked Example
//n = 4
//4 is 0100 in binary. We are working in 32 bits so:
//00000000000000000000000000000100 = 4
//11111111111111111111111111111011 = 4294967291
//return 4294967291
//Examples
//flippingBits(2147483647) ➞ 2147483648
//
//flippingBits(1) ➞ 4294967294
//
//flippingBits(4) ➞ 4294967291
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(flippingBits(2147483647), 2147483648)
//Test.assertEquals(flippingBits(1), 4294967294)
//Test.assertEquals(flippingBits(0), 4294967295)
//Test.assertEquals(flippingBits(802743475), 3492223820)
//Test.assertEquals(flippingBits(35601423), 4259365872)
//Test.assertEquals(flippingBits(123456), 4294843839)
//Test.assertEquals(flippingBits(4), 4294967291)

