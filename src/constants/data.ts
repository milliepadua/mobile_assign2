// sample data
import type { Href } from "expo-router";

export const USER = {
  name: "Name",
  email: "name@example.com",
  points: 5200,
  pointsLabel: "5,200",
  goal: 6000,
  level: 11,
};

// ---------- Home grid ----------
export type GridItem = { label: string; icon: string; route?: Href };

export const GRID_ITEMS: GridItem[] = [
  { label: "Offers", icon: "🏷️", route: "/offers" },
  { label: "Delivery", icon: "🛵" },
  { label: "TimShop", icon: "🛍️", route: "/shop" },
  { label: "Community", icon: "❤️" },
  { label: "Tims Word Challenge", icon: "🔠" },
  { label: "Give", icon: "🎁" },
  { label: "Restaurant Locator", icon: "📍" },
  { label: "Join our team", icon: "🤝" },
];

// ---------- Offers ----------
export type Offer = {
  id: string;
  emoji: string;
  bannerText?: string;
  banner: "red" | "photo";
  title: string;
  text: string;
  daysLeft: number;
  activated: boolean;
  details: string;
};

export const OFFERS: Offer[] = [
  {
    id: "1",
    emoji: "🥪",
    banner: "red",
    title: "$6 Breakfast Combo",
    text: "Breakfast Sandwich, Hashbrown and Hot or Iced Coffee",
    daysLeft: 2,
    activated: true,
    details:
      "Valid at participating restaurants. Offer must be activated in the app before ordering. Limit one per guest per day.",
  },
  {
    id: "2",
    emoji: "🍩",
    banner: "red",
    title: "$6 Deal",
    text: "6-pack Assorted Donuts",
    daysLeft: 2,
    activated: false,
    details:
      "Valid on a 6-pack of assorted donuts. Selection may vary by restaurant. Cannot be combined with other offers.",
  },
  {
    id: "3",
    emoji: "⭐",
    bannerText: "2X POINTS",
    banner: "red",
    title: "Get 2x points",
    text: "when you order ahead on the app",
    daysLeft: 24,
    activated: false,
    details:
      "Earn double points on every order placed ahead in the app during the promotion period.",
  },
  {
    id: "4",
    emoji: "🥤",
    banner: "photo",
    title: "20% OFF",
    text: "2 Iced Capps",
    daysLeft: 1,
    activated: false,
    details:
      "20% off when you buy two Iced Capps in one order. Valid on any size. Limit one use per guest.",
  },
];

// ---------- TimShop ----------
export const CATEGORIES = [
  { id: "coffee", label: "Coffee Lovers", emoji: "☕" },
  { id: "pets", label: "Gifts for Pets", emoji: "🐶" },
  { id: "under50", label: "Gifts Under $50", emoji: "🎁" },
  { id: "under25", label: "Gifts Under $25", emoji: "🧸" },
  { id: "pajamas", label: "Pajamas", emoji: "🧦" },
];

export type Product = {
  id: string;
  name: string;
  price: number;
  emoji: string;
  isNew: boolean;
  categories: string[];
};

export const PRODUCTS: Product[] = [
  {
    id: "1",
    name: "Coffee Mug Bundle",
    price: 22.99,
    emoji: "☕",
    isNew: true,
    categories: ["coffee", "under25", "under50"],
  },
  {
    id: "2",
    name: "Mittens - Red",
    price: 19.99,
    emoji: "🧤",
    isNew: true,
    categories: ["under25", "under50"],
  },
  {
    id: "3",
    name: "Pet Sweater",
    price: 34.99,
    emoji: "🐕",
    isNew: false,
    categories: ["pets", "under50"],
  },
  {
    id: "4",
    name: "Gingerbread Mug",
    price: 14.99,
    emoji: "🍪",
    isNew: false,
    categories: ["coffee", "under25", "under50"],
  },
  {
    id: "5",
    name: "Holiday Pajamas",
    price: 39.99,
    emoji: "🧦",
    isNew: false,
    categories: ["pajamas", "under50"],
  },
  {
    id: "6",
    name: "Original Blend Coffee",
    price: 16.99,
    emoji: "🫘",
    isNew: false,
    categories: ["coffee", "under25", "under50"],
  },
];

// ---------- Tims Rewards ----------
export const REWARD_ITEMS = [
  { id: "1", pts: 400, emoji: "🥔", name: "Hash Brown" },
  { id: "2", pts: 400, emoji: "☕", name: "Brewed Coffee or Tea" },
  { id: "3", pts: 400, emoji: "🍪", name: "Cookie" },
  { id: "4", pts: 800, emoji: "🥪", name: "Breakfast Sandwich" },
];

export const HISTORY = [
  { id: "1", date: "Nov 3", title: "Large Hot Coffee", points: 120 },
  { id: "2", date: "Oct 30", title: "Breakfast Combo", points: 340 },
  { id: "3", date: "Oct 27", title: "Box of Timbits", points: 210 },
  { id: "4", date: "Oct 22", title: "Iced Capp", points: 150 },
  { id: "5", date: "Oct 18", title: "Bagel with Cream Cheese", points: 180 },
];

// ---------- Discover ----------
export const DISCOVER_ITEMS = [
  {
    id: 1,
    emoji: "🍂",
    title: "Pumpkin Spice Latte",
    text: "Back for the season.",
  },
  {
    id: 2,
    emoji: "🥯",
    title: "Breakfast Sandwich",
    text: "Egg, cheese and bacon on a toasted bagel.",
  },
  {
    id: 3,
    emoji: "🍩",
    title: "Timbits Box",
    text: "Twenty bite-sized treats to share.",
  },
  { id: 4, emoji: "🧊", title: "Iced Capp", text: "Cold, creamy and blended." },
];
