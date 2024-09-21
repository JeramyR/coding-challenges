

//title: Triplet Sum

//tags: arrays,logic,loops,numbers

//url: https://edabit.com/challenge/hMRAf7yvGrKYv4P7R

//Description:
//Create a function that takes an unsorted list of numbers and returns the number of unique triplets whose sum is equal to the variable n.
//Examples
//tripletSum([1, 0, 2, 6, 3, 9, 3], n = 11) ➞ 2
//// Since we found two unique triplets that equate to 11: 0+2+9 and 2+6+3
//
//tripletSum([1, 2, 6, 3, 4, 5, 9, 10, 11], n = 20) ➞ 5
//
//tripletSum([5, 2, 8], n = 2) ➞ 0
//Notes
//You should also expect lists with less than three elements.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(tripletSum([1, 2, 6, 3, 4, 5, 9, 10, 11], n = 20), 5)
//Test.assertEquals(tripletSum([6, 2, 6], n = 9), 0)
//Test.assertEquals(tripletSum([6, 2, 6, 0, 9, 2, 5, 8], n = 15), 2)
//Test.assertEquals(tripletSum([1, -2, 0, 6, 11, 15, 6, 2, 6, 0, 9, 2, 5, 8], n = 15), 9)
//Test.assertEquals(tripletSum([1,15], n = 16), 0, "There are no triplets in a list of two elements.")
//Test.assertEquals(tripletSum([], n = 0), 0, "There are no triplets in an empty list.")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Blood Types

//tags: conditions,strings,validation

//url: https://edabit.com/challenge/r4EMNh3YYJyHSS6JS

//Description:
//When a person receives a blood transfusion, it is essential to make sure that the donor's blood type is compatible with the receiver's blood type. Receiving a blood type that is not compatible with your own can be life-threating, so blood banks always make sure to note the type of blood they receive from donors so that they can ensure a safe transfusion.
//Blood types are named according to three factors: presence of antigen A, presence of antigen B, and presence of Rh factor. If antigen A is found, the blood type includes the letter "A". If antigen B is found, the blood type includes the letter "B". And if the Rh factor is present, the blood type ends with "+"; otherwise, it ends with "-". If neither antigen A nor antigen B are found, the blood type includes the letter "O".
//For example, a person with only antigen A would have the blood type "A-". A person with both antigens A and B and the Rh factor would have blood type "AB+", and a person wih only the Rh factor would have blood type "O+".
//The rules for giving and receiving blood are as follows:
//A person with antigen A may only give blood to another person with antigen A.
//A person with antigen B may only give blood to another person with antigen B.
//A person with the Rh factor may only give blood to another person with the Rh factor.
//A person with none of the above factors (O-) can give blood to anyone.
//Write a function that takes in a donor's and receiver's blood types as strings and returns whether or not the donor can safely give blood to the receiver, according to the rules above.
//Examples
//canGiveBlood("O+", "A+") ➞ true
//
//canGiveBlood("A-", "B-") ➞ false
//
//canGiveBlood("A-", "AB+") ➞ true
//Notes
//All letters are capital.
//Each blood type will be one of the following strings: "O+", "O-", "A+", "A-", "B+", "B-", "AB+", "AB-".

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(canGiveBlood("O+", "A+"), true)
//Test.assertEquals(canGiveBlood("A-", "B-"), false)
//Test.assertEquals(canGiveBlood("A-", "AB+"), true)
//Test.assertEquals(canGiveBlood("AB-", "B-"), false)
//Test.assertEquals(canGiveBlood("AB+", "A+"), false)
//Test.assertEquals(canGiveBlood("O-", "A-"), true)
//Test.assertEquals(canGiveBlood("A-", "O-"), false)
//Test.assertEquals(canGiveBlood("O+", "AB-"), false)
//Test.assertEquals(canGiveBlood("O-", "AB+"), true)
//Test.assertEquals(canGiveBlood("AB+", "AB+"), true)
//Test.assertEquals(canGiveBlood("O+", "O-"), false)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Mod 10 Algorithm

//tags: algorithms,logic,validation

//url: https://edabit.com/challenge/2cexaD4QfdrPJpDZS

//Description:
//Create a function that takes a number and checks whethers the given number is a valid credit card number using Luhn Algorithm. The return value is boolean.
//Examples
//validCreditCard(4111111111111111) ➞ true
//// Visa Card
//
//validCreditCard(6451623895684318) ➞ false
//// Not a valid credit card number.
//
//validCreditCard(6451623895684318) ➞ false
//Notes
//American Express/VISA/Discover/Diner Club may be the credit card type.
//Check the Resources for help.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(validCreditCard(2111111111121111), false)
//Test.assertEquals(validCreditCard(4111111111111111), true)
//Test.assertEquals(validCreditCard(5500000000000004), true)
//Test.assertEquals(validCreditCard(378282246310005), true)
//Test.assertEquals(validCreditCard(7777777777777777), false)
//Test.assertEquals(validCreditCard(6011000000000004), true)
//Test.assertEquals(validCreditCard(6451623895684318), false)

