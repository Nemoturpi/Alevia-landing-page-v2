// Shared wireframe primitives: hand-drawn-feel building blocks
// All variants compose these.

const Lines = ({ count = 3, widths = [100, 90, 70], thin = false, faint = false }) => (
  <div className="col" style={{ gap: 6 }}>
    {Array.from({ length: count }).map((_, i) => (
      <div key={i}
        className={`wf-line ${thin ? 'thin' : ''} ${faint ? 'faint' : ''}`}
        style={{ width: `${widths[i % widths.length]}%` }} />
    ))}
  </div>
);

const Tag = ({ children, variant }) => (
  <span className={`wf-tag ${variant || ''}`}>{children}</span>
);

const Btn = ({ children, variant, size = 'md' }) => (
  <span className={`wf-btn ${variant || ''}`}
    style={size === 'sm' ? { padding: '5px 10px', fontSize: 10 } : {}}>
    {children}
  </span>
);

const Squiggle = ({ w = '100%' }) => (
  <div className="wf-squiggle" style={{ width: w }} />
);

const SectionRule = ({ children, dashed }) => (
  <div className={`wf-section-rule ${dashed ? 'dashed' : ''}`}>
    <span>{children}</span>
  </div>
);

// Sketchy heading — looks handwritten
const Sketch = ({ children, size = 28, weight = 700, accent = false, italic = false }) => (
  <div style={{
    fontFamily: "'Caveat', cursive",
    fontSize: size,
    lineHeight: 1.05,
    fontWeight: weight,
    fontStyle: italic ? 'italic' : 'normal',
    color: accent ? 'var(--accent)' : 'var(--ink)',
    letterSpacing: '-0.01em',
  }}>{children}</div>
);

// Clean type for actual copy snippets
const Type = ({ children, size = 11, weight = 400, italic = false, color, style }) => (
  <div style={{
    fontFamily: "'Kalam', sans-serif",
    fontSize: size,
    lineHeight: 1.45,
    fontWeight: weight,
    fontStyle: italic ? 'italic' : 'normal',
    color: color || 'var(--ink)',
    ...style,
  }}>{children}</div>
);

const ImgBox = ({ w = '100%', h = 120, label, style }) => (
  <div className="wf-img" style={{ width: w, height: h, ...style }}>
    {label && <div style={{
      position: 'absolute', inset: 0,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontFamily: "'Caveat', cursive", fontSize: 14, color: 'var(--ink-soft)',
      background: 'rgba(251,250,246,.7)', zIndex: 1,
    }}>{label}</div>}
  </div>
);

const Sticky = ({ children, rotate = -2, style }) => (
  <div className="wf-sticky" style={{ transform: `rotate(${rotate}deg)`, ...style }}>{children}</div>
);

// Browser chrome
const BrowserBar = ({ url = 'alevia-conseil.fr' }) => (
  <div className="wf-bar">
    <div className="dot" /><div className="dot" /><div className="dot" />
    <div className="url">{url}</div>
    <span style={{ opacity: .6 }}>FR</span>
  </div>
);

// Logo placeholder for AleVia (the V is red)
const LogoMark = ({ size = 16 }) => (
  <div style={{
    fontFamily: 'Georgia, serif', fontSize: size, fontWeight: 600,
    letterSpacing: '.04em', color: 'var(--ink)', display: 'inline-flex',
  }}>
    Ale<span style={{ color: 'var(--accent)' }}>V</span>ia
  </div>
);

// Top nav (shared across all variants but styled simply)
const TopNav = ({ variant = 'classic' }) => (
  <div className="row" style={{
    alignItems: 'center', justifyContent: 'space-between',
    padding: '4px 0 16px', borderBottom: variant === 'dossier' ? '1.5px solid var(--ink)' : 'none',
  }}>
    <LogoMark size={18} />
    <div className="row" style={{ gap: 14, fontFamily: "'Kalam', sans-serif", fontSize: 10, color: 'var(--ink-soft)' }}>
      <span>À qui</span><span>Ce qu'on fait</span><span>Pourquoi</span><span>Fondatrice</span>
      <Btn size="sm" variant={variant === 'manifesto' ? 'accent' : 'primary'}>Contact</Btn>
    </div>
  </div>
);

// Pain points data
const PAINS = [
  "Vous découvrez les projets de loi quand ils sont déjà trop avancés",
  "Vos sujets sont traités en silos alors qu'ils sont transversaux",
  "Vos notes sont solides, mais vous n'êtes pas dans la pièce",
  "Vos obligations légales ne deviennent jamais un levier de plaidoyer",
  "Vous manquez de relais institutionnels",
];

const SECTORS = [
  ['🧬', 'Santé globale & One Health', 'Fédérations et associations de santé, industriels responsables, fondations, réseaux One Health.'],
  ['♿', 'Handicap & accessibilité', 'Fédérations handicap, associations gestionnaires d\'ESMS, collectifs accessibilité numérique.'],
  ['🏥', 'Grand âge & médico-social', 'Groupes et associations du secteur médico-social, opérateurs du grand âge, réseaux d\'établissements.'],
  ['💻', 'Numérique responsable', 'Entreprises et opérateurs numériques, ESN, éditeurs de solutions e-santé, acteurs de l\'accessibilité numérique.'],
  ['🌿', 'Transition écologique', 'Acteurs de l\'énergie et des EnR, fédérations professionnelles, coalitions climat.'],
  ['🤝', 'Mutualité & protection sociale', 'Mutuelles, institutions de prévoyance, fédérations et unions du secteur de la protection sociale.'],
  ['🎭', 'Industries culturelles', 'Institutions culturelles, réseaux professionnels, fondations et opérateurs des ICC.'],
  ['🛡️', 'Sécurité & sûreté privée', 'Entreprises de sécurité privée, fédérations et organisations professionnelles du secteur.'],
];

const LEVERS = [
  ['01', 'Veille & intelligence sociétale', 'Avant que le texte soit déposé, nous sommes déjà informés. Tendances, risques réglementaires et réputationnels.'],
  ['02', "Stratégie d'influence & plaidoyer", "Pas de note qui dort dans un tiroir. Position claire, bons interlocuteurs, échanges organisés."],
  ['03', 'Prise de parole & communication', 'Tribunes, auditions, interviews : chaque prise de parole sert la stratégie, pas seulement la visibilité.'],
];

const ENGAGEMENTS = [
  ['Zéro conflit d\'intérêts', 'Jamais deux acteurs aux intérêts croisés. Limite notre portefeuille, protège votre crédibilité.'],
  ["L'intérêt général comme boussole", 'Biens communs : santé, inclusion, numérique responsable, environnement, culture.'],
  ['Interlocuteur unique', "Nicole reste dans la pièce, de la stratégie à l'exécution."],
  ['Rien de standardisé', 'Chaque mission repart de votre situation réelle.'],
  ['Trois métiers, une adresse', "Droit, journalisme, représentation d'intérêts — exercés de l'intérieur."],
];

const LOGOS_REF = [
  'IHEDN', 'Nexem', 'FFMKR', 'FFMI', 'Valentin Haüy',
  'Addictions France', 'Ligue SEP', 'Fermentalg',
];

Object.assign(window, {
  Lines, Tag, Btn, Squiggle, SectionRule, Sketch, Type, ImgBox, Sticky,
  BrowserBar, LogoMark, TopNav,
  PAINS, SECTORS, LEVERS, ENGAGEMENTS, LOGOS_REF,
});
