
//This calculates the backing needed
function returnBacking() {
    let userWidth;
    let userLength;
    let backing;
    let pieceOne;
    let pieceTwo;
    let pieceThree;

    userWidth = document.getElementById("userwidth").value;
    userLength = document.getElementById("userlength").value;

    if (userWidth <= 34 || userLength <= 34) {
        backing = Math.round(((parseInt(userWidth) + parseInt(userLength)) / 36) * 10) / 10;
        document.getElementById("backing").innerHTML = backing;
        pieceOne = `${parseInt(userWidth) + 8} inches by ${parseInt(userLength) + 8} inches.`
        document.getElementById("pieceOne").innerHTML = pieceOne;
    }

    else if (userWidth >= 35 && userWidth <= 60) {
        backing = Math.round((((parseInt(userWidth) * 2) + 12) / 36) * 10) / 10;
        document.getElementById("backing").innerHTML = backing;
        pieceOne = `Piece 1: ${(parseInt(userWidth) + 8)} inches by 42 inches.`
        pieceTwo = `Piece 2: ${(parseInt(userWidth) + 8)} inches by ${(parseInt(userLength) + 8) - 42} inches.`
        document.getElementById("pieceOne").innerHTML = pieceOne;
        document.getElementById("pieceTwo").innerHTML = pieceTwo;
    }

    else if (userWidth >= 61 && userWidth <= 80) {
        backing = Math.round((((userLength * 2) + 12) / 36) * 10) / 10;
        document.getElementById("backing").innerHTML = backing;
        pieceOne = `Piece 1: 42 inches by ${parseInt(userLength) + 8} inches.`
        pieceTwo = `Piece 2: ${(parseInt(userWidth) + 8) - 42} inches by ${parseInt(userLength) + 8} inches.`
        document.getElementById("pieceOne").innerHTML = pieceOne;
        document.getElementById("pieceTwo").innerHTML = pieceTwo;
    }

    else if (userWidth >= 81 && userWidth <= 120) {
        backing = Math.round((((userLength * 3) + 18) / 36) * 10) / 10;
        document.getElementById("backing").innerHTML = backing;
        pieceOne = `Piece 1: 42 inches by ${parseInt(userLength) + 8} inches.`
        pieceTwo = `Piece 2: 42 inches by ${parseInt(userLength) + 8} inches.`
        pieceThree = `Piece 3: ${(parseInt(userWidth) + 8) - 84} inches by ${parseInt(userLength) + 8} inches.`
        document.getElementById("pieceOne").innerHTML = pieceOne;
        document.getElementById("pieceTwo").innerHTML = pieceTwo;
        document.getElementById("pieceThree").innerHTML = pieceThree;
    }

    else {
        backing = 'error';
        document.getElementById("backing").innerHTML = backing;
    }
}