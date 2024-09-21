

//title: Album in Albumns

//tags: data_structures,language_fundamentals

//url: https://edabit.com/challenge/ebf4Loe3LfQuqYrr6

//Description:
//You have an object with years 2015-2020 as keys and some albums released for each year as key values. Write a function that takes an album and returns the year in which it was released.
//Examples
//releaseYear("Ode to Joy") ➞ 2019
//
//releaseYear("Honeymoon") ➞ 2015
//
//releaseYear("Fake_album") ➞ "Unknown"
//Note
//Albums object is made for you.
//If the album isn't in the object, return the string "Unknown".

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(releaseYear('Rebel Heart'), 2015, 'error')
//Test.assertEquals(releaseYear('Someone Out There'), 2018, 'error')
//Test.assertEquals(releaseYear('Where Wildness Grows'), 'Unknown', 'error')
//Test.assertEquals(releaseYear('thank u next'), 2019, 'error')
//Test.assertEquals(releaseYear(2017), 'Unknown', 'error')
//Test.assertEquals(releaseYear('Flower Boy'), 2017, 'error')
//Test.assertEquals(releaseYear('Kamikaze'), 2018, 'error')
//Test.assertEquals(releaseYear('folklore'), 2020, 'error')
//Test.assertEquals(releaseYear('Opal'), 'Unknown', 'error')
//​
//// Author : @MyName(Python)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: The Most Brilliant Exciting Fantastic Number

//tags: control_flow,math,numbers,strings

//url: https://edabit.com/challenge/B4SRZm9TLgeYrgPtT

//Description:
//Given a number n, return a sentence which describes the number in the following ways.
//Always start the string with "The most ".
//If n is evenly divisible by 1, add "brilliant " to the sentence.
//If n is evenly divisible by 2, add "exciting " to the sentence.
//... 3, add "fantastic " to the sentence.
//... 4, add "virtuous " to the sentence.
//... 5, add "heart-warming " ...
//... 6, add "tear-jerking " ...
//... 7, add "beautiful " ...
//... 8, add "exhilarating " ...
//... 9, add "emotional " ...
//If n is evenly divisible by 10, add "inspiring " to the sentence.
//Always end the string with "number is n!".
//Examples
//describeNum(13) ➞ "The most brilliant number is 13!"
//// 13 is evenly divisble by 1 only
//
//describeNum(4) ➞ "The most brilliant exciting virtuous number is 4!"
//// 4 is evenly divisible by 1, 2 and 4
//
//describeNum(21) ➞ "The most brilliant fantastic beautiful number is 21!"
//// 21 is evenly divisible by 1, 3 and 7
//
//describeNum(60) ➞ "The most brilliant exciting fantastic virtuous heart-warming tear-jerking inspiring number is 60!"
//// 60 is evenly divisible by 1, 2, 3, 4, 5, 6 and 10
//Notes
//Add words to the sentence in the order going down the list.
//Remember to add a space between each word.
//BONUS: Try to find the lowest number which uses all possible words in the sentence!

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(describeNum(13), 'The most brilliant number is 13!')
//Test.assertEquals(describeNum(4), 'The most brilliant exciting virtuous number is 4!')
//Test.assertEquals(describeNum(21), 'The most brilliant fantastic beautiful number is 21!')
//Test.assertEquals(describeNum(60), 'The most brilliant exciting fantastic virtuous heart-warming tear-jerking inspiring number is 60!')
//Test.assertEquals(describeNum(56), "The most brilliant exciting virtuous beautiful exhilarating number is 56!")
//Test.assertEquals(describeNum(47), "The most brilliant number is 47!")
//Test.assertEquals(describeNum(115), "The most brilliant heart-warming number is 115!")
//Test.assertEquals(describeNum(300), "The most brilliant exciting fantastic virtuous heart-warming tear-jerking inspiring number is 300!")
//Test.assertEquals(describeNum(201), "The most brilliant fantastic number is 201!")
//Test.assertEquals(describeNum(224), "The most brilliant exciting virtuous beautiful exhilarating number is 224!")
//Test.assertEquals(describeNum(42), "The most brilliant exciting fantastic tear-jerking beautiful number is 42!")
//Test.assertEquals(describeNum(22), "The most brilliant exciting number is 22!")
//Test.assertEquals(describeNum(23), "The most brilliant number is 23!")
//Test.assertEquals(describeNum(108), "The most brilliant exciting fantastic virtuous tear-jerking emotional number is 108!")
//Test.assertEquals(describeNum(58), "The most brilliant exciting number is 58!")
//Test.assertEquals(describeNum(184), "The most brilliant exciting virtuous exhilarating number is 184!")
//Test.assertEquals(describeNum(46), "The most brilliant exciting number is 46!")
//Test.assertEquals(describeNum(43), "The most brilliant number is 43!")
//Test.assertEquals(describeNum(178), "The most brilliant exciting number is 178!")
//Test.assertEquals(describeNum(191), "The most brilliant number is 191!")
//Test.assertEquals(describeNum(175), "The most brilliant heart-warming beautiful number is 175!")
//Test.assertEquals(describeNum(264), "The most brilliant exciting fantastic virtuous tear-jerking exhilarating number is 264!")
//Test.assertEquals(describeNum(130), "The most brilliant exciting heart-warming inspiring number is 130!")
//Test.assertEquals(describeNum(213), "The most brilliant fantastic number is 213!")
//Test.assertEquals(describeNum(25), "The most brilliant heart-warming number is 25!")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Triple + Double = So Much Trouble

//tags: algorithms,regex,validation

//url: https://edabit.com/challenge/vpvR2CrLcQxNt57Z6

//Description:
//Create a function that takes two integers and returns true if a digit repeats three times in a row at any place in num1 AND that same digit repeats two times in a row in num2.
//Examples
//trouble(451999277, 41177722899) ➞ true
//
//trouble(1222345, 12345) ➞ false
//
//trouble(666789, 12345667) ➞ true
//
//trouble(33789, 12345337) ➞ false
//Notes
//You can expect every test case to contain exactly two integers.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(trouble(451999277, 41177722899), true)
//Test.assertEquals(trouble(444, 44), true)
//Test.assertEquals(trouble(1222345, 12345), false)
//Test.assertEquals(trouble(12345, 12345), false)
//Test.assertEquals(trouble(888, 888), true)
//Test.assertEquals(trouble(666789, 12345667), true)
//Test.assertEquals(trouble(10560002, 100), true)
//Test.assertEquals(trouble(1, 1), false)
//Test.assertEquals(trouble(9111922229333339, 9559669779), false)

