import { ArrowDown } from "lucide-react";
import { photo } from "../data/content";

export default function Hero() {
  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <p className="hero-intro">Hi, it’s</p>
      <h1 id="hero-title" className="hero-title" aria-label="Yaqi">
        {"YAQI".split("").map((letter, i) => (
          <span
            key={i}
            style={{ animationDelay: `${i * 75}ms` }}
            aria-hidden="true"
          >
            {letter}
          </span>
        ))}
      </h1>
      <img
        className="hero-portrait"
        src={photo("hero-portrait")}
        alt="Yaqi photographing the view across a canal"
        width="900"
        height="1200"
        fetchPriority="high"
      />
      <div className="hero-bottom">
        <a href="#about" className="round-link">
          <span className="round-icon">
            <ArrowDown size={22} />
          </span>
          <span>
            A little more
            <br />
            about me
          </span>
        </a>
        <p>
          Media & culture.
          <br />A world of possibilities.
        </p>
      </div>
      <span className="hero-side-note">Curious by nature.</span>
    </section>
  );
}
