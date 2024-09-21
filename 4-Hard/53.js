

//title: Modify Words

//tags: arrays,formatting,loops,sorting,strings

//url: https://edabit.com/challenge/zwjWN6ehCZ3fAqvYo

//Description:
//Create a function that takes an array of any length. Modify each element (capitalize, reverse, hyphenate).
//Examples
//editWords(["new york city"]) ➞ ["YTIC KR-OY WEN"]
//
//editWords(["null", "undefined"]) ➞ ["LL-UN", "DENIF-EDNU"]
//
//editWords(["hello", "", "world"]) ➞ ["OLL-EH", "-", "DLR-OW"]
//
//editWords([""]) ➞ ["-"]
//Notes
//Input array values can be any type.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(editWords(["javascript"]), ["TPIRC-SAVAJ"])
//Test.assertSimilar(editWords(["hello", "", "world"]), ["OLL-EH", "-", "DLR-OW"])
//Test.assertSimilar(editWords(["null", "undefined"]), ["LL-UN", "DENIF-EDNU"])
//Test.assertSimilar(editWords(["wood", "", "block"]), ["DO-OW", "-", "KCO-LB"])
//Test.assertSimilar(editWords(["new york city"]), ["YTIC KR-OY WEN"])
//Test.assertSimilar(editWords(["html", "css"]), ["LM-TH", "SS-C"])
//Test.assertSimilar(editWords(["react", "vue", "angular"]), ["TCA-ER", "EU-V", "RALU-GNA"])
//Test.assertSimilar(editWords(["11111", "999", "3333"]), ["111-11", "99-9", "33-33"])
//Test.assertSimilar(editWords([""]), ["-"])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Return the Date from Three Days Prior

//tags: dates,formatting

//url: https://edabit.com/challenge/LvhSTYCbRDS4XTNmx

//Description:
//Given a Date() object, return the date from three days prior as a string: "2016-01-19".
//Examples
//threeDaysAgo(new Date(2018, 0, 1)) ➞ "2017-12-29"
//
//threeDaysAgo(new Date(2015, 5, 17)) ➞ "2015-06-14"
//
//threeDaysAgo(new Date(1965, 3, 15))➞ "1965-04-12"
//Notes
//Your function must work in the past, present and future.
//JavaScript months are zero based.
//Your output should NOT be zero based: 2016, 0, 19 == "2016-01-19".

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(threeDaysAgo(new Date(2017, 1, 1)), "2017-01-29");
//Test.assertSimilar(threeDaysAgo(new Date(1950, 6, 8)), "1950-07-05");
//Test.assertSimilar(threeDaysAgo(new Date(1965, 3, 15)), "1965-04-12");
//Test.assertSimilar(threeDaysAgo(new Date(2025, 4, 24)), "2025-05-21");
//Test.assertSimilar(threeDaysAgo(new Date(1965, 3, 15)), "1965-04-12");
//Test.assertSimilar(threeDaysAgo(new Date(2015, 5, 17)), "2015-06-14");

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Sum of Missing Numbers

//tags: arrays,math,numbers

//url: https://edabit.com/challenge/257hD8dzvsyR4G839

//Description:
//Create a function that returns the sum of missing numbers from the given array.
//Examples
//sumMissingNumbers([4, 3, 8, 1, 2]) ➞ 18
//// 5 + 6 + 7 = 18
//
//sumMissingNumbers([17, 16, 15, 10, 11, 12]) ➞ 27
//// 13 + 14 = 27
//
//sumMissingNumbers([1, 2, 3, 4, 5]) ➞ 0
//// No Missing Numbers (i.e. all numbers in [1, 5] are present in the list)
//Notes
//The numerical range to consider when searching for the missing numbers in the array is the sequence of consecutive numbers between the minimum and maximum of the numbers (inclusive).

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(sumMissingNumbers([1, 2, 3, 4, 5]), 0)
//Test.assertEquals(sumMissingNumbers([4, 3, 8, 1, 2]), 18)
//Test.assertEquals(sumMissingNumbers([17, 16, 15, 10, 11, 12]), 27)
//Test.assertEquals(sumMissingNumbers([-1, -4, -3, -2, -6, -8]), -12)

