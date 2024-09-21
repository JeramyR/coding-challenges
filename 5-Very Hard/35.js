

//title: Add Two String Numbers

//tags: language_fundamentals,math,numbers,strings

//url: https://edabit.com/challenge/3q6tbKL8BS4CgaR4c

//Description:
//Write a function that adds two numbers. The catch, however, is that the numbers will be strings.
//Examples
//addStrNums("4", "5") ➞ "9"
//
//addStrNums("abcdefg", "3") ➞ "-1"
//
//addStrNums("1", "") ➞ "1"
//
//addStrNums("1874682736267235927359283579235789257", "32652983572985729") ➞ "1874682736267235927391936562808774986"
//Notes
//If there are any non-numerical characters, return "-1".
//An empty parameter should be treated as "0".
//Your function should be able to add any size number.
//Your function doesn't have to add negative numbers.
//Zeros at the beginning of the string should be trimmed.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(addStrNums("", ""), "0")
//Test.assertEquals(addStrNums("1", "01"), "2")
//Test.assertEquals(addStrNums("1",""), "1")
//Test.assertEquals(addStrNums("198547982570192857109283570192837509218375091283750192835710298357019237509125710925710923759012375901275901285701925712035712983571092562945875310962518235712385971230956127856123571209358712905610923587102395716258125612095710298","510298570192857910827519027510982561875691857120958371029586187585198273501982573091857091875901875809175091659812750918275091875091857918265901265918659816591750981750981759817598175089175891720570129571098758901750917501975"), "198548492868763049967194397711865020200936966975607313794081327943206822707399212908284015616104251803151710460793585524786631258662967654803793576863784154372202562981937878837883388807533802081502644157231966815017027363013212273")
//Test.assertEquals(addStrNums("0000001", "020006"), "20007")
//Test.assertEquals(addStrNums("1325123515s238579875987", "38698592523525325"), "-1")
//Test.assertEquals(addStrNums("123456788654323456543456765432345678843234567150666666666666612735980127350918265309182653091635916258165871265087126121827562875835613875612875360182653127560192756012975608172560817653081760126578132617265192561923051397585261519826512951827401928470192864312873561298357120985710927561287356129857120851235612835712935612385971230598612035912635189273651289357120983571298035612836518237481235098172350891623508912375981206598127539128035619286350912836509123856710298560918236590138257013257219857182935681923569032656109851629851605109283560192863598126359125710982375918237598125091256012893570128357128935609128350192873501928365019283750129837401928374019283740189237401298374019823740912365012381075109823650912837501923561023650123659812375091862350912735", "1023570192835719836509165309156091653091875309312365123569182365123051235710298365109236501928365019283650291836501928365091256109823560921865091263509126509126350921568091265309128653091263590165309160912653809126510560165016501650650165016835610285172356137845623745623592835692836592837569283756832795693827564"), "123456788654323456543456765432345678843234567150666666666666612735980127350918265309182653091635916258165871265087126121827562875835613875612875360182653127560192756012975608172560817653081760126578132617265192561923051397585261519826512951827401928470192864312873561298357120985710927561287356129857120851235612835712935612385971230598612035912635189273651289357120983571298035612836518237481235098172350891623508912375981206598127539128035619286350913860079316692430135070083545746229910105132529169548059251105934155707345561928216714345785488557882881776650962212910741009493707948652177877984833637483638061960049918284138811057018110547340295146562841027828410250749402417800024669988757747975297553431247669274658461094759253860242961229096131924658044740299")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Separate the Numbers

//tags: algorithms,strings

//url: https://edabit.com/challenge/fRsbKepgD2rrhaQGB

//Description:
//A numeric string s is beautiful if it can be split into a sequence of two or more positive integers, a[1], a[2], ...a[n], satisfying the following conditions:
//a[i] - a[i-1] = 1 for any 1 < i <= n (i.e. each element in the sequence is one more than the previous element).
//No a[i] contains a leading zero. For example, we can split s = 10203 into the sequence {1, 02, 03}, but it is not beautiful because 02 and 03 have leading zeroes.
//The contents of the sequence cannot be rearranged. For example, we can split s = 312 into the sequence {3, 1, 2}, but it is not beautiful because it breaks our first constraint (i.e. 1 - 3 ≠ 1).
//Return either "YES x" where x is the smallest first number of the increasing sequence or "NO" if there is no valid sequence.
//Examples
//separateNumbers("1234") ➞ "YES 1"
//
//separateNumbers("91011") ➞ "YES 9"
//
//separateNumbers("99100") ➞ "YES 99"
//
//separateNumbers("101103") ➞ "NO"
//
//separateNumbers("010203") ➞ "NO"
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(separateNumbers("99910001001"), "YES 999")
//Test.assertEquals(separateNumbers("1234"), "YES 1")
//Test.assertEquals(separateNumbers("91011"), "YES 9")
//Test.assertEquals(separateNumbers("101103"), "NO")
//Test.assertEquals(separateNumbers("010203"), "NO")
//Test.assertEquals(separateNumbers("13"), "NO")
//Test.assertEquals(separateNumbers("1"), "NO")
//Test.assertEquals(separateNumbers("999100010001"), "NO")
//Test.assertEquals(separateNumbers("7891011"), "YES 7")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Shadow Sentences

//tags: loops,strings,validation

//url: https://edabit.com/challenge/Y37nu6EeGLJW7Wjge

//Description:
//Given two sentences, return whether they are shadows of each other. This means that all of the word lengths are the same, but the corresponding words don't share any common letters.
//Examples
//shadowSentence("they are round", "fold two times") ➞ true
//
//shadowSentence("own a boat", "buy my wine") ➞ false
//// No words share common letters, but "a" and "my" have different lengths.
//
//shadowSentence("his friends", "our company") ➞ false
//// Word lengths are the same but "friends" and "company" share the letter "n".
//
//shadowSentence("salmonella supper", "birthright") ➞ false
//// Setences with different numbers of words.
//Notes
//All sentences will be given in lowercase, and will have no punctuation.
//Return false if the sentences have different numbers of words.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(shadowSentence('they are round', 'fold two times'), true)
//Test.assertEquals(shadowSentence('impossible poetry', 'gargantuan cliffs'), true)
//Test.assertEquals(shadowSentence('seemingly unlimited', 'cutthroat crossbows'), true)
//Test.assertEquals(shadowSentence('empty cookie jar', 'adorn fluffy wig'), true)
//​
//Test.assertEquals(shadowSentence('own a boat', 'buy my wine'), false)
//Test.assertEquals(shadowSentence('his friends', 'our company'), false)
//Test.assertEquals(shadowSentence('a normal sentence', 'a normal sentence'), false)
//Test.assertEquals(shadowSentence('salmonella supper', 'birthright'), false)
//​
//// Author: Joshua Señoron

