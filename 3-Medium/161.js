

//title: RegEx: Boundary Assertions VI

//tags: formatting,language_fundamentals,regex

//url: https://edabit.com/challenge/hQtRsdNykZgNEZp9J

//Description:
//You're needed to finish a program that lists how many tall people work in your company. All that is needed is a regular expression that will make the function work correctly.
//const res = ["tall height", "tall height", "short height", "medium height", "tall height"]
//
//function countTall(res) {
//  const REGEXP = /* YOU FILL IN */
//  return res.filter( x => REGEXP.test(x)).length
//}
//
//countTall(res) // should output 3
//Write the regular expression to make the function output the correct number. You're required to use a positive lookbehind assertion in your expression.
//Notes
//Check the Resources tab for details on lookbehind assertions.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//const res = ["tall height", "tall height", "short height", "medium height", "tall height"] 
//​
//const validate = (REGEXP) => {
//   if(!/\(\?\<\=/.test(String(REGEXP))) return () => "positive lookbehind required"
//   return function testReg(res) {
//     return res.filter(x => REGEXP.test(x)).length
//   }
//} 
//​
//const testExp = validate(REGEXP) 
//​
//Test.assertNotEquals(testExp(res), "positive lookbehind required", "You are required to use a positive lookbehind in your expression.")
//Test.assertSimilar(testExp(res), 3)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Lottery Ticket

//tags: arrays,language_fundamentals,numbers,strings

//url: https://edabit.com/challenge/jxxWvhfiv67P2zbTa

//Description:
//Given a lottery ticket (ticket), represented by an array of 2-value arrays, create a function to find out if you've won the jackpot.
//To do this, you must first count the "mini-win" on your ticket. Each subarray has both a string and a number within it. If the character code of any of the characters in the string matches the number, you get a mini-win. Note you can only have one mini-win per subarray.
//Once you have counted all of your mini-wins, compare that number to the other input provided (win). If your number of mini-wins is more than or equal to win, return Winner!. Else, return Loser!.
//Examples
//lottery([["YYW", 70], ["WXK", 65], ["RPDI", 88]], 2)
//➞ "Loser!"
//
//lottery([["KG", 80], ["NTBBVZ", 79], ["CI", 73], ["AGXMEE", 74], ["IU", 68], ["VOSP" , 84]], 1)
//➞ "Winner!"
//
//lottery([["ZSAMZB", 81], ["XWWCXP", 72], ["SYBRQOHP", 88], ["HJSVV", 75]], 1)
//➞ "Loser!"
//Notes
//All inputs will be in the correct format.
//Strings on ticket are not always the same length.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(lottery([['YYW', 70], ['WXK', 65], ['RPDI', 88]], 2), 'Loser!')
//Test.assertEquals(lottery([['KG', 80], ['NTBBVZ', 79], ['CI', 73], ['AGXMEE', 74], ['IU', 68], ['VOSP' , 84]], 1), 'Winner!')
//Test.assertEquals(lottery([['ZSAMZB', 81], ['XWWCXP', 72], ['SYBRQOHP', 88], ['HJSVV', 75]], 1), 'Loser!')
//Test.assertEquals(lottery([['GM', 84], ['KLJ', 86], ['UOF', 77], ['JKC', 84], ['RUI', 72]], 3), 'Loser!')
//Test.assertEquals(lottery([['CXFAFUOW', 90], ['VKKC', 74], ['OPYVAUR', 84], ['WTMRW', 79], ['ZIL', 84], ['TDQMZD', 74], ['MR', 66], ['IQ', 86], ['JTBX', 88], ['ZJKX', 77]], 4), 'Loser!')
//Test.assertEquals(lottery([['SHUT', 85], ['DOWPKSLD', 80], ['QOOGBTDG', 85], ['EID', 68], ['EZKKAEYW', 81], ['OYQBJCJE', 86], ['WYTDAMFI', 87], ['CW', 89], ['BICKVN', 76], ['BQH', 79]], 3), 'Winner!')
//Test.assertEquals(lottery([['GITVQFQ', 65], ['VCQ', 71], ['DLK', 70], ['HUVMWH', 80], ['PLUYERTX', 68], ['JVJSHC', 81], ['OUSXBLP', 77], ['IGNCP', 82], ['LV', 65]], 9), 'Loser!')
//Test.assertEquals(lottery([['CKLD', 80], ['VDGDL', 78], ['LKAJBSPM', 74], ['CCPNIE', 67], ['GS', 77], ['QYWGWS', 83], ['XLJUE', 73], ['CMUCLWE', 70],['MHM', 90]], 8), 'Loser!')
//Test.assertEquals(lottery([['TRJZKKCQ', 81], ['KYC', 80], ['WU', 66], ['MFTWCFZ', 83], ['TNIRSP', 72], ['VC', 86], ['AINOS', 87], ['RGROXMF', 86], ['URKVFY', 70]], 3), 'Winner!')
//Test.assertEquals(lottery([['XONLHEB', 71], ['FXMR', 65],['WMGY' , 89]], 1), 'Winner!')

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Little Big Sequence

//tags: loops,math,numbers

//url: https://edabit.com/challenge/u3QHMLyRL5xD9Pg6G

//Description:
//A number sequence is as follows:
//5, 100, 6, 200, 7, 400, 8, 800, 9, 1600, 10, 3200, ...
//Given that 5 is at position 1, create a function that returns the number found at position num in the sequence.
//Examples
//littleBig(4) ➞ 200
//
//littleBig(5) ➞ 7
//
//littleBig(28) ➞ 819200
//Notes
//You can expect to be only given valid inputs.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(littleBig(1), 5)
//Test.assertEquals(littleBig(2), 100)
//Test.assertEquals(littleBig(3), 6)
//Test.assertEquals(littleBig(4), 200)
//Test.assertEquals(littleBig(5), 7)
//Test.assertEquals(littleBig(6), 400)
//Test.assertEquals(littleBig(7), 8)
//Test.assertEquals(littleBig(8), 800)
//Test.assertEquals(littleBig(9), 9)
//Test.assertEquals(littleBig(10), 1600)
//Test.assertEquals(littleBig(11), 10)
//Test.assertEquals(littleBig(12), 3200)
//Test.assertEquals(littleBig(13), 11)
//Test.assertEquals(littleBig(14), 6400)
//Test.assertEquals(littleBig(15), 12)
//Test.assertEquals(littleBig(16), 12800)
//Test.assertEquals(littleBig(17), 13)
//Test.assertEquals(littleBig(18), 25600)
//Test.assertEquals(littleBig(19), 14)
//Test.assertEquals(littleBig(20), 51200)
//Test.assertEquals(littleBig(21), 15)
//Test.assertEquals(littleBig(22), 102400)
//Test.assertEquals(littleBig(23), 16)
//Test.assertEquals(littleBig(24), 204800)
//Test.assertEquals(littleBig(25), 17)

