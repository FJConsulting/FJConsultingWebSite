import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, ChevronLeft, ChevronRight } from "framer-motion";

/* ---------- Palette ---------- */
const gold = "#C9A43F";
const dark = "#0B1118";
const photoScale = 1.4;

/* ---------- Helpers UI ---------- */

/* ---------- Données packs sépareé dans packsData.js ---------- */

import {
  pains,
  examples,
  exampleImages,
  exampleTitles,
  exampleDescriptions,
  packs,
  steps,
  fullPacks,
  maintenancePacks,
} from "./packsData";

import ScreenshotCarousel from "./ScreenshotCarousel";

// --- CARD ---
const Card = ({ children, className = "", hoverEffect = true, ...rest }) => (
  <motion.div
    {...rest}
    className={`
      ${className}
      inline-flex flex-col items-start
      bg-[#111820cc] backdrop-blur rounded-2xl border border-gray-700/60
      p-4
      space-y-0
      ${hoverEffect ? "cursor-pointer" : "cursor-default"}
    `}
    {...(hoverEffect
      ? {
          whileHover: {
            scale: 1.02,
            boxShadow: "0 8px 20px rgba(0,0,0,0.4)",
          },
          transition: { type: "spring", stiffness: 250, damping: 20 },
        }
      : {})}
  >
    {children}
  </motion.div>
);

// --- CARD CONTENT ---
const CardContent = ({ children, className = "" }) => (
  <div className={className}>{children}</div>
);

// --- BUTTON ---
const Button = ({ children, className = "", ...props }) => (
  <button
    {...props}
    className={`px-6 py-2 rounded-md border font-semibold hover:opacity-90 transition focus:outline-none focus:ring-2 focus:ring-[#C9A43F] active:scale-95 ${className}`}
    tabIndex={0}
  >
    {children}
  </button>
);

// --- CHECK CIRCLE ---
const CheckCircle = ({ color = gold, size = 24, className = "" }) => (
  <svg
    className={`flex-none ${className}`}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);

// --- CALENDAR CHECK ---
const CalendarCheck = ({ color = gold, size = 48 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
    <polyline points="10 14 12 16 16 12" />
  </svg>
);

// --- CHEVRON ---
const Chevron = ({ color = gold, size = 24, className = "" }) => (
  <span
    className={`inline-block ${className}`}
    style={{
      color,
      fontSize: size,
      fontWeight: 700,
      lineHeight: 1,
      verticalAlign: "middle",
      marginLeft: "0.2em",
    }}
    aria-hidden="true"
  >
    ›
  </span>
);

const logoSrc = "/logo-fjc.png";
const photoSrc = "/fabien-photo.png";

/* ---------- UI GRAPHIQUE ---------- */

// Quadrillage
const GridBG = () => (
  <svg
    className="absolute inset-0 w-full h-full pointer-events-none opacity-20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
        <path
          d="M40 0 L0 0 0 40"
          fill="none"
          stroke="#1a2430"
          strokeWidth="1"
        />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#grid)" />
  </svg>
);

// Lignes design
const FixedLines = () => (
  <div className="absolute inset-0 pointer-events-none">
    <svg
      className="w-full h-full"
      viewBox="0 0 1920 1080"
      preserveAspectRatio="xMinYMin meet"
    >
      <path
        d="M1920 70 L1650 70 L1400 170 L1400 270"
        stroke="#1a2430"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
      <circle
        cx="1400"
        cy="270"
        r="5"
        fill={dark}
        stroke="#1a2430"
        strokeWidth="2"
      />
      <path
        d="M1920 110 L1750 110"
        stroke="#1a2430"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
      <circle
        cx="1750"
        cy="110"
        r="5"
        fill={dark}
        stroke="#1a2430"
        strokeWidth="2"
      />
      <path
        d="M1920 600 L1850 600 L1830 580 L1810 580 L1790 600 L1700 600"
        stroke="#1a2430"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
      <circle
        cx="1700"
        cy="600"
        r="5"
        fill={dark}
        stroke="#1a2430"
        strokeWidth="2"
      />
      <path
        d="M1580 -20 L1580 40 L1400 110 L1300 110"
        stroke="#1a2430"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
      <circle
        cx="1300"
        cy="110"
        r="5"
        fill={dark}
        stroke="#1a2430"
        strokeWidth="2"
      />
      <path
        d="M350 -20 L700 150"
        stroke="#1a2430"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
      <circle
        cx="700"
        cy="150"
        r="5"
        fill={dark}
        stroke="#1a2430"
        strokeWidth="2"
      />
      <path
        d="M-80 50 L400 50 L550 130 L550 160"
        stroke="#1a2430"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
      <circle
        cx="550"
        cy="160"
        r="5"
        fill={dark}
        stroke="#1a2430"
        strokeWidth="2"
      />
      <path
        d="M-80 250 L800 250 L950 350 L1150 350"
        stroke="#1a2430"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
      <circle
        cx="1150"
        cy="350"
        r="5"
        fill={dark}
        stroke="#1a2430"
        strokeWidth="2"
      />
    </svg>
  </div>
);

// Flèche droite méthodo
const ArrowRight = ({ size = 24, color = gold }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="mx-2"
  >
    <path d="M5 12h14" />
    <path d="M13 5l7 7-7 7" />
  </svg>
);

// Flèche bas méthodo
const ArrowDown = ({ size = 24, color = gold }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="my-2"
  >
    <path d="M12 5v14" />
    <path d="M5 13l7 7 7-7" />
  </svg>
);

/* ----------- MODAL EXAMPLES ----------- */
function ExampleModal({ open, onClose, image, title, description }) {
  // ESC pour fermer + trap focus sur la modal
  const ref = useRef(null);
  useEffect(() => {
    if (!open) return;
    const esc = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", esc);
    // Focus le premier focusable à l'ouverture
    setTimeout(() => ref.current && ref.current.focus(), 100);
    return () => window.removeEventListener("keydown", esc);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm"
          tabIndex={-1}
        >
          <motion.div
            initial={{ scale: 0.96, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.96, opacity: 0 }}
            transition={{ duration: 0.22, ease: "easeInOut" }}
            className="
              relative 
              rounded-2xl 
              shadow-2xl
              flex flex-col
              items-center
              max-w-3xl w-[90vw] md:w-[60vw] 
              p-0
              overflow-hidden
            "
            style={{
              background: dark,
              minHeight: "400px",
              maxHeight: "80vh",
            }}
            ref={ref}
            tabIndex={0}
          >
            {/* Quadrillage */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none opacity-20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <pattern
                  id="grid"
                  width="40"
                  height="40"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M40 0 L0 0 0 40"
                    fill="none"
                    stroke="#1a2430"
                    strokeWidth="1"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
            {/* Bouton close */}
            <button
              onClick={onClose}
              className="
                absolute top-4 right-4 z-10
                flex items-center justify-center
                w-8 h-8
                rounded-full
                bg-black/20
                focus:ring-2 focus:ring-[#C9A43F]
                transition
                border-none
              "
              aria-label="Fermer"
              style={{
                padding: 0,
                lineHeight: 1,
                cursor: "pointer",
              }}
            >
              <svg
                width={20}
                height={20}
                viewBox="0 0 20 20"
                fill="none"
                stroke="#9ca3af"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ display: "block" }}
              >
                <line x1="5" y1="5" x2="15" y2="15" />
                <line x1="15" y1="5" x2="5" y2="15" />
              </svg>
            </button>

            {/* Contenu */}
            <div className="relative flex flex-col items-center px-8 pt-10 pb-8 w-full">
              {image && (
                <img
                  src={image}
                  alt={title}
                  className="rounded-xl shadow-lg max-w-full mb-6"
                  style={{
                    width: "100%",
                    maxWidth: 440,
                    objectFit: "cover",
                    background: "#181c20",
                    border: `2px solid ${gold}`,
                  }}
                />
              )}
              <h2
                className="text-2xl font-bold mb-2"
                style={{ color: gold, textAlign: "center" }}
              >
                {title}
              </h2>
              <p
                className="text-base text-gray-300 text-center"
                style={{ maxWidth: 500 }}
              >
                {description}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ----------- MODAL PACKS DETAILS ----------- */
function PacksDetailsModal({ open, onClose }) {
  // ESC pour fermer + focus trap
  const ref = useRef(null);
  useEffect(() => {
    if (!open) return;
    const esc = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", esc);
    setTimeout(() => ref.current && ref.current.focus(), 100);
    return () => window.removeEventListener("keydown", esc);
  }, [open, onClose]);
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm"
          tabIndex={-1}
        >
          <button
            onClick={onClose}
            className="
              fixed top-8 right-8 z-[60]
              flex items-center justify-center
              w-9 h-9
              rounded-full
              bg-black/20
              focus:ring-2 focus:ring-[#C9A43F]
              transition
              border-none
              cursor-pointer
              group
            "
            aria-label="Fermer"
          >
            <svg
              width={20}
              height={20}
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-gray-400 group-hover:text-white"
              style={{ display: "block" }}
            >
              <line x1="5" y1="5" x2="15" y2="15" />
              <line x1="15" y1="5" x2="5" y2="15" />
            </svg>
          </button>
          <motion.div
            initial={{ scale: 0.97, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.97, opacity: 0 }}
            transition={{ duration: 0.22, ease: "easeInOut" }}
            className="
              relative rounded-2xl shadow-2xl flex flex-col items-center
              max-w-3xl w-[95vw] md:w-[65vw] p-0 overflow-y-auto
            "
            style={{
              background: dark,
              minHeight: "420px",
              maxHeight: "92vh",
            }}
            ref={ref}
            tabIndex={0}
          >
            {/* Quadrillage de fond */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none opacity-20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <pattern
                  id="grid"
                  width="40"
                  height="40"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M40 0 L0 0 0 40"
                    fill="none"
                    stroke="#1a2430"
                    strokeWidth="1"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>

            <div className="relative flex flex-col items-center px-8 pt-10 pb-8 w-full">
              <h2
                className="text-2xl font-bold mb-6 text-center"
                style={{ color: gold }}
              >
                Détail complet des packs & forfaits
              </h2>
              <div className="flex flex-col gap-8 w-full">
                {/* ---- Packs clé en main encadré ---- */}
                <div className="flex justify-center">
                  <span
                    className="
                      px-6 py-2
                      rounded-xl
                      border
                      border-[#C9A43F]
                      bg-[#11182055]
                      text-xl font-bold
                      text-center
                      shadow
                    "
                    style={{ color: gold }}
                  >
                    Packs clé en main
                  </span>
                </div>
                {fullPacks.map((pack) => (
                  <div
                    key={pack.title}
                    className="w-full mb-2 pb-2 border-b border-gray-700 last:border-none"
                  >
                    <div className="flex items-baseline justify-between flex-wrap mb-2">
                      <span
                        className="text-lg font-bold underline"
                        style={{
                          color: gold,
                          textUnderlineOffset: "3px",
                          textDecorationThickness: "1px",
                          textDecorationColor: gold,
                        }}
                      >
                        {pack.title}
                      </span>
                      <span
                        className="text-base font-extrabold"
                        style={{ color: gold }}
                      >
                        {pack.price}
                      </span>
                    </div>
                    <p className="mb-2 text-gray-300">{pack.desc}</p>
                    <div className="flex flex-col md:flex-row gap-8">
                      <div className="flex-1">
                        <p
                          className="font-semibold mb-1"
                          style={{ color: gold }}
                        >
                          Inclus :
                        </p>
                        <ul className="list-disc list-inside text-gray-200 text-sm space-y-1">
                          {pack.inclus.map((inc, idx) => (
                            <li key={idx}>{inc}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="flex-1">
                        <p
                          className="font-semibold mb-1"
                          style={{ color: gold }}
                        >
                          Non inclus :
                        </p>
                        <ul className="list-disc list-inside text-gray-400 text-sm space-y-1">
                          {pack.exclus.map((exc, idx) => (
                            <li key={idx}>{exc}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
                {/* ---- Abonnements & évolutions encadré ---- */}
                <div className="flex justify-center mt-8">
                  <span
                    className="
                      px-6 py-2
                      rounded-xl
                      border
                      border-[#C9A43F]
                      bg-[#11182055]
                      text-xl font-bold
                      text-center
                      shadow
                    "
                    style={{ color: gold }}
                  >
                    Abonnements & évolutions
                  </span>
                </div>
                {maintenancePacks.map((pack) => (
                  <div
                    key={pack.title}
                    className="w-full mb-2 pb-2 border-b border-gray-700 last:border-none"
                  >
                    <div className="flex items-baseline justify-between flex-wrap mb-2">
                      <span
                        className="text-lg font-bold underline"
                        style={{
                          color: gold,
                          textUnderlineOffset: "3px",
                          textDecorationThickness: "1px",
                          textDecorationColor: gold,
                        }}
                      >
                        {pack.title}
                      </span>
                      <span
                        className="text-base font-extrabold"
                        style={{ color: gold }}
                      >
                        {pack.price}
                      </span>
                    </div>
                    <p className="mb-2 text-gray-300">{pack.desc}</p>
                    <div className="flex flex-col md:flex-row gap-8">
                      <div className="flex-1">
                        <p
                          className="font-semibold mb-1"
                          style={{ color: gold }}
                        >
                          Inclus :
                        </p>
                        <ul className="list-disc list-inside text-gray-200 text-sm space-y-1">
                          {pack.inclus.map((inc, idx) => (
                            <li key={idx}>{inc}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="flex-1">
                        <p
                          className="font-semibold mb-1"
                          style={{ color: gold }}
                        >
                          Non inclus :
                        </p>
                        <ul className="list-disc list-inside text-gray-400 text-sm space-y-1">
                          {pack.exclus.map((exc, idx) => (
                            <li key={idx}>{exc}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ----------- PAGE PRINCIPALE ----------- */
export default function PlaquetteGraphique() {
  const [modalIdx, setModalIdx] = useState(null);
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [error, setError] = useState("");
  const [confirmation, setConfirmation] = useState("");
  const webhookUrl =
    "https://hook.eu2.make.com/zowogdole3pdp1u3rnp96erblyok8amw";

  function handleLeadForm(e) {
    e.preventDefault();
    setError(""); // Reset l'erreur

    const form = e.target;
    const prenom = form.prenom.value.trim();
    const telephone = form.telephone.value.trim();
    const email = form.email.value.trim();
    const besoin = form.besoin.value.trim();

    // Validation custom
    if (!prenom) {
      setError("Merci de renseigner votre prénom.");
      form.prenom.focus();
      return;
    }
    if (!besoin) {
      setError("Merci d'indiquer votre besoin.");
      form.besoin.focus();
      return;
    }
    if (!telephone && !email) {
      setError(
        "Veuillez renseigner au moins un numéro de téléphone ou un email."
      );
      form.telephone.focus();
      return;
    }

    const data = { prenom, telephone, email, besoin };
    // Envoie vers Make
    fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then(() => {
        setConfirmation("Merci, je vous rappelle très vite !");
        setTimeout(() => setConfirmation(""), 4000);
        form.reset();
        setError("");
      })
      .catch(() => {
        setError("Erreur lors de l’envoi. Merci de réessayer.");
      });
    form.reset(); // Un seul reset suffit
    setError(""); // Efface l'erreur si submit réussi
  }

  const openCalendly = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: "https://calendly.com/fabien-joret-consulting/1h?hide_event_type_details=1&hide_gdpr_banner=1&background_color=e8eced&primary_color=c9a43f",
      });
    }
  };

  return (
    <div className="relative font-sans text-white" style={{ background: dark }}>
      <GridBG />
      <FixedLines />

      <div className="relative max-w-6xl mx-auto px-4 md:px-10 py-16 space-y-10 md:space-y-20">
        {/* Logo */}
        <header className="flex items-center justify-center md:justify-between">
          <img src={logoSrc} alt="Logo FJC" width={120} height={120} />
        </header>

        {/* HERO = TOUT dans un seul bloc */}
        <section className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-10 md:gap-20 py-16 px-4 md:px-8">
          {/* Colonne gauche : texte */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-6 flex-1">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-extrabold"
              style={{ color: gold }}
            >
              Moins de clics, plus de business.
            </motion.h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-xl">
              Des workflows sans friction qui libèrent vos équipes et propulsent
              votre croissance.&nbsp;
            </p>
            <Button
              onClick={openCalendly}
              className="bg-transparent border-2 rounded-md px-8 py-3"
              style={{ borderColor: gold, color: gold }}
            >
              Réservez votre audit gratuit
            </Button>
          </div>
          {/* Colonne droite : photo */}
          <div
            className="relative flex-shrink-0 mt-10 md:mt-0"
            style={{
              width: "260px",
              height: "260px",
              transform: `scale(${photoScale})`,
              transformOrigin: "top center",
            }}
          >
            <div className="absolute inset-0">
              <div
                className="w-full h-full bg-center bg-no-repeat bg-cover"
                style={{
                  clipPath:
                    "polygon(25% 0,75% 0,100% 50%,75% 100%,25% 100%,0 50%)",
                  backgroundImage: `url('${photoSrc}')`,
                  backgroundSize: "cover",
                }}
              />
            </div>
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                clipPath:
                  "polygon(25% 0,75% 0,100% 50%,75% 100%,25% 100%,0 50%)",
                border: `3px solid ${gold}`,
              }}
            />
          </div>
        </section>

        {/* Spacer mobile only */}
        <div className="block md:hidden" style={{ height: 40 }}></div>
        <div className="w-full flex flex-col items-center justify-center mt-0 md:mt-16 mb-0">
          {/* FORMULAIRE = EN DEHORS DU HERO */}
          <div className="w-full flex flex-col items-center justify-center mt-2 md:mt-16 mb-0">
            <form
              onSubmit={handleLeadForm}
              className="
                w-full max-w-full md:max-w-5xl
                flex flex-col md:flex-row
                items-center
                justify-center
                gap-2
                bg-[#1a2430cc]
                rounded-xl
                border border-[#C9A43F]
                p-4
                shadow-lg
              "
              style={{ minHeight: 70 }}
            >
              <input
                name="prenom"
                placeholder="Prénom"
                className="w-full flex-1 min-w-0 px-4 py-2 mb-2 md:mb-0 rounded bg-[#181c20] text-white focus:ring-2 focus:ring-[#C9A43F] border border-gray-700/40"
              />
              <input
                name="telephone"
                placeholder="Téléphone"
                className="w-full flex-1 min-w-0 px-4 py-2 mb-2 md:mb-0 rounded bg-[#181c20] text-white focus:ring-2 focus:ring-[#C9A43F] border border-gray-700/40"
              />
              <input
                name="email"
                placeholder="Email"
                type="email"
                className="w-full flex-1 min-w-0 px-4 py-2 mb-2 md:mb-0 rounded bg-[#181c20] text-white focus:ring-2 focus:ring-[#C9A43F] border border-gray-700/40"
              />
              <input
                name="besoin"
                placeholder="Votre besoin en 1 phrase"
                className="w-full flex-[2] min-w-0 px-4 py-2 mb-2 md:mb-0 rounded bg-[#181c20] text-white focus:ring-2 focus:ring-[#C9A43F] border border-gray-700/40"
              />
              <Button
                type="submit"
                className="w-full md:w-auto min-w-[130px]"
                style={{ background: gold, color: dark, border: "none" }}
              >
                Être rappelé
              </Button>
            </form>
            {/* Message d’erreur stylé, sous le form */}
            {error && (
              <div className="mt-3 px-4 py-2 bg-red-800/80 text-sm text-red-200 rounded-xl border border-red-400 shadow">
                {error}
              </div>
            )}
            {/* Message de confirmation stylé */}
            {confirmation && (
              <div className="mt-3 px-4 py-2 bg-green-800/90 text-sm text-green-100 rounded-xl border border-green-400 shadow transition-all duration-500">
                {confirmation}
              </div>
            )}
            <span className="text-xs text-gray-400 mt-1 mb-0 w-full text-center">
              Aucune pub, aucune vente de données. Juste un rappel personnalisé,
              c’est tout.
            </span>
          </div>
        </div>
        {/* Vos douleurs */}
        <section className="pt-6 md:pt-1">
          <h2
            className="text-3xl font-bold mb-8 text-center"
            style={{ color: gold }}
          >
            Vos douleurs, mes solutions
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {pains.map(([title, sol]) => (
              <Card key={title} hoverEffect={false}>
                <div className="flex items-center space-x-4">
                  <CheckCircle />
                  <div>
                    <p className="font-semibold" style={{ color: gold }}>
                      {title}
                    </p>
                    <p className="text-gray-400 text-sm">{sol}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Carrousel */}
        <ScreenshotCarousel />

        {/* Exemples */}
        <section>
          <h2
            className="text-3xl font-bold mb-8 text-center"
            style={{ color: gold }}
          >
            Exemples concrets de gains de temps
          </h2>
          <div className="grid grid-cols-1 gap-6">
            {examples.map(([b, boost, t], idx) => (
              <Card
                key={b}
                onClick={() => setModalIdx(idx)}
                className="w-full rounded-2xl border border-gray-700/60 bg-[#111820cc] backdrop-blur shadow-md cursor-pointer transition hover:scale-[1.02]"
                style={{ transition: "transform 0.2s" }}
              >
                {/* --- MOBILE --- */}
                <div className="flex flex-col items-center md:hidden w-full">
                  <p
                    className="font-medium break-words text-center"
                    style={{ color: gold }}
                  >
                    {b}
                  </p>
                  <p className="text-gray-400 text-sm break-words text-center mt-1">
                    {boost}
                  </p>
                  <p
                    className="font-extrabold break-words text-center mt-1"
                    style={{ color: gold }}
                  >
                    {t}
                  </p>
                  {/* Badge + chevron */}
                  <span
                    className="mt-3 flex flex-row items-center justify-center bg-[#1a2430] text-[#C9A43F] text-xs px-3 py-1 rounded font-semibold shadow focus:outline-none active:scale-95"
                    tabIndex={-1}
                    aria-label="Voir le détail"
                    style={{ pointerEvents: "none" }}
                  >
                    <span>Comment ?</span>
                    <Chevron size={18} color={gold} />
                  </span>
                </div>
                {/* --- DESKTOP --- */}
                <CardContent className="hidden md:grid md:grid-cols-3 gap-2 items-center w-full">
                  <div className="text-left justify-self-start min-w-0">
                    <p
                      className="font-medium break-words"
                      style={{ color: gold }}
                    >
                      {b}
                    </p>
                  </div>
                  <div className="text-left md:text-center justify-self-start md:justify-self-center min-w-0">
                    <p className="text-gray-400 text-sm break-words">{boost}</p>
                  </div>
                  <div className="text-left md:text-right justify-self-start md:justify-self-end min-w-0">
                    <p
                      className="font-extrabold break-words"
                      style={{ color: gold }}
                    >
                      {t}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          {/* Popup MODAL */}
          <ExampleModal
            open={modalIdx !== null}
            onClose={() => setModalIdx(null)}
            image={modalIdx !== null ? exampleImages[modalIdx] : ""}
            title={modalIdx !== null ? exampleTitles[modalIdx] : ""}
            description={modalIdx !== null ? exampleDescriptions[modalIdx] : ""}
          />
        </section>

        {/* Packs clé en main */}
        <section>
          <h2
            className="text-3xl font-bold mb-8 text-center md:text-center"
            style={{ color: gold }}
          >
            Packs clé en main
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {packs.map(({ title, desc, price, featured }) => {
              const base =
                "rounded-2xl p-6 flex flex-col justify-between shadow-md";
              const darkCard = `${base} border border-gray-700/60 bg-[#111820cc] backdrop-blur`;
              const goldCard = base;
              return (
                <Card
                  key={title}
                  className={featured ? goldCard : darkCard + " w-full"}
                  style={featured ? { backgroundColor: gold, color: dark } : {}}
                  hoverEffect={false}
                >
                  <div className="flex flex-col justify-center items-center text-center w-full h-full">
                    <h3
                      className="text-xl font-bold w-full"
                      style={{ color: featured ? dark : gold }}
                    >
                      {title}
                    </h3>
                    <p
                      className="my-4 text-sm w-full"
                      style={{ color: featured ? dark : "#9ca3af" }}
                    >
                      {desc}
                    </p>
                    <p
                      className="text-3xl font-extrabold w-full"
                      style={{ color: featured ? dark : gold }}
                    >
                      {price}
                    </p>
                  </div>
                </Card>
              );
            })}
          </div>
          <div className="flex justify-center mt-8">
            <Button
              className="bg-transparent border-2 rounded-md px-8 py-3"
              style={{ borderColor: gold, color: gold }}
              onClick={() => setDetailsOpen(true)}
            >
              Détails des packs
            </Button>
          </div>
          <PacksDetailsModal
            open={detailsOpen}
            onClose={() => setDetailsOpen(false)}
          />
        </section>

        {/* Méthodo express */}
        <section className="text-center space-y-4">
          <div className="flex justify-center">
            <CalendarCheck />
          </div>
          <h2 className="text-3xl font-bold" style={{ color: gold }}>
            Méthodo express
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            {steps.map(({ number, title, duration }, idx) => (
              <React.Fragment key={number}>
                <div
                  className="
                    w-5/6 sm:w-60         
                    h-auto sm:h-36        
                    flex flex-col items-center
                    space-y-1             
                    p-4
                    border border-gray-700/60
                    bg-[#111820cc] backdrop-blur shadow-md
                    rounded-2xl
                    text-center
                  "
                  style={{
                    height: window.innerWidth >= 640 ? "9rem" : "auto",
                  }}
                >
                  <p className="text-lg font-bold" style={{ color: gold }}>
                    {number}
                  </p>
                  <p className="text-sm" style={{ color: "#9ca3af" }}>
                    {title}
                  </p>
                  <p className="text-lg font-bold" style={{ color: gold }}>
                    {duration}
                  </p>
                </div>
                {idx < steps.length - 1 && (
                  <>
                    <div className="hidden md:flex items-center">
                      <ArrowRight />
                    </div>
                    <div className="flex md:hidden items-center">
                      <ArrowDown />
                    </div>
                  </>
                )}
              </React.Fragment>
            ))}
          </div>
        </section>

        {/* CTA & Footer */}
        <section className="text-center space-y-6">
          <Button
            onClick={openCalendly}
            className="bg-transparent border-2 rounded-md px-8 py-3"
            style={{ borderColor: gold, color: gold }}
          >
            Réservez votre audit gratuit
          </Button>
          <p className="text-gray-400 text-sm">
            <span style={{ color: gold }}>✉︎</span>{" "}
            fabien.joret.consulting@gmail.com&nbsp;|&nbsp;
            <span style={{ color: gold }}>☎︎</span>{" "}
            +33&nbsp;6&nbsp;82&nbsp;28&nbsp;55&nbsp;07
          </p>
          <p className="text-xs" style={{ color: gold }}>
            © FJ Consulting
          </p>
        </section>
      </div>
    </div>
  );
}
