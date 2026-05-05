// Variant B — Manifesto / Editorial Statement
// Oversized typographic hero, asymmetric layouts, more "stance" feel.
// Heavy use of red accent, vertical rhythm, big serif-style headlines.

function VariantManifesto() {
  return (
    <div className="wf wf-frame" style={{ width: 980, background: '#fbfaf6' }}>
      <div className="wf-meta">B · Manifesto</div>

      <BrowserBar />
      <div style={{ padding: '24px 40px 0' }}>
        <TopNav variant="manifesto" />
      </div>

      {/* HERO — full-bleed manifesto */}
      <section style={{ padding: '40px 40px 32px', position: 'relative' }}>
        <div className="row" style={{ alignItems: 'center', gap: 12, marginBottom: 18 }}>
          <span style={{ width: 40, height: 1.5, background: 'var(--accent)' }} />
          <Type size={10} color="var(--accent)" weight={700} style={{ letterSpacing: '.25em', textTransform: 'uppercase' }}>
            Santé globale · Handicap · Numérique responsable
          </Type>
        </div>
        <Sketch size={62} weight={700}>
          Vos enjeux<br/>
          de santé et d'inclusion<br/>
          ne peuvent plus rester<br/>
          <span style={{ color: 'var(--accent)', fontStyle: 'italic' }}>en dehors</span> des arbitrages<br/>
          publics.
        </Sketch>
        <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 36, marginTop: 28, alignItems: 'flex-start' }}>
          <div>
            <Type size={13} color="var(--ink)" style={{ borderLeft: '3px solid var(--accent)', paddingLeft: 14, maxWidth: 480 }}>
              AleVia est un cabinet d'affaires publiques spécialisé dans la santé globale (One Health), le handicap, le médico-social et le numérique responsable. Nous aidons les organisations engagées sur les biens communs à <span className="wf-underline">ne plus être oubliées</span> des réformes.
            </Type>
            <div className="row gap-3" style={{ marginTop: 18 }}>
              <Btn variant="accent">Prendre RDV avec Nicole →</Btn>
              <Btn variant="ghost">Comment on obtient des arbitrages</Btn>
            </div>
          </div>
          <div style={{ position: 'relative' }}>
            <ImgBox h={210} label="Illustration One Health" style={{ borderRadius: '50%', aspectRatio: '1', maxWidth: 240, marginLeft: 'auto' }} />
            <div className="wf-note" style={{ bottom: -22, right: 8, color: 'var(--ink-soft)' }}>
              cercle One Health, plus iconographique
            </div>
          </div>
        </div>
      </section>

      {/* Manifesto strap */}
      <section style={{ padding: '24px 40px', background: 'var(--ink)', color: 'var(--paper)', margin: '8px 40px', borderRadius: 4 }}>
        <div className="row" style={{ alignItems: 'center', gap: 24 }}>
          <Sketch size={20} accent>↳</Sketch>
          <Type size={14} color="var(--paper)" italic>
            « Par temps calme comme en période de crise, nous donnons une longueur d'avance aux organisations qui défendent les biens communs. »
          </Type>
        </div>
      </section>

      {/* SECTORS — typographic list, no cards */}
      <section style={{ padding: '40px 40px 24px' }}>
        <div className="row" style={{ alignItems: 'baseline', gap: 16 }}>
          <Type size={11} color="var(--accent)" weight={700} style={{ letterSpacing: '.2em' }}>02 / À QUI NOUS NOUS ADRESSONS</Type>
          <div style={{ flex: 1, height: 1.5, background: 'var(--ink)' }} />
        </div>
        <Sketch size={42} weight={700} style={{ marginTop: 14 }}>
          Aux organisations qui défendent<br/>
          des <span style={{ color: 'var(--accent)' }}>biens communs.</span>
        </Sketch>
        <Type size={12} color="var(--ink-soft)" style={{ marginTop: 12, maxWidth: 520 }}>
          Santé, inclusion, numérique responsable, environnement, culture — qui veulent être reconnues comme forces de proposition légitimes.
        </Type>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0, marginTop: 24 }}>
          {SECTORS.map(([icon, title, body], i) => (
            <div key={title} style={{
              padding: '16px 20px',
              borderTop: '1.5px solid var(--ink)',
              borderRight: i % 2 === 0 ? '1.5px solid var(--ink)' : 'none',
              borderBottom: i >= SECTORS.length - 2 ? '1.5px solid var(--ink)' : 'none',
              display: 'grid', gridTemplateColumns: '32px 1fr', gap: 12, alignItems: 'flex-start',
            }}>
              <Type size={9} color="var(--ink-faint)" weight={700}>0{i+1}</Type>
              <div>
                <div className="row" style={{ gap: 8, alignItems: 'center', marginBottom: 4 }}>
                  <span style={{ fontSize: 16 }}>{icon}</span>
                  <Type size={13} weight={700}>{title}</Type>
                </div>
                <Type size={11} color="var(--ink-soft)">{body}</Type>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PAINS — full-bleed dark */}
      <section style={{ padding: '40px', background: 'var(--ink)', color: 'var(--paper)', margin: '24px 0' }}>
        <Type size={11} color="var(--accent-soft)" weight={700} style={{ letterSpacing: '.2em' }}>03 / CE QUI FAIT MAL</Type>
        <Sketch size={40} weight={700} style={{ marginTop: 8 }}>
          <span style={{ color: 'var(--paper)' }}>Vous vivez peut-être<br/>l'une de ces situations.</span>
        </Sketch>
        <div className="col gap-3" style={{ marginTop: 24 }}>
          {PAINS.map((p, i) => (
            <div key={i} className="row gap-4" style={{ borderTop: '1px solid rgba(255,255,255,.25)', paddingTop: 12, alignItems: 'flex-start' }}>
              <Sketch size={28} accent>0{i+1}.</Sketch>
              <Type size={14} color="var(--paper)" style={{ flex: 1, paddingTop: 4 }}>{p}</Type>
            </div>
          ))}
        </div>
      </section>

      {/* LEVERS — diagonal/asymmetric */}
      <section style={{ padding: '0 40px 32px' }}>
        <Type size={11} color="var(--accent)" weight={700} style={{ letterSpacing: '.2em' }}>04 / CE QUE NOUS FAISONS</Type>
        <Sketch size={42} weight={700} style={{ marginTop: 8 }}>
          Trois leviers d'influence,<br/>
          articulés.
        </Sketch>
        <div className="col" style={{ marginTop: 24, gap: 0 }}>
          {LEVERS.map(([n, title, body], i) => (
            <div key={n} style={{
              display: 'grid',
              gridTemplateColumns: '120px 1fr 1.4fr',
              gap: 24,
              padding: '20px 0',
              borderTop: '1.5px solid var(--ink)',
              borderBottom: i === LEVERS.length - 1 ? '1.5px solid var(--ink)' : 'none',
              alignItems: 'flex-start',
            }}>
              <Sketch size={56} accent>{n}</Sketch>
              <Type size={16} weight={700}>{title}</Type>
              <Type size={12} color="var(--ink-soft)">{body}</Type>
            </div>
          ))}
        </div>
      </section>

      {/* WHY ALEVIA */}
      <section style={{ padding: '32px 40px', background: 'var(--paper-2)', margin: '0 0 32px' }}>
        <div className="row" style={{ alignItems: 'baseline', gap: 12, marginBottom: 14 }}>
          <Type size={11} color="var(--accent)" weight={700} style={{ letterSpacing: '.2em' }}>05 / POURQUOI ALEVIA</Type>
          <div style={{ flex: 1, height: 1, background: 'var(--ink)' }} />
        </div>
        <Sketch size={36} weight={700}>
          Cinq engagements.<br/>
          Pas des arguments marketing.
        </Sketch>
        <div className="col" style={{ marginTop: 20, gap: 0 }}>
          {ENGAGEMENTS.map(([t, b], i) => (
            <div key={t} className="row gap-4" style={{ padding: '14px 0', borderTop: '1px solid var(--ink)', alignItems: 'flex-start' }}>
              <Sketch size={20} accent>—</Sketch>
              <Type size={14} weight={700} style={{ minWidth: 220 }}>{t}</Type>
              <Type size={11.5} color="var(--ink-soft)" style={{ flex: 1 }}>{b}</Type>
            </div>
          ))}
        </div>
      </section>

      {/* LOGOS — single horizontal strip */}
      <section style={{ padding: '0 40px 32px' }}>
        <div className="row" style={{ alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 12 }}>
          <Type size={11} color="var(--accent)" weight={700} style={{ letterSpacing: '.2em' }}>06 / CONFIANCE</Type>
          <Sketch size={20}>+ de 35 organisations</Sketch>
        </div>
        <Sketch size={32} weight={700}>Ils nous font déjà confiance.</Sketch>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(8, 1fr)', gap: 0, marginTop: 18, border: '1.5px solid var(--ink)' }}>
          {LOGOS_REF.map((l, i) => (
            <div key={l} style={{ height: 70, display: 'grid', placeItems: 'center', borderRight: i < LOGOS_REF.length-1 ? '1px solid var(--ink)' : 'none', padding: 6 }}>
              <Type size={9} color="var(--ink-soft)" style={{ textAlign: 'center', lineHeight: 1.1 }}>{l}</Type>
            </div>
          ))}
        </div>
      </section>

      {/* FOUNDER — large portrait, manifesto */}
      <section style={{ padding: '32px 40px', display: 'grid', gridTemplateColumns: '.7fr 1fr', gap: 36, alignItems: 'center' }}>
        <div style={{ position: 'relative' }}>
          <ImgBox h={280} label="Nicole" style={{ aspectRatio: '4/5' }} />
          <div className="wf-box accent" style={{
            position: 'absolute', bottom: -10, left: -10,
            padding: '6px 12px', fontFamily: "'Caveat',cursive", fontSize: 16,
          }}>Nicole Tortello Duban</div>
        </div>
        <div>
          <Type size={11} color="var(--accent)" weight={700} style={{ letterSpacing: '.2em' }}>07 / LA FONDATRICE</Type>
          <Sketch size={32} weight={700} style={{ marginTop: 8 }}>
            Trois métiers,<br/>une seule adresse.
          </Sketch>
          <Type size={12} color="var(--ink-soft)" style={{ marginTop: 12 }}>
            Avocate, journaliste, déléguée générale d'organisation professionnelle — trois métiers exercés <span className="wf-underline">de l'intérieur</span> pour construire des stratégies d'influence qui tiennent dans la vraie vie.
          </Type>
          <div className="col gap-2" style={{ marginTop: 16 }}>
            {[['Avocate','Barreau de Paris · CAPA'],['Journaliste','Rédactrice spécialisée'],['Déléguée générale','Organisation professionnelle']].map(([t,b])=>(
              <div key={t} className="row gap-3" style={{ paddingTop: 8, borderTop: '1px dashed var(--ink)', alignItems: 'baseline' }}>
                <Type size={13} weight={700} style={{ minWidth: 130 }}>{t}</Type>
                <Type size={11} color="var(--ink-soft)">{b}</Type>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT — full-bleed accent */}
      <section style={{ padding: '40px', background: 'var(--accent)', color: '#fff', margin: '24px 0 0' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 36 }}>
          <div>
            <Type size={11} color="rgba(255,255,255,.7)" weight={700} style={{ letterSpacing: '.2em' }}>08 / CONTACT</Type>
            <Sketch size={42} weight={700} style={{ marginTop: 10 }}>
              <span style={{ color: '#fff' }}>Transformons<br/>vos enjeux<br/>en politiques<br/>concrètes.</span>
            </Sketch>
            <Type size={13} color="rgba(255,255,255,.85)" italic style={{ marginTop: 14 }}>
              Consultation gratuite — sans engagement.
            </Type>
          </div>
          <div className="wf-box" style={{ padding: 18, background: 'var(--paper)', color: 'var(--ink)' }}>
            <Type size={11} color="var(--ink-soft)" style={{ marginBottom: 10 }}>
              Expliquez en une phrase la situation qui vous préoccupe.
            </Type>
            {['Prénom & nom', 'Organisation'].map((l) => (
              <div key={l} style={{ marginBottom: 10 }}>
                <Type size={9} color="var(--ink-soft)" style={{ textTransform: 'uppercase', letterSpacing: '.15em' }}>{l}</Type>
                <div style={{ height: 22, borderBottom: '1.5px solid var(--ink)' }} />
              </div>
            ))}
            <Type size={9} color="var(--ink-soft)" style={{ textTransform: 'uppercase', letterSpacing: '.15em' }}>Votre enjeu en une phrase</Type>
            <div style={{ height: 60, border: '1.5px solid var(--ink)', borderRadius: 4, background: 'var(--paper-2)', marginTop: 4 }} />
            <div className="row gap-2" style={{ marginTop: 10, alignItems: 'center' }}>
              <div style={{ width: 12, height: 12, border: '1.5px solid var(--ink)' }} />
              <Type size={10} color="var(--ink-soft)">J'accepte que mes données soient utilisées.</Type>
            </div>
            <div style={{ marginTop: 14 }}>
              <Btn variant="accent">Prendre RDV avec Nicole →</Btn>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <div style={{ padding: '14px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'var(--ink)', color: 'var(--paper)' }}>
        <LogoMark size={14} />
        <Type size={9} color="rgba(255,255,255,.6)">© AleVia Conseil 2026</Type>
      </div>
    </div>
  );
}

window.VariantManifesto = VariantManifesto;
