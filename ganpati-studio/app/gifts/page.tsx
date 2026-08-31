"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";

const relationships = [
  { name: "Mom", emoji: "❤️" },
  { name: "Dad", emoji: "💙" },
  { name: "Sister", emoji: "💜" },
  { name: "Brother", emoji: "💚" },
  { name: "Best Friend", emoji: "💛" },
  { name: "Couple", emoji: "💕" },
  { name: "Husband / Wife", emoji: "💖" },
  { name: "Grandparents", emoji: "🤍" },
  { name: "Kids", emoji: "🧸" },
  { name: "Family", emoji: "👨‍👩‍👧‍👦" },
];

const occasions = [
  { name: "Birthday", emoji: "🎂" },
  { name: "Anniversary", emoji: "💍" },
  { name: "Wedding", emoji: "💒" },
  { name: "Festival", emoji: "✨" },
  { name: "Graduation", emoji: "🎓" },
  { name: "Baby Shower", emoji: "👶" },
  { name: "Thank You", emoji: "🙏" },
  { name: "Special Day", emoji: "🎁" },
];

const demoProducts = [
  {
    id: "custom-photo-frame",
    name: "Custom Photo Frame",
    category: "Photo Frames",
    price: 499,
    relationships: ["Mom", "Dad", "Sister", "Brother", "Best Friend", "Couple", "Family"],
    occasions: ["Birthday", "Anniversary", "Wedding", "Festival", "Special Day"],
    image:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: "personalised-photo-mug",
    name: "Personalised Photo Mug",
    category: "Mugs",
    price: 349,
    relationships: ["Mom", "Dad", "Sister", "Brother", "Best Friend", "Couple"],
    occasions: ["Birthday", "Anniversary", "Thank You", "Special Day"],
    image:
      "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: "custom-led-photo-lamp",
    name: "Custom LED Photo Lamp",
    category: "LED Gifts",
    price: 999,
    relationships: ["Mom", "Dad", "Couple", "Husband / Wife", "Best Friend"],
    occasions: ["Birthday", "Anniversary", "Wedding", "Special Day"],
    image:
      "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: "photo-cushion",
    name: "Photo Cushion",
    category: "Cushions",
    price: 599,
    relationships: ["Mom", "Dad", "Sister", "Brother", "Best Friend", "Couple"],
    occasions: ["Birthday", "Anniversary", "Wedding", "Special Day"],
    image:
      "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: "personalised-keychain",
    name: "Personalised Keychain",
    category: "Keychains",
    price: 249,
    relationships: ["Sister", "Brother", "Best Friend", "Couple", "Kids"],
    occasions: ["Birthday", "Thank You", "Special Day"],
    image:
      "https://images.unsplash.com/photo-1603575448878-868a20723f5d?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: "photo-collage",
    name: "Photo Collage",
    category: "Photo Gifts",
    price: 699,
    relationships: ["Mom", "Dad", "Grandparents", "Family", "Couple"],
    occasions: ["Birthday", "Anniversary", "Wedding", "Festival"],
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1000&q=85",
  },
];

export default function GiftsPage() {
  const [products, setProducts] = useState(demoProducts);
  const [relationship, setRelationship] = useState("");
  const [occasion, setOccasion] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (!supabase) return;
    supabase
      .from("products")
      .select("*, product_relationships(relationships(name)), product_occasions(occasions(name))")
      .eq("is_active", true)
      .order("created_at", { ascending: false })
      .then(({ data, error }) => {
        if (error || !data?.length) return;
        setProducts(data.map((product) => ({
          name: product.name,
          category: product.category,
          price: product.price,
          relationships: (product.product_relationships ?? []).map((item: { relationships?: { name?: string } | null }) => item.relationships?.name).filter(Boolean) as string[],
          occasions: (product.product_occasions ?? []).map((item: { occasions?: { name?: string } | null }) => item.occasions?.name).filter(Boolean) as string[],
          image: product.image_url || demoProducts[0].image,
          id: product.slug,
        })));
      });
  }, []);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesRelationship =
        !relationship || product.relationships.includes(relationship);

      const matchesOccasion =
        !occasion || product.occasions.includes(occasion);

      const matchesSearch =
        !search ||
        product.name.toLowerCase().includes(search.toLowerCase()) ||
        product.category.toLowerCase().includes(search.toLowerCase());

      return matchesRelationship && matchesOccasion && matchesSearch;
    });
  }, [relationship, occasion, search]);

  return (
    <main className="min-h-screen bg-[#080808] text-white">
      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
          <Link href="/" className="group">
            <div className="text-xl font-bold tracking-[0.25em]">
              GANPATI{" "}
              <span className="font-light text-[#d8b56a]">STUDIO</span>
            </div>
            <div className="mt-1 text-[8px] tracking-[0.45em] text-white/40">
              CAPTURE • CREATE • CELEBRATE
            </div>
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            <Link href="/" className="text-sm text-white/60 hover:text-white">
              Home
            </Link>
            <Link href="/services" className="text-sm text-white/60 hover:text-white">
              Services
            </Link>
            <Link href="/portfolio" className="text-sm text-white/60 hover:text-white">
              Portfolio
            </Link>
            <Link href="/gifts" className="text-sm text-[#d8b56a]">
              Customised Gifts
            </Link>
            <Link href="/about" className="text-sm text-white/60 hover:text-white">
              About
            </Link>
            <Link href="/contact" className="text-sm text-white/60 hover:text-white">
              Contact
            </Link>
          </div>

          <Link
            href="/booking"
            className="hidden rounded-full bg-[#d8b56a] px-5 py-2.5 text-sm font-semibold text-black sm:block"
          >
            Book Now
          </Link>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(216,181,106,0.12),_transparent_55%)]" />

        <div className="relative mx-auto max-w-5xl px-6 py-24 text-center sm:py-32">
          <p className="text-xs uppercase tracking-[0.45em] text-[#d8b56a]">
            Personalised Memories
          </p>

          <h1 className="mt-5 text-5xl font-semibold tracking-tight sm:text-7xl">
            Find the
            <br />
            <span className="font-light italic text-[#d8b56a]">
              Perfect Gift
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/50 sm:text-base">
            Choose who you are gifting for and the occasion. We&apos;ll help you
            discover a personalised gift made especially for them.
          </p>
        </div>
      </section>

      {/* RELATIONSHIPS */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-[#d8b56a]">
            Step 01
          </p>

          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
            Who is the gift for?
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
          {relationships.map((item) => (
            <button
              key={item.name}
              onClick={() =>
                setRelationship(
                  relationship === item.name ? "" : item.name
                )
              }
              className={`rounded-2xl border p-5 text-center transition ${
                relationship === item.name
                  ? "border-[#d8b56a] bg-[#d8b56a]/10"
                  : "border-white/10 bg-white/[0.02] hover:border-white/25"
              }`}
            >
              <div className="text-3xl">{item.emoji}</div>
              <div className="mt-3 text-sm font-medium">{item.name}</div>
            </button>
          ))}
        </div>
      </section>

      {/* OCCASIONS */}
      <section className="border-y border-white/10 bg-[#0d0d0d]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <div className="text-center">
            <p className="text-xs uppercase tracking-[0.4em] text-[#d8b56a]">
              Step 02
            </p>

            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
              What&apos;s the occasion?
            </h2>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {occasions.map((item) => (
              <button
                key={item.name}
                onClick={() =>
                  setOccasion(occasion === item.name ? "" : item.name)
                }
                className={`rounded-2xl border p-5 text-center transition ${
                  occasion === item.name
                    ? "border-[#d8b56a] bg-[#d8b56a]/10"
                    : "border-white/10 bg-black/20 hover:border-white/25"
                }`}
              >
                <div className="text-2xl">{item.emoji}</div>
                <div className="mt-2 text-sm">{item.name}</div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCT AREA */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-[#d8b56a]">
              Step 03
            </p>

            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
              Recommended Gifts
            </h2>

            {(relationship || occasion) && (
              <p className="mt-3 text-sm text-white/40">
                {relationship || "All relationships"}
                {relationship && occasion ? " • " : ""}
                {occasion || "All occasions"}
              </p>
            )}
          </div>

          <div className="w-full md:w-72">
            <input
              type="search"
              placeholder="Search gifts..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm outline-none placeholder:text-white/30 focus:border-[#d8b56a]"
            />
          </div>
        </div>

        {filteredProducts.length === 0 ? (
          <div className="mt-12 rounded-2xl border border-white/10 bg-white/[0.02] py-20 text-center">
            <div className="text-4xl">🎁</div>
            <h3 className="mt-5 text-xl font-medium">
              No matching gifts found
            </h3>
            <p className="mt-2 text-sm text-white/40">
              Try another relationship, occasion or search.
            </p>
          </div>
        ) : (
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProducts.map((product) => (
              <article
                key={product.id}
                className="group overflow-hidden rounded-2xl border border-white/10 bg-[#0d0d0d]"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                </div>

                <div className="p-6">
                  <p className="text-[10px] uppercase tracking-[0.25em] text-[#d8b56a]">
                    {product.category}
                  </p>

                  <h3 className="mt-2 text-xl font-medium">
                    {product.name}
                  </h3>

                  <p className="mt-3 text-sm text-white/40">
                    Starting from ₹{product.price}
                  </p>

                  <Link
                    href={`/gifts/customize/${product.id}`}
                    className="mt-6 block rounded-full border border-white/15 py-3 text-center text-sm font-medium transition hover:border-[#d8b56a] hover:text-[#d8b56a]"
                  >
                    Customize / Enquire
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      {/* FINAL CTA */}
      <section className="border-t border-white/10 bg-[#0d0d0d]">
        <div className="mx-auto max-w-4xl px-6 py-24 text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-[#d8b56a]">
            Made especially for you
          </p>

          <h2 className="mt-5 text-4xl font-semibold sm:text-5xl">
            Have something
            <br />
            <span className="font-light italic text-white/50">
              special in mind?
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-lg text-sm leading-6 text-white/40">
            Tell us what you&apos;re looking for and we&apos;ll help you create
            something truly personal.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex rounded-full bg-[#d8b56a] px-8 py-4 text-sm font-semibold text-black transition hover:bg-white"
          >
            Talk to Ganpati Studio
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 px-6 py-10 text-center">
        <div className="text-lg font-bold tracking-[0.2em]">
          GANPATI <span className="font-light text-[#d8b56a]">STUDIO</span>
        </div>

        <p className="mt-3 text-xs text-white/30">
          Photography • Videography • Live Streaming • Customised Gifts
        </p>

        <p className="mt-6 text-[11px] text-white/20">
          © {new Date().getFullYear()} Ganpati Studio. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
