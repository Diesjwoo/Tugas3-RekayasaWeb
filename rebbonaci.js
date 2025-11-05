// a. Fungsi rekursif untuk menghitung deret Fibonacci ke-n
function fibonacci(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// b. Testing fungsi Fibonacci
console.log("=== DERET FIBONACCI ===");
console.log("Fibonacci(0) = " + fibonacci(0)); // 0
console.log("Fibonacci(1) = " + fibonacci(1)); // 1
console.log("Fibonacci(2) = " + fibonacci(2)); // 1
console.log("Fibonacci(3) = " + fibonacci(3)); // 2
console.log("Fibonacci(4) = " + fibonacci(4)); // 3
console.log("Fibonacci(5) = " + fibonacci(5)); // 5
console.log("Fibonacci(6) = " + fibonacci(6)); // 8
console.log("Fibonacci(7) = " + fibonacci(7)); // 13
console.log("Fibonacci(8) = " + fibonacci(8)); // 21

// Menampilkan 10 angka pertama deret Fibonacci
console.log("\n10 angka pertama deret Fibonacci:");
for (let i = 0; i < 10; i++) {
    console.log(`F(${i}) = ${fibonacci(i)}`);
}