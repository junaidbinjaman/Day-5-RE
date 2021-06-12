var marks = [45, 67, 81, 63, 98, 56, 35, 23];

var maxNum = marks[0];

for (i = 0; i < marks.length; i++) {
    var element = marks[i]
    if (maxNum < element) {
        maxNum = marks[i]
    }
}

console.log(maxNum)