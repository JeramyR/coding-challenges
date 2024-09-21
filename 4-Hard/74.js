

//title: Star Ratings

//tags: arrays,logic,math,numbers

//url: https://edabit.com/challenge/BpLG59eieSYarDfZj

//Description:
//Given an array of five values, calculate the average star rating, rounded to two decimal places. The array contains user votes per star, so the first element [0] contains the number of 1-star ratings and the last element [4], the number of 5-star ratings.
//Return the average score in [brackets], followed by a space and asterisks' * to represent the star rating, rounded to the nearest whole star.
//Examples
//starRating([55, 67, 98, 115, 61]) ➞ "[3.15] ***"
//
//starRating([0, 2, 0, 1, 23]) ➞ "[4.73] *****"
//
//starRating([16, 17, 23, 40, 45]) ➞ "[3.57] ****"
//Notes
//Round stars to whole stars.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(starRating([55, 67, 98, 115, 61]), "[3.15] ***")
//Test.assertEquals(starRating([75, 79, 50, 55, 25]), "[2.56] ***")
//Test.assertEquals(starRating([0, 2, 0, 1, 23]), "[4.73] *****")
//Test.assertEquals(starRating([16, 17, 23, 40, 45]), "[3.57] ****")
//Test.assertEquals(starRating([175, 790, 550, 1550, 1245]), "[3.67] ****")
//Test.assertEquals(starRating([0, 0, 0, 0, 5]), "[5.00] *****")
//Test.assertEquals(starRating([6713, 7809, 5350, 5005, 6250]), "[2.88] ***")
//Test.assertEquals(starRating([80, 79, 82, 155, 325]), "[3.79] ****")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Rhyme Time

//tags: regex,strings,validation

//url: https://edabit.com/challenge/p3LHPrDSwr4kYE9ov

//Description:
//Create a function that returns true if two lines rhyme and false otherwise. For the purposes of this exercise, two lines rhyme if the last word from each sentence contains the same vowels.
//Examples
//doesRhyme("Sam I am!", "Green eggs and ham.") ➞ true
//
//doesRhyme("Sam I am!", "Green eggs and HAM.") ➞ true
//// Capitalization and punctuation should not matter.
//
//doesRhyme("You are off to the races", "a splendid day.") ➞ false
//
//doesRhyme("and frequently do?", "you gotta move.") ➞ false
//Notes
//Case insensitive.
//Here we are disregarding cases like "thyme" and "lime".
//We are also disregarding cases like "away" and "today" (which technically rhyme, even though they contain different vowels).

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(doesRhyme('Sam I am!', 'Green eggs and ham.'), true, 'Should work with punctuation.')
//Test.assertEquals(doesRhyme('Sam I am!', 'Green eggs and HAM.'), true, 'Should work with uppercase/punctuation.')
//Test.assertEquals(doesRhyme('head straight to town', 'give me not a frown'), true)
//Test.assertEquals(doesRhyme('with an unpleasant bump', 'in a slump'), true)
//Test.assertEquals(doesRhyme('your elbow and chin!', 'how much can you win?'), true, 'Should work with punctuation.')
//Test.assertEquals(doesRhyme('you will start to race', 'the waiting Place'), true, 'Should work with upper case letters.')
//Test.assertEquals(doesRhyme('All that waiting and staying.', 'where the band are playing.'), true, 'Should work with punctuation.')
//Test.assertEquals(doesRhyme('You are off to the races', 'a splendid day.'), false)
//Test.assertEquals(doesRhyme('and frequently do?', 'you gotta move.'), false)
//Test.assertEquals(doesRhyme('down by the bay', 'where the watermelons grow'), false)
//Test.assertEquals(doesRhyme('back to my home', 'i dare not go'), false)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Increasing or Decreasing Numbers

//tags: algorithms,logic,loops,numbers

//url: https://edabit.com/challenge/MyTTy4taYEhhSuoFf

//Description:
//Mubashir needs your help to find out Increasing and Decreasing numbers for a given range.
//Increasing Numbers
//Numbers whose digits, when read from left to right, are never less than the previous digit. See below some examples of increasing numbers:
//1111
//123456
//125788999
//Decreasing Numbers
//Numbers whose digits, when read from left to right, are never greater than the previous digit. See below some examples of decreasing numbers:
//1111
//654321
//999887521
//Create a function that takes a number n and returns total occurrences of all the increasing or decreasing numbers in the range 1 - 10^n.
//Examples
//incDec(0) ➞ 1
//// 10^0 = 1
//// 1 is both increasing and decreasing.
//
//incDec(1) ➞ 10
//// 10^1 = 10
//// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] are both increasing and decreasing numbers.
//
//incDec(3) ➞ 475
//Notes
//To make it even clearer, the increasing or decreasing numbers in range 101-200 are:
//110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 122, 123, 124, 125, 126, 127, 128, 129, 133, 134, 135, 136, 137, 138, 139, 144, 145, 146, 147, 148, 149, 155, 156, 157, 158, 159, 166, 167, 168, 169, 177, 178, 179, 188, 189, 199, 200
//The total will be 47 in this case.
//It might it clearer to give examples of numbers in the range which are not included:
//121 would not be included because it starts off increasing and then starts decreasing.
//5433342 would not be included because it starts off decreasing, temporarily increases from the 5th to the 6th digit, then changes again form the 6th to the 7th digits.
//7777 would be included because, according to the rules, it can be considered both increasing AND decreasing.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(incDec(0), 1)
//Test.assertEquals(incDec(1), 10)
//Test.assertEquals(incDec(2), 100)
//Test.assertEquals(incDec(3), 475)
//Test.assertEquals(incDec(4), 1675)
//Test.assertEquals(incDec(5), 4954)
//Test.assertEquals(incDec(6), 12952)
//// Mubashir

