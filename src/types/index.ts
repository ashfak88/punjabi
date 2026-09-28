export interface WeddingEvent {
  id: string;
  title: string;
  subtitle?: string;
  date: string;
  time: string;
  location: string;
  address: string;
  description: string;
  dressCode?: string;
  icon: string;
  mapsUrl: string;
}

export interface TimelineItem {
  id: string;
  year: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  icon?: string;
}

export interface FamilyMember {
  id: string;
  name: string;
  relation: string;
  role: string;
  side: 'bride' | 'groom';
  blessing: string;
  image?: string;
}

export interface GalleryPhoto {
  id: string;
  src: string;
  alt: string;
  category: string;
  span?: string;
}

export interface RsvpSubmission {
  id: string;
  name: string;
  phone: string;
  guests: number;
  events: string[];
  dietary: string;
  attending: boolean;
  message: string;
  timestamp: string;
}

export interface WishComment {
  id: string;
  name: string;
  relation: string;
  message: string;
  timestamp: string;
  likes: number;
}

export interface GiftOption {
  id: string;
  title: string;
  type: 'bank' | 'upi' | 'qr';
  accountName?: string;
  accountNumber?: string;
  ifsc?: string;
  bankName?: string;
  upiId?: string;
  qrCodeUrl?: string;
}
