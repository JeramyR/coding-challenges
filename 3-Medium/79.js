

//title: Quadratic Equation

//tags: algebra,conditions,math

//url: https://edabit.com/challenge/FdsQBPLYBwrpYEbRn

//Description:
//Create a function to find only the root value of x in any quadratic equation ax^2 + bx + c. The function will take three arguments:
//a as the coefficient of x^2
//b as the coefficient of x
//c as the constant term
//Examples
//quadraticEquation(1, 2, -3) ➞ 1
//
//quadraticEquation(2, -7, 3) ➞ 3
//
//quadraticEquation(1, -12, -28) ➞ 14
//Notes
//Quadratic equation is always guaranteed to have a root.
//Check the Resources tab for more information on quadratic equations.
//Calculate only the root that sums the square root of the discriminant, not the one that subtracts it.
//Round the value / return only integer value.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(quadraticEquation(1, 2, -3), 1)
//Test.assertEquals(quadraticEquation(2, -7, 3), 3)
//Test.assertEquals(quadraticEquation(1, -12, -28), 14)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Fix the Spacing

//tags: formatting,strings

//url: https://edabit.com/challenge/YkKJN9ngARPrpD9gL

//Description:
//Additional spaces have been added to a sentence. Return the correct sentence by removing them. All words should be separated by one space, and there should be no spaces at the beginning or end of the sentence.
//Examples
//correctSpacing("The film   starts       at      midnight. ")
//➞ "The film starts at midnight."
//
//correctSpacing("The     waves were crashing  on the     shore.   ")
//➞ "The waves were crashing on the shore."
//
//correctSpacing(" Always look on    the bright   side of  life.")
//➞ "Always look on the bright side of life."
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(correctSpacing(" A  glittering  gem     is    not   enough.  "), "A glittering gem is not enough.")
//Test.assertEquals(correctSpacing("   She      did  her best  to  help    him.  "), "She did her best to help him.")
//Test.assertEquals(correctSpacing("  They      made  sure   to get   there  early. "), "They made sure to get there early.")
//Test.assertEquals(correctSpacing("  She  did   her      best     to   help him. "), "She did her best to help him.")
//Test.assertEquals(correctSpacing("      I     love  eating    toasted  cheese   and tuna  sandwiches."), "I love eating toasted cheese and tuna sandwiches.")
//Test.assertEquals(correctSpacing("  There     were  foggy   conditions on   the      trail.   "), "There were foggy conditions on the trail.")
//Test.assertEquals(correctSpacing("     The  roads   were  impassable  due to      snow.  "), "The roads were impassable due to snow.")
//Test.assertEquals(correctSpacing(" Better   to      paint  with  bold  colors.   "), "Better to paint with bold colors.")
//Test.assertEquals(correctSpacing("     Remember to  stretch      before you  run.  "), "Remember to stretch before you run.")
//Test.assertEquals(correctSpacing("  You  rarely    see  a royal   flush     in   poker. "), "You rarely see a royal flush in poker.")
//Test.assertEquals(correctSpacing("  She was too      short     to   see    over  the   fence.   "), "She was too short to see over the fence.")
//Test.assertEquals(correctSpacing("   I   will  post     the letter      tonight.  "), "I will post the letter tonight.")
//Test.assertEquals(correctSpacing(" He      could  not remember   a     thing.   "), "He could not remember a thing.")
//Test.assertEquals(correctSpacing("      Sometimes     it    is  better   to  just walk away."), "Sometimes it is better to just walk away.")
//Test.assertEquals(correctSpacing(" A   lack   of      stirring  makes  the sauce     stick.  "), "A lack of stirring makes the sauce stick.")
//Test.assertEquals(correctSpacing("   I      really   want  my dessert.  "), "I really want my dessert.")
//Test.assertEquals(correctSpacing("   Let      me help you  with     your    bags.   "), "Let me help you with your bags.")
//Test.assertEquals(correctSpacing("      Around  the world     in   eighty   days.  "), "Around the world in eighty days.")
//Test.assertEquals(correctSpacing("      The soup   of    the  day   is     lentil. "), "The soup of the day is lentil.")
//Test.assertEquals(correctSpacing("    Winter is   coming. "), "Winter is coming.")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: XOR Swap Algorithm

//tags: bit_operations,language_fundamentals

//url: https://edabit.com/challenge/aPC3K9m93BqwgYGHG

//Description:
//This is more informational than a challenge. You can actually switch 2 variables with the XOR operation ^. XOR works with two arguments. It turns both arguments into their binary representations, and for each bit, returns 1 if they are different, 0 otherwise.
//The return value is the decimal representation of the new binary string. So, if you don't know how to do it, go play around with it! After some time on paper, you will understand what is going on, and how it works.
//Your job is to switch 2 variables using the XOR operator, which means your return statement should be return[a, b], but the values stored in the variables need to be switched.
//Examples
//xor(10, 41) ➞ (41, 10)
//
//xor(69, 420) ➞ (420, 69)
//
//xor(12345, 890412) ➞ (890412, 12345)
//For this challenge, avoid doing the following:
//function xor(a, b) {
//  return [b, a]
//}
//function xor(a, b) {
//  const [b, a] = [a,b]
//  return [a, b]
//}
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(xor(10, 20), [20, 10])
//Test.assertSimilar(xor(1, 2), [2, 1])
//Test.assertSimilar(xor(555, 666), [666, 555])
//Test.assertSimilar(xor(3434, 4343), [4343, 3434])
//Test.assertSimilar(xor(5, 6), [6, 5])
//Test.assertSimilar(xor(666, 999), [999, 666])

