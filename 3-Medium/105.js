

//title: Recursion: String Palindromes

//tags: recursion,strings,validation

//url: https://edabit.com/challenge/K595YtSroZHAAzvhW

//Description:
//Write a function that recursively determines if a string is a palindrome.
//Examples
//isPalindrome("abcba") ➞ true
//
//isPalindrome("b") ➞ true
//
//isPalindrome("") ➞ true
//
//isPalindrome("ad") ➞ false
//Notes
//An empty string counts as a palindrome.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(isPalindrome("abcba"), true)
//Test.assertEquals(isPalindrome("abbba"), true)
//Test.assertEquals(isPalindrome("abbbba"), true)
//Test.assertEquals(isPalindrome("abccdba"), false)
//Test.assertEquals(isPalindrome("abbaa"), false)
//Test.assertEquals(isPalindrome("abbbbb"), false)
//Test.assertEquals(isPalindrome("ad"), false)
//Test.assertEquals(isPalindrome("b"), true)
//Test.assertEquals(isPalindrome(""), true)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: GCD of Two Numbers

//tags: math,numbers,recursion

//url: https://edabit.com/challenge/3HPSLLjh8Go5QPq3C

//Description:
//Write a function that returns the greatest common divisor (GCD) of two integers.
//Examples
//gcd(32, 8) ➞ 8
//
//gcd(8, 12) ➞ 4
//
//gcd(17, 13) ➞ 1
//Notes
//Both values will be positive.
//The GCD is the largest factor that divides both numbers.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(gcd(32, 8), 8)
//Test.assertEquals(gcd(8, 12), 4)
//Test.assertEquals(gcd(17, 13), 1)
//Test.assertEquals(gcd(14, 7), 7)
//Test.assertEquals(gcd(32, 16), 16)
//Test.assertEquals(gcd(17, 100), 1)
//Test.assertEquals(gcd(55, 20), 5)
//Test.assertEquals(gcd(55, 22), 11)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Slidey Numbers

//tags: numbers,validation

//url: https://edabit.com/challenge/EmRbDHpexaHaLeWHo

//Description:
//A number is considered slidey if for every digit in the number, the next digit from that has an absolute difference of one. Check the examples below.
//Examples
//isSlidey(123454321) ➞ true
//
//isSlidey(54345) ➞ true
//
//isSlidey(987654321) ➞ true
//
//isSlidey(1123) ➞ false
//
//isSlidey(1357) ➞ false
//Notes
//A number cannot slide properly if there is a "flat surface" (example #4), or has gaps (example #5).
//All single digit numbers can be considered slidey numbers!

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(isSlidey(123454321), true)
//Test.assertEquals(isSlidey(54345), true)
//Test.assertEquals(isSlidey(987654321), true)
//Test.assertEquals(isSlidey(1123), false)
//Test.assertEquals(isSlidey(1357), false)
//Test.assertEquals(isSlidey(1), true)
//Test.assertEquals(isSlidey(0), true)
//Test.assertEquals(isSlidey(13578987), false)
//Test.assertEquals(isSlidey(232323232), true)
//Test.assertEquals(isSlidey(2323232322), false)
//Test.assertEquals(isSlidey(2343456567878), true)
//Test.assertEquals(isSlidey(999999999999), false)
//Test.assertEquals(isSlidey(223322332233), false)
//Test.assertEquals(isSlidey(7766554433), false)
//Test.assertEquals(isSlidey(32), true)
//Test.assertEquals(isSlidey(21), true)
//Test.assertEquals(isSlidey(33), false)
//Test.assertEquals(isSlidey(30), false)
//​
//// made by @Joshua Señoron

