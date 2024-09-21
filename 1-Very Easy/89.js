

//title: Western Showdown

//tags: conditions,strings

//url: https://edabit.com/challenge/9N7zA5oiu6v5nhuBm

//Description:
//Wild Roger is participating in a Western Showdown, meaning he has to draw (pull out and shoot) his gun faster than his opponent in a gun standoff.
//Given two strings,p1 and p2, return which person drew their gun the fastest. If both are drawn at the same time, return "tie".
//Examples
//showdown(
//  "   Bang!        ",
//  "        Bang!   "
//) ➞ "p1"
//
//// p1 draws his gun sooner than p2
//
//showdown(
//  "               Bang! ",
//  "             Bang!   "
//) ➞ "p2"
//
//showdown(
//  "     Bang!   ",
//  "     Bang!   "
//) ➞ "tie"
//Notes
//Both strings are the same length.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(showdown(
//"   Bang!        ",
//"        Bang!   "
//), "p1")
//​
//Test.assertEquals(showdown(
//"               Bang! ",
//"             Bang!   "
//), "p2")
//​
//Test.assertEquals(showdown(
//"  Bang!   ",
//"Bang!     "
//), "p2")
//​
//Test.assertEquals(showdown(
//"     Bang!   ",
//"     Bang!   "
//), "tie")
//​
//Test.assertEquals(showdown("  Bang!     ", "     Bang!  "), "p1")
//Test.assertEquals(showdown(" Bang!  ", "  Bang! "), "p1")
//Test.assertEquals(showdown("          Bang!       ", "       Bang!          "), "p2")
//Test.assertEquals(showdown("    Bang!    ", "    Bang!    "), "tie")
//Test.assertEquals(showdown("       Bang!       ", "       Bang!       "), "tie")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Owofied a Sentence

//tags: formatting,regex,strings

//url: https://edabit.com/challenge/9kCTutboYJmRXotBj

//Description:
//Create a function that takes a sentence and turns every "i" into "wi" and "e" into "we", and add "owo" at the end.
//Examples
//owofied("I'm gonna ride 'til I can't no more")
//➞ "I'm gonna rwidwe 'twil I can't no morwe owo"
//
//owofied("Do you ever feel like a plastic bag")
//➞ "Do you wevwer fwewel lwikwe a plastwic bag owo"
//
//owofied("Cause baby you're a firework")
//➞ "Causwe baby you'rwe a fwirwework owo"
//Notes
//Don't forget to return the value!
//There's a space in front of owo!

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(owofied("I'm gonna ride 'til I can't no more"), "I'm gonna rwidwe 'twil I can't no morwe owo")
//Test.assertEquals(owofied("Do you ever feel like a plastic bag"), "Do you wevwer fwewel lwikwe a plastwic bag owo")
//Test.assertEquals(owofied("Cause baby you're a firework"), "Causwe baby you'rwe a fwirwework owo")
//Test.assertEquals(owofied("Never gonna give you up"), "Nwevwer gonna gwivwe you up owo")
//Test.assertEquals(owofied("We've known each other for so long"), "Wwe'vwe known weach othwer for so long owo")
//Test.assertEquals(owofied("Never gonna let you down"), "Nwevwer gonna lwet you down owo")
//Test.assertEquals(owofied("Shine bright like a diamond"), "Shwinwe brwight lwikwe a dwiamond owo")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Formatting Text on Edabit

//tags: conditions,formatting,language_fundamentals,strings

//url: https://edabit.com/challenge/yxqTdf5a2PCbGKo9M

//Description:
//Edabit allows for markdown formatting, meaning that it's possible to format words by surrounding text with special characters. For example, to get bold text, you surround the text with double asterisks, like this **bold**.
//Here is a list of the possible formatting options in Edabit and how to apply them:
//**bold**
//_italics_
//`inline code`
//~~strikethrough~~
//Challenge
//Given a string and a style character, return the newly formatted string. Style characters are single letters that represent the different types of formatting.
//For the purposes of this challenge, the style characters are as follows:
//"b" is for bold
//"i" is for italics
//"c" is for inline code
//"s" is for strikethrough
//Examples
//mdFormat("Bold", "b") ➞ "**Bold**"
//
//mdFormat("leaning text", "i") ➞ "_leaning text_"
//
//mdFormat("Edabit", "c") ➞ "`Edabit`"
//
//mdFormat("That's a strike!", "s") ➞ "~~That's a strike!~~"
//Notes
//Remember to format your comments!

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(mdFormat("Bold", "b"), "**Bold**")
//Test.assertEquals(mdFormat("Italics", "i"), "_Italics_")
//Test.assertEquals(mdFormat("Code", "c"), "`Code`")
//Test.assertEquals(mdFormat("Ruby", "s"), "~~Ruby~~")
//Test.assertEquals(mdFormat("JavaScript", "b"), "**JavaScript**")
//Test.assertEquals(mdFormat("Python", "i"), "_Python_")
//Test.assertEquals(mdFormat("C++", "c"), "`C++`")
//Test.assertEquals(mdFormat("Strikethrough", "s"), "~~Strikethrough~~")

