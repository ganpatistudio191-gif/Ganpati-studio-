export type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  description: string;
  relationships: string[];
  occasions: string[];
  image: string;
};

export const products: Product[] = [
  {
    id: "custom-photo-frame",
    name: "Custom Photo Frame",
    category: "Photo Frames",
    price: 499,
    description: "A timeless, gallery-style frame made to hold a memory that deserves to be seen every day.",
    relationships: ["Mom", "Dad", "Sister", "Brother", "Best Friend", "Couple", "Family"],
    occasions: ["Birthday", "Anniversary", "Wedding", "Festival", "Special Day"],
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: "personalised-photo-mug",
    name: "Personalised Photo Mug",
    category: "Mugs",
    price: 349,
    description: "Turn their everyday chai or coffee into a warm reminder of the people they love.",
    relationships: ["Mom", "Dad", "Sister", "Brother", "Best Friend", "Couple"],
    occasions: ["Birthday", "Anniversary", "Thank You", "Special Day"],
    image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: "custom-led-photo-lamp",
    name: "Custom LED Photo Lamp",
    category: "LED Gifts",
    price: 999,
    description: "A softly illuminated keepsake that lets a favourite photograph glow long after the celebration.",
    relationships: ["Mom", "Dad", "Couple", "Husband / Wife", "Best Friend"],
    occasions: ["Birthday", "Anniversary", "Wedding", "Special Day"],
    image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: "photo-cushion",
    name: "Photo Cushion",
    category: "Cushions",
    price: 599,
    description: "A soft, personal accent for their favourite corner, finished with a cherished photograph.",
    relationships: ["Mom", "Dad", "Sister", "Brother", "Best Friend", "Couple"],
    occasions: ["Birthday", "Anniversary", "Wedding", "Special Day"],
    image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: "personalised-keychain",
    name: "Personalised Keychain",
    category: "Keychains",
    price: 249,
    description: "A small but meaningful keepsake they can carry wherever life takes them.",
    relationships: ["Sister", "Brother", "Best Friend", "Couple", "Kids"],
    occasions: ["Birthday", "Thank You", "Special Day"],
    image: "https://images.unsplash.com/photo-1603575448878-868a20723f5d?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: "photo-collage",
    name: "Photo Collage",
    category: "Photo Gifts",
    price: 699,
    description: "Bring several moments together in one elegant keepsake made for storytelling.",
    relationships: ["Mom", "Dad", "Grandparents", "Family", "Couple"],
    occasions: ["Birthday", "Anniversary", "Wedding", "Festival"],
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1000&q=85",
  },
];

export function getProduct(productId: string) {
  return products.find((product) => product.id === productId);
}
