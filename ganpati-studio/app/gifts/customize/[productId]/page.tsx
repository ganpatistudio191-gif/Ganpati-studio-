"use client";

import Link from "next/link";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { notFound, useParams } from "next/navigation";
import { getProduct } from "@/lib/products";
import { supabase } from "@/lib/supabase";

const maxImageSize = 5 * 1024 * 1024;

export default function CustomizeGiftPage() {
  const params = useParams<{ productId: string }>();
  const product = getProduct(params.productId);
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);
  const [photoName, setPhotoName] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [message, setMessage] = useState("");
  const [extraDetails, setExtraDetails] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [error, setError] = useState("");
  useEffect(() => () => { if (photoPreview) URL.revokeObjectURL(photoPreview); }, [photoPreview]);
  if (!product) notFound();

  function handlePhotoChange(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith("image/")) { setError("Please choose an image file (JPG, PNG, or WebP)."); event.target.value = ""; return; }
    if (file.size > maxImageSize) { setError("Please choose an image smaller than 5 MB."); event.target.value = ""; return; }
    if (photoPreview) URL.revokeObjectURL(photoPreview);
    setPhotoPreview(URL.createObjectURL(file)); setPhotoName(file.name); setError("");
  }

  async function submitEnquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!product) return;
    if (!customerName.trim() || !photoPreview) { setError("Please add your name and upload a photo before sending your enquiry."); return; }
    const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(/\D/g, "");
    if (supabase) {
      const { error: saveError } = await supabase.from("enquiries").insert({ customer_name: customerName.trim(), quantity, personal_message: message.trim() || null, customization_details: `${extraDetails.trim() || "Not provided"} | Product: ${product.name} | Photo: ${photoName}`, status: "new" });
      if (saveError) { setError(`Could not save enquiry: ${saveError.message}`); return; }
    }
    if (!whatsappNumber) { setError("Enquiry saved. WhatsApp is not configured yet. Add NEXT_PUBLIC_WHATSAPP_NUMBER to enable direct chat."); return; }
    const enquiry = ["Hello Ganpati Studio, I would like to customize a gift.", "", `Product: ${product.name}`, `Starting price: ₹${product.price.toLocaleString("en-IN")}`, `Customer name: ${customerName.trim()}`, `Quantity: ${quantity}`, `Personal message: ${message.trim() || "Not provided"}`, `Additional details: ${extraDetails.trim() || "Not provided"}`, `Photo selected: ${photoName}`, "", "Note: I will share the selected photo in this chat."].join("\n");
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(enquiry)}`, "_blank", "noopener,noreferrer");
  }

  return <main className="min-h-screen bg-[#080808] text-white">
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-xl"><div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10"><Link href="/" className="group"><div className="text-xl font-bold tracking-[0.25em]">GANPATI <span className="font-light text-[#d8b56a]">STUDIO</span></div><div className="mt-1 text-[8px] tracking-[0.45em] text-white/40">CAPTURE • CREATE • CELEBRATE</div></Link><Link href={`/gifts/${product.id}`} className="rounded-full border border-white/15 px-5 py-2.5 text-sm text-white/80 transition hover:border-[#d8b56a] hover:text-[#d8b56a]">← Product details</Link></div></nav>
    <section className="border-b border-white/10 bg-[radial-gradient(circle_at_top,_rgba(216,181,106,0.13),_transparent_45%)] px-6 py-16 text-center sm:py-20"><p className="text-xs uppercase tracking-[0.4em] text-[#d8b56a]">Make it yours</p><h1 className="mt-4 text-4xl font-semibold sm:text-5xl">Customize <span className="font-light italic text-[#d8b56a]">{product.name}</span></h1><p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-white/50">Share the details, review your selection, and send us a WhatsApp enquiry. Your photo stays in this browser for now.</p></section>
    <form onSubmit={submitEnquiry} className="mx-auto grid max-w-7xl gap-8 px-6 py-12 lg:grid-cols-[minmax(0,1fr)_390px] lg:px-10 lg:py-16"><div className="space-y-7"><section className="rounded-3xl border border-white/10 bg-[#0d0d0d] p-6 sm:p-8"><div className="flex flex-col gap-6 sm:flex-row"><img src={product.image} alt={product.name} className="h-24 w-full rounded-2xl object-cover sm:w-32" /><div><p className="text-[10px] uppercase tracking-[0.3em] text-[#d8b56a]">{product.category}</p><h2 className="mt-2 text-2xl font-medium">{product.name}</h2><p className="mt-2 text-sm text-white/45">Starting from ₹{product.price.toLocaleString("en-IN")}</p></div></div></section>
    <section className="rounded-3xl border border-white/10 bg-[#0d0d0d] p-6 sm:p-8"><p className="text-xs uppercase tracking-[0.35em] text-[#d8b56a]">01 · Your photo</p><label className="mt-5 flex cursor-pointer flex-col items-center justify-center rounded-2xl border border-dashed border-white/20 bg-white/[0.02] p-6 text-center transition hover:border-[#d8b56a]">{photoPreview ? <img src={photoPreview} alt="Your uploaded preview" className="h-52 w-full rounded-xl object-contain" /> : <><span className="text-3xl">✦</span><span className="mt-3 text-sm font-medium">Upload a photo for your gift</span><span className="mt-2 text-xs text-white/40">JPG, PNG, or WebP · maximum 5 MB</span></>}<input type="file" accept="image/jpeg,image/png,image/webp" className="sr-only" onChange={handlePhotoChange} /></label>{photoName && <p className="mt-3 text-xs text-white/45">Selected: {photoName}</p>}</section>
    <section className="rounded-3xl border border-white/10 bg-[#0d0d0d] p-6 sm:p-8"><p className="text-xs uppercase tracking-[0.35em] text-[#d8b56a]">02 · Personalize</p><div className="mt-5 grid gap-5 sm:grid-cols-2"><label className="text-sm text-white/70">Your name <span className="text-[#d8b56a]">*</span><input required value={customerName} onChange={(e) => setCustomerName(e.target.value)} placeholder="Your name" className="mt-2 w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3.5 text-white outline-none placeholder:text-white/25 focus:border-[#d8b56a]" /></label><div className="text-sm text-white/70">Quantity<div className="mt-2 flex w-fit items-center overflow-hidden rounded-xl border border-white/10"><button type="button" onClick={() => setQuantity((value) => Math.max(1, value - 1))} className="px-4 py-3 text-lg hover:bg-white/5" aria-label="Decrease quantity">−</button><span className="min-w-12 text-center">{quantity}</span><button type="button" onClick={() => setQuantity((value) => value + 1)} className="px-4 py-3 text-lg hover:bg-white/5" aria-label="Increase quantity">+</button></div></div></div><label className="mt-5 block text-sm text-white/70">Personal message<textarea value={message} onChange={(e) => setMessage(e.target.value)} maxLength={200} rows={3} placeholder="A message to include on the gift" className="mt-2 w-full resize-none rounded-xl border border-white/10 bg-black/30 px-4 py-3.5 text-white outline-none placeholder:text-white/25 focus:border-[#d8b56a]" /></label><label className="mt-5 block text-sm text-white/70">Additional customization<textarea value={extraDetails} onChange={(e) => setExtraDetails(e.target.value)} maxLength={300} rows={3} placeholder="Preferred color, date, design idea, or special instructions" className="mt-2 w-full resize-none rounded-xl border border-white/10 bg-black/30 px-4 py-3.5 text-white outline-none placeholder:text-white/25 focus:border-[#d8b56a]" /></label></section></div>
    <aside className="h-fit rounded-3xl border border-[#d8b56a]/30 bg-[#12100b] p-6 sm:p-8 lg:sticky lg:top-28"><p className="text-xs uppercase tracking-[0.35em] text-[#d8b56a]">03 · Review</p><h2 className="mt-4 text-2xl font-medium">Your enquiry</h2><dl className="mt-6 space-y-4 border-y border-white/10 py-5 text-sm"><div className="flex justify-between gap-4"><dt className="text-white/45">Gift</dt><dd className="text-right">{product.name}</dd></div><div className="flex justify-between gap-4"><dt className="text-white/45">Quantity</dt><dd>{quantity}</dd></div><div className="flex justify-between gap-4"><dt className="text-white/45">Starting total</dt><dd className="font-medium text-[#d8b56a]">₹{(product.price * quantity).toLocaleString("en-IN")}</dd></div></dl><p className="mt-5 text-xs leading-5 text-white/40">Final price may vary with the design and customization. We&apos;ll confirm everything with you on WhatsApp.</p>{error && <p role="alert" className="mt-5 rounded-xl border border-red-400/30 bg-red-400/10 p-3 text-xs leading-5 text-red-200">{error}</p>}<button type="submit" className="mt-6 w-full rounded-full bg-[#d8b56a] px-5 py-4 text-sm font-semibold text-black transition hover:bg-white">Send WhatsApp Enquiry →</button><p className="mt-4 text-center text-[11px] leading-5 text-white/35">Your uploaded image is previewed locally and is not stored or sent automatically.</p></aside></form>
    <footer className="border-t border-white/10 px-6 py-10 text-center text-xs text-white/30">© {new Date().getFullYear()} Ganpati Studio. All rights reserved.</footer>
  </main>;
}
