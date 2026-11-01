import { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Expand,
  X,
} from "lucide-react";
import { galleries, photo } from "../data/content";
type GalleryKey = keyof typeof galleries;

export default function Photography() {
  const [collection, setCollection] = useState<GalleryKey>("concerts");
  const [active, setActive] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const dialog = useRef<HTMLDialogElement>(null);
  const photos = galleries[collection];
  const opener = useRef<HTMLButtonElement | null>(null);
  const openPhoto = (index: number, trigger: HTMLButtonElement) => {
    setLightboxIndex(index);
    opener.current = trigger;
    dialog.current?.showModal();
  };
  useEffect(() => {
    const el = dialog.current;
    if (!el) return;
    const close = () => {
      document.body.style.overflow = "";
      opener.current?.focus();
    };
    el.addEventListener("close", close);
    return () => {
      el.removeEventListener("close", close);
      document.body.style.overflow = "";
    };
  }, []);
  const shift = (n: number) =>
    setLightboxIndex((i) => (i + n + photos.length) % photos.length);
  return (
    <section
      id="photography"
      className="photography section-pad"
      aria-labelledby="photography-title"
    >
      <div className="section-top">
        <h2 id="photography-title">Through my lens.</h2>
        <span className="hand">For the moments that stay.</span>
      </div>
      <div
        className="gallery-tabs"
        role="group"
        aria-label="Photography collection"
      >
        {(
          [
            ["concerts", "Concerts"],
            ["fashion", "Paris Fashion Week"],
          ] as const
        ).map(([key, label]) => (
          <button
            key={key}
            className={collection === key ? "selected" : ""}
            aria-pressed={collection === key}
            onClick={() => {
              setCollection(key);
              setActive(0);
            }}
          >
            {label}
            <ArrowUpRight size={18} />
          </button>
        ))}
      </div>
      <div
        className="photo-accordion"
        aria-label={`${collection === "concerts" ? "Concert" : "Paris Fashion Week"} photographs`}
      >
        {photos.map((item, i) => (
          <button
            key={item.image}
            className={`gallery-panel ${i === active ? "expanded" : ""}`}
            onMouseEnter={() => {
              if (
                window.matchMedia("(hover: hover) and (pointer: fine)").matches
              )
                setActive(i);
            }}
            onFocus={() => setActive(i)}
            onClick={(event) => {
              setActive(i);
              openPhoto(i, event.currentTarget);
              document.body.style.overflow = "hidden";
            }}
            aria-label={`View photograph ${i + 1}: ${item.alt}`}
          >
            <img
              src={photo(item.image)}
              alt={item.alt}
              loading="lazy"
              width="1000"
              height="1400"
            />
            <span className="gallery-enlarge">
              <Expand size={18} />
              <span>View photograph</span>
            </span>
            <span className="photo-number">
              {String(i + 1).padStart(2, "0")}
            </span>
          </button>
        ))}
      </div>
      <div className="gallery-caption">
        <p>
          {collection === "concerts"
            ? "The energy, the light, the moment."
            : "Paris, between the runway and the street."}
        </p>
        <p>Photographs by Jiang Yaqi</p>
      </div>
      <dialog
        ref={dialog}
        className="photo-dialog"
        aria-label="Photograph viewer"
        onClick={(event) => {
          if (event.target === event.currentTarget) dialog.current?.close();
        }}
        onKeyDown={(event) => {
          if (event.key === "ArrowLeft") {
            event.preventDefault();
            shift(-1);
          }
          if (event.key === "ArrowRight") {
            event.preventDefault();
            shift(1);
          }
        }}
      >
        <button
          className="icon-button dialog-close"
          aria-label="Close photograph"
          onClick={() => dialog.current?.close()}
        >
          <X />
        </button>
        <div className="lightbox-content">
          <button
            className="icon-button"
            aria-label="Previous photograph"
            onClick={() => shift(-1)}
          >
            <ChevronLeft />
          </button>
          <figure>
            <img
              src={photo(photos[lightboxIndex].image)}
              alt={photos[lightboxIndex].alt}
            />
            <figcaption aria-live="polite">
              {lightboxIndex + 1} / {photos.length} —{" "}
              {collection === "concerts" ? "Concerts" : "Paris Fashion Week"}
            </figcaption>
          </figure>
          <button
            className="icon-button"
            aria-label="Next photograph"
            onClick={() => shift(1)}
          >
            <ChevronRight />
          </button>
        </div>
      </dialog>
    </section>
  );
}
