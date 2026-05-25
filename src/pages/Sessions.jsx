import Header from "../components/Header.jsx";
import { featuredSession, moments } from "../data/sessionArchive.js";
import { PlayCircle, Film, Heart } from "lucide-react";

export default function Sessions() {
  return (
    <main className="min-h-screen bg-[#11100d] text-[#f4ead6]">
      <Header />

      <section className="px-6 py-20 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-[0.35em] text-[#c9974d]">
            Session Archive
          </p>

          <h1 className="mt-4 max-w-5xl text-5xl font-black leading-tight text-[#fff8e8] md:text-7xl">
            The room remembers every song.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#f4ead6]/75">
            Earthtone Analog is more than a studio. It is a living archive of
            performances, conversations, first takes, late nights, and the human
            moments that happen between songs.
          </p>

          <div className="mt-14 grid gap-8 lg:grid-cols-[1.3fr_0.7fr]">
            <div className="overflow-hidden rounded-[2rem] border border-[#c9974d]/30 bg-[#1b1712] shadow-2xl">
              <div className="aspect-video">
                <iframe
                  className="h-full w-full"
                  src={`https://www.youtube.com/embed/${featuredSession.youtubeId}?${new URLSearchParams(
                    {
                      ...(featuredSession.si ? { si: featuredSession.si } : {}),
                      ...(featuredSession.startSeconds
                        ? { start: String(featuredSession.startSeconds) }
                        : {}),
                    }
                  ).toString()}`}
                  title={featuredSession.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>

              <div className="p-7">
                <div className="mb-4 flex items-center gap-3 text-[#c9974d]">
                  <PlayCircle className="h-6 w-6" />
                  <span className="text-sm uppercase tracking-[0.25em]">
                    Featured Session
                  </span>
                </div>

                <h2 className="text-3xl font-black text-[#fff8e8]">
                  {featuredSession.title}
                </h2>

                {featuredSession.livestreamDate && (
                  <p className="mt-2 text-xs uppercase tracking-[0.3em] text-[#c9974d]/80">
                    Livestreamed {featuredSession.livestreamDate}
                  </p>
                )}

                <div className="mt-4 space-y-4 leading-8 text-[#f4ead6]/70">
                  {(Array.isArray(featuredSession.description)
                    ? featuredSession.description
                    : [featuredSession.description]
                  ).map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-[#f4ead6]/10 bg-[#201a13] p-7">
              <Film className="mb-5 h-8 w-8 text-[#c9974d]" />

              <h2 className="text-3xl font-black text-[#fff8e8]">
                Build this into a living film wall.
              </h2>

              <p className="mt-4 leading-7 text-[#f4ead6]/70">
                Your long-form livestreams can become short emotional chapters:
                the interview, the opening, the song, the laughter, the final
                note.
              </p>

              <div className="mt-7 space-y-3">
                {moments.map((moment) => (
                  <div
                    key={moment}
                    className="rounded-2xl border border-[#f4ead6]/10 bg-black/20 px-4 py-3 text-sm text-[#f4ead6]/80"
                  >
                    {moment}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-16 rounded-[2rem] border border-[#c9974d]/20 bg-[#221810] p-8 md:p-12">
            <Heart className="mb-5 h-8 w-8 text-[#b8322a]" />

            <h2 className="text-4xl font-black text-[#fff8e8]">
              Suggested edit for this video
            </h2>

            <p className="mt-5 max-w-4xl text-lg leading-8 text-[#f4ead6]/75">
              Trim one strong song into a 60–120 second homepage hero loop.
              Keep the full livestream embedded here on the Sessions page.
              Then use the “before the session” interview as a short story clip
              to humanize the band and the room.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}