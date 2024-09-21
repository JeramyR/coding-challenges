

//title: Thisify ⁠— Convert Arguments to Properties

//tags: objects,regex,strings

//url: https://edabit.com/challenge/5uWRWmCwPcBg2ff2v

//Description:
//Consider a constructor function, foo:
//const foo = function(x, y, z)
//{
//  this.x = x
//  this.y = y
//  this.z = z
//}
//foo takes three parameters, x, y, z. Upon an instance of foo being created, the instance receives the properties x, y, z.
//const bar = new foo(1, 2, 3)
//// bar.x = 1
//// bar.y = 2
//// bar.z = 3
//The goal of this challenge is to accomplish an equivalent result without assigning the properties explicitly. Instead, create a function thisify to do it automatically and dynamically.
//Here is what foo should look like:
//const foo = function(x, y, z)
//{
//  thisify(this, Object.values(arguments))
//}
//// same as before!
//
//const bar = new foo(1, 2, 3)
//// bar.x = 1
//// bar.y = 2
//// bar.z = 3
//thisify will take two arguments:
///**
// * @param {Object} instance - instance of the class
// * @param {Array} passed - arguments (values) passed to parameters of constructor
// *
// * @returns {void(0)}
// */
//
//function thisify(instance, passed)
//{
//  // your code here
//}
//When run, thisify is expected to assign properties with the same name and value as the argument. For example, if the x argument is given a value of 2, the object should have a property "x" with a value of 2.
//Examples
//const rectangle = function(l, w, color)
//{
//  thisify(this, Object.values(arguments))
//}
//
//console.log(new rectangle(5, 10, "Red")) ➞
//{
//  l: 5,
//  w: 10,
//  color: "Red"
//}
//
//console.log(new rectangle(3, 4)) ➞
//{
//  l: 3,
//  w: 4,
//  color: undefined
//}
//Notes
//If any arguments are left undefined, assign them undefined.
//Use the Resources section if you need help.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//const rectangle = function(l, w, color)
//{
//  thisify(this, Object.values(arguments));
//}
//const person = function(firstName, lastName, birthYear)
//{
//  thisify(this, Object.values(arguments));
//}
//const rects = [
//  new rectangle(12, 30, "Blue"),
//  new rectangle(20, 5, "Red"),
//  new rectangle(0, 0)
//].map(a => Object.assign({}, a));
//const people = [
//  new person("John", "Proctor", 1989),
//  new person("William", "Hobbs", 1900),
//  new person("Sarah", "Good", 1999)
//].map(a => Object.assign({}, a));
//​
//Test.assertSimilar(rects[0], {l: 12, w:30, color: "Blue"});
//Test.assertSimilar(rects[1], {l: 20, w:5, color: "Red"});
//Test.assertSimilar(rects[2], {l: 0, w:0, color: undefined});
//Test.assertSimilar(people[0], {firstName: "John", lastName: "Proctor", birthYear: 1989});
//Test.assertSimilar(people[1], {firstName: "William", lastName: "Hobbs", birthYear: 1900});
//Test.assertSimilar(people[2], {firstName: "Sarah", lastName: "Good", birthYear: 1999});

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: King`s Escape

//tags: arrays,games

//url: https://edabit.com/challenge/k4LM8AkMFdu9e6cGr

//Description:
//Create a function that takes a chess position (black pieces to move next) and returns the status of the black king.
//The black king is safe if no white pieces threaten it.
//The black king is checked if one white piece threatens it and the king can escape to an unthreatened square.
//The black king is double-checked if two white pieces threaten it and the king can escape to an unthreatened square.
//The black king is checkmated if it is attacked and cannot escape.
//White pieces are represented with uppercase letters: Pawn P, Knight N, Bishop B, Rook R, Queen Q, King K. Black pieces are represented with lowercase letters.
//The program must return the possible escape positions (if they exist) as an array of tuples (x, y) being x, the horizontal position of the escape square, and y the vertical position of the escape square. The escape positions must be sorted by x and then y, always from the lowest value to the highest value.
//The chessboard will always have 8 rows and 8 columns. 0 <= x < 8 and 0 <= y < 8. The white queen starts at (7, 3).
//A stalemate occurs when a player, on their turn, has no legal moves, and the player's king is not in check. Stalemate is not a possibility in this challenge.
//Examples
//chess([
//  [" ", " ", " ", " ", " ", "r", " ", " "],
//  [" ", " ", " ", " ", " ", " ", " ", "q"],
//  [" ", " ", " ", " ", " ", " ", "N", " "],
//  ["k", " ", " ", " ", " ", " ", " ", " "],
//  [" ", "P", " ", "P", " ", " ", " ", " "],
//  [" ", " ", "P", " ", " ", "Q", " ", " "],
//  ["B", " ", " ", " ", " ", " ", " ", " "],
//  [" ", " ", " ", "R", " ", " ", "K", " "],
//])
//  ➞ "The black king is checked. Possible escape positions: [(2, 0), (2, 1), (3, 1), (4, 0)]"
//
//chess([
//  [" ", " ", " ", " ", " ", "r", " ", " "],
//  [" ", " ", " ", " ", " ", " ", "k", "q"],
//  [" ", " ", " ", " ", " ", " ", "N", " "],
//  [" ", " ", " ", " ", " ", " ", " ", " "],
//  [" ", "P", " ", " ", " ", " ", " ", " "],
//  [" ", " ", " ", " ", " ", "Q", " ", " "],
//  ["B", " ", " ", " ", " ", " ", " ", " "],
//  [" ", " ", " ", "R", " ", " ", "K", " "],
//])
//  ➞ "The black king is safe."
//
//chess([
//  [" ", " ", " ", " ", " ", "r", " ", " "],
//  [" ", " ", " ", " ", " ", " ", " ", "q"],
//  [" ", " ", " ", " ", " ", " ", "N", " "],
//  [" ", " ", " ", " ", " ", " ", " ", " "],
//  [" ", "P", " ", "k", " ", " ", " ", " "],
//  [" ", " ", " ", " ", " ", "Q", " ", " "],
//  ["B", " ", " ", " ", " ", " ", " ", " "],
//  [" ", " ", " ", "R", " ", " ", "K", " "],
//])
//  ➞ "The black king is checkmated."
//
//chess([
//  [" ", " ", " ", " ", " ", " ", " ", " "],
//  [" ", " ", " ", " ", " ", " ", "k", " "],
//  [" ", " ", " ", " ", " ", " ", " ", " "],
//  [" ", " ", " ", " ", "B", "p", " ", " "],
//  [" ", " ", " ", "q", " ", " ", " ", " "],
//  [" ", " ", " ", " ", " ", " ", " ", " "],
//  ["p", " ", " ", " ", " ", " ", " ", " "],
//  [" ", " ", " ", " ", " ", "K", "R", " "],
//])
//  ➞ "The black king is double-checked. Possible escape positions: [(0, 5), (1, 5), (1, 7), (2, 7)]"
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(chess([
//  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
//  [' ', ' ', ' ', ' ', ' ', ' ', 'k', ' '],
//  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
//  [' ', ' ', ' ', ' ', 'B', 'p', ' ', ' '],
//  [' ', ' ', ' ', 'q', ' ', ' ', ' ', ' '],
//  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
//  ['p', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
//  [' ', ' ', ' ', ' ', ' ', 'K', 'R', ' '],
//]), 'The black king is double-checked. Possible escape positions: [(0, 5), (1, 5), (1, 7), (2, 7)]')
//​
//Test.assertEquals(chess([
//  [' ', ' ', ' ', ' ', ' ', 'r', ' ', ' '],
//  [' ', ' ', ' ', ' ', ' ', ' ', ' ', 'q'],
//  [' ', ' ', ' ', ' ', ' ', ' ', 'N', ' '],
//  ['k', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
//  [' ', 'P', ' ', ' ', ' ', ' ', ' ', ' '],
//  [' ', ' ', 'P', ' ', ' ', 'Q', ' ', ' '],
//  ['B', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
//  [' ', ' ', ' ', 'R', ' ', ' ', 'K', ' '],
//]), 'The black king is checked. Possible escape positions: [(2, 0), (2, 1), (3, 1), (4, 0)]')
//​
//Test.assertEquals(chess([
//  [' ', ' ', ' ', ' ', ' ', 'r', ' ', ' '],
//  [' ', ' ', ' ', ' ', ' ', ' ', 'k', 'q'],

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: RSA Cryptography

//tags: algorithms,cryptography,math

//url: https://edabit.com/challenge/YgqdCFTdeDW2CHWsr

//Description:
//RSA cryptography is a method by which two parties can securely share information without having to exchange any "secret codes" that would allow an attacker to compromise security. The process revolves around picking two prime numbers, p and q, which are used to calculate public and private keys. The public key is used to encrypt a message, but is useless at decryption.
//Your task is to create two functions:
//Encryption
//RSAEncrypt(txt, n, k) ➞ ctxt
//txt is the plaintext to be encrypted. The two numbers n and k are the public key. ctxt is the ciphertext.
//Since the algorithm only works for numbers, txt is actually a number formed by concatenating the ASCII values of the uppercase letters in the message. For example, "cab" would be represented as 676566 (ord("C")==67). During decryption, the process would be reversed in order to retrieve the letters.
//Decryption
//RSADecrypt(ctxt, p, q) ➞ txt
//ctxt is the ciphertext (actually a number). p, q are the aforementioned primes.
//The Resource that I have chosen, "The RSA Algorithm Explained Using Simple Pencil and Paper Method", should give you enough information to make these two functions. You will find that when you determine the value of k, several choices are available. For the purpose of this challenge, you are to pick the smallest possible value of k, as was done in the Resource.
//Examples
//RSAEncrypt("bad",891877236769,5) ➞ 493825093669
//RSADecrypt(493825093669,900007,990967) ➞ "BAD"
//
//RSAEncrypt("bad boy",5664239440446477941, 7) ➞ 605656648845318147
//RSADecrypt(605656648845318147,3255706151,1739788291) ➞ "BAD BOY"
//Notes
//You may find that determining the value of the private key, j, is difficult when p and q are large. Mathematically speaking, j is the modular inverse of k(mod z).
//See the added Resources.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(RSAEncrypt("a", 31313, 7), 8037)
//Test.assertEquals(RSADecrypt(8037, 173, 181), "A")
//​
//Test.assertEquals(RSAEncrypt("bad", 891877236769, 5), 493825093669)
//Test.assertEquals(RSADecrypt(493825093669, 900007, 990967), "BAD")
//​
//Test.assertEquals(RSAEncrypt("bad boy", 5664239440446477941,  7), 605656648845318147)
//Test.assertEquals(RSADecrypt(605656648845318147, 3255706151, 1739788291), "BAD BOY")
//​
//Test.assertEquals(RSAEncrypt("The walls have ears", 901968578881865096604401774794258157339470998415824428329, 5), 213558654196086874712600284265576607076346122238380187931)
//Test.assertEquals(RSADecrypt(213558654196086874712600284265576607076346122238380187931, 36397637320634481157899636463, 24780965064743989300134401383), "THE WALLS HAVE EARS")

