export type Language = {
  code: string
  name: string
  native: string
  rtl?: boolean
}

// قائمة شاملة بلغات العالم لقائمة التغيير المنسدلة
export const LANGUAGES: Language[] = [
  { code: 'ar', name: 'Arabic', native: 'العربية', rtl: true },
  { code: 'en', name: 'English', native: 'English' },
  { code: 'fr', name: 'French', native: 'Français' },
  { code: 'es', name: 'Spanish', native: 'Español' },
  { code: 'de', name: 'German', native: 'Deutsch' },
  { code: 'tr', name: 'Turkish', native: 'Türkçe' },
  { code: 'ur', name: 'Urdu', native: 'اردو', rtl: true },
  { code: 'fa', name: 'Persian', native: 'فارسی', rtl: true },
  { code: 'he', name: 'Hebrew', native: 'עברית', rtl: true },
  { code: 'hi', name: 'Hindi', native: 'हिन्दी' },
  { code: 'bn', name: 'Bengali', native: 'বাংলা' },
  { code: 'pt', name: 'Portuguese', native: 'Português' },
  { code: 'ru', name: 'Russian', native: 'Русский' },
  { code: 'zh', name: 'Chinese', native: '中文' },
  { code: 'ja', name: 'Japanese', native: '日本語' },
  { code: 'ko', name: 'Korean', native: '한국어' },
  { code: 'it', name: 'Italian', native: 'Italiano' },
  { code: 'nl', name: 'Dutch', native: 'Nederlands' },
  { code: 'pl', name: 'Polish', native: 'Polski' },
  { code: 'uk', name: 'Ukrainian', native: 'Українська' },
  { code: 'id', name: 'Indonesian', native: 'Bahasa Indonesia' },
  { code: 'ms', name: 'Malay', native: 'Bahasa Melayu' },
  { code: 'th', name: 'Thai', native: 'ไทย' },
  { code: 'vi', name: 'Vietnamese', native: 'Tiếng Việt' },
  { code: 'sw', name: 'Swahili', native: 'Kiswahili' },
  { code: 'ha', name: 'Hausa', native: 'Hausa' },
  { code: 'am', name: 'Amharic', native: 'አማርኛ' },
  { code: 'el', name: 'Greek', native: 'Ελληνικά' },
  { code: 'cs', name: 'Czech', native: 'Čeština' },
  { code: 'sv', name: 'Swedish', native: 'Svenska' },
  { code: 'da', name: 'Danish', native: 'Dansk' },
  { code: 'fi', name: 'Finnish', native: 'Suomi' },
  { code: 'no', name: 'Norwegian', native: 'Norsk' },
  { code: 'hu', name: 'Hungarian', native: 'Magyar' },
  { code: 'ro', name: 'Romanian', native: 'Română' },
  { code: 'bg', name: 'Bulgarian', native: 'Български' },
  { code: 'sr', name: 'Serbian', native: 'Српски' },
  { code: 'hr', name: 'Croatian', native: 'Hrvatski' },
  { code: 'sk', name: 'Slovak', native: 'Slovenčina' },
  { code: 'sl', name: 'Slovenian', native: 'Slovenščina' },
  { code: 'lt', name: 'Lithuanian', native: 'Lietuvių' },
  { code: 'lv', name: 'Latvian', native: 'Latviešu' },
  { code: 'et', name: 'Estonian', native: 'Eesti' },
  { code: 'ta', name: 'Tamil', native: 'தமிழ்' },
  { code: 'te', name: 'Telugu', native: 'తెలుగు' },
  { code: 'ml', name: 'Malayalam', native: 'മലയാളം' },
  { code: 'kn', name: 'Kannada', native: 'ಕನ್ನಡ' },
  { code: 'mr', name: 'Marathi', native: 'मराठी' },
  { code: 'gu', name: 'Gujarati', native: 'ગુજરાતી' },
  { code: 'pa', name: 'Punjabi', native: 'ਪੰਜਾਬੀ' },
  { code: 'ne', name: 'Nepali', native: 'नेपाली' },
  { code: 'si', name: 'Sinhala', native: 'සිංහල' },
  { code: 'my', name: 'Burmese', native: 'မြန်မာ' },
  { code: 'km', name: 'Khmer', native: 'ខ្មែរ' },
  { code: 'lo', name: 'Lao', native: 'ລາວ' },
  { code: 'ka', name: 'Georgian', native: 'ქართული' },
  { code: 'hy', name: 'Armenian', native: 'Հայերեն' },
  { code: 'az', name: 'Azerbaijani', native: 'Azərbaycan' },
  { code: 'kk', name: 'Kazakh', native: 'Қазақ' },
  { code: 'uz', name: 'Uzbek', native: 'Oʻzbek' },
  { code: 'tg', name: 'Tajik', native: 'Тоҷикӣ' },
  { code: 'mn', name: 'Mongolian', native: 'Монгол' },
  { code: 'ps', name: 'Pashto', native: 'پښتو', rtl: true },
  { code: 'ku', name: 'Kurdish', native: 'Kurdî' },
  { code: 'so', name: 'Somali', native: 'Soomaali' },
  { code: 'yo', name: 'Yoruba', native: 'Yorùbá' },
  { code: 'ig', name: 'Igbo', native: 'Igbo' },
  { code: 'zu', name: 'Zulu', native: 'isiZulu' },
  { code: 'af', name: 'Afrikaans', native: 'Afrikaans' },
  { code: 'sq', name: 'Albanian', native: 'Shqip' },
  { code: 'mk', name: 'Macedonian', native: 'Македонски' },
  { code: 'is', name: 'Icelandic', native: 'Íslenska' },
  { code: 'ga', name: 'Irish', native: 'Gaeilge' },
  { code: 'cy', name: 'Welsh', native: 'Cymraeg' },
  { code: 'eu', name: 'Basque', native: 'Euskara' },
  { code: 'ca', name: 'Catalan', native: 'Català' },
  { code: 'gl', name: 'Galician', native: 'Galego' },
  { code: 'fil', name: 'Filipino', native: 'Filipino' },
]

const RTL_CODES = new Set(LANGUAGES.filter((l) => l.rtl).map((l) => l.code))

export function isRTL(code: string): boolean {
  return RTL_CODES.has(code)
}

export function findLanguage(code: string): Language | undefined {
  return LANGUAGES.find((l) => l.code === code)
}

// كشف لغة الجهاز تلقائياً ومطابقتها مع القائمة المدعومة
export function detectDeviceLanguage(): string {
  if (typeof navigator === 'undefined') return 'ar'
  const candidates = navigator.languages?.length
    ? navigator.languages
    : [navigator.language || 'ar']
  for (const raw of candidates) {
    const base = raw.toLowerCase().split('-')[0]
    if (LANGUAGES.some((l) => l.code === base)) return base
  }
  return 'ar'
}
