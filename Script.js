// Pastikan DOM sudah sepenuhnya dimuat sebelum memanipulasi elemen
document.addEventListener("DOMContentLoaded", () => {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');

    // Menambahkan event listener ke tombol jika elemen ditemukan
    if (noButton && yesButton) {
        noButton.addEventListener('click', handleNoClick);
        yesButton.addEventListener('click', handleYesClick);
    } else {
        console.warn("Tombol tidak ditemukan di DOM.");
    }

    // Panggil fungsi untuk memeriksa update versi aplikasi
    checkForUpdates();
});

// Daftar pesan yang akan ditampilkan saat tombol 'No' diklik
const messages = [
    "Apakah kamu yakin?",
    "Sungguh yakin??",
    "Apakah kamu pasti?",
    "Tolong, sayang...",
    "Pikirkan dulu ya!",
    "Jika kamu bilang tidak, aku akan sangat sedih...",
    "Aku akan sangat sedih...",
    "Aku akan sangat sangat sangat sedih...",
    "Oke, baiklah, aku akan berhenti bertanya...",
    "Canda, tolong bilang iya ya! ❤️"
];

let messageIndex = 0;

// Fungsi untuk menangani klik pada tombol 'No'
function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

// Fungsi untuk menangani klik pada tombol 'Yes' dan pindah ke halaman 'yes_page.html'
function handleYesClick() {
    window.location.href = "yes_page.html";
}

// Fungsi untuk memeriksa update versi aplikasi
async function checkForUpdates() {
    const currentVersion = "1.0"; // Versi aplikasi saat ini
    const versionUrl = "https://raw.githubusercontent.com/ivysone/Will-you-be-my-Valentine-/main/version.json"; // URL file versi

    try {
        const response = await fetch(versionUrl);
        if (!response.ok) {
            console.warn("Could not fetch version information.");
            return;
        }
        const data = await response.json();
        const latestVersion = data.version;
        const updateMessage = data.updateMessage;

        // Jika versi terbaru tidak sama dengan versi saat ini, tampilkan pesan pembaruan
        if (currentVersion !== latestVersion) {
            alert(updateMessage);
        } else {
            console.log("You are using the latest version.");
        }
    } catch (error) {
        console.error("Error checking for updates:", error);
    }
}
