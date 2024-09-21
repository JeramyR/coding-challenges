

//title: Split the String into N Cases of Equal Length

//tags: arrays,formatting,strings

//url: https://edabit.com/challenge/WRugTDNsJ3cz9dfWs

//Description:
//Create a function that accepts str and cases as parameters where the string is split into N distinct cases of equal length as shown:
//Examples
//splitNCases("Strengthened", 6) ➞ ["St", "re", "ng", "th", "en", "ed"]
//
//splitNCases("Unscrupulous", 2) ➞ ["Unscru", "pulous" ]
//
//splitNCases("Flavorless", 1) ➞ ["Flavorless" ]
//Notes
//If it's not possible to split the string as described, return ["Error"].

//code area
///////////////////////////////////////////////////////////////////////////
const splitNCases = (word, num) => {
    let storage = [],
        idx = (word.length / num),
        arr = []

    word.length % num !== 0 ? storage.push("Error") : arr = word.split('')

    while (arr.length > 0) {
        storage.push(arr.splice(0, idx).join(''))
    }
    return storage
}
//////////////////////////////////////////////////////////////////////////
//tests:
// Test.assertSimilar(splitNCases("Peppered Moth", 6), ["Error"])
// Test.assertSimilar(splitNCases("Fool's Errand", 20), ["Error"])
// Test.assertSimilar(splitNCases("Peppered Moth", 6013), ["Error"])
// Test.assertSimilar(splitNCases("Evolutionary Biology", 8), ["Error"])
// Test.assertSimilar(splitNCases("Flavorless", 1), [ "Flavorless" ])
// Test.assertSimilar(splitNCases("Unscrupulous", 2), [ "Unscru", "pulous" ])
// Test.assertSimilar(splitNCases("Unimaginatively", 3), [ "Unima", "ginat", "ively" ])
// Test.assertSimilar(splitNCases("Incomprehensible", 4), [ "Inco", "mpre", "hens", "ible" ])
// Test.assertSimilar(splitNCases("Strengthened", 6), [ "St", "re", "ng", "th", "en", "ed" ])
// Test.assertSimilar(splitNCases("Indefatigable Defender", 2), [ "Indefatigab", "le Defender" ])
// Test.assertSimilar(splitNCases("Evaluation", 10), [ "E", "v", "a", "l", "u", "a", "t", "i", "o", "n" ])
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Hashtag Generator

//tags: algorithms,language_fundamentals,strings

//url: https://edabit.com/challenge/NjptrvPAsHTe8qQRn

//Description:
//Create a function that is a Hashtag Generator by using the following rules:
//The output must start with a hashtag (#).
//Each word in the output must have its first letter capitalized.
//If the final result, a single string, is longer than 140 characters, the function should return false.
//If either the input (str) or the result is an empty string, the function should return false.
//Examples
//generateHashtag("    Hello     World   " ) ➞ "#HelloWorld"
//
//generateHashtag("") ➞ false, "Expected an empty string to return false"
//
//generateHashtag("Edabit Is Great") ➞ "#EdabitIsGreat", "Should remove spaces."
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////
const generateHashtag = str => {
    if (!/[a-z]+/.test(str)) {
        return false
    }

    let store = str.match(/[a-z]+/ig)
    if ((store.join('').length + store.length) > 140) {
        return false
    }
    let wordArr = store.map((e, i) => {
        let end = store[i].slice(1), first = store[i][0].toUpperCase().slice(0, 1)
        return first + end
    })

    return `#${wordArr.join('')}`
}
//////////////////////////////////////////////////////////////////////////

// tests:
// Test.assertEquals(generateHashtag(""), false)
// Test.assertEquals(generateHashtag(" ".repeat(100)), false)
// Test.assertEquals(generateHashtag("e".repeat(140)), false)
// Test.assertEquals(generateHashtag("Smmmmmmmmmmmmmmmmmmmmmmmmmmmmaaaaaaaaaaaaaaaaaaaaaaaaaaaaalllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllll Dog"), false)
// Test.assertEquals(generateHashtag("Edabit"), "#Edabit")
// Test.assertEquals(generateHashtag("Edabit Is Great"), "#EdabitIsGreat")
// Test.assertEquals(generateHashtag("Edabit is great"), "#EdabitIsGreat")
// Test.assertEquals(generateHashtag("    Hello     World   " ), "#HelloWorld")
// Test.assertEquals(generateHashtag("Do We have A Hashtag"), "#DoWeHaveAHashtag")
// Test.assertEquals(generateHashtag("eda" + " ".repeat(140) + "bit"), "#EdaBit")
// Test.assertEquals(generateHashtag("e".repeat(121)), "#E" + "e".repeat(120))

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Spoonerisms

//tags: conditions,regex,strings

//url: https://edabit.com/challenge/CCAEMfHcmrvSwA4KR

//Description:
//A spoonerism is when the first letters / sounds of two words are transposed onto one another. Create a function that takes a two-word string and performs a spoonerism on the phrase.
//Examples
//spoonerise("history lecture") ➞ "listory hecture"
//
//spoonerise("loud noises") ➞ "noud loises"
//
//spoonerise("chow mein") ➞ "mow chein"
//
//spoonerise("edabit rules!") ➞ "redabit ules!"
//Notes
//Only two words will be parsed into the function. Don't worry about handling more than two.
//You won't always just have to swap the first letters, take care to notice which letters have been switched in the examples (notice the difference between vowel-starting and consonant-starting words).

//code area
///////////////////////////////////////////////////////////////////////////
const spoonerise = str => {
    let words = str.split(' ')
    let vowel = []
    let word1 = '', cut = '', word2 = ''

    words.map(e => {
        let reg = /[aeiou]/i, letter = ''
        if (e.match(reg)) {
            letter = e.match(reg)[0]
            vowel.push(letter)
        }
    })

    for (let i = 0; i < words.length; i++) {

    }
}
//////////////////////////////////////////////////////////////////////////

//tests:

// Test.assertEquals(spoonerise("christmas eve"), "istmas chreve")
// Test.assertEquals(spoonerise("edabit rules!"), "redabit ules!")
// Test.assertEquals(spoonerise("crushing failure"), "fushing crailure")
//Test.assertEquals(spoonerise("highlighter fluid"), "flighlighter huid")
//Test.assertEquals(spoonerise("chocolate biscuits"), "bocolate chiscuits")

