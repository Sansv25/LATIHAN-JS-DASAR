import { cetak_genap, cetak_ganjil, cetak_prima} from './function.js';
function mulai() {
    console.log("Program dimulai");
    program()
}
function program() {
    while (true) {
    var pilihan = prompt("Masukkan pilihan:" + "\n1. Perhitungan" + "\n2. Klasifikasi" + "\n3. Cetak Angka");
    if (pilihan === null) {
        console.log("Pengguna membatalkan pilihan.");
        alert("Anda telah membatalkan pilihan.Terima kasih telah menggunakan program ini!");
        break;
    }
    pilihan = pilihan.toLowerCase();
    if (pilihan == "1" || pilihan.includes("hitung")) {
        console.log("Memilih perhitungan");
        while (true) {
            var perhitungan_pilihan = prompt("Pilih operasi perhitungan:" + "\n1. Penjumlahan" + "\n2. Pengurangan" + "\n3. Perkalian" + "\n4. Pembagian");
        if (perhitungan_pilihan === null) {
            console.log("Pengguna membatalkan pilihan.");
            alert("Anda telah membatalkan pilihan.");
            var ulang_perhitungan =  confirm("Apakah Anda ingin mengulang?");
            if (ulang_perhitungan) {
                console.log("Pengguna memilih untuk mengulang program.");
                var pilihan = confirm("Anda ingin mengulang memilih perhitungan?");
                if (pilihan) {
                    continue;
                } else {
                    console.log("Pengguna tidak mengulang perhitungan.");
                    break;
                }
            } else {
                console.log("Pengguna tidak mengulang program.");
                alert("Terima kasih telah menggunakan program ini!");
                break;
            }
        }
        var operasi = perhitungan_pilihan.toLowerCase();
        if (!(operasi <= 4) &&
            !operasi.includes("jum") &&
            !operasi.includes("kur") && 
            !operasi.includes("kal") &&
            !operasi.includes("bag") ||
            operasi == ""
        )
        {
            console.log("Operasi tidak valid");
            alert("Pilihan operasi tidak valid.");
            continue;
        }
        while (true) {
            var berapaangka = parseInt(prompt("Masukkan jumlah angka yang ingin dihitung (2 atau lebih):"));
            console.log("Jumlah angka yang dimasukkan:", berapaangka);
            if (berapaangka < 2) {
                alert("Anda harus memasukkan minimal 2 angka untuk perhitungan.");
            } else if (berapaangka === null || isNaN(berapaangka)) {
                alert("Input tidak valid. Keluar dari perhitungan.");
                break;
            } else {
                break;
            }
        }
        var daftarAngka = [];
        for (var i = 1; i <= berapaangka; i++) {
            var angka = parseFloat(prompt("Masukkan angka ke-" + i + ":"));
            if (!(isNaN(angka))) {
                console.log("Memasukan " + angka + " ke dalam Array");
                daftarAngka.push(angka);
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
        }
            console.log("Hasil perhitungan:", hasil);
            alert("Hasil perhitungan: " + hasil);
            break;
        }
    } else if (pilihan == "2" || pilihan.includes("klas")) {
        console.log("Memilih klasifikasi");
        var klasifikasi_pilihan = prompt("Pilih jenis klasifikasi:" + "\n1. Bilangan Genap atau Ganjil" + "\n2. Bilangan Positif atau Negatif"  + "\n2. Bilangan Prima");
    } else if (pilihan == "3" || pilihan.includes("cetak")) {
        console.log("Memilih cetak angka");
        while (true) {
            var operasi_cetak = prompt("Masukkan Operasi cetak angka:" + "\n1. Cetak Angka Genap" + "\n2. Cetak Angka Ganjil" + "\n3. Cetak Bilangan Prima");
        if (operasi_cetak === null) {
            console.log("Pengguna membatalkan pilihan.");
            alert("Anda telah membatalkan pilihan.");
            var ulang_cetak =  confirm("Apakah Anda ingin mengulang?");
            if (ulang_cetak) {
                console.log("Pengguna memilih untuk mengulang program.");
                var pilihan = confirm("Anda ingin mengulang perhitungan?");
                if (pilihan) {
                    continue;
                } else {
                    console.log("Pengguna tidak mengulang memilih cetak angka.");
                    break;
                }
            } else {
                console.log("Pengguna tidak mengulang program.");
                alert("Terima kasih telah menggunakan program ini!");
                break;
            }
        }
        var operasi = operasi_cetak.toLowerCase();
        if (!(operasi <= 3) &&
            !operasi.includes("genap") &&
            !operasi.includes("ganjil") && 
            !operasi.includes("prima") ||
            operasi == ""
        )
        {
            console.log("Operasi tidak valid");
            alert("Pilihan operasi tidak valid.");
            continue;
        }
        var hasil = [];
        if (operasi == "1" || operasi.includes("genap")) {
            console.log("Memilih cetak angka genap");
            hasil = cetak_genap();
        } else if (operasi == "2" || operasi.includes("ganjil")) {
            console.log("Memilih cetak angka ganjil");
            hasil = cetak_ganjil();
        } else if (operasi == "3" || operasi.includes("prima")) {
            console.log("Memilih cetak bilangan prima");
            hasil =  cetak_prima();
        }
        if (hasil !== 0)  {
            console.log("Hasil cetak angka:", hasil);
            alert("Hasil cetak angka: " + hasil.join(", "));
        }
        break;
        }
    }else {
        alert("Pilihan tidak valid");
    }
    var ulang = confirm("Apakah Anda ingin mengulang program?");
    if (ulang) {
        console.log("Pengguna memilih untuk mengulang program.");
        continue;
    } else {
        console.log("Pengguna tidak mengulang program.");
        alert("Terima kasih telah menggunakan program ini!");
        break;
    }
}
}
window.mulai = mulai;