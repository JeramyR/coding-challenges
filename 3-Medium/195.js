

//title: Tidy Hyperlinks

//tags: formatting,strings

//url: https://edabit.com/challenge/fJXBeSYwiPbd2Zn8Z

//Description:
//Using markdown, it's possible to format links such as https://edabit.com/challenges, into something tidier like this. Notice how the text "Go to the challenges!" appears when hovering over the link.
//This was achieved by using this code:
//[this](https://edabit.com/challenges "Go to the challenges!")
//Given the url, the new name and optionally the hoverText, return the tidied up hyperlink as a string.
//Examples
//tidyLink("https://edabit.com/challenges", "this", "Go to the challenges!") ➞ "[this](https://edabit.com/challenges "Go to the challenges!")"
//
//tidyLink("https://www.google.com", "Google", "Google Search") ➞ "[Google](https://www.google.com "Google Search")"
//
//tidyLink("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "Click Me!") ➞ "[Click Me!](https://www.youtube.com/watch?v=dQw4w9WgXcQ)"
//Notes
//Supply double quotes for the hover text.
//Keep in mind that some tests will not include an argument for hoverText.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(tidyLink('https://edabit.com/challenges', 'Challenges', 'Go to the challenges!'), '[Challenges](https://edabit.com/challenges "Go to the challenges!")')
//Test.assertEquals(tidyLink('https://www.google.com', 'Google', 'Google Search'), '[Google](https://www.google.com "Google Search")')
//Test.assertEquals(tidyLink('https://www.youtube.com/watch?v=dQw4w9WgXcQ', 'Click Me!'), '[Click Me!](https://www.youtube.com/watch?v=dQw4w9WgXcQ)')
//Test.assertEquals(tidyLink('https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet', 'Markdown Cheatsheet'), '[Markdown Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)')
//Test.assertEquals(tidyLink('https://www.python.org/', 'Python', 'Visit the Python Website!'), '[Python](https://www.python.org/ "Visit the Python Website!")')
//Test.assertEquals(tidyLink('https://www.youtube.com/watch?v=O2yPnnDfqpw', 'i just did a bad thing'), '[i just did a bad thing](https://www.youtube.com/watch?v=O2yPnnDfqpw)')
//Test.assertEquals(tidyLink('https://www.reddit.com/', 'Reddit', 'the front page of reddit'), '[Reddit](https://www.reddit.com/ "the front page of reddit")')
//// Author : Joshua Señoron

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Substituting the The

//tags: formatting,regex,strings

//url: https://edabit.com/challenge/sjETtrGP8hYoms7vh

//Description:
//Create a function that replaces "the" in the sentence with "an" or "a". Remember that if the next word begins with a vowel, use "an". In the case of a consonant, use "a".
//Examples
//replaceThe("the dog and the envelope") ➞ "a dog and an envelope"
//
//replaceThe("the boy ran at the wall") ➞ "a boy ran at a wall"
//
//replaceThe("the egg, the spoon and the espionage") ➞ "an egg, a spoon and an espionage"
//Notes
//Sentences will always be in lowercase.
//The last word of the sentence will never be "the".
//This won't cover edge cases such as "an hour" or "a unique thing" (since they sound differently to the rule).

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(replaceThe("the dog and the envelope"), "a dog and an envelope")
//Test.assertEquals(replaceThe("the boy ran at the wall"), "a boy ran at a wall")
//Test.assertEquals(replaceThe("the egg, the spoon and the espionage"), "an egg, a spoon and an espionage")
//Test.assertEquals(replaceThe("where is the spoon"), "where is a spoon")
//Test.assertEquals(replaceThe("the quick brown fox jumps over the lazy dog"), "a quick brown fox jumps over a lazy dog")
//Test.assertEquals(replaceThe("this edabit thing is quite neat"), "this edabit thing is quite neat")
//Test.assertEquals(replaceThe("the lion, witch and the wardrobe"), "a lion, witch and a wardrobe")
//Test.assertEquals(replaceThe("enter the correct password to access the epic program"), "enter a correct password to access an epic program")
//Test.assertEquals(replaceThe("the man blew the final candle out and all was dark"), "a man blew a final candle out and all was dark")
//Test.assertEquals(replaceThe("the ant ate the egg salad which the eel had been intending to eat over the weekend"), "an ant ate an egg salad which an eel had been intending to eat over a weekend")
//Test.assertEquals(replaceThe("this the random english sentence which you have to pass"), "this a random english sentence which you have to pass")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Rows of ASCII

//tags: algorithms,loops,strings

//url: https://edabit.com/challenge/2FrARSNih5YWMtLG5

//Description:
//Given a very long string of ASCII characters, split the string up into equal sized groups of size width. To properly display the image, join up the groups with the newline character \n and return the output string.
//See the miniature examples below for clarity!
//Examples
//formatAscii("0123456789", 2) ➞ "01\n23\n45\n67\n89"
//
//formatAscii("................................", 8) ➞ "........\n........\n........\n........"
//
//formatAscii("^^^^^^^^", 1) ➞ "^\n^\n^\n^\n^\n^\n^\n^"
//Notes
//Enjoy the (somewhat oversized) art in the Tests tab.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//// Credit goes to Joshua Senoron for these amazing artworks ;)
//​
//Test.assertEquals(formatAscii('#@#@#@#@', 2), '#@\n#@\n#@\n#@')
//Test.assertEquals(formatAscii('0123456789', 2), '01\n23\n45\n67\n89')
//Test.assertEquals(formatAscii('................................', 8), '........\n........\n........\n........')
//Test.assertEquals(formatAscii('^^^^^^^^', 1), '^\n^\n^\n^\n^\n^\n^\n^')
//​
//let art1 = "                                                  \n                 ....,,,,,,,,....                 \n               .,,,,,,,,,,,,,,,,,,.               \n             .,,........,,,,,,,,,,,,.             \n            .,.....:*,.,,,,,:?:,,,,,,,            \n           .,......S@*.,,,,,%@?,,,,,,,,           \n          .,.......S@*.,,,,,%@?,,,,,,.,.          \n          .........:*,.,,,,,:?:,,,,,,.,,          \n          .............,,,,,,,,,,,,,,.,,          \n          .,....,:......,,,,,,,.:;,,,.,.          \n          .,,...,??:.........,:*%;,,,,,.          \n           .,,,,,,+%S?+;;;;+?SS*,,,,,,.           \n            ..,,,,,,;*%SSSS%?;,,,,,,..            \n              ..,,,,,,,,,,,,,,::,,..              \n                 ...,,,,,,,,,,,..                 \n                     ........                     "
//Test.assertEquals(formatAscii('                                                                   ....,,,,,,,,....                                .,,,,,,,,,,,,,,,,,,.                            .,,........,,,,,,,,,,,,.                         .,.....:*,.,,,,,:?:,,,,,,,                       .,......S@*.,,,,,%@?,,,,,,,,                     .,.......S@*.,,,,,%@?,,,,,,.,.                    .........:*,.,,,,,:?:,,,,,,.,,                    .............,,,,,,,,,,,,,,.,,                    .,....,:......,,,,,,,.:;,,,.,.                    .,,...,??:.........,:*%;,,,,,.                     .,,,,,,+%S?+;;;;+?SS*,,,,,,.                       ..,,,,,,;*%SSSS%?;,,,,,,..                          ..,,,,,,,,,,,,,,::,,..                               ...,,,,,,,,,,,..                                      ........                     ', 50), art1)
//​
///**                                                   
//                 ....,,,,,,,,....                 
//               .,,,,,,,,,,,,,,,,,,.               
//             .,,........,,,,,,,,,,,,.             
//            .,.....:*,.,,,,,:?:,,,,,,,            
//           .,......S@*.,,,,,%@?,,,,,,,,           
//          .,.......S@*.,,,,,%@?,,,,,,.,.          
//          .........:*,.,,,,,:?:,,,,,,.,,          
//          .............,,,,,,,,,,,,,,.,,          
//          .,....,:......,,,,,,,.:;,,,.,.          
//          .,,...,??:.........,:*%;,,,,,.          
//           .,,,,,,+%S?+;;;;+?SS*,,,,,,.           
//            ..,,,,,,;*%SSSS%?;,,,,,,..            
//              ..,,,,,,,,,,,,,,::,,..              
//                 ...,,,,,,,,,,,..                 

