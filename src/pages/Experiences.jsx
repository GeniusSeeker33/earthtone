import Header from "../components/Header.jsx";
import { experiences } from "../data/siteContent.js";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Experiences() {
  return (
    <main className="min-h-screen bg-[#11100d] text-[#f4ead6]">
      <Header />

      <section className="px-6 py-24 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-[0.35em] text-[#c9974d]">
            Experiences
          </p>

          <h1 className="mt-4 max-w-5xl text-5xl font-black leading-tight text-[#fff8e8] md:text-7xl">
            More than recording. A memory you can hear.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#f4ead6]/75">
            Earthtone Analog is designed for artists who want the room, the song,
            the story, and the human moment captured together.
          </p>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {experiences.map((item) => (
              <div
                key={item.title}
                className="rounded-[2rem] border border-[#f4ead6]/10 bg-[#201a13] p-7"
              >
                <Sparkles className="mb-6 h-8 w-8 text-[#c9974d]" />
                <h2 className="text-3xl font-black text-[#fff8e8]">
                  {item.title}
                </h2>
                <p className="mt-3 text-[#c9974d]">{item.price}</p>
                <p className="mt-5 leading-8 text-[#f4ead6]/70">{item.text}</p>
              </div>
            ))}
          </div>

          <a
            href="/book"
            className="mt-12 inline-flex items-center gap-3 rounded-full bg-[#b8322a] px-7 py-4 font-bold text-white hover:bg-[#d03c32]"
          >
            Plan a session <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </section>
    </main>
  );
}