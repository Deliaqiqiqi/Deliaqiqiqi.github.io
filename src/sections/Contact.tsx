import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import { Mail, Phone, ArrowUpRight } from "lucide-react";
import { photo } from "../data/content";

export default function Contact() {
  const target = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target,
    offset: ["start end", "end end"],
  });
  const left = useTransform(
    scrollYProgress,
    [0.2, 0.85],
    ["translateX(10%)", "translateX(-9%)"],
  );
  const right = useTransform(
    scrollYProgress,
    [0.2, 0.85],
    ["translateX(-10%)", "translateX(9%)"],
  );
  const portrait = useTransform(
    scrollYProgress,
    [0.25, 0.85],
    ["translateY(20%)", "translateY(0%)"],
  );
  return (
    <section
      ref={target}
      id="contact"
      className="contact section-pad"
      aria-labelledby="contact-title"
    >
      <h2 id="contact-title" className="contact-heading">
        Connect with me!
      </h2>
      <div className="contact-composition">
        <motion.span
          className="contact-name first-name"
          style={{ transform: reduce ? "none" : left }}
        >
          JIANG
        </motion.span>
        <motion.img
          className="contact-portrait"
          style={{ transform: reduce ? "none" : portrait }}
          src={photo("contact-portrait")}
          alt="Yaqi, ready to connect"
          width="377"
          height="888"
          loading="lazy"
        />
        <motion.span
          className="contact-name last-name"
          style={{ transform: reduce ? "none" : right }}
        >
          YAQI
        </motion.span>
      </div>
      <div className="contact-links">
        <a href="mailto:yaqij2013@gmail.com">
          <Mail size={18} />
          yaqij2013@gmail.com
          <ArrowUpRight size={18} />
        </a>
        <a href="tel:+85254399578">
          <Phone size={18} />
          +852 54399578
          <ArrowUpRight size={18} />
        </a>
      </div>
      <footer>
        <span>Jiang Yaqi</span>
        <a className="text-link" href="#home">
          Back to top <ArrowUpRight size={16} />
        </a>
        <span>Thanks for stopping by.</span>
      </footer>
    </section>
  );
}
