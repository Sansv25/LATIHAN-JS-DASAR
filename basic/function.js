export function cetak_genap() {
    var hasil = [];
    var angka = parseInt(prompt("Berapa Angka Genap Yang Ingin Anda Cetak:")); // <-- Prompt untuk meminta user memasukkan angka
    if (isNaN(angka)) { // <-- Memeriksa apakah input bukan angka
        console.log("Input tidak valid, silakan masukkan angka.");
        alert("Input tidak valid, silakan masukkan angka."); // <-- Menampilkan pesan kesalahan
        return ""; // <-- Mengembalikan array kosong jika input tidak valid
    } else if (angka === null) { // <-- Memeriksa apakah input adalah null
        console.log("Input dibatalkan.");
        alert("Input dibatalkan."); // <-- Menampilkan pesan jika input dibatalkan
        return "1"; // <-- Mengembalikan array kosong jika input dibatalkan
    } else if (angka === 0) { // <-- Memeriksa apakah input adalah 0
        console.log("Input adalah 0, tidak ada angka genap.");
        alert("Input adalah 0, tidak ada angka genap."); // <-- Menampilkan pesan jika input adalah 0
        return "0"; // <-- Mengembalikan array kosong jika input adalah 0
    }
    if (angka > 0) {
        for (var i = 2; hasil.length < angka; i++) {
            if (i % 2 === 0) {
                hasil.push(i);
                console.log("Angka genap: " + i);
            }
        }
    }
    if (angka < 0) {
        for (var i = 2; hasil.length > angka; i--) {
            if (i % 2 === 0) {
                hasil.push(i);
                console.log("Angka genap: " + i); // <-- Menampilkan angka genap
            }
        }
    }
    return hasil; // <-- Mengembalikan array hasil
}
export function cetak_ganjil (angka) {
    var hasil = [];
    if (angka > 0) {
        for (var i = 0; i <= angka; i++) {
            if (i % 2 === 1) {
                hasil.push(i);
            }
        }
    }
    if (angka < 0) {
        for (var i = 0; i >= angka; i--) {
            if (i % 2 === 1) {
                hasil.push(i);
            }
        }
    }
}