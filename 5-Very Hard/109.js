

//title: The GPS Itinerary: Around the World

//tags: classes,data_structures,geometry,math

//url: https://edabit.com/challenge/oxmSTZABggZt7A8td

//Description:
//In this challenge, use the haversine formula to calculate the distances between various cities and establish an itinerary for a series of cities to visit. You have to build an utility class GPS that supports a function itinerary.
//The utility class GPS
//The class GPS must have three static methods:
//.decimal() transforms a DMS coordinate into a decimal coordinate: as parameters, it accepts three integers which are the degrees, the minutes and the seconds and a capital letter to represent the cardinal direction.
//.radians() transforms a decimal coordinate into radians: as parameter, it accepts a decimal coordinate as a float number.
//.distance() calculates the shortest distance (in kilometers) between two given cities using the haversine formula and a constant radius of the Earth equal to 6371km, rounding the result down to the nearest integer: as parameters, it accepts two full DMS string coordinates.
//London: 51° 30' 30" N 0° 7' 32" W
//Sidney: 33° 52' 4" S 151° 12' 26" E
//
//GPS.decimal(51, 30, 30, "N") ➞ 51.50833333333333
//GPS.decimal(0, 7, 32, "W") ➞ -0.12555555555555556
//// London's decimal latitude and longitude.
//// West coordinates are negatives.
//
//GPS.decimal(33, 52, 4, "S") ➞ -33.867777777777775
//GPS.decimal(151, 12, 26, "E") ➞ 151.2072222222222
//// Sidney's decimal latitude and longitude.
//// South coordinates are negatives.
//
//GPS.radians(-0.12555555555555556) ➞ -0.002191357838615103
//// London's longitude in radians
//
//GPS.radians(151.2072222222222) ➞ 2.6390638805725146
//// Sidney's longitude in radians.
//
//GPS.distance('51° 30' 30" N 0° 7' 32" W', '33° 52' 4" S 151° 12' 26" E') ➞ 16993
//// Shortest distance between London and Sidney (in kilometers).
//The function itinerary
//Given a starting city start and an array of cities toVisit, implement a function that returns an array with two elements:
//A sub-array containing the cities (the first one will always be the start city) to visit, in the order given by the shortest distance from the last visited city;
//An integer being the total number of kilometers necessary to complete the travel.
//Let's suppose that @Matt decides to see Moscow, Sidney, Buenos Aires and Los Angeles. He starts his travel from Kitchener and the nearest city is Los Angeles (3,403 km). From Los Angeles, he goes to Moscow (9,769 km). From Moscow, the nearest city is Buenos Aires (13,475 km). From Buenos Aires, Matt ends his travel in Sidney (11,801 km). The result with the itinerary and the total kilometers is:
//[["Kitchener", "Los Angeles", "Moscow", "Buenos Aires", "Sidney"], 38448]
//Examples
//itinerary("Naples", ["New York", "Johannesburg", "Beijing", "Quito"]) ➞ [["Naples", "New York", "Quito", "Johannesburg", "Beijing"], 35001]
//
//itinerary("Tokyo", ["London", "Montevideo", "Jakarta", "Auckland"]) ➞ [["Tokyo", "Jakarta", "Auckland", "Montevideo", "London"], 34931]
//
//itinerary("Rio de Janeiro", ["Naples", "New York", "Sidney", "Kitchener"]) ➞ [["Rio de Janeiro", "New York", "Kitchener", "Naples", "Sidney"], 31897]
//Notes
//The coordinates of the cities are stored in an object literal cities in the Code tab, as well as the constant for the radius of the Earth (in this challenge, is 6371Km).
//The given data will be always valid, without exceptions to handle. The format for full DMS coordinates will be always like 140° 1' 59" N 99° 59' 1 E" (no leading zeros or negative values, values separated by a space, capital letters for the four cardinal directions).
//Do not round decimal coordinates or radians. Round distances down to the nearest integer.
//The decimal (and radians) values of W (West) and S (South) coordinates are negatives.
//Obviously, the distances are intented as the crow flies, hypotizing a flat surface.
//Look at the Resources tab for a series of useful links about all the arguments of this challenge.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//// DMS coordinate to decimal coordinate
//Test.assertEquals(GPS.decimal(51, 30, 30, "N"), 51.50833333333333);
//Test.assertEquals(GPS.decimal(58, 22, 19, "W"), -58.371944444444445);
//​
//// Decimal coordinate to radians
//Test.assertEquals(GPS.radians(51.50833333333333), 0.8989900088814126);
//Test.assertEquals(GPS.radians(-58.371944444444445), -1.018782621346768);
//​
//// Distance between two cities
//Test.assertEquals(GPS.distance(cities["London"], cities["New York"]), 5570);
//Test.assertEquals(GPS.distance(cities["Sidney"], cities["Los Angeles"]), 12073);
//Test.assertEquals(GPS.distance(cities["Rio de Janeiro"], cities["Beijing"]), 17322);
//Test.assertEquals(GPS.distance(cities["Moscow"], cities["Johannesburg"]), 9158);
//​
//// Travel itinerary
//Test.assertSimilar(itinerary("Naples", ["New York", "Johannesburg", "Beijing", "Quito"]),
//  [ [ 'Naples', 'New York', 'Quito', 'Johannesburg', 'Beijing' ], 35001 ]);
//​
//Test.assertSimilar(itinerary("Kitchener", ["Buenos Aires", "Sidney", "Los Angeles", "Moscow"]),
//  [ [ 'Kitchener', 'Los Angeles', 'Moscow', 'Buenos Aires', 'Sidney' ], 38448 ]);
//​
//Test.assertSimilar(itinerary("Tokyo", ["London", "Montevideo", "Jakarta", "Auckland"]),
//  [ [ 'Tokyo', 'Jakarta', 'Auckland', 'Montevideo', 'London' ], 34931 ]);
//​
//Test.assertSimilar(itinerary("Rio de Janeiro", ["Naples", "New York", "Sidney", "Kitchener"]),

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Josephus Permutation

//tags: loops,math,recursion

//url: https://edabit.com/challenge/j4jFjDQZCQtJ4nDSA

//Description:
//A group of n prisoners stand in a circle awaiting execution. Starting from an arbitrary position(0), the executioner kills every kth person until one person remains standing, who is then granted freedom (see examples).
//Create a function that takes 2 arguments — the number of people to be executed n, and the step size k, and returns the original position (index) of the person who survives.
//Examples
//whoGoesFree(9, 2) ➞ 2
//
//// Prisoners = [0, 1, 2, 3, 4, 5, 6, 7, 8]
//// Executed people replaced by - (a dash) for illustration purposes.
//// 1st round of execution = [0, -, 2, -, 4, -, 6, -, 8]  -> [0, 2, 4, 6, 8]
//// 2nd round = [-, 2, -, 6, -] -> [2, 6]  # 0 is killed in this round because it's beside 8 who was skipped over.
//// 3rd round = [2, -]
//
//whoGoesFree(9, 3) ➞ 0
//
//// [0, 1, 2, 3, 4, 5, 6, 7, 8]
//// [0, 1, -, 3, 4, -, 6, 7, -] -> [0, 1, 3, 4, 6, 7]
//// [0, 1, -, 4, 6, -] -> [0, 1, 4, 6]
//// [0, 1, -, 6] -> [0, 1, 6]
//// [0, -, 6] -> [0, 6]
//// [0, -] -> [0]
//Notes
//Refer to Resources tab for more info.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(whoGoesFree(9, 2), 2)
//Test.assertEquals(whoGoesFree(9, 3), 0)
//Test.assertEquals(whoGoesFree(7, 2), 6)
//Test.assertEquals(whoGoesFree(7, 3), 3)
//Test.assertEquals(whoGoesFree(15, 4), 12)
//Test.assertEquals(whoGoesFree(14, 3), 1)
//Test.assertEquals(whoGoesFree(53, 7), 21)
//Test.assertEquals(whoGoesFree(543, 21), 455)
//Test.assertEquals(whoGoesFree(673, 13), 303)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: The ECG Sequence

//tags: math,numbers

//url: https://edabit.com/challenge/9DjLa5TbT7X73hj5n

//Description:
//In the ECG Sequence (that always starts with the numbers 1 and 2), every number that succeeds is the smallest not already present in the sequence and that shares a factor (excluding 1) with its preceding number. Every number in the ECG Sequence (besides 1 and 2) has a different index from its natural index in a normal numeric sequence. See the example below to establish the ECG Sequence Index of number 3.
//// Find the smallest number that is not in sequence...
//// This number shares a factor with the preceding?
//
//SEQUENCE = [1, 2]
//
//3 = no factors shared with 2
//4 = shares factor 2 with number 2
//
//SEQUENCE = [1, 2, 4]
//
//3 = no factors shared with 4
//5 = no factors shared with 4
//6 = shares factor 2 with number 4
//
//SEQUENCE = [1, 2, 4, 6]
//
//3 = shares factor 3 with number 6
//
//SEQUENCE = [1, 2, 4, 6, 3]
//
//Number 3 is at index 4 in the ECG Sequence.
//Given an integer n implement a function that returns its ECG Sequence Index.
//Examples
//ecgSeqIndex(3) ➞ 4
//
//ecgSeqIndex(5) ➞ 9
//
//ecgSeqIndex(7) ➞ 13
//Notes
//ECG is the acronym for the electrocardiogram: if you try to graphically represent the trend of the sequence, a similar scheme appears.
//Curiosity: every odd prime p in the sequence is preceded by 2p and followed by 3p.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(ecgSequenceIndex(3), 4, "Example in Instructions")
//Test.assertEquals(ecgSequenceIndex(5), 9)
//Test.assertEquals(ecgSequenceIndex(7), 13)
//Test.assertEquals(ecgSequenceIndex(18), 11)
//Test.assertEquals(ecgSequenceIndex(33), 20)
//Test.assertEquals(ecgSequenceIndex(44), 40)
//Test.assertEquals(ecgSequenceIndex(69), 43)
//Test.assertEquals(ecgSequenceIndex(75), 68)
//Test.assertEquals(ecgSequenceIndex(101), 188)
//Test.assertEquals(ecgSequenceIndex(208), 199)
//Test.assertEquals(ecgSequenceIndex(300), 281)

