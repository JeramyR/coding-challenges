

//title: C*ns*r*d Str*ngs

//tags: algorithms,formatting,strings

//url: https://edabit.com/challenge/5S5HBQW6zZp8eH3eL

//Description:
//Someone has attempted to censor my strings by replacing every vowel with a *, l*k* th*s. Luckily, I've been able to find the vowels that were removed.
//Given a censored string and a string of the censored vowels, return the original uncensored string.
//Example
//uncensor("Wh*r* d*d my v*w*ls g*?", "eeioeo") ➞ "Where did my vowels go?"
//
//uncensor("abcd", "") ➞ "abcd"
//
//uncensor("*PP*RC*S*", "UEAE") ➞ "UPPERCASE"
//Notes
//The vowels are given in the correct order.
//The number of vowels will match the number of * characters in the censored string.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(uncensor('Wh*r* d*d my v*w*ls g*?', 'eeioeo'), 'Where did my vowels go?')
//Test.assertEquals(uncensor('abcd', ''), 'abcd', 'Works with no vowels.')
//Test.assertEquals(uncensor('*PP*RC*S*', 'UEAE'), 'UPPERCASE', 'Works with uppercase')
//Test.assertEquals(uncensor('Ch**s*, Gr*mm*t -- ch**s*', 'eeeoieee'), 'Cheese, Grommit -- cheese', 'Works with * at the end')
//Test.assertEquals(uncensor('*l*ph*nt', 'Eea'), 'Elephant', 'Works with * at the start')

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Basic Arithmetic Operations on a String Number

//tags: arrays,control_flow,strings

//url: https://edabit.com/challenge/T5MRvCGsZgk5QzCcZ

//Description:
//Create a function to perform basic arithmetic operations that includes addition, subtraction, multiplication and division on a string number (e.g. "12 + 24" or "23 - 21" or "12 / 12" or "12 * 21").
//Here, we have 1 followed by a space, operator followed by another space and 2. For the challenge, we are going to have only two numbers between 1 valid operator. The return value should be a number.
//eval() is not allowed. In case of division, whenever the second number equals "0" return -1.
//For example:
//"15 / 0"  ➞ -1
//Examples
//arithmeticOperation("12 + 12") ➞ 24 // 12 + 12 = 24
//
//arithmeticOperation("12 - 12") ➞ 24 // 12 - 12 = 0
//
//arithmeticOperation("12 * 12") ➞ 144 // 12 * 12 = 144
//
//arithmeticOperation("12 / 0") ➞ -1 // 12 / 0 = -1
//Notes
//All the inputs are only integers.
//The operators are * - + and /.
//Hint: Think about the single space that appears before and after the arithmetic operator.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(arithmeticOperation("12 + 12"), 24)
//Test.assertEquals(arithmeticOperation("22 - 12"), 10)
//Test.assertEquals(arithmeticOperation("100 * 12"), 1200)
//Test.assertEquals(arithmeticOperation("120 / 10"), 12)
//Test.assertEquals(arithmeticOperation("122 / 0"), -1)
//Test.assertEquals(arithmeticOperation("10 * 20"), 200)
//Test.assertEquals(arithmeticOperation("10 - 10"), 0)
//Test.assertEquals(arithmeticOperation("10 - 12"), -2)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: White Spaces Between Lower and Uppercase Letters

//tags: formatting,regex,strings

//url: https://edabit.com/challenge/ew9dry9RzoaeiTzwX

//Description:
//Write a function that inserts a white space between every instance of a lower character followed immediately by an upper character.
//Examples
//insertWhitespace("SheWalksToTheBeach") ➞ "She Walks To The Beach"
//
//insertWhitespace("MarvinTalksTooMuch") ➞ "Marvin Talks Too Much"
//
//insertWhitespace("TheGreatestUpsetInHistory") ➞ "The Greatest Upset In History"
//Notes
//Each word in the phrase will be at least two characters long.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(insertWhitespace("SheWalksToTheBeach"), "She Walks To The Beach")
//Test.assertEquals(insertWhitespace("MarvinTalksTooMuch"), "Marvin Talks Too Much")
//Test.assertEquals(insertWhitespace("HopelesslyDevotedToYou"), "Hopelessly Devoted To You")
//Test.assertEquals(insertWhitespace("EvenTheBestFallDownSometimes"), "Even The Best Fall Down Sometimes")
//Test.assertEquals(insertWhitespace("TheGreatestUpsetInHistory"), "The Greatest Upset In History")

