import Header from "../components/Header.jsx";
import HeroBackground from "../components/HeroBackground.jsx";
import { Mic2, Headphones, Camera } from "lucide-react";

export default function Studio() {
  const services = [
    ["Recording Sessions", "Vocals, acoustic sets, full-band performances, demos, voiceovers, and intimate live-room sessions.", Mic2],
    ["Studio Experiences", "Bring the band, tell the story, share a meal, and capture the moment.", Headphones],
    ["Content Capture", "Performance videos, behind-the-scenes footage, interviews, reels, and social clips.", Camera],
  ];

  return (
    <main className="min-h-screen bg-[#11100d] text-[#f4ead6]">
      <Header />

      <section className="relative overflow-hidden px-6 py-24 md:px-12 lg:px-20">
        <HeroBackground src="/gallery/earthtone-vibes%20-%20Copy.JPEG" />
        <div className="relative z-10 mx-auto max-w-6xl">
          <p className="text-sm font-bold uppercase tracking-[0.35em] text-[#c9974d]">
            The Studio
          </p>

          <h1 className="mt-4 text-5xl font-black text-[#fff8e8] md:text-7xl">
            A creative house for songs that need space to breathe.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#f4ead6]/75">
            The heart of Earthtone Analog is the great music room — a spacious,
            vaulted room designed for presence, resonance, and emotional honesty.
          </p>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {services.map(([title, text, Icon]) => (
              <div
                key={title}
                className="rounded-[1.75rem] border border-[#f4ead6]/10 bg-[#201a13] p-7"
              >
                <Icon className="mb-6 h-8 w-8 text-[#c9974d]" />
                <h2 className="text-2xl font-black text-[#fff8e8]">{title}</h2>
                <p className="mt-4 leading-7 text-[#f4ead6]/70">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}