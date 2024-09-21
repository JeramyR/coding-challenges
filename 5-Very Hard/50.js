

//title: Verbos Regulares

//tags: arrays,formatting,logic

//url: https://edabit.com/challenge/QGvL9nFnn2PJwRgyp

//Description:
//The conjugations for all Spanish regular verbs can be built by using the three forms for verbs ending in -ar, -er and -ir.
//Create a function that takes a verb as string, and returns a string with the six person/number combinations (like in the examples). Watch out for verbs ending in -ir (check the notes). Try programming the construction rather than forming structures with arrays.
//Examples
//espVerb("pasar") ➞ "Yo paso, tú pasas, él pasa, nosotros pasamos, vosotros pasáis, ellos pasan."
//
//espVerb("unir") ➞ "Yo uno, tú unes, él une, nosotros unimos, vosotros unís, ellos unen."
//
//espVerb("correr") ➞ "Yo corro, tú corres, él corre, nosotros corremos, vosotros corréis, ellos corren."
//The smallest category of regular Spanish verbs is those that end in -ir. To conjugate them, remove the infinitive ending and then add one of the following verb endings:
//...	Singular	Plural
//1st person	yo -o	nosotros -imos
//2nd person	tú -es	vosotros -ís
//3rd person	él -e	ellos -en
//Notes
//This is for European Spanish, so the second person plural is vosotros pasais, not ustedes pasan
//We're only using regular Spanish verbs. So no yo conozco, tú conoces, etc.
//Pay attention to the accent marks! Feel free to copy them from the test page if you want.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(espVerb("pasar"), "Yo paso, tú pasas, él pasa, nosotros pasamos, vosotros pasáis, ellos pasan.")
//Test.assertEquals(espVerb("deber"), "Yo debo, tú debes, él debe, nosotros debemos, vosotros debéis, ellos deben.")
//Test.assertEquals(espVerb("abrir"), "Yo abro, tú abres, él abre, nosotros abrimos, vosotros abrís, ellos abren.")
//Test.assertEquals(espVerb("hablar"), "Yo hablo, tú hablas, él habla, nosotros hablamos, vosotros habláis, ellos hablan.")
//Test.assertEquals(espVerb("correr"), "Yo corro, tú corres, él corre, nosotros corremos, vosotros corréis, ellos corren.")
//Test.assertEquals(espVerb("vivir"), "Yo vivo, tú vives, él vive, nosotros vivimos, vosotros vivís, ellos viven.")
//Test.assertEquals(espVerb("quedar"), "Yo quedo, tú quedas, él queda, nosotros quedamos, vosotros quedáis, ellos quedan.")
//Test.assertEquals(espVerb("comprender"), "Yo comprendo, tú comprendes, él comprende, nosotros comprendemos, vosotros comprendéis, ellos comprenden.")
//Test.assertEquals(espVerb("unir"), "Yo uno, tú unes, él une, nosotros unimos, vosotros unís, ellos unen.")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Lemonade Stand

//tags: conditions,logic,loops,math,numbers

//url: https://edabit.com/challenge/x6mru9JBSJz9Kzhjm

//Description:
//At a lemonade stand, each lemonade costs $5. Customers are standing in a queue to buy from you, and order one at a time (in the order specified by bills).
//Each customer will only buy one lemonade and pay with either a $5, $10, or $20 bill. You must provide the correct change to each customer so that the net transaction is that the customer pays $5.
//Return true if and only if you can provide every customer with correct change.
//Examples
//lemonade([5, 5, 5, 10, 20]) ➞ true
//
//lemonade([5, 5, 10, 10, 20]) ➞ false
//
//lemonade([10, 10]) ➞ false
//
//lemonade([5, 5, 10]) ➞ true
//Notes
//You don't have any change in hand at first.
//bills is an integer array.
//bills[i] will be either 5, 10, or 20.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(lemonade([5, 5, 5, 10, 20]), true)
//Test.assertEquals(lemonade([5, 5, 10]), true)
//Test.assertEquals(lemonade([10, 10]), false)
//Test.assertEquals(lemonade([5, 5, 5, 20]), true)
//Test.assertEquals(lemonade([5, 5, 10, 10, 20]), false)
//Test.assertEquals(lemonade([5, 5, 5, 5, 10, 5, 10, 10, 10, 20]), true)
//Test.assertEquals(lemonade([5, 10, 5, 5, 5, 20, 5, 10, 5, 5, 10, 20]), true)
//Test.assertEquals(lemonade([5, 10, 5, 5, 5, 20, 5, 10, 20, 5, 10, 20, 10]), false)
//​
//// Author : Oscar_Lay

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Find Highest Occurrence

//tags: arrays,numbers,strings

//url: https://edabit.com/challenge/QfywtQoWim2FTKe7b

//Description:
//Create a function that takes an array, finds the most repeated element(s) within it and returns it/them in an array (order not important). The function should work for both integers and strings mixed together within the input array (e.g. [1, 1, "a"]).
//Examples
//highestOccurrence([2, 3, 2, 5, 6, 7, 2]) ➞ [2]
//
//highestOccurrence([1, 2, 3, 3, "a", "b", "b", "c"]) ➞ [3, "b"]
//
//highestOccurrence(["it", "keeps", "coding", "on", "or", "it", "gets", "the", "hose"]) ➞ ["it"]
//Notes
//If there is a tie for highest occurrence, return both (see second example above).
//Don't let integers become strings and/or string become integers in the result.
//NaN counts as a number.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(highestOccurrence(["a"]), ["a"],"strings should work with this function");
//Test.assertSimilar(highestOccurrence(["a","a"]), ["a"]);
//Test.assertSimilar(highestOccurrence(["a","a","b"]), ["a"]);
//Test.assertSimilar(highestOccurrence(["a","a","b"]), ["a"]);
//Test.assertSimilar(highestOccurrence(["a","a","b","b"].sort()), ["a","b"].sort(),"if there is a tie for highest occurrence, both should be returned in the array");
//Test.assertSimilar(highestOccurrence([1,"a","b","b"]), ["b"],"numbers should be returned as numbers");
//Test.assertSimilar(highestOccurrence([NaN,"a","b","b"]), ["b"],"NaN is a number too - and a relative");
//Test.assertSimilar(highestOccurrence([1,2,2,3,3,3,4,4,4,4]), [4]);
//Test.assertSimilar(highestOccurrence(["ab","ab","b"]), ["ab"]);
//Test.assertSimilar(highestOccurrence(["ab","ab","b","bb","b"].sort()), ["b","ab"].sort());
//Test.assertSimilar(highestOccurrence(["3a","2a","3a"]),["3a"],"this is a cruel one, make sure that parseInt doesn't affect strings that start with digits");
//Test.assertSimilar(highestOccurrence([3,3,3,4,4,4,4,2,3,6,7,6,7,6,7,6,"a","a","a","a"].sort()), [3,4,6,"a"].sort());
//Test.assertSimilar(highestOccurrence(["ab","ab","b","bb","b"].sort()), ["b","ab"].sort());
//Test.assertSimilar(highestOccurrence([0,1]).sort(), [0,1].sort(),"there is a zero problem in your solution, perhaps there is a statement taking zero as a falsey value");
//Test.assertSimilar(highestOccurrence(["hearts","diamonds","diamonds","spades","spades","clubs"]).sort(), ["diamonds","spades"].sort());
//Test.assertSimilar(highestOccurrence(["1","2","2"]), ["2"], "Should have got a string as an element of the array");
//Test.assertSimilar(highestOccurrence([2,2,"2","2",4,4]).sort(), [2,"2",4].sort());

