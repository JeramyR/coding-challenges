

//title: Is Edabit in the String?

//tags: strings,validation

//url: https://edabit.com/challenge/AdB5SRYzqoiaKKiwm

//Description:
//A string contains the word "edabit" if a subsequence of its characters spell "edabit".
//Write a function that accepts a string and returns “YES” if the string contains a subsequence of the word edabit or "NO" if it does not.
//Examples
//edabitInString(“eddaaabt”) ➞ “NO”
//
//edabitInString(“edwardisabletodoit”) ➞ “YES”
//
//edabitInString(“abecdfghijklmnopqrstuvwxyz”) ➞ “NO”
//Notes
//Check the Resources tab for more details on subsequence.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(edabitInString("eddaaabt"), "NO")
//Test.assertEquals(edabitInString("edwardisabletodoittoo"), "YES")
//Test.assertEquals(edabitInString("abecdfghijklmnopqrstuvwxyz"), "NO")
//Test.assertEquals(edabitInString("edisthebestatthis"), "NO")
//Test.assertEquals(edabitInString("teachandlearnbitbybit"), "YES")
//Test.assertEquals(edabitInString("fjkdlkskkkkkdkkdkdedaaakkjkkdkkdklqiieuirooeizooziiciibiiiiifooiioiiuuyeyttgguoosooodiifiufiiodikkjkls"), "YES")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Is It an Ordered Subarray?

//tags: arrays,language_fundamentals,loops,sorting,validation

//url: https://edabit.com/challenge/WnfkPFXNMeT8C4c2z

//Description:
//Given two arrays smarr and bigarr, we say smlst is an ordered subarray of bigarr if all the elements of smarr can be found in bigarr, and in the same order.
//Examples:
//[4, 3, 2] is an ordered subarray of [5, 4, 3, 2, 1].
//[5, 3, 1] is an ordered subarray of [5, 4, 3, 2, 1].
//[5, 3, 1] is not and ordered subarray of [1, 2, 3, 4, 5] since elements are not in the same - [1, 2, 3] is an ordered subarray of [3, 2, 1, 2, 3].
//Write a function that, given arrays smarr and bigarr, decides if smarr is an ordered subarray of bigarr.
//Examples
//isOrdSub([4, 3, 2], [5, 4, 3, 2, 1]) ➞ true
//
//isOrdSub([5, 3, 1], [5, 4, 3, 2, 1]) ➞ true
//
//isOrdSub([5, 3, 1], [1, 2, 3, 4, 5]) ➞ false
//
//isOrdSub([1, 2, 3], [3, 2, 1, 2, 3]) ➞ true
//Notes
//Be careful of examples like the fourth example, where the elements of smarr appear multiple times in bigarr.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(isOrdSub([4, 3], [3, 4]), false)
//Test.assertEquals(isOrdSub([4, 3, 2], [5, 4, 3, 2, 1]), true)
//Test.assertEquals(isOrdSub([5, 3, 1], [5, 4, 3, 2, 1]), true)
//Test.assertEquals(isOrdSub([5, 3, 1], [1, 2, 3, 4, 5]), false)
//Test.assertEquals(isOrdSub([1, 2, 3], [3, 2, 1, 2, 3]), true)
//Test.assertEquals(isOrdSub([0, 1, 0, 1], [1, 0, 1, 0, 1]), true)
//Test.assertEquals(isOrdSub([0, 1, 0, 1], [1, 1, 1, 1, 0, 0, 0, 1, 1, 0]), false)
//Test.assertEquals(isOrdSub([0, 1, 0, 1, 1, 0, 1], [1, 0, 0, 1, 0, 1, 0, 0, 1, 1, 0]), false)
//Test.assertEquals(isOrdSub([1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1], [1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1]), false)
//Test.assertEquals(isOrdSub([1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1], [1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1]), true)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Reverse Letters, Keep Numbers in Place

//tags: formatting,logic,loops,strings

//url: https://edabit.com/challenge/Ps7nX3XdCLDN4Z33y

//Description:
//Create a function that reverses letters in a string but keeps digits in their current order.
//Examples
//reverse("ab89c") ➞ "cb89a"
//
//reverse("jkl5mn923o") ➞ "onm5lk923j"
//
//reverse("123a45") ➞ "123a45"
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(reverse("ab89c"), "cb89a")
//Test.assertEquals(reverse("jkl5mn923o"), "onm5lk923j")
//Test.assertEquals(reverse("123a45"), "123a45")
//Test.assertEquals(reverse("a1b1c"), "c1b1a")

