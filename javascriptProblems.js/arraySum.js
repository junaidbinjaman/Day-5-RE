function getArraySum(numbers) {
    var sum = 0;

    for (i = 0; i < numbers.length; i++) {
        var element = numbers[i];
        sum = sum + element
    }
    return sum;

}

var numbers = [45, 65, 78]
var result = getArraySum(numbers)

console.log(result)