var fibo = [0, 1, ];
// fibo[2] = fibo[2-1] + fibo[2-2]
for (i = 2; i < 10; i++) {
    fibo[i] = fibo[i - 1] + fibo[i - 2]

}

console.log(fibo)