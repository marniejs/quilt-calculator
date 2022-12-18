
//This calculates the backing needed
function returnBacking() {
    let userWidth;
    let userLength;
    let backing;

    userWidth = document.getElementById("userwidth").value;
    userLength = document.getElementById("userlength").value;

    if (userWidth < 35 && userLength < 35) {
        backing = (parseInt(userWidth) + parseInt(userLength)) / 36;
        document.getElementById("backing").innerHTML = backing;
    }

    else if (userWidth >= 40 && userWidth <= 60) {
        backing = ((userWidth * 2) + 12) / 36;
        document.getElementById("backing").innerHTML = backing;
    }

    else if (userWidth >= 61 && userWidth <= 80) {
        backing = ((userLength * 2) + 12) / 36;
        document.getElementById("backing").innerHTML = backing;
    }

    else if (userWidth >= 81 && userWidth <= 120) {
        backing = ((userLength * 3) + 18) / 36;
        document.getElementById("backing").innerHTML = backing;
    }
}