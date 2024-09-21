

//title: Caesar Cipher

//tags: cryptography,loops,strings

//url: https://edabit.com/challenge/5yGyWGnihggppfWqQ

//Description:
//Create a function that takes two arguments (text, key) and returns a new encrypted text using the key. For example, if the input is "a" and the key is 1, it should move that letter 1 step in alphabetic order so the output would be "b".
//Examples
//caesarCipher("hello", 5) ➞ "mjqqt"
//
//caesarCipher("hello world", 1) ➞ "ifmmp xpsme"
//
//caesarCipher("a", 2) ➞ "c"
//Notes
//The input is only letters and spaces; no special characters.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(caesarCipher("hello world", 1), "ifmmp xpsme")
//Test.assertEquals(caesarCipher("hello world", 26), "hello world")
//Test.assertEquals(caesarCipher("iwxh xh p rwxetg", 11), "this is a chiper")
//Test.assertEquals(caesarCipher("z", 2), "b")
//Test.assertEquals(caesarCipher("fruuhfw", 23), "correct")
//Test.assertEquals(caesarCipher("tfexirkj", 9), "congrats")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Adding Elements to the End of a Singly Linked List

//tags: algorithms,arrays,data_structures

//url: https://edabit.com/challenge/xsLBGKTk6upShQTS7

//Description:
//Create a method in a LinkedList class called push that adds an element to the end of the linked list and returns the added element. The LinkedList class is created for you.
//Examples
//push(1) ➞ 1
//
//push(2) ➞ 2
//
//push(3) ➞ 3
//Notes
//Element is a positive integer.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//const first = new LinkedList();
//​
//Test.assertEquals(first.push(1),1)
//Test.assertEquals(first.check(),"1")
//Test.assertEquals(first.push(2),2)
//Test.assertEquals(first.check(),"12")
//Test.assertEquals(first.push(3),3)
//Test.assertEquals(first.check(),"123")
//Test.assertEquals(first.push(4),4)
//Test.assertEquals(first.check(),"1234")
//Test.assertEquals(first.push(5),5)
//Test.assertEquals(first.check(),"12345")
//Test.assertEquals(first.push(6),6)
//Test.assertEquals(first.check(),"123456")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Reverse String Without Affecting Special Characters

//tags: logic,regex,strings

//url: https://edabit.com/challenge/RMcZpiKNzhri4pcCJ

//Description:
//Reverse the string without affecting special characters and numbers.
//Examples
//revSpecstring("AFC#47GH$Ieu") ➞ "ueI#47HG$CFA"
//
//revSpecstring("guyhiuj1234!@#$%rtyhghu") ➞ "uhghytr1234!@#$%juihyug"
//
//revSpecstring("12!@" ) ➞ "12!@"
//Notes
//Try with for loops.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(revSpecstring("AFC#47GH$Ieu"), "ueI#47HG$CFA")
//Test.assertEquals(revSpecstring("guyhiuj1234!@#$%rtyhghu" ), "uhghytr1234!@#$%juihyug")
//Test.assertEquals(revSpecstring("12!@"), "12!@")

