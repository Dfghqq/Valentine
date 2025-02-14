document.addEventListener("DOMContentLoaded", () => {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');

    if (noButton && yesButton) {
        noButton.addEventListener('click', handleNoClick);
        yesButton.addEventListener('click', handleYesClick);
    } else {
        console.warn("Tombol Ya/Tidak tidak ditemukan di DOM.");
    }
});

let hasPressedNo = false;
let messageIndex = 0;
let yesButtonSize = 16;
let currentLanguage = "id";

const textContent = {
    id: {
        mainText: "Apakah Kamu Mau Menjadi Valentineku?",
        yes: "Ya",
        no: "Tidak",
        messages: [
            "Apakah kamu yakin?",
            "Sungguh yakin??",
            "Pikirinn lagi, please...",
            "Kamu tegaaa",
            "seriusann nihh?",
            "sedihh banget sihh",
            "pilihh iyaa dong",
            "pilihh iya ditombol sebelahh",
            "Oke, aku nyerah dehh...",
            "tapii boong, bilang iya ya!"
        ]
    },
    en: {
        mainText: "Will You Be My Valentine?",
        yes: "Yes",
        no: "No",
        messages: [
            "Are you sure?",
            "Really sure??",
            "Think about it again, please...",
            "How could you...",
            "Are you really serious??",
            "This is so sad...",
            "Please choose yes...",
            " Pick yes on the button next to this...",
            "Okay, I give up...",
            "But just kidding, say yes!"
        ]
    }
};

function handleNoClick() {
    hasPressedNo = true;
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');

    noButton.textContent = textContent[currentLanguage].messages[messageIndex];
    messageIndex = (messageIndex + 1) % textContent[currentLanguage].messages.length;

    yesButtonSize *= 1.5;
    yesButton.style.fontSize = `${yesButtonSize}px`;

    yesButton.textContent = textContent[currentLanguage].yes;

    if (yesButtonSize > 250) {
        yesButton.textContent = currentLanguage === "id" ? "AYO, BILANG IYA! 😍" : "COME ON, SAY YES! 😍";
    }
    if (yesButtonSize > 400) {
        yesButton.textContent = currentLanguage === "id" ? "IYAAA" : "YESSS";
    }
}

function handleYesClick() {
    const yesButton = document.querySelector('.yes-button');

    if (!hasPressedNo) {
        yesButton.textContent = currentLanguage === "id" ? "Tunggu, tekan 'Tidak' dulu" : "Wait, press 'No' first";
        return;
    }

    yesButton.style.transform = "scale(1.5)";
    yesButton.style.transition = "transform 0.3s ease-in-out";

    setTimeout(() => {
        window.location.href = "yes_page.html";
    }, 500);
}

function switchLanguage(lang) {
    currentLanguage = lang;
    document.getElementById("question").textContent = textContent[lang].mainText;
    document.querySelector(".yes-button").textContent = textContent[lang].yes;
    document.querySelector(".no-button").textContent = textContent[lang].no;
}
