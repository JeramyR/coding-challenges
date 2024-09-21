

//title: Spiral Matrix Printing

//tags: arrays,conditions,loops,math

//url: https://edabit.com/challenge/3FBhunrAajkDC4XCb

//Description:
//Write a function that accepts an integer N and returns an N * N spiral matrix.
//Examples
//matrix(2) ➞ [
//  [1, 2],
//  [4, 3]
//]
//
//matrix(3) ➞ [
//  [1, 2, 3],
//  [8  ,9, 4],
//  [7, 6, 5]
//]
//
//matrix(4) ➞ [
//  [1,   2,  3, 4],
//  [12, 13, 14, 5],
//  [11, 16, 15, 6],
//  [10,  9,  8, 7]
//]
//Notes
//In the examples, traverse the matrix in the clock-wise direction to observe the pattern (spiral).

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(matrix(3), [[1, 2, 3], [8, 9, 4], [7, 6, 5]])
//Test.assertSimilar(matrix(2), [[1, 2], [4, 3]])
//Test.assertSimilar(matrix(4), [[1, 2, 3, 4], [12, 13, 14, 5], [11, 16, 15, 6], [10, 9, 8, 7]])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Highlight Formula like Excel

//tags: conditions,formatting,loops,regex

//url: https://edabit.com/challenge/bmrEKndGw8SiDqAvm

//Description:
//You need to highlight a typed excel formula for your website, to do this u need to create a function named "hightlightFormula".
//Explanations :
//hightlightFormula have only one string as parameter with simple text inside.
//hightlightFormula return a html string created from first parameter string.
//A formula should begin with "=" or there is no colors.
//Excel add colors on each cell names and same colors to same ranged
//An excel cell name can look like this : A1, $A1,$A$1,A$1
//An excel cell name can be ranged with this : A1:A1 or A1:A3
//An excel cell row syntax is : $1:$ or 1:3
//An excel cell col syntax is: $A:$B or A:B
//As exemple :
//"=A1;A1:$A$1" <= A1 and A1:$A$1 should have same color.
//A cell name can have one or multiple signs (+ and -) without syntax error. Exemple :
//''+++---A1" or "-A1" or "+A1" 
//Each new detected cells should have a new color (colors are on notes), when all color was used, we start again from first color.
//Cell name separator is ";" .
//To Avoid syntax error about number, they should have only a sign with a cellname and not a separator (execpt if number is first argument of formula or if number is in a function). Exemple :
//=A1+12+A12
//=12;A1+A12+1+B12
//=SUM(A1;2)+A2
//Formula function syntax is "MYFUNCTION(param1;param2)" and should count as syntax error without parameters
//Formula string syntax is "exemple" (quotes included), to avoid syntax error a string can placed only in function as parameter. Exemple :
//SUM(1;"5")
//If formula's cell name, sign, separator or function syntax screwed up, last cells from error keep colors but nexts don't get any color, exemple :
//"=A1;$B$;A2" <= '=<span style="color:#326ac7">A1</span>;$B$;A2'
//"=A1;BBBBB;A2" <= '=<span style="color:#326ac7">A1</span>;BBBBB;A2'
//"=A1+/B1;A2" <= '=<span style="color:#326ac7">A1</span>+/B1;A2'
//"=A1;;B1;A2" <= '=<span style="color:#326ac7">A1</span>;;B1;A2'
//"=A1;SUM();A2" <= '=<span style="color:#326ac7">A1</span>;SUM();A2'
//Examples
//highLightFormula("=A1+1,2+A2") ➞ '=<span style="color:#326ac7">A1</span>+1,2+<span style="color:#c0353e">A2</span>'
//
//highLightFormula("=$A1+($A$2+A3+A4)+IF(A5>=A6;A7)+A8") ➞ '=<span style="color:#326ac7">$A1</span>+(<span style="color:#c0353e">$A$2</span>+<span style="color:#8157b7">A3</span>+<span style="color:#007c20">A4</span>)+IF(<span style="color:#b03e84">A5</span>>=<span style="color:#b64900">A6</span>;<span style="color:#267392">A7</span>)+<span style="color:#326ac7">A8</span>'
//
//highLightFormula("=$A1+A1+$A$1+/A2") ➞ '=<span style="color:#326ac7">$A1</span>+<span style="color:#326ac7">A1</span>+<span style="color:#326ac7">$A$1</span>+/A2'
//Notes
//The only allowed signs syntax is : "+" ; "-" ; "+-" ; "-+" ; "/" ; "/+" ; "/-" ; "+" ; "-" ; "<" ; ">" ; "<=" ; ">=" ; "<>"
//Other allowed symbols are : ";" ; "(" ; ")" ; ":" ; "=" (All others are syntax error)
//Sign <> don't do syntax error (it seems : not equal)
//Cells colors are : '#326ac7', '#c0353e', '#8157b7', '#007c20', '#b03e84', '#b64900', '#267392' (in same order)
//Colored html span should be like this: <span style="color:{rightColor}">{rightCellName}</span>
//The final result (Error like #VALUE! etc..) of formula is not important only hightlighting is.
//Parenthesis color will be ignored in this challenge.
//Letters case isn't important.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//var genRandomChar = function(){return String.fromCharCode(Math.floor(Math.random()*(126-32)+32))}
//Test.assertEquals(highLightFormula("=A1+1,2+A2"), '=<span style="color:#326ac7">A1</span>+1,2+<span style="color:#c0353e">A2</span>');
//Test.assertEquals(highLightFormula("=$A1+($A$2+A3+A4)+IF(A5>=A6;A7)+A8"), '=<span style="color:#326ac7">$A1</span>+(<span style="color:#c0353e">$A$2</span>+<span style="color:#8157b7">A3</span>+<span style="color:#007c20">A4</span>)+IF(<span style="color:#b03e84">A5</span>>=<span style="color:#b64900">A6</span>;<span style="color:#267392">A7</span>)+<span style="color:#326ac7">A8</span>');
//Test.assertEquals(highLightFormula("=$A1+A1+$A$1+/A2"), '=<span style="color:#326ac7">$A1</span>+<span style="color:#326ac7">A1</span>+<span style="color:#326ac7">$A$1</span>+/A2');
//Test.assertEquals(highLightFormula("=B1+B2*1/A1-C6"), '=<span style="color:#326ac7">B1</span>+<span style="color:#c0353e">B2</span>*1/<span style="color:#8157b7">A1</span>-<span style="color:#007c20">C6</span>');
//Test.assertEquals(highLightFormula("=B1*-B1"), '=<span style="color:#326ac7">B1</span>*-<span style="color:#326ac7">B1</span>');
//Test.assertEquals(highLightFormula("=B1/-B1"), '=<span style="color:#326ac7">B1</span>/-<span style="color:#326ac7">B1</span>');
//Test.assertEquals(highLightFormula("=B1++++-----B1"), '=<span style="color:#326ac7">B1</span>++++-----<span style="color:#326ac7">B1</span>');
//Test.assertEquals(highLightFormula("=B1----+++++B1"), '=<span style="color:#326ac7">B1</span>----+++++<span style="color:#326ac7">B1</span>');
//Test.assertEquals(highLightFormula("=A1;A2+1-A3;5;6;AMB521"), '=<span style="color:#326ac7">A1</span>;<span style="color:#c0353e">A2</span>+1-<span style="color:#8157b7">A3</span>;5;6;AMB521');
//Test.assertEquals(highLightFormula("=A1;A2+1-A3+5;6;AMB521"), '=<span style="color:#326ac7">A1</span>;<span style="color:#c0353e">A2</span>+1-<span style="color:#8157b7">A3</span>+5;6;AMB521');
//Test.assertEquals(highLightFormula("=A1;A2+1-A3+5+6;AMB521"), '=<span style="color:#326ac7">A1</span>;<span style="color:#c0353e">A2</span>+1-<span style="color:#8157b7">A3</span>+5+6;<span style="color:#007c20">AMB521</span>');
//Test.assertEquals(highLightFormula("=IF(A1>=B2;A7)++++++++SUM(A1;2)+A1*C2"), '=IF(<span style="color:#326ac7">A1</span>>=<span style="color:#c0353e">B2</span>;<span style="color:#8157b7">A7</span>)++++++++SUM(<span style="color:#326ac7">A1</span>;2)+<span style="color:#326ac7">A1</span>*<span style="color:#007c20">C2</span>');
//Test.assertEquals(highLightFormula("A1+A2+B3+A1"), "A1+A2+B3+A1");
//Test.assertEquals(highLightFormula("=SUM(--(FREQUENCY(B3:B12,B3:B12)>0))+A2"), '=SUM(--(FREQUENCY(<span style="color:#326ac7">B3:B12</span>,B3:B12)>0))+A2');
//Test.assertEquals(highLightFormula("=SUM(--(FREQUENCY(B3:B12;B3:B12)>0))+A2"), '=SUM(--(FREQUENCY(<span style="color:#326ac7">B3:B12</span>;<span style="color:#326ac7">B3:B12</span>)>0))+<span style="color:#c0353e">A2</span>');
//Test.assertEquals(highLightFormula('=MATCH(2,1/(B4:B10<>"")+A2'), '=MATCH(2,1/(<span style="color:#326ac7">B4:B10</span><>"")+<span style="color:#c0353e">A2</span>');
//Test.assertEquals(highLightFormula("=$1:$3;A1;$b:$A;A3"), '=<span style="color:#326ac7">$1:$3</span>;<span style="color:#c0353e">A1</span>;<span style="color:#8157b7">$b:$A</span>;<span style="color:#007c20">A3</span>');
//Test.assertEquals(highLightFormula("=MAX(IF(MOD(COLUMN(B5:K5)-COLUMN(B5)+1;L5)=0;B5:K5))"), '=MAX(IF(MOD(COLUMN(<span style="color:#326ac7">B5:K5</span>)-COLUMN(<span style="color:#c0353e">B5</span>)+1;<span style="color:#8157b7">L5</span>)=0;<span style="color:#326ac7">B5:K5</span>))');
//Test.assertEquals(highLightFormula("=A1(B2)+B3;;B4-B8"), '=<span style="color:#326ac7">A1</span>(<span style="color:#c0353e">B2</span>)+<span style="color:#8157b7">B3</span>;;B4-B8');
//Test.assertEquals(highLightFormula("=A1(B2)+B3=>B1"), '=<span style="color:#326ac7">A1</span>(<span style="color:#c0353e">B2</span>)+<span style="color:#8157b7">B3</span>=>B1');
//Test.assertEquals(highLightFormula("=A1(B2)+B3>=B1"), '=<span style="color:#326ac7">A1</span>(<span style="color:#c0353e">B2</span>)+<span style="color:#8157b7">B3</span>>=<span style="color:#007c20">B1</span>');
//Test.assertEquals(highLightFormula("=1:3;A1;b:a;aa;A3"), '=<span style="color:#326ac7">1:3</span>;<span style="color:#c0353e">A1</span>;<span style="color:#8157b7">b:a</span>;aa;A3')
//Test.assertEquals(highLightFormula("=1:3;A1;b:a+12;A3"), '=<span style="color:#326ac7">1:3</span>;<span style="color:#c0353e">A1</span>;<span style="color:#8157b7">b:a</span>+12;<span style="color:#007c20">A3</span>')
//Test.assertEquals(highLightFormula("=1:3;A1;b:a;12;A3"), '=<span style="color:#326ac7">1:3</span>;<span style="color:#c0353e">A1</span>;<span style="color:#8157b7">b:a</span>;12;A3')

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: (a+b)^n Formula

//tags: algebra,logic,math,strings

//url: https://edabit.com/challenge/6f5xmmKNYrQkyQRoa

//Description:
//Create a function that takes a integer number n and returns the formula for (a+b)^n as a string.
//Examples
//formula(0) ➞ "1"
//
//formula(1) ➞ "a+b"
//
//formula(2) ➞ "a^2+2ab+b^2"
//
//formula(-2) ➞ "1/(a^2+2ab+b^2)"
//
//formula(3) ➞ "a^3+3a^2b+3ab^2+b^3"
//
//formula(5) ➞ "a^5+5a^4b+10a^3b^2+10a^2b^3+5ab^4+b^5"
//Notes
//Don't put the following in your string:
//spaces
//*
//^1
//a^0
//b^0

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(formula(0), "1")
//Test.assertEquals(formula(2), "a^2+2ab+b^2")
//Test.assertEquals(formula(3), "a^3+3a^2b+3ab^2+b^3")
//Test.assertEquals(formula(5), "a^5+5a^4b+10a^3b^2+10a^2b^3+5ab^4+b^5")
//Test.assertEquals(formula(-1), "1/(a+b)")
//Test.assertEquals(formula(-2), "1/(a^2+2ab+b^2)")
//Test.assertEquals(formula(-4), "1/(a^4+4a^3b+6a^2b^2+4ab^3+b^4)")
//Test.assertEquals(formula(7), "a^7+7a^6b+21a^5b^2+35a^4b^3+35a^3b^4+21a^2b^5+7ab^6+b^7")
//Test.assertEquals(formula(13), "a^13+13a^12b+78a^11b^2+286a^10b^3+715a^9b^4+1287a^8b^5+1716a^7b^6+1716a^6b^7+1287a^5b^8+715a^4b^9+286a^3b^10+78a^2b^11+13ab^12+b^13")
//Test.assertEquals(formula(17), "a^17+17a^16b+136a^15b^2+680a^14b^3+2380a^13b^4+6188a^12b^5+12376a^11b^6+19448a^10b^7+24310a^9b^8+24310a^8b^9+19448a^7b^10+12376a^6b^11+6188a^5b^12+2380a^4b^13+680a^3b^14+136a^2b^15+17ab^16+b^17")
//Test.assertEquals(formula(19), "a^19+19a^18b+171a^17b^2+969a^16b^3+3876a^15b^4+11628a^14b^5+27132a^13b^6+50388a^12b^7+75582a^11b^8+92378a^10b^9+92378a^9b^10+75582a^8b^11+50388a^7b^12+27132a^6b^13+11628a^5b^14+3876a^4b^15+969a^3b^16+171a^2b^17+19ab^18+b^19")
//Test.assertEquals(formula(-23), "1/(a^23+23a^22b+253a^21b^2+1771a^20b^3+8855a^19b^4+33649a^18b^5+100947a^17b^6+245157a^16b^7+490314a^15b^8+817190a^14b^9+1144066a^13b^10+1352078a^12b^11+1352078a^11b^12+1144066a^10b^13+817190a^9b^14+490314a^8b^15+245157a^7b^16+100947a^6b^17+33649a^5b^18+8855a^4b^19+1771a^3b^20+253a^2b^21+23ab^22+b^23)")
//Test.assertEquals(formula(27), "a^27+27a^26b+351a^25b^2+2925a^24b^3+17550a^23b^4+80730a^22b^5+296010a^21b^6+888030a^20b^7+2220075a^19b^8+4686825a^18b^9+8436285a^17b^10+13037895a^16b^11+17383860a^15b^12+20058300a^14b^13+20058300a^13b^14+17383860a^12b^15+13037895a^11b^16+8436285a^10b^17+4686825a^9b^18+2220075a^8b^19+888030a^7b^20+296010a^6b^21+80730a^5b^22+17550a^4b^23+2925a^3b^24+351a^2b^25+27ab^26+b^27")

