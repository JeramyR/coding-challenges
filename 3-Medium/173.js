

//title: The Sweetest Ice Cream

//tags: arrays,classes,numbers

//url: https://edabit.com/challenge/HKmJFmZZCX53ff4ke

//Description:
//Create a function which takes an array of instances from the class IceCream and returns the sweetness value of the sweetest ice cream.
//Sweetness is calculated from the flavor and number of sprinkles. Each sprinkle has a sweetness value of 1, and the sweetness values for the flavors are as follows:
//Flavors	Sweetness Value
//Plain	0
//Vanilla	5
//ChocolateChip	5
//Strawberry	10
//Chocolate	10
//You'll be given instance properties in the order flavor, numSprinkles.
//Examples
//ice1 = IceCream("Chocolate", 13)         // value of 23
//ice2 = IceCream("Vanilla", 0)           // value of 5
//ice3 = IceCream("Strawberry", 7)        // value of 17
//ice4 = IceCream("Plain", 18)             // value of 18
//ice5 = IceCream("ChocolateChip", 3)      // value of 8
//
//sweetestIcecream([ice1, ice2, ice3, ice4, ice5]) ➞ 23
//
//sweetestIcecream([ice3, ice1]) ➞ 23
//
//sweetestIcecream([ice3, ice5]) ➞ 17
//Notes
//Remember to only return the sweetness value.
//IceCream class is provided (check Tests tab).

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//class IceCream {
//  constructor(flavor, numSprinkles) {
//    this.flavor = flavor
//    this.numSprinkles = numSprinkles
//  }
//}
//​
//ice1 = new IceCream("Chocolate", 13)
//ice2 = new IceCream("Vanilla", 0)
//ice3 = new IceCream("Strawberry", 7)
//ice4 = new IceCream("Plain", 18)
//ice5 = new IceCream("ChocolateChip", 3)
//ice6 = new IceCream("Chocolate", 23)
//ice7 = new IceCream("Strawberry", 0)
//ice8 = new IceCream("Plain", 34)
//ice9 = new IceCream("Plain", 81)
//ice10 = new IceCream("Vanilla", 12)
//​
//Test.assertEquals(sweetestIcecream([ice1, ice2, ice3, ice4, ice5]), 23)
//Test.assertEquals(sweetestIcecream([ice7, ice10, ice1, ice6, ice8, ice10, ice2, ice2]), 34)
//Test.assertEquals(sweetestIcecream([ice10, ice10, ice6, ice8, ice4]), 34)
//Test.assertEquals(sweetestIcecream([ice2, ice10, ice6, ice9, ice7]), 81)
//Test.assertEquals(sweetestIcecream([ice10, ice6, ice4, ice1, ice7, ice8, ice6]), 34)
//Test.assertEquals(sweetestIcecream([ice3, ice1]), 23)
//Test.assertEquals(sweetestIcecream([ice6, ice7, ice5, ice4, ice3]), 33)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Words that Start with a Vowel

//tags: regex,strings

//url: https://edabit.com/challenge/KZwvC92KweCGiwiXF

//Description:
//Write a function that retrieves all words that begin with a vowel.
//Examples
//retrieve("A simple life is a happy life for me.") ➞ ["a", "is", "a"]
//
//retrieve("Exercising is a healthy way to burn off energy.")
//➞ ["exercising", "is", "a", "off", "energy"]
//
//retrieve("The poor ostrich was ostracized.")
//➞ ["ostrich", "ostracized"]
//
//retrieve("")
//➞ []
//Notes
//Make all words lower case in the output.
//Retrieve the words in the order they appear in the sentence.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(retrieve("A simple life is a happy life for me."), ["a", "is", "a"])
//Test.assertSimilar(retrieve("Exercising is a healthy way to burn off energy."), ["exercising", "is", "a", "off", "energy"])
//Test.assertSimilar(retrieve("The poor ostrich was ostracized."), ["ostrich", "ostracized"])
//Test.assertSimilar(retrieve(""), [])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: From A to Z

//tags: language_fundamentals,strings

//url: https://edabit.com/challenge/sJSKWWeSYqov6ew44

//Description:
//Given a string indicating a range of letters, return a string which includes all the letters in that range, including the last letter. Note that if the range is given in capital letters, return the string in capitals also!
//Examples
//gimmeTheLetters("a-z") ➞ "abcdefghijklmnopqrstuvwxyz"
//
//gimmeTheLetters("h-o") ➞ "hijklmno"
//
//gimmeTheLetters("Q-Z") ➞ "QRSTUVWXYZ"
//
//gimmeTheLetters("J-J") ➞ "J"
//Notes
//A hyphen will separate the two letters in the string.
//You don't need to worry about error handling in this one (i.e. both letters will be the same case and the second letter will always be after the first alphabetically).

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(gimmeTheLetters("a-z"), "abcdefghijklmnopqrstuvwxyz")
//Test.assertEquals(gimmeTheLetters("h-o"), "hijklmno")
//Test.assertEquals(gimmeTheLetters("Q-Z"), "QRSTUVWXYZ")
//Test.assertEquals(gimmeTheLetters("J-J"), "J")
//Test.assertEquals(gimmeTheLetters("a-b"), "ab")
//Test.assertEquals(gimmeTheLetters("A-A"), "A")
//Test.assertEquals(gimmeTheLetters("g-i"), "ghi")
//Test.assertEquals(gimmeTheLetters("H-I"), "HI")
//Test.assertEquals(gimmeTheLetters("y-z"), "yz")
//Test.assertEquals(gimmeTheLetters("e-k"), "efghijk")
//Test.assertEquals(gimmeTheLetters("a-q"), "abcdefghijklmnopq")
//Test.assertEquals(gimmeTheLetters("F-O"), "FGHIJKLMNO")

