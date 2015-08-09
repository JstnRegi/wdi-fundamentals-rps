////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////




    function getInput() {
        console.log("Please choose either 'rock', 'paper', or 'scissors'.")
        return prompt(" Please choose either 'rock', 'paper', or 'scissors' ");
    }

    function randomPlay() {
        var randomNumber = Math.random();
        if (randomNumber < 0.33) {
            return "rock";
        } else if (randomNumber < 0.66) {
            return "paper";
        } else {
            return "scissors";
        }
    }

////////////////////////////////////////////////
    /*           Write Your Code Below            */
////////////////////////////////////////////////

    function getPlayerMove(move) {
        // Write an expression that operates on a variable called `move`
        // If a `move` has a value, your expression should evaluate to that value.
        // However, if `move` is not specified / is null, your expression should equal `getInput()`.
        if (move != null) {
            return move;
        }
        else return getInput();
    }

    function getComputerMove(move) {
        // Write an expression that operates on a variable called `move`
        // If a `move` has a value, your expression should evaluate to that value.
        // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
        if (move != null) {
            return move;
        }
        else return randomPlay();
    }

    function getWinner(getplayerMove, computerMove) {
        var winner;
        // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
        // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
        // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
        /* YOUR CODE HERE */
        if (getplayerMove == 'rock') {
            if (computerMove == 'paper') {
                winner = 'computer';
            }
            else if (computerMove == 'scissors') {
                winner = 'player';
            }
            else {
                winner = 'tie'
            }
        }
        else if (getplayerMove == 'paper') {
            if (computerMove == 'scissors') {
                winner = 'computer';
            }
            else if (computerMove == 'rock') {
                winner = 'player';
            }
            else {
                winner = 'tie'
            }
        }
        else {
            if (computerMove == 'rock') {
                winner = 'computer';
            }
            else if (computerMove == 'paper') {
                winner = 'player';
            }
            else {
                winner = 'tie'
            }
        }
        return winner;
    }

/*couldn't find a way to keep variables within the function playToFive. Brought variables out so they
can be globally influenced and kept track for playRPS();
 */

var playerWins = 0;
var computerWins = 0;

//changed playToFive to keepScore to better represent it's purpose
    function keepScore(getwinner) {
        console.log("Let's play Rock, Paper, Scissors");
        console.log(getwinner);
        // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
        /* YOUR CODE HERE */
        if (getwinner === 'player') {
            playerWins++;
        }
        else if (getwinner === 'computer') {
            computerWins++;
        }
        else {
            return 'tie';
        }

        return [playerWins, computerWins];

    }

//Created function that actually causes player to play until the player or the computer gets to 5
function playToFive () {
    do {
        console.log(keepScore(getWinner(getPlayerMove('rock'), getComputerMove())));
    } while (playerWins < 5 && computerWins < 5)
    if (playerWins === 5) {
        console.log('Player wins!');
    }
    if (computerWins === 5) {
        console.log('Computer wins!');
    }
}


//calls function to playRPS and utilize all functions
playToFive();

