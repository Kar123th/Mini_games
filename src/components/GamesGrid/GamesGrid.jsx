import GameCard from "../GameCard/GameCard";
import "./GamesGrid.css";

const games = [
  { title: "UNO", img: "../../public/games/UNO.jpg", link: "https://example.com/uno" },
  { title: "XO", img: "../../public/games/XO.svg", link: "https://example.com/xo" },
  { title: "Bingo", img: "/games/bingo.png", link: "https://example.com/bingo" },
  { title: "Space Race", img: "/games/spacerace.png", link: "https://example.com/space" },
  { title: "Cricket", img: "/games/cricket.png", link: "https://example.com/cricket" },
  { title: "Football", img: "/games/football.png", link: "https://example.com/football" },
  { title: "Highway Rider", img: "/games/highway.png", link: "https://example.com/highway" },
  { title: "Traffic", img: "/games/traffic.png", link: "https://example.com/traffic" },
  { title: "Mini Battle", img: "/games/minibattle.png", link: "https://example.com/minibattle" },
  { title: "Chess", img: "/games/chess.png", link: "https://example.com/chess" },
  { title: "Pinball", img: "/games/pinball.png", link: "https://example.com/pinball" },
  { title: "Billiards", img: "/games/billiards.png", link: "https://example.com/billiards" },
  { title: "Ludo", img: "/games/ludo.png", link: "https://example.com/ludo" },
  { title: "Space Race 2", img: "/games/space2.png", link: "https://example.com/space2" },
];

export default function GamesGrid() {
  return (
    <section className="games-grid">
      {games.map((game, i) => (
        <GameCard key={i} game={game} index={i} />
      ))}
    </section>
  );
}
