

//title: Maskify the String

//tags: formatting,strings,validation

//url: https://edabit.com/challenge/32mN4NsXypmqtuYkA

//Description:
//Usually when you sign up for an account to buy something, your credit card number, phone number or answer to a secret question is partially obscured in some way. Since someone could look over your shoulder, you don't want that shown on your screen. Hence, the website masks these strings.
//Your task is to create a function that takes a string, transforms all but the last four characters into "#" and returns the new masked string.
//Examples
//maskify("4556364607935616") ➞ "############5616"
//
//maskify("64607935616") ➞ "#######5616"
//
//maskify("1") ➞ "1"
//
//maskify("") ➞ ""
//Notes
//The maskify function must accept a string of any length.
//An empty string should return an empty string (fourth example above).

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(maskify("4556364607935616"), "############5616")
//Test.assertEquals(maskify("64607935616"), "#######5616")
//Test.assertEquals(maskify("1"), "1")
//Test.assertEquals(maskify(""), "")
//Test.assertEquals(maskify("tBy>L/cMe+?<j:6n;C~H"), "################;C~H")
//Test.assertEquals(maskify("12"), "12")
//Test.assertEquals(maskify("8Ikhlf6yoxPOwi5cB014eWbRumj7vJ"), "##########################j7vJ")
//Test.assertEquals(maskify("123"), "123")
//Test.assertEquals(maskify(")E$aCU=e\"_"), "######=e\"_")
//Test.assertEquals(maskify("2673951408"), "######1408")
//Test.assertEquals(maskify("1234"), "1234")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Return the Time Saved by Speeding

//tags: math,physics

//url: https://edabit.com/challenge/fkzJMioMcnP4p4BFG

//Description:
//One cause for speeding is the desire to shorten the time spent traveling. In long distance trips, speeding does save an appreciable amount of time. However, the same cannot be said about short distance trips.
//Create a function that calculates the amount of time saved were you traveling with an average speed that is above the speed-limit as compared to traveling with an average speed exactly at the speed-limit.
//Examples
//// The parameter's format is as follows:
//// (speed limit, avg speed, distance traveled at avg speed)
//
//timeSaved(80, 90, 40) ➞ 3.3
//
//timeSaved(80, 90, 4000) ➞ 333.3
//
//timeSaved(80, 100, 40 ) ➞ 6.0
//
//timeSaved(80, 100, 10) ➞ 1.5
//Notes
//Speed = distance/time
//The time returned should be in minutes, not hours.
//Round the answer to one decimal place.
//The speed limit and average speed are both given in mi/hr

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(timeSaved(80, 90, 40), 3.3)
//Test.assertEquals(timeSaved(80, 90, 4000), 333.3)
//Test.assertEquals(timeSaved(80, 100, 40), 6.0)
//Test.assertEquals(timeSaved(80, 100, 10), 1.5)
//Test.assertEquals(timeSaved(60, 65, 25), 1.9)
//Test.assertEquals(timeSaved(60, 60, 20), 0)
//Test.assertEquals(timeSaved(80, 95, 200), 23.7)
//Test.assertEquals(timeSaved(70, 92, 50), 10.2)
//Test.assertEquals(timeSaved(70, 92, 20), 4.1)
//Test.assertEquals(timeSaved(70, 100, 12), 3.1)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: ATM PIN Code Validation

//tags: regex,validation

//url: https://edabit.com/challenge/RhvdtEWHAMAqkdugn

//Description:
//ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits. Your task is to create a function that takes a string and returns true if the PIN is valid and false if it's not.
//Examples
//validatePIN("1234") ➞ true
//
//validatePIN("12345") ➞ false
//
//validatePIN("a234") ➞ false
//
//validatePIN("") ➞ false
//Notes
//Some test cases contain special characters.
//Empty strings must return false.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(validatePIN("1234"), true);
//Test.assertEquals(validatePIN("12345"), false);
//Test.assertEquals(validatePIN("a234"), false);
//Test.assertEquals(validatePIN(""), false);
//Test.assertEquals(validatePIN("%234"), false);
//Test.assertEquals(validatePIN("`234"), false);
//Test.assertEquals(validatePIN("@234"), false);
//Test.assertEquals(validatePIN("#234"), false);
//Test.assertEquals(validatePIN("$234"), false);
//Test.assertEquals(validatePIN("*234"), false);
//Test.assertEquals(validatePIN("5678"), true);
//Test.assertEquals(validatePIN("^234"), false);
//Test.assertEquals(validatePIN("(234"), false);
//Test.assertEquals(validatePIN(")234"), false);
//Test.assertEquals(validatePIN("123456"), true);
//Test.assertEquals(validatePIN("-234"), false);
//Test.assertEquals(validatePIN("_234"), false);
//Test.assertEquals(validatePIN("+234"), false);
//Test.assertEquals(validatePIN("=234"), false);
//Test.assertEquals(validatePIN("?234"), false);

