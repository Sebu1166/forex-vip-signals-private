console.log("Languages loaded");

function setLanguage(lang) {
    const title = document.getElementById("title");
    const vipButton = document.getElementById("vipButton");
const trustTitle = document.getElementById("trustTitle");
const trust1 = document.getElementById("trust1");
const trust2 = document.getElementById("trust2");
const trust3 = document.getElementById("trust3");
const trust4 = document.getElementById("trust4");

const statsTitle = document.getElementById("statsTitle");
const stats1 = document.getElementById("stats1");
const stats2 = document.getElementById("stats2");
const stats3 = document.getElementById("stats3");
    if (lang === "en") {
        title.innerText = "PREMIUM VIP SIGNALS";
        vipButton.innerText = "GET VIP ACCESS";
    }

    if (lang === "ru") {
        title.innerText = "ПРЕМИУМ VIP СИГНАЛЫ";
        vipButton.innerText = "ПОЛУЧИТЬ VIP ДОСТУП";
    }

    if (lang === "tr") {
        title.innerText = "PREMIUM VIP SİNYALLER";
        vipButton.innerText = "VIP ERİŞİM AL";
    }
}
