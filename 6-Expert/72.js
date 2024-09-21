

//title: Word Search (Part 2)

//tags: arrays,strings

//url: https://edabit.com/challenge/PxjMBvGwp75dBqXpi

//Description:
//This challenge involves finding words in an 8x8 grid. Given a string of 64 letters and an array of words to find, convert the string to an 8x8 array, and return true if all words can be found in the new array. Return false otherwise. Words can be read in any direction (horizontally, vertically or diagonally), and can also wrap over the same column, row or diagonal.
//Example
//letters = "HWAVEOWCFONNANFABEOAMOIAHODOXORTACTIDINOBWZODGELINEEAFASTETAPELL"
//words = ["slot", "donate", "orthodox", "rated", "wave", "tape", "leg", "habit", "add", "fox"]
//This would give the array below:
//[
//  ["H", "W", "A", "V", "E", "O", "W", "C"],
//  ["F", "O", "N", "N", "A", "N", "F", "A"],
//  ["B", "E", "O", "A", "M", "O", "I", "A"],
//  ["H", "O", "D", "O", "X", "O", "R", "T"],
//  ["A", "C", "T", "I", "D", "I", "N", "O"],
//  ["B", "W", "Z", "O", "D", "G", "E", "L"],
//  ["I", "N", "E", "E", "A", "F", "A", "S"],
//  ["T", "E", "T", "A", "P", "E", "L", "L"]
//]
//You would return true as all words can be found:
//[
//  ["_", "W", "A", "V", "E", "_", "_", "_"],
//  ["_", "_", "N", "_", "_", "_", "F", "_"],
//  ["_", "_", "O", "_", "_", "O", "_", "A"],
//  ["H", "O", "D", "O", "X", "O", "R", "T"],
//  ["A", "_", "_", "_", "D", "_", "_", "O"],
//  ["B", "_", "_", "_", "D", "G", "E", "L"],
//  ["I", "_", "E", "E", "A", "_", "_", "S"],
//  ["T", "_", "T", "A", "P", "E", "_", "_"]
//]
//Examples of the wrapped words:
//[
//  ["_", "_", "A", "_", "_", "_", "_", "_"],
//  ["_", "_", "N", "_", "_", "_", "_", "_"],
//  ["_", "_", "O", "_", "_", "_", "_", "A"],
//  ["H", "O", "D", "O", "X", "O", "R", "T"],
//  ["_", "_", "_", "_", "_", "_", "_", "_"],
//  ["_", "_", "_", "_", "D", "_", "_", "_"],
//  ["_", "_", "E", "E", "_", "_", "_", "_"],
//  ["_", "_", "T", "_", "_", "_", "_", "_"]
//]
//
//# "orthodox" -> horizontal
//# "donate" -> vertical
//# "rated" -> diagonal
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(wordSearch2('LUEWENTENRFICTIOVIVORSURWAIXTYEJUBADSLLEOEBWUASUYLLHSNLSUAETNAMN', ['analyst', 'census', 'ensue', 'bad', 'survivor', 'fuss', 'fiction', 'viable', 'jet', 'blue']), true)
//Test.assertEquals(wordSearch2('BARRIERGUFUAOYEOPLANESFYCWOUNDNMPKIEIFCURIFNGPJDOFCKSRKLOHAVYHGO', ['car', 'cup', 'barrier', 'folk', 'offense', 'mud', 'log', 'wound', 'jury', 'plane']), false)
//Test.assertEquals(wordSearch2('OJODAORGFRIENDLYNEEBMOBIIGASOKVCAUGFDWIATLNIFZDMNALKYEOPURCOMRET', ['zero', 'road', 'fountain', 'fool', 'bow', 'friendly', 'regular', 'bin', 'camp', 'not']), true)
//Test.assertEquals(wordSearch2('IEYPINAHYFCNHMVUOOHAOENTLARCRMAYNSTISLENHCUBENMRMORUGDUPKECHUDIS', ['hut', 'dump', 'mean', 'ceremony', 'disk', 'pin', 'horse', 'fee', 'harsh', 'comma']), false)
//Test.assertEquals(wordSearch2('OPCASHENAVSUNDEWKFGEAMONPEHSEBMILRCRMKCTAITOUBLWNXAVIEOAEHRGESOY', ['monk', 'plane', 'tin', 'mean', 'sow', 'way', 'wait', 'bow', 'scratch', 'extreme']), true)
//Test.assertEquals(wordSearch2('EDATEBPEUROMCROPLDAIAAPEACSNHIERENSSTNFAEPEROTSLHOMFAROIPREDICTL', ['tolerant', 'deep', 'fan', 'predict', 'store', 'sleep', 'pop', 'brain', 'bet', 'mess']), false)
//Test.assertEquals(wordSearch2('ANEIOLDRDICHWUHTLNHMGSWTAWEAAEOEIGCFORCGNEKREUGOCTLTPDLIHYAOITNL', ['inch', 'old', 'rotate', 'cow', 'margin', 'oil', 'result', 'check', 'lot', 'defend']), true)
//Test.assertEquals(wordSearch2('DATERMSOEBIUSECUBINWOAOSETCYOHMTSNTESTSIPIONCHAMKNYKUDNEHSEYARTA', ['instinct', 'terms', 'end', 'time', 'champion', 'test', 'shout', 'bed', 'kit', 'ash']), false)
//Test.assertEquals(wordSearch2('ITNESSAWTIECROFIHBESCWNLEAPTREIDBHMNEWNGOFCIWIOUCPNNXRBEYILENERG', ['crew', 'habit', 'witness', 'index', 'tip', 'energy', 'wild', 'nun', 'mix', 'force']), true)
//Test.assertEquals(wordSearch2('TPEHNAPNRLATEMAHCOMPOUNDEVECOGDIYRIBEFLNOARSUAKSLEOKWFAENNNSITNW', ['metal', 'leaf', 'iron', 'rib', 'compound', 'wine', 'sit', 'complain', 'nose', 'ask']), false)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Prime Factors with Sum

//tags: arrays,logic,math,numbers

//url: https://edabit.com/challenge/kX9QaNzcot3kN9DKx

//Description:
//Create a function that takes an array of positive integers and returns a string as:
//p1, sum of all ij of the array for which p1 is a prime factor,
//p2, sum of all ij of the array for which p2 is a prime factor, ... ,
//pn, sum of all ij of the array for which pn is a prime factor.
//Examples
//sumPrime([12, 15]) ➞ "(2 12)(3 27)(5 15)"
//// 2 is a prime factor of 12 results (2 12).
//// 3 is a prime factor of 12 and 15, add 15 + 12, results (3 27).
//// 5 is a prime factor of 15 results (5 15).
//// 7, 11 and 13 are prime numbers but not a factor of any of the number
//// in the given array.
//
//sumPrime([7, 13, 18, 23, 24]) ➞ "(2 42)(3 42)(7 7)(13 13)(23 23)"
//
//sumPrime([3, 5, 7, 9, 11, 13]) ➞ "(3 12)(5 5)(7 7)(11 11)(13 13)"
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(sumPrime([12, 15]), "(2 12)(3 27)(5 15)")
//Test.assertEquals(sumPrime([7, 13, 18, 23, 24]), "(2 42)(3 42)(7 7)(13 13)(23 23)")
//Test.assertEquals(sumPrime([4, 6, 8, 10, 12]), "(2 40)(3 18)(5 10)")
//Test.assertEquals(sumPrime([3, 5, 7, 9, 11, 13]), "(3 12)(5 5)(7 7)(11 11)(13 13)")
//Test.assertEquals(sumPrime([13, 24, 56, 89, 100]), "(2 180)(3 24)(5 100)(7 56)(13 13)(89 89)")
//Test.assertEquals(sumPrime([3, 5, 6, 8, 11, 23]), "(2 14)(3 9)(5 5)(11 11)(23 23)")
//Test.assertEquals(sumPrime([23, 45, 78, 99]), "(2 78)(3 222)(5 45)(11 99)(13 78)(23 23)")
//Test.assertEquals(sumPrime([122, 126, 222, 445]), "(2 470)(3 348)(5 445)(7 126)(37 222)(61 122)(89 445)")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Baum-Sweet Sequence

//tags: math,numbers

//url: https://edabit.com/challenge/mGzWjN9YkNaTM7kvX

//Description:
//Create a function that takes a number n and returns all the terms of the Baum-Sweet sequence, from 0 to n (included).
//The Baum-Sweet sequence is the sequence of numbers bi such that bi = 1 if the binary representation of i contains no block of consecutive 0 of odd length, and bi = 0 otherwise.
//Examples
//baumSweet(0) ➞ "0"
//
//baumSweet(1) ➞ "01"
//
//baumSweet(10) ➞ "01011001010"
//Notes
//For all cases, n >= 0.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(baumSweet(0), "0")
//Test.assertEquals(baumSweet(1), "01")
//Test.assertEquals(baumSweet(4), "01011")
//Test.assertEquals(baumSweet(5), "010110")
//Test.assertEquals(baumSweet(6), "0101100")
//Test.assertEquals(baumSweet(7), "01011001")
//Test.assertEquals(baumSweet(8), "010110010")
//Test.assertEquals(baumSweet(9), "0101100101")
//Test.assertEquals(baumSweet(10),"01011001010")
//Test.assertEquals(baumSweet(11),"010110010100")
//Test.assertEquals(baumSweet(12),"0101100101001")
//Test.assertEquals(baumSweet(13),"01011001010010")
//Test.assertEquals(baumSweet(14),"010110010100100")
//Test.assertEquals(baumSweet(1001),"010110010100100110010000010010010100100100000000100100000100100110010000010010010000000000000000010010010000000010010000010010010100100100000000100100000100100100000000000000000000000000000000100100000100100100000000000000000100100100000000100100000100100110010000010010010000000000000000010010010000000010010000010010010000000000000000000000000000000000000000000000000000000000000000010010010000000010010000010010010000000000000000000000000000000010010000010010010000000000000000010010010000000010010000010010010100100100000000100100000100100100000000000000000000000000000000100100000100100100000000000000000100100100000000100100000100100100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000100100000100100100000000000000000100100100000000100100000100100100000000000000000000000000000000000000000000000000000000000000000100100100000000100100000100100100000000000000000000000000000000100100000100100100000000000000000100100100")
//​
//// Author : javierdariomartin

