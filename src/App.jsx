import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Studio from "./pages/Studio.jsx";
import Sessions from "./pages/Sessions.jsx";
import Showcases from "./pages/Showcases.jsx";
import Experiences from "./pages/Experiences.jsx";
import Gallery from "./pages/Gallery.jsx";
import About from "./pages/About.jsx";
import Booking from "./pages/Booking.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/studio" element={<Studio />} />
      <Route path="/sessions" element={<Sessions />} />
      <Route path="/showcases" element={<Showcases />} />
      <Route path="/experiences" element={<Experiences />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/about" element={<About />} />
      <Route path="/book" element={<Booking />} />
    </Routes>
  );
}
