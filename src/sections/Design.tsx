import { useRef, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { photo, projects } from "../data/content";

export default function Design() {
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();
  const start = useRef<number | null>(null);
  const move = (direction: number) =>
    setActive((i) => (i + direction + projects.length) % projects.length);
  return (
    <section
      id="design"
      className="design section-pad"
      aria-labelledby="design-title"
    >
      <div className="section-top">
        <h2 id="design-title">Ideas, made real.</h2>
        <p className="hand">A game. A film. A question.</p>
      </div>
      <div
        className="carousel"
        role="region"
        aria-roledescription="carousel"
        aria-label="Design projects"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") {
            e.preventDefault();
            move(1);
          }
          if (e.key === "ArrowLeft") {
            e.preventDefault();
            move(-1);
          }
        }}
        onPointerDown={(e) => {
          start.current = e.clientX;
        }}
        onPointerUp={(e) => {
          if (
            start.current !== null &&
            Math.abs(e.clientX - start.current) > 45
          )
            move(e.clientX < start.current ? 1 : -1);
          start.current = null;
        }}
        onPointerCancel={() => {
          start.current = null;
        }}
      >
        <div className="carousel-stage">
          {projects.map((project, i) => {
            let offset = i - active;
            if (offset > 1) offset -= 3;
            if (offset < -1) offset += 3;
            return (
              <motion.button
                key={project.title}
                className={`project-image ${offset === 0 ? "active" : ""}`}
                style={{ zIndex: offset === 0 ? 3 : 1 }}
                animate={{
                  transform: reduce
                    ? `translateX(${offset * 52}%) scale(${offset === 0 ? 1 : 0.82})`
                    : `translateX(${offset * 56}%) translateZ(${offset === 0 ? "0px" : "-150px"}) rotateY(${offset * -12}deg) scale(${offset === 0 ? 1 : 0.88})`,
                  opacity: offset === 0 ? 1 : 0.6,
                }}
                transition={{
                  type: "spring",
                  duration: reduce ? 0 : 0.5,
                  bounce: 0.1,
                }}
                onClick={() => setActive(i)}
                aria-label={`Select ${project.title}`}
                aria-pressed={active === i}
              >
                <img
                  src={photo(project.image)}
                  alt={`${project.kind}: ${project.title}`}
                  width="1152"
                  height="648"
                  loading="lazy"
                  draggable={false}
                />
              </motion.button>
            );
          })}
        </div>
        <div className="project-info">
          <div aria-live="polite" aria-atomic="true">
            <p className="project-kind">{projects[active].kind}</p>
            <h3>{projects[active].title}</h3>
            <p>
              {projects[active].description} {projects[active].detail}
            </p>
          </div>
          <div className="carousel-controls">
            <button
              className="icon-button"
              onClick={() => move(-1)}
              aria-label="Previous design project"
            >
              <ChevronLeft />
            </button>
            <span>
              {active + 1} / {projects.length}
            </span>
            <button
              className="icon-button"
              onClick={() => move(1)}
              aria-label="Next design project"
            >
              <ChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
