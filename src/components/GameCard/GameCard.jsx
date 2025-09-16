import { motion } from "framer-motion";
import "./GameCard.css";

export default function GameCard({ game, index }) {
  return (
    <motion.div
      whileHover={{ scale: 1.0, rotate: 1 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      className="game-card"
    >
      <a href={game.link} target="1" rel="noopener noreferrer">
        <img src={game.img} alt={game.title} className="game-img" />
        {/* <h3 className="game-title">{game.title}</h3> */}
      </a>
    </motion.div>
  );
}
