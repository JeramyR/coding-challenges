

//title: Cleaning Project Files

//tags: regex,strings

//url: https://edabit.com/challenge/pw8taSZSektvqcDS2

//Description:
//You are in the midst of organizing all of your coding projects. It's a mess! Every file you've ever created is located in the same folder.
//To clean it up, you've decided that you will use one of two organization methods.
//The prefix method: You will group all files with the same project name under the same folder.
//The suffix method: You will group all files with the same extension under the same folder.
//Create a function that takes in the current folder sorts the files according to the organization method (prefix or suffix). A folder is a grouping of files in the same array.
//Examples
//// Sorting by project name (ex1 and ex2)
//cleanUp(["ex1.html", "ex1.js", "ex2.html", "ex2.js"], "prefix") ➞ [
//  ["ex1.html", "ex1.js"],
//  ["ex2.html", "ex2.js"]
//]
//
//// Sorting by extension (.html and .js)
//cleanUp(["ex1.html", "ex1.js", "ex2.html", "ex2.js"], "suffix") ➞ [
//  ["ex1.html", "ex2.html"],
//  ["ex1.js", "ex2.js"]
//]
//
//cleanUp(["music_app.js", "music_app.png", "music_app.wav", "tetris.png", "tetris.js"], "prefix") ➞ [
//  ["music_app.js", "music_app.png", "music_app.wav"],
//  ["tetris.png", "tetris.js"]
//]
//
//cleanUp(["_1.rb", "_2.rb", "_3.rb", "_4.rb"], "suffix") ➞ [
//  ["_1.rb", "_2.rb", "_3.rb", "_4.rb"]
//]
//
//cleanUp(["_1.rb", "_2.rb", "_3.rb", "_4.rb"], "prefix") ➞ [
//  ["_1.rb"], ["_2.rb"],
//  ["_3.rb"], ["_4.rb"]
//]
//Notes
//Keep elements in the same relative order.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

// Test.assertSimilar(cleanUp(['music_app.js', 'music_app.png', 'music_app.wav', 'tetris.png', 'tetris.js'], 'prefix'), [['music_app.js', 'music_app.png', 'music_app.wav'], ['tetris.png', 'tetris.js']])
//Test.assertSimilar(cleanUp(['_1.rb', '_2.rb', '_3.rb', '_4.rb'], 'suffix'), [['_1.rb', '_2.rb', '_3.rb', '_4.rb']])
//Test.assertSimilar(cleanUp(['_1.rb', '_2.rb', '_3.rb', '_4.rb'], 'prefix'), [['_1.rb'], ['_2.rb'], ['_3.rb'], ['_4.rb']])
// Test.assertSimilar(cleanUp(['project1.html', 'project2.html', 'project1.css', 'project2.css', 'project1.js', 'project2.js'], 'suffix'), [['project1.html', 'project2.html'], ['project1.css', 'project2.css'], ['project1.js', 'project2.js']])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Sexagenary Cycle (Chinese Zodiac)

//tags: language_fundamentals,loops

//url: https://edabit.com/challenge/pDEXzeuQAowyoa623

//Description:
//In early recorded Chinese history, time was reckoned using the sexagenary (60-year) cycle, generated from two subcycles:
//Five heavenly stems (elements) in this order: wood, fire, earth, metal, water. The stems change every two years.
//Twelve earthly branches (animals) in this order: rat, ox, tiger, rabbit, dragon, snake, horse, sheep, monkey, rooster, dog, pig. The branches change yearly.
//The combinations between these two sub-cycles result in a 60-year cycle where no two years are the same — for example, the 5 years of the Rat have 5 different elements: 1924 Wood Rat, 1936 Fire Rat, 1948 Earth Rat, 1960 Metal Rat, 1972 Water Rat.
//The first 14 years of the current cycle are shown in the table below:
//Gregorian Year	Stem	Branch
//1984	Wood	Rat
//1985	Wood	Ox
//1986	Fire	Tiger
//1987	Fire	Rabbit
//1988	Earth	Dragon
//1989	Earth	Snake
//1990	Metal	Horse
//1991	Metal	Sheep
//1992	Water	Monkey
//1993	Water	Rooster
//1994	Wood	Dog
//1995	Wood	Pig
//1996	Fire	Rat
//1997	Fire	Ox
//These days, the sexagenary cycle is used mainly for historical celebrations and events, and in Chinese astrology. The Gregorian calendar is now the standard means of reckoning time.
//Create a function that takes a number representing a year in the Gregorian calendar, and returns a string consisting of the corresponding stem-and-branch combination in the sexagenary cycle.
//Examples
//sexagenary(1971) ➞ "Metal Pig"
//
//sexagenary(1927) ➞ "Fire Rabbit"
//
//sexagenary(1974) ➞ "Wood Tiger"
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(sexagenary(1971), 'Metal Pig')
//Test.assertEquals(sexagenary(1927), 'Fire Rabbit')
//Test.assertEquals(sexagenary(2017), 'Fire Rooster')
//Test.assertEquals(sexagenary(2000), 'Metal Dragon')
//Test.assertEquals(sexagenary(1958), 'Earth Dog')
//Test.assertEquals(sexagenary(1942), 'Water Horse')
//Test.assertEquals(sexagenary(1974), 'Wood Tiger')

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Product of Digits of Sum

//tags: arrays,math,numbers

//url: https://edabit.com/challenge/Kzmyf4pLx66ZRsnWk

//Description:
//Create a function that takes one, two or more numbers as arguments and adds them together to get a new number. The function then repeatedly multiplies the digits of the new number by each other, yielding a new number, until the product is only 1 digit long. Return the final product.
//Examples
//sumDigProd(16, 28) ➞ 6
//// 16 + 28 = 44
//// 4 * 4 =  16
//// 1 * 6 = 6
//
//sumDigProd(0) ➞ 0
//
//sumDigProd(1, 2, 3, 4, 5, 6) ➞ 2
//Notes
//The input of the function is at least one number.

//code area
///////////////////////////////////////////////////////////////////////////
const sumDigProd = (...args) => {
    let added = args.reduce((a, c) => a + c).toString().split('')
    const loopy = array => {
        let acc = array.reduce((a, c) => a * c), aux = []
        aux.push(acc.toString().split(''))
        array.length > 1 ?
            loopy(aux.flat())
            :
            num = +array[0]
    }
    loopy(added)
    return num
}
//////////////////////////////////////////////////////////////////////////
//tests:
// Test.assertEquals(sumDigProd(8, 16, 89, 3), 6)
// Test.assertEquals(sumDigProd(16, 28), 6)
// Test.assertEquals(sumDigProd(9), 9)
// Test.assertEquals(sumDigProd(26, 497, 62, 841), 6)
// Test.assertEquals(sumDigProd(0), 0)
// Test.assertEquals(sumDigProd(17737, 98723, 2), 6)
// Test.assertEquals(sumDigProd(123, -99), 8)
// Test.assertEquals(sumDigProd(9, 8), 7)
// Test.assertEquals(sumDigProd(167, 167, 167, 167, 167, 3), 8)
// Test.assertEquals(sumDigProd(111111111), 1)
// Test.assertEquals(sumDigProd(98526, 54, 863, 156489, 45, 6156), 2)
// Test.assertEquals(sumDigProd(999, 999), 8)
// Test.assertEquals(sumDigProd(1, 2, 3, 4, 5, 6), 2)
// Test.assertEquals(sumDigProd(999, 2222), 2)
// Test.assertEquals(sumDigProd(8618, -2), 6)

