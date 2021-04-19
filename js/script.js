function playGame(playerInput){
	clearMessages()

	function getMoveName(argMoveId){
	  if(argMoveId == 1){
	    return 'kamień';
	  } else if(argMoveId == 2){
	  	return 'papier';
	  } else if(argMoveId == 3){
	  	return 'nożyce';
	  } else {
	  printMessage('Nie znam ruchu o id ' + argMoveId + '.');
	  return 'nieznany ruch';
	  }
	}

	let randomNumber = Math.floor(Math.random() * 3 + 1);

	console.log('Wylosowana liczba to: ' + randomNumber);

	let computerMove = getMoveName(randomNumber);
	/*
	if(randomNumber == 1){
	  computerMove = 'kamień';
	} else if(randomNumber == 2){
	  computerMove = 'papier';
	} else if(randomNumber == 3){
	  computerMove = 'nożyce';
	}
	*/
	printMessage('Mój ruch to: ' + computerMove);
	/*
	let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
	*/
	console.log('Gracz wpisał: ' + playerInput);

	let playerMove = getMoveName(playerInput);
	/*
	if(playerInput == '1'){
	  playerMove = 'kamień';
	} else if(playerInput == 2){
	  playerMove = 'papier';
	} else if(playerInput == 3){
	  playerMove = 'nożyce';
	}
	*/
	printMessage('Twój ruch to: ' + playerMove);

	function displayResult(argComputerMove, argPlayerMove){
		if(argComputerMove == 'kamień' && argPlayerMove == 'papier'){
	  		return 'Ty wygrywasz!';
		} else if(argComputerMove == 'kamień' && argPlayerMove == 'nożyce'){
			return 'Przegrywasz!';
		} else if(argComputerMove == 'kamień' && argPlayerMove == 'kamień'){
			return 'Remis!';
		} else if(argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
			return 'Ty wygrywasz!';
		} else if(argComputerMove == 'papier' && argPlayerMove == 'kamień'){
			return 'Przegrywasz!';
		} else if(argComputerMove == 'papier' && argPlayerMove == 'papier'){
			return 'Remis!';
		} else if(argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
			return 'Ty wygrywasz!';
		} else if(argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
			return 'Przegrywasz!';
		} else if(argComputerMove == 'nożyce' && argPlayerMove == 'nożyce'){
			return 'Remis!';
		} else if(argComputerMove == 'kamień' && argPlayerMove == 'nieznany ruch'){
			return 'Brak rozstrzygnięcia';
		} else if(argComputerMove == 'papier' && argPlayerMove == 'nieznany ruch'){
			return 'Brak rozstrzygnięcia';
		} else if(argComputerMove == 'nożyce' && argPlayerMove == 'nieznany ruch'){
			return 'Brak rozstrzygnięcia';
		}
	}

	let result = displayResult(computerMove, playerMove);

	printMessage('Wynik: ' + result);


	/*
	if( computerMove == 'kamień' && playerMove == 'papier'){
	  printMessage('Ty wygrywasz!');
	} else if(computerMove == 'kamień' && playerMove == 'nożyce'){
		printMessage('Przegrywasz!');
	} else if(computerMove == 'kamień' && playerMove == 'kamień'){
		printMessage('Remis!');
	} else if(computerMove == 'papier' && playerMove == 'nożyce'){
		printMessage('Ty wygrywasz!');
	} else if(computerMove == 'papier' && playerMove == 'kamień'){
		printMessage('Przegrywasz!');
	} else if(computerMove == 'papier' && playerMove == 'papier'){
		printMessage('Remis!');
	} else if(computerMove == 'nożyce' && playerMove == 'kamień'){
		printMessage('Ty wygrywasz!');
	} else if(computerMove == 'nożyce' && playerMove == 'papier'){
		printMessage('Przegrywasz!');
	} else if(computerMove == 'nożyce' && playerMove == 'nożyce'){
		printMessage('Remis!');
	} else if(computerMove == 'kamień' && playerMove == 'nieznany ruch'){
		printMessage('Brak rozstrzygnięcia');
	} else if(computerMove == 'papier' && playerMove == 'nieznany ruch'){
		printMessage('Brak rozstrzygnięcia');
	} else if(computerMove == 'nożyce' && playerMove == 'nieznany ruch'){
		printMessage('Brak rozstrzygnięcia');
	}
	*/
	
}
document.getElementById('play-rock').addEventListener('click', function(){
  playGame(1);
});document.getElementById('play-paper').addEventListener('click', function(){
  playGame(2);
});document.getElementById('play-scissors').addEventListener('click', function(){
  playGame(3);
});