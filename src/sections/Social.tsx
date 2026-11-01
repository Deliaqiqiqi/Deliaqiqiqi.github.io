import { useState } from "react";
import { ArrowUpRight, RotateCw } from "lucide-react";
import { photo, socialPosts } from "../data/content";
function ContentCreation() {
  return (
    <div className="content-creation">
      <div className="section-top">
        <h3>
          Words that
          <br />
          make connections.
        </h3>
        <p className="hand">From research to the right story.</p>
      </div>
      <div className="content-grid">
        <article>
          <a
            className="phone-link"
            href="https://mp.weixin.qq.com/s/C1ubfgpUxp5H3y9mwjOTYw"
            target="_blank"
            rel="noreferrer"
            aria-label="Read The Lychee Road film campaign on WeChat, opens a new tab"
          >
            <div className="phone green-phone">
              <img
                className="phone-frame"
                src={photo("phone-green")}
                alt=""
                loading="lazy"
              />
              <div className="phone-screen">
                <img
                  src={photo("lychee-article")}
                  alt="WeChat promotional article for The Lychee Road"
                  loading="lazy"
                />
              </div>
            </div>
            <span className="phone-cta">
              Read on WeChat <ArrowUpRight size={19} />
            </span>
          </a>
          <div className="content-description">
            <p className="project-kind">Film marketing</p>
            <h4>
              The Lychee Road,
              <br />
              in the Netherlands.
            </h4>
            <p>
              I planned promotional activities for the Dutch release, working
              with the rights holder on screening events. My WeChat content
              reached more than 400 local Chinese audiences, with social
              interactions and ticket giveaways supporting participation.
            </p>
          </div>
        </article>
        <article>
          <a
            className="phone-link"
            href="https://mp.weixin.qq.com/s/XPVP9yBy1zXWkIPdd16m1g"
            target="_blank"
            rel="noreferrer"
            aria-label="Read the overseas artist promotion on WeChat, opens a new tab"
          >
            <div className="phone pink-phone">
              <img
                className="phone-frame"
                src={photo("phone-pink")}
                alt=""
                loading="lazy"
              />
              <div className="phone-screen">
                <img
                  src={photo("artist-article")}
                  alt="WeChat article introducing an overseas artist"
                  loading="lazy"
                />
              </div>
            </div>
            <span className="phone-cta">
              Read on WeChat <ArrowUpRight size={19} />
            </span>
          </a>
          <div className="content-description">
            <p className="project-kind">Artist research & promotion</p>
            <h4>
              Across languages.
              <br />
              Closer to the audience.
            </h4>
            <p>
              I researched international artists through press kits, interviews,
              performances and audience discussions. Working with artist
              agencies, I developed profiles of over 2,000 Chinese characters
              and localized promotional copy for digital platforms.
            </p>
          </div>
        </article>
      </div>
    </div>
  );
}

export default function Social() {
  const [flipped, setFlipped] = useState<Set<number>>(new Set());
  return (
    <section
      id="social"
      className="social section-pad"
      aria-labelledby="social-title"
    >
      <div className="section-top">
        <h2 id="social-title">Stories, shared.</h2>
        <p>
          Content creation &<br />
          audience engagement
        </p>
      </div>
      <ContentCreation />
      <div className="social-posts-header">
        <h3>A little of what I share.</h3>
        <p>
          Travel guides, personal experiences and short-form videos.
          <br />
          One video reached over <strong>50,000 likes.</strong>
        </p>
      </div>
      <div className="flip-row">
        {socialPosts.map((post, i) => (
          <button
            key={post.image}
            className={`flip-card ${flipped.has(i) ? "is-flipped" : ""}`}
            aria-label={`${flipped.has(i) ? "Show screenshot of" : "Read about"} ${post.title}`}
            aria-pressed={flipped.has(i)}
            onClick={() =>
              setFlipped((previous) => {
                const next = new Set(previous);
                if (next.has(i)) next.delete(i);
                else next.add(i);
                return next;
              })
            }
          >
            <span className="flip-inner">
              <span className="flip-front" aria-hidden={flipped.has(i)}>
                <img
                  src={photo(post.image)}
                  alt={post.title}
                  width="500"
                  height="700"
                  loading="lazy"
                />
                <span className="flip-hint">
                  <RotateCw size={14} /> Flip to explore
                </span>
              </span>
              <span className="flip-back" aria-hidden={!flipped.has(i)}>
                <span>{post.category}</span>
                <strong>{post.title}</strong>
                <span>{post.description}</span>
                <RotateCw size={21} />
              </span>
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}
