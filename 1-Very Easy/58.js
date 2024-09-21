

//title: Classes For Fetching Information on a Sports Player

//tags: classes,objects,strings

//url: https://edabit.com/challenge/ZngT4zDckDugt2JGY

//Description:
//Create a class that takes the following four arguments for a particular football player:
//name
//age
//height
//weight
//Also, create three functions for the class that returns the following strings:
//getAge() returns "name is age age"
//getHeight() returns "name is heightcm"
//getWeight() returns "name weighs weightkg"
//Examples
// p1 = new Player("David Jones", 25, 175, 75)
//
// p1.getAge() ➞ "David Jones is age 25"
// p1.getHeight() ➞ "David Jones is 175cm"
// p1.getWeight() ➞ "David Jones weighs 75kg"
//Notes
//name will be passed in as a string and age, height and weight will be integers.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//player1 = new Player('Patrick Mahomes', 24, 188, 104)
//player2 = new Player('Jimmy Garoppolo', 28, 188, 102)
//player3 = new Player('Julio Jones', 31, 191, 100)
//​
//Test.assertEquals(player1.getAge(), 'Patrick Mahomes is age 24')
//Test.assertEquals(player1.getHeight(), 'Patrick Mahomes is 188cm')
//Test.assertEquals(player1.getWeight(), 'Patrick Mahomes weighs 104kg')
//​
//Test.assertEquals(player2.getAge(), 'Jimmy Garoppolo is age 28')
//Test.assertEquals(player2.getHeight(), 'Jimmy Garoppolo is 188cm')
//Test.assertEquals(player2.getWeight(), 'Jimmy Garoppolo weighs 102kg')
//​
//Test.assertEquals(player3.getAge(), 'Julio Jones is age 31')
//Test.assertEquals(player3.getHeight(), 'Julio Jones is 191cm')
//Test.assertEquals(player3.getWeight(), 'Julio Jones weighs 100kg')

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: RegEx: Character Classes VIII ⁠- \D

//tags: formatting,language_fundamentals,regex

//url: https://edabit.com/challenge/T2sDPQQhpaEd9YAiq

//Description:
//You can think of character classes as characters with special meaning. They are recognized as special when you place the \ before the character.
//Here are a list of the characters classes in JavaScript:
//., \cX, \d, \D, \f, \n, \r, \s, \S, \t, \v, \w, \W, \0, \xhh, \uhhhh, \uhhhhh, [\b]
//There is a hidden message in this string:
//const str = "242Edabit23 45can344 3be3 254324addictive!"
//Write the regular expression that reveals the hidden message. You have to remove all of the numbers to reveal the message. Use the character class \D in your expression.
//Notes
//Check the Resources tab for details on character classes if you're stuck.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//const str = "242Edabit23 45can344 3be3 254324addictive!"
//​
//const validate = (REGEXP) => {
//   if(!/\\D/.test(String(REGEXP))) return () => "required"
//   return function testReg(str) {
//     return str.match(REGEXP).join("")
//   }
//}
//​
//const testExp = validate(REGEXP)
//console.log(testExp(str))
//​
//Test.assertNotEquals(testExp(str), "required", "You are required to use a \D character class in your expression.")
//Test.assertSimilar(testExp(str), "Edabit can be addictive!")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Raucous Applause

//tags: language_fundamentals,regex,strings

//url: https://edabit.com/challenge/3kgpXM2wcSvDR6z4K

//Description:
//After an amazing performance, the crowd goes wild! People clap enthusiastically and most claps overlap with each other to create one homogeneous sound.
//An overlapped clap is a clap which starts but doesn't finish, as in "ClaClap" (The first clap is cut short and there are overall 2 claps)
//Given a string of what the overlapping claps sounded like, return how many claps were made in total.
//Examples
//countClaps("ClaClaClaClap!") ➞ 4
//
//countClaps("ClClClaClaClaClap!") ➞ 6
//
//countClaps("CCClaClClap!Clap!ClClClap!") ➞ 9
//Notes
//Each clap starts with a capital "C".

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(countClaps("ClaClaClaClap!"), 4)
//Test.assertEquals(countClaps("ClClClaClaClaClap!"), 6)
//Test.assertEquals(countClaps("CCClaClClap!Clap!ClClClap!"), 9)
//Test.assertEquals(countClaps("ClCCClaClaClaClCClap!CClaClap!Clap!ClClClClaClaClap!Clap!ClClCClap!Clap!ClClap!ClaCClClap!ClClap!Clap!CClClaClaClaCClaCClaClClaCCCClaClap!Clap!ClaClaClap!ClaClap!CClap!Clap!ClClap!"), 61)
//Test.assertEquals(countClaps("Clap!ClClaClap!ClaClap!CClap!ClClClap!CClaClap!CClap!ClClap!ClaClaClClap!ClaClap!ClClCClaClaCClaCCCCClClCClap!ClaCClaClCClap!Clap!ClaClaClaCClaClap!"), 52)
//Test.assertEquals(countClaps("Clap!CClaClClap!ClCClCCClaCClap!ClCCClCClClap!ClClClap!CClap!CClCClap!ClCClap!Clap!Clap!Clap!ClClap!Clap!CClaClClap!ClaClaClaClCClClaClClap!ClaClClaClap!ClaClap!CClClClap!ClClaClClap!Clap!ClaClaClaClaClClap!CClaClClaCClap!ClClClClClap!Clap!CClClap!ClClap!ClaClap!CClClaClaClap!Clap!"), 97)
//Test.assertEquals(countClaps("CClCClaCClap!Clap!ClaClap!ClCCClap!ClClClClap!ClaClCClClaClap!"), 23)
//Test.assertEquals(countClaps("Clap!Clap!ClClCClCClClaClaClaCClaClClaClClClClap!CClap!ClClap!ClClClaClaClClaClaClaClaCClClaClap!"), 36)
//Test.assertEquals(countClaps("ClaCCClClCClClaCClCClap!ClaClClaClap!Clap!ClClClClap!Clap!CClap!CClaClClaClCClaClap!ClaClaClaClap!Clap!ClClap!CCClap!ClClaClap!CClClClap!CClaClaClClaClap!ClClap!ClaCClaClap!Clap!Clap!Clap!CClaCCCClap!ClaClap!ClClap!Clap!CClaClaClaClap!CClaCClap!Clap!CClaCClaClaCClaCClap!"), 94)
//Test.assertEquals(countClaps("CClClap!Clap!CClCClClaCClaClaClap!ClaClaClaCCCClap!CCClClap!Clap!ClaClaClap!ClClClap!ClCCClap!ClaClaClap!CClap!ClaClap!CClClClap!CClap!CClClaCClClap!ClaClap!ClaClClClCClap!ClaClClap!ClaClaCClap!CClClaClClap!ClaClaClClaClClaClaClap!"), 82)
//Test.assertEquals(countClaps("ClaCCClCClaClClaClCClaClaClap!Clap!CClaClap!ClaClap!Clap!ClaClap!Clap!"), 23)
//Test.assertEquals(countClaps("CClClaClClaClClap!Clap!Clap!ClClaClap!ClClClClaClap!CClap!ClaClaCCClap!ClClap!CClap!Clap!Clap!ClaClaClap!ClaClClClaClaClap!ClaClaClap!ClClCClaClaCClClaClap!Clap!Clap!CClClaClaClaClaClCClClaClaCClaClap!ClCClClClap!Clap!Clap!Clap!Clap!CClaClap!Clap!CCClaClCClClaClClClaClaClaClaCClap!Clap!"), 96)
//Test.assertEquals(countClaps("Clap!ClaClCClaClap!ClCClap!ClClClaClap!ClaClaCClap!ClaClaClap!ClaCClap!Clap!CClClClap!ClClCClaCClCClaCClClClClaClap!ClClaCClap!CCCClap!Clap!ClClap!ClaCClaCClClap!ClClaClap!ClClaClaClaClaCCClClap!CClaClaClap!Clap!ClClap!"), 78)
//Test.assertEquals(countClaps("Clap!ClaClCClaClaClap!CClaClap!CCClCClap!Clap!Clap!Clap!ClClap!Clap!ClaClaClClap!Clap!ClaClaClap!CClaClap!CCClClap!ClaClaClap!ClClaClaClaClaClap!CClap!ClaClCClaClap!CClClCClaClap!Clap!CClaCClap!"), 63)
//Test.assertEquals(countClaps("Clap!CClaClap!ClClap!ClClClap!ClaCClap!ClaCClClap!CClap!CClClaClap!ClaClaClCCClap!Clap!CClClaClCClaClaClClap!Clap!CClaCClaCClap!ClaCClClCClap!CClap!CClap!ClaClaClaClaClap!ClClap!CClaClaClaClClaClClCClClCClClaClaCClClap!"), 80)
//Test.assertEquals(countClaps("CClaCClClap!Clap!Clap!Clap!Clap!Clap!Clap!ClClClap!CClap!CClap!CCClaClClClClClaCClaClap!ClClap!CClaClap!Clap!CCClaClap!Clap!CClClClaClaClaClap!ClaCClap!ClClaClaCClClap!CClap!ClaClap!"), 60)
//Test.assertEquals(countClaps("ClaCCClap!"), 4)
//Test.assertEquals(countClaps("ClaClap!ClaClaClap!Clap!"), 6)
//Test.assertEquals(countClaps("CClap!ClaClaClClap!Clap!ClaCCClap!ClClaClap!CClap!CClap!ClaClClaCClaClap!ClaClap!ClaClClaClaCCClClaClaClap!Clap!"), 37)
//Test.assertEquals(countClaps("ClClaCClap!ClaCClaClap!Clap!Clap!ClaClClap!ClClaClaClClaClaClaCCClClClClClap!"), 27)
//Test.assertEquals(countClaps("ClClClCClClap!Clap!CCCClap!ClCCClClap!CCClap!Clap!Clap!CClap!ClaClaCClaCClaClaClaClClap!ClaClCCClClaClap!ClClaClaCClCCClClClap!Clap!ClaClap!ClaClaCClap!ClCCClaClap!ClaClap!CClap!CClaClClaClCClaClap!CClClap!ClClap!Clap!CClap!CClaClaClClaClap!"), 88)
//Test.assertEquals(countClaps("ClClCClClClaClClCClap!ClCClap!ClaClaClClap!ClaCClClap!ClClaClap!ClaClaClaClap!Clap!Clap!CCCClaClaClaClaClaCClCClaClaClap!Clap!CCCClap!ClaClap!CCClaClaClaClap!ClClClap!CClCCCClap!Clap!CClClClaClap!ClClaCClClap!ClaClClap!ClaClap!ClCClaClaCClap!"), 88)
//Test.assertEquals(countClaps("ClClap!Clap!CCClClClaClClClClap!Clap!CClap!ClClap!ClClaCCClap!"), 22)
//Test.assertEquals(countClaps("ClaClaClClClaCClap!ClaClaCCClaClaClClap!CClCClCClClClClap!ClaClap!Clap!ClaCCClap!ClCCClaClClClaCCClaClCClClaClap!ClClaClClaClap!ClClap!Clap!ClaClaClClap!"), 58)
//Test.assertEquals(countClaps("ClaCClClClClaClClap!ClClap!CCClaCCClClCCClaClap!Clap!CClClClap!ClaCClClaCClaCClClap!ClClClClaCClaClap!Clap!"), 43)

