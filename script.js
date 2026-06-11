console.log("Languages loaded");
function setLanguage(lang) {
    const title = document.getElementById("title");
const vipButton = document.getElementById("vipButton");
    if (lang === "en") {
        title.innerText = "PREMIUM VIP SIGNALS";
    }

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
