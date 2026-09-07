export type TranslationKeys = {
  appName: string
  tagline: string
  navPrescription: string
  navSearch: string
  navPremium: string
  navAccount: string
  languageLabel: string
  free: string
  premiumBadge: string
  // Prescription screen
  rxTitle: string
  rxSubtitle: string
  rxUpload: string
  rxUploadHint: string
  rxAnalyzing: string
  rxSample: string
  rxResults: string
  rxMedicine: string
  rxDosage: string
  rxPrice: string
  rxInstructions: string
  rxNewScan: string
  rxDisclaimer: string
  rxTotal: string
  // Search screen
  searchTitle: string
  searchSubtitle: string
  searchPlaceholder: string
  searchBtn: string
  searching: string
  currentPrice: string
  category: string
  usage: string
  alternatives: string
  noResults: string
  aiSetupNeeded: string
  searchHint: string
  // Premium
  premiumTitle: string
  premiumSubtitle: string
  premiumPrice: string
  subscribeBtn: string
  subscriptionActive: string
  cancelSub: string
  locked: string
  unlockMsg: string
  featurePharmacies: string
  featureReminders: string
  demoNote: string
  // Pharmacies
  pharmaciesTitle: string
  pharmaciesSubtitle: string
  distance: string
  callNow: string
  inStock: string
  pharmacyMedPlaceholder: string
  findPharmacies: string
  // Reminders
  remindersTitle: string
  remindersSubtitle: string
  addReminder: string
  medName: string
  time: string
  frequency: string
  freqDaily: string
  freqTwice: string
  freqWeekly: string
  saveReminder: string
  noReminders: string
  deleteLabel: string
  // Account
  accountTitle: string
  welcome: string
  guestUser: string
  fullName: string
  email: string
  password: string
  signIn: string
  signUp: string
  signOut: string
  toggleToSignUp: string
  toggleToSignIn: string
  planFree: string
  planPremium: string
  // Common
  cancel: string
  close: string
  adLabel: string
  poweredByAI: string
  priceDisclaimer: string
}

const en: TranslationKeys = {
  appName: 'Prescription AI',
  tagline: 'Your smart prescription & medicine assistant',
  navPrescription: 'Prescription',
  navSearch: 'Search',
  navPremium: 'Premium',
  navAccount: 'Account',
  languageLabel: 'Language',
  free: 'Free',
  premiumBadge: 'Premium',
  rxTitle: 'Read Prescription or Lab Test',
  rxSubtitle: 'Upload a photo and get medicines, dosages, and prices — completely free.',
  rxUpload: 'Upload image',
  rxUploadHint: 'Prescription or medical lab test',
  rxAnalyzing: 'Reading your document...',
  rxSample: 'Try a sample',
  rxResults: 'Results',
  rxMedicine: 'Medicine',
  rxDosage: 'Dosage',
  rxPrice: 'Price',
  rxInstructions: 'Instructions',
  rxNewScan: 'Scan another',
  rxDisclaimer: 'These results are for guidance only. Always consult your doctor or pharmacist.',
  rxTotal: 'Estimated total',
  searchTitle: 'Search Medicines',
  searchSubtitle: 'Find current price and available alternatives for any medicine.',
  searchPlaceholder: 'Type a medicine name...',
  searchBtn: 'Search',
  searching: 'Searching...',
  currentPrice: 'Current price',
  category: 'Category',
  usage: 'Used for',
  alternatives: 'Available alternatives',
  noResults: 'No information found. Try another name.',
  aiSetupNeeded:
    'AI search needs to be enabled. Add a payment method to your Vercel AI Gateway to unlock free credits, then try again.',
  searchHint: 'For example: Panadol, Augmentin, Concor...',
  premiumTitle: 'Premium Features',
  premiumSubtitle: 'Unlock nearby pharmacies and treatment reminders.',
  premiumPrice: '$2 / month',
  subscribeBtn: 'Subscribe now',
  subscriptionActive: 'Your subscription is active',
  cancelSub: 'Cancel subscription',
  locked: 'Locked',
  unlockMsg: 'Subscribe to unlock this feature.',
  featurePharmacies: 'Find nearby pharmacies that stock your medicine, with phone numbers.',
  featureReminders: 'Set alerts and reminders for your medicine schedule.',
  demoNote: 'Demo mode — activated instantly with no payment.',
  pharmaciesTitle: 'Nearby Pharmacies',
  pharmaciesSubtitle: 'Pharmacies near you that have the medicine available.',
  distance: 'away',
  callNow: 'Call',
  inStock: 'In stock',
  pharmacyMedPlaceholder: 'Medicine name (optional)',
  findPharmacies: 'Find pharmacies',
  remindersTitle: 'Treatment Reminders',
  remindersSubtitle: 'Organize your doses and never miss a medicine.',
  addReminder: 'Add reminder',
  medName: 'Medicine name',
  time: 'Time',
  frequency: 'Frequency',
  freqDaily: 'Once daily',
  freqTwice: 'Twice daily',
  freqWeekly: 'Weekly',
  saveReminder: 'Save reminder',
  noReminders: 'No reminders yet. Add your first one.',
  deleteLabel: 'Delete',
  accountTitle: 'My Account',
  welcome: 'Welcome',
  guestUser: 'Guest',
  fullName: 'Full name',
  email: 'Email',
  password: 'Password',
  signIn: 'Sign in',
  signUp: 'Create account',
  signOut: 'Sign out',
  toggleToSignUp: "Don't have an account? Sign up",
  toggleToSignIn: 'Already have an account? Sign in',
  planFree: 'Free plan',
  planPremium: 'Premium plan',
  cancel: 'Cancel',
  close: 'Close',
  adLabel: 'Advertisement',
  poweredByAI: 'Powered by AI',
  priceDisclaimer: 'Prices are approximate and may vary by region and pharmacy.',
}

const ar: TranslationKeys = {
  appName: 'مساعد الروشتة والدواء',
  tagline: 'مساعدك الذكي للروشتات والأدوية',
  navPrescription: 'الروشتة',
  navSearch: 'البحث',
  navPremium: 'المميز',
  navAccount: 'حسابي',
  languageLabel: 'اللغة',
  free: 'مجاني',
  premiumBadge: 'مميز',
  rxTitle: 'قراءة الروشتة أو التحليل',
  rxSubtitle: 'ارفع صورة واحصل على الأدوية والجرعات والأسعار — مجاناً بالكامل.',
  rxUpload: 'ارفع الصورة',
  rxUploadHint: 'روشتة طبية أو تحليل معملي',
  rxAnalyzing: 'جارٍ قراءة المستند...',
  rxSample: 'جرّب مثالاً',
  rxResults: 'النتائج',
  rxMedicine: 'الدواء',
  rxDosage: 'الجرعة',
  rxPrice: 'السعر',
  rxInstructions: 'التعليمات',
  rxNewScan: 'مسح روشتة أخرى',
  rxDisclaimer: 'هذه النتائج للاسترشاد فقط. استشر دائماً طبيبك أو الصيدلي.',
  rxTotal: 'الإجمالي التقديري',
  searchTitle: 'البحث عن الأدوية',
  searchSubtitle: 'اعرف السعر الحالي والبدائل المتاحة لأي دواء.',
  searchPlaceholder: 'اكتب اسم الدواء...',
  searchBtn: 'بحث',
  searching: 'جارٍ البحث...',
  currentPrice: 'السعر الحالي',
  category: 'التصنيف',
  usage: 'يُستخدم لـ',
  alternatives: 'البدائل المتاحة',
  noResults: 'لم نجد معلومات. جرّب اسماً آخر.',
  aiSetupNeeded:
    'خاصية البحث بالذكاء الاصطناعي تحتاج إلى تفعيل. أضف وسيلة دفع إلى بوابة Vercel AI لفتح الرصيد المجاني، ثم حاول مجدداً.',
  searchHint: 'مثال: بنادول، أوجمنتين، كونكور...',
  premiumTitle: 'الميزات المدفوعة',
  premiumSubtitle: 'افتح الصيدليات القريبة ومنظم مواعيد العلاج.',
  premiumPrice: '2 دولار / شهرياً',
  subscribeBtn: 'اشترك الآن',
  subscriptionActive: 'اشتراكك فعّال',
  cancelSub: 'إلغاء الاشتراك',
  locked: 'مقفل',
  unlockMsg: 'اشترك لفتح هذه الميزة.',
  featurePharmacies: 'اعثر على الصيدليات القريبة التي يتوفر بها دواؤك، مع أرقام التواصل.',
  featureReminders: 'اضبط تنبيهات وإشعارات لمواعيد أخذ أدويتك.',
  demoNote: 'وضع تجريبي — يُفعّل فوراً وبدون دفع.',
  pharmaciesTitle: 'الصيدليات القريبة',
  pharmaciesSubtitle: 'صيدليات قريبة منك يتوفر بها الدواء.',
  distance: 'تبعد',
  callNow: 'اتصل',
  inStock: 'متوفر',
  pharmacyMedPlaceholder: 'اسم الدواء (اختياري)',
  findPharmacies: 'ابحث عن الصيدليات',
  remindersTitle: 'مذكّر مواعيد العلاج',
  remindersSubtitle: 'نظّم جرعاتك ولا تفوت أي دواء.',
  addReminder: 'إضافة تذكير',
  medName: 'اسم الدواء',
  time: 'الوقت',
  frequency: 'التكرار',
  freqDaily: 'مرة يومياً',
  freqTwice: 'مرتين يومياً',
  freqWeekly: 'أسبوعياً',
  saveReminder: 'حفظ التذكير',
  noReminders: 'لا توجد تذكيرات بعد. أضف أول تذكير.',
  deleteLabel: 'حذف',
  accountTitle: 'حسابي',
  welcome: 'أهلاً',
  guestUser: 'زائر',
  fullName: 'الاسم الكامل',
  email: 'البريد الإلكتروني',
  password: 'كلمة المرور',
  signIn: 'تسجيل الدخول',
  signUp: 'إنشاء حساب',
  signOut: 'تسجيل الخروج',
  toggleToSignUp: 'ليس لديك حساب؟ سجّل الآن',
  toggleToSignIn: 'لديك حساب بالفعل؟ سجّل الدخول',
  planFree: 'الباقة المجانية',
  planPremium: 'الباقة المميزة',
  cancel: 'إلغاء',
  close: 'إغلاق',
  adLabel: 'إعلان',
  poweredByAI: 'مدعوم بالذكاء الاصطناعي',
  priceDisclaimer: 'الأسعار تقريبية وقد تختلف حسب المنطقة والصيدلية.',
}

const fr: Partial<TranslationKeys> = {
  appName: 'Assistant Ordonnance',
  tagline: 'Votre assistant intelligent pour ordonnances et médicaments',
  navPrescription: 'Ordonnance',
  navSearch: 'Recherche',
  navPremium: 'Premium',
  navAccount: 'Compte',
  languageLabel: 'Langue',
  free: 'Gratuit',
  premiumBadge: 'Premium',
  rxTitle: 'Lire une ordonnance ou une analyse',
  rxSubtitle: 'Téléchargez une photo et obtenez médicaments, doses et prix — gratuitement.',
  rxUpload: 'Importer une image',
  rxUploadHint: 'Ordonnance ou analyse médicale',
  rxAnalyzing: 'Lecture du document...',
  rxSample: 'Essayer un exemple',
  rxResults: 'Résultats',
  rxMedicine: 'Médicament',
  rxDosage: 'Dose',
  rxPrice: 'Prix',
  rxInstructions: 'Instructions',
  rxNewScan: 'Analyser une autre',
  rxDisclaimer: 'Résultats indicatifs. Consultez toujours votre médecin ou pharmacien.',
  rxTotal: 'Total estimé',
  searchTitle: 'Rechercher des médicaments',
  searchSubtitle: 'Trouvez le prix actuel et les alternatives disponibles.',
  searchPlaceholder: "Nom d'un médicament...",
  searchBtn: 'Rechercher',
  searching: 'Recherche...',
  currentPrice: 'Prix actuel',
  category: 'Catégorie',
  usage: 'Utilisé pour',
  alternatives: 'Alternatives disponibles',
  noResults: 'Aucune information trouvée. Essayez un autre nom.',
  aiSetupNeeded:
    "La recherche IA doit être activée. Ajoutez un moyen de paiement à votre Vercel AI Gateway pour débloquer les crédits gratuits, puis réessayez.",
  searchHint: 'Par exemple : Doliprane, Augmentin...',
  premiumTitle: 'Fonctions Premium',
  premiumSubtitle: 'Débloquez les pharmacies proches et les rappels de traitement.',
  premiumPrice: '2 $ / mois',
  subscribeBtn: "S'abonner",
  subscriptionActive: 'Votre abonnement est actif',
  cancelSub: "Annuler l'abonnement",
  locked: 'Verrouillé',
  unlockMsg: 'Abonnez-vous pour débloquer.',
  featurePharmacies: 'Trouvez les pharmacies proches avec votre médicament et leurs numéros.',
  featureReminders: 'Définissez des rappels pour vos prises de médicaments.',
  demoNote: 'Mode démo — activé instantanément sans paiement.',
  pharmaciesTitle: 'Pharmacies proches',
  pharmaciesSubtitle: 'Pharmacies près de vous où le médicament est disponible.',
  distance: 'de distance',
  callNow: 'Appeler',
  inStock: 'En stock',
  pharmacyMedPlaceholder: 'Nom du médicament (optionnel)',
  findPharmacies: 'Trouver des pharmacies',
  remindersTitle: 'Rappels de traitement',
  remindersSubtitle: 'Organisez vos doses et ne manquez aucun médicament.',
  addReminder: 'Ajouter un rappel',
  medName: 'Nom du médicament',
  time: 'Heure',
  frequency: 'Fréquence',
  freqDaily: 'Une fois par jour',
  freqTwice: 'Deux fois par jour',
  freqWeekly: 'Chaque semaine',
  saveReminder: 'Enregistrer',
  noReminders: 'Aucun rappel. Ajoutez le premier.',
  deleteLabel: 'Supprimer',
  accountTitle: 'Mon compte',
  welcome: 'Bienvenue',
  guestUser: 'Invité',
  fullName: 'Nom complet',
  email: 'E-mail',
  password: 'Mot de passe',
  signIn: 'Se connecter',
  signUp: 'Créer un compte',
  signOut: 'Se déconnecter',
  toggleToSignUp: "Pas de compte ? Inscrivez-vous",
  toggleToSignIn: 'Déjà un compte ? Connectez-vous',
  planFree: 'Forfait gratuit',
  planPremium: 'Forfait premium',
  cancel: 'Annuler',
  close: 'Fermer',
  adLabel: 'Publicité',
  poweredByAI: "Propulsé par l'IA",
  priceDisclaimer: 'Les prix sont approximatifs et varient selon la région et la pharmacie.',
}

const es: Partial<TranslationKeys> = {
  appName: 'Asistente de Recetas',
  tagline: 'Tu asistente inteligente de recetas y medicamentos',
  navPrescription: 'Receta',
  navSearch: 'Buscar',
  navPremium: 'Premium',
  navAccount: 'Cuenta',
  languageLabel: 'Idioma',
  free: 'Gratis',
  premiumBadge: 'Premium',
  rxTitle: 'Leer receta o análisis',
  rxSubtitle: 'Sube una foto y obtén medicamentos, dosis y precios — totalmente gratis.',
  rxUpload: 'Subir imagen',
  rxUploadHint: 'Receta o análisis médico',
  rxAnalyzing: 'Leyendo el documento...',
  rxSample: 'Probar un ejemplo',
  rxResults: 'Resultados',
  rxMedicine: 'Medicamento',
  rxDosage: 'Dosis',
  rxPrice: 'Precio',
  rxInstructions: 'Instrucciones',
  rxNewScan: 'Escanear otra',
  rxDisclaimer: 'Resultados orientativos. Consulta siempre a tu médico o farmacéutico.',
  rxTotal: 'Total estimado',
  searchTitle: 'Buscar medicamentos',
  searchSubtitle: 'Encuentra el precio actual y las alternativas disponibles.',
  searchPlaceholder: 'Nombre de un medicamento...',
  searchBtn: 'Buscar',
  searching: 'Buscando...',
  currentPrice: 'Precio actual',
  category: 'Categoría',
  usage: 'Se usa para',
  alternatives: 'Alternativas disponibles',
  noResults: 'No se encontró información. Prueba otro nombre.',
  aiSetupNeeded:
    'La búsqueda con IA debe activarse. Añade un método de pago a tu Vercel AI Gateway para desbloquear créditos gratuitos e inténtalo de nuevo.',
  searchHint: 'Por ejemplo: Gelocatil, Augmentine...',
  premiumTitle: 'Funciones Premium',
  premiumSubtitle: 'Desbloquea farmacias cercanas y recordatorios de tratamiento.',
  premiumPrice: '2 $ / mes',
  subscribeBtn: 'Suscribirse',
  subscriptionActive: 'Tu suscripción está activa',
  cancelSub: 'Cancelar suscripción',
  locked: 'Bloqueado',
  unlockMsg: 'Suscríbete para desbloquear.',
  featurePharmacies: 'Encuentra farmacias cercanas con tu medicamento y sus teléfonos.',
  featureReminders: 'Configura recordatorios para tus tomas de medicamentos.',
  demoNote: 'Modo demo — activado al instante sin pago.',
  pharmaciesTitle: 'Farmacias cercanas',
  pharmaciesSubtitle: 'Farmacias cerca de ti con el medicamento disponible.',
  distance: 'de distancia',
  callNow: 'Llamar',
  inStock: 'Disponible',
  pharmacyMedPlaceholder: 'Nombre del medicamento (opcional)',
  findPharmacies: 'Buscar farmacias',
  remindersTitle: 'Recordatorios de tratamiento',
  remindersSubtitle: 'Organiza tus dosis y no olvides ningún medicamento.',
  addReminder: 'Añadir recordatorio',
  medName: 'Nombre del medicamento',
  time: 'Hora',
  frequency: 'Frecuencia',
  freqDaily: 'Una vez al día',
  freqTwice: 'Dos veces al día',
  freqWeekly: 'Semanal',
  saveReminder: 'Guardar',
  noReminders: 'Sin recordatorios. Añade el primero.',
  deleteLabel: 'Eliminar',
  accountTitle: 'Mi cuenta',
  welcome: 'Bienvenido',
  guestUser: 'Invitado',
  fullName: 'Nombre completo',
  email: 'Correo',
  password: 'Contraseña',
  signIn: 'Iniciar sesión',
  signUp: 'Crear cuenta',
  signOut: 'Cerrar sesión',
  toggleToSignUp: '¿No tienes cuenta? Regístrate',
  toggleToSignIn: '¿Ya tienes cuenta? Inicia sesión',
  planFree: 'Plan gratis',
  planPremium: 'Plan premium',
  cancel: 'Cancelar',
  close: 'Cerrar',
  adLabel: 'Publicidad',
  poweredByAI: 'Con tecnología de IA',
  priceDisclaimer: 'Los precios son aproximados y varían según la región y la farmacia.',
}

const tr: Partial<TranslationKeys> = {
  appName: 'Reçete Asistanı',
  tagline: 'Akıllı reçete ve ilaç asistanınız',
  navPrescription: 'Reçete',
  navSearch: 'Ara',
  navPremium: 'Premium',
  navAccount: 'Hesap',
  languageLabel: 'Dil',
  free: 'Ücretsiz',
  premiumBadge: 'Premium',
  rxTitle: 'Reçete veya tahlil oku',
  rxSubtitle: 'Bir fotoğraf yükleyin; ilaçları, dozları ve fiyatları alın — tamamen ücretsiz.',
  rxUpload: 'Görsel yükle',
  rxUploadHint: 'Reçete veya tıbbi tahlil',
  rxAnalyzing: 'Belge okunuyor...',
  rxSample: 'Örnek dene',
  rxResults: 'Sonuçlar',
  rxMedicine: 'İlaç',
  rxDosage: 'Doz',
  rxPrice: 'Fiyat',
  rxInstructions: 'Talimatlar',
  rxNewScan: 'Başka tara',
  rxDisclaimer: 'Sonuçlar yalnızca bilgilendirme amaçlıdır. Doktorunuza veya eczacınıza danışın.',
  rxTotal: 'Tahmini toplam',
  searchTitle: 'İlaç ara',
  searchSubtitle: 'Herhangi bir ilacın güncel fiyatını ve alternatiflerini bulun.',
  searchPlaceholder: 'İlaç adı yazın...',
  searchBtn: 'Ara',
  searching: 'Aranıyor...',
  currentPrice: 'Güncel fiyat',
  category: 'Kategori',
  usage: 'Kullanım',
  alternatives: 'Mevcut alternatifler',
  noResults: 'Bilgi bulunamadı. Başka bir ad deneyin.',
  aiSetupNeeded:
    'Yapay zeka aramasının etkinleştirilmesi gerekiyor. Ücretsiz kredileri açmak için Vercel AI Gateway hesabınıza bir ödeme yöntemi ekleyin ve tekrar deneyin.',
  searchHint: 'Örnek: Parol, Augmentin...',
  premiumTitle: 'Premium Özellikler',
  premiumSubtitle: 'Yakın eczaneleri ve tedavi hatırlatıcılarını açın.',
  premiumPrice: '2 $ / ay',
  subscribeBtn: 'Abone ol',
  subscriptionActive: 'Aboneliğiniz aktif',
  cancelSub: 'Aboneliği iptal et',
  locked: 'Kilitli',
  unlockMsg: 'Açmak için abone olun.',
  featurePharmacies: 'İlacınızın bulunduğu yakın eczaneleri telefon numaralarıyla bulun.',
  featureReminders: 'İlaç saatleriniz için hatırlatıcılar ayarlayın.',
  demoNote: 'Demo modu — ödeme olmadan anında etkin.',
  pharmaciesTitle: 'Yakın Eczaneler',
  pharmaciesSubtitle: 'Yakınınızda ilacın bulunduğu eczaneler.',
  distance: 'uzaklıkta',
  callNow: 'Ara',
  inStock: 'Stokta',
  pharmacyMedPlaceholder: 'İlaç adı (isteğe bağlı)',
  findPharmacies: 'Eczane bul',
  remindersTitle: 'Tedavi Hatırlatıcıları',
  remindersSubtitle: 'Dozlarınızı düzenleyin, hiçbir ilacı kaçırmayın.',
  addReminder: 'Hatırlatıcı ekle',
  medName: 'İlaç adı',
  time: 'Saat',
  frequency: 'Sıklık',
  freqDaily: 'Günde bir',
  freqTwice: 'Günde iki',
  freqWeekly: 'Haftalık',
  saveReminder: 'Kaydet',
  noReminders: 'Henüz hatırlatıcı yok. İlkini ekleyin.',
  deleteLabel: 'Sil',
  accountTitle: 'Hesabım',
  welcome: 'Hoş geldiniz',
  guestUser: 'Misafir',
  fullName: 'Ad soyad',
  email: 'E-posta',
  password: 'Şifre',
  signIn: 'Giriş yap',
  signUp: 'Hesap oluştur',
  signOut: 'Çıkış yap',
  toggleToSignUp: 'Hesabınız yok mu? Kaydolun',
  toggleToSignIn: 'Zaten hesabınız var mı? Giriş yapın',
  planFree: 'Ücretsiz plan',
  planPremium: 'Premium plan',
  cancel: 'İptal',
  close: 'Kapat',
  adLabel: 'Reklam',
  poweredByAI: 'Yapay zeka ile',
  priceDisclaimer: 'Fiyatlar yaklaşıktır ve bölgeye/eczaneye göre değişebilir.',
}

const DICTS: Record<string, Partial<TranslationKeys>> = { en, ar, fr, es, tr }

export function getTranslations(code: string): TranslationKeys {
  return { ...en, ...(DICTS[code] ?? {}) }
}
