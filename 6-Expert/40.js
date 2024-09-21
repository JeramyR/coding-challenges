

//title: Repeated Sub-String Pattern

//tags: conditions,strings,validation

//url: https://edabit.com/challenge/FYSu3nEwjA7iN3WmT

//Description:
//Create a solution that checks if a given string consists of a sub-string pattern repeated multiple times to return true or false.
//Examples
//repeated("a") ➞ false
//
//repeated("ababab") ➞ true
//
//repeated("aba") ➞ false
//
//repeated("abcabcabcabc") ➞ true
//
//repeated("aaxxtaaxztaaxxt") ➞ false
//Notes
//Adroit programmers can solve this in one line.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(repeated("a"), false)
//Test.assertEquals(repeated("ababab"), true)
//Test.assertEquals(repeated("aba"), false)
//Test.assertEquals(repeated("abcabcabcabc"), true)
//Test.assertEquals(repeated("aaxxtaaxztaaxxt"), false)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Bitmap Image Conversion

//tags: regex,strings,validation

//url: https://edabit.com/challenge/6MdNdfEbym6YDoBHX

//Description:
//Write a function that converts a bitmap image of a digital clock (represented as a string of the form: hh:mm) into its representational bit string. A bitmap image is a by-product of parsing bits (0's and 1's) from a canvas which is basically an image in black on a white background, where 0 represents the white background and 1 represents the black pixel (it's what an image is composed of, technically). The general idea of this challenge is to encode a bitstring that reflects the image of a digital clock (of this format: hh:mm). The images below are basic examples of how these are conceived.
//The clock face shows the time in a black on white background where each character is three cells wide and five cells deep. Notice there is a space between the numbers represented by a column of blank cells:
//
//
//
//Each image is 17 bits wide by 5 bits deep. Each row is encoded as a 17 character string of 1s and 0s and the five rows are then concatenated into an 85 character string. For example, the above image is encoded as follows:
//row 1 = "11100100001110111"
//row 2 = "10101100100010100"
//row 3 = "10100100001110111"
//row 4 = "10100100100010001"
//row 5 = "11101110001110111"
//
//bitmap -> "1110010000111011110101100100010100101001000011101111010010010001000111101110001110111"
//Looking at the above rows and examining it carefully, you should be able to see the clock digits in the pattern of 1's. The first three columns show the number 0, followed by a column of all 0s representing a space between the numbers, then comes another three columns representing the number 1, then three columns representing the character :, then three columns representing 3, a column of zeroes representing a space and finally three columns representing the number 5. The resulting time is 01:35.
//Example
//toBitString("05:44") ➞ "1110111000101010110101000101010101101011100011101111010001010001000111101110000010001"
//
//toBitString("12:13") ➞ "0100111000010011111000010101100001010011100001001110100100010010000111101110001110111"
//
//toBitString("12:17") ➞ "0100111000010011111000010101100001010011100001000010100100010010000111101110001110001"
//
//toBitString("06:46") ➞ "1110100000101010010101000101010100101011100011101111010101010001010111101110000010111"
//Notes
//This is a reversal of this challenge which was published by @persolut.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//let [actl, exptd] = [
//  ["05:44", "12:13", "12:17", "06:46", "04:56", "19:20", "17:29", "17:13", "20:40", "07:58", "11:08", "03:10"],
//  [
//    "1110111000101010110101000101010101101011100011101111010001010001000111101110000010001",
//    "0100111000010011111000010101100001010011100001001110100100010010000111101110001110111",
//    "0100111000010011111000010101100001010011100001000010100100010010000111101110001110001",
//    "1110100000101010010101000101010100101011100011101111010101010001010111101110000010111",
//    "1110101000111010010101010101000100101011100011101111010001010001010111100010001110111",
//    "0100111000111011111001010100010101010011100011101010100001010100010111100010001110111",
//    "0100111000111011111000010100010101010000100011101110100001010100000111100010001110001",
//    "0100111000010011111000010101100001010000100001001110100001010010000111100010001110111",
//    "1110111000101011100101010101010101111010100011101011000101010001010111101110000010111",
//    "1110111000111011110100010101000101101000100011101111010001010001010111100010001110111",
//    "0100010000111011111001100101010101010001000010101110100010010101010111101110001110111",
//    "1110111000010011110100010101100101101011100001001011010001010010010111101110001110111"
//  ]
//]
//for (let i in actl) Test.assertEquals(toBitString(actl[i]), exptd[i])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Multiply By 11

//tags: algorithms,logic,loops,math,numbers

//url: https://edabit.com/challenge/3k2TbRSBvrTfScrJj

//Description:
//Given a positive number as a string, multiply the number by 11 and also return it as a string. However, there is a catch:
//You are NOT ALLOWED to simply cast the numeric string into an integer!
//Now, how is this challenge even possible? Despite this, there is still a way to solve it, and it involves thinking about how someone might multiply by 11 in their head. See the tips below for guidance.
//Examples
//multiplyBy11("11") ➞ "121"
//
//multiplyBy11("111111111") ➞ "1222222221"
//
//multiplyBy11("1213200020") ➞ "13345200220"
//
//multiplyBy11("1217197941") ➞ "13389177351"
//
//multiplyBy11("9473745364784876253253263723") ➞ "104211199012633638785785900953"
//Tip
//There is a simple trick to multiplying any two-digit number by 11 in your head:
//Add the two digits together
//Place the sum between the two digits!
//Note if the total goes over, carry the sum on to the next digit
//// 23 * 11
//// Add together 2 and 3 to make 5
//// Place 5 between the two digits to make 253
//// 77 * 11
//// Add together 7 and 7 to make 14
//// Place 4 between the two digits to make 747
//// Carry the 1 to make 847
//Notes
//Check out this resource to find out how this process can be utilized for numbers of any length.
//This challenge was greatly inspired by Mubashir Hassan's challenge on adding two numbers together.
//A recursive version of this challenge can be found via this link.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//const argAtPosOne = src => `${src}`.match(RegExp(`${src.name}\\(\\w+.+\\)`).test(src) ? RegExp(`(?<=${src.name}\\()\\w+`) : RegExp(`\\w+(?=\\b.*\\)? =>)`))[0];
//const isDirectMult = (src, arg) => RegExp(`Number(${arg})\\s*\\*\\s*11|\\+${arg}\\s*\\*\\s*11`, 'gm').test(src)
//​
//Test.assertNotEquals(isDirectMult(multiplyBy11, argAtPosOne(multiplyBy11)), true, 'No shortcuts. Cast from string to numeric is not allowed!')
//​
//let [actualParam, expectedParam] = [
//  [ "11", "113434", "111111111", "1213200020", "1217197941", "12345678987654321", "9473745364784876253253263723",
//    "57798475537262775664949793178544410084322125871112100873888108368764143479609636230947305905435344501732127613092539526132478297050231140298675968743242036743911849895415821806568888540371506471898980622461341526051319836717892341981184041251420949699402992990039646759030590473730159880164726562551837027321585062972130328324427060636687637549685519707281109006818275101108700527287692750795014581999611840743604415714313247263830886107561336757943548272922950996455097654414521769924004347236729944" ],
//  [ "121", "1247774", "1222222221", "13345200220", "13389177351", "135802468864197531", "104211199012633638785785900953",
//    "635783230909890532314447724963988510927543384582233109612769192056405578275705998540420364959788789519053403744017934787457261267552542543285435656175662404183030348849574039872257773944086571190888786847074756786564518203896815761793024453765630446693432922890436114349336495211031758681811992188070207300537435692693433611568697667003564013046540716780092199075001026112195705800164620258745160401995730248179648572857445719902139747183174704337379031002152460961006074198559739469164047819604029384" ]
//]
//for (let i = 85; i < 101; i++) Test.assertEquals(multiplyBy11(i+''), `${i*11}`)
//for (let i in actualParam) Test.assertEquals(multiplyBy11(actualParam[i]), expectedParam[i])
//​
//// This is a translated challenge from Python 
//// which was originally published by no less than 
//// @Joshua Senoron. All the credits to you mate.

