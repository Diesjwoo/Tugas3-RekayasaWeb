// Menggunakan pola yang sama dengan contoh Anda

function proses(angka, callback) {
    console.log("Sedang memproses data...");
    let hasil = angka * 2;  // Mengalikan angka dengan 2
    callback(hasil); // Memanggil fungsi callback dengan hasil
}

function tampilkanHasil(hasil) {
    console.log("Data telah diproses. Hasil: " + hasil);
}

// Memanggil fungsi
proses(5, tampilkanHasil);
// Output:  
// Sedang memproses data...
// Data telah diproses. Hasil: 10

proses(10, tampilkanHasil);
// Output:  
// Sedang memproses data...
// Data telah diproses. Hasil: 20