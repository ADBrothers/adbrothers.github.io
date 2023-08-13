// Fungsi untuk menampilkan pop-up
function showPopup() {
    document.getElementById("popup").style.display = "block";
    document.getElementById("overlay").style.display = "block";
    
    // Memainkan suara saat pop-up muncul
    var popupSound = document.getElementById("popupSound");
    popupSound.play();
  }
  
  // Fungsi untuk menutup pop-up
  function closePopup() {
    document.getElementById("popup").style.display = "none";
    document.getElementById("overlay").style.display = "none";
    
    // Menghentikan suara latar belakang saat pop-up ditutup
    var popupSound = document.getElementById("popupSound");
    popupSound.pause();
    popupSound.currentTime = 0;
  }
  
  // Tampilkan pop-up saat halaman dimuat
  window.onload = showPopup
  // Waktu target (17 Agustus 2023, pukul 00:00:00)
const targetDate = new Date("2023-08-12T23:59:00").getTime();

// Fungsi untuk menghitung dan menampilkan countdown
function updateCountdown() {
  const currentDate = new Date().getTime();
  const timeRemaining = targetDate - currentDate;

  if (timeRemaining > 0) {
    displayCountdown(timeRemaining);
  } else {
    countdownFinished();
  }
}

// Fungsi untuk menampilkan countdown
function displayCountdown(timeRemaining) {
  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = formatTwoDigits(hours);
  document.getElementById("minutes").innerHTML = formatTwoDigits(minutes);
  document.getElementById("seconds").innerHTML = formatTwoDigits(seconds);
}

// Fungsi untuk menambahkan nol di depan angka jika hanya satu digit
function formatTwoDigits(number) {
  return (number < 10) ? "0" + number : number;
}

// Fungsi untuk menampilkan pesan selamat hari kemerdekaan
function displayMessage() {
  document.getElementById("countdown").style.display = "none";
  document.getElementById("message").style.display = "block";
}

// Fungsi untuk memainkan suara terompet
function playTerompetSound() {
  const terompetSound = document.getElementById("terompetSound");
  terompetSound.play();
}

// Fungsi untuk menampilkan animasi terompet saat countdown selesai
function showTerompetAnimation() {
  document.getElementById("terompetAnimation").style.display = "block";
  document.getElementById("terompetAnimation2").style.display = "block";
}

// Fungsi untuk menampilkan terompet banner saat countdown selesai
function showTerompetBanner() {
  document.getElementById("terompetBanner").style.display = "block";
}

// Fungsi untuk mengatur tampilan saat countdown selesai
function countdownFinished() {
  displayMessage();
  playTerompetSound();
  showTerompetAnimation();
  showTerompetBanner();
}

// Jalankan updateCountdown setiap 1 detik
setInterval(updateCountdown, 1000);

// Pertama kali, panggil updateCountdown agar countdown segera dimulai
updateCountdown();

