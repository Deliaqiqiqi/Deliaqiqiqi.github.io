import { useRef, useState } from "react";
import { useInView } from "motion/react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { photo } from "../data/content";

export default function About({ openStory }: { openStory: () => void }) {
  const sectionRef = useRef<HTMLElement>(null);
  const entered = useInView(sectionRef, { once: true, amount: 0.25 });
  const [progress, setProgress] = useState(0);
  const complete = () => {
    if (progress >= 92) {
      setProgress(0);
      openStory();
    }
  };
  return (
    <section
      id="about"
      ref={sectionRef}
      className={
        entered ? "about section-pad has-entered" : "about section-pad"
      }
      aria-labelledby="about-title"
    >
      <div className="section-top">
        <h2 id="about-title">
          About me<span className="hand punctuation">…</span>
        </h2>
        <span className="small-note">A few things that make me, me.</span>
      </div>
      <div className="about-spread">
        <div className="paper-intro">
          <p className="hand handwriting">I’m Jiang Yaqi.</p>
          <p className="intro-copy">
            A media and culture student.
            <br />I love travelling.
            <br />I love talking to people
            <br className="desktop-only" /> across cultures.
          </p>
          <svg
            className="paper-underline"
            viewBox="0 0 400 30"
            aria-hidden="true"
          >
            <path
              d="M5 18 Q165 2 390 15 M22 26 Q210 14 365 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <div className="about-photo">
          <span className="photo-note hand">Hello, you!</span>
          <img
            src={photo("about-portrait")}
            width="500"
            height="687"
            alt="Jiang Yaqi smiling at an event"
            loading="lazy"
          />
        </div>
      </div>
      <div className="about-bottom">
        <div className="about-list">
          <h3>Things I work with</h3>
          <p>
            Premiere Pro
            <br />
            Lightroom
            <br />
            CapCut & Canva
          </p>
        </div>
        <div className="about-list">
          <h3>Things I speak</h3>
          <p>
            Mandarin <span>native</span>
            <br />
            English <span>fluent</span>
            <br />
            Cantonese <span>beginner</span>
          </p>
        </div>
        <div className="discover">
          <p className="hand">Want to know more?</p>
          <label className="slider-wrap" htmlFor="discover-slider">
            <span aria-hidden="true">
              Drag to discover <ArrowRight size={18} />
            </span>
            <input
              id="discover-slider"
              type="range"
              min="0"
              max="100"
              value={progress}
              aria-label="Drag to discover my identity story"
              onChange={(e) => setProgress(Number(e.target.value))}
              onPointerUp={complete}
              onKeyUp={complete}
              style={{
                background: `linear-gradient(to right, #69d6c0 ${progress}%, #0e443b ${progress}%)`,
              }}
            />
          </label>
          <button
            id="story-trigger"
            className="text-link story-alternative"
            onClick={openStory}
          >
            Or open my story <ArrowUpRight size={15} />
          </button>
        </div>
      </div>
    </section>
  );
}
