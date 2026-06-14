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

    trustTitle.innerText = "Why Choose Us?";
    trust1.innerText = "✅ Real market analysis";
    trust2.innerText = "✅ TP & SL included";
    trust3.innerText = "✅ XAU/USD M5 special signals";
    trust4.innerText = "✅ Private Telegram access";

    statsTitle.innerText = "Last 30 Days Performance";
    stats1.innerText = "📈 Win Rate: 87%";
    stats2.innerText = "⚖️ Average RR: 1:2.3";
    stats3.innerText = "📊 Signals: 126";
}

    if (lang === "ru") {
    title.innerText = "ПРЕМИУМ VIP СИГНАЛЫ";
    vipButton.innerText = "ПОЛУЧИТЬ VIP ДОСТУП";

    trustTitle.innerText = "Почему выбирают нас?";
    trust1.innerText = "✅ Реальный анализ рынка";
    trust2.innerText = "✅ TP и SL включены";
    trust3.innerText = "✅ Специальные сигналы XAU/USD M5";
    trust4.innerText = "✅ Доступ к приватному Telegram";

    statsTitle.innerText = "Результаты за последние 30 дней";
    stats1.innerText = "📈 Процент побед: 87%";
    stats2.innerText = "⚖️ Средний RR: 1:2.3";
    stats3.innerText = "📊 Сигналов: 126";
                                           }

    if (lang === "tr") {
    title.innerText = "PREMIUM VIP SİNYALLER";
    vipButton.innerText = "VIP ERİŞİM AL";

    trustTitle.innerText = "Neden Bizi Seçmelisiniz?";
    trust1.innerText = "✅ Gerçek piyasa analizi";
    trust2.innerText = "✅ TP ve SL dahil";
    trust3.innerText = "✅ XAU/USD M5 özel sinyalleri";
    trust4.innerText = "✅ Özel Telegram erişimi";

    statsTitle.innerText = "Son 30 Günlük Sonuçlar";
    stats1.innerText = "📈 Başarı Oranı: %87";
    stats2.innerText = "⚖️ Ortalama RR: 1:2.3";
    stats3.innerText = "📊 Sinyal Sayısı: 126";
    }
}
