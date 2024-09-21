

//title: Fauna in Chitwan National Park

//tags: language_fundamentals,logic,regex

//url: https://edabit.com/challenge/aRtf5uRhgqTapqsuT

//Description:
//Create a function that takes a string containing both the name and number of animals and plants that may or may not be found in Chitwan National Park. The function should return an array of tuples where the first element in the tuple is the animal name and the second element in the tuple is a number of that particular animal that is found in Chitwan National Park.
//Animals Present in Chitwan National Park
//animals = ["muggercrocodile", "one-hornedrhino", "python", "moth", "monitorlizard", "bengaltiger"]
//Examples
//faunaNumber("There are 24 one-hornedrhino, 50 python and 20000 mango.") ➞ [{"one-hornedrhino": 24}, {"python": 50}]
//// Mango not present in animal array.
//
//faunaNumber("There are 244 bengaltiger, 200 monitorlizard and 5000 apples.") ➞ [{"bengaltiger": 244}, {"monitorlizard": 200}]
//// Apples not present in animal array.
//Notes
//Input contains name and number of both animals and plants.
//If there is no match, return an empty array.

//code area
///////////////////////////////////////////////////////////////////////////
const faunaNumber = str => {
    let animals = ["muggercrocodile", "one-hornedrhino", "python", "moth", "monitorlizard", "bengaltiger"]
    let strArr = str.split(' ')
    let store = []

    for (let i = 0; i < animals.length; i++) {
        let reg = new RegExp()
        if (reg.test(str)) {

        }
    }

    console.log(str.split(' '))
}


//////////////////////////////////////////////////////////////////////////

//tests:



// Test.assertSimilar(faunaNumber("There are 24 one-hornedrhino, 50 python and 20000 bees."), [{ 'one-hornedrhino': 24 }, { 'python': 50 }])
//Test.assertSimilar(faunaNumber("There are 244 bengaltiger, 200 monitorlizard and 5000 apples."), [{'bengaltiger': 244}, {'monitorlizard': 200}])
//Test.assertSimilar(faunaNumber("There are 2444 saltrees, 2000 cobra and 5000 mangotrees."), [])
//Test.assertSimilar(faunaNumber("There are 180 muggercrocodile, 20 krait and 500 taipan."), [{'muggercrocodile': 180}])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Standard Competition Ranking

//tags: data_structures,objects

//url: https://edabit.com/challenge/g2QxB5HCE9hN3PS75

//Description:
//Standard competition ranking (also known as "1224" ranking) assigns the same rank to matching values. Rank numbers are increased each time, so ranks are sometimes skipped. If we have 5 scores (the highest score having a rank of 1):
//No matching values:
//Scores = [99, 98, 97, 96, 95]
//Rank = 1,  2,  3,  4,  5
//With matching values:
//Scores = [99, 98, 98, 96, 95]
//Rank = 1,  2,  2,  4,  5
//
//// Second and third scores are equal, so rank "3" is skipped.
//Given an object containing the names and scores of 5 competitors, and a competitor name, return the rank of that competitor after applying competition ranking.
//Examples
//competition_rank({
//  George: 96,
//  Emily: 95,
//  Susan: 93,
//  Jane: 89,
//  Brett: 82
//  }, "Jane") ➞ 4
//
//competition_rank({
//  Kate: 92,
//  Carol: 92,
//  Jess: 87,
//  Bruce: 87,
//  Scott: 84
//  }, "Bruce") ➞ 3
//Notes
//The highest score has a rank value of 1.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(competitionRank({Aria: 90, Brooke: 90, Olivia: 90, Eve: 74, Ellie: 87}, "Ellie"), 4)
//Test.assertEquals(competitionRank({Ryan: 97, Thomas: 85, Kai: 95, Aiden: 87, Logan: 90}, "Logan"), 3)
//Test.assertEquals(competitionRank({Lilly: 91, Harris: 87, Archie: 93, Lexi: 100, Ava: 88}, "Lilly"), 3)
//Test.assertEquals(competitionRank({Jayden: 90, Josh: 90, Rebecca: 96, Jack: 89, Max: 96}, "Rebecca"), 1)
//Test.assertEquals(competitionRank({Ben: 78, Quinn: 84, Lena: 84, Isla: 92, Kayla: 72}, "Ben"), 4)
//Test.assertEquals(competitionRank({Lucy: 81, Ella: 90, Summer: 91, Harper: 81, Sadie: 85}, "Ella"), 2)
//Test.assertEquals(competitionRank({Cole: 96, Carson: 92, Gabriel: 91, Hollie: 97, Penelope: 85}, "Hollie"), 1)
//Test.assertEquals(competitionRank({Michael: 89, Noah: 98, Reuben: 88, Sam: 91, Mia: 91}, "Mia"), 2)
//Test.assertEquals(competitionRank({James: 93, Maria: 91, Lewis: 95, Joseph: 96, Imogen: 90}, "Lewis"), 2)
//Test.assertEquals(competitionRank({Jessica: 90, Emily: 99, Hope: 91, Charlie: 96, Lucas: 87}, "Hope"), 3)
//Test.assertEquals(competitionRank({Sophie: 86, Piper: 98, Elliot: 100, Erica: 90, Freya: 100}, "Freya"), 1)
//Test.assertEquals(competitionRank({Grace: 93, Henry: 90, Florence: 98, Millie: 89, David: 99}, "Henry"), 4)
//Test.assertEquals(competitionRank({Alfie: 90, Elijah: 90, Cara: 85, Isaac: 96, Bella: 92}, "Elijah"), 3)
//Test.assertEquals(competitionRank({Clara: 85, Matilda: 86, Amelia: 98, Oliver: 95, Adam: 94}, "Clara"), 5)
//Test.assertEquals(competitionRank({Nina: 81, Tommy: 79, Tyler: 84, Leo: 79, Hallie: 79}, "Nina"), 2)
//Test.assertEquals(competitionRank({Violet: 99, Finn: 100, Eden: 99, Frankie: 98, Rory: 98}, "Frankie"), 4)
//Test.assertEquals(competitionRank({Robbie: 70, Julia: 76, Owen: 70, Phoebe: 92, Jacob: 79}, "Owen"), 4)
//Test.assertEquals(competitionRank({Andrew: 95, Louis: 95, Riley: 95, Amy: 95, Charlotte: 95}, "Charlotte"), 1)
//Test.assertEquals(competitionRank({Harry: 81, Elsie: 81, Grayson: 84, John: 84, Alex: 81}, "Elsie"), 3)
//Test.assertEquals(competitionRank({Innes: 76, Lola: 85, Anna: 92, Cooper: 93, Daniel: 93}, "Cooper"), 1)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Guitar Tuner

//tags: algorithms,arrays,numbers,validation

//url: https://edabit.com/challenge/P2kYTu2wxAyMmFhEq

//Description:
//Create a function that takes guitar strings as an array of frequencies, starting at the first string (High E) and ending in the sixth string (Low E).
//The function must return the display of a tuner for each string, in the same order, as an array.
//You can find the frequencies of the strings on the Wikipedia page (check the Resources tab).
//The guitar strings are played 1st to 6th, High E to Low E.
//If the guitar string matches or is less than 1 percent off, return "OK" for that guitar string.
//If it's too low, return ">•" for 1 or 2 percent off (the arrow means, tune up).
//Return ">>•" if it's way off. For more than 3 percent.
//If it's too high, return "•<" for 1 or 2 percent, and "•<<" for more, (tune down).
//Check the rounded percentages.
//If 0 is given, the guitar string isn't played, return " - ".
//Examples
//tune([0, 246.94, 0, 0, 0, 80]) ➞ [" - ", "OK", " - ", " - ", " - ", ">>•"]
//
//tune([329, 246, 195, 146, 111, 82]) ➞ ["OK", "OK", ">•", ">•", "•<", "OK" ]
//
//tune([329.63, 246.94, 196, 146.83, 110, 82.41]) ➞ ["OK", "OK", "OK", "OK", "OK", "OK"]
//Notes
//Items in the array will always be numbers.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(tune([329.63,246.94,196,146.83,110,82.41]), ['OK', 'OK', 'OK', 'OK', 'OK', 'OK' ])
//Test.assertSimilar(tune([0,0,190,0,110,0]), [' - ', ' - ', '>>•', ' - ', 'OK', ' - ' ])
//Test.assertSimilar(tune([331,248,195,147,110,84]), ['OK', 'OK', '>•', 'OK', 'OK', '•<' ])
//Test.assertSimilar(tune([0,246.94,0,0,0,80]), [' - ', 'OK', ' - ', ' - ', ' - ', '>>•' ])
//Test.assertSimilar(tune([329,246,195,146,111,82]), ['OK', 'OK', '>•', '>•', '•<', 'OK' ])

