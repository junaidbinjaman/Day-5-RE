function simpleArraySum(ar) {
    var sum = 0;
    for (i = 0; i < ar.length; i++) {
        var element = ar[i];
        sum = sum + element
    }
    return sum;

}

var result = simpleArraySum([1, 2, 3, 4, 10, 11])
console.log(result)