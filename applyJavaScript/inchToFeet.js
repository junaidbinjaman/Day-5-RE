function inchToFeet(inch) {
    var toFeet = inch / 12
    return toFeet
}

console.log(typeof(parseFloat(inchToFeet(100).toFixed(3))))