import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { navigation } from "../data/content";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState("");
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setCurrent(entry.target.id);
        });
      },
      { rootMargin: "-15% 0px -60% 0px" },
    );
    document
      .querySelectorAll("main section[id]")
      .forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    if (!open) return;
    const handle = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        document.getElementById("menu-button")?.focus();
      }
    };
    document.addEventListener("keydown", handle);
    return () => document.removeEventListener("keydown", handle);
  }, [open]);
  return (
    <header className="site-header">
      <a className="wordmark" href="#home" aria-label="Jiang Yaqi, back to top">
        jy<span>.</span>
      </a>
      <button
        id="menu-button"
        className="menu-toggle icon-button"
        aria-expanded={open}
        aria-controls="main-navigation"
        aria-label={open ? "Close navigation" : "Open navigation"}
        onClick={() => setOpen(!open)}
      >
        {open ? <X /> : <Menu />}
      </button>
      <nav
        id="main-navigation"
        className={open ? "navigation is-open" : "navigation"}
        aria-label="Main navigation"
      >
        {navigation.map(([id, label]) => (
          <a
            key={id}
            href={`#${id}`}
            aria-current={current === id ? "location" : undefined}
            onClick={() => setOpen(false)}
          >
            {label}
          </a>
        ))}
        <a
          className="nav-contact"
          aria-current={current === "contact" ? "location" : undefined}
          href="#contact"
          onClick={() => setOpen(false)}
        >
          Let's connect <ArrowUpRight size={15} />
        </a>
      </nav>
    </header>
  );
}
