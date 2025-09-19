import { motion } from "framer-motion";
import "./GameCard.css";

export default function GameCard({ game, index }) {
  return (
    <motion.div
      whileHover={!game.isDisabled ? { scale: 1.05, rotate: 1 } : {}}
      whileTap={!game.isDisabled ? { scale: 0.95 } : {}}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      className={`game-card ${game.isDisabled ? "disabled" : ""}`}
    >
      {game.isDisabled ? (
        // Disabled → no link
        <div className="game-card-content">
          <img src={game.img} alt={game.title} className="game-img" />
        </div>
      ) : (
        // Enabled → clickable link
        <a href={game.link} target="_blank" rel="noopener noreferrer">
          <img src={game.img} alt={game.title} className="game-img" />
          {/* <h3 className="game-title">{game.title}</h3> */}
        </a>
      )}
    </motion.div>
  );
}
