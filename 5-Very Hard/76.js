

//title: Number of Paths Between Points

//tags: algorithms,recursion

//url: https://edabit.com/challenge/W4GojsfCjbeuhxPrQ

//Description:
//This challenge deals with finding and counting the number of paths between points on a rectilinear grid. A starting point (x, y) with non-negative integer coordinates is provided. You are only allowed to move horizontally and vertically along the grid. Hence, from (x, y) you may move to (x+1, y), (x-1, y), (x, y+1), or (x, y-1). Your goal is to return to the origin (0, 0) in such a way that you never increase the distance to the origin. The distance is counted as the minimum number of total vertical and horizontal steps to reach the origin.
//Create a function that reads a starting location, (x, y) and returns the total number of different paths back to the origin. Two paths are different if there is at least one step on the path that is different even if most of the steps are the same.
//Examples
//paths(0, 0) ➞ 1
//
//paths(2, 1) ➞ 3
//
//paths(2, 2) ➞ 6
//Notes
//This function can be easily written using recursion. It is STRONGLY recommended (though not necessary) that you use some form of recursion in your solution.
//The return type for this function is a positive integer.
//x and y will always be integers greater than or equal to 0.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(paths(0, 0), 1)
//Test.assertEquals(paths(2, 1), 3)
//Test.assertEquals(paths(2, 2), 6)
//Test.assertEquals(paths(6, 9), 5005)
//Test.assertEquals(paths(0, 8), 1)
//Test.assertEquals(paths(7, 0), 1)
//Test.assertEquals(paths(1, 99), 100)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Insert Element in Singly Linked List in a Given Index

//tags: algorithms,arrays,data_structures

//url: https://edabit.com/challenge/iJcWndE5LbYXNQFD8

//Description:
//Create a method in a LinkedList class called insert that adds an element to the given index of the linked list and returns the added element. The LinkedList class is created for you. The first parameter is index and the second is element to be added.
//Examples
//Suppose data = [1, 2, 3]    // Just for explanation.
//
//insert(10, 10) ➞ "Element cannot be added"
//// index = 10 and element = 10
//// Therefore, we cannot insert 10 because index > size of
//// data and return msg.
//
//insert(-1, 10) ➞ "Element cannot be added"
//// index = -1 and element = 10
//// Therefore, we cannot insert 10 because index is negative
//// (less than zero) return msg.
//
//insert(0, 0) ➞ 0
//// index = 0 and element = 0
//// Therefore, we insert 0 at index 0 (beginning of the linked
//// list) and return element.
//Notes
//Element is an integer.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//const c = new LinkedList()
//c.push(0) , c.push(1) ,c.push(2) , c.push(4)
//Test.assertEquals(c.insert(-1,2),"Element cannot be added")
//Test.assertEquals(c.insert(5,5),"Element cannot be added")
//Test.assertEquals(c.check(),"0124")
//Test.assertEquals(c.insert(3, 3),3)
//Test.assertEquals(c.check(),"01234")
//Test.assertEquals(c.insert(5, 5),5)
//Test.assertEquals(c.check(),"012345")
//Test.assertEquals(c.insert(0, -1),-1)
//Test.assertEquals(c.check(),"-1012345")
//​
//const d = new LinkedList();
//Test.assertEquals(d.insert(0, 0),0)
//Test.assertEquals(d.check(),"0")
//Test.assertEquals(d.insert(1, 1),1)
//Test.assertEquals(d.check(),"01")
//Test.assertEquals(d.insert(2, 2),2)
//Test.assertEquals(d.check(),"012")
//Test.assertEquals(d.insert(3, 3),3)
//Test.assertEquals(d.check(),"0123")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Stranger Danger

//tags: conditions,language_fundamentals,regex,strings

//url: https://edabit.com/challenge/hRSynrrriRuHZMrRq

//Description:
//For this challenge, the input will be a (long) string.
//A word encountered for the first time is a stranger. A word encountered thrice becomes an acquaintance. A word encountered 5 times becomes a friend.
//Create a function that takes the string and returns an array of two arrays. The first is an array of acquaintances in the order they became an acquaintance (see example). The second is an array of friends in the order they became a friend. Words in the friend array should no longer be in the acquaintance array.
//Examples
//noStrangers("See Spot run. See Spot jump. Spot likes jumping. See Spot fly.")
//➞ [["spot", "see"], []]
//// "see" was encountered first but "spot" became an acquaintance earlier.
//Notes
//All words should be in lowercase.
//Punctuation should be stripped except for apostrophes (e.g. doesn't, aren't, etc).

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//const t1 = "Billy always listens to his mother. He always does what she says. If his mother says, \"Brush your teeth,\" Billy brushes his teeth. If his mother says, \"Go to bed,\" Billy goes to bed. Billy is a very good boy. A good boy listens to his mother. His mother doesn't have to ask him again. She asks him to do something one time, and she doesn't ask again. Billy is a good boy. He does what his mother asks the first time. She doesn't have to ask again. She tells Billy, \"You are my best child.\" Of course Billy is her best child. Billy is her only child."
//const t2 = "Facts are meaningless. You could use facts to prove anything that's even remotely true. Old people don't need companionship. They need to be isolated and studied so it can be determined what nutrients they have that might be extracted for our personal use. You don't like your job, you don't strike. You go in every day and do it really half-assed. That's the American way. Don't kid yourself, Jimmy. If a cow ever got the chance, he'd eat you and everyone you care about. You don't win friends with salad. Kids, we need to talk for a moment about Krusty Brand Chew Goo Gum Like Substance. We all knew it contained spider eggs, but the hantavirus came out of left field. Fame was like a drug. But what was even more like a drug were the drugs. Well, he's kind of had it in for me ever since I accidentally ran over his dog. Actually, replace \"accidentally\" with \"repeatedly\" and replace \"dog\" with \"son\"."
//const t3 = "Snowboarding family is very important to me I'm just a regular guy I'm just a regular guy. New friends what to order off of the menu I love the smell of honest and direct not looking for a penpal, if you want to I know I listed more than 6 things making lasagna from scratch ethical nonmonogamy skiing. I don't really like talking about myself using my farmshare ethical nonmonogamy shoot me a message seeing as many countries as possible fixing my scooter. Only looking for something casual I'm a good listener making people laugh going to the gym. Not looking for a penpal local sports teams ethical nonmonogamy making people laugh down to earth, feminism only looking for something casual I value art family is very important to me bikes. Down to earth playing my guitar seeing as many countries as possible my favorite word is Breaking Bad but then it wouldn't be private. Trying this for the first time family is very important to me I'm looking for as friends. Honest and direct Kurosawa down to earth working on my body and my mind everything but country music, not looking for a penpal Neutral Milk Hotel activity partners whatever topic is on NPR I'm a good listener. I'm a big fan of tattoos ask me anything if you want to jazz cafes if you think we have something in common."
//const t4 = "Monocle ipsum dolor sit amet winkreative Porter quality of life, Airbus A380 extraordinary Helsinki punctual alluring flat white sharp elegant. Discerning quality of life Boeing 787 remarkable carefully curated sophisticated, destination craftsmanship delightful exclusive smart punctual curated extraordinary the best Ginza. Uniforms delightful airport, Tsutaya classic liveable flat white. Essential Melbourne Lufthansa, Asia-Pacific uniforms bespoke Marylebone exclusive ryokan sophisticated extraordinary. Handsome perfect Fast Lane, business class Marylebone sophisticated Swiss ryokan sleepy bulletin the best sharp. ANA Scandinavian exquisite carefully curated artisinal hand-crafted. Signature destination Shinkansen discerning, Nordic charming premium. Sunspel cosy boutique Comme des Garcons delightful. Carefully curated uniforms Singapore perfect St Moritz. Cosy intricate boutique, Washlet business class bespoke flat white craftsmanship sleepy exclusive Baggu exquisite smart. Muji joy sophisticated Swiss Toto wardrobe. Destination Gaggenau Airbus A380 extraordinary.  Hand-crafted bureaux destination, efficient Porter Muji discerning. Concierge sharp izakaya vibrant extraordinary charming Helsinki business class finest iconic Lufthansa Singapore St Moritz Melbourne. Boutique carefully curated tote bag, destination cutting-edge impeccable. Perfect bulletin ryokan flat white."
//const t5 = "Coffee watching a movie Werner Herzog food. Ask me anything Woody Allen if you like my profile someone who shares my sense of humor using my farmshare, whatever topic is on NPR I enjoy everything but country music I'm a big fan of as friends. Hiking vinyl records Sunday funday shoot me a message I don't take myself too seriously Kurosawa. Breaking Bad Vampire Weekend food share a new experience. I'm just a regular guy home brewing sleeping late if you're still reading this working on my body and my mind, long-term dating degree in philosophy dubstep but then it wouldn't be private I love the smell of. My beard working at a coffee shop outdoorsy my eyes grilling my favorite word is coffee. Kurosawa shoot me a message fascinates me dubstep. Making lasagna from scratch bored at home too many to list my smartphone Arrested Development, passionate about open-minded recently moved back adventures I don't really like talking about myself. Making lasagna from scratch home brewing if you want to pickles hiking The Daily Show Kurosawa"
//​
//Test.assertSimilar(noStrangers('See Spot run. See Spot jump. Spot likes jumping. See Spot fly.'), [['spot', 'see'],[]])
//Test.assertSimilar(noStrangers(t1), [['says', 'a', 'good', 'boy', "doesn't", 'ask', 'again', 'is', 'child'], ['his', 'mother', 'to', 'billy', 'she']])
//Test.assertSimilar(noStrangers(t2),[['be', 'and', 'need', 'to', 'it', 'the', 'like', 'a', 'for', 'with'], ['you', "don't"]])
//Test.assertSimilar(noStrangers(t3), [['the', 'ethical', 'nonmonogamy', 'making', 'family', 'very', 'important', 'down', 'earth', 'and', 'not', 'penpal', 'of', 'if', 'you', 'something'], ['a', 'to', 'i', 'for', 'looking', 'as', 'my', 'is', "i'm", 'me']])
//Test.assertSimilar(noStrangers(t4),[['sophisticated', 'delightful', 'carefully', 'uniforms', 'flat', 'white', 'exclusive', 'discerning', 'sharp', 'business', 'class', 'boutique', 'perfect', 'ryokan'], ['extraordinary', 'curated', 'destination']])
//Test.assertSimilar(noStrangers(t5),[['i', 'of', 'coffee', 'me', 'home', 'if', 'kurosawa'], ['a', 'my']])

