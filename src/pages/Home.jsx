import { motion } from "framer-motion";
import { ArrowRight, PlayCircle, Sparkles, Waves } from "lucide-react";
import Header from "../components/Header.jsx";
import HeroBackground from "../components/HeroBackground.jsx";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#11100d] text-[#f4ead6]">
      <Header />

      <section className="relative overflow-hidden px-6 py-24 md:px-12 lg:px-20">
        <HeroBackground src="/gallery/earthtone-24track-tapemachine%20-%20Copy.JPEG" />

        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#c9974d]/40 bg-[#1d1a15]/70 px-4 py-2 text-sm text-[#e6c17a]">
              <Sparkles className="h-4 w-4" />
              Southern Indiana recording studio & creative retreat
            </div>

            <h1 className="text-5xl font-black leading-tight text-[#fff8e8] md:text-7xl">
              Record where the room has a soul.
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-[#f4ead6]/75">
              Earthtone Analog is a warm, private recording space built for music,
              conversation, collaboration, and performances that feel alive.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="/book"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-[#b8322a] px-7 py-4 font-bold text-white hover:bg-[#d03c32]"
              >
                Book a session <ArrowRight className="h-5 w-5" />
              </a>

              <a
                href="/studio"
                className="inline-flex items-center justify-center gap-3 rounded-full border border-[#c9974d]/60 px-7 py-4 font-bold text-[#f4ead6] hover:bg-white/5"
              >
                <PlayCircle className="h-5 w-5 text-[#c9974d]" />
                Explore the studio
              </a>
            </div>
          </motion.div>

          <div className="rounded-[2rem] border border-[#c9974d]/30 bg-[#1b1712]/30 p-6 shadow-2xl backdrop-blur-md">
            <div className="aspect-[4/5] rounded-[1.5rem] bg-gradient-to-br from-[#6e4b25]/30 via-[#17130f]/40 to-[#090807]/60 p-8 backdrop-blur-sm">
              <Waves className="mb-8 h-14 w-14 text-[#c9974d]" />
              <p className="text-sm uppercase tracking-[0.35em] text-[#e6c17a]">
                Analog warmth
              </p>
              <h2 className="mt-4 text-4xl font-black text-[#fff8e8]">
                Music. Food. Story. Sound.
              </h2>
              <p className="mt-6 text-[#f4ead6]/70">
                A destination studio experience for artists who want more than
                sterile tracking rooms and rushed sessions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
