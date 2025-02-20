

//title: Mental Logs (Numberphile)

//tags: arrays,math,numbers

//url: https://edabit.com/challenge/sBXNzdZAYbEZouRu2

//Description:
//Watch the Numberphile video to write a function that utilizes the formula Katie Steckles uses to solve the Mental Logs.
//
//Your function will get an array with a mental log in each element, so 3847 is one stick with the numbers 3, 8, 4, and 7 below each other. (Picture, last log).
//Katie tells you about the fact that the trick works with fewer than four sticks. Make your function so that it accepts n sticks.
//Examples
//mentalLogs([7593, 5687, 4628, 9485]) ➞ 29826
//
//mentalLogs([2957, 8357, 3798, 2739]) ➞ 25591
//
//mentalLogs([6428]) ➞ 20
//Notes
//The formula is very easy; you'll be able to solve the trick just by looking at the array input.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(mentalLogs([7593, 5687, 4628, 9485]), 29826)
//Test.assertEquals(mentalLogs([9247, 9376, 8357, 3798]), 24757)
//Test.assertEquals(mentalLogs([7596, 9376]), 295, `Has to work with less than 4 sticks..`)
//Test.assertEquals(mentalLogs([7863, 2957, 8357]), 2653)
//Test.assertEquals(mentalLogs([9485, 9247, 7863, 7269]), 28464)
//Test.assertEquals(mentalLogs([5687, 8357, 9485, 9247]), 28582)
//Test.assertEquals(mentalLogs([2957, 8357, 3798, 2739]), 25591)
//Test.assertEquals(mentalLogs([6428]), 20)
//Test.assertEquals(mentalLogs([9376]), 25)
//Test.assertEquals(mentalLogs([3847, 7269]), 244)
//Test.assertEquals(mentalLogs([5687, 8357, 6428, 3798, 5687]), 285296, `Has to work with more than 4 sticks..`)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Get Max Depth of Object or Array

//tags: arrays,objects,recursion

//url: https://edabit.com/challenge/EC8KnAe5cbdXKhwHk

//Description:
//Create a function that takes an object or array as an argument and returns the maximum depth of that object or array.
//Examples
//getDepth([]) ➞ 1
//
//getDepth({ a: 1 }) ➞ 1
//
//getDepth({ a: 1, b: { c: 1 } }) ➞ 2
//
//getDepth([1, [2, [3, [4, [5]]]]]) ➞ 5
//Notes
//An empty object / array counts as a depth of 1.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(getDepth({}), 1);
//Test.assertEquals(getDepth([]), 1);
//Test.assertEquals(getDepth({ a: 1 }), 1);
//Test.assertEquals(getDepth({ a: 1, b: 1 }), 1);
//Test.assertEquals(getDepth([1, [2, [3, [4, [5]]]]]), 5);
//​
//Test.assertEquals(
//  getDepth({
//    a: 1,
//    b: {
//      c: 1,
//    },
//  }),
//  2
//);
//​
//Test.assertEquals(
//  getDepth({
//    a: 1,
//    b: {
//      c: 1,
//      d: {
//        e: 1,
//      },
//    },

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: One Time Pad Training Program, Pt. 1

//tags: cryptography,formatting,numbers,strings

//url: https://edabit.com/challenge/3kukAeB3YtsDedcFG

//Description:
//“To the future or to the past, to a time when thought is free, when men are different from one another and do not live alone — to a time when truth exists and what is done cannot be undone: From the age of uniformity, from the age of solitude, from the age of Big Brother, from the age of doublethink — greetings!” ⁠— Winston Smith's secret writings in George Orwell's novel "1984"
//ONE TIME PAD OPERATIONS MANUAL (CLASSIFIED ⁠— DESTROY AFTER READING!)
//This first part of the ONE TIME PAD OPERATIONS MANUAL has been designed to train party members within the purview of the Dzerzkian Intelligence Authorities on how to use One Time Pad (OTP) encryption.
//This type of encryption offers several advantages over other types of encryption:
//It cannot be cracked (with certain important assumptions. See appendix: "Resources").
//It can easily be performed by hand, which makes it perfect for field agents (the intended readers of this document).
//OPERATION PRINCIPLES
//As the name implies, OTP encrypts and decrypts messages with the aid of a secret key (i.e. the pad). Both the sender and the receiver have identical copies of this pad. Each pad is used only once before it is immediately destroyed by both parties.
//The encryption and decryption processes are relatively simple:
//The plaintext message is encoded into something called plaincode. The purpose of this step is to convert the letters into numbers in preparation for the next step. The plaincode should not be considered encrypted in any way.
//
//The next step is to encrypt the plaincode with the one-time pad. The sender uses modular subtraction on each pair of corresponding digits in the plaincode and the pad to generate the encrypted cyphertext, which can now be securely sent to the receiver.
//
//The decryption step is essentially the encryption step in reverse. The plaincode is decrypted when the receiver uses modular addition to add the corresponding digits in the cyphertext and the pad.
//
//Finally, the plaincode is decoded to plaintext with the same method used to encode it, but in reverse.
//TRAINING EXERCISE
//In our first exercise, we need only concern ourselves with encryption and decryption of the plaincode (steps 2 and 3).
//Make two functions: one for encryption and one for decryption. Both functions need only two arguments: either plncode and pad or cypcode and pad, both of which are strings of numbers.
//Remember, the plaincode is encrypted using modular arithmetic. For example, if the plaincode digit is 4, and the corresponding pad digit is 6, then the cyphertext digit is (4 – 6) mod 10 = 8. After being sent, the cyphertext 8 can be decrypted using the pad digit 6 and modular addition: (8 + 6) % 10 = 4. A simple way of remembering this is that sometimes you need to add 10 to plaincode digit to keep the result above 0 in the encryption step. As for decryption, if the result is greater than 9, just don't carry the 1.
//By convention, the first five digits of the pad are used as a “key ID” and aren't altered in the encryption process. This allows the receiver to identify the appropriate pad for decryption.
//ENCRYPTION:
//KEYID 24955 18424 76969 69 plaincode
//63719 78776 82780 83650 47 pad
//-------------------------- (-) modular subtraction
//63719 56289 36744 93319 22 cyphertext
//
//DECRYPTION:
//63719 56289 36744 93319 22 cyphertext
//63719 78776 82780 83650 47 pad
//-------------------------- (+) modular addition
//KEYID 24955 18424 76969 69 plaincode
//By convention, the codes are written in groups of five for the sake of organization while performing operations by hand. However, the test case strings contain no spaces for grouping.
//In the function encrypt(plncode, pad), the plncode argument should be given as a string that does not include the key ID. It should return the cyphertext as a string that does contain the key ID.
//In the function decrypt(cypcode, pad), the cypcode argument should be given as a string that does include the key ID. It should return the plaincode as a string that does not contain the key ID.
//If the key IDs for the cyphertext and the pad don't match in the decrypt function, return "Error: Key IDs don't match."
//Examples
//encrypt("24955184247696969", "637197877682780836504704874690100607768768") ➞ "6371956289367449331922"
//
//decrypt("6371956289367449331922", "637197877682780836504704874690100607768768") ➞ "24955184247696969"
//
//decrypt("6371956289367449331922", "442878365779404250678127528855846163827272") ➞ "Error: Key IDs don't match."
//Notes
//The functions you make will be built upon in the next section, in which you will also be required to convert from plaintext to plaincode and vice-versa.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(encrypt("24955184247696969", "637197877682780836504704874690100607768768"), "6371956289367449331922")
//Test.assertEquals(decrypt("6371956289367449331922", "442878365779404250678127528855846163827272"), "Error: Key IDs don't match.")
//Test.assertEquals(decrypt("6371956289367449331922", "637197877682780836504704874690100607768768"), "24955184247696969")

