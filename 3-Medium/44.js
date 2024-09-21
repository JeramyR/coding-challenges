

//title: Reverse the Order of Words with Five Letters or More

//tags: formatting,loops,regex,sorting,strings

//url: https://edabit.com/challenge/wPNzJEJebN2mewcqY

//Description:
//Write a function that takes a string of one or more words as an argument and returns the same string, but with all five or more letter words reversed. Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.
//Examples
//reverse("Reverse") ➞ "esreveR"
//
//reverse("This is a typical sentence.") ➞ "This is a lacipyt .ecnetnes"
//
//reverse("The dog is big.") ➞ "The dog is big."
//Notes
//You can expect a valid string to be provided for each test case.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(reverse("Reverse"), "esreveR");
//Test.assertEquals(reverse("This is a typical sentence."), "This is a lacipyt .ecnetnes");
//Test.assertEquals(reverse("The dog is big."), "The dog is big.");
//Test.assertEquals(reverse("Reverse the order of every word greater than or equal to five characters."), "esreveR the redro of yreve word retaerg than or lauqe to five .sretcarahc");
//Test.assertEquals(reverse("Lets all be unique together until we realise we are all the same."), "Lets all be euqinu rehtegot litnu we esilaer we are all the .emas");
//Test.assertEquals(reverse("The old apple revels in its authority."), "The old elppa slever in its .ytirohtua");
//Test.assertEquals(reverse("The shooter says goodbye to his love."), "The retoohs says eybdoog to his .evol");
//Test.assertEquals(reverse("Please wait outside of the house."), "esaelP wait edistuo of the .esuoh");
//Test.assertEquals(reverse("Two seats were vacant."), "Two staes were .tnacav");
//Test.assertEquals(reverse("Sixty-Four comes asking for bread."), "ruoF-ytxiS semoc gniksa for .daerb");

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Get the Date

//tags: dates,formatting,language_fundamentals

//url: https://edabit.com/challenge/K8FPxyGNDXhWQD9jX

//Description:
//Write a function that, given a date (in the format MM/DD/YYYY), returns the day of the week as a string. Each day name must be one of the following strings: "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", or "Saturday".
//To illustrate, the day of the week for "12/07/2016" is "Wednesday".
//Examples
//getDay("12/07/2016") ➞ "Wednesday"
//
//getDay("09/04/2016") ➞ "Sunday"
//
//getDay("12/08/2011") ➞ "Thursday"
//Notes
//This challenge assumes the week starts on Sunday.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(getDay('12/07/2016'), 'Wednesday')
//Test.assertEquals(getDay('12/08/2011'), 'Thursday')
//Test.assertEquals(getDay('09/04/2016'), 'Sunday')
//Test.assertEquals(getDay('06/08/2012'), 'Friday')
//Test.assertEquals(getDay('08/13/2019'), 'Tuesday')

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Ones, Threes and Nines (Version #1)

//tags: classes,math,numbers

//url: https://edabit.com/challenge/9zwdrfW99zmdRhibi

//Description:
//Given an int, figure out how many ones, threes and nines you could fit into the number. You must create a class. You will make variables (class.ones, class.threes, class.nines) to do this.
//Examples
//let n1 = new OnesThreesNines(5)
//n1.nines ➞ 0
//
//n1.ones ➞ 5
//
//n1.threes ➞ 1
//Notes.
//This was originally a Python problem over here.
//See another Python version of this series.
//I'd suggest using getters and setters for this, but you're welcome to use any method you choose!

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//const probs = [{
//  num:0,
//  which:'ones',
//  expect:0
//},{
//  num:1,
//  which:'threes',
//  expect:0
//},{
//  num:2,
//  which:'nines',
//  expect:0
//},{
//  num:3,
//  which:'ones',
//  expect:3
//},{
//  num:4,
//  which:'threes',
//  expect:1
//},{
//  num:10,
//  which:'nines',
//  expect:1
//},{

