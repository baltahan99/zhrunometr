/* Настройки Жрунометра. Оба поля необязательные, подробности в README.

   databaseURL — адрес Realtime Database из консоли Firebase. С ним синхронизация
   включается сразу на всех телефонах, без ввода адреса в приложении. Пример:
   'https://zhrunometr-1a2b3-default-rtdb.europe-west1.firebasedatabase.app'

   webURL — адрес веб-версии на GitHub Pages, например 'https://имя.github.io/zhrunometr/'.
   Его добавят в приглашение, чтобы напарник с iPhone сразу открыл приложение. */
window.ZHR_CONFIG = {
  databaseURL: 'https://zhrunometr-default-rtdb.europe-west1.firebasedatabase.app',
  webURL: ''
};
