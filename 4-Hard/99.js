

//title: Longest Common Ending

//tags: loops,strings

//url: https://edabit.com/challenge/FGuBhmmvXgkvvTQHc

//Description:
//Write a function that returns the longest common ending between two strings.
//Examples
//longestCommonEnding("multiplication", "ration") ➞ "ation"
//
//longestCommonEnding("potent", "tent") ➞ "tent"
//
//longestCommonEnding("skyscraper", "carnivore") ➞ ""
//Notes
//Return an empty string if there exists no common ending.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(longestCommonEnding("pitiful", "beautiful"), "tiful")
//Test.assertEquals(longestCommonEnding("truck", "trick"), "ck")
//Test.assertEquals(longestCommonEnding("vote", "asymptote"), "ote")
//Test.assertEquals(longestCommonEnding("multiplication", "ration"), "ation")
//Test.assertEquals(longestCommonEnding("potent", "tent"), "tent")
//Test.assertEquals(longestCommonEnding("skyscraper", "carnivore"), "")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Bird Names to Four Letter Bird Codes

//tags: arrays,regex,strings

//url: https://edabit.com/challenge/MDixWSYxH5JZX3xo3

//Description:
//In the world of birding there are four-letter codes for the common names of birds. These codes are created by some simple rules:
//If the bird's name has only one word, the code takes the first four letters of that word.
//If the name is made up of two words, the code takes the first two letters of each word.
//If the name is made up of three words, the code is created by taking the first letter from the first two words and the first two letters from the third word.
//If the name is four words long, the code uses the first letter from all the words.
//There are other ways codes are created, but this challenge will only use the four rules listed above.
//In this challenge you will write a function that takes an array of strings of common bird names and create the codes for those names based on the rules above. The function will return an array of codes in the same order in which the input names were presented.
//Examples:
//birdCode(["Black-Capped Chickadee", "Common Tern"]) ➞ ["BCCH", "COTE"]
//
//birdCode(["American Redstart", "Northern Cardinal"]) ➞ ["AMRE","NOCA"]
//
//birdCode(["Bobolink", "American White Pelican"]) ➞ ["BOBO","AWPE"]
//Notes
//The four-letter codes in the returned array should be in UPPER CASE.
//If a common name has a hyphen/dash, it should be considered a space.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(birdCode(["Common Tern", "Black-Capped Chickadee"]), ["COTE","BCCH"])
//Test.assertSimilar(birdCode(["American Redstart", "Northern Cardinal", "Pine Grosbeak", "Barred Owl", "Starling", "Cooper's Hawk", "Pigeon"]), ["AMRE","NOCA","PIGR","BAOW","STAR","COHA","PIGE"])
//Test.assertSimilar(birdCode(["Great Crested Flycatcher", "Bobolink", "American White Pelican", "Red-Tailed Hawk", "Eastern Screech Owl", "Blue Jay"]), ["GCFL","BOBO","AWPE","RTHA","ESOW","BLJA"])
//Test.assertSimilar(birdCode(["Black-Crowned Night Heron", "Northern Mockingbird", "Eastern Meadowlark", "Dark-Eyed Junco", "Red-Bellied Woodpecker"]), ["BCNH","NOMO","EAME","DEJU","RBWO"])
//Test.assertSimilar(birdCode(["Scarlet Tanager", "Great Blue Heron", "Eastern Phoebe", "American Black Duck", "Mallard", "Canvasback", "Merlin", "Ovenbird"]), ["SCTA","GBHE","EAPH","ABDU","MALL","CANV","MERL","OVEN"])
//Test.assertSimilar(birdCode(["Fox Sparrow", "White-Winged Crossbill", "Veery", "American Coot", "Sora", "Northern Rough-Winged Swallow", "Purple Martin"]), ["FOSP","WWCR","VEER","AMCO","SORA","NRWS","PUMA"])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Replace Every Nth Instance of a Character

//tags: algorithms,formatting,regex,strings

//url: https://edabit.com/challenge/FSJcckvq4rry72xCw

//Description:
//Create a function that takes a string and replaces every nth instance of oldChar with newChar. Your function will have four parameters:
//str — The original input text to be processed.
//nth — The nth instance to be replaced.
//oldChar — The character being replaced.
//newChar — The character replacing oldChar.
//In other words, if str is "abababa", nth is 3, oldChar is "a" and newChar is "Z", you would replace the 3rd insrtance of "a" with "Z", returning "ababZba".
//Examples
//replaceNth("A glittering gem is not enough.", 0, "o", "-")
//➞ "A glittering gem is not enough."
//
//replaceNth("Vader said: No, I am your father!", 2, "a", "o")
//➞ "Vader soid: No, I am your fother!"
//
//replaceNth("Writing a list of random sentences is harder than I initially thought it would be.", 2, "i", "3")
//➞ "Writ3ng a list of random sentences 3s harder than I in3tially thought 3t would be."
//Notes
//If nth is 0, negative or larger than instances of oldChar, return the original string.
//Tests are case sensitive.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(replaceNth("Sometimes it is better to just walk away from things and go back to them later when you’re in a better frame of mind.", 3, "e", "_"), "Sometimes it is b_tter to just walk away from things and go back to them lat_r when you’re in a b_tter frame of mind.")
//Test.assertEquals(replaceNth("The clock within this blog and the clock on my laptop are 1 hour different from each other.", 1, "o", "@"), "The cl@ck within this bl@g and the cl@ck @n my lapt@p are 1 h@ur different fr@m each @ther.")
//Test.assertEquals(replaceNth("Lets all be unique together until we realise we are all the same.", 4, "l", "#"), "Lets all be unique together until we rea#ise we are all the same.")
//Test.assertEquals(replaceNth("Sometimes, all you NEED to do is completely make an ass of yourself and laugh it off to realise that LIFE isn’t so bad AFTER all.", 2, "E", "x"), "Sometimes, all you NExD to do is completely make an ass of yourself and laugh it off to realise that LIFE isn’t so bad AFTxR all.", "Tests are case sensative.")
//Test.assertEquals(replaceNth("Is it free?", 100, "e", "Y"), "Is it free?")
//Test.assertEquals(replaceNth("A glittering gem is not enough.", 0, "o", "-"), "A glittering gem is not enough.")
//Test.assertEquals(replaceNth("Please wait outside of the house.", -3, "s", "s"), "Please wait outside of the house.")
//Test.assertEquals(replaceNth("Joe made the sugar cookies; Susan decorated them.", 5, "e", "*"), "Joe made the sugar cookies; Susan d*corated them.")
//Test.assertEquals(replaceNth("Writing a list of random sentences is harder than I initially thought it would be.", 2, "i", "3"), "Writ3ng a list of random sentences 3s harder than I in3tially thought 3t would be.")
//Test.assertEquals(replaceNth("The book is in front of the table.", 3, "f", "K"), "The book is in front of the table.")

