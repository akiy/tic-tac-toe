let boardCells = document.querySelectorAll('div');
let playerMarker = "x";
let computerMarker = "o";
let remainMoves = 9;


function makePlayerMove(cell) {
	if (cell.target.innerHTML == ""){
		cell.target.innerHTML = playerMarker;	
		remainMoves--;
		makeComputerMove();
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
	}
		console.log('remain', remainMoves);
}

function generateRandomMove() {
	return Math.floor(Math.random() * 9);
}


function checkResult() {

}

function resetBoard() {
	boardCells.forEach(cell => {
		cell.innerHTML = "";
	})
}



boardCells.forEach( boardCell => {
	boardCell.addEventListener('click', makePlayerMove)
});