import Header from "../components/Header.jsx";
import HeroBackground from "../components/HeroBackground.jsx";
import { showcases } from "../data/showcases.js";
import { Film, Mic2 } from "lucide-react";

function youtubeEmbedSrc({ youtubeId, si, startSeconds }) {
  const params = new URLSearchParams({
    ...(si ? { si } : {}),
    ...(startSeconds ? { start: String(startSeconds) } : {}),
  }).toString();
  return `https://www.youtube.com/embed/${youtubeId}${params ? `?${params}` : ""}`;
}

function ShowcaseSection({ event, hideTopRule }) {
  return (
    <section
      className={`px-6 py-20 md:px-12 lg:px-20 ${hideTopRule ? "" : "border-t border-[#f4ead6]/10"}`}
      id={event.slug}
    >
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-bold uppercase tracking-[0.35em] text-[#c9974d]">
          {event.venue}
        </p>

        <h2 className="mt-3 text-4xl font-black leading-tight text-[#fff8e8] md:text-5xl">
          {event.date}
        </h2>

        {event.intro && (
          <p className="mt-5 max-w-3xl text-lg leading-8 text-[#f4ead6]/75">
            {event.intro}
          </p>
        )}

        {event.compilation && (
          <div className="mt-10 overflow-hidden rounded-[2rem] border border-[#c9974d]/30 bg-[#1b1712]/70 shadow-2xl backdrop-blur-md">
            <div className="aspect-video">
              <iframe
                className="h-full w-full"
                src={youtubeEmbedSrc(event.compilation)}
                title={event.compilation.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
            <div className="p-7">
              <div className="mb-4 flex items-center gap-3 text-[#c9974d]">
                <Film className="h-6 w-6" />
                <span className="text-sm uppercase tracking-[0.25em]">
                  Compilation
                </span>
              </div>
              <h3 className="text-3xl font-black text-[#fff8e8]">
                {event.compilation.title}
              </h3>
              {event.compilation.caption && (
                <p className="mt-4 leading-8 text-[#f4ead6]/70">
                  {event.compilation.caption}
                </p>
              )}
            </div>
          </div>
        )}

        <div className="mt-10 flex items-center gap-3 text-[#c9974d]">
          <Mic2 className="h-6 w-6" />
          <span className="text-sm uppercase tracking-[0.25em]">
            Featured Artists
          </span>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          {event.artists.map((artist) => (
            <article
              key={artist.youtubeId}
              className="overflow-hidden rounded-[1.5rem] border border-[#f4ead6]/10 bg-[#201a13]"
            >
              <div className="aspect-video">
                <iframe
                  className="h-full w-full"
                  src={youtubeEmbedSrc(artist)}
                  title={artist.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-black text-[#fff8e8]">
                  {artist.title}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Showcases() {
  return (
    <main className="min-h-screen bg-[#11100d] text-[#f4ead6]">
      <Header />

      <section className="relative overflow-hidden px-6 py-20 md:px-12 lg:px-20">
        <HeroBackground src="/gallery/earthtone-warren-ray-session%20-%20Copy.JPEG" />
        <div className="relative z-10 mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-[0.35em] text-[#c9974d]">
            Showcases
          </p>
          <h1 className="mt-4 max-w-5xl text-5xl font-black leading-tight text-[#fff8e8] md:text-7xl">
            Earthtone takes the room on the road.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#f4ead6]/75">
            Curated nights, live recordings, and Earthtone artists on stages
            beyond the studio walls.
          </p>
        </div>
      </section>

      {showcases.map((event, i) => (
        <ShowcaseSection key={event.slug} event={event} hideTopRule={i === 0} />
      ))}
    </main>
  );
}
