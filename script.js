console.log("Languages loaded");
function setLanguage(lang) {
    const title = document.getElementById("title");
const vipButton = document.getElementById("vipButton");
const markets = document.getElementById("markets");
const timeframes = document.getElementById("timeframes");    

    if (lang === "en") {
    title.innerText = "PREMIUM VIP SIGNALS";
    vipButton.innerText = "GET VIP ACCESS";
}
markets.innerText = "Forex • Gold • Oil • Crypto";
timeframes.innerText = "M5 (Gold) • M15 • M30 • H1 • H4";
if (lang === "ru") {
    title.innerText = "ПРЕМИУМ VIP СИГНАЛЫ";
    vipButton.innerText = "ПОЛУЧИТЬ VIP ДОСТУП";
}
markets.innerText = "Форекс • Золото • Нефть • Криптовалюта";
timeframes.innerText = "M5 (Золото) • M15 • M30 • H1 • H4";
if (lang === "tr") {
    title.innerText = "PREMIUM VIP SİNYALLER";
    vipButton.innerText = "VIP ERİŞİM AL";
}
markets.innerText = "Forex • Altın • Petrol • Kripto";
timeframes.innerText = "M5 (Altın) • M15 • M30 • H1 • H4";
