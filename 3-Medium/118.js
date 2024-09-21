

//title: Making a Countdown

//tags: formatting,numbers,strings

//url: https://edabit.com/challenge/vkJqNZqK94Hjsr4pi

//Description:
//Create a function where given the number n to count down from, and some words str, return a countdown sequence as a string leading up to the words at the end.
//Put a full stop after each number and uppercase and add an exclamation mark to the word. See the examples below for clarification!
//Examples
//countdown(10, "Blast Off") ➞ "10. 9. 8. 7. 6. 5. 4. 3. 2. 1. BLAST OFF!"
//
//countdown(3, "go") ➞ "3. 2. 1. GO!"
//
//countdown(5, "FIRE") ➞ "5. 4. 3. 2. 1. FIRE!"
//Notes
//n will be a number greater than 0.
//str won't already include an exclamation mark.
//Don't include 0 in the countdown.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(countdown(10, "Blast Off"), "10. 9. 8. 7. 6. 5. 4. 3. 2. 1. BLAST OFF!")
//Test.assertEquals(countdown(3, "go"), "3. 2. 1. GO!")
//Test.assertEquals(countdown(5, "FIRE"), "5. 4. 3. 2. 1. FIRE!")
//Test.assertEquals(countdown(12, "watch out"), "12. 11. 10. 9. 8. 7. 6. 5. 4. 3. 2. 1. WATCH OUT!")
//Test.assertEquals(countdown(7, "fire"), "7. 6. 5. 4. 3. 2. 1. FIRE!")
//Test.assertEquals(countdown(16, "shoot"), "16. 15. 14. 13. 12. 11. 10. 9. 8. 7. 6. 5. 4. 3. 2. 1. SHOOT!")
//Test.assertEquals(countdown(28, "fire"), "28. 27. 26. 25. 24. 23. 22. 21. 20. 19. 18. 17. 16. 15. 14. 13. 12. 11. 10. 9. 8. 7. 6. 5. 4. 3. 2. 1. FIRE!")
//Test.assertEquals(countdown(14, "watch out"), "14. 13. 12. 11. 10. 9. 8. 7. 6. 5. 4. 3. 2. 1. WATCH OUT!")
//Test.assertEquals(countdown(29, "take down"), "29. 28. 27. 26. 25. 24. 23. 22. 21. 20. 19. 18. 17. 16. 15. 14. 13. 12. 11. 10. 9. 8. 7. 6. 5. 4. 3. 2. 1. TAKE DOWN!")
//Test.assertEquals(countdown(8, "boom"), "8. 7. 6. 5. 4. 3. 2. 1. BOOM!")
//Test.assertEquals(countdown(24, "blast off"), "24. 23. 22. 21. 20. 19. 18. 17. 16. 15. 14. 13. 12. 11. 10. 9. 8. 7. 6. 5. 4. 3. 2. 1. BLAST OFF!")
//Test.assertEquals(countdown(3, "boom"), "3. 2. 1. BOOM!")
//Test.assertEquals(countdown(16, "watch out"), "16. 15. 14. 13. 12. 11. 10. 9. 8. 7. 6. 5. 4. 3. 2. 1. WATCH OUT!")
//Test.assertEquals(countdown(16, "blast off"), "16. 15. 14. 13. 12. 11. 10. 9. 8. 7. 6. 5. 4. 3. 2. 1. BLAST OFF!")
//Test.assertEquals(countdown(24, "boom"), "24. 23. 22. 21. 20. 19. 18. 17. 16. 15. 14. 13. 12. 11. 10. 9. 8. 7. 6. 5. 4. 3. 2. 1. BOOM!")
//Test.assertEquals(countdown(2, "watch out"), "2. 1. WATCH OUT!")
//Test.assertEquals(countdown(1, "shoot"), "1. SHOOT!")
//Test.assertEquals(countdown(16, "go"), "16. 15. 14. 13. 12. 11. 10. 9. 8. 7. 6. 5. 4. 3. 2. 1. GO!")
//Test.assertEquals(countdown(26, "watch out"), "26. 25. 24. 23. 22. 21. 20. 19. 18. 17. 16. 15. 14. 13. 12. 11. 10. 9. 8. 7. 6. 5. 4. 3. 2. 1. WATCH OUT!")
//Test.assertEquals(countdown(5, "blast off"), "5. 4. 3. 2. 1. BLAST OFF!")
//Test.assertEquals(countdown(26, "go"), "26. 25. 24. 23. 22. 21. 20. 19. 18. 17. 16. 15. 14. 13. 12. 11. 10. 9. 8. 7. 6. 5. 4. 3. 2. 1. GO!")
//Test.assertEquals(countdown(29, "go"), "29. 28. 27. 26. 25. 24. 23. 22. 21. 20. 19. 18. 17. 16. 15. 14. 13. 12. 11. 10. 9. 8. 7. 6. 5. 4. 3. 2. 1. GO!")
//Test.assertEquals(countdown(26, "shoot"), "26. 25. 24. 23. 22. 21. 20. 19. 18. 17. 16. 15. 14. 13. 12. 11. 10. 9. 8. 7. 6. 5. 4. 3. 2. 1. SHOOT!")
//Test.assertEquals(countdown(25, "watch out"), "25. 24. 23. 22. 21. 20. 19. 18. 17. 16. 15. 14. 13. 12. 11. 10. 9. 8. 7. 6. 5. 4. 3. 2. 1. WATCH OUT!")
//Test.assertEquals(countdown(16, "blast off"), "16. 15. 14. 13. 12. 11. 10. 9. 8. 7. 6. 5. 4. 3. 2. 1. BLAST OFF!")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Stalactites or Stalagmites?

//tags: arrays,validation

//url: https://edabit.com/challenge/wGwXLHQCYXnjJ9DW9

//Description:
//Stalactites hang from the ceiling of a cave while stalagmites grow from the floor.
//Create a function that determines whether the input represents "stalactites" or "stalagmites". If it represents both, return "both". Input will be a 2D array, with 1 representing a piece of rock, and 0 representing air space.
//Examples
//mineralFormation([
//  [0, 1, 0, 1],
//  [0, 1, 0, 1],
//  [0, 0, 0, 1],
//  [0, 0, 0, 0]
//]) ➞ "stalactites"
//
//mineralFormation([
//  [0, 0, 0, 0],
//  [0, 1, 0, 1],
//  [0, 1, 1, 1],
//  [0, 1, 1, 1]
//]) ➞ "stalagmites"
//
//mineralFormation([
//  [1, 0, 1, 0],
//  [1, 1, 0, 1],
//  [0, 1, 1, 1],
//  [0, 1, 1, 1]
//]) ➞ "both"
//Notes
//There won't be any examples where both stalactites and stalagmites meet (because those are called pillars).
//There won't be any example of neither stalactites nor stalagmites.
//In other words, if the first array has 1s, return "stalactites". If the last array has 1s, return "stalagmites". If both have them, return "both".

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(mineralFormation([
//[0, 1, 0, 1],
//[0, 1, 0, 1],
//[0, 0, 0, 1],
//[0, 0, 0, 0]
//]), 'stalactites')
//​
//Test.assertEquals(mineralFormation([
//[0, 0, 0, 0],
//[0, 1, 0, 1],
//[0, 1, 1, 1],
//[0, 1, 1, 1]
//]), 'stalagmites')
//​
//Test.assertEquals(mineralFormation([
//[1, 0, 1, 0],
//[1, 1, 0, 1],
//[0, 1, 1, 1],
//[0, 1, 1, 1]
//]), 'both')
//​
//Test.assertEquals(mineralFormation([
//[1],
//[1],
//[0],

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Hidden Calculator Words

//tags: loops,numbers,strings

//url: https://edabit.com/challenge/xXb4f5TuXuT7dsS3Y

//Description:
//At school, we used to play with our calculators and send each other secret messages. The trick was to enter a special number and turn the calculator upside-down. LOL ... I mean 707!
//Given a number, create a function that converts it into a word by turning the integer 180 degrees around.
//Examples
//turnCalc(707) ➞ "LOL"
//
//turnCalc(5508) ➞ "BOSS"
//
//turnCalc(3045) ➞ "SHOE"
//number	letter
//1	I
//2	Z
//3	E
//4	H
//5	S
//6	G
//7	L
//8	B
//9	-
//0	O
//Notes
//Convert to uppercase words.
//Ignore dots.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(turnCalc(0.7734), "HELLO", "convert the numbers into corresponding letters.")
//Test.assertEquals(turnCalc(3045), "SHOE", "convert the numbers into corresponding letters.")
//Test.assertEquals(turnCalc(5508), "BOSS")
//Test.assertEquals(turnCalc(707), "LOL")
//Test.assertEquals(turnCalc(57108), "BOILS")
//Test.assertEquals(turnCalc(3781637), "LEGIBLE")
//Test.assertEquals(turnCalc(35380), "OBESE")
//Test.assertEquals(turnCalc(461375), "SLEIGH")
//Test.assertEquals(turnCalc(5355378), "BLESSES")
//Test.assertEquals(turnCalc(38076), "GLOBE")
//Test.assertEquals(turnCalc(35006), "GOOSE")
//Test.assertEquals(turnCalc(8075), "SLOB")

