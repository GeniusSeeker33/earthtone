import React from "react";
import Header from "../components/Header.jsx";

export default function LeadershipCircles() {
  return (
    <main className="min-h-screen bg-[#11100c] text-[#f7efe2]">
      <Header />
      <section className="px-6 py-24 text-center bg-gradient-to-b from-[#1f1a13] to-[#11100c]">
        <p className="uppercase tracking-[0.3em] text-sm text-[#c7a76c]">
          Earthtone Analog
        </p>

        <h1 className="mt-6 text-4xl md:text-6xl font-serif font-bold">
          Leadership Circles
        </h1>

        <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-[#d8c9b1]">
          Curated gatherings where leaders, creators, entrepreneurs, recruiters,
          and innovators come together to share ideas, build relationships, and
          shape the future.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#circle-types"
            className="rounded-full bg-[#c7a76c] px-8 py-3 text-[#11100c] font-semibold hover:bg-[#e3c98d]"
          >
            Explore Circles
          </a>

          <a
            href="#contact"
            className="rounded-full border border-[#c7a76c] px-8 py-3 text-[#f7efe2] hover:bg-[#c7a76c] hover:text-[#11100c]"
          >
            Request Invitation
          </a>
        </div>
      </section>

      <section className="px-6 py-20 max-w-5xl mx-auto text-center">
        <p className="uppercase tracking-[0.3em] text-sm text-[#c7a76c]">
          What Is A Leadership Circle?
        </p>

        <h2 className="mt-4 text-4xl md:text-5xl font-serif">
          A Different Kind of Business Gathering
        </h2>

        <p className="mt-6 text-lg text-[#d8c9b1]">
          Leadership Circles are intimate, intentional gatherings hosted at
          Earthtone Analog. They are designed for meaningful conversation,
          practical wisdom, strategic relationships, and creative inspiration.
        </p>
      </section>

      <section id="circle-types" className="px-6 py-20 bg-[#18150f]">
        <div className="max-w-6xl mx-auto">
          <p className="uppercase tracking-[0.3em] text-sm text-[#c7a76c] text-center">
            Circle Types
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-serif text-center">
            Choose the Room That Matches Your Mission
          </h2>

          <div className="mt-12 grid md:grid-cols-2 gap-8">
            {[
              {
                name: "Executive Circle",
                schedule: "Monthly",
                text: "For business owners, executives, managers, and leaders focused on growth, hiring, culture, and team performance.",
                topics: ["Growth", "Hiring", "Culture", "Leadership"],
              },
              {
                name: "Innovation Circle",
                schedule: "Quarterly",
                text: "For builders exploring AI, automation, future-of-work models, technology, and new business infrastructure.",
                topics: ["AI", "Automation", "Talent", "Future of Work"],
              },
              {
                name: "Creator Circle",
                schedule: "Monthly",
                text: "For musicians, artists, storytellers, media builders, and personal brands creating meaningful work.",
                topics: ["Music", "Media", "Storytelling", "Brand"],
              },
              {
                name: "Legacy Circle",
                schedule: "Invite Only",
                text: "For leaders thinking deeply about wealth, family, mentorship, succession, stewardship, and community impact.",
                topics: ["Legacy", "Mentorship", "Community", "Impact"],
              },
            ].map((circle) => (
              <div
                key={circle.name}
                className="rounded-3xl border border-[#3a3125] bg-[#11100c] p-8"
              >
                <p className="text-sm uppercase tracking-[0.2em] text-[#c7a76c]">
                  {circle.schedule}
                </p>

                <h3 className="mt-3 text-3xl font-serif">{circle.name}</h3>

                <p className="mt-4 text-[#d8c9b1]">{circle.text}</p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {circle.topics.map((topic) => (
                    <span
                      key={topic}
                      className="rounded-full border border-[#3a3125] px-4 py-2 text-sm text-[#d8c9b1]"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 max-w-6xl mx-auto">
        <p className="uppercase tracking-[0.3em] text-sm text-[#c7a76c] text-center">
          Upcoming Events
        </p>

        <h2 className="mt-4 text-4xl md:text-5xl font-serif text-center">
          Reserve Your Seat
        </h2>

        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {[
            {
              date: "Coming Soon",
              title: "Executive Growth Circle",
              seats: "Limited seating",
            },
            {
              date: "Coming Soon",
              title: "AI & The Future of Work",
              seats: "Limited seating",
            },
            {
              date: "Coming Soon",
              title: "Creator Economy Circle",
              seats: "Limited seating",
            },
          ].map((event) => (
            <div
              key={event.title}
              className="rounded-3xl border border-[#3a3125] bg-[#18150f] p-8"
            >
              <p className="text-[#c7a76c]">{event.date}</p>

              <h3 className="mt-3 text-2xl font-serif">{event.title}</h3>

              <p className="mt-3 text-[#d8c9b1]">{event.seats}</p>

              <a
                href="#contact"
                className="mt-6 inline-block rounded-full bg-[#c7a76c] px-6 py-3 text-[#11100c] font-semibold hover:bg-[#e3c98d]"
              >
                Request Seat
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-20 bg-[#1f1a13]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            {
              tier: "Builder Partners",
              benefit: "1 leadership circle seat per quarter",
            },
            {
              tier: "Innovator Partners",
              benefit: "4 leadership circle seats per quarter",
            },
            {
              tier: "Legacy Partners",
              benefit: "VIP access and custom leadership gatherings",
            },
          ].map((item) => (
            <div
              key={item.tier}
              className="rounded-3xl border border-[#3a3125] bg-[#11100c] p-8 text-center"
            >
              <h3 className="text-2xl font-serif text-[#c7a76c]">
                {item.tier}
              </h3>

              <p className="mt-4 text-[#d8c9b1]">{item.benefit}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-20 max-w-5xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-serif">
          Where Music, Leadership, and Innovation Meet
        </h2>

        <p className="mt-6 text-lg text-[#d8c9b1]">
          Earthtone Analog was created as a place where music, conversation,
          creativity, leadership, and innovation intersect. Leadership Circles
          bring together people who are actively building businesses,
          communities, and ideas that matter.
        </p>
      </section>

      <section id="contact" className="px-6 py-24 text-center bg-[#18150f]">
        <h2 className="text-4xl md:text-5xl font-serif">
          Join the Conversation
        </h2>

        <p className="mt-6 max-w-2xl mx-auto text-[#d8c9b1]">
          Request an invitation, nominate a leader, or explore corporate partner
          access for your organization.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:desiree@geniuslovescompany.org?subject=Leadership Circles Invitation Request"
            className="rounded-full bg-[#c7a76c] px-8 py-3 text-[#11100c] font-semibold hover:bg-[#e3c98d]"
          >
            Request Invitation
          </a>

          <a
            href="/corporate-rewards"
            className="rounded-full border border-[#c7a76c] px-8 py-3 text-[#f7efe2] hover:bg-[#c7a76c] hover:text-[#11100c]"
          >
            Become a Corporate Partner
          </a>
        </div>
      </section>
    </main>
  );
}