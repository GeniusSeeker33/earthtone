import Header from "../components/Header.jsx";
import { galleryImages } from "../data/galleryImages.js";
import { Camera } from "lucide-react";

export default function Gallery() {
  return (
    <main className="min-h-screen bg-[#11100d] text-[#f4ead6]">
      <Header />

      <section className="px-6 py-24 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-[0.35em] text-[#c9974d]">
            Gallery
          </p>

          <h1 className="mt-4 max-w-5xl text-5xl font-black leading-tight text-[#fff8e8] md:text-7xl">
            A living archive of sound, story, and soul.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#f4ead6]/75">
            Moments from Earthtone Analog — the room, the artists, the laughter,
            the stillness, and the sound.
          </p>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {galleryImages.map((image, index) => (
              <article
                key={image.src}
                className={`group overflow-hidden rounded-[2rem] border border-[#f4ead6]/10 bg-[#201a13] ${
                  index % 5 === 0 ? "lg:col-span-2 lg:row-span-2" : ""
                }`}
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  <div className="absolute bottom-0 p-6">
                    <Camera className="mb-3 h-6 w-6 text-[#c9974d]" />
                    <h2 className="text-2xl font-black text-[#fff8e8]">
                      {image.title}
                    </h2>
                    <p className="mt-2 text-sm leading-6 text-[#f4ead6]/75">
                      {image.caption}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}