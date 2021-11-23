let boardCells = document.querySelectorAll('div');
let playerMarker = "x";
let computerMarker = "o";
let remainMoves = 9;
let gameOver = false;
let result = document.querySelector('.result');

function makePlayerMove(cell) {
	if (cell.target.innerHTML == "" && remainMoves){
		cell.target.innerHTML = playerMarker;	
		remainMoves--;
		makeComputerMove();
		checkResult();
	}	
}

function makeComputerMove(){
	let move = generateRandomMove();
	
	if (boardCells[move].innerHTML != "" && remainMoves != 0){
		while(boardCells[move].innerHTML != "") {
			move = generateRandomMove();		
		}
	}

	if (remainMoves) {
		remainMoves--;
		boardCells[move].innerHTML = computerMarker;
	} else {
		gameOver = true;
	}
	// console.log('remain', remainMoves);
}

function generateRandomMove() {
	return Math.floor(Math.random() * 9);
}

function checkResult() {

	if (boardCells[0].innerHTML == playerMarker && boardCells[1].innerHTML == playerMarker && boardCells[2].innerHTML == playerMarker ){
		gameOver = true;
		remainMoves = 0;
		result.innerHTML = "Player won!";
	}

	if (boardCells[0].innerHTML == playerMarker && boardCells[3].innerHTML == playerMarker && boardCells[6].innerHTML == playerMarker ){
		gameOver = true;
		remainMoves = 0;
		result.innerHTML = "Player won!";
	}

	if (boardCells[0].innerHTML == playerMarker && boardCells[4].innerHTML == playerMarker && boardCells[8].innerHTML == playerMarker ){
		gameOver = true;
		remainMoves = 0;
		result.innerHTML = "Player won!";
	}

	if (boardCells[1].innerHTML == playerMarker && boardCells[4].innerHTML == playerMarker && boardCells[7].innerHTML == playerMarker ){
		gameOver = true;
		remainMoves = 0;
		result.innerHTML = "Player won!";
	}

	if (boardCells[2].innerHTML == playerMarker && boardCells[5].innerHTML == playerMarker && boardCells[8].innerHTML == playerMarker ){
		gameOver = true;
		remainMoves = 0;
		result.innerHTML = "Player won!";
	}

	if (boardCells[3].innerHTML == playerMarker && boardCells[4].innerHTML == playerMarker && boardCells[5].innerHTML == playerMarker ){
		gameOver = true;
		remainMoves = 0;
		result.innerHTML = "Player won!";
	}

	if (boardCells[6].innerHTML == playerMarker && boardCells[7].innerHTML == playerMarker && boardCells[8].innerHTML == playerMarker ){
		gameOver = true;
		remainMoves = 0;
		result.innerHTML = "Player won!";
	}

//check computer 

	if (boardCells[0].innerHTML == computerMarker && boardCells[1].innerHTML == computerMarker && boardCells[2].innerHTML == computerMarker ){
		gameOver = true;
		remainMoves = 0;
		result.innerHTML = "Computer won!";
	}

	if (boardCells[0].innerHTML == computerMarker && boardCells[3].innerHTML == computerMarker && boardCells[6].innerHTML == computerMarker ){
		gameOver = true;
		remainMoves = 0;
		result.innerHTML = "Computer won!";
	}

	if (boardCells[0].innerHTML == computerMarker && boardCells[4].innerHTML == computerMarker && boardCells[8].innerHTML == computerMarker ){
		gameOver = true;
		remainMoves = 0;
		result.innerHTML = "Computer won!";
	}

	if (boardCells[1].innerHTML == computerMarker && boardCells[4].innerHTML == computerMarker && boardCells[7].innerHTML == computerMarker ){
		gameOver = true;
		remainMoves = 0;
		result.innerHTML = "Computer won!";
	}

	if (boardCells[2].innerHTML == computerMarker && boardCells[5].innerHTML == computerMarker && boardCells[8].innerHTML == computerMarker ){
		gameOver = true;
		remainMoves = 0;
		result.innerHTML = "Computer won!";
	}

	if (boardCells[3].innerHTML == computerMarker && boardCells[4].innerHTML == computerMarker && boardCells[5].innerHTML == computerMarker ){
		gameOver = true;
		remainMoves = 0;
		result.innerHTML = "Computer won!";
	}

	if (boardCells[6].innerHTML == computerMarker && boardCells[7].innerHTML == computerMarker && boardCells[8].innerHTML == computerMarker ){
		gameOver = true;
		remainMoves = 0;
		result.innerHTML = "Computer won!";
	}


	if (gameOver) {
		setTimeout(resetBoard, 1000);
	}
}

function resetBoard() {
	boardCells.forEach(cell => {
		cell.innerHTML = "";
	})

	gameOver =false;
	remainMoves = 9;
	result.innerHTML = "";
}

boardCells.forEach( boardCell => {
	boardCell.addEventListener('click', makePlayerMove)
});