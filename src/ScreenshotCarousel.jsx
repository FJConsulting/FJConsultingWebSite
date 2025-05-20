import React, { useState, useEffect, useRef } from "react";
import "./carousel.css";

const images = [
  { src: "/exemple1.png", alt: "Exemple 1" },
  { src: "/exemple2.png", alt: "Exemple 2" },
  { src: "/exemple3.png", alt: "Exemple 3" },
  { src: "/exemple4.png", alt: "Exemple 4" },
  { src: "/exemple5.png", alt: "Exemple 5" },
];

const GOLD = "#C9A43F";
const BG = "#23262b";
const MAX_WIDTH = 400;
const MAX_HEIGHT = 220;
const BORDER = 2;
const GAP = 30;

export default function ScreenshotCarousel() {
  const [index, setIndex] = useState(0);
  const [imgSizes, setImgSizes] = useState(
    Array(images.length).fill({ width: MAX_WIDTH, height: MAX_HEIGHT })
  );
  const intervalRef = useRef(null);
  const [paused, setPaused] = useState(false);
  const [imagesPerView, setImagesPerView] = useState(getImagesPerView());
  const containerRef = useRef(null);

  function getImagesPerView() {
    if (window.innerWidth >= 1024) return 3;
    if (window.innerWidth >= 600) return 2;
    return 1;
  }
  useEffect(() => {
    const onResize = () => setImagesPerView(getImagesPerView());
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Défilement auto
  useEffect(() => {
    if (paused) return;
    intervalRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, 4000);
    return () => clearInterval(intervalRef.current);
  }, [paused, imagesPerView]);

  // Taille image naturelle
  function handleImgLoad(idx, e) {
    const { naturalWidth: width, naturalHeight: height } = e.target;
    setImgSizes((arr) => {
      const copy = [...arr];
      copy[idx] = { width, height };
      return copy;
    });
  }

  function getVisibleIndexes() {
    return Array.from({ length: imagesPerView }).map(
      (_, i) => (index + i) % images.length
    );
  }

  // Pagination bullets
  const bullets = images.map((_, i) => (
    <button
      key={i}
      aria-label={`Image ${i + 1}`}
      onClick={() => setIndex(i)}
      style={{
        width: 14,
        height: 14,
        borderRadius: "50%",
        border: "none",
        background: i === index ? GOLD : "#35383c",
        boxShadow: i === index ? "0 0 6px #C9A43F80" : "none",
        outline: "none",
        cursor: "pointer",
        transition: "background 0.2s, box-shadow 0.2s",
        display: "inline-block",
        padding: 0,
      }}
    />
  ));

  // Largeur dispo max pour CHAQUE cadre (pour ne jamais déborder)
  let containerWidth = 1200;
  if (containerRef.current) containerWidth = containerRef.current.offsetWidth;
  const totalGap = (imagesPerView - 1) * GAP;
  const cardMax =
    Math.floor((containerWidth - totalGap) / imagesPerView) - BORDER * 2;

  // Pour chaque image, calcule SON frame adapté au max autorisé (donc chaque cadre = ratio image !)
  function getFrame(imgIdx) {
    const { width, height } = imgSizes[imgIdx] || {
      width: MAX_WIDTH,
      height: MAX_HEIGHT,
    };
    const scale = Math.min(
      MAX_WIDTH / width,
      MAX_HEIGHT / height,
      cardMax / width,
      1
    );
    return {
      width: Math.round(width * scale),
      height: Math.round(height * scale),
    };
  }

  return (
    <div
      ref={containerRef}
      className="carousel-main-container"
      style={{
        width: "100%",
        maxWidth: "1200px",
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        overflow: "hidden",
        padding: "0 12px",
      }}
    >
      <div
        className="carousel-wrapper"
        style={{
          margin: "40px 0",
          justifyContent: "center",
          overflow: "hidden",
          width: "100%",
        }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <button
          className="carousel-arrow"
          onClick={() =>
            setIndex((i) => (i - 1 + images.length) % images.length)
          }
          aria-label="Précédent"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="12" fill="none" />
            <path
              d="M15 18l-6-6 6-6"
              stroke={GOLD}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <div
          className="carousel-track"
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-end", // ⬅️ ALIGNE TOUS LES CADRES PAR LE BAS
            justifyContent: "center",
            gap: GAP,
            margin: "0 28px",
            width: "100%",
            overflow: "hidden",
          }}
        >
          {getVisibleIndexes().map((imgIdx) => {
            const { width, height } = getFrame(imgIdx);
            return (
              <div
                key={imgIdx}
                className="carousel-card"
                style={{
                  width: `${width + BORDER * 2}px`,
                  height: `${height + BORDER * 2}px`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: `${BORDER}px solid ${GOLD}`,
                  borderRadius: "1em",
                  background: BG,
                  boxShadow: "0 6px 24px rgba(0,0,0,0.15)",
                  transition: "width 0.3s, height 0.3s",
                  padding: 0,
                  overflow: "hidden",
                }}
              >
                <img
                  src={images[imgIdx].src}
                  alt={images[imgIdx].alt}
                  className="carousel-image"
                  onLoad={(e) => handleImgLoad(imgIdx, e)}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "fill", // <<--- c’est le secret !
                    userSelect: "none",
                    pointerEvents: "none",
                    borderRadius: "inherit",
                    background: "transparent",
                    transition: "width 0.3s, height 0.3s",
                    display: "block",
                  }}
                />
              </div>
            );
          })}
        </div>
        <button
          className="carousel-arrow"
          onClick={() => setIndex((i) => (i + 1) % images.length)}
          aria-label="Suivant"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="12" fill="none" />
            <path
              d="M9 6l6 6-6 6"
              stroke={GOLD}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
      {/* Bullets de pagination */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 12,
          marginTop: 18,
        }}
      >
        {bullets}
      </div>
    </div>
  );
}
