

//title: Sort a String by Its Last Character

//tags: sorting,strings

//url: https://edabit.com/challenge/ZeNq6QYyDMk8bKsaJ

//Description:
//Create a function that takes a string of words and return a string sorted alphabetically by the last character of each word.
//Examples
//sortByLast("herb camera dynamic") ➞ "camera herb dynamic"
//
//sortByLast("stab traction artist approach") ➞ "stab approach traction artist"
//
//sortByLast("sample partner autonomy swallow trend") ➞ "trend sample partner swallow autonomy"
//Notes
//Tests consist of lowercase alphabetic characters (a-z) and spaces.
//If two words have the same last character, sort by the order they originally appeared.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(sortByLast("herb camera dynamic"), "camera herb dynamic");
//Test.assertEquals(sortByLast("stab traction artist approach"), "stab approach traction artist");
//Test.assertEquals(sortByLast("sample partner autonomy swallow trend"), "trend sample partner swallow autonomy");
//Test.assertEquals(sortByLast("dividend platform pupil conclusion silence breakfast"), "dividend silence pupil platform conclusion breakfast");
//Test.assertEquals(sortByLast("harm"), "harm");
//Test.assertEquals(sortByLast("card warrant opinion medium illustrate"), "card illustrate medium opinion warrant");
//Test.assertEquals(sortByLast("cause fine virtue"), "cause fine virtue");
//Test.assertEquals(sortByLast("introduce fashionable cause sacrifice reality"), "introduce fashionable cause sacrifice reality");
//Test.assertEquals(sortByLast("brick moral institution loud talk resign worth"), "loud worth brick talk moral institution resign");

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: The Perrin Sequence

//tags: algorithms,arrays,recursion

//url: https://edabit.com/challenge/BX7cQ3bxKzqrRJer8

//Description:
//Each number in the Perrin sequence is created by summing the numbers two positions and three positions before it. The first three numbers are (3, 0, 2), and the sequence is extended as follows:
//P(0) P(1) P(2) P(3) P(4) P(5) P(6) P(7) ... P(n)
//3, 0, 2, 3, 2, 5, 5, 7, ...
//Given a value for n, return the Perrin number P(n).
//Examples
//perrin(1) ➞ 0
//
//perrin(8) ➞ 10
//
//perrin(26) ➞ 1497
//Notes
//Check the Resources tab for a further explanation of the Perrin sequence.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(perrin(0), 3)
//Test.assertEquals(perrin(38), 43721)
//Test.assertEquals(perrin(58), 12110402)
//Test.assertEquals(perrin(52), 2240877)
//Test.assertEquals(perrin(36), 24914)
//Test.assertEquals(perrin(44), 236282)
//Test.assertEquals(perrin(50), 1276942)
//Test.assertEquals(perrin(42), 134643)
//Test.assertEquals(perrin(27), 1983)
//Test.assertEquals(perrin(17), 119)
//Test.assertEquals(perrin(45), 313007)
//Test.assertEquals(perrin(46), 414646)
//Test.assertEquals(perrin(28), 2627)
//Test.assertEquals(perrin(37), 33004)
//Test.assertEquals(perrin(43), 178364)
//Test.assertEquals(perrin(22), 486)
//Test.assertEquals(perrin(25), 1130)
//Test.assertEquals(perrin(51), 1691588)
//Test.assertEquals(perrin(34), 14197)
//Test.assertEquals(perrin(15), 68)
//Test.assertEquals(perrin(41), 101639)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Missing Letters

//tags: loops,strings

//url: https://edabit.com/challenge/oYi96pXKazhquXXoT

//Description:
//Given a string containing unique letters, return a sorted string with the letters that don't appear in the string.
//Examples
//getMissingLetters("abcdefgpqrstuvwxyz") ➞ "hijklmno"
//
//getMissingLetters("zyxwvutsrq") ➞ "abcdefghijklmnop"
//
//getMissingLetters("abc") ➞ "defghijklmnopqrstuvwxyz"
//
//getMissingLetters("abcdefghijklmnopqrstuvwxyz") ➞ ""
//Notes
//The combination of both strings should be 26 elements long, including all the letters in the alphabet.
//Letters will all be in lowercase.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(getMissingLetters("abcdefgpqrstuvwxyz"), "hijklmno")
//Test.assertEquals(getMissingLetters("zyxwvutsrq"), "abcdefghijklmnop")
//Test.assertEquals(getMissingLetters(""), "abcdefghijklmnopqrstuvwxyz")
//Test.assertEquals(getMissingLetters("abcdefghijklmnopqrstuvwxyz"), "")
//Test.assertEquals(getMissingLetters("qinjwm"), "abcdefghkloprstuvxyz")
//Test.assertEquals(getMissingLetters("luiqtkgwzheapr"), "bcdfjmnosvxy")
//Test.assertEquals(getMissingLetters("qankj"), "bcdefghilmoprstuvwxyz")
//Test.assertEquals(getMissingLetters("bawgeuskmfcrpodnxztviy"), "hjlq")
//Test.assertEquals(getMissingLetters("gdpna"), "bcefhijklmoqrstuvwxyz")
//Test.assertEquals(getMissingLetters("hbi"), "acdefgjklmnopqrstuvwxyz")
//Test.assertEquals(getMissingLetters("djxifockvwhaqbnmstzpylu"), "egr")
//Test.assertEquals(getMissingLetters("gastzwjcnvoprfmxd"), "behiklquy")
//Test.assertEquals(getMissingLetters("xuti"), "abcdefghjklmnopqrsvwyz")
//Test.assertEquals(getMissingLetters("abc"), "defghijklmnopqrstuvwxyz")
//Test.assertEquals(getMissingLetters("kchiatvmbqrdsyopwju"), "efglnxz")
//Test.assertEquals(getMissingLetters("xbkj"), "acdefghilmnopqrstuvwyz")
//Test.assertEquals(getMissingLetters("cbvkyroes"), "adfghijlmnpqtuwxz")
//Test.assertEquals(getMissingLetters("s"), "abcdefghijklmnopqrtuvwxyz")
//Test.assertEquals(getMissingLetters("idvgzujmswloefcthb"), "aknpqrxy")
//Test.assertEquals(getMissingLetters("fmoraygevhkxzutcjd"), "bilnpqsw")
//Test.assertEquals(getMissingLetters("vuynqpaf"), "bcdeghijklmorstwxz")
//Test.assertEquals(getMissingLetters("j"), "abcdefghiklmnopqrstuvwxyz")

