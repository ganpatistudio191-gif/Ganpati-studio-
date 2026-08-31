import Link from "next/link";

const services = [
  {
    title: "Photography",
    description: "Candid, traditional and creative photography for every special occasion.",
    icon: "📸",
  },
  {
    title: "Videography",
    description: "Cinematic films and professional event videos that preserve every moment.",
    icon: "🎥",
  },
  {
    title: "Live Streaming",
    description: "Professional multi-camera live streaming for weddings, events and religious programs.",
    icon: "📡",
  },
  {
    title: "Customised Gifts",
    description: "Turn your favourite memories into personalised gifts made especially for someone special.",
    icon: "🎁",
  },
];

const portfolio = [
  { title: "Wedding Stories", category: "WEDDING", image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=85" },
  { title: "Beautiful Moments", category: "EVENT", image: "https://images.unsplash.com/photo-1507504031003-b417219a0fde?auto=format&fit=crop&w=1200&q=85" },
  { title: "Special Celebrations", category: "CELEBRATION", image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1200&q=85" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#080808] text-white">
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
          <Link href="/" className="group">
            <div className="text-xl font-bold tracking-[0.25em]">
              GANPATI
              <span className="font-light text-[#d8b56a]"> STUDIO</span>
            </div>
            <div className="mt-1 text-[8px] tracking-[0.45em] text-white/40">
              CAPTURE • CREATE • CELEBRATE
            </div>
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            <Link href="/" className="text-sm text-white/80 transition hover:text-[#d8b56a]">
              Home
            </Link>
            <Link href="/services" className="text-sm text-white/80 transition hover:text-[#d8b56a]">
              Services
            </Link>
            <Link href="/portfolio" className="text-sm text-white/80 transition hover:text-[#d8b56a]">
              Portfolio
            </Link>
            <Link href="/gifts" className="text-sm text-white/80 transition hover:text-[#d8b56a]">
              Customised Gifts
            </Link>
            <Link href="/about" className="text-sm text-white/80 transition hover:text-[#d8b56a]">
              About
            </Link>
            <Link href="/contact" className="text-sm text-white/80 transition hover:text-[#d8b56a]">
              Contact
            </Link>
          </div>

          <Link
            href="/booking"
            className="hidden rounded-full border border-[#d8b56a]/60 px-5 py-2.5 text-sm font-medium text-[#d8b56a] transition hover:bg-[#d8b56a] hover:text-black sm:block"
          >
            Book Now
          </Link>

          <button className="text-2xl md:hidden" aria-label="Open menu">
            ☰
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative flex min-h-screen items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=2200&q=90')",
          }}
        />

        <div className="absolute inset-0 bg-black/65" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent" />

        <div className="relative mx-auto w-full max-w-7xl px-6 pt-24 lg:px-10">
          <div className="max-w-3xl">
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.45em] text-[#d8b56a]">
              Photography • Videography • Live Production
            </p>

            <h1 className="text-5xl font-semibold leading-[1.05] tracking-tight sm:text-7xl lg:text-8xl">
              Your Moments.
              <br />
              <span className="font-light italic text-[#d8b56a]">Our Craft.</span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-7 text-white/65 sm:text-lg">
              We capture the moments that matter and turn your memories into
              beautiful photographs, cinematic films and personalised gifts.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/portfolio"
                className="rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-black transition hover:bg-[#d8b56a]"
              >
                Explore Our Work
              </Link>

              <Link
                href="/gifts"
                className="rounded-full border border-white/30 bg-white/5 px-7 py-3.5 text-sm font-semibold backdrop-blur-sm transition hover:border-[#d8b56a] hover:text-[#d8b56a]"
              >
                Explore Customised Gifts
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 text-center sm:block">
          <div className="text-[9px] uppercase tracking-[0.4em] text-white/40">
            Scroll to explore
          </div>
          <div className="mx-auto mt-3 h-10 w-px bg-gradient-to-b from-[#d8b56a] to-transparent" />
        </div>
      </section>

      {/* INTRO */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="grid gap-12 md:grid-cols-2 md:items-end">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-[#d8b56a]">
              Welcome to Ganpati Studio
            </p>

            <h2 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl">
              More than a picture.
              <br />
              <span className="font-light text-white/50">It&apos;s a memory.</span>
            </h2>
          </div>

          <p className="max-w-xl text-sm leading-7 text-white/55 md:justify-self-end">
            From intimate celebrations to grand events, Ganpati Studio brings
            together photography, videography, live production and personalised
            gifts under one roof.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="border-y border-white/10 bg-[#0d0d0d]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
          <div className="mb-14 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-[#d8b56a]">
                What we do
              </p>
              <h2 className="mt-3 text-4xl font-semibold sm:text-5xl">
                Our Services
              </h2>
            </div>

            <Link
              href="/services"
              className="text-sm text-white/60 transition hover:text-[#d8b56a]"
            >
              View all services →
            </Link>
          </div>

          <div className="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-2">
            {services.map((service) => (
              <div
                key={service.title}
                className="group bg-[#0d0d0d] p-8 transition hover:bg-[#151515] sm:p-10"
              >
                <div className="text-3xl">{service.icon}</div>

                <h3 className="mt-7 text-2xl font-medium">
                  {service.title}
                </h3>

                <p className="mt-4 max-w-md text-sm leading-6 text-white/50">
                  {service.description}
                </p>

                <Link
                  href={
                    service.title === "Customised Gifts"
                      ? "/gifts"
                      : "/services"
                  }
                  className="mt-8 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-[#d8b56a] opacity-70 transition group-hover:opacity-100"
                >
                  Explore →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="mb-14 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-[#d8b56a]">
              Selected work
            </p>
            <h2 className="mt-3 text-4xl font-semibold sm:text-5xl">
              Moments We&apos;ve Captured
            </h2>
          </div>

          <Link
            href="/portfolio"
            className="text-sm text-white/60 transition hover:text-[#d8b56a]"
          >
            View portfolio →
          </Link>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {portfolio.map((item) => (
            <Link
              href="/portfolio"
              key={item.title}
              className="group relative aspect-[4/5] overflow-hidden rounded-2xl"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent" />

              <div className="absolute bottom-0 left-0 p-6">
                <p className="text-[9px] font-semibold tracking-[0.3em] text-[#d8b56a]">
                  {item.category}
                </p>
                <h3 className="mt-2 text-xl font-medium">{item.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CUSTOMISED GIFTS */}
      <section className="relative overflow-hidden border-y border-white/10 bg-[#101010]">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 lg:grid-cols-2 lg:px-10">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-[#d8b56a]">
              Personalised memories
            </p>

            <h2 className="mt-4 text-4xl font-semibold leading-tight sm:text-6xl">
              Give a gift
              <br />
              <span className="font-light italic text-[#d8b56a]">
                they&apos;ll remember.
              </span>
            </h2>

            <p className="mt-6 max-w-lg text-sm leading-7 text-white/55">
              Choose who you&apos;re gifting for, select the occasion and
              discover personalised gifts made from your favourite memories.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/gifts"
                className="inline-flex rounded-full border border-[#d8b56a]/70 px-7 py-3.5 text-sm font-semibold text-[#d8b56a] transition hover:bg-[#d8b56a] hover:text-black"
              >
                Browse Gifts
              </Link>
              <Link
                href="/gifts/customize/custom-photo-frame"
                className="inline-flex rounded-full bg-[#d8b56a] px-7 py-3.5 text-sm font-semibold text-black transition hover:bg-white"
              >
                Start Customizing →
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {["Mom", "Dad", "Best Friend", "Couple"].map((person, index) => (
              <Link
                href="/gifts"
                key={person}
                className={`group relative overflow-hidden rounded-2xl ${
                  index % 2 === 1 ? "mt-8" : ""
                }`}
              >
                <div className="flex aspect-square items-end bg-gradient-to-br from-[#242424] to-[#111] p-5 transition group-hover:from-[#302818]">
                  <div>
                    <div className="mb-2 text-2xl">
                      {["❤️", "💙", "💛", "💕"][index]}
                    </div>
                    <h3 className="font-medium">{person}</h3>
                    <p className="mt-1 text-xs text-white/40">
                      Explore gifts →
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.4em] text-[#d8b56a]">
            Why Ganpati Studio
          </p>

          <h2 className="mt-4 text-4xl font-semibold sm:text-5xl">
            Crafted with passion.
            <br />
            <span className="font-light text-white/40">
              Delivered with care.
            </span>
          </h2>
        </div>

        <div className="mt-14 grid gap-8 border-t border-white/10 pt-8 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["01", "Professional Quality", "Modern equipment and professional production for every event."],
            ["02", "Creative Approach", "We focus on authentic moments and beautiful storytelling."],
            ["03", "Complete Solutions", "Photography, video, live streaming and gifts under one roof."],
            ["04", "Personal Touch", "Every project is planned around your needs and your memories."],
          ].map(([number, title, description]) => (
            <div key={number}>
              <span className="text-xs text-[#d8b56a]">{number}</span>
              <h3 className="mt-6 text-lg font-medium">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-white/45">
                {description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/10 bg-[#0d0d0d]">
        <div className="mx-auto max-w-5xl px-6 py-28 text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-[#d8b56a]">
            Let&apos;s create something memorable
          </p>

          <h2 className="mt-5 text-4xl font-semibold sm:text-6xl">
            Your next story
            <br />
            <span className="font-light italic text-white/50">
              starts here.
            </span>
          </h2>

          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <Link
              href="/booking"
              className="rounded-full bg-white px-8 py-4 text-sm font-semibold text-black transition hover:bg-[#d8b56a]"
            >
              Book Your Event
            </Link>

            <Link
              href="/contact"
              className="rounded-full border border-white/20 px-8 py-4 text-sm font-semibold transition hover:border-[#d8b56a] hover:text-[#d8b56a]"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-10">
          <div className="flex flex-col justify-between gap-8 md:flex-row">
            <div>
              <div className="text-xl font-bold tracking-[0.25em]">
                GANPATI <span className="font-light text-[#d8b56a]">STUDIO</span>
              </div>
              <p className="mt-3 max-w-sm text-xs leading-5 text-white/35">
                Photography • Videography • Live Streaming • Customised Gifts
              </p>
            </div>

            <div className="flex flex-wrap gap-6 text-xs text-white/40">
              <Link href="/services" className="hover:text-white">
                Services
              </Link>
              <Link href="/portfolio" className="hover:text-white">
                Portfolio
              </Link>
              <Link href="/gifts" className="hover:text-white">
                Gifts
              </Link>
              <Link href="/contact" className="hover:text-white">
                Contact
              </Link>
            </div>
          </div>

          <div className="mt-10 border-t border-white/10 pt-6 text-xs text-white/25">
            © {new Date().getFullYear()} Ganpati Studio. All rights reserved.
          </div>
        </div>
      </footer>

      {/* WHATSAPP */}
      <a
        href="https://wa.me/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact Ganpati Studio on WhatsApp"
        className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-2xl shadow-2xl transition hover:scale-110"
      >
        💬
      </a>
    </main>
  );
}
