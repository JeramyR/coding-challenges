

//title: Rearrange the Sentence

//tags: algorithms,logic,sorting,strings

//url: https://edabit.com/challenge/TZR9EM6xcJrer4Naq

//Description:
//Given a sentence with numbers representing a word's location embedded within each word, return the sorted sentence.
//Examples
//rearrange("is2 Thi1s T4est 3a") ➞ "This is a Test"
//
//rearrange("4of Fo1r pe6ople g3ood th5e the2") ➞ "For the good of the people"
//
//rearrange(" ") ➞ ""
//Notes
//Only the integers 1-9 will be used.

//code area
///////////////////////////////////////////////////////////////////////////
const rearrange = str => {
    let strArr = str.split(' '), arr = []
    let i = 1, num = strArr.length

    while (i < num + 1) {
        for (let j = 0; j < strArr.length; j++) {
            strArr[j].match(new RegExp(`${i}`)) ?
            arr[i - 1] = strArr[j].match(/[a-z.!]+/gi).join('') : null
            // if (new RegExp(`${i}`).exec(strArr[j])){
            //     console.log(new RegExp(`${i}`).exec(strArr[j]).input)
            // }      
        }
        i++
    }
    return arr.join(' ')
}
//////////////////////////////////////////////////////////////////////////
//tests:
// Test.assertEquals(rearrange("is3 Cri1stiano 4the Rona2ldo 5best."), "Cristiano Ronaldo is the best.")
// Test.assertEquals(rearrange("is2 Thi1s T4est 3a"), "This is a Test")
// Test.assertEquals(rearrange("4of Fo1r pe6ople g3ood th5e the2"), "For the good of the people")
// Test.assertEquals(rearrange(" "), "")
// Test.assertEquals(rearrange("samosa3 I1 e2at"), "I eat samosa")
// Test.assertEquals(rearrange("h1appy y3all! coding2"), "happy coding yall!")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Nearest Vowel

//tags: loops,strings

//url: https://edabit.com/challenge/62BAcgsNSdwYmE9ty

//Description:
//Given a letter, created a function which returns the nearest vowel to the letter. If two vowels are equidistant to the given letter, return the earlier vowel.
//Examples
//nearestVowel("b") ➞ "a"
//
//nearestVowel("s") ➞ "u"
//
//nearestVowel("c") ➞ "a"
//
//nearestVowel("i") ➞ "i"
//Notes
//All letters will be given in lowercase.
//There will be no alphabet wrapping involved, meaning the closest vowel to "z" should return "u", not "a".

//code area
///////////////////////////////////////////////////////////////////////////
// 9-122 97,101,105,111,117
const nearestVowel = str => {
    let valObj = {
        a: 97,
        e: 101,
        i: 105,
        o: 111,
        u: 117
    }

    let baseNum = str.charCodeAt(str[0])
    let absArr = []
    for (let letter in valObj) {
        let absVal = Math.abs(valObj[letter] - baseNum)
        absArr.push([absVal, letter])
    }

    let min = absArr.map((e,i,r) => e[0])
    let idx = min.indexOf(Math.min(...min))
    return absArr[idx][1]
}


//////////////////////////////////////////////////////////////////////////

//tests:

// Test.assertEquals(nearestVowel("a"), "a")
// Test.assertEquals(nearestVowel("b"), "a")
// Test.assertEquals(nearestVowel("c"), "a")
// Test.assertEquals(nearestVowel("d"), "e")
// Test.assertEquals(nearestVowel("e"), "e")
// Test.assertEquals(nearestVowel("f"), "e")
// Test.assertEquals(nearestVowel("g"), "e")
// Test.assertEquals(nearestVowel("h"), "i")
// Test.assertEquals(nearestVowel("i"), "i")
// Test.assertEquals(nearestVowel("j"), "i")
// Test.assertEquals(nearestVowel("k"), "i")
// Test.assertEquals(nearestVowel("l"), "i")
// Test.assertEquals(nearestVowel("m"), "o")
// Test.assertEquals(nearestVowel("n"), "o")
// Test.assertEquals(nearestVowel("o"), "o")
// Test.assertEquals(nearestVowel("p"), "o")
// Test.assertEquals(nearestVowel("q"), "o")
// Test.assertEquals(nearestVowel("r"), "o")
// Test.assertEquals(nearestVowel("s"), "u")
// Test.assertEquals(nearestVowel("t"), "u")
// Test.assertEquals(nearestVowel("u"), "u")
// Test.assertEquals(nearestVowel("v"), "u")
// Test.assertEquals(nearestVowel("w"), "u")
// Test.assertEquals(nearestVowel("x"), "u")
// Test.assertEquals(nearestVowel("y"), "u")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Distinct Digit in a Number

//tags: regex,strings,validation

//url: https://edabit.com/challenge/3saLXYSqR2tQkszXe

//Description:
//Write a regular expression that matches numbers whose digits are not repeated (i.e. digits are distinct).
//Examples
//regularExpression.test("123") ➞ true
//
//regularExpression.test("112233") ➞ false
//
//regularExpression.test("1025") ➞ true
//Notes
//Input is a number as a string.

//code area
///////////////////////////////////////////////////////////////////////////
// regularExpression = /^[0-9](?!1)/

//////////////////////////////////////////////////////////////////////////

//tests:

// Test.assertEquals(regularExpression.test("123"), true)
// Test.assertEquals(regularExpression.test("112233"), false)
// Test.assertEquals(regularExpression.test("11"), false)

// Test.assertEquals(regularExpression.test("1025"), true)
// Test.assertEquals(regularExpression.test("108"), true)
// Test.assertEquals(regularExpression.test("2314412221234"), false)
// Test.assertEquals(regularExpression.test("725"), true)