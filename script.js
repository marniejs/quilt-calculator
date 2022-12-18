
//This calculates the backing needed
function returnBacking() {
    let userWidth;
    let userLength;
    let backing;

    userWidth = document.getElementById("userwidth").value;
    userLength = document.getElementById("userlength").value;

    if (userWidth <= 34 && userLength <= 34) {
        backing = Math.round(((parseInt(userWidth) + parseInt(userLength)) / 36) * 10) / 10;
        document.getElementById("backing").innerHTML = backing;
    }

    else if (userWidth >= 35 && userWidth <= 60) {
        backing = Math.round((((parseInt(userWidth) * 2) + 12) / 36) * 10) / 10;
        document.getElementById("backing").innerHTML = backing;
    }

    else if (userWidth >= 61 && userWidth <= 80) {
        backing = Math.round((((userLength * 2) + 12) / 36) * 10) / 10;
        document.getElementById("backing").innerHTML = backing;
    }

    else if (userWidth >= 81 && userWidth <= 120) {
        backing = Math.round((((userLength * 3) + 18) / 36) * 10) / 10;
        document.getElementById("backing").innerHTML = backing;
    }
}