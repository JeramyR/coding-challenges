

//title: Number of Lucky Tickets

//tags: algorithms,logic,math,numbers

//url: https://edabit.com/challenge/7K29bH8da9sQ6g8T6

//Description:
//Create a function that counts how many n-digit numbers have the same sum of the first half and second half of the digits (“lucky” numbers). The number n is even. For example, for n = 6, the numbers "001010", "112220", "000000" are lucky.
//Examples
//luckyTicket(2) ➞ 10
//
//luckyTicket(4) ➞ 670
//
//luckyTicket(12) ➞ 39581170420
//Notes
//There are checks for n > 10, so watch out for code performance.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(luckyTicket(2), 10)
//Test.assertEquals(luckyTicket(4), 670)
//Test.assertEquals(luckyTicket(6), 55252)
//Test.assertEquals(luckyTicket(8), 4816030)
//Test.assertEquals(luckyTicket(10), 432457640)
//Test.assertEquals(luckyTicket(12), 39581170420)
//Test.assertEquals(luckyTicket(14), 3671331273480)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Iterative Rotation Decipher

//tags: cryptography,logic,strings

//url: https://edabit.com/challenge/8rTPyvHRZ3343Qdvt

//Description:
//In this challenge, you have to perform reverse steps of Iterative Rotation Cipher. Decoding is done by performing a series of character and substring rotations on a string input.
//Create a function that takes a string of encoded message eMessage and returns a decoded message.
//Encoded Message = `10 hu fmo a,ys vi utie mr snehn rni tvte .ysushou teI fwea pmapi apfrok rei tnocsclet`
//
//Decoded Message = `If you wish to make an apple pie from scratch, you must first invent the universe.`
//See the examples below for more understanding:
//Examples
//iterativeDeciph("12 ory ,auruiec i,i OtacsuF!ht orpsnpo")➞ "Oh, Fortuna, you capricious sprite!"
//
//iterativeDeciph("6 im.T ei no .lLnicsan iluushted imouys blo") ➞ "Time is an illusion. Lunchtime doubly so."
//
//iterativeDeciph("22 tareu oo iucnaTr dled oldthser.hg hiarm nhcn se rliyet oincoa") ➞ "There is nothing more atrociously cruel than an adored child."
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(iterativeDeciph("10 hu fmo a,ys vi utie mr snehn rni tvte .ysushou teI fwea pmapi apfrok rei tnocsclet"),"If you wish to make an apple pie from scratch, you must first invent the universe.")
//Test.assertEquals(iterativeDeciph("12 ory ,auruiec i,i OtacsuF!ht orpsnpo"), "Oh, Fortuna, you capricious sprite!")
//Test.assertEquals(iterativeDeciph("14 daue ilev is a munbune Traurecracy."), "True evil is a mundane bureaucracy.")
//Test.assertEquals(iterativeDeciph("19 stY oo nru dnes os ctppoe aayheev.ia ,t rtood tgn lhen ytay ac saeeie oc nv treuetyucc"),"You do not need to accept everything as true, you only have to accept it as necessary.")
//Test.assertEquals(iterativeDeciph("6 im.T ei no .lLnicsan iluushted imouys blo"), "Time is an illusion. Lunchtime doubly so.")
//Test.assertEquals(iterativeDeciph("22 tareu oo iucnaTr dled oldthser.hg hiarm nhcn se rliyet oincoa"), "There is nothing more atrociously cruel than an adored child.")
//Test.assertEquals(iterativeDeciph("52 eha texcpaet ain ptu ie csroe et othpbuu ?okq eTi s,anirepewhpa soy asopt ht ourg nd arh rc bnapdeen lelriv my n eateble esone"), "The question is, are we happy to suppose that our grandchildren may never be able to see an elephant except in a picture book?")
//Test.assertEquals(iterativeDeciph("29 a r.lht niou gwryd aoshg gIsi mk lei adwhfci isd seensn rdohy mo kleie oltbyhes a\naneu p.n rndr tehh irnne yifav t eo,raclhtc frpw IIti im gwkaidhv aicufh ima doea eruhi y io qshhcoa kr ef l btah gtrrse otnvugrt"), "I avoid that bleak first hour of the working day during which my still sluggish senses and body make every chore a penance.\nI find that in arriving later, the work which I do perform is of a much higher quality.")
//Test.assertEquals(iterativeDeciph("36 ws h weA dgIaa ug owh n!asrit git \n msm phw teaI'e tanantwhe reos\ns ther! aHeae 'gwadin\nt haw n htoo ,I'i sy aohOy"), "As I was going up the stair\nI met a man who wasn't there!\nHe wasn't there again today,\nOh how I wish he'd go away!")
//Test.assertEquals(iterativeDeciph("47 tlou idiitsi ,rodeAs itth onlnn otwtea Rbg a\nrasob irat ot r,th ohD 'ent tD hef\neengm' hut edn,k enrt as,i tw onh eusdong \nnw"), "Run, rabbit, run\nDig that hole, forget the sun\nAnd when at last the work is done\nDon't sit down, it's time to dig another one")
//​
//// Mubashir

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Additive Number

//tags: algebra,algorithms,math,numbers,validation

//url: https://edabit.com/challenge/sF9a4Dkh5yiWtbJd6

//Description:
//Write a function that checks if a given string contains an additive sequence or not. A string contains an additive sequence if its digits can make a sequence of numbers in which every number is the sum of the previous two numbers. A valid additive sequence should contain at least three numbers.
//Examples
//isAdditive("112358") ➞ true
//// The digits can form an additive sequence: 1, 1, 2, 3, 5, 8. 
//// 1 + 1 = 2, 1 + 2 = 3, 2 + 3 = 5, 3 + 5 = 8
//
//isAdditive("129881000") ➞ true
//// Each number can contain 1 or more digits: 12, 988, 1000.
//// 12 + 988 = 1000
//
//isAdditive("12988110101891") ➞ true
//// 129 + 881 = 1010, 881 + 1010 = 1891
//
//isAdditive("123456789") ➞ false
//
//isAdditive("300045007500") ➞ true
//Notes
//The string will contain only digits 0 ➞ 9
//Numbers in the additive sequence cannot have leading zeros, so sequence 1, 2, 03 or 1, 02, 3 is invalid.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(isAdditive('112358'), true)
//Test.assertEquals(isAdditive('129881000'), true)
//Test.assertEquals(isAdditive('12988110101891'), true)
//Test.assertEquals(isAdditive('123456789'), false)
//Test.assertEquals(isAdditive('123'), true)
//Test.assertEquals(isAdditive('10112132'), true)
//Test.assertEquals(isAdditive('5566121186'), false)
//Test.assertEquals(isAdditive('5566121188'), false)
//Test.assertEquals(isAdditive('5566121187'), true)
//Test.assertEquals(isAdditive('1000150025004000'), true)
//Test.assertEquals(isAdditive('10001501150'), true)
//Test.assertEquals(isAdditive('10001500250'), false)
//Test.assertEquals(isAdditive('4812203243'), false)
//Test.assertEquals(isAdditive('1758998571116160'), true)
//Test.assertEquals(isAdditive('1894587012189458703189458705378917408'), true)
//Test.assertEquals(isAdditive('1000100010100010001010101010'), true)
//Test.assertEquals(isAdditive('189458701218945873189458705378917408'), false)
//Test.assertEquals(isAdditive('10001000101000100010010101010'), false)
//Test.assertEquals(isAdditive('991819919'), true)
//Test.assertEquals(isAdditive('99182746'), false)
//Test.assertEquals(isAdditive('58013'), false)
//Test.assertEquals(isAdditive('0369'), false, "Starts with '0'")
//Test.assertEquals(isAdditive('34'), false, "Too short")
//Test.assertEquals(isAdditive(''), false)

