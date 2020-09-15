// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 *  counter1 is an instance of the counterMaker() function, while counter2() is its own function
 *  
 * 2. Which of the two uses a closure? How can you tell?
 *  counter1 uses a closure since there is the function counter() is inside the function counterMaker().
 * 
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 *  counter1 would be preferable 
 *  counter2 would be preferable
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
    count++;
  }
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}


/* Task 2: inning() 

Write a function called `inning` that generates a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning(){
  return Math.floor(Math.random() * 3)
}
//test
// console.log(inning())

/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 

function finalScore(inning, numInnings){
  let homeFinal = 0;
  let awayFinal = 0;
  for(let i = 0; i < numInnings; i++) {
    homeFinal += inning()
    awayFinal += inning()
  }
  return {
    "Home": homeFinal,
    "Away": awayFinal
  }
}
//test
// console.log(finalScore(inning, 9))

/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `getInningScore`
(2) Callback function `inning`
(2) A number of innings

and returns the score at each pont in the game, like so:

1st inning: awayTeam - homeTeam
2nd inning: awayTeam - homeTeam
3rd inning: awayTeam - homeTeam
4th inning: awayTeam - homeTeam
5th inning: awayTeam - homeTeam
6th inning: awayTeam - homeTeam
7th inning: awayTeam - homeTeam
8th inning: awayTeam - homeTeam
9th inning: awayTeam - homeTeam

Final Score: awayTeam - homeTeam */

// function scoreboard(getInningScore, inning, numInnings) {
//   let scores = []
//   for(let i=0; i < numInnings; i++) {
//     scores.push(`${i+1} ${getInningScore(inning)}`)
//   }
//   return scores
// }

// function getInningScore(inning) {
//   return `Inning: ${inning()} - ${inning()}`
// }

// console.log(scoreboard(getInningScore, inning, 3))

// function scoreboard(cbGetInningScore, cbInning, numInnings)
function scoreboard(inning, numInnings) {
  let scores = []
  let homeTotal = 0
  let awayTotal = 0
  for(let i=0; i < numInnings; i++) {
    let homeScore = inning()
    homeTotal += homeScore
    let awayScore = inning()
    awayTotal += awayScore
    if(i === 0){
      scores.push(`${i+1}st inning: Home ${homeScore} - Away ${awayScore}`)
    } else if(i === 1){
      scores.push(`${i+1}nd inning: Home ${homeScore} - Away ${awayScore}`)
    } else if(i === 2){
      scores.push(`${i+1}rd inning: Home ${homeScore} - Away ${awayScore}`)
    } else {
      scores.push(`${i+1}th inning: Home ${homeScore} - Away ${awayScore}`)
    }// end else
  }// end loop
  scores.push(`Final Score: Home ${homeTotal} - Away ${awayTotal}`)
  return scores
}//end function

console.log(scoreboard(inning, 9))