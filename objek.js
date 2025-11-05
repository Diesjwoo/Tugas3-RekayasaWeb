const mahasiswa = { 
    nama: "Anin", 
    umur: 22, 
    jurusan: " S1 Teknologi informasi" 
};

for (let key in mahasiswa) {
    console.log(key + ": " + mahasiswa[key]);
}
// Output:  
// nama: fulan 
// umur: 22 
// jurusan: S1 Teknologi informasi