

//title: PvP Battle: Alice vs Bob

//tags: classes,games,logic,objects,scope

//url: https://edabit.com/challenge/ifDM26p25bqS8EsFu

//Description:
//Having gotten rather sick of always being paired together in sciency literature, Alice and Bob have decided to finally settle their differences with a magical duel. They'll each learn some skills and then battle it out.
//Your Goal
//Your job is to write the class Player which will handle all the combat mechanics.
//Properties
//Let's look at the Player class's properties first. You'll need:
//A private health variable hp. Make sure it's private!
//A private maxHealth variable maxHp. Again, make sure it's private.
//A private energy variable en. Again, make sure it's private.
//A private maxEnergy variable maxEn. You know the drill by now.
//Getters and setters for health and energy:
//These should be named hp and en, respectively.
//They should be "capped". That is, you cannot have less than 0 health or energy, and your health and/or energy cannot be greater than their respective "max" values.
//An armor value. This is public.
//A name. This is also public.
//A getter for health percent, called hpPerc. Please return this value rounded to two decimal places.
//Now that that's out of the way, let's look at our single method (other than the aforementioned getters and setters):
//
//learnSkill() Method
//Your class must implement a single method called learnSkill.
//Basics/Functionality
//This method takes two parameters: a skill name (e.g., "fireball"), and an object containing skill statistics (more on that below!).
//Most importantly, after adding a skill:
//alice.learnSkill("fireball",{ //stats (see below)})
//you should then be able to call that skill as you'd normally call a method on your Player instance, with the target passed as a parameter:
//alice.fireball(bob);
//where the name of the method is merely the skill name passed in. Keep in mind that some skills may have two-part names, so you'll need to factor that in when creating your method.
//In general, using the skill should return a string describing what happened, as well as changing the relevant numbers on both the target and "caster".
//stats Object
//Your stats object has the following properties:
//{
//    damage: the raw damage done (assuming 0 effective armor),
//    description: the description of the attack (for humans to read),
//    penetration: Armor penetration amount (see "Armor" below),
//    cost: Cost, in energy points,
//    heal: Optional heal value (some skills heal the caster on cast!)
//}
//Logic
//Armor: Your learnSkill method will start out by subtracting an armor penetration stat from the target's armor value to get an "effective armor" value. That is, if Alice attacks Bob with a skill with 5 armor penetration, and Bob's armor is 50, then Bob's effective armor for this attack is 50-5 = 45.
//Energy: If the skill costs more energy than the character currently has, return (player name) attempted to use (skill name), but didn't have enough energy!. Otherwise, subtract the energy cost from the character's energy, and continue.
//Damage: Damage here is pretty easy. Consider that the minimum armor value is 0, the maximum is 100, and each percent effective armor decreases damage by one percent. An example:
//Alice attacks Bob for 50 damage. Bob's effective armor rating is 25.
//Alice does 50*((100-25)/100) = 37.5 damage.
//Attack String: You'll need to return a string describing what happened. The first part of the returned string should describe the attack itself, and should look like this: (attacking player name) used skill (skill name), (skill description), against (target name), doing (calculated damage) damage!. For the damage calculation, please round your value to two decimal places.
//Next, if the skill healed, append (attacking player name) healed for (heal amount) health..
//Finally, if the target player died, append (target name) died.. Otherwise, append (target name is at (targ hpPerc) % health.
//Return this string, and don't forget to actually apply the damage/health changes!
//Example
//const alice = new Player("Alice", 110, 50, 10)
//const bob = new Player("Bob", 100, 60, 20)
//
//alice.learnSkill("fireball", {
//    damage: 23,
//    penetration: 1.2,
//    heal: 5,
//    cost: 15,
//    desc: "a firey magical attack"
//})
//
//console.log(alice.fireball(bob))
//// Alice used fireball, a firey magical attack, against Bob, doing
//// 18.68 damage! Alice healed for 5 health! Bob is at 81.32% health.
//
//bob.learnSkill("superbeam", {
//  damage:200,
//  penetration:50,
//  heal:50,
//  cost:75,
//  desc: "an overpowered attack, pls nerf"
//})
//
//console.log(bob.superbeam(alice))
//// Bob attempted to use superbeam, but didn't have enough energy!
//Notes
//In many fighting games, skills "pick" from a range of possible damage values. For the sake of simplicity (and testing!), assume that each skill does a specific, set damage number (factoring everything else in, of course).
//Don't worry about preventing a "dead" player from attacking.
//Pay very close attention to the exact format of the returned "attack" string! I'm comparing that directly with an expected result string, so even something like a missing space could ruin your answer.
//Your Player instances will be constructed as new Player(name,health,energy,armor)

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//console.log('----FIGHT!----')
////player class exists
//const alice = new Player('Alice',110,50,10);
//const bob = new Player('Bob',100,60,20);
//console.log('Does our Player class exist?')
//Test.assertEquals(bob instanceof Player && alice instanceof Player, true,`Alice and Bob don't seem to be instances of the player class.`)
//​
////learn skill
//console.log("\n----\nCan our competitors learn new skills?")
//Test.assertEquals(typeof alice.learnSkill,'function','Missing `learnSkill` method!')
//​
////skill is function
//console.log('\n----\nDoes the learnSkill method allow us to add a skill?')
//alice.learnSkill('fireball',{
//    damage: 23,
//    penetration: 1.2,
//    heal: 0,
//    cost: 15,
//    desc: 'a firey magical attack'
//});
//Test.assertEquals(typeof alice.fireball,'function','Could not learn skill "Fireball"!')
//​
////cast skill
//console.log('\n----\nCan we cast our new skill?')
//​

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Paul Cipher

//tags: algorithms,cryptography,functional_programming,math

//url: https://edabit.com/challenge/pFbcmiJLFA4yDFFp4

//Description:
//In Paul Cipher, only alpha characters will be encoded with the following rules:
//All alpha characters will be treated as uppercase letters.
//The first alpha character will not change (except for switching to upper case).
//All subsequent alpha characters will be shifted toward "Z" by the alphabetical position of the previous alpha character (wrap back to "A" if "Z" is passed).
//he1lo would be encoded as follows:
//paulCipher("he1lo") ➞ "HM1QA"
//
//h -> H (First character to be changed to uppercase)
//e -> M (H is the previous alpha character and 8th letter in the alphabets. E + 8 = M)
//1 -> 1 (Keep all characters other than alphabets as it is)
//l -> Q (E is the previous alpha character and 5th letter in the alphabets. L + 5 = Q)
//o -> A (L is the previous alpha character and 12th letter in the alphabets. O + 12 = A)
//Given a string txt, return the encoded message. See the below examples for a better understanding:
//Examples
//paulCipher("muBas41r") ➞ "MHWCT41K"
//
//paulCipher("a1rForce") ➞ "A1SXUGUH"
//
//paulCipher("MATT") ➞ "MNUN"
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(paulCipher("muBas41r"), "MHWCT41K")
//Test.assertEquals(paulCipher("A1rForce"), "A1SXUGUH")
//Test.assertEquals(paulCipher("p4K1St4n"), "P4A1DM4H")
//Test.assertEquals(paulCipher("MATT"), "MNUN")
//Test.assertEquals(paulCipher("4elen10ve"), "4EQQS10JA")
//Test.assertEquals(paulCipher("He1lo"), "HM1QA")
//Test.assertEquals(paulCipher(" The quick brown fox jumps over the lazy dog. "), " TBM VLDLN MTGLK TUM HEHCI HKAW LBM QMAY CSV. ")
//Test.assertEquals(paulCipher("5ddc4ddf-7a47-44d3-8eda-3171860dc938"), "5DHG4GHJ-7G47-44E3-8IIE-3171860EG938")
//// Mubashir

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Phrase or Word Inverse

//tags: algorithms,arrays,strings

//url: https://edabit.com/challenge/ZaJTyJwShJNi4B9CN

//Description:
//Create a function that inverts words or the phrase depending on the value of parameter type. A "P" means to invert the entire phrase, while a "W" means to invert every word in the phrase. See the following examples for clarity.
//Examples
//inverter("This is Valhalla", "P") ➞ "Valhalla is this"
//
//inverter("One fine day to start", "W") ➞ "Eno enif yad ot trats"
//
//inverter("Division by powers of two", "P") ➞ "Two of powers by division"
//Notes
//The first character of the returned string should be in uppercase and the rest are in lowercase.
//There will be no empty strings as inputs. Punctuation marks, though quite important for grammatical correctness, are discounted in the input phrases.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//let strVectors = [
//  ["This is Valhalla", "P"], 
//  ["One fine day to start", "W"], 
//  ["Division by powers of two", "P"],
//  ["Known for passion in quality", "P"], 
//  ["Excellence is achievable", "W"],
//  ["The master of your fate the captain of your soul", "W"], 
//  ["All but one in the middle of it all", "P"],
//  ["The master of your fate the captain of your soul", "P"]]
//let strRes = [
//  "Valhalla is this",
//  "Eno enif yad ot trats",
//  "Two of powers by division",
//  "Quality in passion for known",
//  "Ecnellecxe si elbaveihca",
//  "Eht retsam fo ruoy etaf eht niatpac fo ruoy luos",
//  "All it of middle the in one but all",
//  "Soul your of captain the fate your of master the"]
//​
//for (let i in strVectors) {
//  Test.assertEquals(inverter(...strVectors[i]), strRes[i])
//}

