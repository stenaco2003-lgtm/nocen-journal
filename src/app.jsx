import { useState } from "react";

/* ============================================================
   NOCEN JOURNAL SITE — edit everything in CONFIG below.
   Deploy: drop into a Vite + React app as App.jsx (Vercel-ready).
   ============================================================ */

const CONFIG = {
  journalName: "NOCEN Journal of Music and Performing Arts",
  shortName: "NJMPA",
  // Embedded for preview; for production you may instead put the file in /public and set logo: "/nocen-logo.jpg"
  logo: "data:image/jpeg;base64,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",
  institution: "Department of Music, Nwafor Orizu College of Education, Nsugbe",
  issnPrint: "ISSN (Print): pending",
  issnOnline: "ISSN (Online): pending",
  volume: "Volume 1, Issue 1",
  year: "2026",
  email: "nzelu.tochukwu@nocen.edu.ng",
  submissionDeadline: "31 October 2026",
  apcNote:
    "Article processing fee: \u20A625,000 payable on acceptance. No submission fee.",
  board: [
    { role: "Editor-in-Chief", name: "Dr. Chuma Chukwuka", inst: "[Institution]" },
    { role: "Managing Editor", name: "Nzelu Tochukwu", inst: "NOCEN, Nsugbe" },
    { role: "Associate Editor", name: "[Name]", inst: "[Institution]" },
    { role: "Editorial Adviser", name: "Okoli Chukwuebuka", inst: "Head, Department of Music, NOCEN, Nsugbe" },
    { role: "Editorial Adviser", name: "Okoye Adaobi", inst: "NOCEN, Nsugbe" },
  ],
  scope: [
    "African musicology and indigenous musical practice",
    "Choral conducting, church music and liturgical studies",
    "Music education, pedagogy and curriculum studies",
    "Ethnomusicology and cultural studies",
    "Music technology, production and the creative economy",
    "Dance, theatre and allied performing arts",
  ],
};

const C = {
  ink: "#141B33",
  ink2: "#232D52",
  paper: "#FBF8F1",
  paper2: "#F2EDE1",
  brass: "#B8923B",
  brassDark: "#8C6D24",
  blue: "#31518F",
  mut: "#5C6072",
  line: "#D8D2C2",
};

/* Five hairlines — a musical staff used as the journal's rule/divider */
function Staff({ color = C.line, width = "100%" }) {
  return (
    <div aria-hidden="true" style={{ width }}>
      {[0, 1, 2, 3, 4].map((i) => (
        <div
          key={i}
          style={{
            height: 1,
            background: color,
            marginBottom: i < 4 ? 5 : 0,
            opacity: 0.9,
          }}
        />
      ))}
    </div>
  );
}

function Eyebrow({ children, light }) {
  return (
    <div
      style={{
        fontFamily: "'Archivo', sans-serif",
        fontSize: 11,
        letterSpacing: "0.22em",
        textTransform: "uppercase",
        color: light ? C.brass : C.brassDark,
        marginBottom: 14,
      }}
    >
      {children}
    </div>
  );
}

const TABS = ["Home", "About", "Editorial Board", "For Authors", "Call for Papers", "Contact"];

export default function App() {
  const [tab, setTab] = useState("Home");

  return (
    <div style={{ minHeight: "100vh", background: C.paper, color: C.ink }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,600;9..144,700&family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;1,6..72,400&family=Archivo:wght@400;500;600&display=swap');
        * { box-sizing: border-box; margin: 0; }
        body { margin: 0; }
        .nav-btn { background: none; border: none; cursor: pointer; padding: 14px 4px 12px;
          font-family: 'Archivo', sans-serif; font-size: 12px; letter-spacing: 0.14em;
          text-transform: uppercase; color: ${C.mut}; border-bottom: 2px solid transparent; }
        .nav-btn:hover { color: ${C.ink}; }
        .nav-btn.active { color: ${C.ink}; border-bottom-color: ${C.brass}; }
        .nav-btn:focus-visible { outline: 2px solid ${C.blue}; outline-offset: 2px; }
        @media (prefers-reduced-motion: reduce) { * { transition: none !important; } }
        .wrap { max-width: 880px; margin: 0 auto; padding: 0 22px; }
        h2.display { font-family: 'Fraunces', serif; font-weight: 600; font-size: clamp(26px, 4vw, 36px); line-height: 1.15; margin-bottom: 18px; }
        p.body, li.body { font-family: 'Newsreader', serif; font-size: 18px; line-height: 1.65; color: ${C.ink2}; }
        p.body + p.body { margin-top: 14px; }
      `}</style>

      {/* ---------- Masthead ---------- */}
      <header style={{ background: C.ink, color: C.paper, padding: "0 0 0" }}>
        <div className="wrap" style={{ paddingTop: 34, paddingBottom: 30 }}>
          {CONFIG.logo && (
            <img
              src={CONFIG.logo}
              alt="NOCEN logo"
              onError={(e) => { e.currentTarget.style.display = "none"; }}
              style={{
                height: 68,
                width: "auto",
                marginBottom: 20,
                background: "#FFFFFF",
                borderRadius: 10,
                padding: 6,
              }}
            />
          )}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              fontFamily: "'Archivo', sans-serif",
              fontSize: 11,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#A9B0C9",
              marginBottom: 26,
              gap: 12,
              flexWrap: "wrap",
            }}
          >
            <span>{CONFIG.volume} · {CONFIG.year}</span>
            <span>{CONFIG.issnOnline}</span>
          </div>

          <h1
            style={{
              fontFamily: "'Fraunces', serif",
              fontWeight: 700,
              fontSize: "clamp(34px, 6vw, 60px)",
              lineHeight: 1.06,
              maxWidth: 720,
              marginBottom: 22,
            }}
          >
            {CONFIG.journalName}
          </h1>

          <Staff color={C.brass} width="180px" />

          <p
            style={{
              fontFamily: "'Newsreader', serif",
              fontSize: 17,
              lineHeight: 1.55,
              color: "#C8CCDD",
              maxWidth: 560,
              marginTop: 22,
            }}
          >
            A peer-reviewed journal of {CONFIG.institution}.
          </p>
        </div>
      </header>

      {/* ---------- Nav ---------- */}
      <nav
        style={{
          background: C.paper,
          borderBottom: `1px solid ${C.line}`,
          position: "sticky",
          top: 0,
          zIndex: 10,
        }}
      >
        <div
          className="wrap"
          style={{ display: "flex", gap: 20, overflowX: "auto", whiteSpace: "nowrap" }}
        >
          {TABS.map((t) => (
            <button
              key={t}
              className={`nav-btn ${tab === t ? "active" : ""}`}
              onClick={() => setTab(t)}
            >
              {t}
            </button>
          ))}
        </div>
      </nav>

      {/* ---------- Content ---------- */}
      <main className="wrap" style={{ paddingTop: 52, paddingBottom: 80 }}>
        {tab === "Home" && (
          <>
            <Eyebrow>Maiden Edition</Eyebrow>
            <h2 className="display">Scholarship in African music, from Nsugbe to the world.</h2>
            <p className="body">
              The {CONFIG.shortName} publishes original research in musicology,
              music education, ethnomusicology and the performing arts, with a
              particular interest in indigenous African musical practice and its
              meeting points with contemporary scholarship.
            </p>
            <p className="body">
              Our maiden edition is now open for submissions. Manuscripts are
              double-blind peer reviewed and published online ahead of print.
            </p>
            <div style={{ margin: "34px 0" }}>
              <Staff />
            </div>
            <Eyebrow>Now accepting manuscripts</Eyebrow>
            <p className="body">
              Deadline for the maiden edition: <strong>{CONFIG.submissionDeadline}</strong>.
              See the Call for Papers for themes and the For Authors page for
              submission requirements.
            </p>
            <button
              onClick={() => setTab("Call for Papers")}
              style={{
                marginTop: 24,
                padding: "13px 26px",
                background: C.ink,
                color: C.paper,
                border: "none",
                cursor: "pointer",
                fontFamily: "'Archivo', sans-serif",
                fontSize: 13,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
            >
              Read the call for papers
            </button>
          </>
        )}

        {tab === "About" && (
          <>
            <Eyebrow>About the journal</Eyebrow>
            <h2 className="display">Aims and scope</h2>
            <p className="body">
              The {CONFIG.journalName} ({CONFIG.shortName}) is a peer-reviewed
              academic journal published by the {CONFIG.institution}. The journal
              provides a platform for rigorous scholarship on music and the
              performing arts in Africa and beyond, welcoming theoretical,
              empirical and practice-based contributions.
            </p>
            <p className="body">The journal welcomes papers in the following areas:</p>
            <ul style={{ marginTop: 12, paddingLeft: 22 }}>
              {CONFIG.scope.map((s) => (
                <li key={s} className="body" style={{ marginBottom: 8 }}>
                  {s}
                </li>
              ))}
            </ul>
            <div style={{ margin: "34px 0" }}>
              <Staff />
            </div>
            <Eyebrow>Peer review</Eyebrow>
            <p className="body">
              All submissions undergo double-blind peer review by at least two
              reviewers with relevant expertise. First decisions are
              communicated within eight weeks of submission.
            </p>
          </>
        )}

        {tab === "Editorial Board" && (
          <>
            <Eyebrow>People</Eyebrow>
            <h2 className="display">Editorial board</h2>
            <div style={{ marginTop: 28 }}>
              {CONFIG.board.map((m, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 8,
                    justifyContent: "space-between",
                    alignItems: "baseline",
                    padding: "16px 0",
                    borderBottom: `1px solid ${C.line}`,
                  }}
                >
                  <div>
                    <div
                      style={{
                        fontFamily: "'Fraunces', serif",
                        fontWeight: 600,
                        fontSize: 19,
                      }}
                    >
                      {m.name}
                    </div>
                    <div
                      style={{
                        fontFamily: "'Newsreader', serif",
                        color: C.mut,
                        fontSize: 16,
                      }}
                    >
                      {m.inst}
                    </div>
                  </div>
                  <div
                    style={{
                      fontFamily: "'Archivo', sans-serif",
                      fontSize: 11,
                      letterSpacing: "0.16em",
                      textTransform: "uppercase",
                      color: C.brassDark,
                    }}
                  >
                    {m.role}
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {tab === "For Authors" && (
          <>
            <Eyebrow>Submission guidelines</Eyebrow>
            <h2 className="display">Preparing your manuscript</h2>
            <p className="body">
              Manuscripts should be original, unpublished work not under
              consideration elsewhere. Submissions are made by email to{" "}
              <strong>{CONFIG.email}</strong> as a Microsoft Word document.
            </p>
            <div style={{ margin: "30px 0" }}>
              <Staff />
            </div>
            <ul style={{ paddingLeft: 22 }}>
              {[
                "Length: 4,000 to 7,000 words including references.",
                "Abstract of not more than 250 words with five keywords.",
                "Referencing: APA 7th edition throughout.",
                "Format: Times New Roman, 12 point, double spaced, A4.",
                "A separate title page carrying author names, affiliations and contact details; the manuscript itself must be anonymised for blind review.",
                "Musical examples and figures embedded in the text and also supplied as separate high-resolution files.",
              ].map((g) => (
                <li key={g} className="body" style={{ marginBottom: 10 }}>
                  {g}
                </li>
              ))}
            </ul>
            <p className="body" style={{ marginTop: 20 }}>
              {CONFIG.apcNote}
            </p>
          </>
        )}

        {tab === "Call for Papers" && (
          <>
            <Eyebrow>{CONFIG.volume} · {CONFIG.year}</Eyebrow>
            <h2 className="display">Call for papers: maiden edition</h2>
            <p className="body">
              The editorial board invites well-researched manuscripts for the
              maiden edition of the {CONFIG.shortName}. We particularly welcome
              contributions on indigenous African music, choral practice, music
              education in Nigerian institutions, and the performing arts in the
              creative economy, though all papers within the journal's scope
              will be considered.
            </p>
            <div
              style={{
                background: C.paper2,
                border: `1px solid ${C.line}`,
                padding: "24px 26px",
                margin: "30px 0",
              }}
            >
              <div
                style={{
                  fontFamily: "'Archivo', sans-serif",
                  fontSize: 11,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: C.brassDark,
                  marginBottom: 10,
                }}
              >
                Key dates
              </div>
              <p className="body">
                Submission deadline: <strong>{CONFIG.submissionDeadline}</strong>
                <br />
                Decisions communicated: within 8 weeks of submission
                <br />
                Publication: online first, print to follow
              </p>
            </div>
            <p className="body">
              Send manuscripts to <strong>{CONFIG.email}</strong> with the
              subject line "{CONFIG.shortName} Maiden Edition Submission".
            </p>
          </>
        )}

        {tab === "Contact" && (
          <>
            <Eyebrow>Contact</Eyebrow>
            <h2 className="display">Reach the editorial office</h2>
            <p className="body">
              {CONFIG.institution}
              <br />
              Nsugbe, Anambra State, Nigeria
            </p>
            <p className="body">
              Email: <strong>{CONFIG.email}</strong>
            </p>
            <p className="body">
              For enquiries about submissions in progress, quote your manuscript
              title in the subject line.
            </p>
          </>
        )}
      </main>

      {/* ---------- Footer ---------- */}
      <footer style={{ background: C.ink, color: "#A9B0C9", padding: "34px 0" }}>
        <div className="wrap">
          <Staff color="#3A4468" width="140px" />
          <p
            style={{
              fontFamily: "'Archivo', sans-serif",
              fontSize: 12,
              letterSpacing: "0.06em",
              marginTop: 20,
              lineHeight: 1.8,
            }}
          >
            © {CONFIG.year} {CONFIG.journalName} · {CONFIG.institution}
            <br />
            {CONFIG.issnPrint} · {CONFIG.issnOnline}
          </p>
        </div>
      </footer>
    </div>
  );
}
