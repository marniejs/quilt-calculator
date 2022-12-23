
/*
Description: Convert a decimal number into a fraction
Author: Michaël Niessen (© 2018)
Website: http://AssemblySys.com

If you find this script useful, you can show your
appreciation by getting Michaël a cup of coffee ;)
https://ko-fi.com/assemblysys

As long as this notice (including author name and details) is included and
UNALTERED, this code can be used and distributed freely.
*/

function decimalToFraction(value, donly = true) {
    let tolerance = 1.0E-6; // from how many decimals the number is rounded
    let h1 = 1;
    let h2 = 0;
    let k1 = 0;
    let k2 = 1;
    let negative = false;
    let i;

    if (parseInt(value) == value) { // if value is an integer, stop the script
        return value;
    } else if (value < 0) {
        negative = true;
        value = -value;
    }

    if (donly) {
        i = parseInt(value);
        value -= i;
    }

    let b = value;

    do {
        let a = Math.floor(b);
        console.log(a)
        let aux = h1;
        h1 = a * h1 + h2;
        h2 = aux;
        aux = k1;
        k1 = a * k1 + k2;
        k2 = aux;
        b = 1 / (b - a);
    } while (Math.abs(value - h1 / k1) > value * tolerance);

    return (negative ? "-" : '') + ((donly & (i != 0)) ? i + ' ' : '') + (h1 == 0 ? '' : h1 + "/" + k1);
}


//This function calculates the amount of backing needed, and the number/size of fabric pieces
function returnBacking() {
    let userWidth;
    let userLength;
    let backing;
    let pieceOne;
    let pieceTwo;
    let pieceThree;

    userWidth = document.getElementById("userwidth").value;
    userLength = document.getElementById("userlength").value;
    document.getElementById("pieceOne").innerHTML = "";
    document.getElementById("pieceTwo").innerHTML = "";
    document.getElementById("pieceThree").innerHTML = "";

    if (userWidth <= 34 || userLength <= 34) {
        backing = decimalToFraction(((parseInt(userWidth) + parseInt(userLength)) / 36)); //yardage needed
        document.getElementById("backing").innerHTML = backing;
        pieceOne = `${parseInt(userWidth) + 8} inches x ${parseInt(userLength) + 8} inches` //size of piece 
        document.getElementById("pieceOne").innerHTML = pieceOne;
    }

    else if (userWidth >= 35 && userWidth <= 60) {
        backing = decimalToFraction((((parseInt(userWidth) * 2) + 12) / 36));
        document.getElementById("backing").innerHTML = backing;
        pieceOne = `Piece 1: ${(parseInt(userWidth) + 8)} inches x 42 inches`
        pieceTwo = `Piece 2: ${(parseInt(userWidth) + 8)} inches x ${(parseInt(userLength) + 8) - 42} inches`
        document.getElementById("pieceOne").innerHTML = pieceOne;
        document.getElementById("pieceTwo").innerHTML = pieceTwo;
    }

    else if (userWidth >= 61 && userWidth <= 80) {
        backing = decimalToFraction((((userLength * 2) + 12) / 36));
        document.getElementById("backing").innerHTML = backing;
        pieceOne = `Piece 1: 42 inches x ${parseInt(userLength) + 8} inches`
        pieceTwo = `Piece 2: ${(parseInt(userWidth) + 8) - 42} inches x ${parseInt(userLength) + 8} inches`
        document.getElementById("pieceOne").innerHTML = pieceOne;
        document.getElementById("pieceTwo").innerHTML = pieceTwo;
    }

    else if (userWidth >= 81 && userWidth <= 120) {
        backing = decimalToFraction((((userLength * 3) + 18) / 36));
        document.getElementById("backing").innerHTML = backing;
        pieceOne = `Piece 1: 42 inches x ${parseInt(userLength) + 8} inches.`
        pieceTwo = `Piece 2: 42 inches x ${parseInt(userLength) + 8} inches.`
        pieceThree = `Piece 3: ${(parseInt(userWidth) + 8) - 84} inches x ${parseInt(userLength) + 8} inches`
        document.getElementById("pieceOne").innerHTML = pieceOne;
        document.getElementById("pieceTwo").innerHTML = pieceTwo;
        document.getElementById("pieceThree").innerHTML = pieceThree;
    }

    else {
        backing = 'Your quilt is too large for this calculator, sorry!';
        document.getElementById("backing").innerHTML = backing;
    }
}