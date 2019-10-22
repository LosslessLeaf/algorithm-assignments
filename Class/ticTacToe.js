const ticTacToeArray = ['o', 'o', 'o', 'x', 'x', null, 'x', null, 'x'];
const ticTacToeArray2 = ['o', 'x', 'o', 'o', 'x', 'x', 'x', 'o', 'x'];
const ticTacToeArray3 = ['x', null, null, 'o', 'o', 'x', 'x', 'o', null];
const ticTacToeArray4 = ['x', 'o', null, 'o', 'x', null, null, null, 'x'];

function checkTicTacToe(arr) {
    let countX = 0;
    let countO = 0;
    let nulls = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 'x') {
            countX++;
        }
        else if (arr[i] == 'o') {
            countO++;
        }
        else {
            nulls++;
        }
    }

    // console.log(countX, countO, nulls);
    if (countX + countO < 5) {
        console.log("Incomplete game!");
        return false;
    }
    if (countX > countO && (countX - countO > 1) || countO > countX) {
        console.log("Error! Invalid!");
        return false;
    }
    if (countX > countO && (countX - countO <= 1)) {
        console.log("More Xs and valid! X count:", countX, "O count:", countO);
    }

    const winConditions = [
        [0, 1, 2],
        [0, 3, 6],
        [0, 4, 8],
        [1, 4, 7],
        [2, 4, 6],
        [2, 5, 8],
        [3, 4, 5],
        [6, 7, 8]
    ]

    for (let i = 0; i < winConditions.length; i++) {
        if (arr[i][0] == 'x' && arr[i][1] == 'x' && arr[i][2] == 'x' || arr[i][0] == 'o' && arr[i][1] == 'o' && arr[i][2] == 'o') {
            console.log("Winner!: " + arr[i][0]);
            return true;
        }
    }
    
    console.log("Tie Game!");
    return false;

    if (arr[0] == 'x' && arr[1] == 'x' && arr[2] == 'x' || arr[0] == 'o' && arr[1] == 'o' && arr[2] == 'o') {
        console.log("Winner!: " + arr[0]);
    }
    else if (arr[0] == 'x' && arr[3] == 'x' && arr[6] == 'x' || arr[0] == 'o' && arr[3] == 'o' && arr[6] == 'o') {
        console.log("Winner!: " + arr[0]);
    }
    else if (arr[0] == 'x' && arr[4] == 'x' && arr[8] == 'x' || arr[0] == 'o' && arr[4] == 'o' && arr[8] == 'o') {
        console.log("Winner!: " + arr[0]);
    }
    else if (arr[1] == 'x' && arr[4] == 'x' && arr[7] == 'x' || arr[1] == 'o' && arr[4] == 'o' && arr[7] == 'o') {
        console.log("Winner!: " + arr[1]);
    }
    else if (arr[2] == 'x' && arr[4] == 'x' && arr[6] == 'x' || arr[2] == 'o' && arr[4] == 'o' && arr[6] == 'o') {
        console.log("Winner!: " + arr[2]);
    }
    else if (arr[2] == 'x' && arr[5] == 'x' && arr[8] == 'x' || arr[2] == 'o' && arr[5] == 'o' && arr[8] == 'o') {
        console.log("Winner!: " + arr[2]);
    }
    else if (arr[3] == 'x' && arr[4] == 'x' && arr[5] == 'x' || arr[3] == 'o' && arr[4] == 'o' && arr[5] == 'o') {
        console.log("Winner!: " + arr[3]);
    }
    else if (arr[6] == 'x' && arr[7] == 'x' && arr[8] == 'x' || arr[6] == 'o' && arr[7] == 'o' && arr[8] == 'o') {
        console.log("Winner!: " + arr[6]);
    }
    else {
        console.log("Tie Game!");
    }
}

checkTicTacToe(ticTacToeArray);
checkTicTacToe(ticTacToeArray2);
checkTicTacToe(ticTacToeArray3);
checkTicTacToe(ticTacToeArray4);