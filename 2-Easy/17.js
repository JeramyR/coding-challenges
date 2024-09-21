

//title: Find the Bomb

//tags: language_fundamentals,regex,strings

//url: https://edabit.com/challenge/r4hycBjiBNMs6AAjq

//Description:
//Create a function that finds the word "bomb" in the given string (not case sensitive). If found, return "Duck!!!", otherwise return "There is no bomb, relax.".
//Examples
//bomb("There is a bomb.") ➞ "Duck!!!"
//
//bomb("Hey, did you think there is a bomb?") ➞ "Duck!!!"
//
//bomb("This goes boom!!!") ➞ "There is no bomb, relax."
//Notes
//"bomb" may appear in different cases (i.e. uppercase, lowercase, mixed).

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(bomb("There is a bomb."), "Duck!!!")
//Test.assertEquals(bomb("Hey, did you find it?"), "There is no bomb, relax.")
//Test.assertEquals(bomb("Hey, did you think ther is a bomb?"), "Duck!!!")
//Test.assertEquals(bomb("This goes boom!!!"), "There is no bomb, relax.")
//Test.assertEquals(bomb("Hey, did you find the BoMb?"), "Duck!!!")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Return the Factorial

//tags: algebra,math,numbers,recursion

//url: https://edabit.com/challenge/GW5kYFCvGWDZ6TRxd

//Description:
//Create a function that takes an integer and returns the factorial of that integer. That is, the integer multiplied by all positive lower integers.
//Examples
//factorial(3) ➞ 6
//
//factorial(5) ➞ 120
//
//factorial(13) ➞ 6227020800
//Notes
//Assume all inputs are greater than or equal to 0.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(factorial(2), 2)
//Test.assertEquals(factorial(6), 720)
//Test.assertEquals(factorial(3), 6)
//Test.assertEquals(factorial(12), 479001600)
//Test.assertEquals(factorial(5), 120)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Remove Every Vowel from a String

//tags: formatting,regex,strings

//url: https://edabit.com/challenge/DbLp2kHgwQbridSSy

//Description:
//Create a function that takes a string and returns a new string with all vowels removed.
//Examples
//removeVowels("I have never seen a thin person drinking Diet Coke.")
//➞ " hv nvr sn  thn prsn drnkng Dt Ck."
//
//removeVowels("We're gonna build a wall!")
//➞ "W'r gnn bld  wll!"
//
//removeVowels("Happy Thanksgiving to all--even the haters and losers!")
//➞ "Hppy Thnksgvng t ll--vn th htrs nd lsrs!"
//Notes
//"y" is not considered a vowel.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(removeVowels("If Obama resigns from office NOW, thereby doing a great service to the country—I will give him free lifetime golf at any one of my courses!"), "f bm rsgns frm ffc NW, thrby dng  grt srvc t th cntry— wll gv hm fr lftm glf t ny n f my crss!")
//Test.assertEquals(removeVowels("This election is a total sham and a travesty. We are not a democracy!"), "Ths lctn s  ttl shm nd  trvsty. W r nt  dmcrcy!")
//Test.assertEquals(removeVowels("I have never seen a thin person drinking Diet Coke."), " hv nvr sn  thn prsn drnkng Dt Ck.")
//Test.assertEquals(removeVowels("Everybody wants me to talk about Robert Pattinson and not Brian Williams—I guess people just don’t care about Brian!"), "vrybdy wnts m t tlk bt Rbrt Pttnsn nd nt Brn Wllms— gss ppl jst dn’t cr bt Brn!")
//Test.assertEquals(removeVowels("Katy, what the hell were you thinking when you married loser Russell Brand. There is a guy who has got nothing going, a waste!"), "Kty, wht th hll wr y thnkng whn y mrrd lsr Rssll Brnd. Thr s  gy wh hs gt nthng gng,  wst!")
//Test.assertEquals(removeVowels("Windmills are the greatest threat in the US to both bald and golden eagles. Media claims fictional ‘global warming’ is worse."), "Wndmlls r th grtst thrt n th S t bth bld nd gldn gls. Md clms fctnl ‘glbl wrmng’ s wrs.")
//Test.assertEquals(removeVowels("Sorry losers and haters, but my I.Q. is one of the highest -and you all know it! Please don’t feel so stupid or insecure,it’s not your fault"), "Srry lsrs nd htrs, bt my .Q. s n f th hghst -nd y ll knw t! Pls dn’t fl s stpd r nscr,t’s nt yr flt")
//Test.assertEquals(removeVowels("Happy Thanksgiving to all--even the haters and losers!"), "Hppy Thnksgvng t ll--vn th htrs nd lsrs!")
//Test.assertEquals(removeVowels("Watch Kasich squirm --- if he is not truthful in his negative ads I will sue him just for fun!"), "Wtch Ksch sqrm --- f h s nt trthfl n hs ngtv ds  wll s hm jst fr fn!")
//Test.assertEquals(removeVowels("Obama is, without question, the WORST EVER president. I predict he will now do something really bad and totally stupid to show manhood!"), "bm s, wtht qstn, th WRST VR prsdnt.  prdct h wll nw d smthng rlly bd nd ttlly stpd t shw mnhd!")

