import Navbar from "../src/components/Navbar/Navbar";
import HeroSection from "../src/components/HeroSection/HeroSection";
import GamesGrid from "../src/components/GamesGrid/GamesGrid";
import "./App.css";

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <HeroSection />
      <GamesGrid />
    </div>
  );
}
