let foot = document.getElementById("foot");
let inch = document.getElementById("inch")
let centimeter = document.getElementById("centimeter")

function roundNum(num) {
    return Math.round(num*100)/100;
}

function footToInchAndCentimeter() {
    let fCon = parseFloat(foot.value);
    let iCon = fCon * 12;
    let cCon = fCon * 30.48;
    inch.value = roundNum(iCon);
    centimeter.value = roundNum(cCon);
}

function inchToFootAndCentimeter() {
    let iCon = parseFloat(inch.value);
    let fCon = iCon / 12;
    let cCon = iCon * 2.54;
    foot.value = roundNum(fCon);
    centimeter.value = roundNum(cCon);
}

function centimeterToFootAndInch() {
    let cCon = parseFloat(centimeter.value);
    let fCon = cCon / 30.48;
    let iCon = cCon / 2.54;
    foot.value = roundNum(fCon);
    inch.value = roundNum(iCon);
}

foot.addEventListener("input", footToInchAndCentimeter);
inch.addEventListener("input",inchToFootAndCentimeter);
centimeter.addEventListener("input",centimeterToFootAndInch);