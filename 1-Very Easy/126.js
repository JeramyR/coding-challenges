

//title: Is Sam with Frodo?

//tags: algorithms,arrays,logic,validation

//url: https://edabit.com/challenge/ZqxDxzZK6Fm9uW6MF

//Description:
//Sam and Frodo need to be close. If they are side by side in the array, your function should return true. If there is a name between them, return false.
//Examples
//middleEarth(["Frodo", "Sam", "Gandalf"]) ➞ true
//
//middleEarth(["Frodo", "Saruman", "Sam"]) ➞ false
//
//middleEarth(["Orc", "Sam", "Frodo", "Legolas"]) ➞ true
//Notes
//No matter who comes first, the result must be true if Frodo and Sam are side by side.
//There is only one Sam and one Frodo in the array.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(middleEarth(['Frodo', 'Sam', 'Gandalf']), true)
//Test.assertEquals(middleEarth(['Orc', 'Sam', 'Gandalf', 'Frodo']), false)
//Test.assertEquals(middleEarth(['Sam', 'Frodo', 'Saruman']), true)
//Test.assertEquals(middleEarth(['Orc', 'Frodo', 'Legolas', 'Sam', 'Bilbo']), false)
//Test.assertEquals(middleEarth(['Aragorn', 'Gandalf', 'Sam', 'Frodo', 'Gollum']), true)
//Test.assertEquals(middleEarth(['Arwen', 'Sam', 'Gandalf', 'Frodo', 'Boromir']), false)
//Test.assertEquals(middleEarth(['Faramir', 'Frodo', 'Sam', 'Galadriel']), true)
//Test.assertEquals(middleEarth(['Eowin', 'Gimli', 'Bilbo', 'Frodo', 'Sam', 'Sauron']), true)
//Test.assertEquals(middleEarth(['Gandalf', 'Sam', 'Bilbo', 'Legolas', 'Frodo']), false)
//Test.assertEquals(middleEarth(['Legolas', 'Eowyn', 'Gandalf', 'Sam', 'Frodo', 'Gimli']), true)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Letters Only

//tags: formatting,regex,strings

//url: https://edabit.com/challenge/GPKkNbytRpsAnHcrX

//Description:
//Write a function that removes any non-letters from a string, returning a well-known film title.
//Examples
//lettersOnly("R!=:~0o0./c&}9k`60=y") ➞ "Rocky"
//
//lettersOnly("^,]%4B|@56a![0{2m>b1&4i4") ➞ "Bambi"
//
//lettersOnly("^U)6$22>8p).") ➞ "Up"
//Notes
//See the Resources section for more information on JavaScript string methods.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(lettersOnly(',1|2)")A^1<[_)?^"]l[a`3+%!d@8-0_0d.*}i@&n?='), 'Aladdin')
//Test.assertEquals(lettersOnly('^U)6$22>8p).'), 'Up')
//Test.assertEquals(lettersOnly('I5n!449+c@e*}@@1]p{2@`,~t:i0o%n<3%8'), 'Inception')
//Test.assertEquals(lettersOnly('!)"P[s9)"69}yc3+?1]+33>3ho'), 'Psycho')
//Test.assertEquals(lettersOnly(':~;G{o}o{+524<df~:>}e24{l8:_l]a:?@]%s7'), 'Goodfellas')
//Test.assertEquals(lettersOnly('&&S~]@8>1-0!h#r),80<_>!}|e>_k:'), 'Shrek')
//Test.assertEquals(lettersOnly(')^/|,!!09]=/1<G2?`=[l{a}d9]^i7a0|t6_o2*r'), 'Gladiator')
//Test.assertEquals(lettersOnly(']8;]V9e{=0r!.5t>i<^_g"4o"5~'), 'Vertigo')
//Test.assertEquals(lettersOnly('%%)?"?B#>/_4a#,;t8|m8675a(n'), 'Batman')
//Test.assertEquals(lettersOnly('97H^)~a8567ll*o?"6%)w63e37e<n?@='), 'Halloween')

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Recursion: Reverse a String

//tags: language_fundamentals,recursion,strings

//url: https://edabit.com/challenge/TiAz6mfHTtkoqMszA

//Description:
//Write a function that reverses a string. Make your function recursive.
//Examples
//reverse("hello") ➞ "olleh"
//
//reverse("world") ➞ "dlrow"
//
//reverse("a") ➞ "a"
//
//reverse("") ➞ ""
//Notes
//For non-base cases, your function must call itself at least once.
//Check the Resources tab for info on recursion.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(reverse("hello"), "olleh")
//Test.assertEquals(reverse("world"), "dlrow")
//Test.assertEquals(reverse("a"), "a")
//Test.assertEquals(reverse(""), "", "An empty string should return an empty string.")

