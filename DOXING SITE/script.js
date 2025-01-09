// Функция для перехода на Telegram при нажатии кнопки "Купить"
function redirectToTelegram() {
    const telegramUrl = "https://t.me/CMEPTb_XAOCchanell";  // Ссылка на Telegram канал/аккаунт
    
    // Проверка на мобильное устройство, если это мобилка, используем tg://
    if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/iPhone/i)) {
        window.location.href = "tg://resolve?domain=CMEPTb_XAOCchanell"; // Для мобильных устройств
    } else {
        window.location.href = telegramUrl;  // Для десктопных устройств
    }
}

// Функция для перехода на Telegram при нажатии кнопки
function redirectToTelegram() {
    const telegramUrl = "https://t.me/CMEPTb_XAOC";  // Ссылка на Telegram канал/аккаунт
    
    // Проверка на мобильное устройство, если это мобилка, используем tg://
    if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/iPhone/i)) {
        window.location.href = "tg://resolve?domain=CMEPTb_XAOC"; // Для мобильных устройств
    } else {
        window.location.href = telegramUrl;  // Для десктопных устройств
    }
}

// Экран загрузки скрывается после загрузки страницы
window.onload = function() {
    document.getElementById("loading-screen").style.display = "none";
}

// Добавление обработчика клика на кнопку "Перейти в Telegram", который использует функцию redirectToTelegram()
document.getElementById('telegram-button').addEventListener('click', function(event) {
    // Добавляем анимацию нажатия или другие действия до перехода
    alert("Переход в Telegram канал...");
    
    // Переход в Telegram
    redirectToTelegram();  // Вызовем функцию для перехода
});
