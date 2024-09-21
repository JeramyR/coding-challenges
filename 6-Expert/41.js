

//title: Condi Cipher

//tags: algorithms,cryptography,logic,strings

//url: https://edabit.com/challenge/GhW3bhPRKZtYiznsK

//Description:
//In Condi Cipher, encoding is done by shifting a string of messages in correspondence with a given key in the plaintext.
//Create a function that takes three arguments, key, shift and message, and returns the encoded message.
//There are some variations on the rules of encipherment. One version of the cipher rules are outlined below:
//message = "on.,"
//shift = 10
//key = "cryptogram"
//
//condiCipher(message, key, shift) ➞ "jx.,"
//Step 1: Remove duplicate alphabets of the key. Rearrange alphabets from A-Z, such that the keyword appears first, followed by the rest of the alphabets in the usual order.
//c r y p t o g a m b d e f h i j k l n q s u v w x z
//Step 2: Starting from 1, assign numbers to the letters:
//1  2  3  4  5  6  7  8  9  10 11 12 13
//c  r  y  p  t  o  g  a  m  b  d  e  f 
//14 15 16 17 18 19 20 21 22 23 24 25 26
//h  i  j  k  l  n  q  s  u  v  w  x  z
//Step 3: Replace each alphabet of the message with the letter in the modified key shifter by a constant positive number shift (wrapping is required if the shift is greater than key size):
//   'o' = 'j'
//// 'j' is 10 places right to 'o'
//Step 4: Use the position of the previous letter as the number of places to move to encode the next plaintext number. If you have just encoded an 'o' (position 6), and you now want to encode 'n', then you have to move 6 places to the right from 'n' which brings you to 'x'.
//   'n' = 'x'
//// 'x' is 6 places right to 'n'
//// keep other characters in same order
//
//eMessage = "jx.,"
//See the below examples for a better understanding:
//Examples
//condiCipher("on.,", "cryptogam", 10) ➞ "jx.,"
//
//condiCipher("mubashir", "airforce", 6) ➞ "ugrdtfko"
//
//condiCipher("matt", "edabit", 2) ➞ "opgk"
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(condiCipher("on.,", "cryptogam", 10), "jx.,")
//Test.assertEquals(condiCipher("mubashir", "airforce", 6), "ugrdtfko")
//Test.assertEquals(condiCipher("matt", "edabit", 2), "opgk")
//Test.assertEquals(condiCipher("pakistan", "amazzziiinnnngggg", 8), "xqlqwlug")
//Test.assertEquals(condiCipher("mubashir+edabit", "amazing", 5), "bwzctgov+zrecfx")
//Test.assertEquals(condiCipher("m-u-b-l-o-v-e-h-e-l", "google", 7), "u-f-g-f-a-x-z-m-m-c")
//Test.assertEquals(condiCipher("cryptogram", "cryptogam", 0), "cytgmdfmbk")
//Test.assertEquals(condiCipher("on the first day i got lost.", "cryptogam", 10), "jx wnz xrkvz jnd l ufd vwcz.")
//Test.assertEquals(condiCipher("i will never eat any grapes again", "superkey", 4), "n ggka cvssb bfe esz omgdyr bqqva")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Simplified Square Root

//tags: algebra,math,numbers

//url: https://edabit.com/challenge/q3GuyewaMxzJyu95f

//Description:
//Create a function that takes in a positive integer n and returns the simplified square root of n as [_a_, _b_], where a⋅sqrt(b) = sqrt(n) and b is as small as possible.
//Examples
//simplifySqrt(72) ➞ [6, 2]
//
//simplifySqrt(160) ➞ [4, 10]
//
//simplifySqrt(36) ➞ [6, 1]
//
//simplifySqrt(35) ➞ [1, 35]
//A common way to simplify square roots is to repeatedly factor out perfect squares from the number underneath the square root. For example, if you need to simply sqrt(72), you can factor out perfect squares from 72 according to the following process:
//sqrt(72)
//72 is divisible by 4, so factor 4 out of 72:
//sqrt(4⋅18)
//The perfect square 4 can now be square rooted and pulled out of the square root:
//2⋅sqrt(18)
//Now repeat the process until no further perfect squares can be factored out. 18 is divisible by 9, so factor it out:
//2⋅sqrt(9⋅2)
//Pull the 9 out, square root it, and simplify:
//2⋅3⋅sqrt(2)
//= 6⋅sqrt(2)
//2 does not have any perfect square factors other than 1, so 6⋅sqrt(2) is the simplest form of sqrt(72). The function would therefore return [6, 2].
//This is only one approach to solving this problem; there are probably other ways that are simpler/faster than this method. Feel free to use any method you want.
//Notes
//If n is a perfect square, b should be 1.
//If n has no perfect square factors (other than 1), a should be 1.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(simplifySqrt(72), [6, 2])
//Test.assertSimilar(simplifySqrt(160), [4, 10])
//Test.assertSimilar(simplifySqrt(36), [6, 1])
//Test.assertSimilar(simplifySqrt(35), [1, 35])
//Test.assertSimilar(simplifySqrt(81), [9, 1])
//Test.assertSimilar(simplifySqrt(144), [12, 1])
//Test.assertSimilar(simplifySqrt(17), [1, 17])
//Test.assertSimilar(simplifySqrt(210), [1, 210])
//Test.assertSimilar(simplifySqrt(8), [2, 2])
//Test.assertSimilar(simplifySqrt(420), [2, 105])
//Test.assertSimilar(simplifySqrt(126), [3, 14])
//Test.assertSimilar(simplifySqrt(192), [8, 3])
//Test.assertSimilar(simplifySqrt(6300), [30, 7])
//Test.assertSimilar(simplifySqrt(100000), [100, 10])
//Test.assertSimilar(simplifySqrt(1), [1, 1])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Word Search (Part 1)

//tags: arrays,language_fundamentals,strings

//url: https://edabit.com/challenge/x3XbfkKTjj4rr45Xi

//Description:
//This challenge involves finding words in an 8x8 grid. Given a string of 64 letters and a string of words to find, convert the string to an 8x8 array, and return true if all words in the string can be found in the array. Return false otherwise. Words can be read in any direction (horizontally, vertically or diagonally).
//Example
//letters = "PSUWHATSLPACKAGENYOLRDVLFINGEZBMIREHQNJOATBVGYESJDUWUESTPSTICKEY"
//words = ["stick", "most", "key", "vein", "yes", "package", "tube", "target", "elm", "spy"]
//This would give the list below:
//[
//  ["P", "S", "U", "W", "H", "A", "T", "S"],
//  ["L", "P", "A", "C", "K", "A", "G", "E"],
//  ["N", "Y", "O", "L", "R", "D", "V", "L"],
//  ["F", "I", "N", "G", "E", "Z", "B", "M"],
//  ["I", "R", "E", "H", "Q", "N", "J", "O"],
//  ["A", "T", "B", "V", "G", "Y", "E", "S"],
//  ["J", "D", "U", "W", "U", "E", "S", "T"],
//  ["P", "S", "T", "I", "C", "K", "E", "Y"]
//]
//You would return true as all words can be found:
//[
//  ["_", "S", "_", "_", "_", "_", "T", "_"],
//  ["_", "P", "A", "C", "K", "A", "G", "E"],
//  ["N", "Y", "_", "_", "R", "_", "_", "L"],
//  ["_", "I", "_", "G", "_", "_", "_", "M"],
//  ["_", "_", "E", "_", "_", "_", "_", "O"],
//  ["_", "T", "B", "V", "_", "Y", "E", "S"],
//  ["_", "_", "U", "_", "_", "E", "_", "T"],
//  ["_", "S", "T", "I", "C", "K", "_", "_"]
//]
//Notes
//Words must be contained inside the grid, without wrapping over columns/rows.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(wordSearch('ALLESSAYIOPEBUTNRACANHHEHREFOXIAAERUIFNRPRGELTHXSHWTUOHSTCURLITE', ['thin', 'oil', 'tube', 'fox', 'thought', 'curl', 'air', 'essay', 'shout', 'era']), true)
//Test.assertEquals(wordSearch('DELDNUBPETENHARALOSSOUNTPCHIEFDRUROHSOTZOAWENINLCLPOKERFORBIDMTC', ['crisis', 'kit', 'pat', 'chief', 'show', 'poker', 'forbid', 'couple', 'donor', 'bundle']), false)
//Test.assertEquals(wordSearch('LOBMYSALORDOTRECENTENSIOXAUEDNDYLHSAMTLFVEINNLBLSECOACERTYMRBFEH', ['nuance', 'record', 'helmet', 'rally', 'parade', 'tension', 'symbol', 'separate', 'vein', 'ash']), false)
//Test.assertEquals(wordSearch('PEANUTIHATEFOUSTLAGBRYUGAGAOANSNCVSTXENEEISTSDERNUELHOCTTAMEPROS', ['gate', 'bee', 'bottle', 'deny', 'census', 'peanut', 'message', 'palace', 'next', 'strength']), true)
//Test.assertEquals(wordSearch('CAFZEROTEOALGWNNGSNEAECIIZPCDGFSTTDIEBFUFASCEINOIELNURVCRHTXGMCE', ['ice', 'cousin', 'resident', 'conceive', 'drift', 'heat', 'zero', 'flag', 'run', 'pierce']), false)
//Test.assertEquals(wordSearch('KARALLOCGNTEBMAIBHEOCPFMRUNEOFUMAWGKDURAVDRECAZSEMJALOTSOXVACUNU', ['mass', 'cap', 'brave', 'knee', 'collar', 'alarm', 'vacuum', 'leg', 'fur', 'lot']), true)
//Test.assertEquals(wordSearch('NYBNETADOORTNAOESAYHOPDLITRSEOWIRSHEWHRVPOGWOSNEFAMILIARTENESBHT', ['ant', 'age', 'familiar', 'net', 'root', 'say', 'prison', 'bishop', 'deliver', 'slow']), true)
//Test.assertEquals(wordSearch('HOAIKPMKWDBNSEECIEESAHMAZFDTCRBBCIRIAUEDANONPSRETEECSHOECRTTTSIF', ['debate', 'ask', 'member', 'rush', 'obscure', 'instinct', 'feed', 'fist', 'all', 'catch']), false)
//Test.assertEquals(wordSearch('EBEGLAEROZPOSTVLKYEEONEOCUTETEISIBUYRCHTRMYGSBCNTCERIDAPRDIKOMAN', ['buy', 'lost', 'real', 'breeze', 'direct', 'man', 'post', 'trick', 'degree', 'achieve']), true)
//Test.assertEquals(wordSearch('MITSFOCAERCULTURMDHYKIRTGLANCELMYPRODUCEODICSVLGLETSOOADPRYGHMNI', ['produce', 'charity', 'employ', 'art', 'gem', 'raid', 'glance', 'hole', 'moon', 'ear']), false)

