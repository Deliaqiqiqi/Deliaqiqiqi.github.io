import { ArrowUpRight, ArrowDown } from "lucide-react";
import { cv } from "../data/content";

export default function Experience() {
  return (
    <section
      id="experience"
      className="experience section-pad"
      aria-labelledby="experience-title"
    >
      <div className="section-top">
        <h2 id="experience-title">Experiences</h2>
        <a className="cv-link" href={cv} target="_blank" rel="noreferrer">
          View my CV <ArrowUpRight size={22} />
          <span>PDF</span>
        </a>
      </div>
      <div className="experience-columns">
        <article>
          <h3>
            Internship<span className="hand">in the industry</span>
          </h3>
          <ul className="skill-lines">
            <li>Project management</li>
            <li>Influencer outreach</li>
            <li>Performance research</li>
            <li>Cross-team communication</li>
          </ul>
          <details>
            <summary>
              Taihe Music Group <span>2025</span>
            </summary>
            <p>
              Project Assistant Intern, International Performance Department.
              Artist research, campaign copy, project planning and performance
              approvals.
            </p>
          </details>
          <details>
            <summary>
              Deyang TV Station <span>2024</span>
            </summary>
            <p>
              Social media intern. Creator outreach and short-form video
              production, supporting collaborations with over 30 creators.
            </p>
          </details>
        </article>
        <article>
          <h3>
            Projects<span className="hand">bringing ideas to life</span>
          </h3>
          <ul className="skill-lines">
            <li>Event planning</li>
            <li>Video production</li>
            <li>Social media operations</li>
          </ul>
          <details>
            <summary>
              ACSSNL <span>2024–26</span>
            </summary>
            <p>
              Vice President, Art Department. Spring Festival Gala production
              and promotional content for the Dutch release of The Lychee Road.
            </p>
          </details>
          <a className="text-link" href="#social">
            Explore the work <ArrowDown size={16} />
          </a>
        </article>
        <article>
          <h3>
            Volunteering<span className="hand">behind the scenes</span>
          </h3>
          <ul className="skill-lines">
            <li>Event execution</li>
            <li>Photography</li>
          </ul>
          <p className="experience-note">
            I love being part of the moments that bring people together, on
            stage and behind the camera.
          </p>
          <a className="text-link" href="#photography">
            Through my lens <ArrowDown size={16} />
          </a>
        </article>
      </div>
    </section>
  );
}
