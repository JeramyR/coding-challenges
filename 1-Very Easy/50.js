

//title: Fix the Broken Code

//tags: bugs,language_fundamentals,sorting

//url: https://edabit.com/challenge/zct73iCmH3zZ4dcDY

//Description:
//A student learning JavaScript was trying to make a function that sorts all the letters of a word, but their code is broken, and they can't figure out why.
//Spot and fix the error(s) in the code to make the function work.
//Examples
//sortWord("dcba") ➞ "abcd"
//
//sortWord("Unpredictable") ➞ "Uabcdeeilnprt"
//
//sortWord("pneumonoultramicroscopicsilicovolcanoconiosis") ➞ "aacccccceiiiiiilllmmnnnnooooooooopprrsssstuuv"
//Notes
//Input is a word.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(sortWord("dcba"), "abcd")
//Test.assertEquals(sortWord("pneumonoultramicroscopicsilicovolcanoconiosis"), "aacccccceiiiiiilllmmnnnnooooooooopprrsssstuuv")
//Test.assertEquals(sortWord("Unpredictable"), "Uabcdeeilnprt", "Capital letters should come first!")
//Test.assertEquals(sortWord("a"), "a")
//Test.assertEquals(sortWord("ability"), "abiilty")
//Test.assertEquals(sortWord("able"), "abel")
//Test.assertEquals(sortWord("about"), "abotu")
//Test.assertEquals(sortWord("above"), "abeov")
//Test.assertEquals(sortWord("accept"), "accept")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Invert Colors

//tags: algebra,data_structures

//url: https://edabit.com/challenge/5oyDEx24RC8qJxDRk

//Description:
//Create a function that inverts the rgb values of a given tuple.
//Examples
//colorInvert([255, 255, 255]) ➞ [0, 0, 0]
//// (255, 255, 255) is the color white.
//// The opposite is (0, 0, 0), which is black.
//
//colorInvert([0, 0, 0]) ➞ [255, 255, 255]
//
//colorInvert([165, 170, 221]) ➞ [90, 85, 34]
//Notes
//255 is the max value of a single color channel.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(colorInvert([165, 170, 119]), [90, 85, 136])
//Test.assertSimilar(colorInvert([165, 170, 136]), [90, 85, 119])
//Test.assertSimilar(colorInvert([165, 170, 153]), [90, 85, 102])
//Test.assertSimilar(colorInvert([165, 170, 170]), [90, 85, 85])
//Test.assertSimilar(colorInvert([165, 170, 187]), [90, 85, 68])
//Test.assertSimilar(colorInvert([165, 170, 204]), [90, 85, 51])
//Test.assertSimilar(colorInvert([165, 170, 221]), [90, 85, 34])
//Test.assertSimilar(colorInvert([165, 170, 238]), [90, 85, 17])
//Test.assertSimilar(colorInvert([165, 180, 0]), [90, 75, 255])
//Test.assertSimilar(colorInvert([165, 180, 17]), [90, 75, 238])
//Test.assertSimilar(colorInvert([165, 180, 34]), [90, 75, 221])
//Test.assertSimilar(colorInvert([165, 180, 51]), [90, 75, 204])
//Test.assertSimilar(colorInvert([165, 180, 68]), [90, 75, 187])
//Test.assertSimilar(colorInvert([165, 180, 85]), [90, 75, 170])
//Test.assertSimilar(colorInvert([165, 180, 102]), [90, 75, 153])
//Test.assertSimilar(colorInvert([0, 0, 0]), [255, 255, 255])
//Test.assertSimilar(colorInvert([0, 0, 17]), [255, 255, 238])
//Test.assertSimilar(colorInvert([0, 0, 34]), [255, 255, 221])
//Test.assertSimilar(colorInvert([0, 0, 51]), [255, 255, 204])
//Test.assertSimilar(colorInvert([0, 0, 68]), [255, 255, 187])
//Test.assertSimilar(colorInvert([240, 250, 153]), [15, 5, 102])
//Test.assertSimilar(colorInvert([240, 250, 170]), [15, 5, 85])
//Test.assertSimilar(colorInvert([240, 250, 187]), [15, 5, 68])
//Test.assertSimilar(colorInvert([240, 250, 204]), [15, 5, 51])
//Test.assertSimilar(colorInvert([240, 250, 221]), [15, 5, 34])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: The Fifth Argument

//tags: conditions,language_fundamentals

//url: https://edabit.com/challenge/ATFL4pNx3KTJzinAm

//Description:
//Create a function that has some arguments and returns the type of the fifth argument. In case the arguments were less than 5, return "Not enough arguments".
//Examples
//fifth(1, 2, 3, 4, 5) ➞ "number"
//
//fifth("a", 2, 3, true, "five") ➞ "string"
//
//fifth() ➞ "Not enough arguments"
//Notes
//Be warned that ES6 arrow functions (const myFunc = ()=>...) do not have their own arguments object.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(fifth('a',2,3,4,5),'number')
//Test.assertEquals(fifth('zero','one','two','three','four','five'),"string")
//Test.assertEquals(fifth(1,2,3,4,false),"boolean")
//Test.assertEquals(fifth(),'Not enough arguments')
//Test.assertEquals(fifth(1,2,3,4,5),'number')
//Test.assertEquals(fifth(1,2,3),'Not enough arguments')

