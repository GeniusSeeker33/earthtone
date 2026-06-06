import React from "react";
import Header from "../components/Header.jsx";

export default function CorporateRewards() {
  return (
    <main className="min-h-screen bg-[#11100c] text-[#f7efe2]">
      <Header />
      <section className="px-6 py-24 text-center bg-gradient-to-b from-[#1f1a13] to-[#11100c]">
        <p className="uppercase tracking-[0.3em] text-sm text-[#c7a76c]">
          Earthtone Analog × GeniusSeeker
        </p>

        <h1 className="mt-6 text-4xl md:text-6xl font-serif font-bold">
          Corporate Rewards at Earthtone Analog
        </h1>

        <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-[#d8c9b1]">
          Turn employee achievement into unforgettable experiences — music,
          leadership circles, livestream events, retreats, and creative rewards
          hosted at Earthtone Analog.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#membership-levels"
            className="rounded-full bg-[#c7a76c] px-8 py-3 text-[#11100c] font-semibold hover:bg-[#e3c98d]"
          >
            View Membership Levels
          </a>

          <a
            href="#contact"
            className="rounded-full border border-[#c7a76c] px-8 py-3 text-[#f7efe2] hover:bg-[#c7a76c] hover:text-[#11100c]"
          >
            Become a Partner
          </a>
        </div>
      </section>

      <section className="px-6 py-20 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Companies Join",
              text: "Corporations join GeniusSeeker and fund reward points for employees, leaders, sales teams, referrals, and milestone achievements.",
            },
            {
              title: "Employees Earn",
              text: "Employees earn points through hiring referrals, training completion, sales growth, innovation projects, leadership development, and service milestones.",
            },
            {
              title: "Earthtone Delivers",
              text: "Points are redeemed for livestreams, studio experiences, retreats, leadership circles, music events, and creative gatherings at Earthtone Analog.",
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

      <section
        id="membership-levels"
        className="px-6 py-20 bg-[#18150f]"
      >
        <div className="max-w-6xl mx-auto text-center">
          <p className="uppercase tracking-[0.3em] text-sm text-[#c7a76c]">
            Corporate Memberships
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-serif">
            Choose Your Level of Impact
          </h2>

          <div className="mt-12 grid md:grid-cols-3 gap-8 text-left">
            {[
              {
                name: "Builder",
                price: "$5,000 / year",
                points: "25,000 reward points",
                features: [
                  "GeniusSeeker employer access",
                  "Employee reward starter pool",
                  "Livestream event access",
                  "Recognition opportunities",
                  "Basic corporate partner listing",
                ],
              },
              {
                name: "Innovator",
                price: "$15,000 / year",
                points: "100,000 reward points",
                featured: true,
                features: [
                  "Everything in Builder",
                  "Quarterly leadership circle access",
                  "Priority reward redemptions",
                  "Corporate livestream sponsorship",
                  "Custom employee milestone campaigns",
                ],
              },
              {
                name: "Legacy",
                price: "$50,000 / year",
                points: "Custom reward pool",
                features: [
                  "Everything in Innovator",
                  "Annual Earthtone retreat",
                  "Executive leadership circle",
                  "Custom branded reward catalog",
                  "Strategic talent ecosystem partnership",
                ],
              },
            ].map((tier) => (
              <div
                key={tier.name}
                className={`rounded-3xl p-8 border ${
                  tier.featured
                    ? "border-[#c7a76c] bg-[#221c13]"
                    : "border-[#3a3125] bg-[#11100c]"
                }`}
              >
                {tier.featured && (
                  <p className="mb-4 inline-block rounded-full bg-[#c7a76c] px-4 py-1 text-sm text-[#11100c] font-semibold">
                    Recommended
                  </p>
                )}

                <h3 className="text-3xl font-serif text-[#f7efe2]">
                  {tier.name}
                </h3>

                <p className="mt-4 text-2xl text-[#c7a76c] font-semibold">
                  {tier.price}
                </p>

                <p className="mt-2 text-[#d8c9b1]">{tier.points}</p>

                <ul className="mt-6 space-y-3 text-[#d8c9b1]">
                  {tier.features.map((feature) => (
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
          Reward Experiences
        </p>

        <h2 className="mt-4 text-4xl md:text-5xl font-serif text-center">
          What Employees Can Redeem
        </h2>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            "Livestream Concert Access",
            "Wine & Music Nights",
            "Artist Meet & Greets",
            "Songwriter Circles",
            "Leadership Roundtables",
            "Creative Workshops",
            "Studio Recording Days",
            "Corporate Retreats",
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
            Built So Earthtone Never Loses Money
          </h2>

          <p className="mt-6 text-lg text-[#d8c9b1]">
            Corporate partners fund the reward pool. Employees redeem points for
            experiences. Earthtone Analog earns revenue from every livestream,
            event, retreat, leadership circle, and studio experience delivered.
          </p>
        </div>
      </section>

      <section id="contact" className="px-6 py-24 text-center">
        <h2 className="text-4xl md:text-5xl font-serif">
          Become a Corporate Partner
        </h2>

        <p className="mt-6 max-w-2xl mx-auto text-[#d8c9b1]">
          Give your employees something more meaningful than a gift card.
          Reward them with music, creativity, leadership, connection, and
          unforgettable experiences.
        </p>

        <a
          href="mailto:desiree@geniuslovescompany.org?subject=Earthtone Corporate Rewards"
          className="mt-10 inline-block rounded-full bg-[#c7a76c] px-10 py-4 text-[#11100c] font-semibold hover:bg-[#e3c98d]"
        >
          Start the Conversation
        </a>
      </section>
    </main>
  );
}