import Header from "../components/Header.jsx";
import HeroBackground from "../components/HeroBackground.jsx";
import { ArrowRight, CalendarDays } from "lucide-react";

export default function Booking() {
  return (
    <main className="min-h-screen bg-[#11100d] text-[#f4ead6]">
      <Header />

      <section className="relative overflow-hidden px-6 py-24 md:px-12 lg:px-20">
        <HeroBackground src="/gallery/earthtone-outside-winter%20-%20Copy.JPEG" />
        <div className="relative z-10 mx-auto max-w-5xl rounded-[2.5rem] border border-[#c9974d]/30 bg-[#221810]/70 p-8 shadow-2xl backdrop-blur-md md:p-14">
          <p className="text-sm font-bold uppercase tracking-[0.35em] text-[#c9974d]">
            Now Booking
          </p>

          <h1 className="mt-4 text-5xl font-black text-[#fff8e8] md:text-7xl">
            Let’s bring the song into the room.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#f4ead6]/75">
            Bands can book hourly sessions, single days, or overnight stays.
            The entire studio is available for overnight bookings by the day,
            the week, or the month — bring the project, sleep on the songs,
            and wake up where you left off.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            <div className="rounded-2xl border border-[#f4ead6]/10 bg-black/20 px-5 py-4">
              <p className="text-xs uppercase tracking-[0.25em] text-[#c9974d]">
                Hourly
              </p>
              <p className="mt-2 text-sm leading-6 text-[#f4ead6]/80">
                Tracking sessions, single songs, demos, voiceovers.
              </p>
            </div>
            <div className="rounded-2xl border border-[#f4ead6]/10 bg-black/20 px-5 py-4">
              <p className="text-xs uppercase tracking-[0.25em] text-[#c9974d]">
                Day sessions
              </p>
              <p className="mt-2 text-sm leading-6 text-[#f4ead6]/80">
                Full-band days, live takes, content capture.
              </p>
            </div>
            <div className="rounded-2xl border border-[#f4ead6]/10 bg-black/20 px-5 py-4">
              <p className="text-xs uppercase tracking-[0.25em] text-[#c9974d]">
                Overnight
              </p>
              <p className="mt-2 text-sm leading-6 text-[#f4ead6]/80">
                The whole studio, by the day, week, or month.
              </p>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="mailto:info@earthtoneanalog.com"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-[#c9974d] px-7 py-4 font-black text-[#11100d] hover:bg-[#e0ad5d]"
            >
              Email the studio <ArrowRight className="h-5 w-5" />
            </a>

            <a
              href="/"
              className="inline-flex items-center justify-center gap-3 rounded-full border border-[#f4ead6]/20 px-7 py-4 font-bold text-[#f4ead6] hover:bg-white/5"
            >
              <CalendarDays className="h-5 w-5 text-[#c9974d]" />
              Back home
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}