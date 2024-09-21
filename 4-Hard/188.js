

//title: Get Free Wi-Fi Anywhere You Go

//tags: algorithms,loops,regex,strings

//url: https://edabit.com/challenge/pHKDq9ff2FfezCpAf

//Description:
//A new 'hacky' phone is launched, which has the feature of connecting to any Wi-Fi network from any distance away, as long as there aren't any obstructions between the hotspot and the phone. Given a string, return how many Wi-Fi hotspots I'm able to connect to.
//The phone is represented as a P.
//A hotspot is represented as an *.
//An obstruction is represented as a #. You cannot access a hotspot if they are behind one of these obstructions.
//Examples
//nonstopHotspot("*   P  *   *") ➞ 3
//
//nonstopHotspot("*  * #  * P # * #") ➞ 1
//
//nonstopHotspot("***#P#***") ➞ 0
//Notes
//There will be only one phone.
//No other characters, other than spaces, will appear in the tests.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(nonstopHotspot('*   P  *   *'), 3)
//Test.assertEquals(nonstopHotspot('*  * #  * P # * #'), 1)
//Test.assertEquals(nonstopHotspot('***#P#***'), 0)
//Test.assertEquals(nonstopHotspot('#P#'), 0)
//Test.assertEquals(nonstopHotspot('P'), 0)
//Test.assertEquals(nonstopHotspot('P       #'), 0)
//Test.assertEquals(nonstopHotspot('P     *  # *'), 1)
//Test.assertEquals(nonstopHotspot('*   # * P'), 1)
//Test.assertEquals(nonstopHotspot('# *****  **  P     ** #    '), 9)
//​
//// Author: Joshua Señoron

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Closest Palindrome Number

//tags: loops,numbers

//url: https://edabit.com/challenge/EoSFpRHksc3CTzox9

//Description:
//Write a function that returns the closest palindrome number to an integer. If two palindrome numbers tie in absolute distance, return the smaller number.
//Examples
//closestPalindrome(887) ➞ 888
//
//closestPalindrome(100) ➞ 99
//// 99 and 101 are equally distant, so we return the smaller palindrome.
//
//closestPalindrome(888) ➞ 888
//
//closestPalindrome(27) ➞ 22
//Notes
//If the number itself is a palindrome, return that number.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(closestPalindrome(887), 888)
//Test.assertEquals(closestPalindrome(888), 888)
//Test.assertEquals(closestPalindrome(27), 22)
//Test.assertEquals(closestPalindrome(519), 515)
//Test.assertEquals(closestPalindrome(4892), 4884)
//Test.assertEquals(closestPalindrome(1), 1)
//Test.assertEquals(closestPalindrome(100), 99)
//Test.assertEquals(closestPalindrome(33344), 33333)
//Test.assertEquals(closestPalindrome(123456), 123321)
//Test.assertEquals(closestPalindrome(978215236), 978212879)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Got Enough Money?

//tags: arrays,data_structures,objects

//url: https://edabit.com/challenge/Qifo5G2hgWXWXLegi

//Description:
//Create a function that returns any of the items you can afford in the store with the money you have in your wallet. Sort the list in alphabetical order.
//Examples
//itemsPurchased({
//  Water: "$1",
//  Bread: "$3",
//  TV: "$1,000",
//  Fertilizer: "$20"
//}, "$300") ➞ ["Bread", "Fertilizer", "Water"]
//
//itemsPurchased({
//  Apple: "$4",
//  Honey: "$3",
//  Fan: "$14",
//  Bananas: "$4",
//  Pan: "$100",
//  Spoon: "$2"
//  }, "$100") ➞ ["Apple", "Bananas", "Fan", "Honey", "Pan", "Spoon"]
//
//itemsPurchased({
//  Phone: "$999",
//  Speakers: "$300",
//  Laptop: "$5,000",
//  PC: "$1200"},
//"$1") ➞ "Nothing"
//Notes
//Return "Nothing" if you can't afford anything from the store.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(itemsPurchased({"Water": "$1", "Bread": "$3", "TV": "$1,000","Fertilizer": "$20"}, "$300"), ["Bread", "Fertilizer", "Water"])
//Test.assertSimilar(itemsPurchased({"Apple": "$4", "Honey": "$3", "Fan": "$14", "Bananas": "$4", "Pan": "$100", "Spoon": "$2"}, "$100"), ["Apple", "Bananas", "Fan", "Honey", "Pan", "Spoon"])
//Test.assertSimilar(itemsPurchased({"Phone": "$999", "Speakers": "$300", "Laptop": "$5,000", "PC": "$1200"}, "$1"), "Nothing")

