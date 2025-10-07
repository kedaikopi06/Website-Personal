function orderKopi() {
  const jenisKopi = document.getElementById("kopi").value;

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      const mapsLink = https://www.google.com/maps?q=${lat},${lon};

      const pesan = Halo, saya ingin order ${jenisKopi}. Berikut lokasi saya: ${mapsLink};
      const nomorWa = "6281234567890"; // Ganti dengan nomor WA kamu (pakai format internasional, tanpa +)

      const linkWa = https://wa.me/${nomorWa}?text=${encodeURIComponent(pesan)};
      window.open(linkWa, "_blank");
    }, function (error) {
      alert("Gagal mengambil lokasi. Mohon izinkan akses lokasi.");
    });
  } else {
    alert("Browser tidak mendukung geolokasi.");
  }
}