

//title: Capitalize the First Letter of Each Word

//tags: formatting,loops,regex,strings

//url: https://edabit.com/challenge/LvtsCQNpx7CwHGubf

//Description:
//Create a function that takes a string as an argument and converts the first character of each word to uppercase. Return the newly formatted string.
//Examples
//makeTitle("This is a title") ➞ "This Is A Title"
//
//makeTitle("capitalize every word") ➞ "Capitalize Every Word"
//
//makeTitle("I Like Pizza") ➞ "I Like Pizza"
//
//makeTitle("PIZZA PIZZA PIZZA") ➞ "PIZZA PIZZA PIZZA"
//Notes
//You can expect a valid string for each test case.
//Some words may contain more than one uppercase letter (see example #4).

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(makeTitle("I am a title"), "I Am A Title")
//Test.assertSimilar(makeTitle("I AM A TITLE"), "I AM A TITLE")
//Test.assertSimilar(makeTitle("i aM a tITLE"), "I AM A TITLE")
//Test.assertSimilar(makeTitle("the first letter of every word is capitalized"), "The First Letter Of Every Word Is Capitalized")
//Test.assertSimilar(makeTitle("I Like Pizza"), "I Like Pizza")
//Test.assertSimilar(makeTitle("Don't count your ChiCKens BeFore They HatCh"), "Don't Count Your ChiCKens BeFore They HatCh")
//Test.assertSimilar(makeTitle("All generalizations are false, including this one"), "All Generalizations Are False, Including This One")
//Test.assertSimilar(makeTitle("Me and my wife lived happily for twenty years and then we met."), "Me And My Wife Lived Happily For Twenty Years And Then We Met.")
//Test.assertSimilar(makeTitle("There are no stupid questions, just stupid people."), "There Are No Stupid Questions, Just Stupid People.")
//Test.assertSimilar(makeTitle("1f you c4n r34d 7h15, you r34lly n33d 2 g37 l41d"), "1f You C4n R34d 7h15, You R34lly N33d 2 G37 L41d")
//Test.assertSimilar(makeTitle("PIZZA PIZZA PIZZA"), "PIZZA PIZZA PIZZA")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Equality of 3 Values

//tags: algorithms,conditions,numbers

//url: https://edabit.com/challenge/PKiTjA7SLK99ZZ8GK

//Description:
//Create a function that takes three integer arguments (a, b, c) and returns the amount of integers which are of equal value.
//Examples
//equal(3, 4, 3) ➞ 2
//
//equal(1, 1, 1) ➞ 3
//
//equal(3, 4, 1) ➞ 0
//Notes
//Your function must return 0, 2 or 3.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(equal(2,3,4), 0, "All values are differents");
//Test.assertEquals(equal(7,3,7), 2, "Two values are equal");
//Test.assertEquals(equal(4,4,4), 3, "All 3 values are equal");
//Test.assertEquals(equal(7,3,4), 0, "All values are differents");
//Test.assertEquals(equal(3,3,6), 2, "Two values are equal");
//Test.assertEquals(equal(1,1,1), 3, "All 3 values are equal");
//Test.assertEquals(equal(1,7,6), 0, "All values are differents");
//Test.assertEquals(equal(7, 7, 7), 3, "All 3 values are equal");

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Reverse Words Starting With a Particular Letter

//tags: higher_order_functions,strings

//url: https://edabit.com/challenge/KffCqRz23XL5ewbgH

//Description:
//Write a function that reverses all the words in a sentence that start with a particular letter.
//Examples
//specialReverse("word searches are super fun", "s")
//➞ "word sehcraes are repus fun"
//
//specialReverse("first man to walk on the moon", "m")
//➞ "first nam to walk on the noom"
//
//specialReverse("peter piper picked pickled peppers", "p")
//➞ "retep repip dekcip delkcip sreppep"
//Notes
//Reverse the words themselves, not the entire sentence.
//All characters in the sentence will be in lower case.

//code area
///////////////////////////////////////////////////////////////////////////
class Reverse {
    constructor() {
        let array = []
        this.separate = function (string) {
            array = string.split(' ')
            return array
        }
        this.search = function (letter) {
            let newArr = array.map((element => {
                return element[0] == letter ? element.split('').reverse().join('') : element
            }))
            array = newArr
            return array
        }
        this.view = function () {
            return console.log('\narray:', array)
        }
        this.result = function () {
            return array.join(' ')
        }
    }
}
const specialReverse = (string, letter) => {
    let reverse = new Reverse
    reverse.separate(string)
    reverse.search(letter)
    reverse.view()
    return reverse.result()
}
//////////////////////////////////////////////////////////////////////////

//tests:

// Test.assertEquals(specialReverse('word searches are super fun', 's'), 'word sehcraes are repus fun')
// Test.assertEquals(specialReverse('first man to walk on the moon', 'm'), 'first nam to walk on the noom')
// Test.assertEquals(specialReverse('peter piper picked pickled peppers', 'p'), 'retep repip dekcip delkcip sreppep')
// Test.assertEquals(specialReverse('he went to climb mount everest', 'p'), 'he went to climb mount everest')

