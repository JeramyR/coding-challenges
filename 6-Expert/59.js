

//title: Football Scores

//tags: algorithms,numbers,recursion

//url: https://edabit.com/challenge/dpHJQmZ7gJ7CrXHYJ

//Description:
//Scoring plays in American football count as either 2, 3, 6, 7, or 8 points. Write a function that has as it's argument a football score and returns the number of possible ways that score can be achieved. Order is not important.
//Examples
//football(4) ➞ 1
//// 2+2
//
//football(6) ➞ 3
//// 2+2+2 or 3+3 or 6
//
//football(7) ➞ 2
//// 2+2+3 or 7
//
//football(9) ➞ 4
//// 2+2+2+3 or 3+3+3 or 3+6 or 7+2
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(football(0), 1)
//Test.assertEquals(football(1), 0)
//Test.assertEquals(football(8), 4)
//Test.assertEquals(football(19), 18)
//Test.assertEquals(football(35), 103)
//Test.assertEquals(football(66), 804)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Permutations of an Expression

//tags: higher_order_functions,math,strings

//url: https://edabit.com/challenge/5Fw82qJT4MgASBfnB

//Description:
//In this challenge, you have to permutate an expression that includes three variable values a, b and c. You are given a set of three unique numbers to substitute for letters so there are six possible different expression variations, and you have to find which one returns the greater result.
//expr = "(a - b) * c" | nums = [1, 2, 3]
//
//Permutation #1 ➞ (1 - 2) * 3 = -3
//Permutation #2 ➞ (1 - 3) * 2 = -4
//Permutation #3 ➞ (2 - 1) * 3 = 3
//Permutation #4 ➞ (2 - 3) * 1 = -1
//Permutation #5 ➞ (3 - 1) * 2 = 4
//Permutation #6 ➞ (3 - 2) * 1 = 1
//
//// Permutation #5 returns the greater result.
//Given an expression string expr and an array of three numbers nums, the function must return a string with the complete notation of the expression that returns the greater result (adding the equal sign after the expression and the result after the equal sign). For the example above, the result will be:
//greaterPermutation("(a - b) * c", [1, 2, 3]) ➞ "(3 - 1) * 2 = 4"
//If an expression returns a float number as result, round it to the nearest hundredth.
//Examples
//greaterPermutation("(a - b) * c", [1, 2, 3]) ➞ "(3 - 1) * 2 = 4"
//
//greaterPermutation("a ** b - c", [2, 3, 1]) ➞ "3 ** 2 - 1 = 8"
//
//greaterPermutation("a % b + (c * 2)", [3, 1, 2]) ➞ "1 % 2 + (3 * 2) = 7"
//Notes
//Every given expression is designed to have just one permutation that returns a maximum result, don't worry about multiple matches.
//Expressions can contain known values besides the three variables (see example #3).
//Remember to round to the nearest hundredth if the result is a float number.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(greaterPermutation("(a - b) * c", [1, 2, 3]), "(3 - 1) * 2 = 4", "Example #1")
//Test.assertEquals(greaterPermutation("a ** b - c", [2, 3, 1]), "3 ** 2 - 1 = 8", "Example #2")
//Test.assertEquals(greaterPermutation("a % b + (c * 2)", [3, 1, 2]), "1 % 2 + (3 * 2) = 7", "Example #3")
//Test.assertEquals(greaterPermutation("(a / b) ** c", [6, 2, 4]), "(6 / 2) ** 4 = 81")
//Test.assertEquals(greaterPermutation("a ** b % c", [3, 7, 5]), "5 ** 3 % 7 = 6")
//Test.assertEquals(greaterPermutation("a % b - (c - 4)", [9, 6, 8]), "8 % 9 - (6 - 4) = 6")
//Test.assertEquals(greaterPermutation("(a ** 4) / (b ** 3) + (c * 10)", [60, 12, 3]), "(60 ** 4) / (3 ** 3) + (12 * 10) = 480120")
//Test.assertEquals(greaterPermutation("(a / 10) + (b ** 2) - (c / 3)", [7, 67, 19]), "(19 / 10) + (67 ** 2) - (7 / 3) = 4488.57")
//Test.assertEquals(greaterPermutation("((a * 2) % b) + 4 - (c + 6)", [11, 20, 5]), "((20 * 2) % 11) + 4 - (5 + 6) = 0")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Vigenere Cipher

//tags: arrays,cryptography,loops,strings

//url: https://edabit.com/challenge/KoCfaavqqCqThDC6P

//Description:
//The Vigenere Cipher is a poly-alphabetic substitution cipher that uses a set of shift ciphers and a keyword.
//One of the simplest ciphers is the Caesar/shift cipher, where each letter in the plaintext message is replaced by the letter a particular number of positions up, or downstream in the alphabet. Shift 1 Caesar cipher:
//																							
//A	B	C	D	E	F	G	H	I	J	K	L	M	N	O	P	Q	R	S	T	U	V	W	X	Y	Z
//B	C	D	E	F	G	H	I	J	K	L	M	N	O	P	Q	R	S	T	U	V	W	X	Y	Z	A
//The Vigenere table is generated by doing a shift-1 Caesar cipher as many times as the number of letters in the alphabet (English alphabet, for this challenge).
//																							
//A	B	C	D	E	F	G	H	I	J	K	L	M	N	O	P	Q	R	S	T	U	V	W	X	Y	Z
//B	C	D	E	F	G	H	I	J	K	L	M	N	O	P	Q	R	S	T	U	V	W	X	Y	Z	A
//C	D	E	F	G	H	I	J	K	L	M	N	O	P	Q	R	S	T	U	V	W	X	Y	Z	A	B
//D	E	F	G	H	I	J	K	L	M	N	O	P	Q	R	S	T	U	V	W	X	Y	Z	A	B	C
//E	F	G	H	I	J	K	L	M	N	O	P	Q	R	S	T	U	V	W	X	Y	Z	A	B	C	D
//F	G	H	I	J	K	L	M	N	O	P	Q	R	S	T	U	V	W	X	Y	Z	A	B	C	D	E
//G	H	I	J	K	L	M	N	O	P	Q	R	S	T	U	V	W	X	Y	Z	A	B	C	D	E	F
//H	I	J	K	L	M	N	O	P	Q	R	S	T	U	V	W	X	Y	Z	A	B	C	D	E	F	G
//I	J	K	L	M	N	O	P	Q	R	S	T	U	V	W	X	Y	Z	A	B	C	D	E	F	G	H
//J	K	L	M	N	O	P	Q	R	S	T	U	V	W	X	Y	Z	A	B	C	D	E	F	G	H	I
//K	L	M	N	O	P	Q	R	S	T	U	V	W	X	Y	Z	A	B	C	D	E	F	G	H	I	J
//L	M	N	O	P	Q	R	S	T	U	V	W	X	Y	Z	A	B	C	D	E	F	G	H	I	J	K
//M	N	O	P	Q	R	S	T	U	V	W	X	Y	Z	A	B	C	D	E	F	G	H	I	J	K	L
//N	O	P	Q	R	S	T	U	V	W	X	Y	Z	A	B	C	D	E	F	G	H	I	J	K	L	M
//O	P	Q	R	S	T	U	V	W	X	Y	Z	A	B	C	D	E	F	G	H	I	J	K	L	M	N
//P	Q	R	S	T	U	V	W	X	Y	Z	A	B	C	D	E	F	G	H	I	J	K	L	M	N	O
//Q	R	S	T	U	V	W	X	Y	Z	A	B	C	D	E	F	G	H	I	J	K	L	M	N	O	P
//R	S	T	U	V	W	X	Y	Z	A	B	C	D	E	F	G	H	I	J	K	L	M	N	O	P	Q
//S	T	U	V	W	X	Y	Z	A	B	C	D	E	F	G	H	I	J	K	L	M	N	O	P	Q	R
//T	U	V	W	X	Y	Z	A	B	C	D	E	F	G	H	I	J	K	L	M	N	O	P	Q	R	S
//U	V	W	X	Y	Z	A	B	C	D	E	F	G	H	I	J	K	L	M	N	O	P	Q	R	S	T
//V	W	X	Y	Z	A	B	C	D	E	F	G	H	I	J	K	L	M	N	O	P	Q	R	S	T	U
//W	X	Y	Z	A	B	C	D	E	F	G	H	I	J	K	L	M	N	O	P	Q	R	S	T	U	V
//X	Y	Z	A	B	C	D	E	F	G	H	I	J	K	L	M	N	O	P	Q	R	S	T	U	V	W
//Y	Z	A	B	C	D	E	F	G	H	I	J	K	L	M	N	O	P	Q	R	S	T	U	V	W	X
//Z	A	B	C	D	E	F	G	H	I	J	K	L	M	N	O	P	Q	R	S	T	U	V	W	X	Y
//To encipher the message, first, spaces and punctuation are removed to create the plaintext. All characters are transformed to uppercase to match the table:
//message = "Soylent Green is people."
//
//plaintext = "SOYLENTGREENISPEOPLE"
//A keyword is chosen, in this case, "spoiler" and repeated as many times as necessary to match the length of the plaintext:
//key = "SPOILERSPOILERSPOILE"
//The last "r" is dropped as the plaintext length has been reached.
//The plaintext and key are lined up. To encipher the 1st letter, a search is done across the first row to find the column of the plaintext letter, in this case "S", in the 19th column. Then a search is done down the first column to locate the row of the 1st key letter, in this case also "S", in the 19th row. The letter at the intersection between column 19 and row 19, "K", will be the 1st letter in the ciphertext.
//The 2nd plaintext letter "O" is at column 15, while the 2nd key letter "P" is at row 16. The letter at the intersection is "D". And so on.
//																		
//Plaintext	S	O	Y	L	E	N	T	G	R	E	E	N	I	S	P	E	O	P	L	E
//Key	S	P	O	I	L	E	R	S	P	O	I	L	E	R	S	P	O	I	L	E
//Ciphertext	K	D	M	T	P	R	K	Y	G	S	M	Y	M	J	H	T	C	X	W	I
//Create a function that takes two strings: a message or ciphertext, and a keyword. Return the ciphertext if the input is a message, or the deciphered text (without spaces or punctuation) if the input is in ciphertext.
//Examples
//vigenere("Soylent Green is people.", "spoiler") ➞ "KDMTPRKYGSMYMJHTCXWI"
//
//vigenere("Darth Vader is Luke's father.", "spoiler") ➞ "VPFBSZRVTFQDPLCTGNLXYWG"
//
//vigenere("HMRSSAIEKLSAXQILCCAC", "python") ➞ "SOYLENTGREENISPEOPLE"
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//const t1 = "Soylent Green is people."
//const t2 = 'SOYLENTGREENISPEOPLE'
//const t3 = "Darth Vader is Luke's father."
//const t4 = 'TYLERDURDENWASHIMALLALONG'
//const t5 = 'Malcolm Crowe was dead the whole time.'
//const t6 = 'THEYWERETHEGHOSTSHAUNTINGTHEIROWNHOUSE'
//​
//Test.assertEquals(vigenere(t1, 'spoiler'), 'KDMTPRKYGSMYMJHTCXWI')
//Test.assertEquals(vigenere('HMRSSAIEKLSAXQILCCAC', 'python'), t2)
//Test.assertEquals(vigenere(t3, 'spoiler'), 'VPFBSZRVTFQDPLCTGNLXYWG')
//Test.assertEquals(vigenere('LNZMCVJFLPFLOASABOTWSACVR', 'spoil'), t4)
//Test.assertEquals(vigenere(t5, 'edabit'), 'QDLDWEQFRPEXADSEMTHWHFEASOEUQFI')
//Test.assertEquals(vigenere('FVZGAWDSOPIYTCNBWZMIIBMFSHCMMJAKIPSMES', 'movies'), t6)

