

//title: RNA Reverse Complement

//tags: algorithms,arrays,control_flow

//url: https://edabit.com/challenge/zdos9w38tw9QHePRe

//Description:
//Create a function that finds the reverse complement of a ribonucleic acid (RNA) strand. The RNA will be represented as a string containing only the characters "A", "C", "G" and "U". Since RNA can only (canonically) allow pairings of A/U and G/C, the complement of an RNA would be as follows:
//Original	Complement
//"AAA"	"UUU"
//"UUU"	"AAA"
//"GGG"	"CCC"
//"CCC"	"GGG"
//Your function should find the complement on the right AND also reverse the resulting string.
//Examples
//reverseComplement("GUGU") ➞ "ACAC"
//
//reverseComplement("UCUCG") ➞ "CGAGA"
//
//reverseComplement("CAGGU") ➞ "ACCUG"
//Notes
//You can assume all input seqeuences will be valid.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(reverseComplement("GAGGC"), "GCCUC")
//Test.assertEquals(reverseComplement("UCUCG"), "CGAGA")
//Test.assertEquals(reverseComplement("CAGGU"), "ACCUG")
//Test.assertEquals(reverseComplement("UAUUUUUCCA"), "UGGAAAAAUA")
//Test.assertEquals(reverseComplement("GUAGGCAACA"), "UGUUGCCUAC")
//Test.assertEquals(reverseComplement("UAGCUAAAUC"), "GAUUUAGCUA")
//Test.assertEquals(reverseComplement("AUGAGCGUAC"), "GUACGCUCAU")
//Test.assertEquals(reverseComplement("UUAUACCCGAGUCGGAUUUGUCACU"), "AGUGACAAAUCCGACUCGGGUAUAA")
//Test.assertEquals(reverseComplement("CUUGUGCGCUAUACAUCGAGUAGUUGCUAGAGUAUGUUACUCAAGAGCGC"), "GCGCUCUUGAGUAACAUACUCUAGCAACUACUCGAUGUAUAGCGCACAAG")
//Test.assertEquals(reverseComplement("UUAACUGGGGUGAACUGUCCUGAGCCUAUGGAUCUGCGCGCAGGGCUUCAAAUGGAGUUCGGAAUGACCAUCGAUUCUCGAUGUUUGGCACGAAGUCGCA"), "UGCGACUUCGUGCCAAACAUCGAGAAUCGAUGGUCAUUCCGAACUCCAUUUGAAGCCCUGCGCGCAGAUCCAUAGGCUCAGGACAGUUCACCCCAGUUAA")
//Test.assertEquals(reverseComplement("GCAGCUCCCCGUCCAUCGAUAAGAGACGUUCCUGCCACGGUUGCUCUACUUUAGAGGUACAACUCUCUUGUAUAAGCCUAGCGUCCUUCCGGAGGAGCCGGGUGCCGUCUCAUGGAUCCGCAUUGUCAGGUUGGCCACGACCAUUCAAAAUUUAACUUACACUUAUGAUGCGAAAUGCACACCAUAGUGCCACCGUGAUAAGUUUCCAGCCGAACUAUGCGAGUUUGCGAGAGGCAGGCUCAAUGCCAGCAGGGGCCAGUGAGGGCUCGAUCUAAAACCCGCUGUUGAUAUUCGUAAACGGUGGCCCGCCUGUUCAGUUACUCUCCAUAUCAUCACCUCAGGUUGAGCCAAAGUAGCCGCGCCGCAUCAAGCUGAGAGAAGUGCACGAGGUUUACACGUAGCCCUCUCUGAUCCGGUUGCCGUGCACUAGCGAUUUGUUUCACAUGAAUCGGUCGGGAGUACACACACAUAUAUUAUUAGAGUUGUUCAAUCCCGCAGAG"), "CUCUGCGGGAUUGAACAACUCUAAUAAUAUAUGUGUGUGUACUCCCGACCGAUUCAUGUGAAACAAAUCGCUAGUGCACGGCAACCGGAUCAGAGAGGGCUACGUGUAAACCUCGUGCACUUCUCUCAGCUUGAUGCGGCGCGGCUACUUUGGCUCAACCUGAGGUGAUGAUAUGGAGAGUAACUGAACAGGCGGGCCACCGUUUACGAAUAUCAACAGCGGGUUUUAGAUCGAGCCCUCACUGGCCCCUGCUGGCAUUGAGCCUGCCUCUCGCAAACUCGCAUAGUUCGGCUGGAAACUUAUCACGGUGGCACUAUGGUGUGCAUUUCGCAUCAUAAGUGUAAGUUAAAUUUUGAAUGGUCGUGGCCAACCUGACAAUGCGGAUCCAUGAGACGGCACCCGGCUCCUCCGGAAGGACGCUAGGCUUAUACAAGAGAGUUGUACCUCUAAAGUAGAGCAACCGUGGCAGGAACGUCUCUUAUCGAUGGACGGGGAGCUGC")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Burglary Series (09): Filter Values

//tags: arrays,loops,objects

//url: https://edabit.com/challenge/Cve45maGdj5XtQXgo

//Description:
//The insurance guy calls, the policy you chose doesn't cover values below 5000€, it wouldn't dignify your status you said at the time. Given an object with a list of the stolen items, return a copy of that list without the values below 5000.
//Examples
//{ tv: 4999, guitar:5000, fork: 5001 } ➞ { guitar:5000, fork: 5001 }
//
//{ tv: 4999 } ➞ {}
//
//{ guitar: 5000 } ➞ { guitar: 5000 }
//
//{} ➞ {}
//Notes
//N / A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//const random = Math.random() * 10000, random2 = Test.randomNumber() * 100
//const obj = {piano: 4999, skate: 5000, stereo: random, "rubber duck": random2}
//let obj2 = Object.entries(obj).filter(item => item[1] >= 5000)
//obj2 = Object.fromEntries(obj2);
//const check = Object.is(filterValues(obj), obj)
//​
//Test.assertEquals(check, false)
//Test.assertSimilar(filterValues(obj), obj2)
//Test.assertSimilar(filterValues({}), {})
//Test.assertSimilar(filterValues({piano: 300}), {})
//Test.assertSimilar(filterValues({tv: 4999, guitar:5000, fork: 5001 }), {guitar:5000, fork: 5001 })

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Just Find the Vertex

//tags: algebra,algorithms,arrays,math,strings

//url: https://edabit.com/challenge/SK7uPTFFTgCGphRZ7

//Description:
//Today Juan learned to graph quadratic equations, so he chose to speed up the process and avoid having to write a lot of steps in his notebook to find the vertex. Just help him locate the vertex.
//Ok, I am going to give you some advantages. The first is that you will not have to perform so many steps. The equations will have an easy structure to avoid much complexity.
//Here I will leave you a shorter explanation of how we can find the vertex.
//We have the following equation:
//-5x ^ 2 + 50x -120
//Now we apply the formula to locate the vertex:
//-b / (2 * a)
//We divide our second term by 2 multiplied by the first term. Remember to use the negative sign in b. It would look like this:
//-50 / (2 * -5) = 5
//... The third term will be insufficient in the challenge, but I wanted to add it to see if it complicates you.
//... Remember to return the result rounded to zero decimals.
//Examples
//findVertex("-5x + 50x -120") ➞ 5
//
//findVertex("-6x + 36x -72") ➞ 3
//
//findVertex("7x +14x +28") ➞ -1
//Notes
//List comprehension and unpacking is useful in this challenge :)

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(findVertex("-5x + 50x -120"), 5)
//Test.assertEquals(findVertex("-6x + 36x -72"), 3)
//Test.assertEquals(findVertex("7x +14x +28"), -1)
//Test.assertEquals(findVertex("4x -20x +12"), 2)
//Test.assertEquals(findVertex("2x -18x -20"), 4)
//Test.assertEquals(findVertex("9x +81x -27"), -5)

