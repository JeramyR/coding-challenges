

//title: Centered Hexagonal Number

//tags: formatting,numbers,strings

//url: https://edabit.com/challenge/CPYrpoJyK4nJhRkhw

//Description:
//As stated on the On-Line Encyclopedia of Integer Sequences:
//The hexagonal lattice is the familiar 2-dimensional lattice in which each point has 6 neighbors.
//A centered hexagonal number is a centered figurate number that represents a hexagon with a dot in the center and all other dots surrounding the center dot in a hexagonal lattice.
//At the end of that web page the following illustration is shown:
//Illustration of initial terms:
//.
//.                                 o o o o
//.                   o o o        o o o o o
//.         o o      o o o o      o o o o o o
//.   o    o o o    o o o o o    o o o o o o o
//.         o o      o o o o      o o o o o o
//.                   o o o        o o o o o
//.                                 o o o o
//.
//.   1      7          19             37
//.
//Write a function that takes an integer n and returns "Invalid" if n is not a centered hexagonal number or its illustration as a multiline rectangular string otherwise.
//Examples
//hexLattice(1) ➞ " o "
//// o
//
//hexLattice(7) ➞ "  o o  \n o o o \n  o o  "
////  o o
//// o o o
////  o o
//
//hexLattice(19) ➞ "   o o o   \n  o o o o  \n o o o o o \n  o o o o  \n   o o o   "
////   o o o
////  o o o o
//// o o o o o
////  o o o o
////   o o o
//
//hexLattice(21) ➞ "Invalid"
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(hexLattice(1), " o ")
//Test.assertEquals(hexLattice(2), "Invalid")
//Test.assertEquals(hexLattice(4), "Invalid")
//Test.assertEquals(hexLattice(6), "Invalid")
//Test.assertEquals(hexLattice(7), "  o o  \n o o o \n  o o  ")
//Test.assertEquals(hexLattice(10), "Invalid")
//Test.assertEquals(hexLattice(18), "Invalid")
//Test.assertEquals(hexLattice(19), "   o o o   \n  o o o o  \n o o o o o \n  o o o o  \n   o o o   ")
//Test.assertEquals(hexLattice(37), "    o o o o    \n   o o o o o   \n  o o o o o o  \n o o o o o o o \n  o o o o o o  \n   o o o o o   \n    o o o o    ")
//Test.assertEquals(hexLattice(45), "Invalid")
//Test.assertEquals(hexLattice(1387), "                      o o o o o o o o o o o o o o o o o o o o o o                      \n                     o o o o o o o o o o o o o o o o o o o o o o o                     \n                    o o o o o o o o o o o o o o o o o o o o o o o o                    \n                   o o o o o o o o o o o o o o o o o o o o o o o o o                   \n                  o o o o o o o o o o o o o o o o o o o o o o o o o o                  \n                 o o o o o o o o o o o o o o o o o o o o o o o o o o o                 \n                o o o o o o o o o o o o o o o o o o o o o o o o o o o o                \n               o o o o o o o o o o o o o o o o o o o o o o o o o o o o o               \n              o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o              \n             o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o             \n            o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o            \n           o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o           \n          o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o          \n         o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o         \n        o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o        \n       o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o       \n      o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o      \n     o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o     \n    o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o    \n   o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o   \n  o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o  \n o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o \n  o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o  \n   o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o   \n    o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o    \n     o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o     \n      o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o      \n       o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o       \n        o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o        \n         o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o         \n          o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o          \n           o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o           \n            o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o            \n             o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o             \n              o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o              \n               o o o o o o o o o o o o o o o o o o o o o o o o o o o o o               \n                o o o o o o o o o o o o o o o o o o o o o o o o o o o o                \n                 o o o o o o o o o o o o o o o o o o o o o o o o o o o                 \n                  o o o o o o o o o o o o o o o o o o o o o o o o o o                  \n                   o o o o o o o o o o o o o o o o o o o o o o o o o                   \n                    o o o o o o o o o o o o o o o o o o o o o o o o                    \n                     o o o o o o o o o o o o o o o o o o o o o o o                     \n                      o o o o o o o o o o o o o o o o o o o o o o                      ")
//Test.assertEquals(hexLattice(1500), "Invalid")
//Test.assertEquals(hexLattice(6487), "                                               o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o                                               \n                                              o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o                                              \n                                             o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o                                             \n                                            o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o                                            \n                                           o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o                                           \n                                          o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o                                          \n                                         o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o                                         \n                                        o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o                                        \n                                       o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o                                       \n                                      o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o                                      \n                                     o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o                                     \n                                    o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o                                    \n                                   o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o                                   \n                                  o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o                                  \n                                 o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o                                 \n                                o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o                                \n                               o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o                               \n                              o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o                              \n                             o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o                             \n                            o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o                            \n                           o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o                           \n                          o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o                          \n                         o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o                         \n                        o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o                        \n                       o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o                       \n                      o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o                      \n                     o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o                     \n                    o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o                    \n                   o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o                   \n                  o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o                  \n                 o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o                 \n                o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o                \n               o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o               \n              o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o              \n             o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o             \n            o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o            \n           o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o           \n          o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o          \n         o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o         \n        o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o        \n       o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o       \n      o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o      \n     o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o     \n    o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o    \n   o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o   \n  o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o  \n o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o \n  o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o  \n   o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o   \n    o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o    \n     o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o     \n      o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o      \n       o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o       \n        o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o        \n         o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o         \n          o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o          \n           o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o           \n            o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o            \n             o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o             \n              o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o              \n               o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o               \n                o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o                \n                 o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o                 \n                  o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o                  \n                   o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o                   \n                    o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o                    \n                     o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o                     \n                      o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o                      \n                       o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o                       \n                        o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o                        \n                         o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o                         \n                          o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o                          \n                           o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o                           \n                            o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o                            \n                             o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o                             \n                              o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o                              \n                               o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o                               \n                                o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o                                \n                                 o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o                                 \n                                  o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o                                  \n                                   o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o                                   \n                                    o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o                                    \n                                     o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o                                     \n                                      o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o                                      \n                                       o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o                                       \n                                        o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o                                        \n                                         o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o                                         \n                                          o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o                                          \n                                           o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o                                           \n                                            o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o                                            \n                                             o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o                                             \n                                              o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o                                              \n                                               o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o o                                               ")
//Test.assertEquals(hexLattice(7777), "Invalid")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Convert an Arrow Function to a Regular Function

//tags: formatting,regex,strings

//url: https://edabit.com/challenge/Zf5a8fNYZ6hPJeXE4

//Description:
//In JavaScript ES6 an arrow function expression is a syntactically compact alternative to a regular function expression.
//Create a function that takes a string representing a function and converts between an arrow function and a regular function
//If the input is a regular function, return an equivalent arrow function.
//If the input is a arrow function, return an equivalent regular function.
//Examples
//// Function to arrow
//
//"function () {}" ➞ "() => {}"
//
//"function name() {}" ➞ "const name = () => {}"
//
//"function name(str) { console.log(str); }" ➞ "const name = (str) => { console.log(str); }"
//// Arrow to function
//
//"() => {}" ➞ "function () {}"
//
//"const name = () => {}" ➞ "function name() {}"
//
//"let name = (str) => { console.log(str); }" ➞ "function name(str) { console.log(str); }"
//Notes
//The body of the function can be multiline.
//Be careful with spaces, sometimes they're optional.
//An arrow function can be declared using const / let / var or nothing at all. However, when converting a regular function to an arrow, always use const (unless you're dealing with an anonymous function).

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//const funcs = [
//  `function(){}`,
//  `function () {}`,
//  `function name() {}`,
//  `function name () {}`,
//  `function name() { console.log('Hello') }`,
//  `function name(str){ console.log(str); }`,
//  `function name(str, num) {console.log(str, num);}`,
//  `function name( str, num ) {
//  console.log(str, num);
//}`,
//];
//const arrowsExpected = [
//  `() => {}`,
//  `() => {}`,
//  `const name = () => {}`,
//  `const name = () => {}`,
//  `const name = () => { console.log('Hello') }`,
//  `const name = (str) => { console.log(str); }`,
//  `const name = (str, num) => {console.log(str, num);}`,
//  `const name = ( str, num ) => {
//  console.log(str, num);
//}`,
//];
//​

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Conversion of Units of Temperature

//tags: math,physics

//url: https://edabit.com/challenge/THSeSBBYKcKb6GRQe

//Description:
//Create a function that takes a temperature scale and a temperature measurement as arguments and returns an array with the conversion of such measurement to different scales.
//Name	Input	Symbol
//Celsius	cel	degC
//Fahrenheit	fah	degF
//Kelvin	kel	K
//Rankine	ran	degR
//Delisle	del	degDe
//Newton	new	degN
//Réaumur	rea	degRe
//Rømer	rom	degRo
//The resulting array should follow the order informed in the table above, and each corresponding temperature value should display two decimal digits.
//Examples
//temperature("cel", 0) ➞ ["0.00 degC", "32.00 degF", "273.15 K", "491.67 degR", "150.00 degDe", "0.00 degN", "0.00 degRe", "7.50 degRo"]
//
//temperature("fah", -202) ➞ ["-130.00 degC", "-202.00 degF", "143.15 K", "257.67 degR", "345.00 degDe", "-42.90 degN", "-104.00 degRe", "-60.75 degRo"]
//
//temperature("rom", 217.50) ➞ ["400.00 degC", "752.00 degF", "673.15 K", "1211.67 degR", "-450.00 degDe", "132.00 degN", "320.00 degRe", "217.50 degRo"]
//Notes
//Check the Resources tab to understand how to convert the measurement using different scales.
//All measurements will be valid temperatures according to the scale.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(temperature("cel", 400), ["400.00 degC", "752.00 degF", "673.15 K", "1211.67 degR", "-450.00 degDe", "132.00 degN", "320.00 degRe", "217.50 degRo"])
//Test.assertSimilar(temperature("fah", 752), ["400.00 degC", "752.00 degF", "673.15 K", "1211.67 degR", "-450.00 degDe", "132.00 degN", "320.00 degRe", "217.50 degRo"])
//Test.assertSimilar(temperature("kel", 673.15), ["400.00 degC", "752.00 degF", "673.15 K", "1211.67 degR", "-450.00 degDe", "132.00 degN", "320.00 degRe", "217.50 degRo"])
//Test.assertSimilar(temperature("ran", 1211.67), ["400.00 degC", "752.00 degF", "673.15 K", "1211.67 degR", "-450.00 degDe", "132.00 degN", "320.00 degRe", "217.50 degRo"])
//Test.assertSimilar(temperature("del", -450), ["400.00 degC", "752.00 degF", "673.15 K", "1211.67 degR", "-450.00 degDe", "132.00 degN", "320.00 degRe", "217.50 degRo"])
//Test.assertSimilar(temperature("new", 132), ["400.00 degC", "752.00 degF", "673.15 K", "1211.67 degR", "-450.00 degDe", "132.00 degN", "320.00 degRe", "217.50 degRo"])
//Test.assertSimilar(temperature("rea", 320), ["400.00 degC", "752.00 degF", "673.15 K", "1211.67 degR", "-450.00 degDe", "132.00 degN", "320.00 degRe", "217.50 degRo"])
//Test.assertSimilar(temperature("rom", 217.50), ["400.00 degC", "752.00 degF", "673.15 K", "1211.67 degR", "-450.00 degDe", "132.00 degN", "320.00 degRe", "217.50 degRo"])
//Test.assertSimilar(temperature("cel", 0), ["0.00 degC", "32.00 degF", "273.15 K", "491.67 degR", "150.00 degDe", "0.00 degN", "0.00 degRe", "7.50 degRo"])
//Test.assertSimilar(temperature("fah", -202), ["-130.00 degC", "-202.00 degF", "143.15 K", "257.67 degR", "345.00 degDe", "-42.90 degN", "-104.00 degRe", "-60.75 degRo"])
//Test.assertSimilar(temperature("kel", 3.15), ["-270.00 degC", "-454.00 degF", "3.15 K", "5.67 degR", "555.00 degDe", "-89.10 degN", "-216.00 degRe", "-134.25 degRo"])
//Test.assertSimilar(temperature("ran", 851.67), ["200.00 degC", "392.00 degF", "473.15 K", "851.67 degR", "-150.00 degDe", "66.00 degN", "160.00 degRe", "112.50 degRo"])
//Test.assertSimilar(temperature("del", 525), ["-250.00 degC", "-418.00 degF", "23.15 K", "41.67 degR", "525.00 degDe", "-82.50 degN", "-200.00 degRe", "-123.75 degRo"])
//Test.assertSimilar(temperature("rea", 0), ["0.00 degC", "32.00 degF", "273.15 K", "491.67 degR", "150.00 degDe", "0.00 degN", "0.00 degRe", "7.50 degRo"])
//Test.assertSimilar(temperature("new", -33), ["-100.00 degC", "-148.00 degF", "173.15 K", "311.67 degR", "300.00 degDe", "-33.00 degN", "-80.00 degRe", "-45.00 degRo"])

