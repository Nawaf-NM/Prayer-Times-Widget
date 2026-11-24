/* Prayer Times widget - Developer: Nawaf AlMutairi - https://Nawaf-Blog.com/NM */
var KEYS = ['Fajr', 'Dhuhr', 'Asr', 'Maghrib', 'Isha'];

/* ---------------- Languages ---------------- */
var LANGS = {
  ar: {
    dir: 'rtl',
    names: ['\u0627\u0644\u0641\u062c\u0631', '\u0627\u0644\u0638\u0647\u0631', '\u0627\u0644\u0639\u0635\u0631', '\u0627\u0644\u0645\u063a\u0631\u0628', '\u0627\u0644\u0639\u0634\u0627\u0621'], fri: '\u0627\u0644\u062c\u0645\u0639\u0629',
    days: ['\u0627\u0644\u0623\u062d\u062f', '\u0627\u0644\u0627\u062b\u0646\u064a\u0646', '\u0627\u0644\u062b\u0644\u0627\u062b\u0627\u0621', '\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621', '\u0627\u0644\u062e\u0645\u064a\u0633', '\u0627\u0644\u062c\u0645\u0639\u0629', '\u0627\u0644\u0633\u0628\u062a'],
    hm: ['\u0645\u062d\u0631\u0645', '\u0635\u0641\u0631', '\u0631\u0628\u064a\u0639 \u0627\u0644\u0623\u0648\u0644', '\u0631\u0628\u064a\u0639 \u0627\u0644\u0622\u062e\u0631', '\u062c\u0645\u0627\u062f\u0649 \u0627\u0644\u0623\u0648\u0644\u0649', '\u062c\u0645\u0627\u062f\u0649 \u0627\u0644\u0622\u062e\u0631\u0629', '\u0631\u062c\u0628', '\u0634\u0639\u0628\u0627\u0646', '\u0631\u0645\u0636\u0627\u0646', '\u0634\u0648\u0627\u0644', '\u0630\u0648 \u0627\u0644\u0642\u0639\u062f\u0629', '\u0630\u0648 \u0627\u0644\u062d\u062c\u0629'],
    ah: '\u0647\u0640', am: '\u0635', pm: '\u0645',
    next: '\u0627\u0644\u0635\u0644\u0627\u0629 \u0627\u0644\u0642\u0627\u062f\u0645\u0629: ', loading: '\u062c\u0627\u0631\u064d \u062a\u062d\u0645\u064a\u0644 \u0627\u0644\u0645\u0648\u0627\u0642\u064a\u062a...', fail: '\u062a\u0639\u0630\u0631 \u062c\u0644\u0628 \u0627\u0644\u0645\u0648\u0627\u0642\u064a\u062a\u060c \u062a\u062d\u0642\u0642 \u0645\u0646 \u0627\u0644\u0627\u062a\u0635\u0627\u0644', geo: '\u062a\u0639\u0630\u0631 \u0625\u064a\u062c\u0627\u062f \u0627\u0644\u0645\u062f\u064a\u0646\u0629\u060c \u062a\u062d\u0642\u0642 \u0645\u0646 \u0627\u0644\u0625\u0639\u062f\u0627\u062f\u0627\u062a',
    now: function (n) { return '\u062d\u0627\u0646 \u0627\u0644\u0622\u0646 \u0648\u0642\u062a \u0635\u0644\u0627\u0629 ' + n; }
  },
  en: {
    dir: 'ltr',
    names: ['Fajr', 'Dhuhr', 'Asr', 'Maghrib', 'Isha'], fri: 'Jumuah',
    days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    hm: ['Muharram', 'Safar', 'Rabi al-Awwal', 'Rabi al-Thani', 'Jumada al-Awwal', 'Jumada al-Thani', 'Rajab', 'Shaban', 'Ramadan', 'Shawwal', 'Dhu al-Qadah', 'Dhu al-Hijjah'],
    ah: 'AH', am: 'AM', pm: 'PM',
    next: 'Next prayer: ', loading: 'Loading prayer times...', fail: 'Could not get prayer times, check your connection', geo: 'City not found, check the settings',
    now: function (n) { return 'It is now time for ' + n; }
  },
  tr: {
    dir: 'ltr',
    names: ['Sabah', '\u00d6\u011fle', '\u0130kindi', 'Ak\u015fam', 'Yats\u0131'], fri: 'Cuma',
    days: ['Pazar', 'Pazartesi', 'Sal\u0131', '\u00c7ar\u015famba', 'Per\u015fembe', 'Cuma', 'Cumartesi'],
    hm: ['Muharrem', 'Safer', 'Rebi\u00fclevvel', 'Rebi\u00fclahir', 'Cemaziyelevvel', 'Cemaziyelahir', 'Recep', '\u015eaban', 'Ramazan', '\u015eevval', 'Zilkade', 'Zilhicce'],
    ah: 'H.', am: '\u00d6\u00d6', pm: '\u00d6S',
    next: 'Sonraki namaz: ', loading: 'Namaz vakitleri y\u00fckleniyor...', fail: 'Vakitler al\u0131namad\u0131, ba\u011flant\u0131y\u0131 kontrol edin', geo: '\u015eehir bulunamad\u0131, ayarlar\u0131 kontrol edin',
    now: function (n) { return n + ' vakti girdi'; }
  },
  ur: {
    dir: 'rtl',
    names: ['\u0641\u062c\u0631', '\u0638\u06c1\u0631', '\u0639\u0635\u0631', '\u0645\u063a\u0631\u0628', '\u0639\u0634\u0627\u0621'], fri: '\u062c\u0645\u0639\u06c1',
    days: ['\u0627\u062a\u0648\u0627\u0631', '\u067e\u06cc\u0631', '\u0645\u0646\u06af\u0644', '\u0628\u062f\u06be', '\u062c\u0645\u0639\u0631\u0627\u062a', '\u062c\u0645\u0639\u06c1', '\u06c1\u0641\u062a\u06c1'],
    hm: ['\u0645\u062d\u0631\u0645', '\u0635\u0641\u0631', '\u0631\u0628\u06cc\u0639 \u0627\u0644\u0627\u0648\u0644', '\u0631\u0628\u06cc\u0639 \u0627\u0644\u062b\u0627\u0646\u06cc', '\u062c\u0645\u0627\u062f\u06cc \u0627\u0644\u0627\u0648\u0644', '\u062c\u0645\u0627\u062f\u06cc \u0627\u0644\u062b\u0627\u0646\u06cc', '\u0631\u062c\u0628', '\u0634\u0639\u0628\u0627\u0646', '\u0631\u0645\u0636\u0627\u0646', '\u0634\u0648\u0627\u0644', '\u0630\u0648\u0627\u0644\u0642\u0639\u062f\u06c1', '\u0630\u0648\u0627\u0644\u062d\u062c\u06c1'],
    ah: '\u06be', am: '\u0635\u0628\u062d', pm: '\u0634\u0627\u0645',
    next: '\u0627\u06af\u0644\u06cc \u0646\u0645\u0627\u0632: ', loading: '\u0627\u0648\u0642\u0627\u062a\u0650 \u0646\u0645\u0627\u0632 \u0644\u0648\u0688 \u06c1\u0648 \u0631\u06c1\u06d2 \u06c1\u06cc\u06ba...', fail: '\u0627\u0648\u0642\u0627\u062a\u0650 \u0646\u0645\u0627\u0632 \u062d\u0627\u0635\u0644 \u0646\u06c1 \u06c1\u0648 \u0633\u06a9\u06d2\u060c \u06a9\u0646\u06a9\u0634\u0646 \u0686\u06cc\u06a9 \u06a9\u0631\u06cc\u06ba', geo: '\u0634\u06c1\u0631 \u0646\u06c1\u06cc\u06ba \u0645\u0644\u0627\u060c \u0633\u06cc\u0679\u0646\u06af\u0632 \u0686\u06cc\u06a9 \u06a9\u0631\u06cc\u06ba',
    now: function (n) { return n + ' \u06a9\u0627 \u0648\u0642\u062a \u06c1\u0648 \u06af\u06cc\u0627'; }
  },
  fr: {
    dir: 'ltr',
    names: ['Fajr', 'Dhuhr', 'Asr', 'Maghrib', 'Isha'], fri: 'Joumou\u2019a',
    days: ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'],
    hm: ['Mouharram', 'Safar', 'Rabi al-Awwal', 'Rabi ath-Thani', 'Joumada al-Oula', 'Joumada ath-Thania', 'Rajab', 'Chaabane', 'Ramadan', 'Chawwal', 'Dhou al-Qida', 'Dhou al-Hijja'],
    ah: 'AH', am: 'AM', pm: 'PM',
    next: 'Prochaine pri\u00e8re : ', loading: 'Chargement des horaires...', fail: 'Horaires indisponibles, v\u00e9rifiez la connexion', geo: 'Ville introuvable, v\u00e9rifiez les r\u00e9glages',
    now: function (n) { return 'C\u2019est l\u2019heure de ' + n; }
  },
  id: {
    dir: 'ltr',
    names: ['Subuh', 'Zuhur', 'Asar', 'Magrib', 'Isya'], fri: 'Jumat',
    days: ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'],
    hm: ['Muharam', 'Safar', 'Rabiulawal', 'Rabiulakhir', 'Jumadilawal', 'Jumadilakhir', 'Rajab', 'Syakban', 'Ramadan', 'Syawal', 'Zulkaidah', 'Zulhijah'],
    ah: 'H', am: 'AM', pm: 'PM',
    next: 'Salat berikutnya: ', loading: 'Memuat jadwal salat...', fail: 'Gagal memuat jadwal, periksa koneksi', geo: 'Kota tidak ditemukan, periksa pengaturan',
    now: function (n) { return 'Waktu ' + n + ' telah tiba'; }
  }
};

LANGS.fa = {
  dir: 'rtl',
  names: ['\u0635\u0628\u062d', '\u0638\u0647\u0631', '\u0639\u0635\u0631', '\u0645\u063a\u0631\u0628', '\u0639\u0634\u0627\u0621'], fri: '\u062c\u0645\u0639\u0647',
  days: ['\u06cc\u06a9\u0634\u0646\u0628\u0647', '\u062f\u0648\u0634\u0646\u0628\u0647', '\u0633\u0647\u200c\u0634\u0646\u0628\u0647', '\u0686\u0647\u0627\u0631\u0634\u0646\u0628\u0647', '\u067e\u0646\u062c\u0634\u0646\u0628\u0647', '\u062c\u0645\u0639\u0647', '\u0634\u0646\u0628\u0647'],
  hm: ['\u0645\u062d\u0631\u0645', '\u0635\u0641\u0631', '\u0631\u0628\u06cc\u0639\u200c\u0627\u0644\u0627\u0648\u0644', '\u0631\u0628\u06cc\u0639\u200c\u0627\u0644\u062b\u0627\u0646\u06cc', '\u062c\u0645\u0627\u062f\u06cc\u200c\u0627\u0644\u0627\u0648\u0644', '\u062c\u0645\u0627\u062f\u06cc\u200c\u0627\u0644\u062b\u0627\u0646\u06cc', '\u0631\u062c\u0628', '\u0634\u0639\u0628\u0627\u0646', '\u0631\u0645\u0636\u0627\u0646', '\u0634\u0648\u0627\u0644', '\u0630\u06cc\u200c\u0627\u0644\u0642\u0639\u062f\u0647', '\u0630\u06cc\u200c\u0627\u0644\u062d\u062c\u0647'],
  ah: '\u0647\u200d.\u0642', am: '\u0635', pm: '\u0639',
  next: '\u0646\u0645\u0627\u0632 \u0628\u0639\u062f\u06cc: ', loading: '\u062f\u0631 \u062d\u0627\u0644 \u0628\u0627\u0631\u06af\u0630\u0627\u0631\u06cc \u0627\u0648\u0642\u0627\u062a \u0634\u0631\u0639\u06cc...', fail: '\u062f\u0631\u06cc\u0627\u0641\u062a \u0627\u0648\u0642\u0627\u062a \u0646\u0627\u0645\u0648\u0641\u0642 \u0628\u0648\u062f\u060c \u0627\u062a\u0635\u0627\u0644 \u0631\u0627 \u0628\u0631\u0631\u0633\u06cc \u06a9\u0646\u06cc\u062f', geo: '\u0634\u0647\u0631 \u067e\u06cc\u062f\u0627 \u0646\u0634\u062f\u060c \u062a\u0646\u0638\u06cc\u0645\u0627\u062a \u0631\u0627 \u0628\u0631\u0631\u0633\u06cc \u06a9\u0646\u06cc\u062f',
  now: function (n) { return '\u0648\u0642\u062a ' + n + ' \u0641\u0631\u0627 \u0631\u0633\u06cc\u062f\u0647 \u0627\u0633\u062a'; }
};
LANGS.ms = {
  dir: 'ltr',
  names: ['Subuh', 'Zohor', 'Asar', 'Maghrib', 'Isyak'], fri: 'Jumaat',
  days: ['Ahad', 'Isnin', 'Selasa', 'Rabu', 'Khamis', 'Jumaat', 'Sabtu'],
  hm: ['Muharram', 'Safar', 'Rabiulawal', 'Rabiulakhir', 'Jamadilawal', 'Jamadilakhir', 'Rejab', 'Syaaban', 'Ramadan', 'Syawal', 'Zulkaedah', 'Zulhijjah'],
  ah: 'H', am: 'PG', pm: 'PTG',
  next: 'Solat seterusnya: ', loading: 'Memuatkan waktu solat...', fail: 'Gagal mendapatkan waktu, semak sambungan', geo: 'Bandar tidak dijumpai, semak tetapan',
  now: function (n) { return 'Telah masuk waktu ' + n; }
};
LANGS.bn = {
  dir: 'ltr',
  names: ['\u09ab\u099c\u09b0', '\u09af\u09cb\u09b9\u09b0', '\u0986\u09b8\u09b0', '\u09ae\u09be\u0997\u09b0\u09bf\u09ac', '\u098f\u09b6\u09be'], fri: '\u099c\u09c1\u09ae\u09be',
  days: ['\u09b0\u09ac\u09bf\u09ac\u09be\u09b0', '\u09b8\u09cb\u09ae\u09ac\u09be\u09b0', '\u09ae\u0999\u09cd\u0997\u09b2\u09ac\u09be\u09b0', '\u09ac\u09c1\u09a7\u09ac\u09be\u09b0', '\u09ac\u09c3\u09b9\u09b8\u09cd\u09aa\u09a4\u09bf\u09ac\u09be\u09b0', '\u09b6\u09c1\u0995\u09cd\u09b0\u09ac\u09be\u09b0', '\u09b6\u09a8\u09bf\u09ac\u09be\u09b0'],
  hm: ['\u09ae\u09c1\u09b9\u09be\u09b0\u09b0\u09ae', '\u09b8\u09ab\u09b0', '\u09b0\u09ac\u09bf\u0989\u09b2 \u0986\u0989\u09af\u09bc\u09be\u09b2', '\u09b0\u09ac\u09bf\u0989\u09b8 \u09b8\u09be\u09a8\u09bf', '\u099c\u09ae\u09be\u09a6\u09bf\u0989\u09b2 \u0986\u0989\u09af\u09bc\u09be\u09b2', '\u099c\u09ae\u09be\u09a6\u09bf\u0989\u09b8 \u09b8\u09be\u09a8\u09bf', '\u09b0\u099c\u09ac', '\u09b6\u09be\u09ac\u09be\u09a8', '\u09b0\u09ae\u099c\u09be\u09a8', '\u09b6\u09be\u0993\u09af\u09bc\u09be\u09b2', '\u099c\u09bf\u09b2\u0995\u09a6', '\u099c\u09bf\u09b2\u09b9\u099c'],
  ah: '\u09b9\u09bf.', am: 'AM', pm: 'PM',
  next: '\u09aa\u09b0\u09ac\u09b0\u09cd\u09a4\u09c0 \u09a8\u09be\u09ae\u09be\u099c: ', loading: '\u09a8\u09be\u09ae\u09be\u099c\u09c7\u09b0 \u09b8\u09ae\u09af\u09bc \u09b2\u09cb\u09a1 \u09b9\u099a\u09cd\u099b\u09c7...', fail: '\u09b8\u09ae\u09af\u09bc \u09aa\u09be\u0993\u09af\u09bc\u09be \u09af\u09be\u09af\u09bc\u09a8\u09bf, \u09b8\u0982\u09af\u09cb\u0997 \u09aa\u09b0\u09c0\u0995\u09cd\u09b7\u09be \u0995\u09b0\u09c1\u09a8', geo: '\u09b6\u09b9\u09b0 \u09aa\u09be\u0993\u09af\u09bc\u09be \u09af\u09be\u09af\u09bc\u09a8\u09bf, \u09b8\u09c7\u099f\u09bf\u0982\u09b8 \u09a6\u09c7\u0996\u09c1\u09a8',
  now: function (n) { return n + ' \u098f\u09b0 \u09b8\u09ae\u09af\u09bc \u09b9\u09af\u09bc\u09c7\u099b\u09c7'; }
};
LANGS.ru = {
  dir: 'ltr',
  names: ['\u0424\u0430\u0434\u0436\u0440', '\u0417\u0443\u0445\u0440', '\u0410\u0441\u0440', '\u041c\u0430\u0433\u0440\u0438\u0431', '\u0418\u0448\u0430'], fri: '\u0414\u0436\u0443\u043c\u0430',
  days: ['\u0412\u043e\u0441\u043a\u0440\u0435\u0441\u0435\u043d\u044c\u0435', '\u041f\u043e\u043d\u0435\u0434\u0435\u043b\u044c\u043d\u0438\u043a', '\u0412\u0442\u043e\u0440\u043d\u0438\u043a', '\u0421\u0440\u0435\u0434\u0430', '\u0427\u0435\u0442\u0432\u0435\u0440\u0433', '\u041f\u044f\u0442\u043d\u0438\u0446\u0430', '\u0421\u0443\u0431\u0431\u043e\u0442\u0430'],
  hm: ['\u041c\u0443\u0445\u0430\u0440\u0440\u0430\u043c', '\u0421\u0430\u0444\u0430\u0440', '\u0420\u0430\u0431\u0438 \u0430\u043b\u044c-\u0430\u0432\u0432\u0430\u043b\u044c', '\u0420\u0430\u0431\u0438 \u0430\u0441-\u0441\u0430\u043d\u0438', '\u0414\u0436\u0443\u043c\u0430\u0434\u0430 \u0430\u043b\u044c-\u0443\u043b\u044f', '\u0414\u0436\u0443\u043c\u0430\u0434\u0430 \u0430\u0441-\u0441\u0430\u043d\u0438\u044f', '\u0420\u0430\u0434\u0436\u0430\u0431', '\u0428\u0430\u0430\u0431\u0430\u043d', '\u0420\u0430\u043c\u0430\u0434\u0430\u043d', '\u0428\u0430\u0432\u0432\u0430\u043b\u044c', '\u0417\u0443\u043b\u044c-\u043a\u0430\u0434\u0430', '\u0417\u0443\u043b\u044c-\u0445\u0438\u0434\u0436\u0430'],
  ah: '\u0433.\u0445.', am: 'AM', pm: 'PM',
  next: '\u0421\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u043d\u0430\u043c\u0430\u0437: ', loading: '\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u0432\u0440\u0435\u043c\u0435\u043d\u0438 \u043d\u0430\u043c\u0430\u0437\u043e\u0432...', fail: '\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0432\u0440\u0435\u043c\u044f, \u043f\u0440\u043e\u0432\u0435\u0440\u044c\u0442\u0435 \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435', geo: '\u0413\u043e\u0440\u043e\u0434 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d, \u043f\u0440\u043e\u0432\u0435\u0440\u044c\u0442\u0435 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438',
  now: function (n) { return '\u041d\u0430\u0441\u0442\u0443\u043f\u0438\u043b\u043e \u0432\u0440\u0435\u043c\u044f: ' + n; }
};
LANGS.es = {
  dir: 'ltr',
  names: ['Fayr', 'Dhuhr', 'Asr', 'Magrib', 'Isha'], fri: 'Yumu\u2019a',
  days: ['Domingo', 'Lunes', 'Martes', 'Mi\u00e9rcoles', 'Jueves', 'Viernes', 'S\u00e1bado'],
  hm: ['Muharram', 'Safar', 'Rabi al-Awwal', 'Rabi al-Zani', 'Yumada al-Awwal', 'Yumada al-Zani', 'Rayab', 'Shaaban', 'Ramad\u00e1n', 'Shawwal', 'Dhul Qaada', 'Dhul Hiyya'],
  ah: 'H', am: 'AM', pm: 'PM',
  next: 'Pr\u00f3xima oraci\u00f3n: ', loading: 'Cargando horarios...', fail: 'No se pudieron obtener los horarios, revise la conexi\u00f3n', geo: 'Ciudad no encontrada, revise los ajustes',
  now: function (n) { return 'Es hora de ' + n; }
};
var HOW = {
  ar: ['\u0645\u0648\u0642\u0639 \u0627\u0644\u062c\u0647\u0627\u0632', '\u062d\u0633\u0628 \u0627\u0644\u0625\u0646\u062a\u0631\u0646\u062a', '\u062d\u0633\u0628 \u0627\u0644\u0645\u0646\u0637\u0642\u0629 \u0627\u0644\u0632\u0645\u0646\u064a\u0629'],
  en: ['Device location', 'By internet (IP)', 'By time zone'],
  tr: ['Cihaz konumu', '\u0130nternet (IP)', 'Saat dilimi'],
  ur: ['\u0688\u06cc\u0648\u0627\u0626\u0633 \u0644\u0648\u06a9\u06cc\u0634\u0646', '\u0627\u0646\u0679\u0631\u0646\u06cc\u0679 \u0633\u06d2', '\u0679\u0627\u0626\u0645 \u0632\u0648\u0646 \u0633\u06d2'],
  fr: ['Position de l\u2019appareil', 'Via Internet (IP)', 'Fuseau horaire'],
  id: ['Lokasi perangkat', 'Dari internet (IP)', 'Zona waktu'],
  fa: ['\u0645\u0648\u0642\u0639\u06cc\u062a \u062f\u0633\u062a\u06af\u0627\u0647', '\u0627\u0632 \u0637\u0631\u06cc\u0642 \u0627\u06cc\u0646\u062a\u0631\u0646\u062a', '\u0628\u0631 \u0627\u0633\u0627\u0633 \u0645\u0646\u0637\u0642\u0647 \u0632\u0645\u0627\u0646\u06cc'],
  ms: ['Lokasi peranti', 'Melalui internet (IP)', 'Zon waktu'],
  bn: ['\u09a1\u09bf\u09ad\u09be\u0987\u09b8\u09c7\u09b0 \u0985\u09ac\u09b8\u09cd\u09a5\u09be\u09a8', '\u0987\u09a8\u09cd\u099f\u09be\u09b0\u09a8\u09c7\u099f (IP)', '\u099f\u09be\u0987\u09ae \u099c\u09cb\u09a8'],
  ru: ['\u0413\u0435\u043e\u043f\u043e\u0437\u0438\u0446\u0438\u044f \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0430', '\u041f\u043e \u0438\u043d\u0442\u0435\u0440\u043d\u0435\u0442\u0443 (IP)', '\u041f\u043e \u0447\u0430\u0441\u043e\u0432\u043e\u043c\u0443 \u043f\u043e\u044f\u0441\u0443'],
  es: ['Ubicaci\u00f3n del dispositivo', 'Por internet (IP)', 'Zona horaria']
};
LANGS.de = {
  dir: "ltr",
  names: ["Fadschr", "Dhuhr", "Asr", "Maghrib", "Ischa"], fri: "Dschuma",
  days: ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"],
  hm: ["Muharram", "Safar", "Rabi al-awwal", "Rabi ath-thani", "Dschumada al-ula", "Dschumada ath-thaniya", "Radschab", "Schaban", "Ramadan", "Schawwal", "Dhu l-qada", "Dhu l-hiddscha"],
  ah: "n. H.", am: "AM", pm: "PM",
  next: "N\u00e4chstes Gebet: ", loading: "Gebetszeiten werden geladen...", fail: "Gebetszeiten nicht verf\u00fcgbar, Verbindung pr\u00fcfen", geo: "Stadt nicht gefunden, Einstellungen pr\u00fcfen",
  now: function (n) { return "Es ist Zeit f\u00fcr {n}".replace('{n}', n); }
};
HOW.de = ["Ger\u00e4testandort", "\u00dcber Internet (IP)", "Nach Zeitzone"];
LANGS.nl = {
  dir: "ltr",
  names: ["Fajr", "Dhuhr", "Asr", "Maghrib", "Isha"], fri: "Joemoea",
  days: ["Zondag", "Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag", "Zaterdag"],
  hm: ["Moeharram", "Safar", "Rabi al-awwal", "Rabi al-thani", "Joemada al-oela", "Joemada al-thania", "Radjab", "Sjaban", "Ramadan", "Sjawwal", "Dhoe al-qida", "Dhoe al-hidjdja"],
  ah: "AH", am: "AM", pm: "PM",
  next: "Volgende gebed: ", loading: "Gebedstijden laden...", fail: "Gebedstijden niet beschikbaar, controleer verbinding", geo: "Stad niet gevonden, controleer instellingen",
  now: function (n) { return "Het is tijd voor {n}".replace('{n}', n); }
};
HOW.nl = ["Apparaatlocatie", "Via internet (IP)", "Op tijdzone"];
LANGS.it = {
  dir: "ltr",
  names: ["Fajr", "Dhuhr", "Asr", "Maghrib", "Isha"], fri: "Giumu\u2019a",
  days: ["Domenica", "Luned\u00ec", "Marted\u00ec", "Mercoled\u00ec", "Gioved\u00ec", "Venerd\u00ec", "Sabato"],
  hm: ["Muharram", "Safar", "Rabi al-awwal", "Rabi al-thani", "Jumada al-ula", "Jumada al-thaniya", "Rajab", "Sha\u2019ban", "Ramadan", "Shawwal", "Dhu al-qa\u2019da", "Dhu al-hijja"],
  ah: "E.E.", am: "AM", pm: "PM",
  next: "Prossima preghiera: ", loading: "Caricamento orari...", fail: "Orari non disponibili, controlla la connessione", geo: "Citt\u00e0 non trovata, controlla le impostazioni",
  now: function (n) { return "\u00c8 l\u2019ora di {n}".replace('{n}', n); }
};
HOW.it = ["Posizione del dispositivo", "Via internet (IP)", "Fuso orario"];
LANGS.bs = {
  dir: "ltr",
  names: ["Zora", "Podne", "Ikindija", "Ak\u0161am", "Jacija"], fri: "D\u017euma",
  days: ["Nedjelja", "Ponedjeljak", "Utorak", "Srijeda", "\u010cetvrtak", "Petak", "Subota"],
  hm: ["Muharem", "Safer", "Rebiu-l-evvel", "Rebiu-l-ahir", "D\u017eumade-l-ula", "D\u017eumade-l-uhra", "Red\u017eeb", "\u0160a\u2019ban", "Ramazan", "\u0160evval", "Zu-l-ka\u2019de", "Zu-l-hid\u017ee"],
  ah: "H", am: "AM", pm: "PM",
  next: "Sljede\u0107i namaz: ", loading: "U\u010ditavanje vaktija...", fail: "Vaktija nije dostupna, provjerite vezu", geo: "Grad nije prona\u0111en, provjerite postavke",
  now: function (n) { return "Nastupilo je vrijeme: {n}".replace('{n}', n); }
};
HOW.bs = ["Lokacija ure\u0111aja", "Putem interneta (IP)", "Prema vremenskoj zoni"];
LANGS.sq = {
  dir: "ltr",
  names: ["Sabahu", "Dreka", "Ikindia", "Akshami", "Jacia"], fri: "Xhuma",
  days: ["E diel", "E h\u00ebn\u00eb", "E mart\u00eb", "E m\u00ebrkur\u00eb", "E enjte", "E premte", "E shtun\u00eb"],
  hm: ["Muharrem", "Safer", "Rebiu-l-evvel", "Rebiu-l-ahir", "Xhemazi-l-evvel", "Xhemazi-l-ahir", "Rexheb", "Shaban", "Ramazan", "Sheval", "Dhul-kade", "Dhul-hixhe"],
  ah: "H", am: "AM", pm: "PM",
  next: "Namazi tjet\u00ebr: ", loading: "Duke ngarkuar koh\u00ebt e namazit...", fail: "Koh\u00ebt nuk u mor\u00ebn, kontrolloni lidhjen", geo: "Qyteti nuk u gjet, kontrolloni cil\u00ebsimet",
  now: function (n) { return "Hyri koha e namazit: {n}".replace('{n}', n); }
};
HOW.sq = ["Vendndodhja e pajisjes", "P\u00ebrmes internetit (IP)", "Sipas zon\u00ebs kohore"];
LANGS.uz = {
  dir: "ltr",
  names: ["Bomdod", "Peshin", "Asr", "Shom", "Xufton"], fri: "Juma",
  days: ["Yakshanba", "Dushanba", "Seshanba", "Chorshanba", "Payshanba", "Juma", "Shanba"],
  hm: ["Muharram", "Safar", "Rabiul-avval", "Rabiul-oxir", "Jumodul-avval", "Jumodul-oxir", "Rajab", "Sha\u2019bon", "Ramazon", "Shavvol", "Zulqa\u2019da", "Zulhijja"],
  ah: "h.", am: "AM", pm: "PM",
  next: "Keyingi namoz: ", loading: "Namoz vaqtlari yuklanmoqda...", fail: "Vaqtlar olinmadi, ulanishni tekshiring", geo: "Shahar topilmadi, sozlamalarni tekshiring",
  now: function (n) { return "{n} vaqti kirdi".replace('{n}', n); }
};
HOW.uz = ["Qurilma joylashuvi", "Internet orqali (IP)", "Vaqt mintaqasi bo\u2018yicha"];
LANGS.kk = {
  dir: "ltr",
  names: ["\u0422\u0430\u04a3", "\u0411\u0435\u0441\u0456\u043d", "\u0415\u043a\u0456\u043d\u0442\u0456", "\u0410\u049b\u0448\u0430\u043c", "\u049a\u04b1\u043f\u0442\u0430\u043d"], fri: "\u0416\u04b1\u043c\u0430",
  days: ["\u0416\u0435\u043a\u0441\u0435\u043d\u0431\u0456", "\u0414\u04af\u0439\u0441\u0435\u043d\u0431\u0456", "\u0421\u0435\u0439\u0441\u0435\u043d\u0431\u0456", "\u0421\u04d9\u0440\u0441\u0435\u043d\u0431\u0456", "\u0411\u0435\u0439\u0441\u0435\u043d\u0431\u0456", "\u0416\u04b1\u043c\u0430", "\u0421\u0435\u043d\u0431\u0456"],
  hm: ["\u041c\u04b1\u0445\u0430\u0440\u0440\u0430\u043c", "\u0421\u0430\u0444\u0430\u0440", "\u0420\u0430\u0431\u0438\u0493\u0443\u043b-\u04d9\u0443\u0443\u04d9\u043b", "\u0420\u0430\u0431\u0438\u0493\u0443\u043b-\u0430\u0445\u0438\u0440", "\u0416\u0443\u043c\u0430\u0434\u0430-\u04d9\u0443\u0443\u04d9\u043b", "\u0416\u0443\u043c\u0430\u0434\u0430-\u0430\u0445\u0438\u0440", "\u0420\u0435\u0436\u0435\u043f", "\u0428\u0430\u0493\u0431\u0430\u043d", "\u0420\u0430\u043c\u0430\u0437\u0430\u043d", "\u0428\u04d9\u0443\u0443\u04d9\u043b", "\u0417\u04af\u043b\u049b\u0430\u0493\u0434\u0430", "\u0417\u04af\u043b\u0445\u0438\u0436\u0436\u0430"],
  ah: "\u0445.", am: "AM", pm: "PM",
  next: "\u041a\u0435\u043b\u0435\u0441\u0456 \u043d\u0430\u043c\u0430\u0437: ", loading: "\u041d\u0430\u043c\u0430\u0437 \u0443\u0430\u049b\u044b\u0442\u0442\u0430\u0440\u044b \u0436\u04af\u043a\u0442\u0435\u043b\u0443\u0434\u0435...", fail: "\u0423\u0430\u049b\u044b\u0442\u0442\u0430\u0440 \u0430\u043b\u044b\u043d\u0431\u0430\u0434\u044b, \u0431\u0430\u0439\u043b\u0430\u043d\u044b\u0441\u0442\u044b \u0442\u0435\u043a\u0441\u0435\u0440\u0456\u04a3\u0456\u0437", geo: "\u049a\u0430\u043b\u0430 \u0442\u0430\u0431\u044b\u043b\u043c\u0430\u0434\u044b, \u0431\u0430\u043f\u0442\u0430\u0443\u043b\u0430\u0440\u0434\u044b \u0442\u0435\u043a\u0441\u0435\u0440\u0456\u04a3\u0456\u0437",
  now: function (n) { return "{n} \u0443\u0430\u049b\u044b\u0442\u044b \u043a\u0456\u0440\u0434\u0456".replace('{n}', n); }
};
HOW.kk = ["\u049a\u04b1\u0440\u044b\u043b\u0493\u044b \u043e\u0440\u043d\u044b", "\u0418\u043d\u0442\u0435\u0440\u043d\u0435\u0442 \u0430\u0440\u049b\u044b\u043b\u044b (IP)", "\u0423\u0430\u049b\u044b\u0442 \u0431\u0435\u043b\u0434\u0435\u0443\u0456 \u0431\u043e\u0439\u044b\u043d\u0448\u0430"];
LANGS.az = {
  dir: "ltr",
  names: ["S\u00fcbh", "Z\u00f6hr", "\u018fsr", "\u015eam", "X\u00fcft\u0259n"], fri: "C\u00fcm\u0259",
  days: ["Bazar", "Bazar ert\u0259si", "\u00c7\u0259r\u015f\u0259nb\u0259 ax\u015fam\u0131", "\u00c7\u0259r\u015f\u0259nb\u0259", "C\u00fcm\u0259 ax\u015fam\u0131", "C\u00fcm\u0259", "\u015e\u0259nb\u0259"],
  hm: ["M\u0259h\u0259rr\u0259m", "S\u0259f\u0259r", "R\u0259bi\u00fcl\u0259vv\u0259l", "R\u0259bi\u00fclax\u0131r", "C\u0259madiy\u0259l\u0259vv\u0259l", "C\u0259madiy\u0259lax\u0131r", "R\u0259c\u0259b", "\u015eaban", "Ramazan", "\u015e\u0259vval", "Zilq\u0259d\u0259", "Zilhicc\u0259"],
  ah: "h.", am: "AM", pm: "PM",
  next: "N\u00f6vb\u0259ti namaz: ", loading: "Namaz vaxtlar\u0131 y\u00fckl\u0259nir...", fail: "Vaxtlar al\u0131nmad\u0131, ba\u011flant\u0131n\u0131 yoxlay\u0131n", geo: "\u015e\u0259h\u0259r tap\u0131lmad\u0131, ayarlar\u0131 yoxlay\u0131n",
  now: function (n) { return "{n} vaxt\u0131 daxil oldu".replace('{n}', n); }
};
HOW.az = ["Cihaz\u0131n yeri", "\u0130nternet vasit\u0259sil\u0259 (IP)", "Saat qur\u015fa\u011f\u0131na g\u00f6r\u0259"];
LANGS.hi = {
  dir: "ltr",
  names: ["\u092b\u093c\u091c\u094d\u0930", "\u091c\u093c\u0941\u0939\u0930", "\u0905\u0938\u094d\u0930", "\u092e\u0917\u093c\u0930\u093f\u092c", "\u0907\u0936\u093e"], fri: "\u091c\u0941\u092e\u093e",
  days: ["\u0930\u0935\u093f\u0935\u093e\u0930", "\u0938\u094b\u092e\u0935\u093e\u0930", "\u092e\u0902\u0917\u0932\u0935\u093e\u0930", "\u092c\u0941\u0927\u0935\u093e\u0930", "\u0917\u0941\u0930\u0941\u0935\u093e\u0930", "\u0936\u0941\u0915\u094d\u0930\u0935\u093e\u0930", "\u0936\u0928\u093f\u0935\u093e\u0930"],
  hm: ["\u092e\u0941\u0939\u0930\u094d\u0930\u092e", "\u0938\u092b\u093c\u0930", "\u0930\u092c\u0940-\u0909\u0932-\u0905\u0935\u094d\u0935\u0932", "\u0930\u092c\u0940-\u0909\u0938-\u0938\u093e\u0928\u0940", "\u091c\u092e\u093e\u0926\u093f-\u0909\u0932-\u0905\u0935\u094d\u0935\u0932", "\u091c\u092e\u093e\u0926\u093f-\u0909\u0938-\u0938\u093e\u0928\u0940", "\u0930\u091c\u092c", "\u0936\u093e\u092c\u093e\u0928", "\u0930\u092e\u091c\u093c\u093e\u0928", "\u0936\u0935\u094d\u0935\u093e\u0932", "\u091c\u093c\u0940\u0915\u093c\u093e\u0926\u093e", "\u091c\u093c\u093f\u0932-\u0939\u093f\u091c\u094d\u091c\u093e"],
  ah: "\u0939\u093f.", am: "AM", pm: "PM",
  next: "\u0905\u0917\u0932\u0940 \u0928\u092e\u093e\u091c\u093c: ", loading: "\u0928\u092e\u093e\u091c\u093c \u0915\u0947 \u0938\u092e\u092f \u0932\u094b\u0921 \u0939\u094b \u0930\u0939\u0947 \u0939\u0948\u0902...", fail: "\u0938\u092e\u092f \u0928\u0939\u0940\u0902 \u092e\u093f\u0932\u093e, \u0915\u0928\u0947\u0915\u094d\u0936\u0928 \u091c\u093e\u0901\u091a\u0947\u0902", geo: "\u0936\u0939\u0930 \u0928\u0939\u0940\u0902 \u092e\u093f\u0932\u093e, \u0938\u0947\u091f\u093f\u0902\u0917\u094d\u0938 \u091c\u093e\u0901\u091a\u0947\u0902",
  now: function (n) { return "{n} \u0915\u093e \u0938\u092e\u092f \u0939\u094b \u0917\u092f\u093e".replace('{n}', n); }
};
HOW.hi = ["\u0921\u093f\u0935\u093e\u0907\u0938 \u0915\u0940 \u0932\u094b\u0915\u0947\u0936\u0928", "\u0907\u0902\u091f\u0930\u0928\u0947\u091f (IP) \u0938\u0947", "\u091f\u093e\u0907\u092e \u091c\u093c\u094b\u0928 \u0938\u0947"];
LANGS.zh = {
  dir: "ltr",
  names: ["\u6668\u793c", "\u664c\u793c", "\u6661\u793c", "\u660f\u793c", "\u5bb5\u793c"], fri: "\u4e3b\u9ebb",
  days: ["\u661f\u671f\u65e5", "\u661f\u671f\u4e00", "\u661f\u671f\u4e8c", "\u661f\u671f\u4e09", "\u661f\u671f\u56db", "\u661f\u671f\u4e94", "\u661f\u671f\u516d"],
  hm: ["\u7a46\u54c8\u5170\u59c6\u6708", "\u8272\u6cd5\u5c14\u6708", "\u8d56\u6bd4\u5c14\u6556\u5916\u9c81\u6708", "\u8d56\u6bd4\u5c14\u963f\u8272\u5c3c\u6708", "\u4e3b\u9a6c\u8fbe\u6556\u5916\u9c81\u6708", "\u4e3b\u9a6c\u8fbe\u963f\u8272\u5c3c\u6708", "\u8d56\u54f2\u535c\u6708", "\u820d\u5c14\u90a6\u6708", "\u658b\u6708", "\u95ea\u74e6\u9c81\u6708", "\u90fd\u5c14\u5580\u5c14\u5fb7\u6708", "\u90fd\u5c14\u9ed1\u54f2\u6708"],
  ah: "AH", am: "\u4e0a\u5348", pm: "\u4e0b\u5348",
  next: "\u4e0b\u4e00\u6b21\u793c\u62dc: ", loading: "\u6b63\u5728\u52a0\u8f7d\u793c\u62dc\u65f6\u95f4...", fail: "\u65e0\u6cd5\u83b7\u53d6\u793c\u62dc\u65f6\u95f4\uff0c\u8bf7\u68c0\u67e5\u7f51\u7edc", geo: "\u672a\u627e\u5230\u57ce\u5e02\uff0c\u8bf7\u68c0\u67e5\u8bbe\u7f6e",
  now: function (n) { return "\u73b0\u5728\u662f{n}\u65f6\u95f4".replace('{n}', n); }
};
HOW.zh = ["\u8bbe\u5907\u4f4d\u7f6e", "\u901a\u8fc7\u7f51\u7edc\uff08IP\uff09", "\u6309\u65f6\u533a"];
LANGS.ja = {
  dir: "ltr",
  names: ["\u30d5\u30a1\u30b8\u30e5\u30eb", "\u30ba\u30d5\u30eb", "\u30a2\u30b9\u30eb", "\u30de\u30b0\u30ea\u30d6", "\u30a4\u30b7\u30e3\u30fc"], fri: "\u30b8\u30e5\u30e0\u30a2",
  days: ["\u65e5\u66dc\u65e5", "\u6708\u66dc\u65e5", "\u706b\u66dc\u65e5", "\u6c34\u66dc\u65e5", "\u6728\u66dc\u65e5", "\u91d1\u66dc\u65e5", "\u571f\u66dc\u65e5"],
  hm: ["\u30e0\u30cf\u30c3\u30e9\u30e0", "\u30b5\u30d5\u30a1\u30eb", "\u30e9\u30d3\u30fc\u30a6\u30fb\u30a2\u30a6\u30ef\u30eb", "\u30e9\u30d3\u30fc\u30a6\u30fb\u30a2\u30fc\u30d2\u30eb", "\u30b8\u30e5\u30de\u30fc\u30c0\u30fc\u30fb\u30a6\u30fc\u30e9\u30fc", "\u30b8\u30e5\u30de\u30fc\u30c0\u30fc\u30fb\u30a2\u30fc\u30d2\u30e9", "\u30e9\u30b8\u30e3\u30d6", "\u30b7\u30e3\u30a2\u30d0\u30fc\u30f3", "\u30e9\u30de\u30c0\u30fc\u30f3", "\u30b7\u30e3\u30a6\u30ef\u30fc\u30eb", "\u30ba\u30fc\u30fb\u30ab\u30a2\u30c0", "\u30ba\u30fc\u30fb\u30d2\u30c3\u30b8\u30e3"],
  ah: "AH", am: "\u5348\u524d", pm: "\u5348\u5f8c",
  next: "\u6b21\u306e\u793c\u62dd: ", loading: "\u793c\u62dd\u6642\u523b\u3092\u8aad\u307f\u8fbc\u307f\u4e2d...", fail: "\u793c\u62dd\u6642\u523b\u3092\u53d6\u5f97\u3067\u304d\u307e\u305b\u3093\u3002\u63a5\u7d9a\u3092\u78ba\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044", geo: "\u90fd\u5e02\u304c\u898b\u3064\u304b\u308a\u307e\u305b\u3093\u3002\u8a2d\u5b9a\u3092\u78ba\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044",
  now: function (n) { return "{n}\u306e\u6642\u523b\u3067\u3059".replace('{n}', n); }
};
HOW.ja = ["\u30c7\u30d0\u30a4\u30b9\u306e\u4f4d\u7f6e\u60c5\u5831", "\u30a4\u30f3\u30bf\u30fc\u30cd\u30c3\u30c8(IP)\u304b\u3089", "\u30bf\u30a4\u30e0\u30be\u30fc\u30f3\u304b\u3089"];
LANGS.ko = {
  dir: "ltr",
  names: ["\ud30c\uc988\ub974", "\ub450\ud750\ub974", "\uc544\uc2a4\ub974", "\ub9c8\uadf8\ub9bd", "\uc774\uc0e4"], fri: "\uc8fc\ub9c8",
  days: ["\uc77c\uc694\uc77c", "\uc6d4\uc694\uc77c", "\ud654\uc694\uc77c", "\uc218\uc694\uc77c", "\ubaa9\uc694\uc77c", "\uae08\uc694\uc77c", "\ud1a0\uc694\uc77c"],
  hm: ["\ubb34\ud558\ub78c", "\uc0ac\ud30c\ub974", "\ub77c\ube44 \uc54c \uc544\uc648", "\ub77c\ube44 \uc54c \uc544\ud0a4\ub974", "\uc8fc\ub9c8\ub2e4 \uc54c \uc6b8\ub77c", "\uc8fc\ub9c8\ub2e4 \uc54c \uc544\ud0a4\ub77c", "\ub77c\uc790\ube0c", "\uc0e4\ubc18", "\ub77c\ub9c8\ub2e8", "\uc0e4\uc648", "\ub458 \uae4c\ub2e4", "\ub458 \ud79b\uc790"],
  ah: "AH", am: "\uc624\uc804", pm: "\uc624\ud6c4",
  next: "\ub2e4\uc74c \uc608\ubc30: ", loading: "\uc608\ubc30 \uc2dc\uac04\uc744 \ubd88\ub7ec\uc624\ub294 \uc911...", fail: "\uc608\ubc30 \uc2dc\uac04\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. \uc5f0\uacb0\uc744 \ud655\uc778\ud558\uc138\uc694", geo: "\ub3c4\uc2dc\ub97c \ucc3e\uc744 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. \uc124\uc815\uc744 \ud655\uc778\ud558\uc138\uc694",
  now: function (n) { return "{n} \uc2dc\uac04\uc785\ub2c8\ub2e4".replace('{n}', n); }
};
HOW.ko = ["\uae30\uae30 \uc704\uce58", "\uc778\ud130\ub137(IP) \uae30\uc900", "\uc2dc\uac04\ub300 \uae30\uc900"];
LANGS.th = {
  dir: "ltr",
  names: ["\u0e0b\u0e38\u0e1a\u0e2e\u0e34", "\u0e0b\u0e38\u0e2e\u0e23\u0e35", "\u0e2d\u0e31\u0e28\u0e23\u0e35", "\u0e21\u0e31\u0e06\u0e23\u0e34\u0e1a", "\u0e2d\u0e35\u0e0a\u0e32\u0e2d\u0e4c"], fri: "\u0e0d\u0e38\u0e21\u0e2d\u0e30\u0e2e\u0e4c",
  days: ["\u0e27\u0e31\u0e19\u0e2d\u0e32\u0e17\u0e34\u0e15\u0e22\u0e4c", "\u0e27\u0e31\u0e19\u0e08\u0e31\u0e19\u0e17\u0e23\u0e4c", "\u0e27\u0e31\u0e19\u0e2d\u0e31\u0e07\u0e04\u0e32\u0e23", "\u0e27\u0e31\u0e19\u0e1e\u0e38\u0e18", "\u0e27\u0e31\u0e19\u0e1e\u0e24\u0e2b\u0e31\u0e2a\u0e1a\u0e14\u0e35", "\u0e27\u0e31\u0e19\u0e28\u0e38\u0e01\u0e23\u0e4c", "\u0e27\u0e31\u0e19\u0e40\u0e2a\u0e32\u0e23\u0e4c"],
  hm: ["\u0e21\u0e38\u0e2e\u0e31\u0e23\u0e23\u0e2d\u0e21", "\u0e28\u0e2d\u0e1f\u0e31\u0e23", "\u0e23\u0e2d\u0e1a\u0e35\u0e2d\u0e38\u0e25\u0e40\u0e2d\u0e32\u0e27\u0e31\u0e25", "\u0e23\u0e2d\u0e1a\u0e35\u0e2d\u0e38\u0e25\u0e2d\u0e32\u0e04\u0e34\u0e23", "\u0e0d\u0e38\u0e21\u0e32\u0e14\u0e31\u0e25\u0e2d\u0e39\u0e25\u0e32", "\u0e0d\u0e38\u0e21\u0e32\u0e14\u0e31\u0e25\u0e2d\u0e32\u0e04\u0e34\u0e40\u0e23\u0e32\u0e30\u0e2e\u0e4c", "\u0e23\u0e2d\u0e0d\u0e31\u0e1a", "\u0e0a\u0e30\u0e2d\u0e4c\u0e1a\u0e32\u0e19", "\u0e40\u0e23\u0e32\u0e30\u0e21\u0e30\u0e0e\u0e2d\u0e19", "\u0e40\u0e0a\u0e32\u0e27\u0e32\u0e25", "\u0e0b\u0e38\u0e25\u0e40\u0e01\u0e32\u0e30\u0e2d\u0e4c\u0e14\u0e30\u0e2e\u0e4c", "\u0e0b\u0e38\u0e25\u0e2b\u0e34\u0e08\u0e0d\u0e30\u0e2e\u0e4c"],
  ah: "\u0e2e.\u0e28.", am: "AM", pm: "PM",
  next: "\u0e25\u0e30\u0e2b\u0e21\u0e32\u0e14\u0e16\u0e31\u0e14\u0e44\u0e1b: ", loading: "\u0e01\u0e33\u0e25\u0e31\u0e07\u0e42\u0e2b\u0e25\u0e14\u0e40\u0e27\u0e25\u0e32\u0e25\u0e30\u0e2b\u0e21\u0e32\u0e14...", fail: "\u0e44\u0e21\u0e48\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e23\u0e31\u0e1a\u0e40\u0e27\u0e25\u0e32\u0e25\u0e30\u0e2b\u0e21\u0e32\u0e14\u0e44\u0e14\u0e49 \u0e15\u0e23\u0e27\u0e08\u0e2a\u0e2d\u0e1a\u0e01\u0e32\u0e23\u0e40\u0e0a\u0e37\u0e48\u0e2d\u0e21\u0e15\u0e48\u0e2d", geo: "\u0e44\u0e21\u0e48\u0e1e\u0e1a\u0e40\u0e21\u0e37\u0e2d\u0e07 \u0e15\u0e23\u0e27\u0e08\u0e2a\u0e2d\u0e1a\u0e01\u0e32\u0e23\u0e15\u0e31\u0e49\u0e07\u0e04\u0e48\u0e32",
  now: function (n) { return "\u0e16\u0e36\u0e07\u0e40\u0e27\u0e25\u0e32{n}".replace('{n}', n); }
};
HOW.th = ["\u0e15\u0e33\u0e41\u0e2b\u0e19\u0e48\u0e07\u0e2d\u0e38\u0e1b\u0e01\u0e23\u0e13\u0e4c", "\u0e08\u0e32\u0e01\u0e2d\u0e34\u0e19\u0e40\u0e17\u0e2d\u0e23\u0e4c\u0e40\u0e19\u0e47\u0e15 (IP)", "\u0e15\u0e32\u0e21\u0e40\u0e02\u0e15\u0e40\u0e27\u0e25\u0e32"];
LANGS.vi = {
  dir: "ltr",
  names: ["Fajr", "Dhuhr", "Asr", "Maghrib", "Isha"], fri: "Jumu\u2019ah",
  days: ["Ch\u1ee7 nh\u1eadt", "Th\u1ee9 hai", "Th\u1ee9 ba", "Th\u1ee9 t\u01b0", "Th\u1ee9 n\u0103m", "Th\u1ee9 s\u00e1u", "Th\u1ee9 b\u1ea3y"],
  hm: ["Muharram", "Safar", "Rabi al-awwal", "Rabi al-thani", "Jumada al-ula", "Jumada al-thani", "Rajab", "Shaban", "Ramadan", "Shawwal", "Dhu al-qadah", "Dhu al-hijjah"],
  ah: "AH", am: "SA", pm: "CH",
  next: "Gi\u1edd c\u1ea7u nguy\u1ec7n ti\u1ebfp theo: ", loading: "\u0110ang t\u1ea3i gi\u1edd c\u1ea7u nguy\u1ec7n...", fail: "Kh\u00f4ng l\u1ea5y \u0111\u01b0\u1ee3c gi\u1edd c\u1ea7u nguy\u1ec7n, ki\u1ec3m tra k\u1ebft n\u1ed1i", geo: "Kh\u00f4ng t\u00ecm th\u1ea5y th\u00e0nh ph\u1ed1, ki\u1ec3m tra c\u00e0i \u0111\u1eb7t",
  now: function (n) { return "\u0110\u00e3 \u0111\u1ebfn gi\u1edd {n}".replace('{n}', n); }
};
HOW.vi = ["V\u1ecb tr\u00ed thi\u1ebft b\u1ecb", "Qua internet (IP)", "Theo m\u00fai gi\u1edd"];
LANGS.sw = {
  dir: "ltr",
  names: ["Alfajiri", "Adhuhuri", "Alasiri", "Magharibi", "Isha"], fri: "Ijumaa",
  days: ["Jumapili", "Jumatatu", "Jumanne", "Jumatano", "Alhamisi", "Ijumaa", "Jumamosi"],
  hm: ["Muharram", "Safar", "Rabiul Awwal", "Rabiul Thani", "Jumadil Awwal", "Jumadil Thani", "Rajab", "Shaaban", "Ramadhani", "Shawwal", "Dhul-Qaada", "Dhul-Hijja"],
  ah: "AH", am: "AM", pm: "PM",
  next: "Swala inayofuata: ", loading: "Inapakia nyakati za swala...", fail: "Imeshindwa kupata nyakati, angalia muunganisho", geo: "Mji haujapatikana, angalia mipangilio",
  now: function (n) { return "Wakati wa {n} umefika".replace('{n}', n); }
};
HOW.sw = ["Eneo la kifaa", "Kupitia intaneti (IP)", "Kwa saa za eneo"];
LANGS.ha = {
  dir: "ltr",
  names: ["Asuba", "Azahar", "La\u2019asar", "Magariba", "Isha\u2019i"], fri: "Juma\u2019a",
  days: ["Lahadi", "Litinin", "Talata", "Laraba", "Alhamis", "Juma\u2019a", "Asabar"],
  hm: ["Muharram", "Safar", "Rabi\u2019ul Auwal", "Rabi\u2019ul Akhir", "Jumadal Ula", "Jumadal Akhira", "Rajab", "Sha\u2019aban", "Ramadan", "Shawwal", "Zulkida", "Zulhijja"],
  ah: "AH", am: "AM", pm: "PM",
  next: "Sallah ta gaba: ", loading: "Ana loda lokutan sallah...", fail: "An kasa samun lokuta, duba ha\u0257in", geo: "Ba a sami birnin ba, duba saituna",
  now: function (n) { return "Lokacin {n} ya yi".replace('{n}', n); }
};
HOW.ha = ["Wurin na\u2019ura", "Ta intanet (IP)", "Ta yankin lokaci"];
LANGS.so = {
  dir: "ltr",
  names: ["Fajar", "Duhur", "Casar", "Maqrib", "Cishe"], fri: "Jimce",
  days: ["Axad", "Isniin", "Talaado", "Arbaco", "Khamiis", "Jimce", "Sabti"],
  hm: ["Muxarram", "Safar", "Rabiicul Awwal", "Rabiicul Thaani", "Jumaada Awwal", "Jumaada Thaani", "Rajab", "Shacbaan", "Ramadaan", "Showaal", "Dhul Qacda", "Dhul Xijja"],
  ah: "AH", am: "AM", pm: "PM",
  next: "Salaadda xigta: ", loading: "Waqtiyada salaadda ayaa soo dhacaya...", fail: "Waqtiyada lama helin, hubi xiriirka", geo: "Magaalada lama helin, hubi dejinta",
  now: function (n) { return "Waa wakhtiga {n}".replace('{n}', n); }
};
HOW.so = ["Goobta qalabka", "Iyada oo loo marayo internet (IP)", "Iyadoo loo eegayo aagga waqtiga"];
LANGS.pt = {
  dir: "ltr",
  names: ["Fajr", "Dhuhr", "Asr", "Maghrib", "Isha"], fri: "Jumu\u2019ah",
  days: ["Domingo", "Segunda-feira", "Ter\u00e7a-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "S\u00e1bado"],
  hm: ["Muharram", "Safar", "Rabi al-Awwal", "Rabi al-Thani", "Jumada al-Awwal", "Jumada al-Thani", "Rajab", "Shaaban", "Ramad\u00e3", "Shawwal", "Dhul Qaada", "Dhul Hijjah"],
  ah: "AH", am: "AM", pm: "PM",
  next: "Pr\u00f3xima ora\u00e7\u00e3o: ", loading: "Carregando hor\u00e1rios...", fail: "N\u00e3o foi poss\u00edvel obter os hor\u00e1rios, verifique a conex\u00e3o", geo: "Cidade n\u00e3o encontrada, verifique as configura\u00e7\u00f5es",
  now: function (n) { return "\u00c9 hora de {n}".replace('{n}', n); }
};
HOW.pt = ["Localiza\u00e7\u00e3o do dispositivo", "Pela internet (IP)", "Pelo fuso hor\u00e1rio"];
var IQ = {"ar": ["\u062d\u0627\u0646 \u0648\u0642\u062a \u0627\u0644\u0635\u0644\u0627\u0629", "\u0628\u0627\u0642\u064a \u0639\u0644\u0649 \u0627\u0644\u0625\u0642\u0627\u0645\u0629"], "en": ["Prayer time", "Time to iqama"], "tr": ["Namaz vakti", "\u0130kamete kalan"], "ur": ["\u0646\u0645\u0627\u0632 \u06a9\u0627 \u0648\u0642\u062a", "\u0627\u0642\u0627\u0645\u062a \u0645\u06cc\u06ba \u0628\u0627\u0642\u06cc"], "fr": ["Heure de la pri\u00e8re", "Avant l\u2019iqama"], "id": ["Waktu salat", "Menuju iqamah"], "fa": ["\u0648\u0642\u062a \u0646\u0645\u0627\u0632", "\u062a\u0627 \u0627\u0642\u0627\u0645\u0647"], "ms": ["Waktu solat", "Menuju iqamah"], "bn": ["\u09a8\u09be\u09ae\u09be\u099c\u09c7\u09b0 \u09b8\u09ae\u09af\u09bc", "\u0987\u0995\u09be\u09ae\u09a4 \u09aa\u09b0\u09cd\u09af\u09a8\u09cd\u09a4"], "ru": ["\u0412\u0440\u0435\u043c\u044f \u043d\u0430\u043c\u0430\u0437\u0430", "\u0414\u043e \u0438\u043a\u0430\u043c\u044b"], "es": ["Hora de oraci\u00f3n", "Para la iqama"], "de": ["Gebetszeit", "Bis zur Iqama"], "nl": ["Gebedstijd", "Tot de iqama"], "it": ["Ora di preghiera", "All\u2019iqama"], "bs": ["Vrijeme namaza", "Do ikameta"], "sq": ["Koha e namazit", "Deri te ikameti"], "uz": ["Namoz vaqti", "Iqomagacha"], "kk": ["\u041d\u0430\u043c\u0430\u0437 \u0443\u0430\u049b\u044b\u0442\u044b", "\u042b\u049b\u044b\u043c\u0430\u0442\u049b\u0430 \u0434\u0435\u0439\u0456\u043d"], "az": ["Namaz vaxt\u0131", "\u0130qam\u0259t\u0259 qalan"], "hi": ["\u0928\u092e\u093e\u091c\u093c \u0915\u093e \u0938\u092e\u092f", "\u0907\u0915\u093c\u093e\u092e\u0924 \u092e\u0947\u0902 \u0936\u0947\u0937"], "zh": ["\u793c\u62dc\u65f6\u95f4", "\u8ddd\u79bb\u4f0a\u560e\u9ea6"], "ja": ["\u793c\u62dd\u306e\u6642\u523b", "\u30a4\u30ab\u30fc\u30de\u307e\u3067"], "ko": ["\uc608\ubc30 \uc2dc\uac04", "\uc774\uce74\ub9c8\uae4c\uc9c0"], "th": ["\u0e16\u0e36\u0e07\u0e40\u0e27\u0e25\u0e32\u0e25\u0e30\u0e2b\u0e21\u0e32\u0e14", "\u0e40\u0e2b\u0e25\u0e37\u0e2d\u0e01\u0e48\u0e2d\u0e19\u0e2d\u0e34\u0e01\u0e2d\u0e21\u0e30\u0e2e\u0e4c"], "vi": ["\u0110\u1ebfn gi\u1edd c\u1ea7u nguy\u1ec7n", "C\u00f2n \u0111\u1ebfn iqama"], "sw": ["Wakati wa swala", "Hadi iqama"], "ha": ["Lokacin sallah", "Saura iqama"], "so": ["Waa wakhtiga salaadda", "Inta ka hartay iqaamada"], "pt": ["Hora da ora\u00e7\u00e3o", "Para a iqama"]};
var IQ_SECS = 900;
var L = LANGS.en;
var curLang = '';

function sysLang() {
  var l = '';
  try { l = (navigator.languages && navigator.languages[0]) || navigator.language || ''; } catch (e) {}
  l = String(l).toLowerCase().split('-')[0];
  if (l === 'in') l = 'id';
  return LANGS[l] ? l : 'en';
}

function applyLang() {
  var code = (cfg.lang === 'auto' || !LANGS[cfg.lang]) ? sysLang() : cfg.lang;
  if (code === curLang) return;
  curLang = code;
  L = LANGS[code];
  var w = document.getElementById('w');
  w.style.direction = L.dir;
  w.setAttribute('lang', code);
  w.setAttribute('dir', L.dir);
}

/* ---------------- Config ---------------- */
var cfg = {
  pick: 'auto', city: '', country: 'none', method: '4', school: '0', source: 'aladhan', fallback: true,
  fmt: '12', hijri: true, wm: true, lang: 'auto',
  mode: 'auto', fixed: 'emerald', custom: '#2E7D6B', per: ['midnight', 'ocean', 'sunset', 'dusk', 'emerald']
};
var CITIES = {
  'Riyadh': { lat: 24.7136, lng: 46.6753, ar: '\u0627\u0644\u0631\u064a\u0627\u0636' },
  'Jeddah': { lat: 21.5433, lng: 39.1728, ar: '\u062c\u062f\u0629' },
  'Makkah': { lat: 21.3891, lng: 39.8579, ar: '\u0645\u0643\u0629 \u0627\u0644\u0645\u0643\u0631\u0645\u0629' },
  'Madinah': { lat: 24.5247, lng: 39.5692, ar: '\u0627\u0644\u0645\u062f\u064a\u0646\u0629 \u0627\u0644\u0645\u0646\u0648\u0631\u0629' },
  'Dammam': { lat: 26.4207, lng: 50.0888, ar: '\u0627\u0644\u062f\u0645\u0627\u0645' },
  'Khobar': { lat: 26.2172, lng: 50.1971, ar: '\u0627\u0644\u062e\u0628\u0631' },
  'Taif': { lat: 21.2703, lng: 40.4158, ar: '\u0627\u0644\u0637\u0627\u0626\u0641' },
  'Tabuk': { lat: 28.3838, lng: 36.5662, ar: '\u062a\u0628\u0648\u0643' },
  'Buraydah': { lat: 26.326, lng: 43.975, ar: '\u0628\u0631\u064a\u062f\u0629' },
  'Abha': { lat: 18.2164, lng: 42.5053, ar: '\u0623\u0628\u0647\u0627' },
  'Hail': { lat: 27.5114, lng: 41.7208, ar: '\u062d\u0627\u0626\u0644' },
  'Najran': { lat: 17.4917, lng: 44.1322, ar: '\u0646\u062c\u0631\u0627\u0646' },
  'Jazan': { lat: 16.8892, lng: 42.5511, ar: '\u062c\u0627\u0632\u0627\u0646' },
  'Hofuf': { lat: 25.3648, lng: 49.5873, ar: '\u0627\u0644\u0647\u0641\u0648\u0641' },
  'Yanbu': { lat: 24.0895, lng: 38.0618, ar: '\u064a\u0646\u0628\u0639' },
  'Dubai': { lat: 25.2048, lng: 55.2708, ar: '\u062f\u0628\u064a' },
  'Abu Dhabi': { lat: 24.4539, lng: 54.3773, ar: '\u0623\u0628\u0648\u0638\u0628\u064a' },
  'Sharjah': { lat: 25.3463, lng: 55.4209, ar: '\u0627\u0644\u0634\u0627\u0631\u0642\u0629' },
  'Kuwait City': { lat: 29.3759, lng: 47.9774, ar: '\u0645\u062f\u064a\u0646\u0629 \u0627\u0644\u0643\u0648\u064a\u062a' },
  'Doha': { lat: 25.2854, lng: 51.531, ar: '\u0627\u0644\u062f\u0648\u062d\u0629' },
  'Manama': { lat: 26.2285, lng: 50.586, ar: '\u0627\u0644\u0645\u0646\u0627\u0645\u0629' },
  'Muscat': { lat: 23.588, lng: 58.3829, ar: '\u0645\u0633\u0642\u0637' },
  'Sanaa': { lat: 15.3694, lng: 44.191, ar: '\u0635\u0646\u0639\u0627\u0621' },
  'Baghdad': { lat: 33.3152, lng: 44.3661, ar: '\u0628\u063a\u062f\u0627\u062f' },
  'Amman': { lat: 31.9454, lng: 35.9284, ar: '\u0639\u0645\u0651\u0627\u0646' },
  'Jerusalem': { lat: 31.7683, lng: 35.2137, ar: '\u0627\u0644\u0642\u062f\u0633' },
  'Beirut': { lat: 33.8938, lng: 35.5018, ar: '\u0628\u064a\u0631\u0648\u062a' },
  'Damascus': { lat: 33.5138, lng: 36.2765, ar: '\u062f\u0645\u0634\u0642' },
  'Cairo': { lat: 30.0444, lng: 31.2357, ar: '\u0627\u0644\u0642\u0627\u0647\u0631\u0629' },
  'Alexandria': { lat: 31.2001, lng: 29.9187, ar: '\u0627\u0644\u0625\u0633\u0643\u0646\u062f\u0631\u064a\u0629' },
  'Tripoli': { lat: 32.8872, lng: 13.1913, ar: '\u0637\u0631\u0627\u0628\u0644\u0633' },
  'Tunis': { lat: 36.8065, lng: 10.1815, ar: '\u062a\u0648\u0646\u0633' },
  'Algiers': { lat: 36.7538, lng: 3.0588, ar: '\u0627\u0644\u062c\u0632\u0627\u0626\u0631' },
  'Casablanca': { lat: 33.5731, lng: -7.5898, ar: '\u0627\u0644\u062f\u0627\u0631 \u0627\u0644\u0628\u064a\u0636\u0627\u0621' },
  'Rabat': { lat: 34.0209, lng: -6.8416, ar: '\u0627\u0644\u0631\u0628\u0627\u0637' },
  'Khartoum': { lat: 15.5007, lng: 32.5599, ar: '\u0627\u0644\u062e\u0631\u0637\u0648\u0645' },
  'Nouakchott': { lat: 18.0735, lng: -15.9582, ar: '\u0646\u0648\u0627\u0643\u0634\u0648\u0637' },
  'Mogadishu': { lat: 2.0469, lng: 45.3182, ar: '\u0645\u0642\u062f\u064a\u0634\u0648' },
  'Istanbul': { lat: 41.0082, lng: 28.9784, ar: '\u0625\u0633\u0637\u0646\u0628\u0648\u0644' },
  'Ankara': { lat: 39.9334, lng: 32.8597, ar: '\u0623\u0646\u0642\u0631\u0629' },
  'Tehran': { lat: 35.6892, lng: 51.389, ar: '\u0637\u0647\u0631\u0627\u0646' },
  'Karachi': { lat: 24.8607, lng: 67.0011, ar: '\u0643\u0631\u0627\u062a\u0634\u064a' },
  'Lahore': { lat: 31.5497, lng: 74.3436, ar: '\u0644\u0627\u0647\u0648\u0631' },
  'Islamabad': { lat: 33.6844, lng: 73.0479, ar: '\u0625\u0633\u0644\u0627\u0645 \u0622\u0628\u0627\u062f' },
  'Delhi': { lat: 28.6139, lng: 77.209, ar: '\u062f\u0644\u0647\u064a' },
  'Mumbai': { lat: 19.076, lng: 72.8777, ar: '\u0645\u0648\u0645\u0628\u0627\u064a' },
  'Dhaka': { lat: 23.8103, lng: 90.4125, ar: '\u062f\u0643\u0627' },
  'Kabul': { lat: 34.5553, lng: 69.2075, ar: '\u0643\u0627\u0628\u0648\u0644' },
  'Tashkent': { lat: 41.2995, lng: 69.2401, ar: '\u0637\u0634\u0642\u0646\u062f' },
  'Baku': { lat: 40.4093, lng: 49.8671, ar: '\u0628\u0627\u0643\u0648' },
  'Jakarta': { lat: -6.2088, lng: 106.8456, ar: '\u062c\u0627\u0643\u0631\u062a\u0627' },
  'Kuala Lumpur': { lat: 3.139, lng: 101.6869, ar: '\u0643\u0648\u0627\u0644\u0627\u0644\u0645\u0628\u0648\u0631' },
  'Singapore': { lat: 1.3521, lng: 103.8198, ar: '\u0633\u0646\u063a\u0627\u0641\u0648\u0631\u0629' },
  'Tokyo': { lat: 35.6762, lng: 139.6503, ar: '\u0637\u0648\u0643\u064a\u0648' },
  'Beijing': { lat: 39.9042, lng: 116.4074, ar: '\u0628\u0643\u064a\u0646' },
  'London': { lat: 51.5074, lng: -0.1278, ar: '\u0644\u0646\u062f\u0646' },
  'Paris': { lat: 48.8566, lng: 2.3522, ar: '\u0628\u0627\u0631\u064a\u0633' },
  'Berlin': { lat: 52.52, lng: 13.405, ar: '\u0628\u0631\u0644\u064a\u0646' },
  'Madrid': { lat: 40.4168, lng: -3.7038, ar: '\u0645\u062f\u0631\u064a\u062f' },
  'Rome': { lat: 41.9028, lng: 12.4964, ar: '\u0631\u0648\u0645\u0627' },
  'Amsterdam': { lat: 52.3676, lng: 4.9041, ar: '\u0623\u0645\u0633\u062a\u0631\u062f\u0627\u0645' },
  'Stockholm': { lat: 59.3293, lng: 18.0686, ar: '\u0633\u062a\u0648\u0643\u0647\u0648\u0644\u0645' },
  'Moscow': { lat: 55.7558, lng: 37.6173, ar: '\u0645\u0648\u0633\u0643\u0648' },
  'New York': { lat: 40.7128, lng: -74.006, ar: '\u0646\u064a\u0648\u064a\u0648\u0631\u0643' },
  'Los Angeles': { lat: 34.0522, lng: -118.2437, ar: '\u0644\u0648\u0633 \u0623\u0646\u062c\u0644\u0648\u0633' },
  'Chicago': { lat: 41.8781, lng: -87.6298, ar: '\u0634\u064a\u0643\u0627\u063a\u0648' },
  'Toronto': { lat: 43.6532, lng: -79.3832, ar: '\u062a\u0648\u0631\u0648\u0646\u062a\u0648' },
  'Sao Paulo': { lat: -23.5505, lng: -46.6333, ar: '\u0633\u0627\u0648 \u0628\u0627\u0648\u0644\u0648' },
  'Sydney': { lat: -33.8688, lng: 151.2093, ar: '\u0633\u064a\u062f\u0646\u064a' },
  'Lagos': { lat: 6.5244, lng: 3.3792, ar: '\u0644\u0627\u063a\u0648\u0633' },
  'Johannesburg': { lat: -26.2041, lng: 28.0473, ar: '\u062c\u0648\u0647\u0627\u0646\u0633\u0628\u0631\u063a' },
  'Nairobi': { lat: -1.2921, lng: 36.8219, ar: '\u0646\u064a\u0631\u0648\u0628\u064a' },
  'Dakar': { lat: 14.7167, lng: -17.4677, ar: '\u062f\u0627\u0643\u0627\u0631' },
  'Ajman': { lat: 25.4052, lng: 55.5136, ar: '\u0639\u062c\u0645\u0627\u0646' },
  'Ras Al Khaimah': { lat: 25.7895, lng: 55.9432, ar: '\u0631\u0623\u0633 \u0627\u0644\u062e\u064a\u0645\u0629' },
  'Al Ain': { lat: 24.2075, lng: 55.7447, ar: '\u0627\u0644\u0639\u064a\u0646' },
  'Khamis Mushait': { lat: 18.3, lng: 42.7292, ar: '\u062e\u0645\u064a\u0633 \u0645\u0634\u064a\u0637' },
  'Al Kharj': { lat: 24.15, lng: 47.3, ar: '\u0627\u0644\u062e\u0631\u062c' },
  'Arar': { lat: 30.9753, lng: 41.0381, ar: '\u0639\u0631\u0639\u0631' },
  'Sakaka': { lat: 29.9697, lng: 40.2064, ar: '\u0633\u0643\u0627\u0643\u0627' },
  'Qatif': { lat: 26.5652, lng: 50.0089, ar: '\u0627\u0644\u0642\u0637\u064a\u0641' },
  'Jubail': { lat: 27.0046, lng: 49.646, ar: '\u0627\u0644\u062c\u0628\u064a\u0644' },
  'Al Ula': { lat: 26.6085, lng: 37.9232, ar: '\u0627\u0644\u0639\u0644\u0627' },
  'Unaizah': { lat: 26.0844, lng: 43.9939, ar: '\u0639\u0646\u064a\u0632\u0629' },
  'Al Bahah': { lat: 20.0129, lng: 41.4677, ar: '\u0627\u0644\u0628\u0627\u062d\u0629' },
  'Hafar Al Batin': { lat: 28.4328, lng: 45.9708, ar: '\u062d\u0641\u0631 \u0627\u0644\u0628\u0627\u0637\u0646' },
  'Al Majmaah': { lat: 25.9039, lng: 45.3452, ar: '\u0627\u0644\u0645\u062c\u0645\u0639\u0629' },
  'Salalah': { lat: 17.0151, lng: 54.0924, ar: '\u0635\u0644\u0627\u0644\u0629' },
  'Aden': { lat: 12.7855, lng: 45.0187, ar: '\u0639\u062f\u0646' },
  'Basra': { lat: 30.5085, lng: 47.7835, ar: '\u0627\u0644\u0628\u0635\u0631\u0629' },
  'Mosul': { lat: 36.34, lng: 43.13, ar: '\u0627\u0644\u0645\u0648\u0635\u0644' },
  'Erbil': { lat: 36.1911, lng: 44.0091, ar: '\u0623\u0631\u0628\u064a\u0644' },
  'Najaf': { lat: 32.0, lng: 44.3362, ar: '\u0627\u0644\u0646\u062c\u0641' },
  'Karbala': { lat: 32.616, lng: 44.0249, ar: '\u0643\u0631\u0628\u0644\u0627\u0621' },
  'Irbid': { lat: 32.5556, lng: 35.85, ar: '\u0625\u0631\u0628\u062f' },
  'Aqaba': { lat: 29.5319, lng: 35.0061, ar: '\u0627\u0644\u0639\u0642\u0628\u0629' },
  'Gaza': { lat: 31.5017, lng: 34.4668, ar: '\u063a\u0632\u0629' },
  'Ramallah': { lat: 31.9038, lng: 35.2034, ar: '\u0631\u0627\u0645 \u0627\u0644\u0644\u0647' },
  'Hebron': { lat: 31.5326, lng: 35.0998, ar: '\u0627\u0644\u062e\u0644\u064a\u0644' },
  'Nablus': { lat: 32.2211, lng: 35.2544, ar: '\u0646\u0627\u0628\u0644\u0633' },
  'Tripoli Lebanon': { lat: 34.4367, lng: 35.8497, ar: '\u0637\u0631\u0627\u0628\u0644\u0633 \u0644\u0628\u0646\u0627\u0646' },
  'Sidon': { lat: 33.56, lng: 35.37, ar: '\u0635\u064a\u062f\u0627' },
  'Aleppo': { lat: 36.2021, lng: 37.1343, ar: '\u062d\u0644\u0628' },
  'Homs': { lat: 34.7324, lng: 36.7137, ar: '\u062d\u0645\u0635' },
  'Latakia': { lat: 35.5317, lng: 35.7915, ar: '\u0627\u0644\u0644\u0627\u0630\u0642\u064a\u0629' },
  'Giza': { lat: 30.0131, lng: 31.2089, ar: '\u0627\u0644\u062c\u064a\u0632\u0629' },
  'Port Said': { lat: 31.2653, lng: 32.3019, ar: '\u0628\u0648\u0631\u0633\u0639\u064a\u062f' },
  'Suez': { lat: 29.9668, lng: 32.5498, ar: '\u0627\u0644\u0633\u0648\u064a\u0633' },
  'Luxor': { lat: 25.6872, lng: 32.6396, ar: '\u0627\u0644\u0623\u0642\u0635\u0631' },
  'Aswan': { lat: 24.0889, lng: 32.8998, ar: '\u0623\u0633\u0648\u0627\u0646' },
  'Mansoura': { lat: 31.0409, lng: 31.3785, ar: '\u0627\u0644\u0645\u0646\u0635\u0648\u0631\u0629' },
  'Tanta': { lat: 30.7865, lng: 31.0004, ar: '\u0637\u0646\u0637\u0627' },
  'Benghazi': { lat: 32.1167, lng: 20.0667, ar: '\u0628\u0646\u063a\u0627\u0632\u064a' },
  'Misrata': { lat: 32.3754, lng: 15.0925, ar: '\u0645\u0635\u0631\u0627\u062a\u0629' },
  'Sfax': { lat: 34.7406, lng: 10.7603, ar: '\u0635\u0641\u0627\u0642\u0633' },
  'Sousse': { lat: 35.8256, lng: 10.6369, ar: '\u0633\u0648\u0633\u0629' },
  'Kairouan': { lat: 35.6781, lng: 10.0963, ar: '\u0627\u0644\u0642\u064a\u0631\u0648\u0627\u0646' },
  'Oran': { lat: 35.6971, lng: -0.6308, ar: '\u0648\u0647\u0631\u0627\u0646' },
  'Constantine': { lat: 36.365, lng: 6.6147, ar: '\u0642\u0633\u0646\u0637\u064a\u0646\u0629' },
  'Annaba': { lat: 36.9, lng: 7.7667, ar: '\u0639\u0646\u0627\u0628\u0629' },
  'Marrakesh': { lat: 31.6295, lng: -7.9811, ar: '\u0645\u0631\u0627\u0643\u0634' },
  'Fes': { lat: 34.0181, lng: -5.0078, ar: '\u0641\u0627\u0633' },
  'Tangier': { lat: 35.7595, lng: -5.834, ar: '\u0637\u0646\u062c\u0629' },
  'Agadir': { lat: 30.4278, lng: -9.5981, ar: '\u0623\u0643\u0627\u062f\u064a\u0631' },
  'Omdurman': { lat: 15.6445, lng: 32.4777, ar: '\u0623\u0645 \u062f\u0631\u0645\u0627\u0646' },
  'Port Sudan': { lat: 19.6158, lng: 37.2164, ar: '\u0628\u0648\u0631\u062a\u0633\u0648\u062f\u0627\u0646' },
  'Djibouti': { lat: 11.5721, lng: 43.1456, ar: '\u062c\u064a\u0628\u0648\u062a\u064a' },
  'Moroni': { lat: -11.7022, lng: 43.2551, ar: '\u0645\u0648\u0631\u0648\u0646\u064a' },
  'Izmir': { lat: 38.4237, lng: 27.1428, ar: '\u0625\u0632\u0645\u064a\u0631' },
  'Bursa': { lat: 40.1885, lng: 29.061, ar: '\u0628\u0648\u0631\u0635\u0629' },
  'Konya': { lat: 37.8746, lng: 32.4932, ar: '\u0642\u0648\u0646\u064a\u0629' },
  'Gaziantep': { lat: 37.0662, lng: 37.3833, ar: '\u063a\u0627\u0632\u064a \u0639\u0646\u062a\u0627\u0628' },
  'Adana': { lat: 37.0, lng: 35.3213, ar: '\u0623\u0636\u0646\u0629' },
  'Antalya': { lat: 36.8969, lng: 30.7133, ar: '\u0623\u0646\u0637\u0627\u0644\u064a\u0627' },
  'Trabzon': { lat: 41.0027, lng: 39.7168, ar: '\u0637\u0631\u0627\u0628\u0632\u0648\u0646' },
  'Kayseri': { lat: 38.7312, lng: 35.4787, ar: '\u0642\u064a\u0635\u0631\u064a' },
  'Mashhad': { lat: 36.2605, lng: 59.6168, ar: '\u0645\u0634\u0647\u062f' },
  'Isfahan': { lat: 32.6546, lng: 51.668, ar: '\u0623\u0635\u0641\u0647\u0627\u0646' },
  'Shiraz': { lat: 29.5918, lng: 52.5837, ar: '\u0634\u064a\u0631\u0627\u0632' },
  'Tabriz': { lat: 38.08, lng: 46.2919, ar: '\u062a\u0628\u0631\u064a\u0632' },
  'Qom': { lat: 34.6416, lng: 50.8746, ar: '\u0642\u0645' },
  'Faisalabad': { lat: 31.4504, lng: 73.135, ar: '\u0641\u064a\u0635\u0644 \u0622\u0628\u0627\u062f' },
  'Peshawar': { lat: 34.0151, lng: 71.5249, ar: '\u0628\u064a\u0634\u0627\u0648\u0631' },
  'Quetta': { lat: 30.1798, lng: 66.975, ar: '\u0643\u0648\u064a\u062a\u0627' },
  'Multan': { lat: 30.1575, lng: 71.5249, ar: '\u0645\u0644\u062a\u0627\u0646' },
  'Rawalpindi': { lat: 33.5651, lng: 73.0169, ar: '\u0631\u0648\u0627\u0644\u0628\u0646\u062f\u064a' },
  'Hyderabad': { lat: 17.385, lng: 78.4867, ar: '\u062d\u064a\u062f\u0631 \u0622\u0628\u0627\u062f' },
  'Kolkata': { lat: 22.5726, lng: 88.3639, ar: '\u0643\u0648\u0644\u0643\u0627\u062a\u0627' },
  'Chennai': { lat: 13.0827, lng: 80.2707, ar: '\u062a\u0634\u064a\u0646\u0627\u064a' },
  'Bengaluru': { lat: 12.9716, lng: 77.5946, ar: '\u0628\u0646\u063a\u0627\u0644\u0648\u0631' },
  'Lucknow': { lat: 26.8467, lng: 80.9462, ar: '\u0644\u0643\u0646\u0627\u0648' },
  'Srinagar': { lat: 34.0837, lng: 74.7973, ar: '\u0633\u0631\u064a\u0646\u0627\u063a\u0627\u0631' },
  'Ahmedabad': { lat: 23.0225, lng: 72.5714, ar: '\u0623\u062d\u0645\u062f \u0622\u0628\u0627\u062f' },
  'Chittagong': { lat: 22.3569, lng: 91.7832, ar: '\u0634\u064a\u062a\u0627\u063a\u0648\u0646\u063a' },
  'Kandahar': { lat: 31.628, lng: 65.7372, ar: '\u0642\u0646\u062f\u0647\u0627\u0631' },
  'Herat': { lat: 34.3529, lng: 62.204, ar: '\u0647\u0631\u0627\u062a' },
  'Almaty': { lat: 43.222, lng: 76.8512, ar: '\u0623\u0644\u0645\u0627\u062a\u064a' },
  'Astana': { lat: 51.1694, lng: 71.4491, ar: '\u0623\u0633\u062a\u0627\u0646\u0627' },
  'Samarkand': { lat: 39.6542, lng: 66.9597, ar: '\u0633\u0645\u0631\u0642\u0646\u062f' },
  'Bishkek': { lat: 42.8746, lng: 74.5698, ar: '\u0628\u064a\u0634\u0643\u0643' },
  'Dushanbe': { lat: 38.5598, lng: 68.787, ar: '\u062f\u0648\u0634\u0646\u0628\u064a' },
  'Ashgabat': { lat: 37.9601, lng: 58.3261, ar: '\u0639\u0634\u0642 \u0622\u0628\u0627\u062f' },
  'Surabaya': { lat: -7.2575, lng: 112.7521, ar: '\u0633\u0648\u0631\u0627\u0628\u0627\u064a\u0627' },
  'Bandung': { lat: -6.9175, lng: 107.6191, ar: '\u0628\u0627\u0646\u062f\u0648\u0646\u063a' },
  'Medan': { lat: 3.5952, lng: 98.6722, ar: '\u0645\u064a\u062f\u0627\u0646' },
  'Makassar': { lat: -5.1477, lng: 119.4327, ar: '\u0645\u0627\u0643\u0627\u0633\u0627\u0631' },
  'Johor Bahru': { lat: 1.4927, lng: 103.7414, ar: '\u062c\u0648\u0647\u0648\u0631 \u0628\u0627\u0631\u0648' },
  'Penang': { lat: 5.4164, lng: 100.3327, ar: '\u0628\u064a\u0646\u0627\u0646\u063a' },
  'Bangkok': { lat: 13.7563, lng: 100.5018, ar: '\u0628\u0627\u0646\u0643\u0648\u0643' },
  'Manila': { lat: 14.5995, lng: 120.9842, ar: '\u0645\u0627\u0646\u064a\u0644\u0627' },
  'Bandar Seri Begawan': { lat: 4.9031, lng: 114.9398, ar: '\u0628\u0646\u062f\u0631 \u0633\u0631\u064a \u0628\u064a\u063a\u0627\u0648\u0627\u0646' },
  'Hanoi': { lat: 21.0285, lng: 105.8542, ar: '\u0647\u0627\u0646\u0648\u064a' },
  'Colombo': { lat: 6.9271, lng: 79.8612, ar: '\u0643\u0648\u0644\u0648\u0645\u0628\u0648' },
  'Kathmandu': { lat: 27.7172, lng: 85.324, ar: '\u0643\u0627\u062a\u0645\u0627\u0646\u062f\u0648' },
  'Seoul': { lat: 37.5665, lng: 126.978, ar: '\u0633\u064a\u0648\u0644' },
  'Shanghai': { lat: 31.2304, lng: 121.4737, ar: '\u0634\u0646\u063a\u0647\u0627\u064a' },
  'Hong Kong': { lat: 22.3193, lng: 114.1694, ar: '\u0647\u0648\u0646\u063a \u0643\u0648\u0646\u063a' },
  'Urumqi': { lat: 43.8256, lng: 87.6168, ar: '\u0623\u0648\u0631\u0648\u0645\u062a\u0634\u064a' },
  'Osaka': { lat: 34.6937, lng: 135.5023, ar: '\u0623\u0648\u0633\u0627\u0643\u0627' },
  'Manchester': { lat: 53.4808, lng: -2.2426, ar: '\u0645\u0627\u0646\u0634\u0633\u062a\u0631' },
  'Birmingham': { lat: 52.4862, lng: -1.8904, ar: '\u0628\u0631\u0645\u0646\u063a\u0647\u0627\u0645' },
  'Glasgow': { lat: 55.8642, lng: -4.2518, ar: '\u063a\u0644\u0627\u0633\u0643\u0648' },
  'Dublin': { lat: 53.3498, lng: -6.2603, ar: '\u062f\u0628\u0644\u0646' },
  'Marseille': { lat: 43.2965, lng: 5.3698, ar: '\u0645\u0631\u0633\u064a\u0644\u064a\u0627' },
  'Lyon': { lat: 45.764, lng: 4.8357, ar: '\u0644\u064a\u0648\u0646' },
  'Munich': { lat: 48.1351, lng: 11.582, ar: '\u0645\u064a\u0648\u0646\u062e' },
  'Frankfurt': { lat: 50.1109, lng: 8.6821, ar: '\u0641\u0631\u0627\u0646\u0643\u0641\u0648\u0631\u062a' },
  'Hamburg': { lat: 53.5511, lng: 9.9937, ar: '\u0647\u0627\u0645\u0628\u0648\u0631\u063a' },
  'Cologne': { lat: 50.9375, lng: 6.9603, ar: '\u0643\u0648\u0644\u0648\u0646\u064a\u0627' },
  'Vienna': { lat: 48.2082, lng: 16.3738, ar: '\u0641\u064a\u064a\u0646\u0627' },
  'Zurich': { lat: 47.3769, lng: 8.5417, ar: '\u0632\u064a\u0648\u0631\u062e' },
  'Geneva': { lat: 46.2044, lng: 6.1432, ar: '\u062c\u0646\u064a\u0641' },
  'Brussels': { lat: 50.8503, lng: 4.3517, ar: '\u0628\u0631\u0648\u0643\u0633\u0644' },
  'Rotterdam': { lat: 51.9244, lng: 4.4777, ar: '\u0631\u0648\u062a\u0631\u062f\u0627\u0645' },
  'Barcelona': { lat: 41.3874, lng: 2.1686, ar: '\u0628\u0631\u0634\u0644\u0648\u0646\u0629' },
  'Lisbon': { lat: 38.7223, lng: -9.1393, ar: '\u0644\u0634\u0628\u0648\u0646\u0629' },
  'Milan': { lat: 45.4642, lng: 9.19, ar: '\u0645\u064a\u0644\u0627\u0646\u0648' },
  'Athens': { lat: 37.9838, lng: 23.7275, ar: '\u0623\u062b\u064a\u0646\u0627' },
  'Sofia': { lat: 42.6977, lng: 23.3219, ar: '\u0635\u0648\u0641\u064a\u0627' },
  'Bucharest': { lat: 44.4268, lng: 26.1025, ar: '\u0628\u0648\u062e\u0627\u0631\u0633\u062a' },
  'Belgrade': { lat: 44.7866, lng: 20.4489, ar: '\u0628\u0644\u063a\u0631\u0627\u062f' },
  'Sarajevo': { lat: 43.8563, lng: 18.4131, ar: '\u0633\u0631\u0627\u064a\u064a\u0641\u0648' },
  'Tirana': { lat: 41.3275, lng: 19.8187, ar: '\u062a\u064a\u0631\u0627\u0646\u0627' },
  'Pristina': { lat: 42.6629, lng: 21.1655, ar: '\u0628\u0631\u064a\u0634\u062a\u064a\u0646\u0627' },
  'Skopje': { lat: 41.9981, lng: 21.4254, ar: '\u0633\u0643\u0648\u0628\u064a\u064a' },
  'Kyiv': { lat: 50.4501, lng: 30.5234, ar: '\u0643\u064a\u064a\u0641' },
  'Warsaw': { lat: 52.2297, lng: 21.0122, ar: '\u0648\u0627\u0631\u0633\u0648' },
  'Prague': { lat: 50.0755, lng: 14.4378, ar: '\u0628\u0631\u0627\u063a' },
  'Budapest': { lat: 47.4979, lng: 19.0402, ar: '\u0628\u0648\u062f\u0627\u0628\u0633\u062a' },
  'Oslo': { lat: 59.9139, lng: 10.7522, ar: '\u0623\u0648\u0633\u0644\u0648' },
  'Copenhagen': { lat: 55.6761, lng: 12.5683, ar: '\u0643\u0648\u0628\u0646\u0647\u0627\u063a\u0646' },
  'Helsinki': { lat: 60.1699, lng: 24.9384, ar: '\u0647\u0644\u0633\u0646\u0643\u064a' },
  'St Petersburg': { lat: 59.9311, lng: 30.3609, ar: '\u0633\u0627\u0646\u062a \u0628\u0637\u0631\u0633\u0628\u0631\u063a' },
  'Kazan': { lat: 55.8304, lng: 49.0661, ar: '\u0642\u0627\u0632\u0627\u0646' },
  'Grozny': { lat: 43.3178, lng: 45.6949, ar: '\u063a\u0631\u0648\u0632\u0646\u064a' },
  'Makhachkala': { lat: 42.9849, lng: 47.5047, ar: '\u0645\u062d\u062c \u0642\u0644\u0639\u0629' },
  'Washington': { lat: 38.9072, lng: -77.0369, ar: '\u0648\u0627\u0634\u0646\u0637\u0646' },
  'Houston': { lat: 29.7604, lng: -95.3698, ar: '\u0647\u064a\u0648\u0633\u062a\u0646' },
  'Dallas': { lat: 32.7767, lng: -96.797, ar: '\u062f\u0627\u0644\u0627\u0633' },
  'Detroit': { lat: 42.3314, lng: -83.0458, ar: '\u062f\u064a\u062a\u0631\u0648\u064a\u062a' },
  'Miami': { lat: 25.7617, lng: -80.1918, ar: '\u0645\u064a\u0627\u0645\u064a' },
  'San Francisco': { lat: 37.7749, lng: -122.4194, ar: '\u0633\u0627\u0646 \u0641\u0631\u0627\u0646\u0633\u064a\u0633\u0643\u0648' },
  'Seattle': { lat: 47.6062, lng: -122.3321, ar: '\u0633\u064a\u0627\u062a\u0644' },
  'Boston': { lat: 42.3601, lng: -71.0589, ar: '\u0628\u0648\u0633\u0637\u0646' },
  'Atlanta': { lat: 33.749, lng: -84.388, ar: '\u0623\u062a\u0644\u0627\u0646\u062a\u0627' },
  'Philadelphia': { lat: 39.9526, lng: -75.1652, ar: '\u0641\u064a\u0644\u0627\u062f\u0644\u0641\u064a\u0627' },
  'Montreal': { lat: 45.5017, lng: -73.5673, ar: '\u0645\u0648\u0646\u062a\u0631\u064a\u0627\u0644' },
  'Vancouver': { lat: 49.2827, lng: -123.1207, ar: '\u0641\u0627\u0646\u0643\u0648\u0641\u0631' },
  'Ottawa': { lat: 45.4215, lng: -75.6972, ar: '\u0623\u0648\u062a\u0627\u0648\u0627' },
  'Mexico City': { lat: 19.4326, lng: -99.1332, ar: '\u0645\u0643\u0633\u064a\u0643\u0648 \u0633\u064a\u062a\u064a' },
  'Buenos Aires': { lat: -34.6037, lng: -58.3816, ar: '\u0628\u0648\u064a\u0646\u0633 \u0622\u064a\u0631\u0633' },
  'Rio de Janeiro': { lat: -22.9068, lng: -43.1729, ar: '\u0631\u064a\u0648 \u062f\u064a \u062c\u0627\u0646\u064a\u0631\u0648' },
  'Bogota': { lat: 4.711, lng: -74.0721, ar: '\u0628\u0648\u063a\u0648\u062a\u0627' },
  'Lima': { lat: -12.0464, lng: -77.0428, ar: '\u0644\u064a\u0645\u0627' },
  'Santiago': { lat: -33.4489, lng: -70.6693, ar: '\u0633\u0627\u0646\u062a\u064a\u0627\u063a\u0648' },
  'Melbourne': { lat: -37.8136, lng: 144.9631, ar: '\u0645\u0644\u0628\u0648\u0631\u0646' },
  'Perth': { lat: -31.9505, lng: 115.8605, ar: '\u0628\u064a\u0631\u062b' },
  'Brisbane': { lat: -27.4698, lng: 153.0251, ar: '\u0628\u0631\u064a\u0633\u0628\u0627\u0646' },
  'Auckland': { lat: -36.8485, lng: 174.7633, ar: '\u0623\u0648\u0643\u0644\u0627\u0646\u062f' },
  'Addis Ababa': { lat: 9.03, lng: 38.74, ar: '\u0623\u062f\u064a\u0633 \u0623\u0628\u0627\u0628\u0627' },
  'Accra': { lat: 5.6037, lng: -0.187, ar: '\u0623\u0643\u0631\u0627' },
  'Kano': { lat: 12.0022, lng: 8.5919, ar: '\u0643\u0627\u0646\u0648' },
  'Abuja': { lat: 9.0765, lng: 7.3986, ar: '\u0623\u0628\u0648\u062c\u0627' },
  'Dar es Salaam': { lat: -6.7924, lng: 39.2083, ar: '\u062f\u0627\u0631 \u0627\u0644\u0633\u0644\u0627\u0645' },
  'Mombasa': { lat: -4.0435, lng: 39.6682, ar: '\u0645\u0648\u0645\u0628\u0627\u0633\u0627' },
  'Kampala': { lat: 0.3476, lng: 32.5825, ar: '\u0643\u0645\u0628\u0627\u0644\u0627' },
  'Abidjan': { lat: 5.36, lng: -4.0083, ar: '\u0623\u0628\u064a\u062f\u062c\u0627\u0646' },
  'Bamako': { lat: 12.6392, lng: -8.0029, ar: '\u0628\u0627\u0645\u0627\u0643\u0648' },
  'Niamey': { lat: 13.5127, lng: 2.1128, ar: '\u0646\u064a\u0627\u0645\u064a' },
  'Ndjamena': { lat: 12.1348, lng: 15.0557, ar: '\u0625\u0646\u062c\u0627\u0645\u064a\u0646\u0627' },
  'Conakry': { lat: 9.6412, lng: -13.5784, ar: '\u0643\u0648\u0646\u0627\u0643\u0631\u064a' },
  'Cape Town': { lat: -33.9249, lng: 18.4241, ar: '\u0643\u064a\u0628 \u062a\u0627\u0648\u0646' },
  'Durban': { lat: -29.8587, lng: 31.0218, ar: '\u062f\u064a\u0631\u0628\u0627\u0646' },
  'Kinshasa': { lat: -4.4419, lng: 15.2663, ar: '\u0643\u064a\u0646\u0634\u0627\u0633\u0627' },
  'Maputo': { lat: -25.9692, lng: 32.5732, ar: '\u0645\u0627\u0628\u0648\u062a\u0648' }
};
var COUNTRIES = {
  AF: { en: 'Afghanistan', ar: '\u0623\u0641\u063a\u0627\u0646\u0633\u062a\u0627\u0646', cap: 'Kabul', capAr: '\u0643\u0627\u0628\u0648\u0644' },
  AL: { en: 'Albania', ar: '\u0623\u0644\u0628\u0627\u0646\u064a\u0627', cap: 'Tirana', capAr: '\u062a\u064a\u0631\u0627\u0646\u0627' },
  DZ: { en: 'Algeria', ar: '\u0627\u0644\u062c\u0632\u0627\u0626\u0631', cap: 'Algiers', capAr: '\u0627\u0644\u062c\u0632\u0627\u0626\u0631' },
  AD: { en: 'Andorra', ar: '\u0623\u0646\u062f\u0648\u0631\u0627', cap: 'Andorra la Vella', capAr: '\u0623\u0646\u062f\u0648\u0631\u0627 \u0644\u0627 \u0641\u064a\u0644\u0627' },
  AO: { en: 'Angola', ar: '\u0623\u0646\u063a\u0648\u0644\u0627', cap: 'Luanda', capAr: '\u0644\u0648\u0627\u0646\u062f\u0627' },
  AG: { en: 'Antigua and Barbuda', ar: '\u0623\u0646\u062a\u064a\u063a\u0648\u0627 \u0648\u0628\u0627\u0631\u0628\u0648\u062f\u0627', cap: 'Saint Johns', capAr: '\u0633\u0627\u0646\u062a \u062c\u0648\u0646\u0632' },
  AR: { en: 'Argentina', ar: '\u0627\u0644\u0623\u0631\u062c\u0646\u062a\u064a\u0646', cap: 'Buenos Aires', capAr: '\u0628\u0648\u064a\u0646\u0633 \u0622\u064a\u0631\u0633' },
  AM: { en: 'Armenia', ar: '\u0623\u0631\u0645\u064a\u0646\u064a\u0627', cap: 'Yerevan', capAr: '\u064a\u0631\u064a\u0641\u0627\u0646' },
  AU: { en: 'Australia', ar: '\u0623\u0633\u062a\u0631\u0627\u0644\u064a\u0627', cap: 'Canberra', capAr: '\u0643\u0627\u0646\u0628\u0631\u0627' },
  AT: { en: 'Austria', ar: '\u0627\u0644\u0646\u0645\u0633\u0627', cap: 'Vienna', capAr: '\u0641\u064a\u064a\u0646\u0627' },
  AZ: { en: 'Azerbaijan', ar: '\u0623\u0630\u0631\u0628\u064a\u062c\u0627\u0646', cap: 'Baku', capAr: '\u0628\u0627\u0643\u0648' },
  BS: { en: 'Bahamas', ar: '\u062c\u0632\u0631 \u0627\u0644\u0628\u0647\u0627\u0645\u0627', cap: 'Nassau', capAr: '\u0646\u0627\u0633\u0627\u0648' },
  BH: { en: 'Bahrain', ar: '\u0627\u0644\u0628\u062d\u0631\u064a\u0646', cap: 'Manama', capAr: '\u0627\u0644\u0645\u0646\u0627\u0645\u0629' },
  BD: { en: 'Bangladesh', ar: '\u0628\u0646\u063a\u0644\u0627\u062f\u064a\u0634', cap: 'Dhaka', capAr: '\u062f\u0643\u0627' },
  BB: { en: 'Barbados', ar: '\u0628\u0631\u0628\u0627\u062f\u0648\u0633', cap: 'Bridgetown', capAr: '\u0628\u0631\u064a\u062f\u062c \u062a\u0627\u0648\u0646' },
  BY: { en: 'Belarus', ar: '\u0628\u064a\u0644\u0627\u0631\u0648\u0633\u064a\u0627', cap: 'Minsk', capAr: '\u0645\u064a\u0646\u0633\u0643' },
  BE: { en: 'Belgium', ar: '\u0628\u0644\u062c\u064a\u0643\u0627', cap: 'Brussels', capAr: '\u0628\u0631\u0648\u0643\u0633\u0644' },
  BZ: { en: 'Belize', ar: '\u0628\u0644\u064a\u0632', cap: 'Belmopan', capAr: '\u0628\u0644\u0645\u0648\u0628\u0627\u0646' },
  BJ: { en: 'Benin', ar: '\u0628\u0646\u064a\u0646', cap: 'Porto-Novo', capAr: '\u0628\u0648\u0631\u062a\u0648 \u0646\u0648\u0641\u0648' },
  BT: { en: 'Bhutan', ar: '\u0628\u0648\u062a\u0627\u0646', cap: 'Thimphu', capAr: '\u062a\u064a\u0645\u0641\u0648' },
  BO: { en: 'Bolivia', ar: '\u0628\u0648\u0644\u064a\u0641\u064a\u0627', cap: 'Sucre', capAr: '\u0633\u0648\u0643\u0631\u064a' },
  BA: { en: 'Bosnia and Herzegovina', ar: '\u0627\u0644\u0628\u0648\u0633\u0646\u0629 \u0648\u0627\u0644\u0647\u0631\u0633\u0643', cap: 'Sarajevo', capAr: '\u0633\u0631\u0627\u064a\u064a\u0641\u0648' },
  BW: { en: 'Botswana', ar: '\u0628\u0648\u062a\u0633\u0648\u0627\u0646\u0627', cap: 'Gaborone', capAr: '\u063a\u0627\u0628\u0648\u0631\u0648\u0646' },
  BR: { en: 'Brazil', ar: '\u0627\u0644\u0628\u0631\u0627\u0632\u064a\u0644', cap: 'Brasilia', capAr: '\u0628\u0631\u0627\u0632\u064a\u0644\u064a\u0627' },
  BN: { en: 'Brunei', ar: '\u0628\u0631\u0648\u0646\u0627\u064a', cap: 'Bandar Seri Begawan', capAr: '\u0628\u0646\u062f\u0631 \u0633\u0631\u064a \u0628\u064a\u063a\u0627\u0648\u0627\u0646' },
  BG: { en: 'Bulgaria', ar: '\u0628\u0644\u063a\u0627\u0631\u064a\u0627', cap: 'Sofia', capAr: '\u0635\u0648\u0641\u064a\u0627' },
  BF: { en: 'Burkina Faso', ar: '\u0628\u0648\u0631\u0643\u064a\u0646\u0627 \u0641\u0627\u0633\u0648', cap: 'Ouagadougou', capAr: '\u0648\u0627\u063a\u0627\u062f\u0648\u063a\u0648' },
  BI: { en: 'Burundi', ar: '\u0628\u0648\u0631\u0648\u0646\u062f\u064a', cap: 'Gitega', capAr: '\u063a\u064a\u062a\u064a\u063a\u0627' },
  KH: { en: 'Cambodia', ar: '\u0643\u0645\u0628\u0648\u062f\u064a\u0627', cap: 'Phnom Penh', capAr: '\u0628\u0646\u0648\u0645 \u0628\u0646\u0647' },
  CM: { en: 'Cameroon', ar: '\u0627\u0644\u0643\u0627\u0645\u064a\u0631\u0648\u0646', cap: 'Yaounde', capAr: '\u064a\u0627\u0648\u0646\u062f\u064a' },
  CA: { en: 'Canada', ar: '\u0643\u0646\u062f\u0627', cap: 'Ottawa', capAr: '\u0623\u0648\u062a\u0627\u0648\u0627' },
  CV: { en: 'Cape Verde', ar: '\u0627\u0644\u0631\u0623\u0633 \u0627\u0644\u0623\u062e\u0636\u0631', cap: 'Praia', capAr: '\u0628\u0631\u0627\u064a\u0627' },
  CF: { en: 'Central African Republic', ar: '\u0623\u0641\u0631\u064a\u0642\u064a\u0627 \u0627\u0644\u0648\u0633\u0637\u0649', cap: 'Bangui', capAr: '\u0628\u0627\u0646\u063a\u064a' },
  TD: { en: 'Chad', ar: '\u062a\u0634\u0627\u062f', cap: 'Ndjamena', capAr: '\u0625\u0646\u062c\u0627\u0645\u064a\u0646\u0627' },
  CL: { en: 'Chile', ar: '\u062a\u0634\u064a\u0644\u064a', cap: 'Santiago', capAr: '\u0633\u0627\u0646\u062a\u064a\u0627\u063a\u0648' },
  CN: { en: 'China', ar: '\u0627\u0644\u0635\u064a\u0646', cap: 'Beijing', capAr: '\u0628\u0643\u064a\u0646' },
  CO: { en: 'Colombia', ar: '\u0643\u0648\u0644\u0648\u0645\u0628\u064a\u0627', cap: 'Bogota', capAr: '\u0628\u0648\u063a\u0648\u062a\u0627' },
  KM: { en: 'Comoros', ar: '\u062c\u0632\u0631 \u0627\u0644\u0642\u0645\u0631', cap: 'Moroni', capAr: '\u0645\u0648\u0631\u0648\u0646\u064a' },
  CG: { en: 'Congo', ar: '\u0627\u0644\u0643\u0648\u0646\u063a\u0648', cap: 'Brazzaville', capAr: '\u0628\u0631\u0627\u0632\u0627\u0641\u064a\u0644' },
  CD: { en: 'DR Congo', ar: '\u0627\u0644\u0643\u0648\u0646\u063a\u0648 \u0627\u0644\u062f\u064a\u0645\u0642\u0631\u0627\u0637\u064a\u0629', cap: 'Kinshasa', capAr: '\u0643\u064a\u0646\u0634\u0627\u0633\u0627' },
  CR: { en: 'Costa Rica', ar: '\u0643\u0648\u0633\u062a\u0627\u0631\u064a\u0643\u0627', cap: 'San Jose', capAr: '\u0633\u0627\u0646 \u062e\u0648\u0633\u064a\u0647' },
  CI: { en: 'Ivory Coast', ar: '\u0633\u0627\u062d\u0644 \u0627\u0644\u0639\u0627\u062c', cap: 'Yamoussoukro', capAr: '\u064a\u0627\u0645\u0648\u0633\u0648\u0643\u0631\u0648' },
  HR: { en: 'Croatia', ar: '\u0643\u0631\u0648\u0627\u062a\u064a\u0627', cap: 'Zagreb', capAr: '\u0632\u063a\u0631\u0628' },
  CU: { en: 'Cuba', ar: '\u0643\u0648\u0628\u0627', cap: 'Havana', capAr: '\u0647\u0627\u0641\u0627\u0646\u0627' },
  CY: { en: 'Cyprus', ar: '\u0642\u0628\u0631\u0635', cap: 'Nicosia', capAr: '\u0646\u064a\u0642\u0648\u0633\u064a\u0627' },
  CZ: { en: 'Czechia', ar: '\u0627\u0644\u062a\u0634\u064a\u0643', cap: 'Prague', capAr: '\u0628\u0631\u0627\u063a' },
  DK: { en: 'Denmark', ar: '\u0627\u0644\u062f\u0646\u0645\u0627\u0631\u0643', cap: 'Copenhagen', capAr: '\u0643\u0648\u0628\u0646\u0647\u0627\u063a\u0646' },
  DJ: { en: 'Djibouti', ar: '\u062c\u064a\u0628\u0648\u062a\u064a', cap: 'Djibouti', capAr: '\u062c\u064a\u0628\u0648\u062a\u064a' },
  DM: { en: 'Dominica', ar: '\u062f\u0648\u0645\u064a\u0646\u064a\u0643\u0627', cap: 'Roseau', capAr: '\u0631\u0648\u0633\u0648' },
  DO: { en: 'Dominican Republic', ar: '\u062c\u0645\u0647\u0648\u0631\u064a\u0629 \u0627\u0644\u062f\u0648\u0645\u064a\u0646\u064a\u0643\u0627\u0646', cap: 'Santo Domingo', capAr: '\u0633\u0627\u0646\u062a\u0648 \u062f\u0648\u0645\u064a\u0646\u063a\u0648' },
  EC: { en: 'Ecuador', ar: '\u0627\u0644\u0625\u0643\u0648\u0627\u062f\u0648\u0631', cap: 'Quito', capAr: '\u0643\u064a\u062a\u0648' },
  EG: { en: 'Egypt', ar: '\u0645\u0635\u0631', cap: 'Cairo', capAr: '\u0627\u0644\u0642\u0627\u0647\u0631\u0629' },
  SV: { en: 'El Salvador', ar: '\u0627\u0644\u0633\u0644\u0641\u0627\u062f\u0648\u0631', cap: 'San Salvador', capAr: '\u0633\u0627\u0646 \u0633\u0644\u0641\u0627\u062f\u0648\u0631' },
  GQ: { en: 'Equatorial Guinea', ar: '\u063a\u064a\u0646\u064a\u0627 \u0627\u0644\u0627\u0633\u062a\u0648\u0627\u0626\u064a\u0629', cap: 'Malabo', capAr: '\u0645\u0627\u0644\u0627\u0628\u0648' },
  ER: { en: 'Eritrea', ar: '\u0625\u0631\u064a\u062a\u0631\u064a\u0627', cap: 'Asmara', capAr: '\u0623\u0633\u0645\u0631\u0629' },
  EE: { en: 'Estonia', ar: '\u0625\u0633\u062a\u0648\u0646\u064a\u0627', cap: 'Tallinn', capAr: '\u062a\u0627\u0644\u064a\u0646' },
  SZ: { en: 'Eswatini', ar: '\u0625\u0633\u0648\u0627\u062a\u064a\u0646\u064a', cap: 'Mbabane', capAr: '\u0645\u0628\u0627\u0628\u0627\u0646' },
  ET: { en: 'Ethiopia', ar: '\u0625\u062b\u064a\u0648\u0628\u064a\u0627', cap: 'Addis Ababa', capAr: '\u0623\u062f\u064a\u0633 \u0623\u0628\u0627\u0628\u0627' },
  FJ: { en: 'Fiji', ar: '\u0641\u064a\u062c\u064a', cap: 'Suva', capAr: '\u0633\u0648\u0641\u0627' },
  FI: { en: 'Finland', ar: '\u0641\u0646\u0644\u0646\u062f\u0627', cap: 'Helsinki', capAr: '\u0647\u0644\u0633\u0646\u0643\u064a' },
  FR: { en: 'France', ar: '\u0641\u0631\u0646\u0633\u0627', cap: 'Paris', capAr: '\u0628\u0627\u0631\u064a\u0633' },
  GA: { en: 'Gabon', ar: '\u0627\u0644\u063a\u0627\u0628\u0648\u0646', cap: 'Libreville', capAr: '\u0644\u064a\u0628\u0631\u0641\u064a\u0644' },
  GM: { en: 'Gambia', ar: '\u063a\u0627\u0645\u0628\u064a\u0627', cap: 'Banjul', capAr: '\u0628\u0627\u0646\u062c\u0648\u0644' },
  GE: { en: 'Georgia', ar: '\u062c\u0648\u0631\u062c\u064a\u0627', cap: 'Tbilisi', capAr: '\u062a\u0628\u0644\u064a\u0633\u064a' },
  DE: { en: 'Germany', ar: '\u0623\u0644\u0645\u0627\u0646\u064a\u0627', cap: 'Berlin', capAr: '\u0628\u0631\u0644\u064a\u0646' },
  GH: { en: 'Ghana', ar: '\u063a\u0627\u0646\u0627', cap: 'Accra', capAr: '\u0623\u0643\u0631\u0627' },
  GR: { en: 'Greece', ar: '\u0627\u0644\u064a\u0648\u0646\u0627\u0646', cap: 'Athens', capAr: '\u0623\u062b\u064a\u0646\u0627' },
  GD: { en: 'Grenada', ar: '\u063a\u0631\u064a\u0646\u0627\u062f\u0627', cap: 'Saint Georges', capAr: '\u0633\u0627\u0646\u062a \u062c\u0648\u0631\u062c\u0632' },
  GT: { en: 'Guatemala', ar: '\u063a\u0648\u0627\u062a\u064a\u0645\u0627\u0644\u0627', cap: 'Guatemala City', capAr: '\u0645\u062f\u064a\u0646\u0629 \u063a\u0648\u0627\u062a\u064a\u0645\u0627\u0644\u0627' },
  GN: { en: 'Guinea', ar: '\u063a\u064a\u0646\u064a\u0627', cap: 'Conakry', capAr: '\u0643\u0648\u0646\u0627\u0643\u0631\u064a' },
  GW: { en: 'Guinea-Bissau', ar: '\u063a\u064a\u0646\u064a\u0627 \u0628\u064a\u0633\u0627\u0648', cap: 'Bissau', capAr: '\u0628\u064a\u0633\u0627\u0648' },
  GY: { en: 'Guyana', ar: '\u063a\u064a\u0627\u0646\u0627', cap: 'Georgetown', capAr: '\u062c\u0648\u0631\u062c \u062a\u0627\u0648\u0646' },
  HT: { en: 'Haiti', ar: '\u0647\u0627\u064a\u062a\u064a', cap: 'Port-au-Prince', capAr: '\u0628\u0648\u0631\u062a \u0623\u0648 \u0628\u0631\u0646\u0633' },
  HN: { en: 'Honduras', ar: '\u0647\u0646\u062f\u0648\u0631\u0627\u0633', cap: 'Tegucigalpa', capAr: '\u062a\u064a\u063a\u0648\u0633\u064a\u063a\u0627\u0644\u0628\u0627' },
  HU: { en: 'Hungary', ar: '\u0627\u0644\u0645\u062c\u0631', cap: 'Budapest', capAr: '\u0628\u0648\u062f\u0627\u0628\u0633\u062a' },
  IS: { en: 'Iceland', ar: '\u0622\u064a\u0633\u0644\u0646\u062f\u0627', cap: 'Reykjavik', capAr: '\u0631\u064a\u0643\u064a\u0627\u0641\u064a\u0643' },
  IN: { en: 'India', ar: '\u0627\u0644\u0647\u0646\u062f', cap: 'New Delhi', capAr: '\u0646\u064a\u0648\u062f\u0644\u0647\u064a' },
  ID: { en: 'Indonesia', ar: '\u0625\u0646\u062f\u0648\u0646\u064a\u0633\u064a\u0627', cap: 'Jakarta', capAr: '\u062c\u0627\u0643\u0631\u062a\u0627' },
  IR: { en: 'Iran', ar: '\u0625\u064a\u0631\u0627\u0646', cap: 'Tehran', capAr: '\u0637\u0647\u0631\u0627\u0646' },
  IQ: { en: 'Iraq', ar: '\u0627\u0644\u0639\u0631\u0627\u0642', cap: 'Baghdad', capAr: '\u0628\u063a\u062f\u0627\u062f' },
  IE: { en: 'Ireland', ar: '\u0623\u064a\u0631\u0644\u0646\u062f\u0627', cap: 'Dublin', capAr: '\u062f\u0628\u0644\u0646' },
  IT: { en: 'Italy', ar: '\u0625\u064a\u0637\u0627\u0644\u064a\u0627', cap: 'Rome', capAr: '\u0631\u0648\u0645\u0627' },
  JM: { en: 'Jamaica', ar: '\u062c\u0627\u0645\u0627\u064a\u0643\u0627', cap: 'Kingston', capAr: '\u0643\u064a\u0646\u063a\u0633\u062a\u0648\u0646' },
  JP: { en: 'Japan', ar: '\u0627\u0644\u064a\u0627\u0628\u0627\u0646', cap: 'Tokyo', capAr: '\u0637\u0648\u0643\u064a\u0648' },
  JO: { en: 'Jordan', ar: '\u0627\u0644\u0623\u0631\u062f\u0646', cap: 'Amman', capAr: '\u0639\u0645\u0651\u0627\u0646' },
  KZ: { en: 'Kazakhstan', ar: '\u0643\u0627\u0632\u0627\u062e\u0633\u062a\u0627\u0646', cap: 'Astana', capAr: '\u0623\u0633\u062a\u0627\u0646\u0627' },
  KE: { en: 'Kenya', ar: '\u0643\u064a\u0646\u064a\u0627', cap: 'Nairobi', capAr: '\u0646\u064a\u0631\u0648\u0628\u064a' },
  KI: { en: 'Kiribati', ar: '\u0643\u064a\u0631\u064a\u0628\u0627\u062a\u064a', cap: 'Tarawa', capAr: '\u062a\u0627\u0631\u0627\u0648\u0627' },
  XK: { en: 'Kosovo', ar: '\u0643\u0648\u0633\u0648\u0641\u0648', cap: 'Pristina', capAr: '\u0628\u0631\u064a\u0634\u062a\u064a\u0646\u0627' },
  KW: { en: 'Kuwait', ar: '\u0627\u0644\u0643\u0648\u064a\u062a', cap: 'Kuwait City', capAr: '\u0645\u062f\u064a\u0646\u0629 \u0627\u0644\u0643\u0648\u064a\u062a' },
  KG: { en: 'Kyrgyzstan', ar: '\u0642\u064a\u0631\u063a\u064a\u0632\u0633\u062a\u0627\u0646', cap: 'Bishkek', capAr: '\u0628\u064a\u0634\u0643\u0643' },
  LA: { en: 'Laos', ar: '\u0644\u0627\u0648\u0633', cap: 'Vientiane', capAr: '\u0641\u064a\u064a\u0646\u062a\u064a\u0627\u0646' },
  LV: { en: 'Latvia', ar: '\u0644\u0627\u062a\u0641\u064a\u0627', cap: 'Riga', capAr: '\u0631\u064a\u063a\u0627' },
  LB: { en: 'Lebanon', ar: '\u0644\u0628\u0646\u0627\u0646', cap: 'Beirut', capAr: '\u0628\u064a\u0631\u0648\u062a' },
  LS: { en: 'Lesotho', ar: '\u0644\u064a\u0633\u0648\u062a\u0648', cap: 'Maseru', capAr: '\u0645\u0627\u0633\u064a\u0631\u0648' },
  LR: { en: 'Liberia', ar: '\u0644\u064a\u0628\u064a\u0631\u064a\u0627', cap: 'Monrovia', capAr: '\u0645\u0648\u0646\u0631\u0648\u0641\u064a\u0627' },
  LY: { en: 'Libya', ar: '\u0644\u064a\u0628\u064a\u0627', cap: 'Tripoli', capAr: '\u0637\u0631\u0627\u0628\u0644\u0633' },
  LI: { en: 'Liechtenstein', ar: '\u0644\u064a\u062e\u062a\u0646\u0634\u062a\u0627\u064a\u0646', cap: 'Vaduz', capAr: '\u0641\u0627\u062f\u0648\u0632' },
  LT: { en: 'Lithuania', ar: '\u0644\u064a\u062a\u0648\u0627\u0646\u064a\u0627', cap: 'Vilnius', capAr: '\u0641\u064a\u0644\u0646\u064a\u0648\u0633' },
  LU: { en: 'Luxembourg', ar: '\u0644\u0648\u0643\u0633\u0645\u0628\u0648\u0631\u063a', cap: 'Luxembourg', capAr: '\u0644\u0648\u0643\u0633\u0645\u0628\u0648\u0631\u063a' },
  MG: { en: 'Madagascar', ar: '\u0645\u062f\u063a\u0634\u0642\u0631', cap: 'Antananarivo', capAr: '\u0623\u0646\u062a\u0627\u0646\u0627\u0646\u0627\u0631\u064a\u0641\u0648' },
  MW: { en: 'Malawi', ar: '\u0645\u0644\u0627\u0648\u064a', cap: 'Lilongwe', capAr: '\u0644\u064a\u0644\u0648\u0646\u063a\u0648\u064a' },
  MY: { en: 'Malaysia', ar: '\u0645\u0627\u0644\u064a\u0632\u064a\u0627', cap: 'Kuala Lumpur', capAr: '\u0643\u0648\u0627\u0644\u0627\u0644\u0645\u0628\u0648\u0631' },
  MV: { en: 'Maldives', ar: '\u0627\u0644\u0645\u0627\u0644\u062f\u064a\u0641', cap: 'Male', capAr: '\u0645\u0627\u0644\u064a\u0647' },
  ML: { en: 'Mali', ar: '\u0645\u0627\u0644\u064a', cap: 'Bamako', capAr: '\u0628\u0627\u0645\u0627\u0643\u0648' },
  MT: { en: 'Malta', ar: '\u0645\u0627\u0644\u0637\u0627', cap: 'Valletta', capAr: '\u0641\u0627\u0644\u064a\u062a\u0627' },
  MH: { en: 'Marshall Islands', ar: '\u062c\u0632\u0631 \u0645\u0627\u0631\u0634\u0627\u0644', cap: 'Majuro', capAr: '\u0645\u0627\u062c\u0648\u0631\u0648' },
  MR: { en: 'Mauritania', ar: '\u0645\u0648\u0631\u064a\u062a\u0627\u0646\u064a\u0627', cap: 'Nouakchott', capAr: '\u0646\u0648\u0627\u0643\u0634\u0648\u0637' },
  MU: { en: 'Mauritius', ar: '\u0645\u0648\u0631\u064a\u0634\u064a\u0648\u0633', cap: 'Port Louis', capAr: '\u0628\u0648\u0631\u062a \u0644\u0648\u064a\u0633' },
  MX: { en: 'Mexico', ar: '\u0627\u0644\u0645\u0643\u0633\u064a\u0643', cap: 'Mexico City', capAr: '\u0645\u0643\u0633\u064a\u0643\u0648 \u0633\u064a\u062a\u064a' },
  FM: { en: 'Micronesia', ar: '\u0645\u064a\u0643\u0631\u0648\u0646\u064a\u0632\u064a\u0627', cap: 'Palikir', capAr: '\u0628\u0627\u0644\u064a\u0643\u064a\u0631' },
  MD: { en: 'Moldova', ar: '\u0645\u0648\u0644\u062f\u0648\u0641\u0627', cap: 'Chisinau', capAr: '\u0643\u064a\u0634\u064a\u0646\u0627\u0648' },
  MC: { en: 'Monaco', ar: '\u0645\u0648\u0646\u0627\u0643\u0648', cap: 'Monaco', capAr: '\u0645\u0648\u0646\u0627\u0643\u0648' },
  MN: { en: 'Mongolia', ar: '\u0645\u0646\u063a\u0648\u0644\u064a\u0627', cap: 'Ulaanbaatar', capAr: '\u0623\u0648\u0644\u0627\u0646 \u0628\u0627\u062a\u0648\u0631' },
  ME: { en: 'Montenegro', ar: '\u0627\u0644\u062c\u0628\u0644 \u0627\u0644\u0623\u0633\u0648\u062f', cap: 'Podgorica', capAr: '\u0628\u0648\u062f\u063a\u0648\u0631\u064a\u062a\u0633\u0627' },
  MA: { en: 'Morocco', ar: '\u0627\u0644\u0645\u063a\u0631\u0628', cap: 'Rabat', capAr: '\u0627\u0644\u0631\u0628\u0627\u0637' },
  MZ: { en: 'Mozambique', ar: '\u0645\u0648\u0632\u0645\u0628\u064a\u0642', cap: 'Maputo', capAr: '\u0645\u0627\u0628\u0648\u062a\u0648' },
  MM: { en: 'Myanmar', ar: '\u0645\u064a\u0627\u0646\u0645\u0627\u0631', cap: 'Naypyidaw', capAr: '\u0646\u0627\u064a\u0628\u064a\u062f\u0627\u0648' },
  NA: { en: 'Namibia', ar: '\u0646\u0627\u0645\u064a\u0628\u064a\u0627', cap: 'Windhoek', capAr: '\u0648\u064a\u0646\u062f\u0647\u0648\u0643' },
  NR: { en: 'Nauru', ar: '\u0646\u0627\u0648\u0631\u0648', cap: 'Yaren', capAr: '\u064a\u0627\u0631\u064a\u0646' },
  NP: { en: 'Nepal', ar: '\u0646\u064a\u0628\u0627\u0644', cap: 'Kathmandu', capAr: '\u0643\u0627\u062a\u0645\u0627\u0646\u062f\u0648' },
  NL: { en: 'Netherlands', ar: '\u0647\u0648\u0644\u0646\u062f\u0627', cap: 'Amsterdam', capAr: '\u0623\u0645\u0633\u062a\u0631\u062f\u0627\u0645' },
  NZ: { en: 'New Zealand', ar: '\u0646\u064a\u0648\u0632\u064a\u0644\u0646\u062f\u0627', cap: 'Wellington', capAr: '\u0648\u064a\u0644\u064a\u0646\u063a\u062a\u0648\u0646' },
  NI: { en: 'Nicaragua', ar: '\u0646\u064a\u0643\u0627\u0631\u0627\u063a\u0648\u0627', cap: 'Managua', capAr: '\u0645\u0627\u0646\u0627\u063a\u0648\u0627' },
  NE: { en: 'Niger', ar: '\u0627\u0644\u0646\u064a\u062c\u0631', cap: 'Niamey', capAr: '\u0646\u064a\u0627\u0645\u064a' },
  NG: { en: 'Nigeria', ar: '\u0646\u064a\u062c\u064a\u0631\u064a\u0627', cap: 'Abuja', capAr: '\u0623\u0628\u0648\u062c\u0627' },
  KP: { en: 'North Korea', ar: '\u0643\u0648\u0631\u064a\u0627 \u0627\u0644\u0634\u0645\u0627\u0644\u064a\u0629', cap: 'Pyongyang', capAr: '\u0628\u064a\u0648\u0646\u063a \u064a\u0627\u0646\u063a' },
  MK: { en: 'North Macedonia', ar: '\u0645\u0642\u062f\u0648\u0646\u064a\u0627 \u0627\u0644\u0634\u0645\u0627\u0644\u064a\u0629', cap: 'Skopje', capAr: '\u0633\u0643\u0648\u0628\u064a\u064a' },
  NO: { en: 'Norway', ar: '\u0627\u0644\u0646\u0631\u0648\u064a\u062c', cap: 'Oslo', capAr: '\u0623\u0648\u0633\u0644\u0648' },
  OM: { en: 'Oman', ar: '\u0639\u064f\u0645\u0627\u0646', cap: 'Muscat', capAr: '\u0645\u0633\u0642\u0637' },
  PK: { en: 'Pakistan', ar: '\u0628\u0627\u0643\u0633\u062a\u0627\u0646', cap: 'Islamabad', capAr: '\u0625\u0633\u0644\u0627\u0645 \u0622\u0628\u0627\u062f' },
  PW: { en: 'Palau', ar: '\u0628\u0627\u0644\u0627\u0648', cap: 'Ngerulmud', capAr: '\u0646\u062c\u064a\u0631\u0648\u0644\u0645\u0648\u062f' },
  PS: { en: 'Palestine', ar: '\u0641\u0644\u0633\u0637\u064a\u0646', cap: 'Jerusalem', capAr: '\u0627\u0644\u0642\u062f\u0633' },
  PA: { en: 'Panama', ar: '\u0628\u0646\u0645\u0627', cap: 'Panama City', capAr: '\u0645\u062f\u064a\u0646\u0629 \u0628\u0646\u0645\u0627' },
  PG: { en: 'Papua New Guinea', ar: '\u0628\u0627\u0628\u0648\u0627 \u063a\u064a\u0646\u064a\u0627 \u0627\u0644\u062c\u062f\u064a\u062f\u0629', cap: 'Port Moresby', capAr: '\u0628\u0648\u0631\u062a \u0645\u0648\u0631\u0633\u0628\u064a' },
  PY: { en: 'Paraguay', ar: '\u0628\u0627\u0631\u0627\u063a\u0648\u0627\u064a', cap: 'Asuncion', capAr: '\u0623\u0633\u0648\u0646\u0633\u064a\u0648\u0646' },
  PE: { en: 'Peru', ar: '\u0628\u064a\u0631\u0648', cap: 'Lima', capAr: '\u0644\u064a\u0645\u0627' },
  PH: { en: 'Philippines', ar: '\u0627\u0644\u0641\u0644\u0628\u064a\u0646', cap: 'Manila', capAr: '\u0645\u0627\u0646\u064a\u0644\u0627' },
  PL: { en: 'Poland', ar: '\u0628\u0648\u0644\u0646\u062f\u0627', cap: 'Warsaw', capAr: '\u0648\u0627\u0631\u0633\u0648' },
  PT: { en: 'Portugal', ar: '\u0627\u0644\u0628\u0631\u062a\u063a\u0627\u0644', cap: 'Lisbon', capAr: '\u0644\u0634\u0628\u0648\u0646\u0629' },
  QA: { en: 'Qatar', ar: '\u0642\u0637\u0631', cap: 'Doha', capAr: '\u0627\u0644\u062f\u0648\u062d\u0629' },
  RO: { en: 'Romania', ar: '\u0631\u0648\u0645\u0627\u0646\u064a\u0627', cap: 'Bucharest', capAr: '\u0628\u0648\u062e\u0627\u0631\u0633\u062a' },
  RU: { en: 'Russia', ar: '\u0631\u0648\u0633\u064a\u0627', cap: 'Moscow', capAr: '\u0645\u0648\u0633\u0643\u0648' },
  RW: { en: 'Rwanda', ar: '\u0631\u0648\u0627\u0646\u062f\u0627', cap: 'Kigali', capAr: '\u0643\u064a\u063a\u0627\u0644\u064a' },
  KN: { en: 'Saint Kitts and Nevis', ar: '\u0633\u0627\u0646\u062a \u0643\u064a\u062a\u0633 \u0648\u0646\u064a\u0641\u064a\u0633', cap: 'Basseterre', capAr: '\u0628\u0627\u0633\u062a\u064a\u0631' },
  LC: { en: 'Saint Lucia', ar: '\u0633\u0627\u0646\u062a \u0644\u0648\u0633\u064a\u0627', cap: 'Castries', capAr: '\u0643\u0627\u0633\u062a\u0631\u064a\u0633' },
  VC: { en: 'Saint Vincent', ar: '\u0633\u0627\u0646\u062a \u0641\u0646\u0633\u0646\u062a', cap: 'Kingstown', capAr: '\u0643\u064a\u0646\u063a\u0633\u062a\u0627\u0648\u0646' },
  WS: { en: 'Samoa', ar: '\u0633\u0627\u0645\u0648\u0627', cap: 'Apia', capAr: '\u0623\u0628\u064a\u0627' },
  SM: { en: 'San Marino', ar: '\u0633\u0627\u0646 \u0645\u0627\u0631\u064a\u0646\u0648', cap: 'San Marino', capAr: '\u0633\u0627\u0646 \u0645\u0627\u0631\u064a\u0646\u0648' },
  ST: { en: 'Sao Tome and Principe', ar: '\u0633\u0627\u0648 \u062a\u0648\u0645\u064a \u0648\u0628\u0631\u064a\u0646\u0633\u064a\u0628', cap: 'Sao Tome', capAr: '\u0633\u0627\u0648 \u062a\u0648\u0645\u064a' },
  SA: { en: 'Saudi Arabia', ar: '\u0627\u0644\u0633\u0639\u0648\u062f\u064a\u0629', cap: 'Riyadh', capAr: '\u0627\u0644\u0631\u064a\u0627\u0636' },
  SN: { en: 'Senegal', ar: '\u0627\u0644\u0633\u0646\u063a\u0627\u0644', cap: 'Dakar', capAr: '\u062f\u0627\u0643\u0627\u0631' },
  RS: { en: 'Serbia', ar: '\u0635\u0631\u0628\u064a\u0627', cap: 'Belgrade', capAr: '\u0628\u0644\u063a\u0631\u0627\u062f' },
  SC: { en: 'Seychelles', ar: '\u0633\u064a\u0634\u0644', cap: 'Victoria', capAr: '\u0641\u064a\u0643\u062a\u0648\u0631\u064a\u0627' },
  SL: { en: 'Sierra Leone', ar: '\u0633\u064a\u0631\u0627\u0644\u064a\u0648\u0646', cap: 'Freetown', capAr: '\u0641\u0631\u064a\u062a\u0627\u0648\u0646' },
  SG: { en: 'Singapore', ar: '\u0633\u0646\u063a\u0627\u0641\u0648\u0631\u0629', cap: 'Singapore', capAr: '\u0633\u0646\u063a\u0627\u0641\u0648\u0631\u0629' },
  SK: { en: 'Slovakia', ar: '\u0633\u0644\u0648\u0641\u0627\u0643\u064a\u0627', cap: 'Bratislava', capAr: '\u0628\u0631\u0627\u062a\u064a\u0633\u0644\u0627\u0641\u0627' },
  SI: { en: 'Slovenia', ar: '\u0633\u0644\u0648\u0641\u064a\u0646\u064a\u0627', cap: 'Ljubljana', capAr: '\u0644\u064a\u0648\u0628\u0644\u064a\u0627\u0646\u0627' },
  SB: { en: 'Solomon Islands', ar: '\u062c\u0632\u0631 \u0633\u0644\u064a\u0645\u0627\u0646', cap: 'Honiara', capAr: '\u0647\u0648\u0646\u064a\u0627\u0631\u0627' },
  SO: { en: 'Somalia', ar: '\u0627\u0644\u0635\u0648\u0645\u0627\u0644', cap: 'Mogadishu', capAr: '\u0645\u0642\u062f\u064a\u0634\u0648' },
  ZA: { en: 'South Africa', ar: '\u062c\u0646\u0648\u0628 \u0623\u0641\u0631\u064a\u0642\u064a\u0627', cap: 'Pretoria', capAr: '\u0628\u0631\u064a\u062a\u0648\u0631\u064a\u0627' },
  KR: { en: 'South Korea', ar: '\u0643\u0648\u0631\u064a\u0627 \u0627\u0644\u062c\u0646\u0648\u0628\u064a\u0629', cap: 'Seoul', capAr: '\u0633\u064a\u0648\u0644' },
  SS: { en: 'South Sudan', ar: '\u062c\u0646\u0648\u0628 \u0627\u0644\u0633\u0648\u062f\u0627\u0646', cap: 'Juba', capAr: '\u062c\u0648\u0628\u0627' },
  ES: { en: 'Spain', ar: '\u0625\u0633\u0628\u0627\u0646\u064a\u0627', cap: 'Madrid', capAr: '\u0645\u062f\u0631\u064a\u062f' },
  LK: { en: 'Sri Lanka', ar: '\u0633\u0631\u064a\u0644\u0627\u0646\u0643\u0627', cap: 'Colombo', capAr: '\u0643\u0648\u0644\u0648\u0645\u0628\u0648' },
  SD: { en: 'Sudan', ar: '\u0627\u0644\u0633\u0648\u062f\u0627\u0646', cap: 'Khartoum', capAr: '\u0627\u0644\u062e\u0631\u0637\u0648\u0645' },
  SR: { en: 'Suriname', ar: '\u0633\u0648\u0631\u064a\u0646\u0627\u0645', cap: 'Paramaribo', capAr: '\u0628\u0627\u0631\u0627\u0645\u0627\u0631\u064a\u0628\u0648' },
  SE: { en: 'Sweden', ar: '\u0627\u0644\u0633\u0648\u064a\u062f', cap: 'Stockholm', capAr: '\u0633\u062a\u0648\u0643\u0647\u0648\u0644\u0645' },
  CH: { en: 'Switzerland', ar: '\u0633\u0648\u064a\u0633\u0631\u0627', cap: 'Bern', capAr: '\u0628\u0631\u0646' },
  SY: { en: 'Syria', ar: '\u0633\u0648\u0631\u064a\u0627', cap: 'Damascus', capAr: '\u062f\u0645\u0634\u0642' },
  TW: { en: 'Taiwan', ar: '\u062a\u0627\u064a\u0648\u0627\u0646', cap: 'Taipei', capAr: '\u062a\u0627\u064a\u0628\u064a\u0647' },
  TJ: { en: 'Tajikistan', ar: '\u0637\u0627\u062c\u064a\u0643\u0633\u062a\u0627\u0646', cap: 'Dushanbe', capAr: '\u062f\u0648\u0634\u0646\u0628\u064a' },
  TZ: { en: 'Tanzania', ar: '\u062a\u0646\u0632\u0627\u0646\u064a\u0627', cap: 'Dodoma', capAr: '\u062f\u0648\u062f\u0648\u0645\u0627' },
  TH: { en: 'Thailand', ar: '\u062a\u0627\u064a\u0644\u0627\u0646\u062f', cap: 'Bangkok', capAr: '\u0628\u0627\u0646\u0643\u0648\u0643' },
  TL: { en: 'Timor-Leste', ar: '\u062a\u064a\u0645\u0648\u0631 \u0627\u0644\u0634\u0631\u0642\u064a\u0629', cap: 'Dili', capAr: '\u062f\u064a\u0644\u064a' },
  TG: { en: 'Togo', ar: '\u062a\u0648\u063a\u0648', cap: 'Lome', capAr: '\u0644\u0648\u0645\u064a' },
  TO: { en: 'Tonga', ar: '\u062a\u0648\u0646\u063a\u0627', cap: 'Nukualofa', capAr: '\u0646\u0648\u0643\u0648 \u0623\u0644\u0648\u0641\u0627' },
  TT: { en: 'Trinidad and Tobago', ar: '\u062a\u0631\u064a\u0646\u064a\u062f\u0627\u062f \u0648\u062a\u0648\u0628\u0627\u063a\u0648', cap: 'Port of Spain', capAr: '\u0628\u0648\u0631\u062a \u0623\u0648\u0641 \u0633\u0628\u064a\u0646' },
  TN: { en: 'Tunisia', ar: '\u062a\u0648\u0646\u0633', cap: 'Tunis', capAr: '\u062a\u0648\u0646\u0633' },
  TR: { en: 'Turkey', ar: '\u062a\u0631\u0643\u064a\u0627', cap: 'Ankara', capAr: '\u0623\u0646\u0642\u0631\u0629' },
  TM: { en: 'Turkmenistan', ar: '\u062a\u0631\u0643\u0645\u0627\u0646\u0633\u062a\u0627\u0646', cap: 'Ashgabat', capAr: '\u0639\u0634\u0642 \u0622\u0628\u0627\u062f' },
  TV: { en: 'Tuvalu', ar: '\u062a\u0648\u0641\u0627\u0644\u0648', cap: 'Funafuti', capAr: '\u0641\u0648\u0646\u0627\u0641\u0648\u062a\u064a' },
  UG: { en: 'Uganda', ar: '\u0623\u0648\u063a\u0646\u062f\u0627', cap: 'Kampala', capAr: '\u0643\u0645\u0628\u0627\u0644\u0627' },
  UA: { en: 'Ukraine', ar: '\u0623\u0648\u0643\u0631\u0627\u0646\u064a\u0627', cap: 'Kyiv', capAr: '\u0643\u064a\u064a\u0641' },
  AE: { en: 'United Arab Emirates', ar: '\u0627\u0644\u0625\u0645\u0627\u0631\u0627\u062a', cap: 'Abu Dhabi', capAr: '\u0623\u0628\u0648\u0638\u0628\u064a' },
  GB: { en: 'United Kingdom', ar: '\u0628\u0631\u064a\u0637\u0627\u0646\u064a\u0627', cap: 'London', capAr: '\u0644\u0646\u062f\u0646' },
  US: { en: 'United States', ar: '\u0623\u0645\u0631\u064a\u0643\u0627', cap: 'Washington', capAr: '\u0648\u0627\u0634\u0646\u0637\u0646' },
  UY: { en: 'Uruguay', ar: '\u0623\u0648\u0631\u0648\u063a\u0648\u0627\u064a', cap: 'Montevideo', capAr: '\u0645\u0648\u0646\u062a\u064a\u0641\u064a\u062f\u064a\u0648' },
  UZ: { en: 'Uzbekistan', ar: '\u0623\u0648\u0632\u0628\u0643\u0633\u062a\u0627\u0646', cap: 'Tashkent', capAr: '\u0637\u0634\u0642\u0646\u062f' },
  VU: { en: 'Vanuatu', ar: '\u0641\u0627\u0646\u0648\u0627\u062a\u0648', cap: 'Port Vila', capAr: '\u0628\u0648\u0631\u062a \u0641\u064a\u0644\u0627' },
  VA: { en: 'Vatican City', ar: '\u0627\u0644\u0641\u0627\u062a\u064a\u0643\u0627\u0646', cap: 'Vatican City', capAr: '\u0627\u0644\u0641\u0627\u062a\u064a\u0643\u0627\u0646' },
  VE: { en: 'Venezuela', ar: '\u0641\u0646\u0632\u0648\u064a\u0644\u0627', cap: 'Caracas', capAr: '\u0643\u0627\u0631\u0627\u0643\u0627\u0633' },
  VN: { en: 'Vietnam', ar: '\u0641\u064a\u062a\u0646\u0627\u0645', cap: 'Hanoi', capAr: '\u0647\u0627\u0646\u0648\u064a' },
  YE: { en: 'Yemen', ar: '\u0627\u0644\u064a\u0645\u0646', cap: 'Sanaa', capAr: '\u0635\u0646\u0639\u0627\u0621' },
  ZM: { en: 'Zambia', ar: '\u0632\u0627\u0645\u0628\u064a\u0627', cap: 'Lusaka', capAr: '\u0644\u0648\u0633\u0627\u0643\u0627' },
  ZW: { en: 'Zimbabwe', ar: '\u0632\u064a\u0645\u0628\u0627\u0628\u0648\u064a', cap: 'Harare', capAr: '\u0647\u0631\u0627\u0631\u064a' }
};
var cache = {};
var inflight = {};
var ready = false;
var lastErr = '';

function pad(n) { return (n < 10 ? '0' : '') + n; }
function dkey(d) { return pad(d.getDate()) + '-' + pad(d.getMonth() + 1) + '-' + d.getFullYear(); }
function iso(d) { return d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate()); }
function addDays(d, n) { var x = new Date(d.getTime()); x.setDate(x.getDate() + n); return x; }
function cfgSig() { return [cfg.pick, cfg.city.toLowerCase(), cfg.country.toLowerCase(), cfg.source, cfg.method, cfg.school, cfg.fallback ? 1 : 0].join('|'); }
function locSig(loc) { return loc ? loc.lat.toFixed(2) + ',' + loc.lng.toFixed(2) : 'c:' + cfg.city.toLowerCase() + ',' + cfg.country.toLowerCase(); }
function ckey(dk, loc) { return 'pt3|' + locSig(loc) + '|' + [cfg.source, cfg.method, cfg.school, cfg.fallback ? 1 : 0].join('|') + '|' + dk; }
function num(v, lo, hi) { var n = parseFloat(String(v).replace(',', '.')); return (isFinite(n) && n >= lo && n <= hi) ? n : null; }
function tzName() { try { return Intl.DateTimeFormat().resolvedOptions().timeZone || ''; } catch (e) { return ''; } }

function readCfg() {
  function g(name, def) { try { var v = eval(name); return (v === undefined || v === null || v === '') ? def : v; } catch (e) { return def; } }
  function b(name, def) { var v = g(name, def); return (v === true || v === 'true'); }
  cfg.pick = String(g('cityPick', 'auto'));
  cfg.city = String(g('city', '')).trim();
  cfg.country = String(g('countryPick', 'none'));
  cfg.method = String(g('calcMethod', '4'));
  cfg.school = String(g('asrSchool', '0'));
  cfg.source = String(g('prayerSource', 'aladhan'));
  cfg.fallback = b('fallbackLocal', true);
  cfg.fmt = String(g('timeFormat', '12'));
  cfg.hijri = b('showHijri', true);
  cfg.wm = b('showWatermark', true);
  cfg.lang = String(g('widgetLang', 'auto'));
  cfg.mode = String(g('bgMode', 'auto'));
  cfg.fixed = String(g('bgFixed', 'emerald'));
  cfg.custom = String(g('customColor', '#2E7D6B'));
  cfg.per = [String(g('bgFajr', 'midnight')), String(g('bgDhuhr', 'ocean')), String(g('bgAsr', 'sunset')), String(g('bgMaghrib', 'dusk')), String(g('bgIsha', 'emerald'))];
  applyLang();
  applyTheme(0);
}

/* ---------------- Themes ---------------- */
var THEMES = {
  emerald:  { b: ['#0f3d31', '#07241d', '#041611'], a: '#E9C46A', a2: '#F2D68A' },
  midnight: { b: ['#16294f', '#0b1630', '#060b1c'], a: '#8FB4FF', a2: '#B8D0FF' },
  ocean:    { b: ['#0b5560', '#06323a', '#031b20'], a: '#6FE7D8', a2: '#9CF2E8' },
  sunset:   { b: ['#6b2f12', '#3a1a0b', '#1f0e06'], a: '#FFB36B', a2: '#FFD0A0' },
  dusk:     { b: ['#5a2a5e', '#2f1638', '#180b1f'], a: '#FFA8B8', a2: '#FFC9D3' },
  royal:    { b: ['#3a2a78', '#1c1340', '#0d0820'], a: '#C7A6FF', a2: '#DCC8FF' },
  graphite: { b: ['#2a2f38', '#14171c', '#0a0c0f'], a: '#4FE3B0', a2: '#86F0CC' }
};
var lastThemeKey = '';
function colorTheme(c) {
  var m = /#?([0-9a-fA-F]{6})/.exec(c || ''), r = 46, g = 125, b = 107;
  if (m) { r = parseInt(m[1].substr(0, 2), 16); g = parseInt(m[1].substr(2, 2), 16); b = parseInt(m[1].substr(4, 2), 16); }
  r /= 255; g /= 255; b /= 255;
  var mx = Math.max(r, g, b), mn = Math.min(r, g, b), l = (mx + mn) / 2, d = mx - mn, h = 0, s = 0;
  if (d > 0) {
    s = d / (1 - Math.abs(2 * l - 1));
    if (mx === r) h = ((g - b) / d) % 6; else if (mx === g) h = (b - r) / d + 2; else h = (r - g) / d + 4;
    h = Math.round(h * 60); if (h < 0) h += 360;
  }
  var sb = Math.round(Math.min(1, s) * 70), sa = Math.round(Math.max(Math.min(1, s), 0.35) * (s < 0.05 ? 0 : 100));
  function hsl(hh, ss, ll) { return 'hsl(' + hh + ', ' + ss + '%, ' + ll + '%)'; }
  return { b: [hsl(h, sb, 24), hsl(h, sb, 14), hsl(h, sb, 7)], a: hsl(h, sa, 68), a2: hsl(h, sa, 79) };
}
function applyTheme(i) {
  var key = (cfg.mode === 'fixed') ? cfg.fixed : cfg.per[i];
  var t;
  if (cfg.mode === 'custom') { key = 'custom:' + cfg.custom; t = colorTheme(cfg.custom); }
  else { if (!THEMES[key]) key = 'emerald'; t = THEMES[key]; }
  var sig = key + '|' + cfg.wm;
  if (sig === lastThemeKey) return;
  lastThemeKey = sig;
  var w = document.getElementById('w');
  w.style.setProperty('--b0', t.b[0]); w.style.setProperty('--b1', t.b[1]); w.style.setProperty('--b2', t.b[2]);
  w.style.setProperty('--acc', t.a); w.style.setProperty('--acc2', t.a2);
  document.getElementById('wm').style.display = cfg.wm ? '' : 'none';
}

/* ---------------- Hijri date (Umm al-Qura, from the system) ---------------- */
function hijriFor(d) {
  try {
    var f = new Intl.DateTimeFormat('en-u-ca-islamic-umalqura-nu-latn', { day: 'numeric', month: 'numeric', year: 'numeric' });
    var p = f.formatToParts(d), o = {};
    for (var i = 0; i < p.length; i++) o[p[i].type] = p[i].value;
    var y = parseInt(o.year, 10), m = parseInt(o.month, 10), dd = parseInt(o.day, 10);
    if (!(y >= 1300 && y <= 1700 && m >= 1 && m <= 12 && dd >= 1)) return null;
    return { day: dd, month: m, year: y };
  } catch (e) { return null; }
}

/* ---------------- Local calculation (offline) ---------------- */
// f = fajr angle, i = isha angle, im = isha minutes after maghrib
var METHODS = {
  '1': { f: 18, i: 18 },
  '2': { f: 15, i: 15 },
  '3': { f: 18, i: 17 },
  '4': { f: 18.5, im: 90 },
  '5': { f: 19.5, i: 17.5 },
  '8': { f: 19.5, im: 90 },
  '9': { f: 18, i: 17.5 },
  '10': { f: 18, im: 90 },
  '11': { f: 20, i: 18 },
  '13': { f: 18, i: 17 }
};
var DEG = Math.PI / 180;
function dsin(d) { return Math.sin(d * DEG); }
function dcos(d) { return Math.cos(d * DEG); }
function dtan(d) { return Math.tan(d * DEG); }
function darcsin(x) { return Math.asin(x) / DEG; }
function darccos(x) { return Math.acos(x) / DEG; }
function darctan2(y, x) { return Math.atan2(y, x) / DEG; }
function darccot(x) { return Math.atan(1 / x) / DEG; }
function fixAngle(a) { return a - 360 * Math.floor(a / 360); }
function fixHour(a) { return a - 24 * Math.floor(a / 24); }
function julian(y, m, d) {
  if (m <= 2) { y -= 1; m += 12; }
  var A = Math.floor(y / 100), B = 2 - A + Math.floor(A / 4);
  return Math.floor(365.25 * (y + 4716)) + Math.floor(30.6001 * (m + 1)) + d + B - 1524.5;
}
function sunPos(jd) {
  var D = jd - 2451545.0;
  var g = fixAngle(357.529 + 0.98560028 * D);
  var q = fixAngle(280.459 + 0.98564736 * D);
  var Lg = fixAngle(q + 1.915 * dsin(g) + 0.020 * dsin(2 * g));
  var e = 23.439 - 0.00000036 * D;
  var RA = fixHour(darctan2(dcos(e) * dsin(Lg), dcos(Lg)) / 15);
  return { decl: darcsin(dsin(e) * dsin(Lg)), eqt: q / 15 - RA };
}
function calcLocal(date, lat, lng, mkey, school) {
  var y = date.getFullYear(), m = date.getMonth() + 1, d = date.getDate();
  var tz = -new Date(y, m - 1, d, 12).getTimezoneOffset() / 60;
  var jd = julian(y, m, d) - lng / (15 * 24);
  var prm = METHODS[mkey] || METHODS['4'];
  function midDay(t) { return fixHour(12 - sunPos(jd + t).eqt); }
  function angleTime(angle, t, ccw) {
    var decl = sunPos(jd + t).decl;
    var x = (-dsin(angle) - dsin(decl) * dsin(lat)) / (dcos(decl) * dcos(lat));
    if (x > 1 || x < -1) return NaN;
    var v = darccos(x) / 15;
    return midDay(t) + (ccw ? -v : v);
  }
  function asrTime(f, t) {
    var decl = sunPos(jd + t).decl;
    return angleTime(-darccot(f + dtan(Math.abs(lat - decl))), t, false);
  }
  function pass(g) {
    return {
      fajr: angleTime(prm.f, g.fajr / 24, true),
      dhuhr: midDay(g.dhuhr / 24),
      asr: asrTime(school === '1' ? 2 : 1, g.asr / 24),
      maghrib: angleTime(0.833, g.maghrib / 24, false),
      isha: prm.im ? NaN : angleTime(prm.i, g.isha / 24, false)
    };
  }
  var r = pass({ fajr: 5, dhuhr: 12, asr: 13, maghrib: 18, isha: 18 });
  r = pass(r);
  var adj = tz - lng / 15;
  var out = { Fajr: r.fajr + adj, Dhuhr: r.dhuhr + adj, Asr: r.asr + adj, Maghrib: r.maghrib + adj };
  if (prm.im) {
    var extra = 0, hj = hijriFor(date);
    if (mkey === '4' && hj && hj.month === 9) extra = 30;
    out.Isha = out.Maghrib + (prm.im + extra) / 60;
  } else { out.Isha = r.isha + adj; }
  var res = {};
  for (var i = 0; i < KEYS.length; i++) {
    var h = out[KEYS[i]];
    if (!isFinite(h)) return null;
    var mins = Math.round(fixHour(h) * 60);
    res[KEYS[i]] = pad(Math.floor(mins / 60) % 24) + ':' + pad(mins % 60);
  }
  return res;
}

/* ---------------- Location ---------------- */
var geoCache = {}, geoInflight = {};
function geocodeName(name, cc) {
  var k = 'ptgeo3|' + name.toLowerCase() + '|' + (cc || '');
  if (geoCache[k]) return Promise.resolve(geoCache[k]);
  try { var sv = localStorage.getItem(k); if (sv) { geoCache[k] = JSON.parse(sv); return Promise.resolve(geoCache[k]); } } catch (e) {}
  if (geoInflight[k]) return geoInflight[k];
  var url = 'https://geocoding-api.open-meteo.com/v1/search?count=5&language=en&format=json&name=' + encodeURIComponent(name) + (cc && cc !== 'none' ? '&countryCode=' + cc : '');
  geoInflight[k] = fetch(url).then(function (r) { return r.json(); }).then(function (j) {
    var rs = (j && j.results) || [];
    if (!rs.length) { var er = new Error('geo'); er.kind = 'geo'; throw er; }
    var gg = { lat: rs[0].latitude, lng: rs[0].longitude, en: rs[0].name, ar: '' };
    geoCache[k] = gg;
    try { localStorage.setItem(k, JSON.stringify(gg)); } catch (e) {}
    delete geoInflight[k];
    return gg;
  }).catch(function (e) { delete geoInflight[k]; throw e; });
  return geoInflight[k];
}

function nearestCity(lat, lng) {
  var best = null, bd = 1e9;
  for (var k in CITIES) {
    var c = CITIES[k], dx = (c.lng - lng) * Math.cos(lat * DEG), dy = c.lat - lat;
    var d = Math.sqrt(dx * dx + dy * dy) * 111;
    if (d < bd) { bd = d; best = k; }
  }
  return (best && bd < 60) ? best : null;
}
function coordName(lat, lng) { return lat.toFixed(2) + ', ' + lng.toFixed(2); }

function timeout(p, ms) {
  return new Promise(function (res, rej) {
    var t = setTimeout(function () { rej(new Error('timeout')); }, ms);
    p.then(function (v) { clearTimeout(t); res(v); }, function (e) { clearTimeout(t); rej(e); });
  });
}
function byDevice() {
  return timeout(new Promise(function (res, rej) {
    if (!navigator.geolocation) { rej(new Error('nogeo')); return; }
    navigator.geolocation.getCurrentPosition(function (p) { res(p); }, function (e) { rej(e); }, { timeout: 6000, maximumAge: 3600000 });
  }), 7000).then(function (p) {
    var lat = p.coords.latitude, lng = p.coords.longitude, nk = nearestCity(lat, lng);
    return { lat: lat, lng: lng, en: nk || coordName(lat, lng), ar: nk ? CITIES[nk].ar : '', how: 0 };
  });
}
function byIp() {
  function a() {
    return fetch('https://ipwho.is/').then(function (r) { return r.json(); }).then(function (j) {
      if (!j || j.success === false || !isFinite(j.latitude)) throw new Error('ip1');
      return { lat: +j.latitude, lng: +j.longitude, en: j.city || coordName(+j.latitude, +j.longitude) };
    });
  }
  function b() {
    return fetch('https://get.geojs.io/v1/ip/geo.json').then(function (r) { return r.json(); }).then(function (j) {
      if (!j || !isFinite(parseFloat(j.latitude))) throw new Error('ip2');
      return { lat: parseFloat(j.latitude), lng: parseFloat(j.longitude), en: j.city || coordName(parseFloat(j.latitude), parseFloat(j.longitude)) };
    });
  }
  return timeout(a().catch(b), 9000).then(function (r) {
    var nk = nearestCity(r.lat, r.lng);
    r.ar = nk ? CITIES[nk].ar : ''; if (nk) r.en = nk; r.how = 1; return r;
  });
}
function byZone() {
  var z = tzName(), nm = z.split('/').pop().replace(/_/g, ' ');
  if (!z || !nm || nm === 'UTC' || nm.indexOf('GMT') === 0) return Promise.reject(new Error('tz'));
  return geocodeName(nm, '').then(function (g) {
    var nk = nearestCity(g.lat, g.lng);
    return { lat: g.lat, lng: g.lng, en: nk || nm, ar: nk ? CITIES[nk].ar : '', how: 2 };
  });
}
var autoLoc = null;
function resolveLoc() {
  var k = cfg.pick;
  if (CITIES[k]) { var c = CITIES[k]; return Promise.resolve({ lat: c.lat, lng: c.lng, en: k, ar: c.ar, how: -1 }); }
  if (k === 'other') {
    var co = COUNTRIES[cfg.country], nm = cfg.city || (co ? co.cap : '');
    if (!nm) { var er = new Error('geo'); er.kind = 'geo'; return Promise.reject(er); }
    return geocodeName(nm, co ? cfg.country : '').then(function (g) {
      return { lat: g.lat, lng: g.lng, en: cfg.city || co.cap, ar: cfg.city ? '' : co.capAr, how: -1 };
    });
  }
  if (autoLoc && Date.now() - autoLoc.at < 6 * 3600000) return Promise.resolve(autoLoc.v);
  try {
    var sv = JSON.parse(localStorage.getItem('ptauto') || 'null');
    if (sv && Date.now() - sv.at < 6 * 3600000) { autoLoc = sv; return Promise.resolve(sv.v); }
  } catch (e) {}
  return byDevice().catch(byIp).catch(byZone).then(function (v) {
    autoLoc = { at: Date.now(), v: v };
    try { localStorage.setItem('ptauto', JSON.stringify(autoLoc)); } catch (e) {}
    return v;
  }, function (e) {
    var er2 = new Error('loc'); er2.kind = 'loc'; throw er2;
  });
}

/* ---------------- Sources ---------------- */
function pickTimes(t) {
  var out = {};
  for (var i = 0; i < KEYS.length; i++) {
    if (!t || !parseHM(t[KEYS[i]])) return null;
    out[KEYS[i]] = String(t[KEYS[i]]).substr(0, 5);
  }
  return out;
}

var SRC = {
  aladhan: function (d, loc) {
    var dk = dkey(d), url;
    var tail = '&method=' + encodeURIComponent(cfg.method) + '&school=' + encodeURIComponent(cfg.school);
    if (loc) {
      url = 'https://api.aladhan.com/v1/timings/' + dk + '?latitude=' + loc.lat + '&longitude=' + loc.lng + tail;
    } else {
      url = 'https://api.aladhan.com/v1/timingsByCity/' + dk + '?city=' + encodeURIComponent(cfg.city) + '&country=' + encodeURIComponent(cfg.country) + tail;
    }
    return fetch(url).then(function (r) { return r.json(); }).then(function (j) {
      var t = pickTimes(j && j.data && j.data.timings);
      if (!t) { var er = new Error('aladhan'); if (j && j.code === 400) er.kind = 'geo'; throw er; }
      var hj = j.data.date && j.data.date.hijri;
      return { t: t, h: hj ? { day: parseInt(hj.day, 10), month: parseInt(hj.month && hj.month.number, 10), year: parseInt(hj.year, 10) } : null };
    });
  },
  esalah: function (d, loc) {
    var slug = { '1': 'karachi', '2': 'isna', '3': 'mwl', '4': 'umm-al-qura', '5': 'egyptian' }[cfg.method];
    if (!slug) return Promise.reject(new Error('method'));
    return (loc ? Promise.resolve(loc) : Promise.reject(new Error('noloc'))).then(function (g) {
      var url = 'https://esalah.com/api/v1/times?lat=' + g.lat + '&lng=' + g.lng + '&date=' + iso(d) + '&method=' + slug +
        '&madhab=' + (cfg.school === '1' ? 'hanafi' : 'standard') + (tzName() ? '&timezone=' + encodeURIComponent(tzName()) : '');
      return fetch(url).then(function (r) { return r.json(); });
    }).then(function (j) {
      var t = pickTimes(j && j.times);
      if (!t) throw new Error('esalah');
      return { t: t, h: null };
    });
  },
  local: function (d, loc) {
    return (loc ? Promise.resolve(loc) : Promise.reject(new Error('noloc'))).then(function (g) {
      var t = calcLocal(d, g.lat, g.lng, cfg.method, cfg.school);
      if (!t) throw new Error('local');
      return { t: t, h: null };
    });
  }
};

function fetchRec(d, loc) {
  var order = [SRC[cfg.source] ? cfg.source : 'aladhan'];
  if (cfg.fallback && order[0] !== 'local') order.push('local');
  var i = 0;
  function next() {
    var s = order[i++];
    return SRC[s](d, loc).then(function (rec) { rec.s = s; rec.fb = (i > 1); return rec; }, function (e) {
      lastErr = (e && e.kind) || 'net';
      if (i < order.length) return next();
      throw e;
    });
  }
  return next();
}

function parseHM(s) { var m = /(\d{1,2}):(\d{2})/.exec(s || ''); return m ? [parseInt(m[1], 10), parseInt(m[2], 10)] : null; }

function loadDay(d, loc) {
  var dk = dkey(d), k = ckey(dk, loc);
  var c = cache[k];
  if (c && (!c.exp || c.exp > Date.now())) return Promise.resolve(c);
  try { var s = localStorage.getItem(k); if (s) { cache[k] = JSON.parse(s); return Promise.resolve(cache[k]); } } catch (e) {}
  if (inflight[k]) return inflight[k];
  inflight[k] = fetchRec(d, loc).then(function (rec) {
    rec.h = hijriFor(d) || rec.h;
    if (rec.fb) { rec.exp = Date.now() + 30 * 60000; }
    else { try { localStorage.setItem(k, JSON.stringify(rec)); } catch (e) {} }
    cache[k] = rec;
    delete inflight[k];
    return rec;
  }).catch(function (e) { delete inflight[k]; return null; });
  return inflight[k];
}

function prune() {
  try {
    var now = new Date(), lim = addDays(now, -3).getTime(), del = [];
    for (var i = 0; i < localStorage.length; i++) {
      var k = localStorage.key(i);
      if (k && k.indexOf('pt3|') === 0) {
        var m = /(\d{2})-(\d{2})-(\d{4})$/.exec(k);
        if (m && new Date(+m[3], +m[2] - 1, +m[1]).getTime() < lim) del.push(k);
      } else if (k && (k.indexOf('pt|') === 0 || k.indexOf('pt2|') === 0 || k.indexOf('ptgeo|') === 0 || k.indexOf('ptgeo2|') === 0)) { del.push(k); }
    }
    for (var j = 0; j < del.length; j++) localStorage.removeItem(del[j]);
  } catch (e) {}
}

function prayerDates(d, rec) {
  var out = [];
  for (var i = 0; i < KEYS.length; i++) {
    var hm = parseHM(rec.t[KEYS[i]]);
    if (!hm) return null;
    out.push(new Date(d.getFullYear(), d.getMonth(), d.getDate(), hm[0], hm[1], 0));
  }
  return out;
}

var refreshing = false, lastTry = 0, pruned = false;
var state = { day: '', yest: null, today: null, tomorrow: null, loc: null };
function refresh() {
  if (refreshing) return;
  refreshing = true; lastTry = Date.now(); lastErr = '';
  if (!pruned) { pruned = true; prune(); }
  var now = new Date();
  resolveLoc().then(function (loc) { return loc; }, function (e) {
    lastErr = (e && e.kind) || 'net';
    return (cfg.pick === 'other' && cfg.city && COUNTRIES[cfg.country]) ? null : undefined;
  }).then(function (loc) {
    if (loc === undefined) return [null, null, null, undefined];
    return Promise.all([loadDay(addDays(now, -1), loc), loadDay(now, loc), loadDay(addDays(now, 1), loc)]).then(function (r) { r.push(loc); return r; });
  }).then(function (r) {
    state.yest = r[0]; state.today = r[1]; state.tomorrow = r[2]; state.loc = r[3] || null;
    state.day = dkey(now);
    ready = !!state.today;
    refreshing = false;
    safeTick();
  }, function () { refreshing = false; });
}

/* ---------------- Rendering ---------------- */
function fmtHM(h, m) {
  if (cfg.fmt === '24') return pad(h) + ':' + pad(m);
  var hh = h % 12; if (hh === 0) hh = 12;
  return hh + ':' + pad(m) + '<small>' + (h >= 12 ? L.pm : L.am) + '</small>';
}
var SUN_SVG = '<svg viewBox="0 0 24 24" width="1em" height="1em"><circle cx="12" cy="12" r="4.6" fill="currentColor"/><g stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 2.2v2.6M12 19.2v2.6M2.2 12h2.6M19.2 12h2.6M5.1 5.1l1.8 1.8M17.1 17.1l1.8 1.8M5.1 18.9l1.8-1.8M17.1 6.9l1.8-1.8"/></g></svg>';
var MOON_SVG = '<svg viewBox="0 0 24 24" width="1em" height="1em"><path d="M20 14.5A8.5 8.5 0 1 1 9.5 4a7 7 0 0 0 10.5 10.5z" fill="currentColor"/></svg>';
function isDay(now) {
  var m = now.getHours() * 60 + now.getMinutes(), lo = 6 * 60, hi = 17 * 60 + 30;
  if (state.today) {
    var f = parseHM(state.today.t.Fajr), g = parseHM(state.today.t.Maghrib);
    if (f) lo = f[0] * 60 + f[1] + 90;
    if (g) hi = g[0] * 60 + g[1];
  }
  return m >= lo && m < hi;
}
function pname(j, fri) { return (j === 1 && fri) ? L.fri : L.names[j]; }

var inited = false;
function tick() {
  var now = new Date();
  if (!inited) return;
  if (dkey(now) !== state.day) { refresh(); return; }
  if (!ready && Date.now() - lastTry > 30000) { state.day = ''; refresh(); return; }
  var h = now.getHours();
  var nowEl = document.getElementById('now');
  var mm = pad(now.getMinutes()), hh, ap = '';
  if (cfg.fmt === '24') { hh = pad(h); }
  else { hh = String(h % 12 === 0 ? 12 : h % 12); ap = '<small>' + (h >= 12 ? L.pm : L.am) + '</small>'; }
  var clockHtml = '<span class="m">' + hh + ':</span><span class="m">' + mm + '</span><span class="ap' + (ap ? '' : ' solo') + '"><i class="sec" id="sec"></i>' + ap + '</span>';
  if (nowEl.getAttribute('data-sig') !== clockHtml) { nowEl.innerHTML = clockHtml; nowEl.setAttribute('data-sig', clockHtml); }
  var secEl = document.getElementById('sec');
  if (secEl) secEl.textContent = pad(now.getSeconds());
  var icEl = document.getElementById('ic');
  var dayFlag = isDay(now);
  if (icEl.getAttribute('data-d') !== (dayFlag ? '1' : '0')) { icEl.innerHTML = dayFlag ? SUN_SVG : MOON_SVG; icEl.setAttribute('data-d', dayFlag ? '1' : '0'); }
  var dateEl = document.getElementById('date');
  var d1 = L.days[now.getDay()] + ' \u00b7 ' + pad(now.getDate()) + '-' + pad(now.getMonth() + 1) + '-' + now.getFullYear();
  var d2 = '';
  if (cfg.hijri && state.today && state.today.h) {
    var hj = state.today.h;
    if (L.hm[hj.month - 1]) d2 = hj.day + ' ' + L.hm[hj.month - 1] + ' ' + hj.year + ' ' + L.ah;
  }
  var dateHtml = '<div class="d1">' + d1 + '</div>' + (d2 ? '<div class="d2">' + d2 + '</div>' : '');
  if (dateEl.getAttribute('data-sig') !== dateHtml) { dateEl.innerHTML = dateHtml; dateEl.setAttribute('data-sig', dateHtml); }

  var locEl = document.getElementById('loc');
  var locTxt = '';
  if (state.loc) {
    var ln = (curLang === 'ar' && state.loc.ar) ? state.loc.ar : state.loc.en;
    locTxt = ln + (state.loc.how >= 0 ? ' \u00b7 ' + (HOW[curLang] || HOW.en)[state.loc.how] : '');
  } else if (cfg.pick === 'other' && cfg.city) { locTxt = cfg.city; }
  if (locEl.textContent !== locTxt) locEl.textContent = locTxt;
  var cells = document.getElementById('cells');
  var label = document.getElementById('nextLabel');
  var count = document.getElementById('count');
  var fill = document.getElementById('barFill');
  if (!ready) {
    label.textContent = refreshing ? L.loading : ((lastErr === 'geo' || lastErr === 'loc') ? L.geo : (lastErr ? L.fail : L.loading));
    count.textContent = '--:--:--';
    return;
  }
  var today = prayerDates(now, state.today);
  if (!today) { label.textContent = L.fail; return; }
  var tom = state.tomorrow ? prayerDates(addDays(now, 1), state.tomorrow) : null;
  var yes = state.yest ? prayerDates(addDays(now, -1), state.yest) : null;

  var idx = -1;
  for (var i = 0; i < 5; i++) { if (today[i].getTime() > now.getTime()) { idx = i; break; } }
  var nextAt, prevAt;
  if (idx === -1) {
    nextAt = tom ? tom[0] : new Date(today[0].getTime() + 86400000);
    prevAt = today[4];
  } else {
    nextAt = today[idx];
    prevAt = idx > 0 ? today[idx - 1] : (yes ? yes[4] : new Date(today[0].getTime() - 6 * 3600000));
  }
  var isFriday = now.getDay() === 5;
  var nextIdx = (idx === -1) ? 0 : idx;
  var showName = pname(nextIdx, isFriday && idx === 1);
  applyTheme(nextIdx);
  var wmEl = document.getElementById('wm');
  wmEl.textContent = showName;
  wmEl.style.setProperty('--ws', L.dir === 'rtl' ? '1' : String(Math.min(1, 4.6 / Math.max(1, showName.length))));
  var diff = Math.max(0, Math.floor((nextAt.getTime() - now.getTime()) / 1000));
  var prevIdx = idx === -1 ? 4 : idx - 1;
  var since = Math.floor((now.getTime() - today[Math.max(0, prevIdx)].getTime()) / 1000);
  if (idx !== 0 && since >= 0 && since < 60) {
    label.textContent = L.now(pname(prevIdx, isFriday && prevIdx === 1));
  } else {
    label.textContent = L.next + showName;
  }
  count.textContent = pad(Math.floor(diff / 3600)) + ':' + pad(Math.floor((diff % 3600) / 60)) + ':' + pad(diff % 60);
  var redNow = diff > 0 && diff <= 30;
  if (count.classList.contains('red') !== redNow) count.classList.toggle('red', redNow);
  var sinceP = prevIdx >= 0 ? Math.floor((now.getTime() - today[prevIdx].getTime()) / 1000) : -1;
  var iqOn = sinceP >= 0 && sinceP < IQ_SECS;
  var wEl = document.getElementById('w');
  if (iqOn) {
    var rem = IQ_SECS - sinceP, tx = IQ[curLang] || IQ.en;
    var ia = document.getElementById('iqA'), ib = document.getElementById('iqB');
    if (ia.textContent !== tx[0]) ia.textContent = tx[0];
    if (ib.textContent !== tx[1]) ib.textContent = tx[1];
    document.getElementById('iqC').textContent = pad(Math.floor(rem / 60)) + ':' + pad(rem % 60);
    document.getElementById('iqRing').setAttribute('stroke-dashoffset', (289.03 * (1 - rem / IQ_SECS)).toFixed(2));
    if (!wEl.classList.contains('iqon')) wEl.classList.add('iqon');
  } else if (wEl.classList.contains('iqon')) { wEl.classList.remove('iqon'); }
  var total = Math.max(1, (nextAt.getTime() - prevAt.getTime()) / 1000);
  fill.style.width = Math.min(100, Math.max(0, (1 - diff / total) * 100)).toFixed(1) + '%';

  var html = '';
  for (var j = 0; j < 5; j++) {
    var cls = 'cell';
    if (j === nextIdx) cls += ' active';
    else if (idx === -1 ? true : j < idx) cls += ' past';
    html += '<div class="' + cls + '"><div class="n">' + pname(j, isFriday) + '</div><div class="t">' + fmtHM(today[j].getHours(), today[j].getMinutes()) + '</div></div>';
  }
  if (cells.getAttribute('data-sig') !== html) { cells.innerHTML = html; cells.setAttribute('data-sig', html); }
}


// Center the clock digits vertically inside the pill. Fonts such as Bahnschrift keep
// extra space below the digits, so the digits look raised; measure the real ink box
// of the digits and shift the text by the difference (in em).
function centerClock() {
  try {
    var el = document.getElementById('now');
    if (!el) return;
    var fam = getComputedStyle(el).fontFamily;
    var ctx = document.createElement('canvas').getContext('2d');
    ctx.font = '600 100px ' + fam;
    var m = ctx.measureText('0123456789');
    var fa = m.fontBoundingBoxAscent, fd = m.fontBoundingBoxDescent;
    var ia = m.actualBoundingBoxAscent, id = m.actualBoundingBoxDescent;
    if (!(fa > 0) || !(ia > 0)) return;
    var base = (100 - (fa + fd)) / 2 + fa;
    var inkCenter = base - (ia - id) / 2;
    var shift = (50 - inkCenter) / 100;
    if (shift > 0.3 || shift < -0.3) shift = 0;
    el.style.setProperty('--ns', shift.toFixed(4));
  } catch (e) {}
}

var lastLoc = '';
function init() {
  readCfg();
  inited = true;
  centerClock();
  var loc = cfgSig();
  if (loc !== lastLoc || !ready) {
    lastLoc = loc;
    state.day = '';
    ready = false;
    refresh();
  } else {
    safeTick();
  }
}

function safeTick() { try { tick(); } catch (e) {} }

try { if (document.fonts && document.fonts.ready) { document.fonts.ready.then(centerClock); } } catch (e) {}
icueEvents = { onICUEInitialized: init, onDataUpdated: init };
if (typeof iCUE_initialized !== 'undefined' && iCUE_initialized) { init(); }
function loop() {
  safeTick();
  setTimeout(loop, 1000 - (Date.now() % 1000) + 15);
}
loop();
