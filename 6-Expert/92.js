

//title: The Simple Game

//tags: arrays,games,numbers

//url: https://edabit.com/challenge/2ucJLrptZnRXxAMQp

//Description:
//This game is played with a random string of digits 0-9. The object is to reduce the string to zero length by removing digits from the left end of the string. Removals are governed by one simple rule. If the leftmost digit is n, you can remove up to n digits from the left end (inclusive). After doing this the new leftmost digit is reduced by the number of digits removed. If this would cause the leftmost digit to fall to zero or below then the move is not allowed. The final move of reducing the string to zero length must be done by exact count.
//The game "4621" can be won in one move since there are 4 digits and the leftmost digit is 4. "6348" requires two moves to win: remove 2 to get to "28", and remove 2 again to get to "". "12345" can't be won by any combination of moves.
//Devise a function that takes a string and returns the shortest sequence of moves that will win the game. If there are ties for the shortest, sort them in ascending order. If the game is unwinnable return [].
//Examples
//simple("4621") ➞ [[4]]
//// Exact count, 4 digits, leftmost is 4.
//
//simple("6348") ➞ [[2, 2]]
//
//simple("65042485") ➞ [[6, 2]]
//
//simple("51416573385334") ➞ [[4, 2, 3, 5]]
//// String after each move: "2573385334", "53385334", "55334", ""
//
//simple("38088198647805") ➞ [[1, 5, 1, 7], [3, 3, 1, 7], [3, 3, 5, 3], [3, 4, 3, 4]]
//// Four are tied for shortest, sorted ascending.
//
//simple("2177510183994154") ➞ [[2, 1, 5, 3, 3, 2]]
//
//simple("9555267224559216") ➞ []
//// No solution possible.
//Notes
//This game could be made less simple by allowing draws from either end of the string or, perhaps, by making it a 2 player game with the player making the last move being the winner.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(simple("341"),[[3]])
//Test.assertSimilar(simple("1"),[[1]])
//Test.assertSimilar(simple("12"),[[1, 1]])
//Test.assertSimilar(simple("2222222"),[[1, 1, 1, 1, 1, 1, 1]])
//Test.assertSimilar(simple("65042485"),[[6, 2,]])
//Test.assertSimilar(simple("51416573385334"),[[4, 2, 3, 5]])
//Test.assertSimilar(simple("1465971216346286"),[[1, 3, 5, 1, 2, 4]])
//Test.assertSimilar(simple("1871379558590150"),[[1, 4, 3, 1, 7], [1, 5, 1, 4, 5], [1, 5, 2, 1, 7]])
//Test.assertSimilar(simple("9555267224559216"),[])
//Test.assertSimilar(simple("5558962144506243"),[[2, 3, 3, 1, 1, 2, 4], [2, 3, 3, 1, 3, 2, 2], [3, 2, 3, 1, 1, 2, 4], [3, 2, 3, 1, 3, 2, 2], [4, 1, 3, 1, 1, 2, 4], [4, 1, 3, 1, 3, 2, 2]])
//Test.assertSimilar(simple("3531211749446027"),[])
//Test.assertSimilar(simple("1501155511735282862"),[[1, 4, 1, 1, 3, 4, 3, 1, 1], [1, 4, 1, 4, 2, 2, 3, 1, 1]])
//Test.assertSimilar(simple("2799385302911397165"),[[2, 3, 5, 4, 5]])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Iterative Rotation Cipher

//tags: cryptography,logic,strings

//url: https://edabit.com/challenge/a4PnFSJ8pDg4BHjNr

//Description:
//In Iterative Rotation Cipher encoding is done by performing a series of character and substring rotations on a string input.
//Create a function that takes two arguments; a positive integer and a string and returns a coded message.
//message = `If you wish to make an apple pie from scratch, you must first invent the universe.`
//
//iterativeCiph(10, message)➞ `10 hu fmo a,ys vi utie mr snehn rni tvte .ysushou teI fwea pmapi apfrok rei tnocsclet'
//There are some variations on the rules of encipherment. One version of the cipher rules are outlined below:
//Step #1: Remove all spaces from the message.
//`Ifyouwishtomakeanapplepiefromscratch,youmustfirstinventtheuniverse.`
//Step #2: Shift the order of string characters to the right by 10.
//`euniverse.Ifyouwishtomakeanapplepiefromscratch,youmustfirstinventth`
//Step #3: Place the spaces back in their original positions.
//`eu niv erse .I fyou wi shtom ake anap plepiefr oms crat ch,yo umustf irs tinventth`
//Step #4: Shift the order of characters for each space-separated substring to the right by 10:
//`eu vni seer .I oufy wi shtom eak apan frplepie som atcr ch,yo ustfum sir htinventt`
//Repeat all steps 9 more times before returning the string with 10 prepended.
//encodedMessage = `10 hu fmo a,ys vi utie mr snehn rni tvte .ysushou teI fwea pmapi apfrok rei tnocsclet`
//See the examples below for more understanding:
//Examples
//iterativeCiph(12, "Oh, Fortuna, you capricious sprite!")➞ "12 ory ,auruiec i,i OtacsuF!ht orpsnpo"
//
//iterativeCiph(6, "Time is an illusion. Lunchtime doubly so.") ➞ "6 im.T ei no .lLnicsan iluushted imouys blo"
//
//iterativeCiph(22, "There is nothing more atrociously cruel than an adored child.") ➞ "22 tareu oo iucnaTr dled oldthser.hg hiarm nhcn se rliyet oincoa"
//Notes
//Want to decipher the encoded code ? Checkout this challenge !!

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//// Encode Messages
//Test.assertEquals(iterativeCiph(10,"If you wish to make an apple pie from scratch, you must first invent the universe."),"10 hu fmo a,ys vi utie mr snehn rni tvte .ysushou teI fwea pmapi apfrok rei tnocsclet")
//Test.assertEquals(iterativeCiph(12,"Oh, Fortuna, you capricious sprite!"),"12 ory ,auruiec i,i OtacsuF!ht orpsnpo")
//Test.assertEquals(iterativeCiph(14,"True evil is a mundane bureaucracy."),"14 daue ilev is a munbune Traurecracy.")
//Test.assertEquals(iterativeCiph(19,"You do not need to accept everything as true, you only have to accept it as necessary."),"19 stY oo nru dnes os ctppoe aayheev.ia ,t rtood tgn lhen ytay ac saeeie oc nv treuetyucc")
//Test.assertEquals(iterativeCiph(6,"Time is an illusion. Lunchtime doubly so."),"6 im.T ei no .lLnicsan iluushted imouys blo")
//Test.assertEquals(iterativeCiph(22,"There is nothing more atrociously cruel than an adored child."),"22 tareu oo iucnaTr dled oldthser.hg hiarm nhcn se rliyet oincoa")
//Test.assertEquals(iterativeCiph(52,"The question is, are we happy to suppose that our grandchildren may never be able to see an elephant except in a picture book?"),"52 eha texcpaet ain ptu ie csroe et othpbuu ?okq eTi s,anirepewhpa soy asopt ht ourg nd arh rc bnapdeen lelriv my n eateble esone")
//Test.assertEquals(iterativeCiph(29,"I avoid that bleak first hour of the working day during which my still sluggish senses and body make every chore a penance.\nI find that in arriving later, the work which I do perform is of a much higher quality."),"29 a r.lht niou gwryd aoshg gIsi mk lei adwhfci isd seensn rdohy mo kleie oltbyhes a\naneu p.n rndr tehh irnne yifav t eo,raclhtc frpw IIti im gwkaidhv aicufh ima doea eruhi y io qshhcoa kr ef l btah gtrrse otnvugrt")
//Test.assertEquals(iterativeCiph(36,"As I was going up the stair\nI met a man who wasn't there!\nHe wasn't there again today,\nOh how I wish he'd go away!"),"36 ws h weA dgIaa ug owh n!asrit git \n msm phw teaI'e tanantwhe reos\ns ther! aHeae 'gwadin\nt haw n htoo ,I'i sy aohOy")
//Test.assertEquals(iterativeCiph(47,"Run, rabbit, run\nDig that hole, forget the sun\nAnd when at last the work is done\nDon't sit down, it's time to dig another one"), "47 tlou idiitsi ,rodeAs itth onlnn otwtea Rbg a\nrasob irat ot r,th ohD 'ent tD hef\neengm' hut edn,k enrt as,i tw onh eusdong \nnw")
//Test.assertEquals(iterativeCiph(8,"Mubashir always wanted to be a GD Pilot but ended up a stupid Engineer"), "8 niMruegi ahsewr aibaal wt en y se GDadb olt toibu Pe t peandu udEdnpst")
//​
//// Mubashir

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Ken-Ken Helper

//tags: algorithms,arrays,logic,math,numbers

//url: https://edabit.com/challenge/PKfAvKeg9a8c9xAcF

//Description:
//Ken-Ken is a puzzle game similar to Sudoku. It consists board filled with digits 1-9 and can have no two identical digits in the same row or column. The board is then split into jigsaw-like shapes (cages), each with a target number and mathematical operator, for which the digits that fill it (order doesn't matter) must match.
//For addition +, the digits must sum to target.
//For multiplication *, the digits must multiply to target.
//For subtraction -, the digits must have a difference of target. Only cages of size 2 are allowed for subtraction.
//For division /, the digits must have a quotient of target. Only cages of size 2 are allowed for division.
//For no operator "", the digits can fill it for any of the operators. If a cage has more than 2 cells, it can only have operators of + or *.
//For example, with and operator of / and target of 4, with a 2x1 cage, possible digits to fill it are 2 and 8.
//The cage shape is indicated by 1's. Provided a cage, target, and operator, your goal is to return an array of all possible digit combinations (as a JSON string).
//Example
//cage = [
//  [0, 1],
//  [1, 1]
//]
//target = 24, and operator = "*", the output should be:
//"[[1,3,8],[1,4,6],[2,2,6],[2,3,4]]"
//Inputs
//cage ([][]integer)
//The shape of the cage indicated by 1's and 0's. 1 indicates a cell of the cage.
//Guaranteed constraints:
//1 ≤ cage.length ≤ 3
//1 ≤ cage[i].length ≤ 6
//
//2 ≤ cage size (# of 1's) ≤ 8
//
//target (integer)
//
//operator (string)
//Operator will be +, -, *, / or ""
//To match the tests expected output, sort both the inner and outer arrays and then return as a JSON string.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(kenKenHelper([[0,1],[1,1]],24,"*"),'[[1,3,8],[1,4,6],[2,2,6],[2,3,4]]')
//Test.assertEquals(kenKenHelper([[1,1]],3,"/"),'[[1,3],[2,6],[3,9]]')
//Test.assertEquals(kenKenHelper([[1,1]],4,"-"),'[[1,5],[2,6],[3,7],[4,8],[5,9]]')
//Test.assertEquals(kenKenHelper([[1,1,1]],6,""),'[[1,2,3]]')
//Test.assertEquals(kenKenHelper([[1,0],[1,1]],8,""),'[[1,1,6],[1,1,8],[1,2,4],[1,2,5],[1,3,4],[2,2,4],[2,3,3]]')
//Test.assertEquals(kenKenHelper([[1,1,1],[1,0,0]],26,"*"),'[]')
//Test.assertEquals(kenKenHelper([[1,1,1],[0,1,0]],252,""),'[[1,4,7,9],[1,6,6,7],[2,2,7,9],[2,3,6,7],[3,3,4,7]]')
//Test.assertEquals(kenKenHelper([[1,1,1,1,1]],32,""),'[[2,6,7,8,9],[3,5,7,8,9],[4,5,6,8,9]]')
//Test.assertEquals(kenKenHelper([[1,1,1],[1,0,0]],32,""),'[[1,1,4,8],[1,2,2,8],[1,2,4,4],[6,8,9,9],[7,8,8,9]]')
//Test.assertEquals(kenKenHelper([[0,0,0,0,1],[1,1,1,1,1]],6804,"*"),'[[1,2,6,7,9,9],[1,3,4,7,9,9],[1,3,6,6,7,9],[2,3,3,6,7,9]]')
//Test.assertEquals(kenKenHelper([[1,1,0,0,0,1],[0,1,1,1,1,1]],56,"+"),'[[2,6,7,7,8,8,9,9],[3,5,7,7,8,8,9,9],[3,6,6,7,8,8,9,9],[4,5,6,7,8,8,9,9],[4,6,6,7,7,8,9,9],[5,5,6,7,7,8,9,9],[5,6,6,7,7,8,8,9]]')
//Test.assertEquals(kenKenHelper([[1,1,0],[0,1,0],[0,1,1]],40,""),'[[1,1,1,5,8],[1,1,2,4,5],[1,2,2,2,5],[5,8,9,9,9],[6,7,9,9,9],[6,8,8,9,9],[7,7,8,9,9],[7,8,8,8,9]]')
//Test.assertEquals(kenKenHelper([[1,1,1],[1,0,1],[1,0,1]],181440,"*"),'[[1,5,7,8,8,9,9],[2,4,5,7,8,9,9],[2,5,6,6,7,8,9],[3,3,5,7,8,8,9],[3,4,5,6,7,8,9],[3,5,6,6,6,7,8],[4,4,4,5,7,9,9],[4,4,5,6,6,7,9]]')
//Test.assertEquals(kenKenHelper([[1,1,1],[1,0,1],[1,1,1]],61,"+"),'[[3,7,8,8,8,9,9,9],[4,6,8,8,8,9,9,9],[4,7,7,8,8,9,9,9],[5,5,8,8,8,9,9,9],[5,6,7,8,8,9,9,9],[5,7,7,7,8,9,9,9],[5,7,7,8,8,8,9,9],[6,6,6,8,8,9,9,9],[6,6,7,7,8,9,9,9],[6,6,7,8,8,8,9,9],[6,7,7,7,8,8,9,9]]')

