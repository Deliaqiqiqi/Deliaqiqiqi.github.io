import { useCallback, useEffect, useRef, useState } from "react";
import Header from "./components/Header";
import Hero from "./sections/Hero";
import About from "./sections/About";
import IdentityStory from "./sections/IdentityStory";
import Experience from "./sections/Experience";
import Education from "./sections/Education";
import Design from "./sections/Design";
import Social from "./sections/Social";
import Photography from "./sections/Photography";
import Contact from "./sections/Contact";

export default function App() {
  const [story, setStory] = useState(window.location.hash === "#identity");
  const restorePosition = useRef(0);
  const openingHash = useRef("#about");
  const openStory = useCallback(() => {
    restorePosition.current = window.scrollY;
    openingHash.current = window.location.hash || "#about";
    window.history.pushState({ identity: true }, "", "#identity");
    setStory(true);
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);
  const restoreHome = useCallback(() => {
    setStory(false);
    requestAnimationFrame(() =>
      requestAnimationFrame(() => {
        window.scrollTo({ top: restorePosition.current, behavior: "instant" });
        document
          .getElementById("story-trigger")
          ?.focus({ preventScroll: true });
      }),
    );
  }, []);
  const back = useCallback(() => {
    if (window.history.state?.identity) window.history.back();
    else {
      window.history.replaceState(null, "", openingHash.current);
      restoreHome();
    }
  }, [restoreHome]);
  useEffect(() => {
    const sync = () => {
      if (window.location.hash === "#identity") {
        setStory(true);
        window.scrollTo({ top: 0, behavior: "instant" });
      } else if (story) restoreHome();
    };
    window.addEventListener("popstate", sync);
    window.addEventListener("hashchange", sync);
    document.title = story
      ? "In-between — Jiang Yaqi"
      : "Jiang Yaqi — Media, Culture & Creative Work";
    return () => {
      window.removeEventListener("popstate", sync);
      window.removeEventListener("hashchange", sync);
    };
  }, [story, restoreHome]);
  if (story) return <IdentityStory back={back} />;
  return (
    <>
      <a className="skip-link" href="#about">
        Skip to content
      </a>
      <Header />
      <main>
        <Hero />
        <About openStory={openStory} />
        <Experience />
        <Education />
        <Design />
        <Social />
        <Photography />
        <Contact />
      </main>
    </>
  );
}
