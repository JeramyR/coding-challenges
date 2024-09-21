

//title: Wurst Is Better

//tags: regex,strings

//url: https://edabit.com/challenge/j7s4LTKexAEazQApv

//Description:
//Wurst is the best. Create a function that takes a string and replaces every mention of any type of sausage with the German word "Wurst," unless—of course—the sausage is already a type of German "Wurst" (i.e. "Bratwurst", see below), then leave the sausage name unchanged.
//German Wursts	Convert to Wurst
//Bratwurst	Kielbasa
//Kochwurst	Chorizo
//Leberwurst	Moronga
//Mettwurst	Salami
//Rostbratwurst	Sausage
//~	Andouille
//~	Naem
//~	Merguez
//~	Gurka
//~	Snorkers
//~	Pepperoni
//Rules
//Append sausages from the "Convert to Wurst" column with "wurst".
//Do not replace any German sausage with the word "Wurst".
//The word "Wurst" must be title case.
//Examples
//wurstIsBetter("I like chorizos, but not sausages") ➞ "I like Wursts, but not Wursts"
//
//wurstIsBetter("sich die Wurst vom Brot nehmen lassen") ➞ "sich die Wurst vom Brot nehmen lassen"
//
//wurstIsBetter("Bratwurst and Rostbratwurst are sausages") ➞ "Bratwurst and Rostbratwurst are Wursts"
//Notes
//All German sausage names contain the word "wurst".

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(wurstIsBetter("Sausage fests are like salami fests"), "Wurst fests are like Wurst fests")
//Test.assertEquals(wurstIsBetter("Add the kielbasa and the reserved potatoes and stir through"), "Add the Wurst and the reserved potatoes and stir through")
//Test.assertEquals(wurstIsBetter("Salami sandwiches, salami and cheese, salami on crackers— I couldn't get enough of the salty, spicy sausage"), "Wurst sandwiches, Wurst and cheese, Wurst on crackers— I couldn't get enough of the salty, spicy Wurst")
//Test.assertEquals(wurstIsBetter("sich die Wurst vom Brot nehmen lassen"), "sich die Wurst vom Brot nehmen lassen")
//Test.assertEquals(wurstIsBetter("Bratwurst and Rostbratwurst is a sausage made from finely minced pork and beef and usually grilled and served with sweet German mustard and a piece of bread or hard roll. It can be sliced and made into Currywurst by slathering it in a catchup-curry sauce."), "Bratwurst and Rostbratwurst is a Wurst made from finely minced pork and beef and usually grilled and served with sweet German mustard and a piece of bread or hard roll. It can be sliced and made into Currywurst by slathering it in a catchup-curry sauce.")
//Test.assertEquals(wurstIsBetter("Il n’arrête pas de faire l’andouille"), "Il n’arrête pas de faire l’Wurst")
//Test.assertEquals(wurstIsBetter("Naem is a common way of preserving pork meat in several Southeast Asian countries, including Thailand, Laos, Cambodia and Vietnam"), "Wurst is a common way of preserving pork meat in several Southeast Asian countries, including Thailand, Laos, Cambodia and Vietnam")
//Test.assertEquals(wurstIsBetter("The chipper group over at Orangatang recently dropped another wheel sensation; the Moronga"), "The chipper group over at Orangatang recently dropped another wheel sensation; the Wurst")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: No Hidden Fees

//tags: arrays,language_fundamentals,numbers,validation

//url: https://edabit.com/challenge/LSw9Tgs6yMgQ4JfdX

//Description:
//Given an array of prices prices and a "supposed" total t, return true if there is a hidden fee added to the total (i.e. the total is greater than the sum of prices), otherwise return false.
//Examples
//hasHiddenFee(["$2", "$4", "$1", "$8"], "$15") ➞ false
//
//hasHiddenFee(["$1", "$2", "$3"], "$6") ➞ false
//
//hasHiddenFee(["$1"], "$4") ➞ true
//Notes
//Remember that each price is given as a string.
//All $ signs will be at the beginning of the number.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(hasHiddenFee(["$2", "$4", "$1", "$8"], "$15"), false)
//Test.assertEquals(hasHiddenFee(["$1", "$2", "$3"], "$6"), false)
//Test.assertEquals(hasHiddenFee(["$1"], "$4"), true)
//Test.assertEquals(hasHiddenFee(["$15", "$40", "$19", "$50", "$22", "$41", "$35", "$10", "$38", "$41"], "$311"), false)
//Test.assertEquals(hasHiddenFee(["$25", "$6", "$19", "$9", "$32", "$15", "$10", "$9", "$7", "$8", "$37", "$23", "$18"], "$232"), true)
//Test.assertEquals(hasHiddenFee(["$31", "$30", "$21", "$12", "$10", "$38", "$42", "$27", "$51"], "$297"), true)
//Test.assertEquals(hasHiddenFee(["$9", "$37", "$21", "$4", "$14", "$10", "$36", "$33", "$17", "$41", "$50", "$48", "$2", "$45", "$6", "$22", "$23"], "$499"), true)
//Test.assertEquals(hasHiddenFee(["$44"], "$82"), true)
//Test.assertEquals(hasHiddenFee(["$15", "$30", "$34"], "$79"), false)
//Test.assertEquals(hasHiddenFee(["$35", "$29", "$9", "$47", "$43", "$4", "$37", "$32", "$49", "$37", "$32", "$38", "$43", "$19", "$26", "$46", "$46", "$31", "$24", "$6"], "$696"), true)
//Test.assertEquals(hasHiddenFee(["$50", "$28", "$11", "$51", "$8", "$44"], "$192"), false)
//Test.assertEquals(hasHiddenFee(["$50", "$14", "$45", "$43", "$7", "$45", "$34", "$28", "$46", "$50", "$36", "$23"], "$432"), true)
//Test.assertEquals(hasHiddenFee(["$45", "$50", "$45", "$16", "$6", "$45", "$33", "$18", "$12", "$3", "$40", "$51"], "$364"), false)
//Test.assertEquals(hasHiddenFee(["$33", "$26", "$40", "$10", "$24", "$48"], "$181"), false)
//Test.assertEquals(hasHiddenFee(["$21", "$45", "$6", "$43", "$39"], "$207"), true)
//Test.assertEquals(hasHiddenFee(["$18", "$44", "$51", "$31", "$22", "$8", "$21", "$27", "$21", "$3", "$42", "$10", "$47", "$29", "$32", "$47"], "$517"), true)
//Test.assertEquals(hasHiddenFee(["$17", "$31", "$42", "$20", "$28", "$13", "$17", "$4", "$13", "$1", "$29", "$20", "$30", "$34", "$14", "$18", "$20", "$14", "$38", "$30"], "$456"), true)
//Test.assertEquals(hasHiddenFee(["$48", "$24", "$11"], "$83"), false)
//Test.assertEquals(hasHiddenFee(["$14", "$15", "$12", "$18", "$29", "$3", "$29", "$9", "$7", "$2", "$15", "$8", "$50", "$4", "$3"], "$218"), false)
//Test.assertEquals(hasHiddenFee(["$30", "$40", "$2", "$25", "$48", "$42", "$22", "$6", "$48", "$14", "$15", "$2", "$46", "$20", "$5", "$10", "$35"], "$412"), true)
//Test.assertEquals(hasHiddenFee(["$43", "$49", "$2", "$15", "$6", "$20", "$31", "$7", "$38", "$40", "$17", "$25", "$21", "$29", "$12", "$34", "$22", "$45", "$18", "$19", "$31"], "$524"), false)
//Test.assertEquals(hasHiddenFee(["$25", "$16"], "$56"), true)
//Test.assertEquals(hasHiddenFee(["$28", "$11", "$2", "$12", "$22", "$7", "$30", "$46", "$25", "$17", "$28", "$44", "$14", "$43", "$6", "$11", "$23", "$6", "$46"], "$459"), true)
//Test.assertEquals(hasHiddenFee(["$24", "$31", "$6", "$20", "$35", "$33", "$1", "$46", "$45", "$36", "$43"], "$394"), true)
//Test.assertEquals(hasHiddenFee(["$18", "$25", "$44", "$36", "$50", "$32", "$7", "$42", "$23", "$38", "$43", "$9", "$7", "$22", "$51", "$35", "$8"], "$557"), true)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Mini Peaks

//tags: arrays,loops

//url: https://edabit.com/challenge/jJmSKcXeYWC3pTjBT

//Description:
//Write a function that returns all the elements in an array that are strictly greater than their adjacent left and right neighbors.
//Examples
//miniPeaks([4, 5, 2, 1, 4, 9, 7, 2]) ➞ [5, 9]
//// 5 has neighbours 4 and 2, both are less than 5.
//
//miniPeaks([1, 2, 1, 1, 3, 2, 5, 4, 4]) ➞ [2, 3, 5]
//
//miniPeaks([1, 2, 3, 4, 5, 6]) ➞ []
//Notes
//Do not count boundary numbers, since they only have one left/right neighbor.
//If no such numbers exist, return an empty array.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(miniPeaks([4, 5, 2, 1, 4, 9, 7, 2]), [5, 9])
//Test.assertSimilar(miniPeaks([1, 2, 1, 1, 3, 2, 5, 4, 4]), [2, 3, 5])
//Test.assertSimilar(miniPeaks([1, 2, 3, 4, 5, 6]), [])
//Test.assertSimilar(miniPeaks([6, 4, 3]), [])
//Test.assertSimilar(miniPeaks([1, 1, 1, 1, 2, 1, 1, 1]), [2])
//Test.assertSimilar(miniPeaks([1, 9, 1, 8, 2, 7, 6]), [9, 8, 7])
//Test.assertSimilar(miniPeaks([7, 8, 7, 8, 7, 8, 5, 1, 2, 0]), [8, 8, 8, 2])

