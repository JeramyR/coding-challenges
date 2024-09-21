

//title: Secret Society

//tags: arrays,strings

//url: https://edabit.com/challenge/zQm9YZTTFPhNtYjDr

//Description:
//A group of friends have decided to start a secret society. The name will be the first letter of each of their names, sorted in alphabetical order.
//Create a function that takes in an array of names and returns the name of the secret society.
//Examples
//societyName(["Adam", "Sarah", "Malcolm"]) ➞ "AMS"
//
//societyName(["Harry", "Newt", "Luna", "Cho"]) ➞ "CHLN"
//
//societyName(["Phoebe", "Chandler", "Rachel", "Ross", "Monica", "Joey"]) ➞ "CJMPRR"
//Notes
//The secret society's name should be entirely uppercased.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(societyName(['Adam', 'Sarah', 'Malcolm']), 'AMS')
//Test.assertEquals(societyName(['Phoebe', 'Chandler', 'Rachel', 'Ross', 'Monica', 'Joey']), 'CJMPRR')
//Test.assertEquals(societyName(['Harry', 'Newt', 'Luna', 'Cho']), 'CHLN')
//Test.assertEquals(societyName(['Sherlock', 'Irene', 'John']), 'IJS')
//Test.assertEquals(societyName(['Sheldon', 'Amy', 'Penny', 'Howard', 'Raj']), 'AHPRS')

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Array Operation

//tags: arrays,math,numbers

//url: https://edabit.com/challenge/NFfYCBEQepsD5mfEk

//Description:
//Create a function that takes three parameters where:
//x is the start of the range (inclusive).
//y is the end of the range (inclusive).
//n is the divisor to be checked against.
//Return an ordered array with numbers in the range that are divisible by the third parameter n. Return an empty array if there are no numbers that are divisible by n.
//Examples
//arrayOperation(1, 10, 3) ➞ [3, 6, 9]
//
//arrayOperation(7, 9, 2) ➞ [8]
//
//arrayOperation(15, 20, 7) ➞ []
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(arrayOperation(1, 10, 3), [3, 6, 9])
//Test.assertSimilar(arrayOperation(7, 9, 2), [8])
//Test.assertSimilar(arrayOperation(15, 20, 7), [])
//Test.assertSimilar(arrayOperation(10, 50, 10), [10, 20, 30, 40, 50])
//Test.assertSimilar(arrayOperation(1, 10, 2), [2, 4, 6, 8, 10])
//Test.assertSimilar(arrayOperation(1, 100, 17), [17, 34, 51, 68, 85])
//Test.assertSimilar(arrayOperation(15, 20, 5), [15, 20])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Reverse the Case

//tags: formatting,loops,strings

//url: https://edabit.com/challenge/PTvYKkvf7oytHmJFm

//Description:
//Given a string, create a function to reverse the case. All lower-cased letters should be upper-cased, and vice versa.
//Examples
//reverseCase("Happy Birthday") ➞ "hAPPY bIRTHDAY"
//
//reverseCase("MANY THANKS") ➞ "many thanks"
//
//reverseCase("sPoNtAnEoUs") ➞ "SpOnTaNeOuS"
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(reverseCase('Happy Birthday'), 'hAPPY bIRTHDAY')
//Test.assertEquals(reverseCase('MANY THANKS'), 'many thanks')
//Test.assertEquals(reverseCase('sPoNtAnEoUs'), 'SpOnTaNeOuS')
//Test.assertEquals(reverseCase('eXCELLENT, yOuR mAJESTY'), 'Excellent, YoUr Majesty')

