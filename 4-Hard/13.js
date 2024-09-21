

//title: GCD and LCM (Part 2)

//tags: math,numbers

//url: https://edabit.com/challenge/y4e52WrRR9sybxzN6

//Description:
//Create a function that takes two numbers as arguments and return the LCM of the two numbers.
//Examples
//lcm(3, 5) ➞ 15
//
//lcm(14, 28) ➞ 28
//
//lcm(4, 6) ➞ 12
//Notes
//Don't forget to return the result.
//You may want to use the GCD function to make this a little easier.
//LCM stands for least common multiple, the smallest multiple of both integers.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(lcm(6, 10), 30)
//Test.assertEquals(lcm(30, 60), 60)
//Test.assertEquals(lcm(10000, 333), 3330000)
//Test.assertEquals(lcm(75, 135), 675)
//Test.assertEquals(lcm(102, 2), 102)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Dance for Cash

//tags: arrays,strings

//url: https://edabit.com/challenge/5eCqrJ7ByYCweDbHg

//Description:
//Your local bank has decided to upgrade its ATM machines by incorporating motion sensor technology. The machines now interpret a series of consecutive dance moves in place of a PIN number.
//Create a program that converts a customer's PIN number to its dance equivalent. There is one dance move per digit in the PIN number. A list of dance moves is given in the code.
//Examples
//danceConvert("0000") ➞ ["Shimmy", "Shake", "Pirouette", "Slide"]
//
//danceConvert("3856") ➞ [ "Slide", "Arabesque", "Pop", "Arabesque" ]
//
//danceConvert("9999") ➞ [ "Arabesque", "Shimmy", "Shake", "Pirouette" ]
//
//danceConvert("32a1") ➞ "Invalid input."
//Notes
//Each dance move will be selected from a list by index based on the current digit's value plus that digit's index value. If this value is greater than the last index value of the dance list, it should cycle to the beginning of the list.
//Valid input will always be a string of four digits. Output will be a string array.
//If the input is not four valid numbers, return the string, "Invalid input."

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(danceConvert("0000"), ['Shimmy', 'Shake', 'Pirouette', 'Slide'])
//Test.assertSimilar(danceConvert("5555"), ['Headspin', 'Dosado', 'Pop', 'Lock'])
//Test.assertSimilar(danceConvert("8888"), ['Lock', 'Arabesque', 'Shimmy', 'Shake'])
//Test.assertSimilar(danceConvert("0123"), ['Shimmy', 'Pirouette', 'Box Step', 'Dosado'])
//Test.assertSimilar(danceConvert("8765"), ['Lock', 'Lock', "Lock", 'Lock'])
//Test.assertSimilar(danceConvert("9104"), ['Arabesque', 'Pirouette', 'Pirouette', 'Pop'])
//Test.assertSimilar(danceConvert("3619"), ['Slide', 'Pop', 'Slide', 'Pirouette'])
//Test.assertSimilar(danceConvert("9742"), ['Arabesque', 'Lock', 'Dosado', 'Headspin'])
//Test.assertEquals(danceConvert("a95f"), "Invalid input.")
//Test.assertEquals(danceConvert("834"), "Invalid input.")
//Test.assertEquals(danceConvert("+493"), "Invalid input.")
//Test.assertEquals(danceConvert("-324"), "Invalid input.")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Swapping Cards

//tags: algorithms,games,numbers,validation

//url: https://edabit.com/challenge/96fvErFZEjvi4yqn4

//Description:
//Two players draw a pair of numbered cards so that both players can form a 2 digit number. A winner can be decided if one player's number is larger than the other.
//However, there is a rule where a player can swap any one of their cards with any one of the other player's cards in a gamble to get a higher number! Note that it is illegal to swap the order of your own cards. That means if you draw a 1 then a 9, you cannot swap them to get 91.
//
//Paul's strategy is to always swap his lowest number with the opponent's ten's digit. Return whether this results in Paul winning the round.
//n1 is Paul's number
//n2 is his opponent's number
//Worked Example
//swap_cards(41, 79) ➞ true
//// Paul's lowest number is 1
//// The opponent's ten's digit is 7
//// After the swap: 47 > 19
//// Paul wins the round
//Examples
//swapCards(41, 98) ➞ true
//
//swapCards(12, 28) ➞ true
//
//swapCards(67, 53) ➞ false
//
//swapCards(77, 54) ➞ false
//Notes
//If both of Paul's digits are the same, swap the ten's digit with the opponent's (paul likes to live riskily).
//The cards don't include the number 0.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(swapCards(41, 98), true)
//Test.assertEquals(swapCards(12, 28), true)
//Test.assertEquals(swapCards(67, 53), false)
//Test.assertEquals(swapCards(77, 54), false)
//Test.assertEquals(swapCards(45, 23), false)
//Test.assertEquals(swapCards(74, 81), true)
//Test.assertEquals(swapCards(75, 35), true)
//Test.assertEquals(swapCards(21, 25), true)
//Test.assertEquals(swapCards(22, 34), true)
//Test.assertEquals(swapCards(24, 12), false)
//Test.assertEquals(swapCards(52, 46), true)
//Test.assertEquals(swapCards(88, 45), false)
//Test.assertEquals(swapCards(48, 54), true)
//Test.assertEquals(swapCards(75, 87), true)
//Test.assertEquals(swapCards(13, 12), true)
//Test.assertEquals(swapCards(25, 41), true)
//Test.assertEquals(swapCards(48, 14), false)

