function leapYear(year) {

    if ((year % 4) === 0) {
        return true
    } else {
        return false
    }
}

const check2000 = leapYear(1700)

console.log(check2000)