import { Link } from "react-router-dom";
import Header from "../components/Header.jsx";
import HeroBackground from "../components/HeroBackground.jsx";
import { ArrowRight, Briefcase, Trophy, Users } from "lucide-react";

const offerings = [
  {
    title: "Corporate Retreats",
    to: "/corporate-retreats",
    icon: Briefcase,
    text: "A private creative retreat destination for leadership teams, founders, executives, recruiters, and sales teams building the future of work.",
  },
  {
    title: "Corporate Rewards",
    to: "/corporate-rewards",
    icon: Trophy,
    text: "Turn employee achievement into unforgettable experiences — music, leadership circles, livestream events, retreats, and creative rewards.",
  },
  {
    title: "Leadership Circles",
    to: "/leadership-circles",
    icon: Users,
    text: "Curated gatherings where leaders, creators, entrepreneurs, recruiters, and innovators share ideas, build relationships, and shape the future.",
  },
];

export default function Corporate() {
  return (
    <main className="min-h-screen bg-[#11100d] text-[#f4ead6]">
      <Header />

      <section className="relative overflow-hidden px-6 py-24 md:px-12 lg:px-20">
        <HeroBackground src="/gallery/earthtone-session9%20-%20Copy.JPEG" />
        <div className="relative z-10 mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-[0.35em] text-[#c9974d]">
            Corporate
          </p>

          <h1 className="mt-4 max-w-5xl text-5xl font-black leading-tight text-[#fff8e8] md:text-7xl">
            Where companies come to slow down and build clearly.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#f4ead6]/75">
            Earthtone Analog hosts leadership teams, sales teams, founders, and
            corporate partners for retreats, rewards, and curated gatherings —
            anchored in music, conversation, and creative space.
          </p>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {offerings.map(({ title, to, icon: Icon, text }) => (
              <Link
                key={title}
                to={to}
                className="group flex flex-col rounded-[2rem] border border-[#f4ead6]/10 bg-[#201a13] p-7 hover:border-[#c9974d]/60"
              >
                <Icon className="mb-6 h-8 w-8 text-[#c9974d]" />
                <h2 className="text-3xl font-black text-[#fff8e8]">{title}</h2>
                <p className="mt-5 flex-1 leading-8 text-[#f4ead6]/70">{text}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-[#c9974d] group-hover:text-[#e3c98d]">
                  Learn more <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
