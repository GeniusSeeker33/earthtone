export default function HeroBackground({ src, position = "center" }) {
  return (
    <>
      <img
        src={src}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
        style={{ objectPosition: position }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#11100d]/95 via-[#11100d]/70 to-[#11100d]/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#11100d] via-transparent to-[#11100d]/60" />
      <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-[#9b6a2f] mix-blend-overlay blur-3xl opacity-50" />
      <div className="absolute top-1/3 -right-32 h-[32rem] w-[32rem] rounded-full bg-[#b8322a] mix-blend-overlay blur-3xl opacity-40" />
    </>
  );
}
