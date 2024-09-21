

//title: Valid JavaScript Comments

//tags: regex,strings,validation

//url: https://edabit.com/challenge/rQj7JcXSnG5sy33rr

//Description:
//In JavaScript, there are two types of comments:
//Single-line comments start with //
//Multi-line or inline comments start with /* and end with */
//The input will be a sequence of //, /* and */. Every /* must have a */ that immediately follows it. To add, there can be no single-line comments in between multi-line comments in between the /* and */.
//Create a function that returns true if comments are properly formatted, and false otherwise.
//Examples
//commentsCorrect("//////") ➞ true
//// 3 single-line comments: ["//", "//", "//"]
//
//commentsCorrect("/**//**////**/") ➞ true
//// 3 multi-line comments + 1 single-line comment:
//// ["/*", "*/", "/*", "*/", "//", "/*", "*/"]
//
//commentsCorrect("///*/**/") ➞ false
//// The first /* is missing a */
//
//commentsCorrect("/////") ➞ false
//// The 5th / is single, not a double //
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(commentsCorrect("//////"), true)
//Test.assertEquals(commentsCorrect("/**//**////**/"), true)
//Test.assertEquals(commentsCorrect("/**//**//**//**/"), true)
//Test.assertEquals(commentsCorrect("///**///"), true)
//Test.assertEquals(commentsCorrect("/**//////**//**////**/////"), true)
//Test.assertEquals(commentsCorrect("//"), true)
//Test.assertEquals(commentsCorrect("/**/"), true)
//Test.assertEquals(commentsCorrect("///*/**/"), false)
//Test.assertEquals(commentsCorrect("//*/**/"), false)
//Test.assertEquals(commentsCorrect("/////"), false)
//Test.assertEquals(commentsCorrect("///"), false)
//Test.assertEquals(commentsCorrect("/**///**/"), false)
//Test.assertEquals(commentsCorrect("/**/////**/"), false)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Larger than All Numbers to Their Right

//tags: arrays,loops

//url: https://edabit.com/challenge/LzmaSDaSTn7zSwe2d

//Description:
//Create a function that retrieves every number that is strictly larger than every number that follows it.
//Examples
//largerThanRight([3, 13, 11, 2, 1, 9, 5]) ➞ [13, 11, 9, 5]
//// 13 is larger than all numbers to its right, etc.
//
//largerThanRight([5, 5, 5, 5, 5, 5]) ➞ [5]
//// Must be strictly larger.
//// Always include the last number.
//
//largerThanRight([5, 9, 8, 7]) ➞ [9, 8, 7]
//Notes
//The last number in an array is trivially strictly larger than all numbers that follow it (no numbers follow it).

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(largerThanRight([3, 13, 11, 2, 1, 9, 5]), [13, 11, 9, 5])
//Test.assertSimilar(largerThanRight([9, 8, 7, 6]), [9, 8, 7, 6])
//Test.assertSimilar(largerThanRight([1, 2, 3, 4]), [4])
//Test.assertSimilar(largerThanRight([5, 9, 8, 7]), [9, 8, 7])
//Test.assertSimilar(largerThanRight([5, 5, 5, 5, 5]),[5])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Imgur URL Parser

//tags: formatting,objects,regex

//url: https://edabit.com/challenge/iEDvqagg62roh5q3K

//Description:
//Create a function that takes an imgur link (as a string) and extracts the unique id and type. Return an object containing the unique id, and a string indicating what type of link it is.
//The link could be pointing to:
//An album (e.g. http://imgur.com/a/cjh4E)
//A gallery (e.g. http://imgur.com/gallery/59npG)
//An image (e.g. http://imgur.com/OzZUNMM)
//An image (direct link) (e.g. http://i.imgur.com/altd8Ld.png)
//Examples
//imgurUrlParser("http://imgur.com/a/cjh4E") ➞ { id: "cjh4E", type: "album" }
//
//imgurUrlParser("http://imgur.com/gallery/59npG") ➞ { id: "59npG", type: "gallery" }
//
//imgurUrlParser("http://i.imgur.com/altd8Ld.png") ➞ { id: "altd8Ld", type: "image" }
//Notes
//There are a few cases where the link has some changes. Look at the additional tests in the Tests tab to know more.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//const results = {
//    album: { id: 'cjh4E', type: 'album' },
//    gallery: { id: '59npG', type: 'gallery' },
//    directImage: { id: 'altd8Ld', type: 'image' },
//    image: { id: 'OzZUNMM', type: 'image' }
//};
//​
//// Base tests
//Test.assertSimilar(
//    imgurUrlParser('http://imgur.com/a/cjh4E'),
//    results.album,
//    'Should work with an album'
//);
//Test.assertSimilar(
//    imgurUrlParser('http://imgur.com/gallery/59npG'),
//    results.gallery,
//    'Should work with a gallery'
//);
//Test.assertSimilar(
//    imgurUrlParser('http://imgur.com/OzZUNMM'),
//    results.image,
//    'Should work with a single image'
//);
//Test.assertSimilar(
//    imgurUrlParser('http://i.imgur.com/altd8Ld.png'),

