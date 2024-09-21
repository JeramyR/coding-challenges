

//title: Backspace Attack

//tags: regex,scope,strings

//url: https://edabit.com/challenge/Gfed7xePtBzXLQewA

//Description:
//Suppose a hash # represents the BACKSPACE key being pressed. Write a function that transforms a string containing # into a string without any #.
//Examples
//erase("he##l#hel#llo") ➞ "hello"
//
//erase("major# spar##ks") ➞ "majo spks"
//
//erase("si###t boy") ➞ "t boy"
//
//erase("####") ➞ ""
//Notes
//In addition to characters, backspaces can also remove whitespaces.
//If the number of hashes exceeds the previous characters, remove those previous characters entirely (see example #3).
//If there only exist backspaces, return an empty string (see example #4).

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(erase("he##l#hel#llo"), "hello")
//Test.assertEquals(erase("major# spar##ks"), "majo spks" )
//Test.assertEquals(erase("si###t boy"), "t boy")
//Test.assertEquals(erase("motion #sick"), "motionsick")
//Test.assertEquals(erase("m#oti#o#n sick##ne#ss##"), "otn sin")
//Test.assertEquals(erase("courz#i#age"), "courage")
//Test.assertEquals(erase("aris##### c#r#ti#c"), " tc")
//Test.assertEquals(erase("beauty##"), "beau")
//Test.assertEquals(erase("beauty#"), "beaut")
//Test.assertEquals(erase("b#"), "")
//Test.assertEquals(erase("####"), "")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Generating Words from Names

//tags: arrays,strings,validation

//url: https://edabit.com/challenge/tGehcXPRmrepQPGQW

//Description:
//Write a function that returns true if a given name can generate an array of words.
//Examples
//anagram("Justin Bieber", ["injures", "ebb", "it"]) ➞ true
//
//anagram("Natalie Portman", ["ornamental", "pita"]) ➞ true
//
//anagram("Chris Pratt", ["chirps", "rat"]) ➞ false
//// Not all letters are used 
//
//anagram("Jeff Goldblum", ["jog", "meld", "bluffs"]) ➞ false
//// "s" does not exist in the original name
//Notes
//Each letter in the name may only be used once.
//All letters in the name must be used.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(anagram("Justin Bieber", ["injures", "ebb", "it"]), true)
//Test.assertEquals(anagram("Natalie Portman", ["ornamental", "pita"]), true)
//Test.assertEquals(anagram("Emma Watson", ["mows", "meant", "a"]), true)
//Test.assertEquals(anagram("Daniel Radcliffe", ["clarified", "elf", "and"]), true)
//Test.assertEquals(anagram("Tom Hiddleston", ["tenths", "mood", "lid"]), true)
//Test.assertEquals(anagram("Blake Lively", ["key", "veal", "bill"]), true)
//Test.assertEquals(anagram("Ryan Reynolds", ["yonder", "sly", "ran"]), true)
//Test.assertEquals(anagram("Kristen Stewart", ["trinkets", "war", "set"]), true)
//Test.assertEquals(anagram("Chris Pratt", ["chirps", "rat"]), false)
//Test.assertEquals(anagram("Jeff Goldblum", ["jog", "meld", "bluffs"]), false)
//Test.assertEquals(anagram("Taylor Swift", ["stratify", "ow"]), false)
//Test.assertEquals(anagram("Adam Levine", ["medieval", "man"]), false)
//Test.assertEquals(anagram("Blake Shelton", ["betoken", "all", "she"]), false)
//Test.assertEquals(anagram("Miley Cyrus", ["lyric", "my", "suer"]), false)
//Test.assertEquals(anagram("Matt Damon", ["madman"]), false)
//Test.assertEquals(anagram("Graham Norton", ["graham", "not", "or"]), false)
//Test.assertEquals(anagram("Graham Norton", ["graham", "not", "or"]), false)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Look and Say Numbers

//tags: algorithms,math,numbers

//url: https://edabit.com/challenge/iKdJfMrxkWsBcEKEL

//Description:
//Given an integer, return a new integer according to the rules below:
//Split the number into groups of two digit numbers. If the number has an odd number of digits, return "invalid".
//For each group of two digit numbers, concatenate the last digit to a new string the same number of times as the value of the first digit.
//Return the result as an integer.
//lookAndSay(3132) ➞ 111222
//
//// By reading the number digit by digit, you get three "1" and three "2".
//// Therefore, you put three ones and three two's together.
//// Remember to return an integer.
//Examples
//lookAndSay(95) ➞ 555555555
//
//lookAndSay(1213141516171819) ➞ 23456789
//
//lookAndSay(120520) ➞ 200
//
//lookAndSay(231) ➞ "invalid"
//Notes
//Note that the number 0 can be included (see example #3).
//Check the Resources tab for a TED-Ed video for extra clarity.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(lookAndSay(95), 555555555)
//Test.assertEquals(lookAndSay(1213141516171819), 23456789)
//Test.assertEquals(lookAndSay(231), 'invalid')
//Test.assertEquals(lookAndSay(3132), 111222)
//Test.assertEquals(lookAndSay(313317), 1113337)
//Test.assertEquals(lookAndSay(786497), 8888888444444777777777)
//Test.assertEquals(lookAndSay(591173), 9999913333333)
//Test.assertEquals(lookAndSay(404094), 444444444)
//Test.assertEquals(lookAndSay(473536), 7777555666)
//Test.assertEquals(lookAndSay(880440), 888888880000)
//Test.assertEquals(lookAndSay(724767), 22222227777777777)
//Test.assertEquals(lookAndSay(830926), 3333333366)
//Test.assertEquals(lookAndSay(665956), 6666669999966666)
//Test.assertEquals(lookAndSay(441746), 444476666)
//Test.assertEquals(lookAndSay(888322), 888888883333333322)
//Test.assertEquals(lookAndSay(614193), 1111111111333333333)
//Test.assertEquals(lookAndSay(733257), 333333322277777)
//Test.assertEquals(lookAndSay(689301), 888888333333333)
//Test.assertEquals(lookAndSay(614318), 11111133338)
//Test.assertEquals(lookAndSay(936667), 333333333666666777777)
//Test.assertEquals(lookAndSay(890917), 999999997)
//Test.assertEquals(lookAndSay(417528), 1111555555588)
//Test.assertEquals(lookAndSay(830756), 3333333366666)
//Test.assertEquals(lookAndSay(297807), 998888888)
//Test.assertEquals(lookAndSay(285728), 887777788)

