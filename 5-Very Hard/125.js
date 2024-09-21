

//title: Incrementing Rows and Columns

//tags: arrays,higher_order_functions

//url: https://edabit.com/challenge/Hr6HTn3ngCbmJayd4

//Description:
//Write a function that takes in three parameters: r, c, i, where:
//r and c are the number of rows and columns to initialize a zero matrix.
//i represents the list of incrementing operations (+1).
//And returns the resulting matrix after applying all the increment operations. Each increment operation will add 1 to the rows or columns specified in the incrementing list.
//To illustrate:
//final(3, 3, ["2r", "2c", "1r", "0c"])
//
//# Initialize a 3 x 3 matrix of zeroes.
//
//[
//  [0, 0, 0],
//  [0, 0, 0],
//  [0, 0, 0]
//]
//
//# Apply "2r" (increment index 2 row).
//
//[
//  [0, 0, 0],
//  [0, 0, 0],
//  [1, 1, 1]
//]
//
//# Apply "2c" (increment index 2 column).
//
//[
//  [0, 0, 1],
//  [0, 0, 1],
//  [1, 1, 2]
//]
//
//# Apply "1r" (increment index 1 row).
//
//[
//  [0, 0, 1],
//  [1, 1, 2],
//  [1, 1, 2]
//]
//
//# Apply "0c" (increment index 0 column).
//# This is the result you should return.
//
//[
//  [1, 0, 1],
//  [2, 1, 2],
//  [2, 1, 2]
//]
//Examples
//final(2, 2, ["0r", "0r", "0r", "1c"]) ➞ [
//  [3, 4],
//  [0, 1]
//]
//
//final(2, 2, ["0c"]) ➞ [
//  [1, 0],
//  [1, 0]
//]
//
//final(3, 3, ["1c", "2c", "2c", "3c", "3c", "3c"]) ➞ [
//    [1, 2, 3],
//    [1, 2, 3],
//    [1, 2, 3]
//]
//
//final(3, 3, []) ➞ [
//  [0, 0, 0],
//  [0, 0, 0],
//  [0, 0, 0]
//]
//Notes
//The 2D matrix is 0-indexed.
//The matrix created will have at least one row and one column.
//All increment operations will be exactly +1.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(final(2, 2, ['0r', '0r', '0r', '1c']), [
//[3, 4], 
//[0, 1]
//])
//​
//Test.assertSimilar(final(2, 2, ['0c']), [
//[1, 0], 
//[1, 0]
//])
//​
//Test.assertSimilar(final(3, 3, ['0c', '1c', '1c', '2c', '2c', '2c']), [
//[1, 2, 3], 
//[1, 2, 3], 
//[1, 2, 3]
//])
//​
//Test.assertSimilar(final(3, 3, ["2r", "2c", "1r", "0c"]), [
//[1, 0, 1], 
//[2, 1, 2], 
//[2, 1, 2]
//])
//​
//Test.assertSimilar(final(1, 1, []), [[0]])
//​
//Test.assertSimilar(final(3, 3, ['0r', '2c', '1r', '2c', '1c', '1r', '1r']), [

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Keyword Cipher

//tags: cryptography,logic,strings

//url: https://edabit.com/challenge/3G5P56u9nWW4uf5Cj

//Description:
//A Keyword Cipher is a monoalphabetic cipher that uses a keyword to provide encryption on the given string of the message.
//Create a function that takes two arguments: a string message and a string key, and returns an encoded message.
//For the encryption key, the keyword is placed at the beginning, followed by the rest of the characters in the alphabet in order (in other words, with the keyword characters removed):
//A|B|C|D|E|F|G|H|I|J|K|L|M|N|O|P|Q|R|S|T|U|V|W|X|Y|Z
//K|E|Y|W|O|R|D|A|B|C|F|G|H|I|J|L|M|N|P|Q|S|T|U|V|X|Z
//The encrypted message substitutes each plaintext character with the encryption key character in the corresponding position.
//Return the given message encrypted against the key:
//message = "ABCHIJ"
//key = "KEYWORD"
//
//keywordCipher(key, message) ➞ "KEYABC"
//// A = K, B = E, C = Y, H = A, I = B, J = C
//Examples
//keywordCipher("keyword", "abchij") ➞ "keyabc"
//
//keywordCipher("purplepineapple", "abc") ➞ "pur"
//
//keywordCipher("mubashir", "edabit") ➞ "samucq"
//Notes
//Don't forget to remove duplicates after concatenating the string with the keyword.
//Non-alphabetic characters must be left as they are.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(keywordCipher("keyword","abc"), "key")
//Test.assertEquals(keywordCipher("keyword","xyz"), "vxz")
//Test.assertEquals(keywordCipher("keyword","aeiou"), "kobjs")
//Test.assertEquals(keywordCipher("purplepineapple","abc"), "pur")
//Test.assertEquals(keywordCipher("purplepineapple","xyz"), "xyz")
//Test.assertEquals(keywordCipher("purplepineapple","aeiou"), "pebjt")
//Test.assertEquals(keywordCipher("etaoinshrdlucmfwypvbgkjqxz","abc"), "eta")
//Test.assertEquals(keywordCipher("etaoinshrdlucmfwypvbgkjqxz","xyz"), "qxz")
//Test.assertEquals(keywordCipher("etaoinshrdlucmfwypvbgkjqxz","aeiou"), "eirfg")
//Test.assertEquals(keywordCipher("tfozcivbsjhengarudlkpwqxmy","abc"), "tfo")
//Test.assertEquals(keywordCipher("tfozcivbsjhengarudlkpwqxmy","tjuukf"), "kjpphi")
//Test.assertEquals(keywordCipher("tfozcivbsjhengarudlkpwqxmy","ajqqtb"), "tjuukf")
//Test.assertEquals(keywordCipher("tfozcivbsjhengarudlkpwqxmy","a_bc&*83"), "t_fo&*83")
//Test.assertEquals(keywordCipher("mubashir","pakistan"), "lmecpqmj")
//Test.assertEquals(keywordCipher("mubashir","edabit"), "samucq")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Bracket Logic

//tags: logic,validation

//url: https://edabit.com/challenge/edzM82cAzurBfWF3z

//Description:
//Brackets and parentheses in mathematical expressions have to conform to certain logical rules. Every opening bracket must have a closing mate somewhere further down the line. Although brackets can be nested, different types cannot overlap:
//([<x+y>+3]-1) makes sense because each set of brackets contains or is contained by another set.
//([<x+y>+3)-1] makes no sense because the parentheses and the square brackets overlap.
//Given a string expression that can contain four types of brackets: () <> [] {}, create a function that returns true if the bracket logic is valid and false if it is not.
//Examples
//bracketLogic("[<>()]") ➞ true
//
//bracketLogic("[<(>)]") ➞ false
//
//bracketLogic("[(a*b+<7-c>+9]") ➞ false
//// Opening parenthesis has no mate.
//
//bracketLogic("[{(h*i+3)-12]/4*x+2}") ➞ false
//// Square and curly brackets overlap.
//
//bracketLogic("[ab(c/d<e-f+(7*6)>)+2]") ➞ true
//Notes
//Any characters other than the brackets can be ignored.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(bracketLogic("{b}{y}{ }[x][{{(t)-}{}](t<w(^)>)-b}<[g](x{u[ ]})y>"), false)
//Test.assertEquals(bracketLogic("{f}[t[[]]<[+](w)t>u(h)(%){f}[d{e}]{c(/)}<w>][v]"), true)
//Test.assertEquals(bracketLogic("[(t)d]</{h}><<a <( )e>[*]{e{e}}<w{x[^]}>>"), false)
//Test.assertEquals(bracketLogic("{g}((-) ^>b)[^]{{*<->}(w)(u)(%)}({/}c)(%)[g{b}]<z({<< >w>c}d)[b]>"), false)
//Test.assertEquals(bracketLogic("(y)(c)(){[[ ]z] [{+}z[*]]{+}}([d]<y<e>>c)[b][b]"), true)
//Test.assertEquals(bracketLogic("((^(b))e>(<d<w>>(({a}/(g)){t</)}b(d)){[v]u})"), false)
//Test.assertEquals(bracketLogic("{([%]</>u)<{<y{v}>{<c>h}{y}f}[y]{<*>e}[^]v><[h]d>}[d]"), true)
//Test.assertEquals(bracketLogic("{a}{<(^)(b)%>[z]<->e}[{z}%]{<^>g}<[h] ({ }y[*]<v>)>{x[+]<^>}<v>[]"), true)

