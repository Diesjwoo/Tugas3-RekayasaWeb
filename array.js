// Buat array dengan 5 nama
let nama = ["Garet", "Mustofa", "Diesti", "Dasa", "Dimas"];

// 1. FOR LOOP
console.log("=== FOR LOOP ===");
for (let i = 0; i < nama.length; i++) {
    console.log("Nama: " + nama[i]);
}

// 2. FOR...OF LOOP
console.log("\n=== FOR...OF LOOP ===");
for (let namaOrang of nama) {
    console.log("Nama: " + namaOrang);
}

// 3. FOR EACH
console.log("\n=== FOR EACH ===");
nama.forEach(function(namaOrang) {
    console.log("Nama: " + namaOrang);
});

// 4. FOR EACH dengan index
console.log("\n=== FOR EACH DENGAN INDEX ===");
nama.forEach(function(namaOrang, index) {
    console.log((index + 1) + ". " + namaOrang);
});

// 5. FOR EACH dengan arrow function
console.log("\n=== FOR EACH (Arrow Function) ===");
nama.forEach(namaOrang => console.log("Nama: " + namaOrang));