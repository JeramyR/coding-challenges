

//title: Salt Water

//tags: algebra,loops

//url: https://edabit.com/challenge/SCqzoFHxzMM2LFQ2m

//Description:
//A tank has pure water flowing into it at 10 l/min. The contents of the tank are kept thoroughly mixed, and the contents flow out at 10 l/min. Salt is added to the tank at a rate of 0.1 kg/min. Initially, the tank contains 10 kg of salt in 100 l of water.
//Devise a function whose argument is time t. The function returns the amount of salt (kg) left in the tank after t minutes rounded to 3 decimal places.
//Examples
//salt(0) ➞ 10.0
//
//salt(5) ➞ 6.459
//
//salt(10) ➞ 4.311
//
//salt(120) ➞ 1.0
//Notes
//Assume the added salt has a negligible effect on the volume of the liquid in the tank.
//Keep in mind the amount of salt in the tank is changing continuously.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(salt(0), 10.0)
//Test.assertEquals(salt(5), 6.459)
//Test.assertEquals(salt(10), 4.311)
//Test.assertEquals(salt(15), 3.008)
//Test.assertEquals(salt(30), 1.448)
//Test.assertEquals(salt(60), 1.022)
//Test.assertEquals(salt(120), 1.0)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Double Dot Product

//tags: algebra,arrays,geometry,math

//url: https://edabit.com/challenge/zuEnZDWgwe4tToavm

//Description:
//In this challenge, you'll write a function that calculates the double dot product of a pair of dyadics. What's a dyadic? And what's the double dot product?
//First, let's talk about (Euclidean) vectors. A vector is a geometric object. Its existence doesn't depend on the choice of the coordinate system, or indeed on choosing a coordinate system at all!
//But coordinate systems are useful, and in particular, it's often convenient to represent a vector as a matrix of its Cartesian components, either a single column or a single row. We'll use the notation [v] to indicate the column-matrix representation of a vector v (called a column-vector). To indicate its row-matrix representation (called a row-vector), we'll use the transpose and write [v]ᵀ.
//(We'll work only in three-dimensional space, so each vector has three Cartesian components: x, y, and z.)
//If we matrix-multiply a row-vector with a column-vector (in that order), the result is a 1-by-1 matrix whose single element is the dot product of the two vectors:
//a • b = Tr([a]ᵀ[b])
//(where we've used the trace). Note that the dot product is commutative (i.e., a • b = b • a).
//If we matrix-multiply in the opposite order (column-vector first), the result is a 3-by-3, the matrix representation of a geometric object called a dyad. To notate the dyad formed by vectors a and b, we'll write ab, and we'll notate its matrix-representation [ab]. So:
//[ab] = [a][b]ᵀ
//Note that unlike the dot product, the dyadic product is not commutative, and in fact:
//[ab] = [ba]ᵀ
//Now we can talk about dyadics. Dyadics are dyads and sums of dyads. Every dyadic can be represented as a square-matrix of its 9 components. For example, the dyadic (ab + cd):
//[ab + cd] = [ab] + [cd] = [a][b]ᵀ + [c][d]ᵀ
//The double dot product of a pair of dyadics is an operation that outputs a scalar (a number). For a pair of dyads, it's defined like this:
//(ab):(cd) = (a • c)(b • d)
//This definition can be extended to arbitrary dyadics by putting the dyadics in sum-of-dyads form and distributing:
//(ab + cd):(ef + gh) = (ab):(ef) + (ab):(gh) + (cd):(ef) + (cd):(gh)
//Your task is to write a function that takes as parameters the 3-by-3 matrix-representations of a pair of dyadics (each will be a two-dimensional array with numbers for elements) and returns their double dot product (as a number).
//The hard part here isn't the coding so much as it is coming up with a matrix-representation of the double dot product that works for arbitrary dyadics. (You might be able to arrive at the answer by trial and error, but try to work it out mathematically!) If you're stuck, see the Comments for a hint.
//Examples
//doubleDot(
//  [
//    [265, -385, -115],
//    [-741, -148, 916],
//    [235, -410, 433]
//  ],
//  [
//    [440, -359, 453],
//    [-453, -254, 169],
//    [-314, 403, -331]
//  ]
//) ➞ 348446
//doubleDot(
//  [
//    [709, -422, 612],
//    [761, 495, 852],
//    [-473, 614, 443]
//  ],
//  [
//    [-305, 345, 858],
//    [931, -747, -422],
//    [855, -156, 109]
//  ]
//) ➞ -309469
//doubleDot(
//  [
//    [-545, -641, -533],
//    [130, 871, 699],
//    [712, -375, 164]
//  ],
//  [
//    [157, -647, -631],
//    [381, -956, -223],
//    [878, -589, -155]
//  ]
//) ➞ 547053
//Notes
//There's a second species of double dot product, which for dyads is defined like this:
//(ab) • • (cd) = (a • d)(b • c)
//Dyadics aren't used very often these days. In the more powerful framework of tensor analysis, dyadics are contravariant rank-2 tensors, the dyadic product is a special case of the tensor product, and both species of double dot product are tensor contractions (as is the normal dot product between vectors, by the way).

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(doubleDot(
//  [
//    [265, -385, -115],
//    [-741, -148, 916],
//    [235, -410, 433]
//  ],
//  [
//    [440, -359, 453],
//    [-453, -254, 169],
//    [-314, 403, -331]
//  ]
//), 348446)
//​
//Test.assertEquals(doubleDot(
//  [
//    [709, -422, 612],
//    [761, 495, 852],
//    [-473, 614, 443]
//  ],
//  [
//    [-305, 345, 858],
//    [931, -747, -422],
//    [855, -156, 109]
//  ]
//), -309469)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Chess Pieces

//tags: algorithms,games,logic,validation

//url: https://edabit.com/challenge/XyLRwKkiZnaAKAbXM

//Description:
//Create a function that takes the name of a chess piece, its position and a target position. The function should return true if the piece can move to the target and false if it can't.
//The possible inputs are "Pawn", "Knight", "Bishop", "Rook", "Queen" and "King".
//Examples
//canMove("Rook", "A8", "H8") ➞ true
//
//canMove("Bishop", "A7", "G1") ➞ true
//
//canMove("Queen", "C4", "D6") ➞ false
//Notes
//Do not include pawn capture moves and en passant.
//Do not include castling.
//Remember to include pawns' two-square move on the second rank!
//Look for patterns in the movement of the pieces.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(canMove("Pawn", "A5", "A6"), true)
//Test.assertEquals(canMove("Pawn", "G2", "G4"), true)
//Test.assertEquals(canMove("Pawn", "C6", "D7"), false)
//Test.assertEquals(canMove("Knight", "F5", "E3"), true)
//Test.assertEquals(canMove("Knight", "F6", "E5"), false)
//Test.assertEquals(canMove("Bishop", "B4", "E7"), true)
//Test.assertEquals(canMove("Bishop", "B6", "F5"), false)
//Test.assertEquals(canMove("Rook", "A8", "H8"), true)
//Test.assertEquals(canMove("Rook", "A8", "H7"), false)
//Test.assertEquals(canMove("Queen", "A8", "H1"), true)
//Test.assertEquals(canMove("Queen", "A6", "H4"), false)
//Test.assertEquals(canMove("King", "C4", "D5"), true)
//Test.assertEquals(canMove("King", "B7", "B5"), false)

