

//title: Inside, not Outside a Box

//tags: formatting,regex,strings

//url: https://edabit.com/challenge/9Wvy5ogsYeXjyzMxo

//Description:
//Write a function that returns the number of distinct items inside a box. Do not count items outside the box.
//There are four boundaries for a box and those boundaries start with a "#" and end with a "#". Look for horizontal and vertical consecutive hashes.
//Examples
//count([
//  "??????",
//  "?####?",
//  "?#&!#?",
//  "@#^Z#?",
//  "$####?"
//]) ➞ 4
//
//count([
//  "??????",
//  "?####?",
//  "?#ZZ#?",
//  "@#ZZ#?",
//  "$####?",
//  "AAAAAA"
//]) ➞ 1
//
//count([
//  "AAAAA",
//  "AAA##",
//  "AAA##",
//  "AAAAA",
//  "AAAAA"
//]) ➞ 0
//Notes
//Return 0 if the box is empty or too small to fit anything.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(count(
//["??????",
//"?####?",
//"?#&!#?",
//"@#^Z#?",
//"$####?"]), 4)
//​
//Test.assertEquals(count(
//["??????",
//"?####?",
//"?#ZZ#?",
//"@#ZZ#?",
//"$####?", 
//"AAAAAA"]), 1)
//​
//Test.assertEquals(count(
//["??????",
//"?####?",
//"?#  #?",
//"@#  #?",
//"$####?", 
//"AAAAAA"]), 0)
//​
//Test.assertEquals(count(
//["??????Z",

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Sort Beethoven`s Nicknamed Works by Genre, Nickname, and Opus Number

//tags: arrays,objects,sorting,strings

//url: https://edabit.com/challenge/knW3A8W6vpxfJa9iK

//Description:
//Write a function that takes an array of nicknamed works by Beethoven (objects with op, nickname, and genre properties, all non-empty strings) and returns an object whose keys are the pluralized genres and whose values are arrays of the corresponding work-objects, with each array sorted alphabetically by nickname (and secondarily by op in the case of a shared nickname—more on this below).
//To pluralize a genre, just add an "s", with the exception of "symphony" (pl. "symphonies").
//Each nickname has headline-style capitalization (the first letter of each word is uppercase).
//Opus-number strings (op) always begin with an integer, but some opuses contain more than one work. In that case, a work's op string will end either with a lowercase letter (e.g., "81a") or with a slash followed by another integer (e.g., "27/1"). (For a given opus that contains more than one work, either the lettering scheme or the numbering scheme is used—never both.)
//A single nickname may apply to an entire opus that contains multiple works of the same genre. Such works should be sub-sorted by their full op strings (so "1a" would precede "1b", and "1/1" would precede "1/2").
//Try to keep your code abstract! With the exception of the "symphony" genre, you don't have to know any of the values of the input-data to complete this challenge.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//const nicknamedLvBWorks = [
//  { op: '24', nickname: 'Spring', genre: 'violin sonata' },
//  { op: '125', nickname: 'Choral', genre: 'symphony' },
//  { op: '59/2', nickname: 'Razumovsky', genre: 'string quartet' },
//  { op: '73', nickname: 'Emperor', genre: 'piano concerto' },
//  { op: '28', nickname: 'Pastorale', genre: 'piano sonata' },
//  { op: '31/2', nickname: 'Tempest', genre: 'piano sonata' },
//  { op: '67', nickname: 'Fate', genre: 'symphony' },
//  { op: '70/1', nickname: 'Ghost', genre: 'piano trio' },
//  { op: '106', nickname: 'Hammerklavier', genre: 'piano sonata' },
//  { op: '55', nickname: 'Eroica', genre: 'symphony' },
//  { op: '74', nickname: 'Harp', genre: 'string quartet' },
//  { op: '53', nickname: 'Waldstein', genre: 'piano sonata' },
//  { op: '47', nickname: 'Kreutzer', genre: 'violin sonata' },
//  { op: '57', nickname: 'Appassionata', genre: 'piano sonata' },
//  { op: '81a', nickname: 'Les Adieux', genre: 'piano sonata' },
//  { op: '97', nickname: 'Archduke', genre: 'piano trio' },
//  { op: '27/1', nickname: 'Moonlight', genre: 'piano sonata' },
//  { op: '68', nickname: 'Pastoral', genre: 'symphony' },
//  { op: '59/3', nickname: 'Razumovsky', genre: 'string quartet' },
//  { op: '95', nickname: 'Serioso', genre: 'string quartet' },
//  { op: '13', nickname: 'Pathétique', genre: 'piano sonata' },
//  { op: '59/1', nickname: 'Razumovsky', genre: 'string quartet' }
//]
//​

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Spartans Cipher

//tags: algorithms,cryptography,logic,strings

//url: https://edabit.com/challenge/Q2u5rqbQ3AA3B2tFA

//Description:
//In Spartans Cipher, encoding is done by writing the text horizontally, across the strap in the plaintext word of a message. In ancient times, Spartans and Greeks invented an interesting way of encryption called Scytale.
//The ancient Greeks, and the Spartans in particular, are said to have used this cipher to communicate during military campaigns.
//Create a function that takes two arguments, a number of slides nSlide and a string message, and returns the encoded message.
//There are some variations on the rules of encipherment. One version of the cipher rules are outlined below:
//message = "Mubashir Scytale Code"
//nSlide = 6
//
//spartansCipher(message, nSlide) ➞ "Ms t euhSaC biclo aryed"
//Step 1: Imagine this Scytale:
//
//Step 2: You can write the given message on a 6 slide Scytale like this:
//| M | u | b | a |
//| s | h | i | r |
//|   | S | c | y |
//| t | a | l | e |
//|   | C | o | d |
//| e |   |   |   |
//Step 3: Encode the message column-wise:
//"Ms t euhSaC biclo aryed "
//Step 4: Trim all spaces at the end and return the final encoded message:
//"Ms t euhSaC biclo aryed"
//See the below examples for a better understanding:
//Examples
//spartansCipher("Mubashir Scytale Code", 6) ➞ "Ms t euhSaC biclo aryed"
//
//spartansCipher("Matt and Edabit are amazing", 8) ➞ "M  baai aaEirmn tndteag tda  z"
//
//spartansCipher("", 99) ➞ ""
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(spartansCipher("Mubashir Scytale Code", 6), "Ms t euhSaC biclo aryed")
//Test.assertEquals(spartansCipher("Matt and Edabit are amazing", 8), "M  baai aaEirmn tndteag tda  z")
//Test.assertEquals(spartansCipher("Evgeny SH will make decipher of this challenge", 8), "E lepf evSl h cngH dethge merhaenwac il yikiosl")
//Test.assertEquals(spartansCipher("HELPMEIAMUNDERATTACK", 4), "HENTEIDTLAEAPMRCMUAK")
//Test.assertEquals(spartansCipher("", 99), "")
//Test.assertEquals(spartansCipher("TheQuickBrownFoxJumpsOverTheLazyDog.", 6), "TcnmrzhkFpTyeBoshDQrxOeouoJvLgiwuea.")
//// Mubashir

