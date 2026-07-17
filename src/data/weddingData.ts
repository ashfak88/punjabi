import { WeddingEvent, TimelineItem, FamilyMember, GalleryPhoto, WishComment, GiftOption } from '../types';

export const coupleData = {
  brideName: "Amina Al-Mansoor",
  brideShort: "Amina",
  brideTitle: "Daughter of Mr. Tariq Al-Mansoor & Mrs. Zaynab Al-Mansoor",
  brideBio: "A compassionate soul with a deep love for art, Islamic heritage, and kindness towards all. Amina brings warmth and light into every room she enters.",
  bridePhoto: "/hero-couple.jpg",
  
  groomName: "Yusuf Rahman",
  groomShort: "Yusuf",
  groomTitle: "Son of Dr. Ibrahim Rahman & Mrs. Fatima Rahman",
  groomBio: "A dedicated software architect and avid traveler whose calm demeanor, integrity, and faith guide every step of his journey.",
  groomPhoto: "/hero-couple.jpg",
  image: "/couple-section.jpg",

  weddingDate: "2026-12-25T11:00:00+05:30",
  dateFormatted: "Friday, 25 December 2026",
  locationShort: "The Royal Mirage Palace",
  venueName: "The Royal Mirage Luxury & Garden Banquet",
  venueAddress: "786 Crescent Boulevard, Pearl District, Dubai / Demo City",
  
  bismillahArabic: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
  bismillahTransliteration: "Bismillahir Rahmanir Raheem",
  bismillahTranslation: "In the name of Allah, the Most Gracious, the Most Merciful",
  
  islamicGreeting: "Assalamu Alaikum wa Rahmatullahi wa Barakatuh",
  greetingIntro: "All praise is due to Allah, who created us in pairs so that we may find tranquility in one another. With the blessings and prayers of our beloved parents, we joyfully invite you to share in our happiness as we unite in holy matrimony.",
  
  quranVerseArabic: "وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً ۚ إِنَّ فِي ذَٰلِكَ لَآيَاتٍ لِّقَوْمٍ يَتَفَكَّرُونَ",
  quranVerseEnglish: "And of His signs is that He created for you from yourselves mates that you may find tranquility in them; and He placed between you affection and mercy. Indeed in that are signs for a people who give thought.",
  quranReference: "Surah Ar-Rum [30:21]",

  audioUrl: "/wedding-muhammad-al-muqit.m4a",
  audioTitle: "The Wedding — Muhammad Al Muqit (Nasheed)",
  shareUrl: "https://amina-and-yusuf-wedding.invitation/2026",
  whatsappShareText: "Assalamu Alaikum! You are cordially invited to the royal wedding celebration of Amina & Yusuf on Friday, 25 December 2026. View our digital invitation here: https://amina-and-yusuf-wedding.invitation/2026",
};

export const eventsData: WeddingEvent[] = [
  {
    id: "reception",
    title: "Grand Walima Reception",
    subtitle: "Celebration & Royal Feast",
    date: "Friday, 25 December 2026",
    time: "7:00 PM – 11:00 PM",
    location: "The Grand Diamond Ballroom",
    address: "The Royal Mirage Palace, Pearl District, Demo City",
    description: "Join us for an exquisite evening of joyous celebrations, heartfelt toasts, gourmet royal banquets, and serene companionship as we celebrate the newlyweds.",
    dressCode: "Luxury Evening Attire & Formal Couture (Gold & Emerald Accents)",
    icon: "Sparkles",
    mapsUrl: "https://maps.google.com/?q=The+Royal+Mirage+Palace"
  }
];

export const timelineData: TimelineItem[] = [
  {
    id: "first-meeting",
    year: "First Meeting",
    title: "A Blessed Encounter",
    subtitle: "Spring of 2024",
    description: "Introduced through mutual family friends at an Eid charity gala, Amina and Yusuf discovered an instant connection rooted in shared values, intellectual curiosity, and deep faith.",
    image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=800&auto=format&fit=crop",
    icon: "Sparkles"
  },
  {
    id: "engagement",
    year: "Engagement",
    title: "The Promise & Prayer",
    subtitle: "Winter of 2025",
    description: "In an intimate and heartfelt gathering with our elders, heartfelt Duas were made, rings were exchanged, and our families officially united in their blessings.",
    image: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=800&auto=format&fit=crop",
    icon: "Heart"
  },
  {
    id: "wedding",
    year: "Wedding",
    title: "Our Sacred Union",
    subtitle: "25 December 2026",
    description: "By the grace of Allah, we step into the blessed journey of marriage surrounded by the love, smiles, and warm wishes of our cherished guests.",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop",
    icon: "Crown"
  }
];

export const galleryData: GalleryPhoto[] = [
  { id: "g1", src: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop", alt: "Elegant Floral Mandap & Decor", category: "Decor" },
  { id: "g2", src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=800&auto=format&fit=crop", alt: "Golden Wedding Ring Details", category: "Details" },
  { id: "g3", src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=800&auto=format&fit=crop", alt: "Serene Garden Pathway", category: "Venue" },
  { id: "g4", src: "https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=800&auto=format&fit=crop", alt: "Traditional Calligraphy & Cards", category: "Tradition" },
  { id: "g5", src: "https://images.unsplash.com/photo-1519225336804-91fe1f2c2e07?q=80&w=800&auto=format&fit=crop", alt: "Sunset Over Royal Palace", category: "Venue" },
  { id: "g6", src: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=800&auto=format&fit=crop", alt: "Golden Lanterns & Table Setting", category: "Decor" }
];

export const familyData: FamilyMember[] = [
  // Bride Side
  {
    id: "fb-1",
    name: "Mr. Tariq Al-Mansoor & Mrs. Zaynab Al-Mansoor",
    relation: "Parents of the Bride",
    role: "Beloved Mother & Father",
    side: "bride",
    blessing: "May Allah fill your home with tranquility, barakah, and unshakeable affection every single day of your lives."
  },
  {
    id: "fb-2",
    name: "Mr. Omar Al-Mansoor & Family",
    relation: "Elder Brother of the Bride",
    role: "Guardian & Brother",
    side: "bride",
    blessing: "So proud of our dear Amina. May your journey with Yusuf be filled with laughter, success, and divine favor."
  },
  {
    id: "fb-3",
    name: "Ms. Layla Al-Mansoor",
    relation: "Sister of the Bride",
    role: "Maid of Honor & Confidante",
    side: "bride",
    blessing: "To my best friend and sister, may this new chapter bring you infinite joy and harmony!"
  },
  // Groom Side
  {
    id: "fg-1",
    name: "Dr. Ibrahim Rahman & Mrs. Fatima Rahman",
    relation: "Parents of the Groom",
    role: "Beloved Mother & Father",
    side: "groom",
    blessing: "Yusuf & Amina, may Allah bless you both and bring you together in all that is good and righteous."
  },
  {
    id: "fg-2",
    name: "Mr. Hamza Rahman & Mrs. Aisha Rahman",
    relation: "Brother & Sister-in-law",
    role: "Loving Family",
    side: "groom",
    blessing: "Welcome to our family, Amina! We pray for your eternal happiness and peace in this world and the hereafter."
  },
  {
    id: "fg-3",
    name: "Grandma Khadijah Rahman",
    relation: "Beloved Grandmother",
    role: "Family Matriarch",
    side: "groom",
    blessing: "May Allah protect your union and shower you with mercy and endless blessings throughout the years."
  }
];

export const initialWishesData: WishComment[] = [
  {
    id: "w1",
    name: "Sheikh Abdullah & Family",
    relation: "Close Family Friend",
    message: "MashaAllah TabarakAllah! Dearest Amina and Yusuf, may Allah bless your sacred union with infinite barakah, love, and understanding. Can't wait for December 25th! 🤲🕌✨",
    timestamp: "2 hours ago",
    likes: 24
  },
  {
    id: "w2",
    name: "Dr. Bilal & Mariam Al-Khatib",
    relation: "Uncle & Aunt",
    message: "Heartiest congratulations to our beloved niece and nephew! May your home always be a sanctuary of peace, kindness, and gratitude. ❤️🌹",
    timestamp: "5 hours ago",
    likes: 18
  },
  {
    id: "w3",
    name: "Zayn & Hania Malik",
    relation: "Childhood Friends",
    message: "Barakallahu lakuma wa baraka alaikuma wa jama'a baynakuma fi khair! Wishing the most wonderful couple a lifetime of pure bliss! 🥂💐",
    timestamp: "Yesterday",
    likes: 31
  }
];

export const giftOptionsData: GiftOption[] = [
  {
    id: "bank-1",
    title: "Direct Bank Transfer",
    type: "bank",
    accountName: "Yusuf Rahman & Amina Al-Mansoor",
    accountNumber: "98765432101234",
    ifsc: "MIRAGE000786",
    bankName: "Royal Emirates Islamic Bank"
  },
  {
    id: "upi-1",
    title: "Instant UPI Transfer",
    type: "upi",
    accountName: "Amina & Yusuf Wedding Fund",
    upiId: "amina.yusuf.2026@okaxis"
  },
  {
    id: "qr-1",
    title: "Scan QR Code",
    type: "qr",
    accountName: "Amina & Yusuf Gift Registry",
    qrCodeUrl: "https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=upi://pay?pa=amina.yusuf.2026@okaxis&pn=Amina%20and%20Yusuf%20Wedding&cu=INR"
  }
];
