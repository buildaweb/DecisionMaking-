// 1a
let warmHugs = "Hi, I'm Olaf and I like warm hugs.";

// 1b
console.log(warmHugs.toUpperCase());

// 1c
warmHugs = warmHugs.replace("like", "love");
console.log(warmHugs);

// 2a
let beenImpaled = "Oh, look at that. I've been impaled.";

// 2b
console.log(beenImpaled.slice(18));
// console.log(beenImpaled.slice(18, 36));
// console.log(beenImpaled.slice(-18));

// 3a
let dotDotDot = "...";

// 3b
let skullBones = `I don't have a skull${dotDotDot}or bones.`;
console.log(skullBones);

// 4
console.log(Math.PI);

// 5
let randomNum = Math.random();
randomNum *= 3;
randomNum = Math.floor(randomNum);
randomNum++;
console.log(randomNum);

// let randomNum = Math.random();
// randomNum *= 3;
// randomNum = Math.ceil(randomNum);
// console.log(randomNum);

// BONUS
// 6
console.log(" Let It Go!".toUpperCase().repeat(2).trim());

// 7a
let reindeers = "Reindeers are better than people.";

// 7b
console.log(reindeers.replace(/ /g, "_"));
// console.log(reindeers.split(" ").join("_"));

// 8
console.log(Math.SQRT2);
// console.log(Math.sqrt(2));

// 9
// Completed on separate lines
// let newRandomNumber = Math.random();
// newRandomNumber *= 17;
// newRandomNumber = Math.floor(newRandomNumber);
// newRandomNumber += 7;

// Extra Bonus: Completed on a single line
var newRandomNumber = Math.floor(Math.random() * (23 - 7 + 1) + 7);
// var newRandomNumber = Math.floor(Math.random() * (16 + 1) + 7);
// var newRandomNumber = Math.floor(Math.random() * 17 + 7);
// var newRandomNumber = Math.floor(A number from 0 up to 16.999 + 7);
// var newRandomNumber = Math.floor(A number from 7 up to 23.999);
// var newRandomNumber = A whole number from 7 up to 23;
console.log(newRandomNumber);

// Using Ceil (Number could possibly be 6 in this case)
let randomNumber = Math.ceil(Math.random() * 17) + 6;
(edited)






Matt Riley  1:01 PM
Decision Making Exercise…
A. Inside the “DecisionMaking” folder create a Folder called “DecisionMakingExercise”
B. Inside the “DecisionMakingExercise” folder create a script.js file
C. NOTE: Console logs ARE necessary for each question in this exercise.
1a. Create a LET variable named randomNum. Use Math.random, as well as Math.floor, so the possible value for it will be a whole number from 1 to 5 (Ex: 1, 2, 3, 4, or 5).
1b. Using IF, ELSE IF, and ELSE, have the following display in the terminal/console for each case (AKA Each value for randomNum) "Greater than or equal to 4", "Equal to 2 or 3", "Equal to 1" in the terminal/console
1c. Using a separate if statement (Not part of the one created above) have the following display "Not equal to 3" if the value for randomNum is NOT equal to 3.
1d. Using another separate if statement (Not part of the ones created above) have the following display "NOT equal to 3 AND not equal to 5" if the value for randomNum is NOT equal to 3 and also NOT equal to 5 (AKA If the value is 1, 2, or 4).
1e. Using another separate if statement (Not part of the ones created above) have the following display "Equal to 2 OR equal to 4" if the value for randomNum is either 2 or 4.
BONUS
2. Use a ternary to display "Greater than or equal to 4" in the terminal/console if the value for randomNum is equal to or more than 4. Also, using the same ternary have "Less than 4" display in the terminal/console if the value is less than 4 (NOTE: You will need to look up ternary since we have not covered it.)
3. Use a switch statement to display the number spelled out (Example: "One" for 1, "Two" for 2, etc.) in the terminal/console for each random value that randomNum can have (1, 2, 3, 4, or 5) (NOTE: You will need to look up switch statements since we have not covered it.)
When finished, create a repository in the “DecisionMakingExercise” Folder as well as on GitHub. Add and commit everything in the DecisionMakingExercise folder and push it up to your GitHub repository. Then paste the link to your GitHub repository page in the form in google classroom. (edited) 

Matt Riley  12:50 PM
Completed Decision Making Exercise (Bonus NOT Included)…
// DECISION MAKING EXERCISE

// 1a
let randomNum = Math.floor(Math.random() * 5 + 1);
// let randomNum = Math.floor(Math.random() * 5) + 1;
console.log(randomNum);

// 1b
if (randomNum >= 4) {
  console.log("Greater than or equal to 4");
} else if (randomNum === 2 || randomNum === 3) {
  console.log("Equal to 2 or 3");
} else {
  console.log("Equal to 1");
}

// Another Example for 1b

if (randomNum >= 4) {
// Same as line above
// if (randomNum > 3) {
  console.log("Greater than or equal to 4");
} else if (randomNum >= 2) {
// Same as line above
// } else if (randomNum > 1) {
  console.log("Equal to 2 or 3");
} else {
  console.log("Equal to 1");
}

// 1c
if (randomNum !== 3){
  console.log("Not equal to 3");
}

// Another Example for 1c

if (randomNum === 1 || randomNum === 2 || randomNum === 4 || randomNum === 5) {
  console.log("Not equal to 3");
}

// 1d
if (randomNum !== 3 && randomNum !== 5){
  console.log("NOT equal to 3 AND not equal to 5");
}

// Another Example for 1d

if (randomNum === 1 || randomNum === 2 || randomNum === 4) {
console.log(randomNum);
  console.log("NOT equal to 3 AND not equal to 5");
}

// 1e
if (randomNum === 2 || randomNum === 4) {
  console.log("Equal to 2 or equal to 4");
}