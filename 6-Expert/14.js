

//title: Word Buckets

//tags: control_flow,strings

//url: https://edabit.com/challenge/Q7foiyejfJG6pqqws

//Description:
//Write a function that divides a phrase into word buckets, with each bucket containing n or fewer characters. Only include full words inside each bucket.
//Examples
//bucketize("she sells sea shells by the sea", 10)
//➞ ["she sells", "sea shells", "by the sea"]
//
//bucketize("the mouse jumped over the cheese", 7)
//➞ ["the", "mouse", "jumped", "over", "the", "cheese"]
//
//bucketize("fairy dust coated the air", 20)
//➞ ["fairy dust coated", "the air"]
//
//bucketize("a b c d e", 2)
//➞ ["a", "b", "c", "d", "e"]
//Notes
//Spaces count as one character.
//Trim beginning and end spaces for each word bucket (see final example).
//If buckets are too small to hold a single word, return an empty array: []
//The final goal isn't to return just the words with a length equal (or lower) to the given n, but to return the entire given phrase bucketized (if possible). So, for the specific case of "by" the only word with a proper length, the phrase can't be bucketized, and the returned array has to be empty.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(bucketize("she sells sea shells by the sea", 2), [])
//Test.assertSimilar(bucketize("ab bc cd", 1), [])
//Test.assertSimilar(bucketize("she sells sea shells by the sea", 10), ["she sells", "sea shells", "by the sea"])
//Test.assertSimilar(bucketize("the mouse jumped over the cheese", 7), ["the", "mouse", "jumped", "over", "the", "cheese"])
//Test.assertSimilar(bucketize("fairy dust coated the air", 20), ["fairy dust coated", "the air"])
//Test.assertSimilar(bucketize("do the hokey pokey", 6), ["do the", "hokey", "pokey"])
//Test.assertSimilar(bucketize("do the hokey pokey", 12), ["do the hokey", "pokey"])
//Test.assertSimilar(bucketize("rich magnificent trees dotted the landscape", 12), ["rich", "magnificent", "trees dotted", "the", "landscape"])
//Test.assertSimilar(bucketize("rich magnificent trees dotted the landscape", 15), ["rich", "magnificent", "trees dotted", "the landscape"])
//Test.assertSimilar(bucketize("rich magnificent trees dotted the landscape", 18), ["rich magnificent", "trees dotted the", "landscape"])
//Test.assertSimilar(bucketize("rich magnificent trees dotted the landscape", 22), ["rich magnificent trees", "dotted the landscape"])
//Test.assertSimilar(bucketize("rich magnificent trees dotted the landscape", 40), ["rich magnificent trees dotted the", "landscape"])
//Test.assertSimilar(bucketize("rich magnificent trees dotted the landscape", 43), ["rich magnificent trees dotted the landscape"])
//Test.assertSimilar(bucketize("beep bo bee bop bee bo bo bop", 6), ["beep", "bo bee", "bop", "bee bo", "bo bop"])
//Test.assertSimilar(bucketize("beep bo bee bop bee bo bo bop", 10), ["beep bo", "bee bop", "bee bo bo", "bop"])
//Test.assertSimilar(bucketize("a b c d e", 3), ["a b", "c d", "e"])
//Test.assertSimilar(bucketize("a b c d e", 2), ["a", "b", "c", "d", "e"])
//Test.assertSimilar(bucketize("a b c d e", 1), ["a", "b", "c", "d", "e"])
//Test.assertSimilar(bucketize("a b c d e", 2), ["a", "b", "c", "d", "e"])
//Test.assertSimilar(bucketize("a b c d e", 1), ["a", "b", "c", "d", "e"])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Connecting Words

//tags: higher_order_functions,loops,strings

//url: https://edabit.com/challenge/J6ZGG6AvXQzqRpRsy

//Description:
//Write a function that connects each previous word to the next word by the shared letters. Return the resulting string (removing duplicate characters in the overlap) and the minimum number of shared letters across all pairs of strings.
//Examples
//join(["oven", "envier", "erase", "serious"]) ➞ ["ovenvieraserious", 2]
//
//join(["move", "over", "very"]) ➞ ["movery", 3]
//
//join(["to", "ops", "psy", "syllable"]) ➞ ["topsyllable", 1]
//
//// "to" and "ops" share "o" (1)
//// "ops" and "psy" share "ps" (2)
//// "psy" and "syllable" share "sy" (2)
//// the minimum overlap is 1
//
//join(["aaa", "bbb", "ccc", "ddd"]) ➞ ["aaabbbcccddd", 0]
//Notes
//More specifically, look at the overlap between the previous words ending letters and the next word's beginning letters.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(join(["happy", "python", "honey", "yelp", "plank", "lanky"]), ["happythoneyelplanky", 1])
//Test.assertSimilar(join(["move", "over", "very"]), ["movery", 3])
//Test.assertSimilar(join(["oven", "envier", "erase", "serious"]), ["ovenvieraserious", 2])
//Test.assertSimilar(join(["to", "ops", "psy", "syllable"]), ["topsyllable", 1])
//Test.assertSimilar(join(["aaa", "bbb", "ccc", "ddd"]), ["aaabbbcccddd", 0])
//Test.assertSimilar(join(["abcde", "bcdefghi", "efghi", "fghij", "ghijklmnop"]), ["abcdefghijklmnop", 4])
//Test.assertSimilar(join(["aab", "abcccd", "cdeeef", "effff"]), ["aabcccdeeeffff", 2])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: N-ary Tree Height

//tags: data_structures,recursion

//url: https://edabit.com/challenge/9DfcynL8hYqay9PrZ

//Description:
//A Tree is a special type of data structure in programming where each element (called a "node") may contain a reference to one or more child elements (again, "nodes"). The maximum number of children that a single node points to may be indicated by the phrase "n-ary tree", where n is that maximum number. Confused? Let's look at some examples, starting with a 1-ary tree.
//1-Ary Tree
//If the maximum number of child elements each node can 'point' to is 1, we call this a 1-ary tree:
//NodeA ---> NodeB ---> NodeC --> NodeD
//In other words, NodeA has a reference to its child element NodeB, and NodeB has a its child element NodeC, and so on. Because each element has at most 1 and only 1 child, this is a 1-ary tree (also known as a linked list).
//2-Ary Tree
//If the maximum number of child elements each node can 'point' to is 2, we call this a 2-ary tree, or a binary tree (from Latin bis, meaning "two" or "twice"). Here's a quick example:
//     A
//   /  \
//  B    C
// /    / \
//D    E   F
//     \
//      G
//Remember that the n term is the maximum number of children for each node; node B and E only have 1 child, and nodes D, F, and G have 0 children.
//Navigating an n-ary tree.
//When given an n-ary tree, you're normally given the root node (A in the case of my binary tree above). The only way to access nodes other than this root would be to recursively "ask" for those nodes:
//Given: root(A), we wanna find E's value:
//1. Get A's child C
//2. We're now on node C.
//3. Get C's child E.
//4. We're now on node E.
//In other words, given root node A above, we cannot simply jump directly to node E. Instead, we've gotta jump down from grandparent to parent to child, and so on, until we reach our desired node.
//
//Your Goal
//Given an n-ary tree, return the maximum height (or put more simply, just the height!) of the tree. For my binary tree above, you'd want to return 4. Think of it this way: what's the longest path you could follow, from parent to child to grandchild and so on, without ever going back "up" the tree?
//Examples
//In:
//     A
//   /  \
//  B    C
// /    / \
//D    E   F
//     \
//      G 
//Out: 4 (A,C,E,G)
//
//In:    E --> D --> A --> B --> I --> T
//Out: 6 (E,D,A,B,I,T)
//
//In:   
//    A
//  / | \
// B  C  D
///       \
//E        H
//\
// F
///
//G 
//Out: 5 (A,B,E,F,G)
//Notes and Suggestions
//For anyone wondering, the trees are not necessarily either balanced or ordered.
//Similarly, the values of each node are trivial for this exercise. They're really only used so that I can construct the initial trees for you.
//You are only required to return the maximum height. The sequences of nodes included in the examples are for illustrative purposes only!
//As the tag for this exercise indicates, one of the "usual" solutions for this exercise is a recursive one. If you really wanna impressive everyone, there is an iterative solution too!
//As usual, please point out any bugs in the tests (or suggest new ones!).
//There are specific names for other "levels" of n:
//1: unary tree
//3: ternary tree
//4: quadtree
//9: nonary tree
//🎄: Christmas tree

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

////Test.assertEquals(actual, expected, message)
////Test.assertSimilar(actual, expected, message)
//class TreeNode{
//  constructor(v){
//    this.val = v;
//    this.children = [];
//  }
//}
//​
//const constructTree=list=>{
//  //construct an n-ary tree given a list of nodes, where
//  //each node has a parent p and a value v.
//  const nodes = [];//references to each node
//  let root=  null;
//  while(list.length){
//    let ce = list.shift(),
//        cn = new TreeNode(ce.v);
//    if(ce.p!==-1){
//      //non-root
//      let parent = nodes.find(q=>q.val==ce.p);
//      if(!parent) throw new Error('PARENT NOT FOUND');
//      parent.children.push(cn);
//    }else{
//      root=cn;
//    }

