console.log("Languages loaded");
function setLanguage(lang) {
    const title = document.getElementById("title");
const vipButton = document.getElementById("vipButton");
    if (lang === "en") {
        title.innerText = "PREMIUM VIP SIGNALS";
    }

    if (lang === "ru") {
        title.innerText = "ПРЕМИУМ VIP СИГНАЛЫ";
    }

    if (lang === "tr") {
        title.innerText = "PREMIUM VIP SİNYALLER";
    }
}
