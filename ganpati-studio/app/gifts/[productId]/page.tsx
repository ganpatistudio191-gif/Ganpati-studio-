import Link from "next/link";
import { notFound } from "next/navigation";
import { getProduct } from "@/lib/products";

export default async function ProductDetailPage(props: PageProps<"/gifts/[productId]">) {
  const { productId } = await props.params;
  const product = getProduct(productId);
  if (!product) notFound();

  return <main className="min-h-screen bg-[#080808] text-white">
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-xl"><div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10"><Link href="/" className="group"><div className="text-xl font-bold tracking-[0.25em]">GANPATI <span className="font-light text-[#d8b56a]">STUDIO</span></div><div className="mt-1 text-[8px] tracking-[0.45em] text-white/40">CAPTURE • CREATE • CELEBRATE</div></Link><Link href="/gifts" className="rounded-full border border-white/15 px-5 py-2.5 text-sm text-white/80 transition hover:border-[#d8b56a] hover:text-[#d8b56a]">← All Gifts</Link></div></nav>
    <section className="mx-auto grid max-w-7xl gap-10 px-6 py-12 lg:grid-cols-2 lg:gap-16 lg:px-10 lg:py-20"><div className="relative aspect-square overflow-hidden rounded-3xl border border-white/10 bg-[#111]"><img src={product.image} alt={product.name} className="h-full w-full object-cover" /><div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" /></div><div className="flex flex-col justify-center"><p className="text-xs uppercase tracking-[0.4em] text-[#d8b56a]">{product.category}</p><h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-6xl">{product.name}</h1><p className="mt-5 text-lg text-white/55">Starting from <span className="font-medium text-[#d8b56a]">₹{product.price.toLocaleString("en-IN")}</span></p><p className="mt-7 max-w-xl leading-7 text-white/55">{product.description}</p><div className="mt-9 grid gap-5 border-y border-white/10 py-7 sm:grid-cols-2"><div><p className="text-[10px] uppercase tracking-[0.3em] text-white/40">Perfect for</p><p className="mt-2 text-sm leading-6 text-white/70">{product.relationships.join(" • ")}</p></div><div><p className="text-[10px] uppercase tracking-[0.3em] text-white/40">Occasions</p><p className="mt-2 text-sm leading-6 text-white/70">{product.occasions.join(" • ")}</p></div></div><Link href={`/gifts/customize/${product.id}`} className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-[#d8b56a] px-7 py-4 text-sm font-semibold text-black transition hover:bg-white sm:w-auto">Customize This Gift →</Link></div></section>
    <footer className="border-t border-white/10 px-6 py-10 text-center text-xs text-white/30">© {new Date().getFullYear()} Ganpati Studio. All rights reserved.</footer>
  </main>;
}
