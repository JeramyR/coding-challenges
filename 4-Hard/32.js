

//title: Grocery Store Prices

//tags: regex,strings

//url: https://edabit.com/challenge/fbTF9EksvFpq3wZaX

//Description:
//You are given an array of strings consisting of grocery items, with prices in parentheses. Return an array of prices in float format.
//Examples
//getPrices(["ice cream ($5.99)", "banana ($0.20)", "sandwich ($8.50)", "soup ($1.99)"]) ➞ [5.99, 0.2, 8.50, 1.99]
//
//getPrices(["salad ($4.99)"]) ➞ [4.99]
//Notes
//See if you can use RegExp to solve (but it's not necessary).

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(getPrices(['ice cream ($5.99)', 'banana ($0.20)', 'sandwich ($8.50)', 'soup ($1.99)']), [5.99, 0.2, 8.50, 1.99])
//Test.assertSimilar(getPrices(['salad ($4.99)']), [4.99])
//Test.assertSimilar(getPrices(['artichokes ($1.99)', 'rotiserrie chicken ($5.99)', 'gum ($0.75)']), [1.99, 5.99, 0.75])
//Test.assertSimilar(getPrices(['pizza ($2.99)', 'shampoo ($15.75)', 'trash bags ($15.00)']), [2.99, 15.75, 15])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Rock, Paper, Scissors!

//tags: arrays,conditions,control_flow,games,loops

//url: https://edabit.com/challenge/jtvCv6cjHorKpmyFc

//Description:
//Abigail and Benson are playing Rock, Paper, Scissors.
//Each game is represented by an array of length 2, where the first element represents what Abigail played and the second element represents what Benson played.
//Given a sequence of games, determine who wins the most number of matches. If they tie, output "Tie".
//R stands for Rock
//P stands for Paper
//S stands for Scissors
//Examples
//calculateScore([["R", "P"], ["R", "S"], ["S", "P"]]) ➞ "Abigail"
//
//// Benson wins the first game (Paper beats Rock).
//// Abigail wins the second game (Rock beats Scissors).
//// Abigail wins the third game (Scissors beats Paper). 
//// Abigail wins 2/3.
//
//calculateScore([["R", "R"], ["S", "S"]]) ➞ "Tie"
//
//calculateScore([["S", "R"], ["R", "S"], ["R", "R"]]) ➞ "Tie"
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(calculateScore([['R', 'P'], ['R', 'S'], ['S', 'P']]),  "Abigail");
//Test.assertEquals(calculateScore([['R', 'R'], ['S', 'S']]), "Tie");
//Test.assertEquals(calculateScore([['S', 'R'], ['R', 'S'], ['R', 'R']]), "Tie");
//Test.assertEquals(calculateScore([['S', 'R'], ['P', 'R']]), "Tie");
//Test.assertEquals(calculateScore([['S', 'S'], ['S', 'P'], ['R', 'S'], ['S', 'R'], ['R', 'R']]), "Abigail");
//Test.assertEquals(calculateScore([['S', 'R'], ['S', 'R'], ['S', 'R'], ['R', 'S'], ['R', 'S']]), "Benson");

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Next Happy Year

//tags: algorithms,logic,loops,numbers

//url: https://edabit.com/challenge/ruW8bbjeMdb9jNsW7

//Description:
//Mubashir needs your help to find out the next happy year.
//A Happy Year is the year with only distinct digits. Create a function that takes an integer year and returns the next happy year.
//Examples
//happyYear(2017) ➞ 2018
//// 2018 has all distinct digits
//
//happyYear(1990) ➞ 2013
//
//happyYear(2021) ➞ 2031
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(happyYear(1990), 2013)
//Test.assertEquals(happyYear(2017), 2018)
//Test.assertEquals(happyYear(2021), 2031)
//Test.assertEquals(happyYear(1001), 1023)
//Test.assertEquals(happyYear(1123), 1203)
//Test.assertEquals(happyYear(2001), 2013)
//Test.assertEquals(happyYear(2334), 2340)
//Test.assertEquals(happyYear(3331), 3401)
//Test.assertEquals(happyYear(1987), 2013)
//Test.assertEquals(happyYear(5555), 5601)
//Test.assertEquals(happyYear(7712), 7801)
//Test.assertEquals(happyYear(8088), 8091)
//Test.assertEquals(happyYear(8999), 9012)
//// Mubashir

