export function cetak_genap() {
    var hasil = [];
    while (true) {
        var angka = prompt("Berapa Angka Genap Yang Ingin Anda Cetak:");
        console.log("Angka yang dimasukkan:", angka);
    if (angka == "" || angka === null) {
        if (angka === null) {
            console.log("Pengguna membatalkan input.");
            alert("Anda telah membatalkan input.");
        }  else if (angka == "") {
            console.log("Input kosong.");
            alert("Input tidak boleh kosong.");
        }
        var ulang = confirm("Apakah Anda ingin mengulang memasukan Angka?");
        if (ulang) {
            continue;
        } else {
            console.log("Pengguna Tidak Mengulang");
            return 0;
        }
    } else if (isNaN(angka)) {
        console.log("Input tidak valid, silakan masukkan angka.");
        alert("Input tidak valid, silakan masukkan angka.");
        return 0;
    } else if (angka == 0) {
        console.log("Input adalah 0, tidak ada angka genap.");
        alert("Input adalah 0, tidak ada angka genap.");
        return 0;
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
        for (var i = -2; hasil.length < Math.abs(angka); i--) {
            if (i % 2 === 0) {
                hasil.push(i);
                console.log("Angka genap: " + i);
            }
        }
    }
    break;
    }
    return hasil;
}
export function cetak_ganjil() {
    var hasil = [];
    while (true) {
        var angka = prompt("Berapa Angka Ganjil Yang Ingin Anda Cetak:");
        console.log("Angka yang dimasukkan:", angka);
        if (angka == "" || angka === null) {
            if (angka === null) {
                console.log("Pengguna membatalkan input.");
                alert("Anda telah membatalkan input.");
            }  else if (angka == "") {
                console.log("Input kosong.");
                alert("Input tidak boleh kosong.");
            }
            var ulang = confirm("Apakah Anda ingin mengulang memasukan Angka?");
            if (ulang) {
                continue;
            } else {
                console.log("Pengguna Tidak Mengulang");
                return 0;
            }
        } else if (isNaN(angka)) {
            console.log("Input tidak valid, silakan masukkan angka.");
            alert("Input tidak valid, silakan masukkan angka.");
            return 0;
        } else if (angka == 0) {
            console.log("Input adalah 0, tidak ada angka ganjil.");
            alert("Input adalah 0, tidak ada angka ganjil.");
            return 0;
        }
        if (angka > 0) {
            for (var i = 1; hasil.length < angka; i++) {
                if (i % 2 !== 0) {
                    hasil.push(i);
                    console.log("Angka ganjil: " + i);
                }
            }
        }
        if (angka < 0) {
            for (var i = -1; hasil.length < Math.abs(angka); i--) {
                if (i % 2 !== 0) {
                    hasil.push(i);
                    console.log("Angka ganjil: " + i);
                }
            }
        }
        break;
    }
    return hasil;
}
export function cetak_prima() {
    var hasil = [];
    while (true) {
        var angka = prompt("Berapa Angka Prima Yang Ingin Anda Cetak:");
        console.log("Angka yang dimasukkan:", angka);
        if (angka == "" || angka === null) {
            if (angka === null) {
                console.log("Pengguna membatalkan input.");
                alert("Anda telah membatalkan input.");
            }  else if (angka == "") {
                console.log("Input kosong.");
                alert("Input tidak boleh kosong.");
            }
            var ulang = confirm("Apakah Anda ingin mengulang memasukan Angka?");
            if (ulang) {
                continue;
            } else {
                console.log("Pengguna Tidak Mengulang");
                return 0;
            }
        } else if (isNaN(angka)) {
            console.log("Input tidak valid, silakan masukkan angka.");
            alert("Input tidak valid, silakan masukkan angka.");
            return 0;
        } else if (angka == 0) {
            console.log("Input adalah 0, tidak ada angka prima.");
            alert("Input adalah 0, tidak ada angka prima.");
            return 0;
        } else if (angka < 0) {
            console.log("Input negatif, tidak ada angka prima.");
            alert("Input negatif, tidak ada angka prima.");
            return 0;
        }
        for (var i = 2; hasil.length < angka; i++) {
            var isPrima = true;
            for (var j = 2; j <= Math.sqrt(i); j++) {
                console.log("Memeriksa apakah " + i + " habis dibagi " + j);
                console.log("Hasil bagi " + i + " / " + j + " = " + (i / j));
                if (i % j === 0) {
                    isPrima = false;
                    break;
                }
            }
            if (isPrima) {
                hasil.push(i);
                console.log("Angka prima: " + i);
            }
        }
        break;
    }
    return hasil;
}