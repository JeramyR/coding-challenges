

//title: Syncopated Rhythm

//tags: loops,strings,validation

//url: https://edabit.com/challenge/9JGd2TFCb33SQ2rhL

//Description:
//Syncopation means an emphasis on a weak beat of a bar of music; most commonly, beats 2 and 4 (and all other even-numbered beats if applicable).
//You will be given a string representing beats, where hashtags # represent emphasized beats. Create a function that returns true if the line of music contains any syncopation, and false otherwise.
//Examples
//hasSyncopation(".#.#.#.#") ➞ true
//// There are Hash signs in the second, fourth, sixth and
//// eighth positions of the string.
//
//hasSyncopation("#.#...#.") ➞ false
//// There are no Hash signs in the second, fourth, sixth or
//// eighth positions of the string.
//
//hasSyncopation("#.#.###.") ➞ true
//// There is a Hash sign in the sixth position of the string.
//Notes
//All other unemphasized beats will be represented as a dot.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(hasSyncopation(".#.#.#.#"), true)
//Test.assertEquals(hasSyncopation("#.#...#."), false)
//Test.assertEquals(hasSyncopation("#.#.###."), true)
//Test.assertEquals(hasSyncopation(".."), false)
//Test.assertEquals(hasSyncopation(""), false)
//Test.assertEquals(hasSyncopation("##"), true)
//Test.assertEquals(hasSyncopation("####...."), true)
//Test.assertEquals(hasSyncopation("#"), false)
//Test.assertEquals(hasSyncopation(".#.#...."), true)
//Test.assertEquals(hasSyncopation(".#.#"), true)
//Test.assertEquals(hasSyncopation(".#."), true)
//Test.assertEquals(hasSyncopation("#."), false)
//Test.assertEquals(hasSyncopation(".#"), true)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Even or Odd: Which is Greater?

//tags: algorithms,arrays,language_fundamentals,numbers,strings

//url: https://edabit.com/challenge/bCif823bBvNFfLK7G

//Description:
//Create a function to determine if the sum of all the individual even digits are greater than the sum of all the individual odd digits in a string of numbers.
//If the sum of odd numbers is greater than the sum of even numbers, return "Odd is greater than Even".
//If the sum of even numbers is greater than the odd numbers, return "Even is greater than Odd".
//If the sum of both even and odd numbers are equal, return "Even and Odd are the same".
//Examples
//evenOrOdd("22471") ➞ "Even and Odd are the same"
//
//evenOrOdd("213613") ➞ "Even and Odd are the same"
//
//evenOrOdd("23456") ➞ "Even is greater than Odd"
//Notes
//The input will be a string of numbers.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(evenOrOdd('12345'), 'Odd is greater than Even')
//Test.assertEquals(evenOrOdd('143'), 'Even and Odd are the same')
//Test.assertEquals(evenOrOdd('2221'), 'Even is greater than Odd')
//Test.assertEquals(evenOrOdd('23456'), 'Even is greater than Odd')
//Test.assertEquals(evenOrOdd('4321'), 'Even is greater than Odd')
//Test.assertEquals(evenOrOdd('3245'), 'Odd is greater than Even')
//Test.assertEquals(evenOrOdd('14256'), 'Even is greater than Odd')
//Test.assertEquals(evenOrOdd('11234'), 'Even is greater than Odd')
//Test.assertEquals(evenOrOdd('1734'), 'Odd is greater than Even')
//Test.assertEquals(evenOrOdd('145'), 'Odd is greater than Even')
//Test.assertEquals(evenOrOdd('22471'), 'Even and Odd are the same')
//Test.assertEquals(evenOrOdd('213613'), 'Even and Odd are the same')
//Test.assertEquals(evenOrOdd('23456'), 'Even is greater than Odd')
//Test.assertEquals(evenOrOdd('9738'), 'Odd is greater than Even')
//Test.assertEquals(evenOrOdd('34522'), 'Even and Odd are the same')
//Test.assertEquals(evenOrOdd('12378'), 'Odd is greater than Even')
//Test.assertEquals(evenOrOdd('45228'), 'Even is greater than Odd')
//Test.assertEquals(evenOrOdd('4455'), 'Odd is greater than Even')
//Test.assertEquals(evenOrOdd('6721'), 'Even and Odd are the same')
//Test.assertEquals(evenOrOdd('92184'), 'Even is greater than Odd') 
//Test.assertEquals(evenOrOdd('12'), 'Even is greater than Odd')
//Test.assertEquals(evenOrOdd('123'), 'Odd is greater than Even')
//Test.assertEquals(evenOrOdd('112'), 'Even and Odd are the same')
//Test.assertEquals(evenOrOdd('124'), 'Even is greater than Odd')

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Is the Phone Number Formatted Correctly?

//tags: formatting,regex,strings,validation

//url: https://edabit.com/challenge/nHaKL55KwW3XaGrAw

//Description:
//Create a function that accepts a string and returns true if it's in the format of a proper phone number and false if it's not. Assume any number between 0-9 (in the appropriate spots) will produce a valid phone number.
//This is what a valid phone number looks like:
//(123) 456-7890
//Examples
//isValidPhoneNumber("(123) 456-7890") ➞ true
//
//isValidPhoneNumber("1111)555 2345") ➞ false
//
//isValidPhoneNumber("098) 123 4567") ➞ false
//Notes
//Don't forget the space after the closing parenthesis.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(isValidPhoneNumber("(123) 456-7890"), true)
//Test.assertEquals(isValidPhoneNumber("(1111)555 2345"), false)
//Test.assertEquals(isValidPhoneNumber("(098) 123 4567"), false)
//Test.assertEquals(isValidPhoneNumber("(123)456-7890"), false)
//Test.assertEquals(isValidPhoneNumber("abc(123)456-7890"), false)
//Test.assertEquals(isValidPhoneNumber("(123)456-7890abc"), false)
//Test.assertEquals(isValidPhoneNumber("abc(123)456-7890abc"), false)
//Test.assertEquals(isValidPhoneNumber("abc(123) 456-7890"), false)
//Test.assertEquals(isValidPhoneNumber("(123) 456-7890abc"), false)
//Test.assertEquals(isValidPhoneNumber("abc(123) 456-7890abc"), false)
//Test.assertEquals(isValidPhoneNumber("(123)-456-7890"), false)
//Test.assertEquals(isValidPhoneNumber("(123)_456-7890"), false)
//Test.assertEquals(isValidPhoneNumber("-123) 456-7890"), false)
//Test.assertEquals(isValidPhoneNumber("(519) 505-6498"), true)

