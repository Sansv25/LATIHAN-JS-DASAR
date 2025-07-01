export function cetak_genap() {
    var hasil = [];
    var angka = parseInt(prompt("Berapa Angka Genap Yang Ingin Anda Cetak:"));
    if (isNaN(angka)) {
        console.log("Input tidak valid, silakan masukkan angka.");
        alert("Input tidak valid, silakan masukkan angka.");
        return "";
    } else if (angka === null) {
        console.log("Input dibatalkan.");
        alert("Input dibatalkan.");
        return "1";
    } else if (angka === 0) {
        console.log("Input adalah 0, tidak ada angka genap.");
        alert("Input adalah 0, tidak ada angka genap.");
        return "0";
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
                console.log("Angka genap: " + i);
            }
        }
    }
    return hasil;
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