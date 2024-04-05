let buku = [
    { nama: "sherlock", jumlah: 2 },
    { nama: "lupin", jumlah: 2 },
    { nama: "aladin", jumlah: 2 },
  ];
  
  function cari() {
    let jumlahInput = parseInt(document.getElementById("jumlah").value);
    let buku = document.getElementById("buku").value;
  
    if (jumlahInput === "" || isNaN(jumlahInput) || jumlahInput <= 0) {
      alert("Jumlah tidak valid atau kosong.");
    } else {
      let found = false;
      for (let i = 0; i < buku.length; i++) {
        if (buku[i].nama === buku) {
          found = true;
          if (buku[i].jumlah < jumlahInput) {
            alert("Jumlah buku tidak tersedia.");
          } else {
            alert("Silahkan ambil buku anda.");
          }
          break;
        }
      }
    }
  }
  
