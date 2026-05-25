import Header from "../components/Header.jsx";
import { galleryImages } from "../data/galleryImages.js";

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

          <div className="mt-14 gap-5 [column-fill:_balance] columns-1 sm:columns-2 lg:columns-3 xl:columns-4">
            {galleryImages.map((image) => (
              <figure
                key={image.src}
                className="mb-5 break-inside-avoid overflow-hidden rounded-2xl border border-[#f4ead6]/10 bg-[#201a13]"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  decoding="async"
                  className="block w-full transition duration-700 hover:scale-[1.02]"
                />
              </figure>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
