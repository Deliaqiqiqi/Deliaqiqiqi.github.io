import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { ArrowLeft } from "lucide-react";
import { photo } from "../data/content";
function useTypedText(text: string, enabled: boolean, onDone?: () => void) {
  const reduce = useReducedMotion();
  const [length, setLength] = useState(0);
  const done = useRef(onDone);
  done.current = onDone;
  useEffect(() => {
    if (!enabled) return;
    if (reduce) {
      setLength(text.length);
      done.current?.();
      return;
    }
    let n = 0;
    const timer = window.setInterval(() => {
      n++;
      setLength(n);
      if (n >= text.length) {
        window.clearInterval(timer);
        done.current?.();
      }
    }, 28);
    return () => window.clearInterval(timer);
  }, [text, enabled, reduce]);
  return text.slice(0, length);
}

export default function IdentityStory({ back }: { back: () => void }) {
  const reduce = useReducedMotion();
  const [phase, setPhase] = useState(0);
  const first = useTypedText(
    "Who am I in the clash of world cultures?",
    true,
    () => setPhase(1),
  );
  const second = useTypedText(
    "I found myself caught “in-between”.",
    phase >= 1,
    () => setPhase(2),
  );
  const heading = useRef<HTMLHeadingElement>(null);
  useEffect(() => {
    heading.current?.focus({ preventScroll: true });
  }, []);
  return (
    <main className="identity-view">
      <button className="back-link text-link" onClick={back}>
        <ArrowLeft size={19} /> Back to my world
      </button>
      <div className="identity-copy">
        <h1
          ref={heading}
          tabIndex={-1}
          aria-label="Who am I in the clash of world cultures?"
        >
          <span aria-hidden="true">
            {first}
            <span className={phase === 0 ? "typing-caret" : ""} />
          </span>
        </h1>
        <p className="hand" aria-label="I found myself caught in-between">
          <span aria-hidden="true">{second}</span>
        </p>
      </div>
      <div
        className="identity-circles"
        aria-label="My identity brings different cultures together"
      >
        <motion.div
          className="identity-circle circle-one"
          initial={{ opacity: 0, transform: "translateX(-25%)" }}
          animate={phase >= 2 ? { opacity: 1, transform: "translateX(0)" } : {}}
          transition={{ duration: reduce ? 0 : 0.8, ease: [0.77, 0, 0.175, 1] }}
          onAnimationComplete={() => setPhase((p) => Math.max(3, p))}
        >
          <img src={photo("europe-map")} alt="" />
          <span>
            A state of
            <br />
            <i>floating emptiness</i>
          </span>
        </motion.div>
        <motion.div
          className="identity-circle circle-two"
          initial={{ opacity: 0, transform: "translateX(25%)" }}
          animate={phase >= 2 ? { opacity: 1, transform: "translateX(0)" } : {}}
          transition={{ duration: reduce ? 0 : 0.8, ease: [0.77, 0, 0.175, 1] }}
        >
          <img src={photo("china-map")} alt="" />
          <span>
            An open
            <br />
            <i>status</i>
          </span>
        </motion.div>
      </div>
      <motion.p
        className="identity-ending"
        initial={{ opacity: 0 }}
        animate={{ opacity: phase >= 3 || reduce ? 1 : 0 }}
        transition={{ duration: 0.25 }}
      >
        A space where I can engage with different cultures,
        <br />
        and still remain connected to where I come from.
      </motion.p>
    </main>
  );
}
