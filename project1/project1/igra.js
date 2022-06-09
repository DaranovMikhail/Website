function gameGuess() {
    var guessNum = 17;
    var ourNum = prompt("Введите число");
    if (ourNum > guessNum) {
        alert("Загаданное число меньше");
        return gameGuess();
    }
    else if (ourNum < guessNum) {
        alert("Загаданное число больше");
        return gameGuess();
    }
    else {
        alert("Вы угадали");
    }
}

gameGuess();
