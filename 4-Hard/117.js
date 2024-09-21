

//title: Possible Palindrome

//tags: regex,strings,validation

//url: https://edabit.com/challenge/ej8abBJapqjz72mgF

//Description:
//Create a function that determines whether it is possible to build a palindrome from the characters in a string.
//Examples
//possiblePalindrome("acabbaa") ➞ true
//// Can make the following palindrome: "aabcbaa"
//
//possiblePalindrome("aacbdbc") ➞ true
//// Can make the following palindrome: "abcdcba"
//
//possiblePalindrome("aacbdb") ➞ false
//
//possiblePalindrome("abacbb") ➞ false
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(possiblePalindrome("acabbaa"), true)
//Test.assertEquals(possiblePalindrome("aacbdbc"), true)
//Test.assertEquals(possiblePalindrome("aacbdb"), false)
//Test.assertEquals(possiblePalindrome("abacbb"), false)
//Test.assertEquals(possiblePalindrome("abb"), true)
//Test.assertEquals(possiblePalindrome("bbb"), true)
//Test.assertEquals(possiblePalindrome("bbaa"), true)
//Test.assertEquals(possiblePalindrome("bbaacc"), true)
//Test.assertEquals(possiblePalindrome("bbaaccd"), true)
//Test.assertEquals(possiblePalindrome("bbaacd"), false)
//Test.assertEquals(possiblePalindrome("abc"), false)
//Test.assertEquals(possiblePalindrome("ab"), false)
//Test.assertEquals(possiblePalindrome("aabbccddef"), false)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Swap X and Y Coordinates

//tags: regex,strings

//url: https://edabit.com/challenge/tu8YN5dpi56vWozDS

//Description:
//Write a function that swaps the X and Y coordinates in a string.
//Examples
//swapXY("(1, 2), (3, 4)") ➞ "(2, 1), (4, 3)"
//
//swapXY("(11, 23), (43, 99)") ➞ "(23, 11), (99, 43)"
//
//swapXY("(-5, -3), (7, 4)") ➞ "(-3, -5), (4, 7)"
//Notes
//Some numbers have multiple digits.
//Some numbers will be negative.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(swapXY("(1, 2), (3, 4)"), "(2, 1), (4, 3)")
//Test.assertEquals(swapXY("(11, 23), (43, 99)"), "(23, 11), (99, 43)")
//Test.assertEquals(swapXY("(-5, -3), (7, 4)"), "(-3, -5), (4, 7)")
//Test.assertEquals(swapXY("(-1095, -321), (0, -88)"), "(-321, -1095), (-88, 0)")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Mirror Cipher

//tags: algorithms,cryptography,logic,strings

//url: https://edabit.com/challenge/pwYsCgk8g7ZjC3d7p

//Description:
//In Mirror Cipher, encoding is done by by switching message characters with its mirror opposite character of the key.
//Create a function that takes two arguments; a message and an optional key, and returns the encoded message.
//There are some variations on the rules of encipherment. One version of the cipher rules are outlined below:
//message = "Mubashir Hassan"
//key = "edabitisamazing"
//
//mirrorCipher(message, key) ➞ "tuzishar hissid"
//Step 1: Replace all characters of given message with mirror character in the key:
//M = t
//// "t" is the mirror character of "m".
//// (five characters from the left and right end respectively)
//
//u = u
//// "u" is not part of the key.
//
//b = z
//// "z" is the mirror character of "b".
//
//a = i, and so on ...
//Step 2: Return encoded message in lower case:
//"tuzishar hissid"
//If optional key is not given, consider the whole alphabet as a default (i.e. key = "abc..z").
//Examples
//mirrorCipher("Mubashir Hassan", "edabitisamazing") ➞ "tuzishar hissid"
//
//mirrorCipher("Matt MacPherson") ➞ "nzgg nzxksvihlm"
//
//mirrorCipher("Airforce is best", "pilot") ➞ "aorfirce os besp"
//Notes
//Ignore case of message and key, (e.g. "M" = "m").

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(mirrorCipher("Mubashir Hassan", "edabitisamazing"), "tuzishar hissid")
//Test.assertEquals(mirrorCipher("Matt MacPherson"), "nzgg nzxksvihlm")
//Test.assertEquals(mirrorCipher("Airforce is best", "pilot"), "aorfirce os besp")
//Test.assertEquals(mirrorCipher("hello"), "svool")
//Test.assertEquals(mirrorCipher("goodbye"), "tllwybv")
//Test.assertEquals(mirrorCipher("ngmlsoor"), "mtnohlli")
//Test.assertEquals(mirrorCipher("gsrh rh z hvxivg"), "this is a secret")
//Test.assertEquals(mirrorCipher("hello", "abcdefgh"), "adllo")
//Test.assertEquals(mirrorCipher("goodbye", ""), "goodbye")
//Test.assertEquals(mirrorCipher("this is a secret", " *"), "this*is*a*secret")
//// Mubashir

