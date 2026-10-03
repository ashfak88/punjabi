import { WeddingEvent, TimelineItem, FamilyMember, GalleryPhoto, WishComment, GiftOption } from '../types';

export const coupleData = {
  brideName: "Ramjot Kaur",
  brideShort: "Ramjot",
  brideTitle: "Daughter of Major Singh & Ramandeep Kaur",
  brideBio: "A beautiful soul whose kindness and warmth radiate from within, bringing joy to everyone she meets.",
  bridePhoto: "",

  groomName: "Kishandeep Singh",
  groomShort: "Kishandeep",
  groomTitle: "Son of Mandeep Singh & Baljinder Kaur",
  groomBio: "A gentleman of great integrity and character, whose strength and gentle nature guide his every step.",
  groomPhoto: "",
  image: "",

  weddingDate: "2026-12-04T11:00:00+05:30",
  dateFormatted: "Friday, 4 December 2026",
  locationShort: "Pizzallia Royal Resorts",
  venueName: "Pizzallia Royal Resorts",
  venueAddress: "Khanna–Kheri Naudh Singh Road, Lalheri, Khanna, Punjab – 141417",

  sacredSymbol: "ੴ",
  sacredTransliteration: "Ik Onkar",
  sacredTranslation: "There is one God",

  traditionalGreeting: "Waheguru Ji Ka Khalsa, Waheguru Ji Ki Fateh",
  greetingIntro: "With the divine blessings of Waheguru and our beloved parents, we joyfully invite you to share in our happiness as we unite in holy matrimony.",

  scriptureNative: "ਧਨ ਪਿਰੁ ਏਹਿ ਨ ਆਖੀਅਨਿ ਬਹਨਿ ਇਕਠੇ ਹੋਇ ॥ ਏਕ ਜੋਤਿ ਦੁਇ ਮੂਰਤੀ ਧਨ ਪਿਰੁ ਕਹੀਐ ਸੋਇ ॥",
  scriptureTranslation: "They are not said to be husband and wife, who merely sit together. They alone are called husband and wife, who have one light in two bodies.",
  scriptureReference: "Guru Amar Das Ji",

  shareUrl: "https://ramjot-and-kishandeep-wedding.invitation/2026",
  whatsappShareText: "Waheguru Ji Ka Khalsa! You are cordially invited to the wedding celebration of Ramjot & Kishandeep on Friday, 4 December 2026. View our digital invitation here: https://ramjot-and-kishandeep-wedding.invitation/2026",
};

export const eventsData: WeddingEvent[] = [
  {
    id: "sukhmani-sahib",
    title: "Sukhmani Sahib Path",
    subtitle: "Divine Blessings",
    date: "Tuesday, 1 December 2026",
    time: "10:00 AM – 11:00 AM",
    location: "Home",
    address: "",
    description: "Join us in seeking the blessings of the Almighty as we begin our wedding celebrations with the recitations of Sukhmani Sahib.",
    dressCode: "Traditional Modest Attire",
    icon: "Heart",
    mapsUrl: ""
  },
  {
    id: "mehndi",
    title: "Mehndi Ceremony",
    subtitle: "Colors & Joy",
    date: "Tuesday, 1 December 2026",
    time: "2:00 PM onwards",
    location: "Residence of Rehal Family",
    address: "",
    description: "An afternoon of vibrant colors, intricate henna designs, and joyous celebrations.",
    dressCode: "Bright & Festive Colors",
    icon: "Sparkles",
    mapsUrl: ""
  },
  {
    id: "jaggo",
    title: "Jaggo Ceremony",
    subtitle: "Night of Celebration",
    date: "Thursday, 3 December 2026",
    time: "6:00 PM onwards",
    location: "Residence of Rehal Family",
    address: "",
    description: "Let's light up the night with traditional songs, dance, and endless celebration.",
    dressCode: "Traditional Punjabi Attire",
    icon: "Sparkles",
    mapsUrl: ""
  },
  {
    id: "haldi",
    title: "Haldi Ceremony",
    subtitle: "Golden Glow",
    date: "Thursday, 3 December 2026",
    time: "7:00 PM onwards",
    location: "Residence of Rehal Family",
    address: "",
    description: "The traditional ceremony of applying turmeric, symbolizing purity and blessings for the couple.",
    dressCode: "Yellow/Orange Attire",
    icon: "Sparkles",
    mapsUrl: ""
  },
  {
    id: "anand-karaj",
    title: "Anand Karaj",
    subtitle: "Sacred Union",
    date: "Friday, 4 December 2026",
    time: "7:00 AM",
    location: "Gurdwara Sahib",
    address: "",
    description: "The blissful union of two souls in the presence of Sri Guru Granth Sahib Ji.",
    dressCode: "Traditional Modest Attire (Head Covered)",
    icon: "Heart",
    mapsUrl: ""
  },
  {
    id: "wedding",
    title: "Wedding Celebration",
    subtitle: "Reception & Feast",
    date: "Friday, 4 December 2026",
    time: "11:00 AM onwards",
    location: "Pizzallia Royal Resorts",
    address: "Khanna–Kheri Naudh Singh Road, Lalheri, Khanna, Punjab – 141417",
    description: "Join us for the grand wedding celebration and feast to bless the newlyweds.",
    dressCode: "Formal/Traditional Attire",
    icon: "Sparkles",
    mapsUrl: "https://maps.google.com/?q=Pizzallia+Royal+Resorts+Khanna"
  }
];

export const timelineData: TimelineItem[] = [];

export const galleryData: GalleryPhoto[] = [];

export const familyData: FamilyMember[] = [
  // Bride Side
  {
    id: "fb-1",
    name: "Major Singh & Ramandeep Kaur",
    relation: "Parents of the Bride",
    role: "Beloved Mother & Father",
    side: "bride",
    blessing: "May Waheguru bless you with immense happiness, prosperity, and love in this new journey."
  },
  // Groom Side
  {
    id: "fg-1",
    name: "Mandeep Singh & Baljinder Kaur",
    relation: "Parents of the Groom",
    role: "Beloved Mother & Father",
    side: "groom",
    blessing: "Wishing you a lifetime of love and joy. May Waheguru shower his blessings on both of you."
  }
];

export const initialWishesData: WishComment[] = [];
export const giftOptionsData: GiftOption[] = [];
