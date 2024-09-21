

//title: The Array Twins

//tags: algorithms,arrays,data_structures

//url: https://edabit.com/challenge/W9TyA4At3HNYn4B5u

//Description:
//Create a function that given an array, it returns the index where if split in two-subarrays (last element of the first array has index of (foundIndex-1)), the sum of them are equal.
//Examples
//twins([10, 20, 30, 5, 40, 50, 40, 15]) ➞ 5
//// foundIndex 5 : [10+20+30+5+40]=[50+40+15]
//
//twins([1, 2, 3, 4, 5, 5]) ➞ 4
//// [1, 2, 3, 4] [5, 5]
//
//twins([3, 3]) ➞ 1
//Notes
//Return only the foundIndex, not the divided arrays.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(twins([1, 2, 3, 4, 5, 5]), 4)
//Test.assertEquals(twins([3, 3]), 1)
//Test.assertEquals(twins([10, 20, 30, 5, 40, 50, 40, 15]), 5)
//Test.assertEquals(twins([3, 4, 6, 7, 6]), 3)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: AlTeRnAtInG cApS

//tags: conditions,formatting,strings

//url: https://edabit.com/challenge/fzuGQP9Cmzi3ujj4r

//Description:
//Create a function that alternates the case of the letters in a string (known as Spongecase).
//Examples
//alternatingCaps("Hello") ➞ "HeLlO"
//
//alternatingCaps("How are you?") ➞ "HoW aRe YoU?"
//
//alternatingCaps("OMG this website is awesome!") ➞ "OmG tHiS wEbSiTe Is AwEsOmE!"
//Notes
//The first character should always be UPPERCASE.
//Ignore spaces.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(alternatingCaps('alternating caps'), 'AlTeRnAtInG cApS')
//Test.assertEquals(alternatingCaps("What is your name?"), "WhAt Is YoUr NaMe?")
//Test.assertEquals(alternatingCaps('Lorem ipsum dolor sit amet consectetur adipisicing elit.'), 'LoReM iPsUm DoLoR sIt AmEt CoNsEcTeTuR aDiPiSiCiNg ElIt.')
//Test.assertEquals(alternatingCaps('OMG this website is awesome!'), 'OmG tHiS wEbSiTe Is AwEsOmE!')
//Test.assertEquals(alternatingCaps('The quick brown fox jumps over the lazy dog'), 'ThE qUiCk BrOwN fOx JuMpS oVeR tHe LaZy DoG')
//Test.assertEquals(alternatingCaps('The intent is to provide players with a sense of pride and accomplishment for unlocking different heroes.'), 'ThE iNtEnT iS tO pRoViDe PlAyErS wItH a SeNsE oF pRiDe AnD aCcOmPlIsHmEnT fOr UnLoCkInG dIfFeReNt HeRoEs.')

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Swimming Pool

//tags: arrays,higher_order_functions,validation

//url: https://edabit.com/challenge/gqkan7642aHfjk5GF

//Description:
//Suppose a swimming pool blueprint can be represented as a 2D array, where 1s represent the pool and 0s represent the rest of the backyard.
//[[0, 0, 0, 0, 0, 0, 0, 0],
//[0, 1, 1, 1, 1, 1, 0, 0],
//[0, 1, 1, 1, 1, 1, 0, 0],
//[0, 1, 1, 0, 0, 0, 0, 0],
//[0, 0, 0, 0, 0, 0, 0, 0]]
//// Legitimate
//Suppose a pool is considered legitimate if it does not touch any of the four borders in this 2D array.
//[[1, 1, 0, 0, 0, 0, 0, 0],
//[1, 1, 1, 1, 1, 1, 0, 0],
//[0, 1, 1, 1, 1, 1, 0, 0],
//[0, 0, 0, 0, 0, 0, 0, 0]]
//// Illegitimate! 
//// The 1s are touching both the left "fence" and the upper "fence".
//Create a function that returns true if the pool plan is legitimate, and false otherwise.
//Examples
//isLegitimate([
//  [0, 0, 0, 0, 0, 0, 0, 0],
//  [0, 0, 1, 1, 1, 0, 0, 0],
//  [0, 1, 1, 1, 1, 1, 0, 0],
//  [0, 0, 0, 0, 0, 0, 0, 0]
//]) ➞ true
//
//isLegitimate([
//  [0, 0, 0, 0, 0, 0, 0, 0],
//  [0, 0, 1, 1, 1, 0, 0, 0],
//  [0, 1, 1, 1, 1, 1, 0, 0],
//  [0, 0, 1, 1, 1, 0, 0, 0]
//]) ➞ false
//
//isLegitimate([
//  [0, 0, 0, 0, 0],
//  [0, 1, 1, 1, 0],
//  [0, 1, 1, 1, 0],
//  [0, 0, 0, 0, 0]
//]) ➞ true
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(isLegitimate([
//  [0, 0, 0, 0, 0, 0, 0, 0],
//  [0, 0, 1, 1, 1, 0, 0, 0],
//  [0, 1, 1, 1, 1, 1, 0, 0],
//  [0, 0, 0, 0, 0, 0, 0, 0]
//]), true)
//​
//Test.assertEquals(isLegitimate([
//  [0, 0, 0, 0, 0, 0, 0, 0],
//  [0, 0, 1, 1, 1, 0, 0, 0],
//  [0, 1, 1, 1, 1, 1, 0, 0],
//  [0, 0, 1, 1, 1, 0, 0, 0]
//]), false)
//​
//Test.assertEquals(isLegitimate([
//  [0, 0, 0, 0, 0],
//  [0, 1, 1, 1, 0],
//  [0, 1, 1, 1, 0],
//  [0, 0, 0, 0, 0]
//]), true)
//​
//Test.assertEquals(isLegitimate([
//  [0, 0, 0, 0, 0],
//  [0, 1, 1, 1, 1],
//  [0, 1, 1, 1, 0],

