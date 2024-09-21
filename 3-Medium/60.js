

//title: Compound Interest

//tags: algebra,math

//url: https://edabit.com/challenge/2GmmGPrktkTzTthdB

//Description:
//Suppose that you invest $10,000 for 10 years at an interest rate of 6% compounded monthly. What will be the value of your investment at the end of the 10 year period?
//Create a function that accepts the principal p, the term in years t, the interest rate r, and the number of compounding periods per year n. The function returns the value at the end of term rounded to the nearest cent.
//For the example above:
//compoundInterest(10000, 10, 0.06, 12) ➞ 18193.97
//Note that the interest rate is given as a decimal and n=12 because with monthly compounding there are 12 periods per year. Compounding can also be done annually, quarterly, weekly or daily.
//Examples
//compoundInterest(100, 1, 0.05, 1) ➞ 105.0
//
//compoundInterest(3500, 15, 0.1, 4) ➞ 15399.26
//
//compoundInterest(100000, 20, 0.15, 365) ➞ 2007316.26
//Notes
//See the Resources tab for the interest formula and more information.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(compoundInterest(100, 1, 0.05, 1), 105.0)
//Test.assertEquals(compoundInterest(3500, 15, 0.1, 4), 15399.26)
//Test.assertEquals(compoundInterest(100000, 20, 0.15, 365), 2007316.26)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Transcribe to mRNA

//tags: algorithms,conditions,language_fundamentals,strings

//url: https://edabit.com/challenge/WxiJviEJGK52AFps3

//Description:
//Transcribe the given DNA strand into corresponding mRNA - a type of RNA, that will be formed from DNA after transcription. DNA has the bases A, T, G and C, while RNA converts to U, A, C and G respectively.
//Examples
//dnaToRna("ATTAGCGCGATATACGCGTAC") ➞ "UAAUCGCGCUAUAUGCGCAUG"
//
//dnaToRna("CGATATA") ➞ "GCUAUAU"
//
//dnaToRna("GTCATACGACGTA") ➞ "CAGUAUGCUGCAU"
//Notes
//Transcription is the process of making complementary strand.
//A, T, G and C in DNA converts to U, A, C and G respectively in mRNA.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(dnaToRna("GCGTAC"), "CGCAUG")
//Test.assertEquals(dnaToRna("ATTAGCGCGATATACGCGTAC"), "UAAUCGCGCUAUAUGCGCAUG")
//Test.assertEquals(dnaToRna("CAGTATGCTGCAT"), "GUCAUACGACGUA")
//Test.assertEquals(dnaToRna("CGATATA"), "GCUAUAU")
//Test.assertEquals(dnaToRna("GCAGCTACA"), "CGUCGAUGU")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Back to Home?

//tags: arrays,logic,strings,validation

//url: https://edabit.com/challenge/MQvP7E5sNRswScHpn

//Description:
//Mubashir has started his journey from home. Given a string of directions (N=North, W=West, S=South, E=East), he will walk for one minute in each direction. Determine whether a set of directions will lead him back to the starting position or not.
//Examples
//backToHome("EEWE") ➞ false
//
//backToHome("NENESSWW") ➞ true
//
//backToHome("NEESSW") ➞ false
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(backToHome("NNNN"), false)
//Test.assertEquals(backToHome("NENESSWW"), true)
//Test.assertEquals(backToHome("NEESSW"), false)
//Test.assertEquals(backToHome("EEWE"), false)
//Test.assertEquals(backToHome("NNSSEEEWWWEW"), true)
//Test.assertEquals(backToHome("NNNNWW"), false)

