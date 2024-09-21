

//title: Find Greatest Common Divisor of N Numbers

//tags: arrays,math,numbers

//url: https://edabit.com/challenge/iHLQC79hL9Yc78LAw

//Description:
//Create a function that takes an array of numbers and returns the greatest common factor of those numbers.
//Examples
//gcd([84, 70, 42, 56]) ➞ 14
//
//gcd([19, 38, 76, 133]) ➞ 19
//
//gcd([120, 300, 95, 425, 625]) ➞ 5
//Notes
//The GCD is the largest factor that divides all numbers in the array.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(gcd([84, 70, 42, 56]), 14)
//Test.assertEquals(gcd([19, 38, 76, 133]), 19)
//Test.assertEquals(gcd([120, 300, 95, 425, 625]), 5)
//Test.assertEquals(gcd([6, 18]), 6)
//Test.assertEquals(gcd([5, 15]), 5)
//Test.assertEquals(gcd([120, 105, 300, 95, 425, 625, 18]), 1)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Rolling Cipher

//tags: arrays,cryptography

//url: https://edabit.com/challenge/38kbFLBZdtCWSKHDZ

//Description:
//Write a function that accepts a string and an n and returns a cipher by rolling each character forward (n > 0) or backward (n < 0) n times.
//Note: Think of the letters as a connected loop, so rolling a backwards once will yield z, and rolling z forward once will yield a. If you roll 26 times in either direction, you should end up back where you started.
//Examples
//rollingCipher("abcd", 1) ➞ "bcde"
//
//rollingCipher("abcd", -1) ➞ "zabc"
//
//rollingCipher("abcd", 3) ➞ "defg"
//
//rollingCipher("abcd", 26) ➞ "abcd"
//Notes
//All letters are lower cased.
//No spacing.
//Each character is rotated the same number of times.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(rollingCipher('abcd', 1), 'bcde')
//Test.assertEquals(rollingCipher('abcd', -1), 'zabc')
//Test.assertEquals(rollingCipher('abcd', 3), 'defg')
//Test.assertEquals(rollingCipher('abcd', 25), 'zabc')
//Test.assertEquals(rollingCipher('abcd', 26), 'abcd')
//Test.assertEquals(rollingCipher('abcd', 27), 'bcde')
//Test.assertEquals(rollingCipher('abcd', 0), 'abcd')

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: The Day in Dutch

//tags: arrays,dates

//url: https://edabit.com/challenge/FaH2Zm5r9kaviiT39

//Description:
//Write a method that when passed a date as "dd mm yyyy" and returns the date's weekday name in the Dutch culture.
//Examples
//weekdayDutch("21 9 1970") ➞ "maandag"
//
//weekdayDutch("2 9 1945") ➞ "zondag"
//
//weekdayDutch("9 11 2001") ➞ "dinsdag"
//Notes
//Check the Resources tab for help.
//You can assume the specified date is valid.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(weekdayDutch("21 9 1970"), "maandag")
//Test.assertEquals(weekdayDutch("22 9 1970"), "dinsdag")
//Test.assertEquals(weekdayDutch("23 9 1970"), "woensdag")
//Test.assertEquals(weekdayDutch("24 9 1970"), "donderdag")
//Test.assertEquals(weekdayDutch("25 9 1970"), "vrijdag")
//Test.assertEquals(weekdayDutch("26 9 1970"), "zaterdag")
//Test.assertEquals(weekdayDutch("27 9 1970"), "zondag")
//Test.assertEquals(weekdayDutch("10 12 2050"), "zaterdag")
//Test.assertEquals(weekdayDutch("14 10 6010"), "donderdag")
//Test.assertEquals(weekdayDutch("31 1 1000"), "vrijdag")
//Test.assertEquals(weekdayDutch("8 12 2112"), "donderdag")
//Test.assertEquals(weekdayDutch("12 12 1212"), "woensdag")

