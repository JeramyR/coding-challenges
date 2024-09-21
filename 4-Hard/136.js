

//title: Dakti 🌊🌴

//tags: arrays,regex,sorting,strings

//url: https://edabit.com/challenge/vuSPSnFC32qEbQBdv

//Description:
//Juan loves the Dakti song and wants to memorize the chorus of the song. His friend sent him the chorus in phrases, but the phrases are somewhat strange; they do not have an order and they have numbers. His friend helps Juan organize the chorus of the song.
//Use RegEx, natural sorting, sorting, or lambda functions; your imagination has no limits.
//First, organize the words based on the numbers they have, then delete the numbers once they are organized.
//Three steps:
//"worl2d hell1o" ➞ " hell1o worl2d" ➞ "hello world "
//
//"i2s th1s a3 t4est" ➞ "th1is i2s a3 t4est" ➞ "this is a test"
//
//"yo2u cr3azy a1re ? " ➞  "a1re yo2u cr3azy" ➞ "are you crazy"
//Here are some examples:
//Examples
//dakiti("en5tere y2a bab1y y3o 4me s6e not7a cuand8o 9me-ves") ➞ "baby ya yo me entere se nota cuando me-ves"
//
//dakiti("quie3res bebe4r dime1 e5s qu6e qu2e tu7 er8es m9i-bebe") ➞ "ahi donde no has llegado sabes que yo te-llevare"
//
//dakiti("quie3res bebe4r dime1 e5s qu6e qu2e tu7 er8es m9i-bebe") ➞ "dime que quieres beber es que tu eres mi-bebe"
//Notes
//Trick, natural sort.
//Remember if you have suggestions to improve the challenge instructions, leave a comment or suggest an edit :)

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(dakiti('en5tere y2a bab1y y3o 4me s6e not7a cuand8o 9me-ves'), 'baby ya yo me entere se nota cuando me-ves')
//Test.assertEquals(dakiti('h4as don2de ah1i n3o ll5egado q7ue 8yo te9-llevare s6abes'),'ahi donde no has llegado sabes que yo te-llevare')
//Test.assertEquals(dakiti('quie3res bebe4r dime1 e5s qu6e qu2e tu7 er8es m9i-bebe'),'dime que quieres beber es que tu eres mi-bebe')
//Test.assertEquals(dakiti('y1 de2 nos3tros qu4ien v5a a6 h7ablar 8si 9no'),'y de nostros quien va a hablar si no')
//Test.assertEquals(dakiti('no1 n2os v4er de3jamos'),'no nos dejamos ver')
//​
//// Author: Juan esteban

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Daniel Likes Wendy

//tags: algorithms,numbers,strings,validation

//url: https://edabit.com/challenge/nbBxCfxPNy4ovFoqQ

//Description:
//Your job is to figure out why Daniel likes Wendy, and some other girls. If you look at the Tests tab you'll notice that Daniel doesn't like many girls.
//Create a function that returns whether he likes her true, or not false.
//Examples
//danielLikes("Imani") ➞ false
//
//danielLikes("Margo") ➞ true
//
//danielLikes("Sandra") ➞ false
//Notes
//Daniel likes his own name.
//If you figure it out, prepare to say aha!
//You get 500 girl names, enough to try different approaches.
//Looking at the resources tab will give you a big hint.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//[["Katelyn", false], 
//["Maia", false], 
//["Celine", true], 
//["Cameron", false], 
//["Renata", false], 
//["Jayleen", false], 
//["Charli", true], 
//["Emmalyn", false], 
//["Holly", true], 
//["Azalea", true], 
//["Leona", false], 
//["Alejandra", false], 
//["Bristol", false], 
//["Collins", false], 
//["Imani", false], 
//["Meadow", false], 
//["Alexia", true], 
//["Edith", false], 
//["Kaydence", false], 
//["Leslie", false], 
//["Lilith", false], 
//["Kora", false], 
//["Aisha", false], 
//["Meredith", false], 
//["Danna", false], 

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: String Expansion

//tags: interview,language_fundamentals,logic,regex,strings

//url: https://edabit.com/challenge/4NKNkPZtN39cqCQMk

//Description:
//Create a function which takes a string txt and expands it as per following rules:
//The numeric values represent the occurrence of each letter preceding that numeric value.
//stringExpansion("3M2u5b2a1s1h2i1r") ➞ "MMMuubbbbbaashiir"
//The first occurrence of a numeric value should be the number of times each character behind it is repeated, until the next numeric value appears.
//stringExpansion("3Mat")➞ "MMMaaattt"      // correct
//
//stringExpansion("3Mat") ➞ "MMMat"          // wrong
//stringExpansion("3Mat") ➞ "MatMatMat"      // wrong
//If there are consecutive numeric characters, ignore them all except last one.
//stringExpansion("3M123u42b12a") ➞ "MMMuuubbaa"
//If there are two consecutive alphabetic characters then the string will remain unchanged.
//stringExpansion("airforce") ➞ "airforce"
//Empty strings should return an empty string.
//stringExpansion("") ➞ ""
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(stringExpansion("3M2u5b2a1s1h2i1r"),"MMMuubbbbbaashiir")
//Test.assertEquals(stringExpansion("3Mat"),"MMMaaattt")
//Test.assertEquals(stringExpansion("3M123u42b12a"),"MMMuuubbaa")
//Test.assertEquals(stringExpansion("3n6s7f3n"),"nnnssssssfffffffnnn")
//Test.assertEquals(stringExpansion("0d4n8d2b"),"nnnnddddddddbb")
//Test.assertEquals(stringExpansion("0c3b1n7m"),"bbbnmmmmmmm")
//Test.assertEquals(stringExpansion("7m3j4ik2a"),"mmmmmmmjjjiiiikkkkaa")
//Test.assertEquals(stringExpansion("3A5m3B3Y"),"AAAmmmmmBBBYYY")
//Test.assertEquals(stringExpansion("5M0L8P1"),"MMMMMPPPPPPPP")
//Test.assertEquals(stringExpansion("2B"),"BB")
//Test.assertEquals(stringExpansion("7M1n3K"),"MMMMMMMnKKK")
//Test.assertEquals(stringExpansion("A4g1b4d"),"Aggggbdddd")
//Test.assertEquals(stringExpansion("111111"),"")
//Test.assertEquals(stringExpansion("4d324n2"),"ddddnnnn")
//Test.assertEquals(stringExpansion("5919nf3u"),"nnnnnnnnnfffffffffuuu")
//Test.assertEquals(stringExpansion("2n1k523n4i"),"nnknnniiii")
//Test.assertEquals(stringExpansion("6o23M32d"),"ooooooMMMdd")
//Test.assertEquals(stringExpansion("1B44n3r"),"Bnnnnrrr")
//Test.assertEquals(stringExpansion("M21d1r32"),"Mdr")
//Test.assertEquals(stringExpansion("23M31r2r2"),"MMMrrr")
//Test.assertEquals(stringExpansion("8494mM25K2A"),"mmmmMMMMKKKKKAA")
//Test.assertEquals(stringExpansion("4A46D6B3C"),"AAAADDDDDDBBBBBBCCC")
//Test.assertEquals(stringExpansion("23D42B3A"),"DDDBBAAA")
//Test.assertEquals(stringExpansion("143D36C1A"),"DDDCCCCCCA")
//Test.assertEquals(stringExpansion("asdf"),"asdf")

