

//title: Know Your Neighbor

//tags: conditions,regex,strings,validation

//url: https://edabit.com/challenge/SXEBbL4xhgKJr7pqd

//Description:
//Create a function that takes a string as an argument and returns true if each letter in the string is surrounded by a plus sign. Return false otherwise.
//Examples
//plusSign("+f+d+c+#+f+") ➞ true
//
//plusSign("+d+=3=+s+") ➞ true
//
//plusSign("f++d+g+8+") ➞ false
//
//plusSign("+s+7+fg+r+8+") ➞ false
//Notes
//For clarity, each letter must have a plus sign on both sides.

//code area
///////////////////////////////////////////////////////////////////////////
const plusSign = str => {
    let bool = true
    let reg = /\+/

    for (let i = 0; i < str.length; i++) {
        if (str.charCodeAt(i) > 96 && str.charCodeAt(i) < 123) {
            if (!reg.test(str[i - 1]) || !reg.test(str[i + 1])) {
                return false
            }
        }
    }
    return bool
    // console.log(str.match(/(?<=\+)\w/g))
    // console.log(str.match(/\w(?=\+)/g))

}
//////////////////////////////////////////////////////////////////////////

//tests:

// Test.assertEquals(plusSign("a+"), false)
// Test.assertEquals(plusSign("+d+k+##f+"), false)
// Test.assertEquals(plusSign("hf+d++#+f+"), false)
// Test.assertEquals(plusSign("+f+d+c+#+f+"), true)
// Test.assertEquals(plusSign("+d+=3=+s+"), true)
// Test.assertEquals(plusSign("+d+i+#+c+"), true)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Balanced Words

//tags: strings,validation

//url: https://edabit.com/challenge/8QTBwLzAdaM8wkrXu

//Description:
//We can assign a value to each character in a word, based on their position in the alphabet (a = 1, b = 2, ... , z = 26). A balanced word is one where the sum of values on the left-hand side of the word equals the sum of values on the right-hand side. For odd length words, the middle character (balance point) is ignored.
//Write a function that returns true if the word is balanced, and false if it's not.
//Examples
//balanced("zips") ➞ true
//// "zips" = "zi|ps" = 26+9|16+19 = 35|35 = true
//
//balanced("brake") ➞ false
//// "brake" = "br|ke" = 2+18|11+5 = 20|16 = false
//Notes
//All words will be lowercase, and have a minimum of 2 characters.
//Palindromic words will always be balanced.

//code area
///////////////////////////////////////////////////////////////////////////
const balanced = str => {
    let numArr = []
    let half1End = 0
    let half2Start = 0
    let num1 = []
    let num2 = []

    for (let i = 0; i < str.length; i++) {
        let x = 96
        numArr.push(str.charCodeAt(i) - x)
    }

    if (numArr.length % 2 === 0) {
        half1End = (numArr.length / 2) - 1
        half2Start = (numArr.length / 2)
    }
    else {
        half1End = Math.floor((numArr.length / 2) - 1)
        half2Start = Math.ceil((numArr.length / 2))
    }

    for (let j = 0; j < numArr.length; j++) {
        j <= half1End ?
            num1.push(numArr[j])
            :
            j >= half2Start &&
            num2.push(numArr[j])

    }

    let x = num1.reduce((acc, cur) => acc + cur)
    let y = num2.reduce((acc, cur) => acc + cur)
    return x === y ? true : false
}


//////////////////////////////////////////////////////////////////////////

//tests:

// Test.assertEquals(balanced('at'), false)
// Test.assertEquals(balanced('forgetful'), false)
// Test.assertEquals(balanced('vegetation'), true)
// Test.assertEquals(balanced('disillusioned'), false)
// Test.assertEquals(balanced('abstract'), true)
// Test.assertEquals(balanced('clever'), false)
// Test.assertEquals(balanced('conditionalities'), true)
// Test.assertEquals(balanced('seasoning'), true)
// Test.assertEquals(balanced('uptight'), false)
// Test.assertEquals(balanced('ticket'), false)
// Test.assertEquals(balanced('calculate'), false)
// Test.assertEquals(balanced('measure'), false)
// Test.assertEquals(balanced('join'), false)
// Test.assertEquals(balanced('anesthesiologies'), true)
// Test.assertEquals(balanced('command'), false)
// Test.assertEquals(balanced('graphite'), true)
// Test.assertEquals(balanced('quadratically'), true)
// Test.assertEquals(balanced('right'), false)
// Test.assertEquals(balanced('fossil'), true)
// Test.assertEquals(balanced('sparkling'), false)
// Test.assertEquals(balanced('dolphin'), true)
// Test.assertEquals(balanced('baseball'), true)
// Test.assertEquals(balanced('immense'), false)
// Test.assertEquals(balanced('pattern'), true)
// Test.assertEquals(balanced('hand'), false)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Remove the Last Vowel

//tags: formatting,strings

//url: https://edabit.com/challenge/rEyBNGafoHLYmyKfj

//Description:
//Write a function that removes the last vowel in each word in a sentence.
//Examples
//removeLastVowel("Those who dare to fail miserably can achieve greatly.")
//➞ "Thos wh dar t fal miserbly cn achiev gretly."
//
//removeLastVowel("Love is a serious mental disease.")
//➞ "Lov s  serios mentl diseas"
//
//removeLastVowel("Get busy living or get busy dying.")
//➞ "Gt bsy livng r gt bsy dyng"
//Notes
//Vowels are: a, e, i, o, u (both upper and lowercase).

//code area
///////////////////////////////////////////////////////////////////////////
const removeLastVowel = str => {
    let arr = str.split(' ')
    let arrOfWords = str
        .split(' ')
        .map(e => [e])
        .map(el => el[0]
            .split(''))
    let wordArr = arrOfWords
    let vowelIdx = arr.map((e, i, r) => {
        let reg = /[aeiou]/ig, vowels = e.match(reg), vowel = vowels[vowels.length - 1]
        return e.lastIndexOf(vowel)
    })

    arrOfWords = []
    let missLtrArr = [], vowelIdxCount = 0, wordCount = 0
    while (vowelIdxCount < vowelIdx.length) {
        wordArr[wordCount].splice(vowelIdx[vowelIdxCount], 1)
        missLtrArr.push(wordArr[wordCount])
        wordCount++
        vowelIdxCount++
    }

    return missLtrArr
        .map(e => e.map(el => el).join(''))
        .join(' ')
}
//////////////////////////////////////////////////////////////////////////
//tests:
// Test.assertEquals(removeLastVowel("Those who dare to fail miserably can achieve greatly."),
//     "Thos wh dar t fal miserbly cn achiev gretly.")
// Test.assertEquals(removeLastVowel("Love is a serious mental disease."), "Lov s  serios mentl diseas.")
// Test.assertEquals(removeLastVowel("Get busy living or get busy dying."), "Gt bsy livng r gt bsy dyng.")
// Test.assertEquals(removeLastVowel("If you want to live a happy life, tie it to a goal, not to people."), "f yo wnt t liv  hppy lif, ti t t  gol, nt t peopl.")

