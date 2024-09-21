

//title: The Fiscal Code

//tags: algorithms,formatting,objects,strings

//url: https://edabit.com/challenge/Pa2rHJ6KeRBTF28Pg

//Description:
//Each person in Italy has an unique identifying ID code issued by the national tax office after the birth registration: the Fiscal Code (Codice Fiscale). Check the Resources tab for more info on this.
//Given an object containing the personal data of a person (name, surname, gender and date of birth) return the 11 code characters as a string following these steps:

///////////////////////////////////////////////////////////////////////////////////
//Generate 3 capital letters from the surname, if it has:
//At least 3 consonants then the first three consonants are used. (Newman -> NWM).
//Less than 3 consonants then vowels will replace missing characters in the same order they appear (Fox -> FXO | Hope -> HPO).
//Less than three letters then "X" will take the third slot after the consonant and the vowel (Yu -> YUX).
//////////////////////////////////////////////////////////////////////////////////
//Generate 3 capital letters from the name, if it has:
//Exactly 3 consonants then consonants are used in the order they appear (Matt -> MTT).
//More than 3 consonants then first, third and fourth consonant are used (Samantha -> SNT | Thomas -> TMS).
//Less than 3 consonants then vowels will replace missing characters in the same order they appear (Bob -> BBO | Paula -> PLA).
//Less than three letters then "X" will take the the third slot after the consonant and the vowel (Al -> LAX).
/////////////////////////////////////////////////////////////////////////////////
//Generate 2 numbers, 1 letter and 2 numbers from date of birth and gender:
//Take the last two digits of the year of birth (1985 -> 85).
//Generate a letter corresponding to the month of birth (January -> A | December -> T) using the table for conversion included in the code.

//For males take the day of birth adding one zero at the start if is less than 10 (any 9th day -> 09 | any 20th day -> 20).

//For females take the day of birth and sum 40 to it (any 9th day -> 49 | any 20th day -> 60).
///////////////////////////////////////////////////////////////////////////////////
//Examples
//fiscalCode({
//  name: "Matt",
//  surname: "Edabit",
//  gender: "M",
//  dob: "1/1/1900"
//}) ➞ "DBTMTT00A01"
//
//fiscalCode({
//  name: "Helen",
//  surname: "Yu",
//  gender: "F",
//  dob: "1/12/1950"
//}) ➞ "YUXHLN50T41"
//
//fiscalCode({
//  name: "Mickey",
//  surname: "Mouse",
//  gender: "M",
//  dob: "16/1/1928"
//}) ➞ "MSOMKY28A16"
//Notes
//Code letters must be uppercase.
//Date of birth is given in D/M/YYYY format.
//The conversion table for months is already in the starting code.
//Y is not a vowel.
//code area
///////////////////////////////////////////////////////////////////////////
const fiscalCode = obj => {
    let gender = ''

    let sur = ''
    let surLengths = 0
    let sub = []
    let surVowel = ''
    let surCons = ''

    let names = ''
    let nameLengths = 0
    let nameSub = []
    let nameVowel = ''
    let nameCon = ''

    let year = ''
    let month = ''

    let day = ''

    for (const key in obj) {
        surLengths = obj.surname.length
        nameLengths = obj.name.length
        gender = obj.gender
        year = obj.dob.slice(-2)
        month = obj.dob.match(/\/\d+\//)[0]
        day = obj.dob.match(/\d+/)[0]
        obj.name.toUpperCase().split('').forEach(e => nameSub.push(e))
        obj.surname.length <= 2 ?
            sur = `${obj.surname.toUpperCase()}X`
            :
            obj.surname.toUpperCase().split('').forEach(e => sub.push(e))
    }
    let chopped = sub.splice(0, surLengths)
    let chopped2 = nameSub.splice(0, nameLengths)
    let newMonth = month.match(/\d+/)[0]

    for (let i = 0; i < chopped.length; i++) {
        chopped[i] !== 'A' && chopped[i] !== 'E' && chopped[i] !== 'I' && chopped[i] !== 'O' && chopped[i] !== 'U' ?
            surCons += chopped[i]
            :
            surVowel += chopped[i]
    }
    for (let i = 0; i < chopped2.length; i++) {
        chopped2[i] !== 'A' && chopped2[i] !== 'E' && chopped2[i] !== 'I' && chopped2[i] !== 'O' && chopped2[i] !== 'U' ?
            nameCon += chopped2[i]
            :
            nameVowel += chopped2[i]
    }
    surCons.length < 3 ?
        sur += surCons + surVowel.slice(0, 3 - surCons.length)
        :
        sur = surCons.slice(0, 3)
    nameCon.length > 3 ?
        names = nameCon.slice(0, 1) + nameCon.slice(2, 4)
        :
        nameCon.length === 3 ?
            names = nameCon
            :
            nameCon <= 2 ?
                names = nameCon + nameVowel.slice(0, 3 - nameCon.length)
                :
                nameCon.length + nameVowel.length === 2 ?
                    names = `${nameCon + nameVowel}X`
                    :
                    names = nameCon + nameVowel.slice(0, 1)

    switch (+newMonth) {
        case 1: newMonth = 'A'
            break
        case 12: newMonth = 'T'
            break
        case 11: newMonth = 'S'
            break
        default: console.log('unknown conversion')
            return
    }
    gender === 'M' ?
        +day < 10 ?
            day = '0' + day
            :
            day = day
        :
        day = +day + 40
    return sur + names + year + newMonth + day
}
//////////////////////////////////////////////////////////////////////////
//tests:
// Test.assertEquals(fiscalCode({ name: "Brendan", surname: "Eich", gender: "M", dob: "1/12/1961" }), "CHEBND61T01")
// Test.assertEquals(fiscalCode({ name: "Helen", surname: "Yu", gender: "F", dob: "1/12/1950" }), "YUXHLN50T41")
// Test.assertEquals(fiscalCode({ name: "Al", surname: "Capone", gender: "M", dob: "17/1/1899" }), "CPNLAX99A17")
// Test.assertEquals(fiscalCode({ name: "Mickey", surname: "Mouse", gender: "M", dob: "16/1/1928" }), "MSOMKY28A16")
// Test.assertEquals(fiscalCode({ name: "Marie", surname: "Curie", gender: "F", dob: "7/11/1867" }), "CRUMRA67S47")
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Caesar`s Cipher

//tags: algorithms,cryptography,strings

//url: https://edabit.com/challenge/a33jdGXkaQRtK9ZTs

//Description:
//Julius Caesar protected his confidential information by encrypting it using a cipher. Caesar's cipher (check Resources tab for more info) shifts each letter by a number of letters. If the shift takes you past the end of the alphabet, just rotate back to the front of the alphabet. In the case of a rotation by 3, w, x, y and z would map to z, a, b and c.
//Create a function that takes a string s (text to be encrypted) and an integer k (the rotation factor). It should return an encrypted string.
//Examples
//caesarCipher("middle-Outz", 2) ➞ "okffng-Qwvb"
//
//// m -> o
//// i -> k
//// d -> f
//// d -> f
//// l -> n
//// e -> g
//// -    -
//// O -> Q
//// u -> w
//// t -> v
//// z -> b
//
//caesarCipher("Always-Look-on-the-Bright-Side-of-Life", 5)
//➞ "Fqbfdx-Qttp-ts-ymj-Gwnlmy-Xnij-tk-Qnkj"
//
//caesarCipher("A friend in need is a friend indeed", 20)
//➞ "U zlcyhx ch hyyx cm u zlcyhx chxyyx"
//Notes
//All test input will be a valid ASCII string.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(caesarCipher("middle-Outz", 2), "okffng-Qwvb")
//Test.assertEquals(caesarCipher("Always-Look-on-the-Bright-Side-of-Life", 5), "Fqbfdx-Qttp-ts-ymj-Gwnlmy-Xnij-tk-Qnkj")
//Test.assertEquals(caesarCipher("A friend in need is a friend indeed", 20), "U zlcyhx ch hyyx cm u zlcyhx chxyyx")
//Test.assertEquals(caesarCipher("A Fool and His Money Are Soon Parted.", 27), "B Gppm boe Ijt Npofz Bsf Tppo Qbsufe.")
//Test.assertEquals(caesarCipher("One should not worry over things that have already happened and that cannot be changed.", 49), "Lkb pelria klq tloov lsbo qefkdp qexq exsb xiobxav exmmbkba xka qexq zxkklq yb zexkdba.")
//Test.assertEquals(caesarCipher("Back to Square One is a popular saying that means a person has to start over, similar to: back to the drawing board.", 126), "Xwyg pk Omqwna Kja eo w lklqhwn owuejc pdwp iawjo w lanokj dwo pk opwnp kran, oeiehwn pk: xwyg pk pda znwsejc xkwnz.")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Frequency by Level of Nesting

//tags: arrays,language_fundamentals,loops,recursion

//url: https://edabit.com/challenge/MCK2Rqzn78pMksvsK

//Description:
//Create a function that takes in a nested array and an element and returns the frequency of that element by nested level.
//Examples
//freqCount([1, 4, 4, [1, 1, [1, 2, 1, 1]]], 1)
//➞ [[0, 1], [1, 2], [2, 3]]
//// The array has one 1 at level 0, 2 1's at level 1, and 3 1's at level 2.
//
//freqCount([1, 5, 5, [5, [1, 2, 1, 1], 5, 5], 5, [5]], 5)
//➞ [[0, 3], [1, 4], [2, 0]]
//
//freqCount([1, [2], 1, [[2]], 1, [[[2]]], 1, [[[[2]]]]], 2)
//➞ [[0, 0], [1, 1], [2, 1], [3, 1], [4, 1]]
//Notes
//Start the default nesting (an array with no nesting) at 0.
//Output the nested levels in order (e.g. 0 first, then 1, then 2, etc.).
//Output 0 for the frequency if that particular level has no instances of that element (see example #2).

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(freqCount([1, 1, 1, 1], 1), [[0, 4]])
//Test.assertSimilar(freqCount([1, 1, 2, 2], 1), [[0, 2]])
//Test.assertSimilar(freqCount([1, 1, 2, [1]], 1), [[0, 2], [1, 1]])
//Test.assertSimilar(freqCount([1, 1, 2, [[1]]], 1), [[0, 2], [1, 0], [2, 1]])
//Test.assertSimilar(freqCount([[[1]]], 1), [[0, 0], [1, 0], [2, 1]])
//Test.assertSimilar(freqCount([1, 4, 4, [1, 1, [1, 2, 1, 1]]], 1), [[0, 1], [1, 2], [2, 3]])
//Test.assertSimilar(freqCount([1, 5, 5, [5, [1, 2, 1, 1], 5, 5], 5, [5]], 5), [[0, 3], [1, 4], [2, 0]])
//Test.assertSimilar(freqCount([1, [2], 1, [[2]], 1, [[[2]]], 1, [[[[2]]]]], 2), [[0, 0], [1, 1], [2, 1], [3, 1], [4, 1]])

