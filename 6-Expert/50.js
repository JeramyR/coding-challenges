

//title: Unravel all the Possibilities

//tags: logic,regex,strings

//url: https://edabit.com/challenge/enypHuKWgTmHWR2wy

//Description:
//Write a function that takes in a string and returns all possible combinations. Return the final result in alphabetical order.
//Examples
//unravel("a[b|c]") ➞ ["ab", "ac"]
//
//unravel("a[b|c]de[f|g]") ➞ ["abdef", "acdef", "abdeg", "acdeg"]
//
//unravel("a[b]c[d]") ➞ ["abcd"]
//
//unravel("a[b|c|d|e]f") ➞ ["abf", "acf", "adf", "aef"]
//
//unravel("apple [pear|grape]") ➞ ["apple grape", "apple pear"]
//Notes
//Think of each element in every block (e.g. [a|b|c]) as a fork in the road.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(unravel("abc"), ["abc"])
//Test.assertSimilar(unravel("a[b|c]"), ["ab", "ac"])
//Test.assertSimilar(unravel("a[b|c|d]e"), ["abe", "ace", "ade"])
//Test.assertSimilar(unravel("a[b|cd]ef"), ["abef", "acdef"])
//Test.assertSimilar(unravel("a[b|c]def[g]"), ["abdefg", "acdefg"])
//​
//Test.assertSimilar(unravel("a[b|c]de[f|g]"), ["abdef", "abdeg", "acdef", "acdeg"])
//Test.assertSimilar(unravel("a[b]c[d]"), ["abcd"])
//Test.assertSimilar(unravel("[a][b][c][d]"), ["abcd"])
//Test.assertSimilar(unravel("[a][b][c]d[e]"), ["abcde"])
//Test.assertSimilar(unravel("[a][b][c]d[e|f|g]"), ["abcde", "abcdf", "abcdg"])
//Test.assertSimilar(unravel("[a|b][c|d][e|f]"), ["ace", "acf", "ade", "adf", "bce", "bcf", "bde", "bdf"])
//Test.assertSimilar(unravel("[a][b|c|d][e][f|g]"), ["abef", "abeg", "acef", "aceg", "adef", "adeg"])
//​
//Test.assertSimilar(unravel("apple [pear|grape]"), ["apple grape", "apple pear"])
//Test.assertSimilar(unravel("apple [pear|grape] [persimmon|mango] [cherry|apricot]"), 
//["apple grape mango apricot",
// "apple grape mango cherry",
// "apple grape persimmon apricot",
// "apple grape persimmon cherry",
// "apple pear mango apricot",
// "apple pear mango cherry",
// "apple pear persimmon apricot",
// "apple pear persimmon cherry"])
//Test.assertSimilar(unravel("Let's do [Friday|Wednesday|Saturday] at [4|5|7] for the [concert|movies]?"), 

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Asteroid Collision

//tags: arrays,games,loops,recursion

//url: https://edabit.com/challenge/BrwmvsMdZQxAMdoMX

//Description:
//You are given an array asteroids of integers representing asteroids in a row.
//For each asteroid, the absolute value represents its size, and the sign represents its direction (positive meaning right, negative meaning left). Each asteroid moves at the same speed.
//Find out the state of the asteroids after all collisions. If two asteroids meet, the smaller one will explode. If both are the same size, both will explode. Two asteroids moving in the same direction will never meet.
//Examples
//asteroidCollision([-2, -1, 1, 2]) ➞ [-2, -1, 1, 2]
//
//asteroidCollision([-2, 1, 1, -2]) ➞ [-2, -2]
//
//asteroidCollision([1, 1, -2, -2]) ➞ [-2, -2]
//
//asteroidCollision([10, 2, -5]) ➞ [10]
//
//asteroidCollision([8, -8]) ➞ []
//Notes
//BONUS: Use only one loop (either for or while).

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(asteroidCollision([5, 10, -5]), [5, 10])
//Test.assertSimilar(asteroidCollision([8, -8]), [])
//Test.assertSimilar(asteroidCollision([10, 2, -5]), [10])
//Test.assertSimilar(asteroidCollision([-2, -1, 1, 2]), [-2, -1, 1, 2])
//Test.assertSimilar(asteroidCollision([-2, 1, 1, -2]), [-2, -2])
//Test.assertSimilar(asteroidCollision([1,1,-2,-2]), [-2,-2])
//Test.assertSimilar(asteroidCollision([-10, 66, -56, -9, -32, -41, 81, 10, 31, 65, -84, -73, -63, 94, -100, -56, -88, 41, 44, -45, -61, 12, 27, 85, -69, -26, -74, -18, -60, 90]), [-10, -84, -73, -63, -100, -56, -88, -45, -61, 12, 27, 85, 90])
//Test.assertSimilar(asteroidCollision([50, -36, 4, 35, 43, 72, -46, 68, 65, 94, -11, -78, -59, 15, -9, 1, 96, 42, 34, 60, -42, 5, 92, -55, 26, 39, -80, -18, -87, -51, 91, -21, -7, 80, -12, -61, -32, 6, -52, -67, 46, 24, -70, -64, -94]),[50, 4, 35, 43, 72, 68, 65, 94, 15, 1, 96])
//Test.assertSimilar(asteroidCollision([-24, 55, -68, 69, -35, 33, -75, -7, 9, -56, 71, 22, 59, -96, 1, -37, 61, -98, 30, -21, 57, -73, -3, -32, -93, -41, 63, 26, 41, 56, -60, 18, 67, 80, 100, -23, -53, 74, 49, 86, 48, 83, 40, 77, -57, 91, -8, 7, -33, 15, -92, 89, -48, 25, 66]),[-24, -68, -75, -7, -56, -96, -37, -98, -73, -3, -32, -93, -41, 63, 18, 67, 80, 100, 89, 25, 66])
//Test.assertSimilar(asteroidCollision([-25, -97, 57, -72, -85, 89, 81, -88, 24, -5, 75, 65, 12, 43, 25, 67, 34, 98, 10, 52, -42, -55, -87, -26, 31, -59, -47, 59, 72, -70, 30, -58, -62, 15, -71, 61, 69, -79, -34, 95, -28, -12, -40, -29, -100, 38, 36, -6, 94, 96, -76, -35, 18, 41, -80]),[-25, -97, -72, -85, -100, 38, 36, 94, 96])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Columnar Cipher

//tags: arrays,cryptography,loops,strings

//url: https://edabit.com/challenge/gLEuown2hKCkTYPhZ

//Description:
//The columnar cipher is a transposition cipher that works like this.
//Start with a secret message:
//msg = "Meet me by the lake at midnight. Bring shovel."
//Transform uppercase letters into lowercase and remove punctuation and spaces:
//msg = "meetmebythelakeatmidnightbringshovel"
//Then, pick a keyword made out of distinct letters:
//keyword = "python"
//Break up the message into chunks of the same length as the keyword, and write them in rows under the keyword. Then, number the columns based on the alphabetised order of the letters in the keyword:
//p	y	t	h	o	n
//m	e	e	t	m	e
//b	y	t	h	e	l
//a	k	e	a	t	m
//i	d	n	i	g	h
//t	b	r	i	n	g
//s	h	o	v	e	l
//4	6	5	1	3	2
//Read off the enciphered message (ciphertext) from the columns, in the order specified by the numbers:
//ciphertext = "thaiivelmhglmetgnembaitsetenroeykdbh"
//If the message length is not a multiple of the keyword length, fill in each blank space with "x". For example:
//msg = "Meet me at midnight."
//
//keyword = "python"
//p	y	t	h	o	n
//m	e	e	t	m	e
//a	t	m	i	d	n
//i	g	h	t	x	x
//Create a function that takes a string and a keyword. Return the ciphertext if the string is in plaintext (i.e. broken up into normal English words and punctuated), or the deciphered message if the string is in ciphertext. The resulting deciphered message will not have spaces.
//Examples
//cipher("Meet me by the lake at midnight. Bring shovel.", "python")
//➞ "thaiivelmhglmetgnembaitsetenroeykdbh"
//
//cipher("meeanbsleyamgioxebltirhxttkihnvxmhedtgex", "monty")
//➞ "meetmebythelakeatmidnightbringshovelxxxx"
//
//cipher("Mission Delta Kilo Sierra has been compromised. Kill Steve. Evacuate", "cake")
//➞ "ioliiabcrsiteuxmieksrsnpiksecesdaoraemmdlvatxsntleheooelevax"
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(cipher('Meet me by the lake at midnight. Bring shovel.','python'),'thaiivelmhglmetgnembaitsetenroeykdbh')
//Test.assertEquals(cipher('meeanbsleyamgioxebltirhxttkihnvxmhedtgex','monty'),'meetmebythelakeatmidnightbringshovelxxxx')
//Test.assertEquals(cipher('The body is in the cellar wall.','edabit'),'escwbieahiertyhaonlldtll')
//Test.assertEquals(cipher('Flight 1386 Gate 447 Contact November Bravo','lockjaw'),'ttnvrxi67texhaoobxggcnrxf34amvl84cbo1eteax')
//Test.assertEquals(cipher('ecvnbpxgpslizxeerionzryisrixmnoowga','quirk'),'emergencyprovisionslowbringpizzaxxx')
//Test.assertEquals(cipher('Mission Delta Kilo Sierra has been compromised. Kill Steve. Evacuate','cake'),'ioliiabcrsiteuxmieksrsnpiksecesdaoraemmdlvatxsntleheooelevax')
//Test.assertEquals(cipher('haiowaseatuipvpoetteecrbsdhrrneearpxesspaywln','hazel'),'thetreasureisincopperwavebaypasswordelephantx')

