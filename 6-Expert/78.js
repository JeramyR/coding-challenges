

//title: Affine Cipher Encrypt

//tags: cryptography,language_fundamentals,math

//url: https://edabit.com/challenge/BspzBJjTCKRfgf3aM

//Description:
//Create a function that takes a string of plain text (English alphabet) all in lowercase, encryption function, and converts the plain text into ciphertext using the affine encryption function.
//Encryption Function
//In the affine cipher, the letters of an alphabet of size m are first mapped to the integers in the range 0 … m − 1. It then uses modular arithmetic to transform the integer that each plaintext letter corresponds to into another integer that corresponds to a ciphertext letter.
//The encryption function for a single letter is E(x)=(ax+b)mod m where modulus m is the size of the alphabet and a and b are the keys of the cipher. The value a must be chosen such that a and m are coprime.
//The alphabet is going to be the letters a through z and will have the corresponding values a=0, b=1, c=2, d=3 ... z=25.
//Examples
//affineEncrypt("salakpur", "(x+2)%26") ➞ "ucncmrwt"
//// a = 1 , b = 2
//// Encryption function = "(x+2)%26"
//// gcd(1, 26) = 1
//// Therefore, we apply the encryption function for the letters.
//
//affineEncrypt("dang", "(2x+7)%26") ➞ "2 and 26 are not coprime"
//// a = 2, b = 7
//// gcd(2, 26) = 2
//Notes
//For the problem 1 =< a <= 11 , 1 =< b <= 9 , m = 26
//Create your own gcd function.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(affineEncrypt("salakpur", "(x+2)%26"), "ucncmrwt")
//Test.assertEquals(affineEncrypt("birjung", "(5x+7)%26"), "mvoadul")
//Test.assertEquals(affineEncrypt("dang", "(2x+7)%26"), "2 and 26 are not coprime")
//Test.assertEquals(affineEncrypt("biratnagar", "(3x+1)%26"), "ezabgobtba")
//Test.assertEquals(affineEncrypt("mustang", "(7x+5)%26"), "lpbifsv")
//Test.assertEquals(affineEncrypt("kathmandu", "(6x+8)%26"), "6 and 26 are not coprime")
//Test.assertEquals(affineEncrypt("pokhara", "(x+3)%26"), "srnkdud")
//Test.assertEquals(affineEncrypt("bhaktapur", "(9x+2)%26"), "lncorchaz")
//Test.assertEquals(affineEncrypt("janakpur", "(11x+9)%26"), "ejwjpsvo")
//Test.assertEquals(affineEncrypt("janakpur", "(10x+5)%26"), "10 and 26 are not coprime")
//Test.assertEquals(affineEncrypt("itahari", "(3x+2)%26"), "ahcxcba")
//Test.assertEquals(affineEncrypt("lalitpur", "(4x+7)%26"), "4 and 26 are not coprime")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Complete the Pattern

//tags: strings

//url: https://edabit.com/challenge/2yntEvmdPaSSe7p3H

//Description:
//You will be given a string that is made up of some repeated pattern of characters. However, one of the characters in the string will be missing and replaced by an underscore. Write a function that returns the missing character.
//Examples
//completePattern("ABCABCA_CAB") ➞ "B"
//
//completePattern("_ABAABAABA") ➞ "A"
//
//completePattern("X+X*X+X*X+X_") ➞ "*"
//Notes
//The pattern will be repeated in full at least twice, though one of those repetitions may contain the missing character.
//The string may end in the middle of a repetition of the pattern.
//The pattern will never contain an underscore.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

////Credit goes to sigma144 for the original version of the challenge in Python. ;)
//Test.assertEquals(completePattern("ABCABCA_CAB"), "B")
//Test.assertEquals(completePattern("_ABAABAABA"), "A")
//Test.assertEquals(completePattern("X+X*X+X*X+X_"), "*")
//Test.assertEquals(completePattern("X+X*X_X*X+X"), "+")
//Test.assertEquals(completePattern("ABCDEABC_E"), "D")
//Test.assertEquals(completePattern("AB_DEABCDE"), "C")
//Test.assertEquals(completePattern("ABCDE_BCDE"), "A")
//Test.assertEquals(completePattern("ABCD_ABCDE"), "E")
//Test.assertEquals(completePattern("X_XXXX"), "X")
//Test.assertEquals(completePattern("XYX_YXYXXYXY"), "X")
//Test.assertEquals(completePattern(".-.--...-.--..._."), "-")
//Test.assertEquals(completePattern("1_"), "1")
//Test.assertEquals(completePattern("_1"), "1")
//Test.assertEquals(completePattern("121_"), "2")
//Test.assertEquals(completePattern("_212"), "1")
//Test.assertEquals(completePattern("12_21"), "1")
//Test.assertEquals(completePattern("1_1312131"), "2")
//Test.assertEquals(completePattern("121_121412131214"), "3")
//Test.assertEquals(completePattern("12131214121_1214"), "3")
//Test.assertEquals(completePattern("1213121_12131214"), "4")
//Test.assertEquals(completePattern("121312141213121_"), "4")
//Test.assertEquals(completePattern("1213121_121312141"), "4")
//Test.assertEquals(completePattern("121312141213121_1"), "4")
//Test.assertEquals(completePattern("1213121412131214_"), "1")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Next Palindromic Date

//tags: algorithms,dates

//url: https://edabit.com/challenge/zTXoduQpFgN9EpSSK

//Description:
//The 2nd of February 2020 is a palindromic date in both dd/mm/yyyy and mm/dd/yyyy format (02/02/2020).
//February 2, 2020 is the only 2-digit month and day palindromic date that will occur in the 21st century. The next occurrence of a 2-digit month and day palindromic date will be December 12, 2121, which is exactly 101 years from the last occurrence. 101 is also a palindrome. Between the years, 3030 and 9090, exactly 1010 years separate each occurrence of a 2-digit month and day palindromic date.
//Given a date in mm/dd/yyyy format and the number of years to scan, return an array containing palindromic dates in mm/dd/yyyy format that are palindromic in both dd/mm/yyyy and mm/dd/yyyy format.
//Examples
//palindromicDates("01/01/2020", 100) ➞ ["02/02/2020"]
//
//palindromicDates("01/01/2020", 102) ➞ ["02/02/2020", "12/12/2121"]
//
//palindromicDates("01/01/9000", 200) ➞ ["09/09/9090"]
//Notes
//This is an adaptation of the Palindromic Date Challenge.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(palindromicDates("01/01/2020", 100), ["02/02/2020"])
//Test.assertSimilar(palindromicDates("01/01/2020", 102), ["02/02/2020","12/12/2121"])
//Test.assertSimilar(palindromicDates("01/01/9000", 200), ["09/09/9090"])
//Test.assertSimilar(palindromicDates("01/01/10000", 1000), ["10/10/10101"])
//Test.assertSimilar(palindromicDates("01/01/16000", 100), ["06/06/16060"])

