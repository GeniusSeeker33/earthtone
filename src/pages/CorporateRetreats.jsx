import React from "react";
import Header from "../components/Header.jsx";

export default function CorporateRetreats() {
  return (
    <main className="min-h-screen bg-[#11100c] text-[#f7efe2]">
      <Header />
      <section className="px-6 py-24 text-center bg-gradient-to-b from-[#1f1a13] to-[#11100c]">
        <p className="uppercase tracking-[0.3em] text-sm text-[#c7a76c]">
          Earthtone Analog
        </p>

        <h1 className="mt-6 text-4xl md:text-6xl font-serif font-bold">
          Corporate Retreats
        </h1>

        <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-[#d8c9b1]">
          A private creative retreat destination for leadership teams,
          founders, executives, recruiters, sales teams, and companies building
          the future of work.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#packages"
            className="rounded-full bg-[#c7a76c] px-8 py-3 text-[#11100c] font-semibold hover:bg-[#e3c98d]"
          >
            View Retreat Packages
          </a>

          <a
            href="#contact"
            className="rounded-full border border-[#c7a76c] px-8 py-3 text-[#f7efe2] hover:bg-[#c7a76c] hover:text-[#11100c]"
          >
            Plan a Retreat
          </a>
        </div>
      </section>

      <section className="px-6 py-20 max-w-5xl mx-auto text-center">
        <p className="uppercase tracking-[0.3em] text-sm text-[#c7a76c]">
          Why Earthtone
        </p>

        <h2 className="mt-4 text-4xl md:text-5xl font-serif">
          Step Outside the Boardroom
        </h2>

        <p className="mt-6 text-lg text-[#d8c9b1]">
          Earthtone Analog gives teams a place to slow down, think clearly,
          create honestly, and reconnect with purpose. Our retreats combine
          music, conversation, strategy, creative workshops, leadership circles,
          livestream production, and private studio experiences.
        </p>
      </section>

      <section id="packages" className="px-6 py-20 bg-[#18150f]">
        <div className="max-w-6xl mx-auto">
          <p className="uppercase tracking-[0.3em] text-sm text-[#c7a76c] text-center">
            Retreat Packages
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-serif text-center">
            Designed for Teams Ready to Build
          </h2>

          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Half-Day Reset",
                price: "$2,500+",
                text: "A focused retreat for leadership conversations, planning sessions, team alignment, or private creative reset.",
                features: [
                  "Up to 4 hours",
                  "Leadership circle format",
                  "Facilitated discussion",
                  "Creative environment",
                ],
              },
              {
                name: "Full-Day Offsite",
                price: "$5,000+",
                text: "A full strategic offsite for executive teams, sales teams, recruiting teams, or company leadership groups.",
                features: [
                  "Up to 8 hours",
                  "Workshop space",
                  "Breakout sessions",
                  "Optional livestream add-on",
                ],
              },
              {
                name: "Weekend Retreat",
                price: "$12,500+",
                text: "A premium experience for deeper leadership work, creative development, team connection, and long-form strategy.",
                features: [
                  "Multi-day experience",
                  "Private retreat format",
                  "Music and studio access",
                  "Custom agenda",
                ],
              },
              {
                name: "Executive Experience",
                price: "Custom Quote",
                text: "A fully customized experience for founders, boards, corporate partners, sponsors, and VIP leadership teams.",
                features: [
                  "Private access",
                  "Custom facilitation",
                  "Recording/livestream options",
                  "Concierge planning",
                ],
              },
            ].map((item) => (
              <div
                key={item.name}
                className="rounded-3xl border border-[#3a3125] bg-[#11100c] p-8"
              >
                <h3 className="text-2xl font-serif text-[#f7efe2]">
                  {item.name}
                </h3>

                <p className="mt-4 text-2xl text-[#c7a76c] font-semibold">
                  {item.price}
                </p>

                <p className="mt-4 text-[#d8c9b1]">{item.text}</p>

                <ul className="mt-6 space-y-3 text-[#d8c9b1]">
                  {item.features.map((feature) => (
                    <li key={feature}>✓ {feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 max-w-6xl mx-auto">
        <p className="uppercase tracking-[0.3em] text-sm text-[#c7a76c] text-center">
          Retreat Themes
        </p>

        <h2 className="mt-4 text-4xl md:text-5xl font-serif text-center">
          What Teams Can Build Here
        </h2>

        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Leadership & Culture",
              text: "Team alignment, communication, trust, values, conflict resolution, and leadership development.",
            },
            {
              title: "Sales & Performance",
              text: "Sales training, role play, performance reviews, incentive planning, recognition, and team motivation.",
            },
            {
              title: "Talent & Hiring",
              text: "Recruiting strategy, employer branding, referral campaigns, workforce planning, and GeniusSeeker workshops.",
            },
            {
              title: "AI & Innovation",
              text: "Automation strategy, future-of-work planning, AI adoption, creative infrastructure, and operational design.",
            },
            {
              title: "Music & Creativity",
              text: "Songwriter circles, listening sessions, creative workshops, recording sessions, and livestream events.",
            },
            {
              title: "Legacy & Vision",
              text: "Founder retreats, succession planning, family business conversations, mentorship, and long-term impact.",
            },
          ].map((theme) => (
            <div
              key={theme.title}
              className="rounded-3xl border border-[#3a3125] bg-[#18150f] p-8"
            >
              <h3 className="text-2xl font-serif text-[#c7a76c]">
                {theme.title}
              </h3>

              <p className="mt-4 text-[#d8c9b1]">{theme.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-20 bg-[#1f1a13]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="uppercase tracking-[0.3em] text-sm text-[#c7a76c]">
              Add-On Experiences
            </p>

            <h2 className="mt-4 text-4xl md:text-5xl font-serif">
              Make the Retreat Unforgettable
            </h2>

            <p className="mt-6 text-[#d8c9b1]">
              Retreats can be expanded with music, livestreaming, private
              recording sessions, executive interviews, employee recognition,
              leadership circles, and custom GeniusSeeker reward experiences.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "Livestream Production",
              "Private Recording Session",
              "Leadership Circle",
              "Executive Interviews",
              "Employee Recognition",
              "Songwriter Circle",
              "Corporate Dinner",
              "Custom Workshop",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-[#3a3125] bg-[#11100c] p-5 text-center text-[#d8c9b1]"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 max-w-5xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-serif">
          Built for Corporate Partners
        </h2>

        <p className="mt-6 text-lg text-[#d8c9b1]">
          Corporate retreats can be purchased directly or included as part of a
          GeniusSeeker corporate partnership. Builder, Innovator, and Legacy
          partners can use Earthtone retreats as high-value rewards, leadership
          development experiences, or executive strategy sessions.
        </p>

        <a
          href="/corporate-rewards"
          className="mt-10 inline-block rounded-full border border-[#c7a76c] px-8 py-3 text-[#f7efe2] hover:bg-[#c7a76c] hover:text-[#11100c]"
        >
          View Corporate Rewards
        </a>
      </section>

      <section id="contact" className="px-6 py-24 text-center bg-[#18150f]">
        <h2 className="text-4xl md:text-5xl font-serif">
          Plan Your Retreat
        </h2>

        <p className="mt-6 max-w-2xl mx-auto text-[#d8c9b1]">
          Tell us what your team is building, what kind of experience you want
          to create, and how Earthtone Analog can support the moment.
        </p>

        <a
          href="mailto:desiree@geniuslovescompany.org?subject=Earthtone Corporate Retreat Inquiry"
          className="mt-10 inline-block rounded-full bg-[#c7a76c] px-10 py-4 text-[#11100c] font-semibold hover:bg-[#e3c98d]"
        >
          Start Planning
        </a>
      </section>
    </main>
  );
}