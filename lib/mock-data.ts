// بيانات تجريبية لقراءة الروشتة (الوضع التجريبي)
export type ExtractedMedicine = {
  name: string
  dosage: string
  price: number
  instructions: string
}

export const SAMPLE_PRESCRIPTION: ExtractedMedicine[] = [
  {
    name: 'Augmentin 1g',
    dosage: '1 tablet every 12 hours',
    price: 95,
    instructions: 'After meals for 7 days',
  },
  {
    name: 'Panadol Extra',
    dosage: '1-2 tablets every 8 hours',
    price: 28,
    instructions: 'When needed for pain or fever',
  },
  {
    name: 'Congestal',
    dosage: '1 tablet every 12 hours',
    price: 22,
    instructions: 'For nasal congestion',
  },
  {
    name: 'Vitamin C 1000mg',
    dosage: '1 effervescent tablet daily',
    price: 45,
    instructions: 'Dissolve in water in the morning',
  },
]

// صيدليات تجريبية للميزة المدفوعة
export type Pharmacy = {
  name: string
  address: string
  phone: string
  distanceKm: number
}

export const SAMPLE_PHARMACIES: Pharmacy[] = [
  { name: 'El Ezaby Pharmacy', address: 'Nasr City, Cairo', phone: '19600', distanceKm: 0.4 },
  { name: 'Seif Pharmacies', address: 'Heliopolis, Cairo', phone: '16919', distanceKm: 0.9 },
  { name: 'Roshdy Pharmacy', address: 'Downtown', phone: '19110', distanceKm: 1.6 },
  { name: 'Care Pharmacy', address: 'Maadi', phone: '19011', distanceKm: 2.3 },
  { name: '19011 Pharmacy', address: 'Zamalek', phone: '19011', distanceKm: 3.1 },
]

export const CURRENCY = 'EGP'
