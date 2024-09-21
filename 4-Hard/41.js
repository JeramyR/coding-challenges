

//title: Pokemon Damage Calculator

//tags: conditions,games,logic,math

//url: https://edabit.com/challenge/3hgkBd68EyYQF9YxG

//Description:
//It's a Pokemon battle! Your task is to calculate the damage that a particular move would do using the following formula (not the actual one from the game):
//damage = 50 * (attack / defense) * effectiveness
//attack = your attack power
//defense = the opponent's defense
//effectiveness = the effectiveness of the attack based on the matchup (see explanation below)
//Effectiveness:
//Attacks can be super effective, neutral, or not very effective depending on the matchup. For example, water would be super effective against fire, but not very effective against grass.
//Super effective: 2x damage
//Neutral: 1x damage
//Not very effective: 0.5x damage
//To prevent this challenge from being tedious, you'll only be dealing with four types: fire, water, grass, and electric. Here is the effectiveness of each matchup:
//fire > grass
//fire < water
//fire = electric
//water < grass
//water < electric
//grass = electric
//The function you must implement takes in:
//your type
//the opponent's type
//your attack power
//the opponent's defense
//Examples
//calculateDamage("fire", "water", 100, 100) ➞ 25
//
//calculateDamage("grass", "fire", 35, 5) ➞ 175
//
//calculateDamage("electric", "fire", 100, 100) ➞ 50
//Notes
//Any type against itself is not very effective. Also, assume that the relationships between different types are symmetric (if A is super effective against B, then B is not very effective against A).

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(calculateDamage("fire", "water", 100, 100), 25)
//Test.assertEquals(calculateDamage("grass", "water", 100, 100), 100)
//Test.assertEquals(calculateDamage("electric", "fire", 100, 100), 50)
//Test.assertEquals(calculateDamage("grass", "electric", 57, 19), 150)
//Test.assertEquals(calculateDamage("grass", "water", 40, 40), 100)
//Test.assertEquals(calculateDamage("grass", "fire", 35, 5), 175)
//Test.assertEquals(calculateDamage("fire", "electric", 10, 2), 250)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Weekly Salary

//tags: algebra,arrays,math,numbers

//url: https://edabit.com/challenge/kageRYgvDLvXAw7As

//Description:
//Write a function that takes a list of hours and returns the total weekly salary.
//The input list hours is listed sequentially, ordered from Monday to Sunday.
//A worker earns $10 an hour for the first 8 hours.
//For every overtime hour, he earns $15.
//On weekends, the employer pays double the usual rate, regardless how many hours were worked previously that week. For instance, 10 hours worked on a weekday would pay 80+30 = $110, but on a weekend it would pay 160+60 = $220.
//Examples
//weeklySalary([8, 8, 8, 8, 8, 0, 0]) ➞ 400
//
//weeklySalary([10, 10, 10, 0, 8, 0, 0]) ➞ 410
//
//weeklySalary([0, 0, 0, 0, 0, 12, 0]) ➞ 280
//Notes
//Every element in the array is greater than or equal to 0.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(weeklySalary([8, 8, 8, 8, 8, 8, 0]), 560)
//Test.assertEquals(weeklySalary([8, 8, 8, 8, 8, 8, 8]), 720)
//Test.assertEquals(weeklySalary([0, 0, 0, 0, 0, 0, 0]), 0)
//Test.assertEquals(weeklySalary([1, 1, 1, 2, 5, 0, 0]), 100)
//Test.assertEquals(weeklySalary([0, 0, 0, 0, 0, 16, 0]), 400)
//Test.assertEquals(weeklySalary([10, 10, 10, 10, 10, 10, 10]), 990)
//Test.assertEquals(weeklySalary([0, 12, 0, 12, 0, 8, 8]), 600)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Abbreviations Unique?

//tags: higher_order_functions,strings

//url: https://edabit.com/challenge/H8JABWQfYFN4ZSAxE

//Description:
//You are given two inputs:
//An array of abbreviations.
//An array of words.
//Write a function that returns true if each abbreviation uniquely identifies a word, and false otherwise.
//Examples
//uniqueAbbrev(["ho", "h", "ha"], ["house", "hope", "happy"]) ➞ false
//// "ho" and "h" are ambiguous and can identify either "house" or "hope"
//
//uniqueAbbrev(["s", "t", "v"], ["stamina", "television", "vindaloo"]) ➞ true
//
//uniqueAbbrev(["bi", "ba", "bat"], ["big", "bard", "battery"]) ➞ false
//
//uniqueAbbrev(["mo", "ma", "me"], ["moment", "many", "mean"]) ➞ true
//Notes
//Abbreviations will be a substring from [0, n] from the original string.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(uniqueAbbrev(["s", "t", "v"], ["stamina", "television", "vindaloo"]), true)
//Test.assertEquals(uniqueAbbrev(["mo", "ma", "me"], ["moment", "many", "mean"]), true)
//Test.assertEquals(uniqueAbbrev(["at", "o", "abe"], ["atom", "original", "abet"]), true)
//Test.assertEquals(uniqueAbbrev(["rh", "par", "re"], ["rhino", "parry", "residue"]), true)
//Test.assertEquals(uniqueAbbrev(["ho", "h", "ha"], ["house", "hope", "happy"]), false)
//Test.assertEquals(uniqueAbbrev(["bi", "ba", "bat"], ["big", "bard", "battery"]), false)
//Test.assertEquals(uniqueAbbrev(["b", "c", "ch"], ["broth", "chap", "cardigan"]), false)
//Test.assertEquals(uniqueAbbrev(["to", "too", "t"], ["topology", "took", "torrent"]), false)

