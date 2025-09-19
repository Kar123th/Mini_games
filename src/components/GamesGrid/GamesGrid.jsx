import GameCard from "../GameCard/GameCard";
import "./GamesGrid.css";

const games = [
  { title: "UNO", img: "/games/uno.svg", link: "https://unogamesai.netlify.app/", isDisabled: false },
  { title: "XO", img: "/games/xo.svg", link: "https://example.com/xo", isDisabled: false },
  { title: "Bingo", img: "/games/bingo.svg", link: "", isDisabled: true },
  { title: "Space Race", img: "/games/spacerace.svg", link: "https://example.com/space", isDisabled: true },
  { title: "Cricket", img: "/games/cricket.svg", link: "https://example.com/cricket", isDisabled: true },
  { title: "Football", img: "/games/football.svg", link: "https://example.com/football", isDisabled: true },
  { title: "Highway Rider", img: "/games/highway.svg", link: "https://example.com/highway", isDisabled: true },
  { title: "Traffic", img: "/games/traffic.svg", link: "https://example.com/traffic", isDisabled: true },
  { title: "Mini Battle", img: "/games/minibattle.svg", link: "https://example.com/minibattle", isDisabled: true },
  { title: "Chess", img: "/games/chess.svg", link: "https://example.com/chess", isDisabled: true },
  { title: "Pinball", img: "/games/pinball.svg", link: "https://example.com/pinball", isDisabled: true },
  { title: "Billiards", img: "/games/billiards.svg", link: "https://example.com/billiards", isDisabled: true },
  { title: "Ludo", img: "/games/ludo.svg", link: "https://example.com/ludo", isDisabled: true },
  { title: "Space Race 2", img: "/games/space2.svg", link: "https://example.com/space2", isDisabled: true },
];

export default function GamesGrid() {
  return (
    <section className="games-grid">
      {games.map((game, i) => (
        <GameCard key={i} game={game} />
      ))}
    </section>
  );
}
