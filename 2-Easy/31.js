

//title: Prefixes vs. Suffixes

//tags: regex,strings,validation

//url: https://edabit.com/challenge/pBp7v6zkQvNa9jByh

//Description:
//Create two functions: isPrefix(word, prefix-) and isSuffix(word, -suffix).
//isPrefix should return true if it begins with the prefix argument.
//isSuffix should return true if it ends with the suffix argument.
//Otherwise return false.
//Examples
//isPrefix("automation", "auto-") ➞ true
//
//isSuffix("arachnophobia", "-phobia") ➞ true
//
//isPrefix("retrospect", "sub-") ➞ false
//
//isSuffix("vocation", "-logy") ➞ false
//Notes
//The prefix and suffix arguments have dashes - in them.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(isPrefix("automation", "auto-"), true)
//Test.assertEquals(isPrefix("superfluous", "super-"), true)
//Test.assertEquals(isPrefix("oration", "mega-"), false)
//Test.assertEquals(isPrefix("retrospect", "sub-"), false)
//Test.assertEquals(isSuffix("arachnophobia", "-phobia"), true)
//Test.assertEquals(isSuffix("rhinoplasty", "-plasty"), true)
//Test.assertEquals(isSuffix("movement", "-scope"), false)
//Test.assertEquals(isSuffix("vocation", "-logy"), false)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Hiding the Card Number

//tags: formatting,numbers,strings

//url: https://edabit.com/challenge/rtpvAqFT3koqMoFCJ

//Description:
//Write a function that takes a credit card number and only displays the last four characters. The rest of the card number must be replaced by ************.
//Examples
//cardHide("1234123456785678") ➞ "************5678"
//
//cardHide("8754456321113213") ➞ "************3213"
//
//cardHide("35123413355523") ➞ "**********5523"
//Examples
//Ensure you return a string.
//The length of the string must remain the same as the input.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(cardHide("1234123456785678"), "************5678")
//Test.assertEquals(cardHide("8754456321113213"), "************3213")
//Test.assertEquals(cardHide("35123413355523"), "**********5523")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Detect Browser from User Agent

//tags: regex,strings

//url: https://edabit.com/challenge/PbEuBFLRpzgWQwuvY

//Description:
//You need to detect what browser is being used. Create a function that takes a string (browser identifier) and returns the browser name.
//Examples
//detectBrowser("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.87 Safari/537.36") ➞ "Google Chrome"
//
//detectBrowser("Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:61.0) Gecko/20100101 Firefox/61.0") ➞ "Mozilla Firefox"
//
//detectBrowser("Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; .NET4.0C; .NET4.0E; .NET CLR 2.0.50727; .NET CLR 3.0.30729; .NET CLR 3.5.30729; rv:11.0) like Gecko") ➞ "Internet Explorer"
//Notes
//All test case user agents are valid.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//var uAgt =["Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.0; Trident/5.0)",
//"Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 5.1)",
//"Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.0)",
//"Microsoft Internet Explorer/4.0b1 (Windows 95)",
//"Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.2; SV1; .NET CLR 1.1.4322)",
//"Mozilla/4.0 (compatible; MSIE 5.5; Windows NT 5.0)",
//"Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Win64; x64; Trident/6.0)",
//"Mozilla/1.22 (compatible; MSIE 2.0; Windows 95)",
//"Mozilla/4.0 (compatible; MSIE 7.0b; Windows NT 5.1)",
//"Mozilla/1.22 (compatible; MSIE 1.5; Windows NT)",
//"Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.0; WOW64; Trident/4.0)",
//"Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.0; Win64; x64; Trident/4.0)",
//"Mozilla/4.0 (compatible; MSIE 5.23; Mac_PowerPC)",
//"Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.0; SLCC1; .NET CLR 2.0.50727)",
//"Mozilla/5.0 (Windows NT 5.1; rv:5.0.1) Gecko/20100101 Firefox/5.0.1",
//"Mozilla/5.0 (Windows NT 6.1; rv:5.0) Gecko/20100101 Firefox/5.02",
//"Mozilla/5.0 (Windows NT 6.1; WOW64; rv:5.0) Gecko/20100101 Firefox/5.0",
//"Mozilla/5.0 (Windows NT 6.1; rv:2.0b7pre) Gecko/20100921 Firefox/4.0b7pre",
//"Mozilla/5.0 (X11; U; Linux x86; fr-fr) Gecko/20100423 Ubuntu/10.04 (lucid) Firefox/3.6.3 AppleWebKit/532.4 Safari/532.4",
//"Mozilla/5.0 (Windows; U; Windows NT 5.1; fr; rv:1.9.0.11) Gecko/2009060215 Firefox/3.0.11",
//"Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.9.1.3) Gecko/20090824 Firefox/3.5.3 GTB5",
//"Mozilla/5.0 (X11; U; Linux x86_64; en-US; rv:1.9.0.19; aggregator:Spinn3r (Spinn3r 3.1); http://spinn3r.com/robot) Gecko/2010040121 Firefox/3.0.19",
//"Mozilla/5.0 (Windows NT 6.1; WOW64; rv:19.0) Gecko/20100101 Firefox/19.0",
//"Mozilla/5.0 (Windows NT 6.1; WOW64; rv:15.0) Gecko/20100101 Firefox/15.0.1",
//"Mozilla/5.0 (Windows NT 5.1; rv:19.0) Gecko/20100101 Firefox/19.0",

