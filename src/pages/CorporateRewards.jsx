import React from "react";
import Header from "../components/Header.jsx";

export default function CorporateRewards() {
  return (
    <main className="min-h-screen bg-[#11100c] text-[#f7efe2]">
      <Header />

      <section className="px-6 py-24 text-center bg-gradient-to-b from-[#1f1a13] to-[#11100c]">
        <p className="uppercase tracking-[0.3em] text-sm text-[#c7a76c]">
          Corporate Experiences
        </p>

        <h1 className="mt-6 text-4xl md:text-6xl font-serif font-bold">
          Reward your team with something they will actually remember.
        </h1>

        <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-[#d8c9b1]">
          Earthtone Analog creates private music-centered experiences for
          companies, leadership teams, clients, and employee groups. From
          intimate listening sessions to creative retreats and live studio
          experiences, we help organizations celebrate people in a way that
          feels personal, meaningful, and unforgettable.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#experiences"
            className="rounded-full bg-[#c7a76c] px-8 py-3 text-[#11100c] font-semibold hover:bg-[#e3c98d]"
          >
            Explore Experiences
          </a>

          <a
            href="#contact"
            className="rounded-full border border-[#c7a76c] px-8 py-3 text-[#f7efe2] hover:bg-[#c7a76c] hover:text-[#11100c]"
          >
            Plan a Private Event
          </a>
        </div>
      </section>

      <section className="px-6 py-20 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Celebrate Achievement",
              text: "Honor employees, clients, partners, or leadership teams with a private experience that feels more meaningful than a standard corporate gift.",
            },
            {
              title: "Gather with Intention",
              text: "Bring people together inside a warm, creative studio environment designed for conversation, music, reflection, and connection.",
            },
            {
              title: "Create a Lasting Memory",
              text: "From live performances to private listening sessions, Earthtone Analog helps turn recognition into a shared experience people remember.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-[#3a3125] bg-[#18150f] p-8"
            >
              <h3 className="text-2xl font-serif text-[#c7a76c]">
                {item.title}
              </h3>
              <p className="mt-4 text-[#d8c9b1]">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="experiences" className="px-6 py-20 bg-[#18150f]">
        <div className="max-w-6xl mx-auto text-center">
          <p className="uppercase tracking-[0.3em] text-sm text-[#c7a76c]">
            Private Studio Offerings
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-serif">
            Designed for Teams, Clients, and Leaders
          </h2>

          <div className="mt-12 grid md:grid-cols-3 gap-8 text-left">
            {[
              {
                name: "Private Listening Session",
                text: "A curated evening inside Earthtone Analog with music, conversation, and a relaxed studio atmosphere for small groups.",
                features: [
                  "Ideal for client appreciation",
                  "Great for leadership teams",
                  "Intimate and memorable setting",
                ],
              },
              {
                name: "Live Studio Experience",
                text: "A private performance or livestream-style studio event designed around your company, team, or special occasion.",
                features: [
                  "Live music experience",
                  "Optional recording or media capture",
                  "Custom event flow",
                ],
              },
              {
                name: "Creative Retreat",
                text: "A deeper gathering for teams who need space to reset, reconnect, brainstorm, and experience something outside the usual meeting room.",
                features: [
                  "Creative team environment",
                  "Conversation-centered format",
                  "Half-day or full-day options",
                ],
              },
            ].map((item) => (
              <div
                key={item.name}
                className="rounded-3xl p-8 border border-[#3a3125] bg-[#11100c]"
              >
                <h3 className="text-3xl font-serif text-[#f7efe2]">
                  {item.name}
                </h3>

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
          Experience Ideas
        </p>

        <h2 className="mt-4 text-4xl md:text-5xl font-serif text-center">
          Ways to Gather at Earthtone Analog
        </h2>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            "Employee Appreciation Events",
            "Client Thank-You Nights",
            "Leadership Retreats",
            "Private Listening Sessions",
            "Songwriter Circles",
            "Creative Workshops",
            "Studio Recording Days",
            "Livestream Events",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-[#3a3125] bg-[#18150f] p-6 text-center text-[#d8c9b1]"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-20 bg-[#1f1a13]">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif">
            A More Human Way to Recognize People
          </h2>

          <p className="mt-6 text-lg text-[#d8c9b1]">
            Gift cards are forgotten. Meetings blur together. But a night of
            music, conversation, and shared experience can become part of a
            team’s story. Earthtone Analog helps companies celebrate people in a
            way that feels warm, personal, and real.
          </p>
        </div>
      </section>

      <section id="contact" className="px-6 py-24 text-center">
        <h2 className="text-4xl md:text-5xl font-serif">
          Plan a Corporate Experience
        </h2>

        <p className="mt-6 max-w-2xl mx-auto text-[#d8c9b1]">
          Tell us a little about your team, occasion, and ideal date. We will
          help design a private Earthtone Analog experience that fits your
          group.
        </p>

        <a
          href="mailto:desiree@geniuslovescompany.org?subject=Earthtone Analog Corporate Experience"
          className="mt-10 inline-block rounded-full bg-[#c7a76c] px-10 py-4 text-[#11100c] font-semibold hover:bg-[#e3c98d]"
        >
          Start Planning
        </a>
      </section>
    </main>
  );
}