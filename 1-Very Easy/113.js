

//title: X and Y Coordinates

//tags: arrays,numbers

//url: https://edabit.com/challenge/qYAhaD8fTbHWNe9oT

//Description:
//Create a function that converts two arrays of x- and y- coordinates into an array of (x, y) coordinates.
//Examples
//convertCartesian([1, 5, 3, 3, 4], [5, 8, 9, 1, 0])
//➞ [[1, 5], [5, 8], [3, 9], [3, 1], [4, 0]]
//
//convertCartesian([9, 8, 3], [1, 1, 1])
//➞ [[9, 1], [8, 1], [3, 1]]
//Notes
//x and y arrays will always be the same length.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(convertCartesian([1, 5, 3, 3, 4], [5, 8, 9, 1, 0]), [[1, 5], [5, 8], [3, 9], [3, 1], [4, 0]])
//Test.assertSimilar(convertCartesian([9, 8, 3], [1, 1, 1]), [[9, 1], [8, 1], [3, 1]])
//Test.assertSimilar(convertCartesian([2, 5, 1], [7, 8, 9]), [[2, 7], [5, 8], [1, 9]])
//Test.assertSimilar(convertCartesian([3, 2, 2], [6, 1, 7]), [[3, 6], [2, 1], [2, 7]])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Reverse and Capitalize

//tags: functional_programming,strings

//url: https://edabit.com/challenge/nBW6ubsQCurPvhpWc

//Description:
//Create a function that takes a string of lowercase characters and returns that string reversed and in upper case.
//Examples
//reverseCapitalize("abc") ➞ "CBA"
//
//reverseCapitalize("hellothere") ➞ "EREHTOLLEH"
//
//reverseCapitalize("input") ➞ "TUPNI"
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(reverseCapitalize("edabit"), "TIBADE")
//Test.assertEquals(reverseCapitalize("abc"), "CBA")
//Test.assertEquals(reverseCapitalize("hellothere") ,"EREHTOLLEH")
//Test.assertEquals(reverseCapitalize("input") , "TUPNI")
//Test.assertEquals(reverseCapitalize("indubitably") , "YLBATIBUDNI")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Little Dictionary

//tags: conditions,strings

//url: https://edabit.com/challenge/p5xNwq2v9ZX7vo3mb

//Description:
//Create a function that takes an initial word and extracts any words that start with the same letters as the initial word.
//Examples
//dictionary("bu", ["button", "breakfast", "border"]) ➞ ["button"]
//
//dictionary("tri", ["triplet", "tries", "trip", "piano", "tree"]) ➞ ["triplet", "tries", trip"]
//
//dictionary("beau", ["pastry", "delicious", "name", "boring"]) ➞ []
//Notes
//If none of the words match, return an empty array.
//Keep the filtered array in the same relative order as the original array of words.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(dictionary('bu', ['button', 'breakfast', 'border']), ['button'])
//Test.assertSimilar(dictionary('beau', ['pastry', 'delicious', 'name', 'boring']), [])
//Test.assertSimilar(dictionary('there', ['there', 'here', 'everywhere']), ['there'])
//Test.assertSimilar(dictionary('sno', ['snow', 'paper', 'ghost']), ['snow'])
//Test.assertSimilar(dictionary('ma', ['marriage', 'married', 'many', 'delight']), ['marriage', 'married', 'many'])
//Test.assertSimilar(dictionary('no', ['inferno', 'notion', 'nominate', 'note', 'fairy']), ['notion', 'nominate', 'note'])
//Test.assertSimilar(dictionary('cre', ['creating', 'creature', 'creed', 'increasing']), ['creating', 'creature', 'creed'])

