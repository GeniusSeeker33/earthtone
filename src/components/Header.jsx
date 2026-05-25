import { Link } from "react-router-dom";
import { Disc3 } from "lucide-react";

export default function Header() {
  return (
    <header className="border-b border-[#f4ead6]/10 bg-[#11100d]/90 px-6 py-5">
      <nav className="mx-auto flex max-w-7xl items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#c9974d] bg-[#1d1a15]">
            <Disc3 className="h-6 w-6 text-[#c9974d]" />
          </div>
          <div>
            <p className="text-lg font-semibold tracking-[0.28em] uppercase text-[#fff8e8]">
              Earthtone
            </p>
            <p className="text-xs tracking-[0.45em] text-[#c9974d] uppercase">
              Analog
            </p>
          </div>
        </Link>

        <div className="flex flex-wrap justify-end gap-4 text-sm text-[#f4ead6]/75">
          <Link to="/studio" className="hover:text-[#c9974d]">Studio</Link>
          <Link to="/sessions" className="hover:text-[#c9974d]">Sessions</Link>
          <Link to="/experiences" className="hover:text-[#c9974d]">Experiences</Link>
          <Link to="/gallery" className="hover:text-[#c9974d]">Gallery</Link>
          <Link to="/about" className="hover:text-[#c9974d]">About</Link>
          <Link to="/book" className="hover:text-[#c9974d]">Book</Link>
        </div>
      </nav>
    </header>
  );
}