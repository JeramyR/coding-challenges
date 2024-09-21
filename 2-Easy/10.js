

//title: Error Messages

//tags: conditions,strings

//url: https://edabit.com/challenge/eGr8qEJjKwedk9SqY

//Description:
//Create a function that takes a number as an argument and returns the appropriate error message. You should do this without using the switch or if statements.
//The input error will be 1 to 5:
//1 >> "Check the fan: e1"
//2 >> "Emergency stop: e2"
//3 >> "Pump Error: e3"
//4 >> "c: e4"
//5 >> "Temperature Sensor Error: e5"
//For any other value, return 101 (you can use an if statement here).
//Examples
//error(1) ➞ "Check the fan: e1"
//
//error(2) ➞ "Emergency stop: e2"
//
//error(3) ➞ "Pump Error: e3"
//Notes
//Do this without using the switch or if statements.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(error(1), "Check the fan: e1")
//Test.assertEquals(error(2), "Emergency stop: e2")
//Test.assertEquals(error(3), "Pump Error: e3")
//Test.assertEquals(error(4), "c: e4")
//Test.assertEquals(error(5), "Temperature Sensor Error: e5")
//Test.assertEquals(error(-1000), 101)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Baseball Batting Average

//tags: arrays,formatting,numbers,strings

//url: https://edabit.com/challenge/MEZtqvEeMbGg2YKtt

//Description:
//A baseball player's batting average is calculated by the following formula:
//BA = (number of hits) / (number of official at-bats)
//Batting averages are always expressed rounded to the nearest thousandth with no leading zero. The top 3 MLB batting averages of all-time are:
//Ty Cobb .366
//Rogers Hornsby .358
//Shoeless Joe Jackson .356
//The given array represents a season of games. Each array item indicates a player's [hits, official at bats] per game. Return a string with the player's seasonal batting average rounded to the nearest thousandth.
//Examples
//battingAvg([[0, 0], [1, 3], [2, 2], [0, 4], [1, 5]]) ➞ ".286"
//
//battingAvg([[2, 5], [2, 3], [0, 3], [1, 5], [2, 4]]) ➞ ".350"
//
//battingAvg([[2, 3], [1, 5], [2, 4], [1, 5], [0, 5]]) ➞ ".273"
//Notes
//The number of hits will not exceed the number of official at-bats.
//The array includes official at-bats only. No other plate-appearances (walks, hit-by-pitches, sacrifices, etc.) are included in the array.
//HINT: Think in terms of total hits and total at-bats.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(battingAvg([
//      [0, 0],
//      [1, 3],
//      [2, 2],
//      [0, 4],
//      [1, 5],
//    ]), '.286')
//Test.assertEquals(battingAvg([
//      [2, 5],
//      [2, 3],
//      [0, 3],
//      [1, 5],
//      [2, 4],
//    ]), '.350')
//Test.assertEquals(battingAvg([
//      [2, 3],
//      [1, 5],
//      [2, 4],
//      [1, 5],
//      [0, 5],
//    ]), '.273')
//Test.assertEquals(battingAvg([
//      [1, 4],
//      [0, 5],
//      [4, 4],

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Repeating Letters

//tags: formatting,strings

//url: https://edabit.com/challenge/Mc6Xi4PRw7fDzeMDB

//Description:
//Create a function that takes a string and returns a string in which each character is repeated once.
//Examples
//doubleChar("String") ➞ "SSttrriinngg"
//
//doubleChar("Hello World!") ➞ "HHeelllloo  WWoorrlldd!!"
//
//doubleChar("1234!_ ") ➞ "11223344!!__  "
//Notes
//All test cases contain valid strings. Don't worry about spaces, special characters or numbers. They're all considered valid characters.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(doubleChar("String"), "SSttrriinngg")
//Test.assertEquals(doubleChar("Hello World!"), "HHeelllloo  WWoorrlldd!!")
//Test.assertEquals(doubleChar("1234!_ "), "11223344!!__  ")
//Test.assertEquals(doubleChar("##^&%%*&%%$#@@!"), "####^^&&%%%%**&&%%%%$$##@@@@!!")
//Test.assertEquals(doubleChar("scandal"), "ssccaannddaall")
//Test.assertEquals(doubleChar("economics"), "eeccoonnoommiiccss")
//Test.assertEquals(doubleChar(" "), "  ")
//Test.assertEquals(doubleChar("_______"), "______________")
//Test.assertEquals(doubleChar("equip gallon read"), "eeqquuiipp  ggaalllloonn  rreeaadd")
//Test.assertEquals(doubleChar("baby increase"), "bbaabbyy  iinnccrreeaassee")

