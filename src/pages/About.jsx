import Header from "../components/Header.jsx";
import HeroBackground from "../components/HeroBackground.jsx";
import { Heart, Music, Home } from "lucide-react";

export default function About() {
  return (
    <main className="min-h-screen bg-[#11100d] text-[#f4ead6]">
      <Header />

      <section className="relative overflow-hidden px-6 py-24 md:px-12 lg:px-20">
        <HeroBackground src="/gallery/earthtone-home-winter2.JPEG" />
        <div className="relative z-10 mx-auto max-w-5xl">
          <p className="text-sm font-bold uppercase tracking-[0.35em] text-[#c9974d]">
            About Earthtone
          </p>

          <h1 className="mt-4 text-5xl font-black leading-tight text-[#fff8e8] md:text-7xl">
            This is a room for real music.
          </h1>

          <div className="mt-10 space-y-8 text-lg leading-9 text-[#f4ead6]/75">
            <p>
              Earthtone Analog was created as a place where artists can slow
              down, breathe, listen, and make something honest.
            </p>

            <p>
              It is not meant to feel like a sterile commercial studio. It is a
              creative house — a warm room, a gathering place, a place for songs,
              stories, laughter, food, and the kind of performances that happen
              when people feel safe enough to be human.
            </p>

            <p>
              The heart of the studio is the great music room: spacious, natural,
              soulful, and alive. The goal is simple — capture the feeling, not
              just the sound.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            <div className="rounded-[2rem] border border-[#f4ead6]/10 bg-[#201a13] p-7">
              <Home className="mb-5 h-8 w-8 text-[#c9974d]" />
              <h2 className="text-2xl font-black text-[#fff8e8]">A home</h2>
              <p className="mt-3 text-[#f4ead6]/65">
                Comfortable, private, warm, and creatively alive.
              </p>
            </div>

            <div className="rounded-[2rem] border border-[#f4ead6]/10 bg-[#201a13] p-7">
              <Music className="mb-5 h-8 w-8 text-[#c9974d]" />
              <h2 className="text-2xl font-black text-[#fff8e8]">A room</h2>
              <p className="mt-3 text-[#f4ead6]/65">
                Built for presence, resonance, and live human takes.
              </p>
            </div>

            <div className="rounded-[2rem] border border-[#f4ead6]/10 bg-[#201a13] p-7">
              <Heart className="mb-5 h-8 w-8 text-[#b8322a]" />
              <h2 className="text-2xl font-black text-[#fff8e8]">A memory</h2>
              <p className="mt-3 text-[#f4ead6]/65">
                The song, the story, and the people captured together.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}