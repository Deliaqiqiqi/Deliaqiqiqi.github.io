import { photo } from "../data/content";

export default function Education() {
  return (
    <section
      id="education"
      className="education section-pad"
      aria-labelledby="education-title"
    >
      <div className="education-photo">
        <div className="photo-print">
          <img
            src={photo("graduation")}
            alt="Yaqi holding flowers at her graduation"
            width="1661"
            height="1248"
            loading="lazy"
          />
          <span className="hand">A chapter to remember.</span>
        </div>
        <img
          className="education-flower"
          src={photo("education-star")}
          alt=""
          width="536"
          height="529"
          loading="lazy"
        />
      </div>
      <div className="education-copy">
        <h2 id="education-title">
          Always <br />
          learning.
        </h2>
        <article>
          <p className="date">2026 — 2027</p>
          <h3>University of Hong Kong</h3>
          <p>
            Master of Social Sciences
            <br />
            Media, Culture and Creative Cities
          </p>
          <p className="course-copy">
            Media theory, research methods, and business organizations and
            institutions.
          </p>
        </article>
        <article>
          <p className="date">2023 — 2026</p>
          <h3>University of Amsterdam</h3>
          <p>
            Bachelor of Arts
            <br />
            Media and Culture
          </p>
          <p className="course-copy">
            Fandom studies, television analysis, and global media culture.
          </p>
        </article>
        <p className="summer-note">
          Also a summer at the University of Tokyo, exploring AI & ethics and
          Japanese heritage studies. <span>2025</span>
        </p>
      </div>
    </section>
  );
}
