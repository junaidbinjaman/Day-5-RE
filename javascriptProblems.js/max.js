var business = 450;
var minister = 350;
var sochib = 850;

if (business > minister) {
    if (business > sochib) {
        console.log('business is better')
    } else {
        console.log('Sochib is bigger')
    }
} else {
    if (minister > sochib) {
        console.log('Minister is bigger')
    } else {
        console.log('Sochib is bigger then minister')
    }
}