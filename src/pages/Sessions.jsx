import { useState } from "react";
import Header from "../components/Header.jsx";
import HeroBackground from "../components/HeroBackground.jsx";
import {
  featuredSession,
  sessionClips,
  additionalSessions,
} from "../data/sessionArchive.js";
import { PlayCircle, Video } from "lucide-react";

const PREVIEW_PARAGRAPHS = 2;

export default function Sessions() {
  const [expanded, setExpanded] = useState(false);

  const description = Array.isArray(featuredSession.description)
    ? featuredSession.description
    : [featuredSession.description];

  const canCollapse = description.length > PREVIEW_PARAGRAPHS;
  const visibleParagraphs = expanded
    ? description
    : description.slice(0, PREVIEW_PARAGRAPHS);

  return (
    <main className="min-h-screen bg-[#11100d] text-[#f4ead6]">
      <Header />

      <section className="relative overflow-hidden px-6 py-20 md:px-12 lg:px-20">
        <HeroBackground src="/gallery/earthtone-session7%20-%20Copy.JPEG" />
        <div className="relative z-10 mx-auto max-w-7xl">
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

          <div className="mt-14 overflow-hidden rounded-[2rem] border border-[#c9974d]/30 bg-[#1b1712] shadow-2xl">
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

            <div className="p-7 md:p-10">
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

              <div className="mt-4 max-w-3xl space-y-4 leading-8 text-[#f4ead6]/70">
                {visibleParagraphs.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>

              {canCollapse && (
                <button
                  type="button"
                  onClick={() => setExpanded((v) => !v)}
                  className="mt-5 text-sm font-bold uppercase tracking-[0.3em] text-[#c9974d] hover:text-[#e0ad5d]"
                >
                  {expanded ? "Read less" : "Read more"}
                </button>
              )}
            </div>
          </div>

          {additionalSessions.length > 0 && (
            <div className="mt-16">
              <div className="flex items-center gap-3 text-[#c9974d]">
                <PlayCircle className="h-6 w-6" />
                <span className="text-sm uppercase tracking-[0.25em]">
                  More Sessions
                </span>
              </div>

              <h2 className="mt-3 text-4xl font-black text-[#fff8e8]">
                Other livestreams from the room.
              </h2>

              <div className="mt-8 grid gap-6 lg:grid-cols-2">
                {additionalSessions.map((session) => (
                  <article
                    key={session.youtubeId}
                    className="overflow-hidden rounded-[1.5rem] border border-[#f4ead6]/10 bg-[#201a13]"
                  >
                    <div className="aspect-video">
                      <iframe
                        className="h-full w-full"
                        src={`https://www.youtube.com/embed/${session.youtubeId}?${new URLSearchParams(
                          {
                            ...(session.si ? { si: session.si } : {}),
                            ...(session.startSeconds
                              ? { start: String(session.startSeconds) }
                              : {}),
                          }
                        ).toString()}`}
                        title={session.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                      />
                    </div>
                    <div className="p-5">
                      <h3 className="text-lg font-black text-[#fff8e8]">
                        {session.title}
                      </h3>
                      {session.livestreamDate && (
                        <p className="mt-2 text-xs uppercase tracking-[0.3em] text-[#c9974d]/80">
                          Livestreamed {session.livestreamDate}
                        </p>
                      )}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          )}

          {sessionClips.length > 0 && (
            <div className="mt-16">
              <div className="flex items-center gap-3 text-[#c9974d]">
                <Video className="h-6 w-6" />
                <span className="text-sm uppercase tracking-[0.25em]">
                  Moments
                </span>
              </div>

              <h2 className="mt-3 text-4xl font-black text-[#fff8e8]">
                Short chapters from the room.
              </h2>

              <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {sessionClips.map((clip) => (
                  <figure
                    key={clip.src ?? clip.youtubeId}
                    className="overflow-hidden rounded-[1.5rem] border border-[#f4ead6]/10 bg-[#201a13]"
                  >
                    <div className="aspect-video bg-black">
                      {clip.youtubeId ? (
                        <iframe
                          className="h-full w-full"
                          src={`https://www.youtube.com/embed/${clip.youtubeId}?${new URLSearchParams(
                            {
                              ...(clip.si ? { si: clip.si } : {}),
                              ...(clip.startSeconds
                                ? { start: String(clip.startSeconds) }
                                : {}),
                            }
                          ).toString()}`}
                          title={clip.title}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          referrerPolicy="strict-origin-when-cross-origin"
                          allowFullScreen
                        />
                      ) : (
                        <video
                          src={encodeURI(clip.src)}
                          controls
                          playsInline
                          preload="metadata"
                          className="block h-full w-full object-cover"
                        />
                      )}
                    </div>
                    <figcaption className="p-5">
                      <h3 className="text-lg font-black text-[#fff8e8]">
                        {clip.title}
                      </h3>
                      {clip.caption && (
                        <p className="mt-1 text-sm leading-6 text-[#f4ead6]/70">
                          {clip.caption}
                        </p>
                      )}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
