import { motion } from "framer-motion";
import { FaSearch } from "react-icons/fa";
import "./HeroSection.css";

export default function HeroSection() {
  return (
    <section className="hero">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="hero-title"
      >
        Dive Into Fun Mini-Games
      </motion.h2>
      <p className="hero-subtitle">
        Quick matches, endless excitement play anytime, anywhere.
      </p>
      <div className="search-box">
        
        <input type="search" placeholder="Discover Games at Your Fingertips" />
        <FaSearch className="search-icon" style={{color:"white"}}/>
      </div>
    </section>
  );
}
