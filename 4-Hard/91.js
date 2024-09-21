

//title: Combine Arrays

//tags: arrays,data_structures,loops

//url: https://edabit.com/challenge/Q7oSiYdNJvvDYHdmR

//Description:
//Create a function that takes three arrays and returns one array where all passed arrays are combined into nested arrays.
//These arrays should be combined based on indexes: the first nested array should contain only the items on index 0, the second array on index 1, and so on.
//If any array contains fewer items than necessary, supplement the missing item with "*".
//Examples
//combineArrays([false, "false"], ["true", true, "bool"], ["null", "undefined"]) ➞ [[false, "true", "null"], ["false", true, "undefined"], ["*", "bool", "*"]]
//
//combineArrays([1, 2, 3], [4, 5, 6], [7, 8, 9]) ➞ [[1, 4, 7], [2, 5,  8], [3, 6, 9]]
//
//combineArrays(["Jack", "Joe", "Jill"], ["Stuart", "Sammy", "Silvia"], ["Rick", "Raymond", "Riri"]) ➞ [["Jack", "Stuart", "Rick"], ["Joe", "Sammy",  "Raymond"], ["Jill", "Silvia", "Riri"]]
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(combineArrays([false, 'false'], ['true', true, 'bool'], ['null', 'undefined']), [[false, 'true', 'null'], ['false', true, 'undefined'], ['*', 'bool', '*']])
//Test.assertSimilar(combineArrays([1, 2, 3], [4, 5, 6], [7, 8, 9]), [[1, 4, 7], [2, 5,  8], [3, 6, 9]])
//Test.assertSimilar(combineArrays(['Jack', 'Joe', 'Jill'], ['Stuart', 'Sammy', 'Silvia'], ['Rick', 'Raymond', 'Riri']), [['Jack', 'Stuart', 'Rick'], ['Joe', 'Sammy',  'Raymond'], ['Jill', 'Silvia', 'Riri']])
//Test.assertSimilar(combineArrays(['JS', 'TS', 'CS'], ['React', 'Vue', 'Angular'], ['C', 'C++']), [['JS', 'React', 'C'], ['TS', 'Vue', 'C++'], ['CS', 'Angular', '*']])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: IPv4 Validation

//tags: algorithms,regex,strings,validation

//url: https://edabit.com/challenge/S5nPFF44x7JceXPBn

//Description:
//Create a function that takes a string (IPv4 address in standard dot-decimal format) and returns true if the IP is valid or false if it's not. For information on IPv4 formatting, please refer to the resources in the Resources tab.
//Examples
//isValidIP("1.2.3.4") ➞ true
//
//isValidIP("1.2.3") ➞ false
//
//isValidIP("1.2.3.4.5") ➞ false
//
//isValidIP("123.45.67.89") ➞ true
//
//isValidIP("123.456.78.90") ➞ false
//
//isValidIP("123.045.067.089") ➞ false
//Notes
//IPv6 addresses are not valid.
//Leading zeros are not valid ("123.045.067.089" should return false).
//You can expect a single string for every test case.
//Numbers may only be between 1 and 255.
//The last digit may not be zero, but any other might.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(isValidIP("12.255.56.1"), true, "This is a valid IPv4");
//Test.assertEquals(isValidIP("1.2.3.4"), true, "This is a valid IPv4");
//Test.assertEquals(isValidIP("1.2.3"), false, "IPv4 contain exactly four octets.");
//Test.assertEquals(isValidIP("1.2.3.4.5"), false, "IPv4 contain exactly four octets.");
//Test.assertEquals(isValidIP("123.45.67.89"), true, "This is a valid IPv4");
//Test.assertEquals(isValidIP("123.456.78.90"), false, "Each octet must be a decimal value between 0 and 255.");
//Test.assertEquals(isValidIP("123.045.067.089"), false, "Each octet must be a decimal value between 0 and 255.");
//Test.assertEquals(isValidIP(""), false, "An empty string is invalid.");
//Test.assertEquals(isValidIP("abc.def.ghi.jkl"), false, "This is not in dot decimal format.");
//Test.assertEquals(isValidIP("123.456.789.0"), false, "Each octet must be a decimal value between 0 and 255.");
//Test.assertEquals(isValidIP("12.34.56"), false, "IPv4 contain exactly four octets.");
//Test.assertEquals(isValidIP("12.34.56 .1"), false, "Check for spaces.");
//Test.assertEquals(isValidIP("12.34.56.-1"), false, "Check for invalid characters.");
//Test.assertEquals(isValidIP("123.045.067.089"), false, "Each octet must be a decimal value between 0 and 255.");
//Test.assertEquals(isValidIP("192.168.1.1"), true, "This is a valid IPv4");
//Test.assertEquals(isValidIP("192.168.1.1  "), false, "IPs with trailing spaces are invalid.");
//Test.assertEquals(isValidIP("  192.168.1.1"), false, "IPs with leading spaces are invalid.");
//Test.assertEquals(isValidIP("0.232.47.227"), true, "This is a valid IPv4");
//Test.assertEquals(isValidIP("1e0.1e0.1e0.1e0"), false, "Each octet must be a decimal value between 0 and 255.");

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Sort by Answer

//tags: arrays,language_fundamentals,math

//url: https://edabit.com/challenge/9BgTpRsJYhX4T4ZXk

//Description:
//Given an array of math expressions, create a function which sorts the array by their answer. It should be sorted in ascending order.
//Examples
//sortByAnswer(["1 + 1", "1 + 7", "1 + 5", "1 + 4"]) ➞ ["1 + 1", "1 + 4", "1 + 5", "1 + 7"]
//
//sortByAnswer(["4 - 4", "2 - 2", "5 - 5", "10 - 10"]) ➞ ["4 - 4", "2 - 2", "5 - 5", "10 - 10"]
//
//sortByAnswer(["2 + 2", "2 - 2", "2 * 1"]) ➞ ["2 - 2", "2 * 1", "2 + 2"]
//Notes
//If multiple expressions have the same answer, put them in the order of which they appear (see example #2).
//You won't need to worry about divisions by zero.
//The symbol used for multiplication is x instead of *.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(sortByAnswer(["1 + 1", "1 + 7", "1 + 5", "1 + 4"]), ["1 + 1", "1 + 4", "1 + 5", "1 + 7"])
//Test.assertSimilar(sortByAnswer(["2 + 2", "2 - 2", "2 x 2", "2 / 2"]), ["2 - 2", "2 / 2", "2 + 2", "2 x 2"])
//Test.assertSimilar(sortByAnswer(["1 x 1", "3 x 3", "-1 x -1", "-3 x -3"]), ["1 x 1", "-1 x -1", "3 x 3", "-3 x -3"])
//Test.assertSimilar(sortByAnswer(["4 - 4", "2 - 2", "5 - 5", "10 - 10"]), ["4 - 4", "2 - 2", "5 - 5", "10 - 10"], "The answers are all the same, so return the elements in the order they came")
//Test.assertSimilar(sortByAnswer(["2 + 2", "2 - 2", "2 x 1"]), ["2 - 2", "2 x 1", "2 + 2"])
//Test.assertSimilar(sortByAnswer(["4 - 4", "2 - 2", "5 + 5", "10 - 10"]), ["4 - 4", "2 - 2", "10 - 10", "5 + 5"])
//Test.assertSimilar(sortByAnswer(["49 x -6", "21 - 25", "-11 / 26", "6 + -37", "1 / 49", "22 x -46", "-7 / 10", "16 + -34", "-37 x -27", "23 / -41"]), ["22 x -46", "49 x -6", "6 + -37", "16 + -34", "21 - 25", "-7 / 10", "23 / -41", "-11 / 26", "1 / 49", "-37 x -27"])
//Test.assertSimilar(sortByAnswer(["18 / -13", "41 + -14", "6 x 19", "-7 x 3", "44 + 37", "-13 + -32", "47 + -15"]), ["-13 + -32", "-7 x 3", "18 / -13", "41 + -14", "47 + -15", "44 + 37", "6 x 19"])
//Test.assertSimilar(sortByAnswer(["-45 - 30", "-6 / 21", "-31 x 40"]), ["-31 x 40", "-45 - 30", "-6 / 21"])
//Test.assertSimilar(sortByAnswer(["4 + 13", "14 + 42", "-25 / 39", "-18 / 49", "34 + 41", "21 / -32", "3 / -17", "-38 + 38", "22 + 15", "-11 x 33", "-20 x -25", "3 / -28", "44 - 15", "26 / -29", "-23 - 43", "4 / 26", "8 + -45", "-4 + 28", "0 / 46", "8 x -9"]), ["-11 x 33", "8 x -9", "-23 - 43", "8 + -45", "26 / -29", "21 / -32", "-25 / 39", "-18 / 49", "3 / -17", "3 / -28", "-38 + 38", "0 / 46", "4 / 26", "4 + 13", "-4 + 28", "44 - 15", "22 + 15", "14 + 42", "34 + 41", "-20 x -25"])
//Test.assertSimilar(sortByAnswer(["-42 - 47", "7 x 17", "-36 + -30"]), ["-42 - 47", "-36 + -30", "7 x 17"])
//Test.assertSimilar(sortByAnswer(["-45 / 7", "44 - 49", "-17 x 49", "-22 + -40"]), ["-17 x 49", "-22 + -40", "-45 / 7", "44 - 49"])
//Test.assertSimilar(sortByAnswer(["2 + -18", "-22 + 11", "-49 + -31", "32 / -20", "-10 x 5", "35 x -3"]), ["35 x -3", "-49 + -31", "-10 x 5", "2 + -18", "-22 + 11", "32 / -20"])
//Test.assertSimilar(sortByAnswer(["-35 - 27", "38 - 41", "47 x -44", "-6 x -38"]), ["47 x -44", "-35 - 27", "38 - 41", "-6 x -38"])
//Test.assertSimilar(sortByAnswer(["23 / 33", "-5 / 26", "36 + -1", "-35 / 26", "3 / 4", "-44 - 42", "-30 - 20", "-12 - 9", "33 - 23", "14 + 12", "-28 + 10", "14 + -24", "48 x -47", "35 x 47", "-28 x 9", "-26 + 2"]), ["48 x -47", "-28 x 9", "-44 - 42", "-30 - 20", "-26 + 2", "-12 - 9", "-28 + 10", "14 + -24", "-35 / 26", "-5 / 26", "23 / 33", "3 / 4", "33 - 23", "14 + 12", "36 + -1", "35 x 47"])
//Test.assertSimilar(sortByAnswer(["-26 / -27", "31 / -5", "-20 / -39", "-41 x 37", "14 x 6", "-2 - 13", "-5 - 14", "22 + 45", "4 + 2", "35 + 43", "46 + -11", "19 / 45", "-27 + -43", "-30 + -10", "-6 x -36", "-2 - 37", "4 - 41", "27 / -30"]), ["-41 x 37", "-27 + -43", "-30 + -10", "-2 - 37", "4 - 41", "-5 - 14", "-2 - 13", "31 / -5", "27 / -30", "19 / 45", "-20 / -39", "-26 / -27", "4 + 2", "46 + -11", "22 + 45", "35 + 43", "14 x 6", "-6 x -36"])
//Test.assertSimilar(sortByAnswer(["-5 / 25", "0 / 24", "-17 x 28", "-22 x 49"]), ["-22 x 49", "-17 x 28", "-5 / 25", "0 / 24"])
//Test.assertSimilar(sortByAnswer(["-37 / -24", "-21 - 34", "40 x -7", "19 x 40", "-40 / -5"]), ["40 x -7", "-21 - 34", "-37 / -24", "-40 / -5", "19 x 40"])
//Test.assertSimilar(sortByAnswer(["13 / 47", "31 - 27", "-47 - 46", "-1 / -1", "28 + -23", "-23 + 15", "34 / -8", "-36 + 25", "-24 x -26", "-12 + 33", "2 + 17", "-36 + 12"]), ["-47 - 46", "-36 + 12", "-36 + 25", "-23 + 15", "34 / -8", "13 / 47", "-1 / -1", "31 - 27", "28 + -23", "2 + 17", "-12 + 33", "-24 x -26"])
//Test.assertSimilar(sortByAnswer(["31 x 21", "-31 x 4", "-48 x -20", "-26 x -36", "-38 - 18", "-42 / -42", "42 - 38"]), ["-31 x 4", "-38 - 18", "-42 / -42", "42 - 38", "31 x 21", "-26 x -36", "-48 x -20"])
//Test.assertSimilar(sortByAnswer(["30 - 0", "23 x -31", "25 + 33", "42 + 5", "38 x 36", "22 / -23", "12 - 13", "47 x -48", "16 + -31"]), ["47 x -48", "23 x -31", "16 + -31", "12 - 13", "22 / -23", "30 - 0", "42 + 5", "25 + 33", "38 x 36"])
//Test.assertSimilar(sortByAnswer(["33 / -38", "50 x 0", "-50 x -43", "-34 x -15", "-26 - 11", "2 / 26", "-17 x -47", "-34 x -36", "-14 / -46", "10 - 10", "25 + 4"]), ["-26 - 11", "33 / -38", "50 x 0", "10 - 10", "2 / 26", "-14 / -46", "25 + 4", "-34 x -15", "-17 x -47", "-34 x -36", "-50 x -43"])
//Test.assertSimilar(sortByAnswer(["-24 / 27"]), ["-24 / 27"])
//Test.assertSimilar(sortByAnswer(["41 - 41", "31 x -22", "-25 + -1", "-47 - 23", "-41 x 0"]), ["31 x -22", "-47 - 23", "-25 + -1", "41 - 41", "-41 x 0"])
//Test.assertSimilar(sortByAnswer(["-19 + -6", "-44 + -20", "2 / 5", "39 - 5", "-43 x 23"]), ["-43 x 23", "-44 + -20", "-19 + -6", "2 / 5", "39 - 5"])

