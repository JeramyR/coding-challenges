

//title: East or West

//tags: arrays,formatting,regex,strings

//url: https://edabit.com/challenge/zptHytXMgKcAjr4TH

//Description:
//You will be given an array of string "east" formatted differently every time. Create a function that returns "west" wherever there is "east". Format the string according to the input. Check the examples below to better understand the question.
//Examples
//direction(["east", "EAST", "eastEAST"]) ➞ ["west", "WEST", "westWEST"]
//
//direction(["eAsT EaSt", "EaSt eAsT"]) ➞ ["wEsT WeSt", "WeSt wEsT"]
//
//direction(["east EAST", "e a s t", "E A S T"]) ➞ ["west WEST", "w e s t", "W E S T"]
//Notes
//The input will only be "east" in different formats.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(direction(["east", "EAST", "eastEAST"]), ["west", "WEST", "westWEST"])
//Test.assertSimilar(direction(["eAsT EaSt", "EaSt eAsT"]) , ["wEsT WeSt", "WeSt wEsT"])
//Test.assertSimilar(direction(["east EAST", "e a s t", "E A S T"]), ["west WEST", "w e s t", "W E S T"])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Find the Shortest Word(s) in a Sentence

//tags: language_fundamentals,loops,regex,strings

//url: https://edabit.com/challenge/mYJPkSLLxWthSffR6

//Description:
//Create a function that accepts a string as an argument. Find its shortest word(s) and return them as an array sorted alphabetically (if there are multiple shortest words).
//Examples
//findShortestWords("I think the solution is fairly obvious.") ➞ ["i"]
//
//findShortestWords("Chase two rabbits, catch none.") ➞ ["two"]
//
//findShortestWords("We become what we think about.") ➞ ["we", "we"]
//
//findShortestWords("The quick brown fox jumped over the lazy dogs back.") ➞ ["fox", "the", "the"]
//Notes
//Periods, commas and other special characters don't count as part of a word's length.
//Remember to sort the array of words alphabetically before returning your result.
//Return words in lowercase only.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(findShortestWords("Strive not to be a success, but rather to be of value."), ['a'])
//Test.assertSimilar(findShortestWords("You miss 100% of the shots you don’t take."), ['of'])
//Test.assertSimilar(findShortestWords("Life is what happens to you while you’re busy making other plans."), ['is', 'to'])
//Test.assertSimilar(findShortestWords("We become what we think about."), ['we', 'we'])
//Test.assertSimilar(findShortestWords("The most common way people give up their power is by thinking they don’t have any."), ['by', 'is', 'up'])
//Test.assertSimilar(findShortestWords("The best time to plant the tree was 20 years ago. The second best time is now."), ['is', 'to'])
//Test.assertSimilar(findShortestWords("Your time is limited, so don’t waste it living someone else’s life."), ['is', 'it', 'so'])
//Test.assertSimilar(findShortestWords("You can never cross the ocean until you have the courage to lose sight of the shore."), ['of', 'to'])
//Test.assertSimilar(findShortestWords("There is only one way to avoid criticism: do nothing, say nothing, and be nothing."), ['be', 'do', 'is', 'to' ])
//Test.assertSimilar(findShortestWords("The only person you are destined to become is the person you decide to be."), ['be', 'is', 'to', 'to'])
//Test.assertSimilar(findShortestWords("What lies behind us and what lies before us are tiny matters compared to what lies within us."), ['to', 'us', 'us', 'us'])
//Test.assertSimilar(findShortestWords("If you are depressed you are living in the past. If you are anxious you are living in the future. If you are at peace you are living in the present."), ['at', 'if', 'if', 'if', 'in', 'in', 'in'])
//Test.assertSimilar(findShortestWords("Happiness depends upon ourselves."), ['upon'])
//Test.assertSimilar(findShortestWords("Chase two rabbits, catch none."), ['two'])
//Test.assertSimilar(findShortestWords("Only the truth of who you are, if realized, will set you free."), ['if', 'of'])
//Test.assertSimilar(findShortestWords("If you end up with a boring miserable life because you listened to your parents, your teacher, your priest, or some guy on television, then you deserve it."), ['a'])
//Test.assertSimilar(findShortestWords("To accomplish great things, we must not only act, but also dream; not only plan, but also believe."), ['to', 'we'])
//Test.assertSimilar(findShortestWords("A tiger doesn’t lose sleep over the opinion of sheep."), ['a'])
//Test.assertSimilar(findShortestWords("Kindness is a language that the deaf can hear and the blind can see."), ['a'])
//Test.assertSimilar(findShortestWords("Being realistic is the most common path to mediocrity."), ['is', 'to'])
//Test.assertSimilar(findShortestWords("Bravery means finding something more important than fear."), ['fear', 'more', 'than'])
//Test.assertSimilar(findShortestWords("Can you imagine what I would do if I could do all I can?"), ['i', 'i', 'i'])
//Test.assertSimilar(findShortestWords("Believe you can and you’re halfway there."), ['and', 'can', 'you'])
//Test.assertSimilar(findShortestWords("Remember that happiness is a way of travel, not a destination."), ['a', 'a'])
//Test.assertSimilar(findShortestWords("May the best day of your past be the worst day of your future."), ['be', 'of', 'of'])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Wiggled Strings

//tags: arrays,loops,strings

//url: https://edabit.com/challenge/jNanQ3zKkCdA9ANJw

//Description:
//Create a function that returns an array of the given string but offset by spaces. Here are some more precise instructions:
//Keep adding spaces on the left until you have the same number of spaces as the word length.
//Then keep removing spaces until you reach the original word.
//Below are some helpful examples!
//Examples
//wiggleString("hello") ➞ [
//  "hello",
//  " hello",
//  "  hello",
//  "   hello",
//  "    hello",
//  "     hello"
//  "    hello",
//  "   hello",
//  "  hello",
//  " hello",
//  "hello"
//]
//
//wiggleString("EDABIT") ➞ [
//  "EDABIT",
//  " EDABIT",
//  "  EDABIT",
//  "   EDABIT",
//  "    EDABIT",
//  "     EDABIT",
//  "      EDABIT",
//  "     EDABIT",
//  "    EDABIT",
//  "   EDABIT",
//  "  EDABIT",
//  " EDABIT",
//  "EDABIT"
//]
//
//wiggleString("Wiggle Time") ➞ [
//  "Wiggle Time",
//  " Wiggle Time",
//  "  Wiggle Time",
//  "   Wiggle Time",
//  "    Wiggle Time",
//  "     Wiggle Time",
//  "      Wiggle Time",
//  "       Wiggle Time",
//  "        Wiggle Time",
//  "         Wiggle Time",
//  "          Wiggle Time",
//  "           Wiggle Time",
//  "          Wiggle Time",
//  "         Wiggle Time",
//  "        Wiggle Time",
//  "       Wiggle Time",
//  "      Wiggle Time",
//  "     Wiggle Time",
//  "    Wiggle Time",
//  "   Wiggle Time",
//  "  Wiggle Time",
//  " Wiggle Time",
//  "Wiggle Time"
//]
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(wiggleString("hello"), [
//  "hello",
//  " hello",
//  "  hello",
//  "   hello",
//  "    hello",
//  "     hello",
//  "    hello",
//  "   hello",
//  "  hello",
//  " hello",
//  "hello"
//])
//​
//Test.assertSimilar(wiggleString("EDABIT"), [
//  "EDABIT",
//  " EDABIT",
//  "  EDABIT",
//  "   EDABIT",
//  "    EDABIT",
//  "     EDABIT",
//  "      EDABIT",
//  "     EDABIT",
//  "    EDABIT",
//  "   EDABIT",

