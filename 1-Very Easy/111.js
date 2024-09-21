

//title: Truthy or Falsy?

//tags: conditions,control_flow,language_fundamentals,validation

//url: https://edabit.com/challenge/czEAQio8zr9HjZsQn

//Description:
//A value is said to be "truthy" if it evaluates to true in a Boolean context. All values are truthy in JavaScript unless they're one of the following:
//false
//null
//undefined
//0
//NaN
//""
//In JavaScript, an empty object and an empty array are both considered "truthy," but an empty string is considered false when evaluated as a Boolean (this behavior is what we call "falsey").
//Create a function that takes an argument of any data type and returns 1 if it's truthy and 0 if it's falsy.
//Examples
//isTruthy(0) ➞ 0
//
//isTruthy(false) ➞ 0
//
//isTruthy("") ➞ 0
//
//isTruthy("false") ➞ 1
//Notes
//You may have to take into account NaN's unique behavior in JavaScript. While other falsey values are equal to themselves, NaN != NaN
//If you get stuck on a challenge, find help in the Resources tab.
//If you're really stuck, unlock solutions in the Solutions tab.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(isTruthy(1), 1)
//Test.assertEquals(isTruthy(-1), 1)
//Test.assertEquals(isTruthy("false"), 1)
//Test.assertEquals(isTruthy([]), 1)
//Test.assertEquals(isTruthy(true), 1)
//Test.assertEquals(isTruthy({}), 1)
//Test.assertEquals(isTruthy(function(){}), 1)
//Test.assertEquals(isTruthy(0), 0)
//Test.assertEquals(isTruthy(""), 0)
//Test.assertEquals(isTruthy(null), 0)
//Test.assertEquals(isTruthy(undefined), 0)
//Test.assertEquals(isTruthy(false), 0)
//Test.assertEquals(isTruthy(NaN), 0)
//Test.assertEquals(isTruthy(''), 0)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Reverse the Order of a String

//tags: formatting,sorting,strings

//url: https://edabit.com/challenge/oS3wCwLWsDqvs7XKd

//Description:
//Create a function that takes a string as its argument and returns the string in reversed order.
//Examples
//reverse("Hello World") ➞ "dlroW olleH"
//
//reverse("The quick brown fox.") ➞ ".xof nworb kciuq ehT"
//
//reverse("Edabit is really helpful!") ➞ "!lufpleh yllaer si tibadE"
//Notes
//You can expect a valid string for all test cases.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(reverse("Think different."), ".tnereffid knihT");
//Test.assertEquals(reverse("It doesn’t make sense to hire smart people and tell them what to do; we hire smart people so they can tell us what to do."), ".od ot tahw su llet nac yeht os elpoep trams erih ew ;od ot tahw meht llet dna elpoep trams erih ot esnes ekam t’nseod tI");
//Test.assertEquals(reverse("Innovation is the ability to see change as an opportunity - not a threat"), "taerht a ton - ytinutroppo na sa egnahc ees ot ytiliba eht si noitavonnI");
//Test.assertEquals(reverse("Everything is based on a simple rule: Quality is the best business plan."), ".nalp ssenisub tseb eht si ytilauQ :elur elpmis a no desab si gnihtyrevE");
//Test.assertEquals(reverse("The people who are crazy enough to think they can change the world are the ones who do."), ".od ohw seno eht era dlrow eht egnahc nac yeht kniht ot hguone yzarc era ohw elpoep ehT");
//Test.assertEquals(reverse("Don’t let the noise of others’ opinions drown out your own inner voice."), ".eciov renni nwo ruoy tuo nword snoinipo ’srehto fo esion eht tel t’noD");
//Test.assertEquals(reverse("Learn continually; There's always one more thing to learn."), ".nrael ot gniht erom eno syawla s'erehT ;yllaunitnoc nraeL");
//Test.assertEquals(reverse("Quality is more important than quantity. One home run is much better than two doubles."), ".selbuod owt naht retteb hcum si nur emoh enO .ytitnauq naht tnatropmi erom si ytilauQ");
//Test.assertEquals(reverse("Your time is limited so don't waste it living someone else's life."), ".efil s'esle enoemos gnivil ti etsaw t'nod os detimil si emit ruoY");
//Test.assertEquals(reverse("The only way to be truly satisfied is to do what you believe is great work."), ".krow taerg si eveileb uoy tahw od ot si deifsitas ylurt eb ot yaw ylno ehT");

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Find the Bug: Checking Even Numbers

//tags: arrays,bugs,numbers,validation

//url: https://edabit.com/challenge/bcM99TYJmRv5JnZaA

//Description:
//Create a function that takes in an array and returns true if all its values are even, and false otherwise.
//Not a big deal, your friend says. He writes the following code:
//function checkAllEven(arr) {
//  return arr.every(x % 2 === 0)
//}
//The code above leads to a Reference Error, with x being undefined. Fix the code above so that all tests pass:
//Examples
//checkAllEven([1, 2, 3, 4]) ➞ false
//
//checkAllEven([2, 4, 6]) ➞ true
//
//checkAllEven([5, 6, 8, 10]) ➞ false
//
//checkAllEven([-2, 2, -2, 2]) ➞ true
//Notes
//For help, check Resources or ask a question in the Comments.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(checkAllEven([1, 2, 3, 4]), false)
//Test.assertEquals(checkAllEven([2, 4, 6]), true)
//Test.assertEquals(checkAllEven([5, 6, 8, 10]), false)
//Test.assertEquals(checkAllEven([-2, 2, -2, 2]), true)

