var mengulang = false; // inisialisasi variabel untuk mengontrol loop
function mulai() {
    mengulang = true; // set mengulang menjadi true untuk memulai loop
    console.log("Program dimulai");
    program()
}
function program() {
    while (mengulang) { // loop selama mengulang bernilai true
    var pilihan = prompt("Masukkan pilihan:" + "\n1. Perhitungan" + "\n2. Klasifikasi"); // <-- Prompt Untuk Meminta user Mengetikan pilihan
    pilihan = pilihan.toLowerCase(); // <-- Tolowercase untuk mengubah isi variable pilihan menjadi huruf kecil atau kapital ke huruf kecil
    if (pilihan == "1" || pilihan.includes("hitung")) { // <-- Jika pilihan adalah 1 atau mengandung kata 'hitung' bernilai true
        console.log("Memilih perhitungan"); // <-- Menampilkan pesan ke konsol
        var perhitungan_pilihan = prompt("Pilih operasi perhitungan:" + "\n1. Penjumlahan" + "\n2. Pengurangan" + "\n3. Perkalian" + "\n4. Pembagian");// <-- Prompt untuk meminta user memilih operasi perhitungan
        var operasi = perhitungan_pilihan.toLowerCase(); // <-- Mengubah input variable operasi menjadi huruf kecil
        if (!(operasi <= 4) && // <-- memeriksa apakah operasi kurangdari sama dengan 4
            !operasi.includes("jum") &&
            !operasi.includes("kur") && 
            !operasi.includes("kal") &&
            !operasi.includes("bag") || // <-- Memeriksa apakah operasi tidak mengandung kata 'jum', 'kur', 'kal', atau 'bag'
            operasi == "" // <-- Memeriksa apakah operasi kosong
        )  // <-- Memeriksa apakah input operasi tidak valid
        {
            console.log("Operasi tidak valid");
            alert("Pilihan operasi tidak valid.");
            continue; // kembali ke awal loop jika input tidak valid ke line  2
        }
        while (true) {
            var berapaangka = parseInt(prompt("Masukkan jumlah angka yang ingin dihitung (2 atau lebih):")); //perseint mengubah input menjadi integer
            console.log("Jumlah angka yang dimasukkan:", berapaangka);
            if (berapaangka == 1) {
                alert("Anda harus memasukkan minimal 2 angka untuk perhitungan.");
            } else if (berapaangka === null || isNaN(berapaangka) || berapaangka < 2) {
                alert("Input tidak valid. Keluar dari perhitungan.");
                break; // keluar dari loop jika input tidak valid
            } else {
                break; // keluar dari loop jika input valid
            }
        }
        var daftarAngka = []; // deklarasi array kosong
        for (var i = 1; i <= berapaangka; i++) {
            var angka = parseFloat(prompt("Masukkan angka ke-" + i + ":"));
            if (!(isNaN(angka))) {
                console.log("Memasukan " + angka + " ke dalam Array");
                daftarAngka.push(angka); // menambahkan angka ke array
            } else {
                alert("Input tidak valid. Silakan masukkan angka yang benar.");
                if (confirm("Apakah Anda ingin mengulang input angka ini?")) {
                    i--;
                } else {
                    alert("Keluar dari perhitungan.");
                    break;
                }
            }
        }
        console.log("Angka-angka yang dimasukkan:", daftarAngka);
        var hasil = 0;
        if (!(daftarAngka.length == 0)) {
            switch (true) {
                case (operasi.includes("jum") || operasi == "1"):
                    console.log("Masuk ke operasi penjumlahan");
                    for (var j = 0; j < daftarAngka.length; j++) {
                        if (j == 0) {
                            hasil = daftarAngka[j];
                        } else {
                            console.log("menjumlahkan " + hasil + " ditambah " + daftarAngka[j]);
                            hasil += daftarAngka[j];
                        }
                    }
                    break;
                case (operasi.includes("kur") || operasi == "2"):
                    console.log("masuk ke operasi pengurangan");
                    for (var j = 0; j < daftarAngka.length; j++) {
                        if (j == 0) {
                            hasil = daftarAngka[j];
                        } else {
                            console.log("mengurangkan " + hasil + " dikurangi " + daftarAngka[j]);
                            hasil -= daftarAngka[j];
                        }
                    }
                    break;
                case (operasi.includes("kal") || operasi == "3"):
                    console.log("masuk ke operasi perkalian");
                    for (var j = 0; j < daftarAngka.length; j++) {
                        if (j == 0) {
                            hasil = daftarAngka[j];
                        } else {
                            console.log("mengkalikan " + hasil + " dikali " + daftarAngka[j]);
                            hasil *= daftarAngka[j];
                        }
                    }
                    break;
                case (operasi.includes("bag") || operasi == "4"):
                    console.log("masuk ke operasi pembagian");
                    for (var j = 0; j < daftarAngka.length; j++) {
                        if (j == 0) {
                            hasil = daftarAngka[j];
                        } else if (daftarAngka[j] == 0) {
                            alert("Pembagian dengan nol tidak diperbolehkan. Keluar dari perhitungan.");
                            hasil = "Tidak terdefinisi";
                            break;
                        } else {
                            console.log("membagikan " + hasil + " dibagi " + daftarAngka[j]);
                            hasil /= daftarAngka[j];
                        }
                    }
                    break;
            }
            console.log("Hasil perhitungan:", hasil);
            alert("Hasil perhitungan: " + hasil);
        }
    } else if (pilihan == "2" || pilihan.includes("klas")) {
        console.log("Memilih klasifikasi");
        var angka = parseFloat(prompt("Masukkan angka untuk klasifikasi:"));
        console.log("Angka yang dimasukkan:", angka);
    } else {
        alert("Pilihan tidak valid");
    }
    var ulang = confirm("Apakah Anda ingin mengulang?");
    if (ulang) {
        mengulang = true;
    } else {
        mengulang = false;
        alert("Terima kasih telah menggunakan program ini!");
    }
}
}