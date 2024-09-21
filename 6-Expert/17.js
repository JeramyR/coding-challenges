

//title: Doomsday Switches

//tags: algorithms,logic

//url: https://edabit.com/challenge/BDwRdXqg4qHADsADh

//Description:
//Deep inside a secure mountain facility there exists a group of switches arranged in a horizontal row. The rightmost switch can be flipped on or off at any time. Any other switch can be toggled only if the switch to its immediate right is turned on and all other switches to the right are turned off.
//All the switches are initially off. Improvise a function that accepts the number of switches, n, and returns the minimum number of switch toggles required to turn all the switches on.
//Examples
//switches(1) ➞ 1
//
//switches(2) ➞ 2
//
//switches(3) ➞ 5
//// Minimal sequence for 3 switches:
//// 000, 001, 011, 010, 110, 111
//
//switches(4) ➞ 10
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(switches(1), 1)
//Test.assertEquals(switches(2), 2)
//Test.assertEquals(switches(3), 5)
//Test.assertEquals(switches(4), 10)
//Test.assertEquals(switches(9), 341)
//Test.assertEquals(switches(12), 2730)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Bitwise Logical Negation

//tags: bit_operations,logic

//url: https://edabit.com/challenge/e639gt6uquCbgKxA2

//Description:
//Given a number (positive, negative, or 0), return the logical negation (as a 1 or 0) of that number. Do so using only bitwise operators:
//~, &, |, ^, >>, <<, +
//Any of these characters / constructs are not allowed:
//if, do, while, for, switch, -, ?, :, !, ||, &&, <, >, == , [,], functions
//Examples
//bitwiseLogicalNegation(1) ➞ 0
//
//bitwiseLogicalNegation(5) ➞ 0
//
//bitwiseLogicalNegation(0) ➞ 1
//
//bitwiseLogicalNegation(3) ➞ 0
//Notes
//Use as few operators as possible for more of a challenge.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//const disallowed = ['if','do','while','for','switch','-','?',':','!','||','&&','==','[',']','{','}','contains','indexOf','toString'];
//var fn = bitwiseLogicalNegation.toString();
//var content = (fn.includes('=>') ? fn : fn.slice(fn.indexOf("{") + 1, fn.lastIndexOf("}")));
//console.log("Given: " + content +"");
//for (var i = 0; i < disallowed.length; i++) {
//  console.log("Checking for illegal character '" + disallowed[i] + "'");
//  Test.assertEquals(content.includes(disallowed[i]), false);
//}
//console.log("Checking for external function calls");
//Test.assertEquals(/(\w+\(.*?\))/ig.test(content), false);
//console.log("Testing 0");
//Test.assertEquals(bitwiseLogicalNegation(0), 1);
//for (var i = 0; i < 512; i+=3) {
//  var a =  i + 1;
//  if (Math.random() < 0.1) a = 0;
//  console.log("Testing " + a + " and -" + a);
//  Test.assertEquals(bitwiseLogicalNegation(a), (!a ? 1 : 0));
//  a = -a;
//  Test.assertEquals(bitwiseLogicalNegation(a), (!a ? 1 : 0)); 
//}

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Nico Cipher

//tags: algorithms,cryptography,logic,strings

//url: https://edabit.com/challenge/MvjvGjhm8haxACN3o

//Description:
//In Nico Cipher, encoding is done by creating a numeric key and assigning each letter position of the message with the provided key.
//Create a function that takes two arguments, key and message, and returns the encoded message.
//There are some variations on the rules of encipherment. One version of the cipher rules are outlined below:
//message = "mubashirhassan"
//key = "crazy"
//
//nicoCipher(message, key) ➞ "bmusarhiahass n"
//Step 1: Assign numbers to sorted letters from the key:
//"crazy" = 23154
//Step 2: Assign numbers to the letters of the given message:
//2 3 1 5 4
//---------
//m u b a s
//h i r h a
//s s a n
//Step 3: Sort columns as per assigned numbers:
//1 2 3 4 5
//---------
//b m u s a
//r h i a h
//a s s   n
//Step 4: Return encoded message Rows-wise:
//eMessage = "bmusarhiahass n"
//Examples
//nicoCipher("mubashirhassan", "crazy") ➞ "bmusarhiahass n"
//
//nicoCipher("edabitisamazing", "matt") ➞ "deabtiismaaznig "
//
//nicoCipher("iloveher", "612345") ➞ "lovehir    e"
//Notes
//Keys will have alphabets or numbers only.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(nicoCipher("mubashirhassan", "crazy"), "bmusarhiahass n")
//Test.assertEquals(nicoCipher("edabitisamazing", "matt"), "deabtiismaaznig ")
//Test.assertEquals(nicoCipher("Pakistanisamazing", "airforce"), "Paniasktiinmsaazg       ");
//Test.assertEquals(nicoCipher("iloveher", "612345"), "lovehir    e")
//Test.assertEquals(nicoCipher("iwillquitsoon", "endisnear"), "iiiulwqtl os no   ")
//// Mubashir

