// Variant C — Modular / Structured
// Tighter modular grid, more corporate, denser. "Dashboard-ish" feel.
// Heavy use of cards/tiles — easier for a content team to maintain.

function VariantModular() {
  return (
    <div className="wf wf-frame" style={{ width: 980 }}>
      <div className="wf-meta">C · Modular Grid</div>

      <BrowserBar />
      <div style={{ padding: '24px 32px 0' }}>
        <TopNav variant="modular" />
      </div>

      {/* HERO — split with stat panel */}
      <section style={{ padding: '12px 32px 24px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
        <div className="wf-box" style={{ padding: 24, display: 'flex', flexDirection: 'column', gap: 14, justifyContent: 'space-between', minHeight: 360 }}>
          <Tag variant="accent">● Affaires publiques · Paris</Tag>
          <div>
            <Sketch size={36} weight={700}>
              Vos enjeux de santé<br/>
              et d'inclusion<br/>
              ne peuvent plus rester<br/>
              <span style={{ color: 'var(--accent)' }}>en dehors</span> des arbitrages.
            </Sketch>
            <Type size={11.5} color="var(--ink-soft)" style={{ marginTop: 14 }}>
              Cabinet d'affaires publiques spécialisé dans la santé globale (One Health), le handicap, le médico-social et le numérique responsable.
            </Type>
          </div>
          <div className="row gap-2">
            <Btn variant="accent">Prendre RDV avec Nicole</Btn>
            <Btn variant="ghost">Comment on obtient des arbitrages</Btn>
          </div>
        </div>
        <div className="col gap-3">
          <div className="wf-box ink" style={{ padding: 18, position: 'relative', minHeight: 220 }}>
            <ImgBox h={180} label="One Health" style={{ background: 'rgba(255,255,255,.06)', borderColor: 'rgba(255,255,255,.4)' }} />
            <div className="wf-note" style={{ bottom: 10, right: 14, color: 'var(--accent-soft)' }}>illustration vectorielle</div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 8 }}>
            <div className="wf-box" style={{ padding: 12 }}>
              <Sketch size={32} accent>35+</Sketch>
              <Type size={10} color="var(--ink-soft)">organisations clientes</Type>
            </div>
            <div className="wf-box" style={{ padding: 12 }}>
              <Sketch size={32} accent>3</Sketch>
              <Type size={10} color="var(--ink-soft)">métiers en interne</Type>
            </div>
            <div className="wf-box" style={{ padding: 12 }}>
              <Sketch size={32} accent>0</Sketch>
              <Type size={10} color="var(--ink-soft)">conflit d'intérêts</Type>
            </div>
          </div>
        </div>
      </section>

      <SectionRule>02 — À qui</SectionRule>

      {/* SECTORS — tight 4-col grid */}
      <section style={{ padding: '0 32px' }}>
        <div className="row" style={{ alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 14 }}>
          <Sketch size={28}>À qui nous nous adressons</Sketch>
          <div className="row gap-2" style={{ alignItems: 'center' }}>
            <Tag>Tous secteurs</Tag><Tag>Santé</Tag><Tag>Numérique</Tag>
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 10 }}>
          {SECTORS.map(([icon, title, body], i) => (
            <div key={title} className="wf-box" style={{ padding: 14, minHeight: 150, position: 'relative' }}>
              <div className="row" style={{ justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <span style={{ fontSize: 22 }}>{icon}</span>
                <Type size={9} color="var(--ink-faint)">0{i+1}/{SECTORS.length}</Type>
              </div>
              <div style={{ height: 8 }} />
              <Type size={11} weight={700}>{title}</Type>
              <div style={{ height: 6 }} />
              <Type size={10} color="var(--ink-soft)">{body}</Type>
              <div style={{ position: 'absolute', bottom: 10, right: 12, fontFamily: "'Caveat',cursive", color: 'var(--accent)', fontSize: 14 }}>→</div>
            </div>
          ))}
        </div>
      </section>

      <SectionRule>03 — Douleurs</SectionRule>

      {/* PAINS — checklist */}
      <section style={{ padding: '0 32px' }}>
        <div className="row" style={{ alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 12 }}>
          <Sketch size={28}>Vous vivez peut-être<br/>l'une de ces situations</Sketch>
          <Sticky rotate={2}>cocher mentalement<br/>en lisant ↓</Sticky>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginTop: 8 }}>
          {PAINS.map((p, i) => (
            <div key={i} className="wf-box" style={{ padding: 12, display: 'flex', gap: 10, alignItems: 'flex-start' }}>
              <div style={{
                width: 18, height: 18, border: '1.5px solid var(--ink)', borderRadius: 3,
                fontFamily: "'Caveat',cursive", color: 'var(--accent)', fontSize: 18,
                display: 'grid', placeItems: 'center', flexShrink: 0,
              }}>✓</div>
              <Type size={11.5}>{p}</Type>
            </div>
          ))}
        </div>
      </section>

      <SectionRule>04 — Trois leviers</SectionRule>

      {/* LEVERS — large numbered cards with "metric-y" feel */}
      <section style={{ padding: '0 32px' }}>
        <div className="row" style={{ alignItems: 'flex-end', justifyContent: 'space-between' }}>
          <Sketch size={32}>Ce que nous faisons<br/>concrètement</Sketch>
          <Type size={11} italic color="var(--ink-soft)" style={{ maxWidth: 280, textAlign: 'right' }}>
            Trois leviers d'influence articulés pour vous donner une longueur d'avance.
          </Type>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10, marginTop: 18 }}>
          {LEVERS.map(([n, title, body], i) => (
            <div key={n} className={`wf-box ${i === 1 ? 'ink' : ''}`} style={{ padding: 16, minHeight: 200, display: 'flex', flexDirection: 'column', gap: 10 }}>
              <div className="row" style={{ justifyContent: 'space-between', alignItems: 'center' }}>
                <Sketch size={48} accent>{n}</Sketch>
                <Tag variant={i === 1 ? 'accent' : ''}>levier</Tag>
              </div>
              <Type size={13} weight={700} color={i === 1 ? 'var(--paper)' : 'var(--ink)'}>{title}</Type>
              <Type size={10.5} color={i === 1 ? 'rgba(255,255,255,.7)' : 'var(--ink-soft)'}>{body}</Type>
              <div style={{ flex: 1 }} />
              <div className="row" style={{ justifyContent: 'space-between', alignItems: 'center' }}>
                <Type size={9} color={i === 1 ? 'rgba(255,255,255,.5)' : 'var(--ink-faint)'}>en savoir plus</Type>
                <Sketch size={20} accent>→</Sketch>
              </div>
            </div>
          ))}
        </div>
      </section>

      <SectionRule>05 — Engagements</SectionRule>

      {/* WHY — 5 tile grid */}
      <section style={{ padding: '0 32px' }}>
        <div className="row" style={{ alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 14 }}>
          <div>
            <Sketch size={28}>Pourquoi AleVia</Sketch>
            <Type size={11} italic color="var(--ink-soft)">Des engagements qui ne sont pas des arguments marketing.</Type>
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gridTemplateRows: 'auto', gap: 10 }}>
          {ENGAGEMENTS.map(([t, b], i) => (
            <div key={t} className="wf-box" style={{
              padding: 14, minHeight: 160, display: 'flex', flexDirection: 'column', gap: 8,
              background: i === 0 ? 'var(--accent)' : 'var(--paper)',
              color: i === 0 ? '#fff' : 'var(--ink)',
              borderColor: i === 0 ? 'var(--accent)' : 'var(--ink)',
            }}>
              <Sketch size={20} style={{ color: i === 0 ? '#fff' : 'var(--accent)' }}>0{i+1}</Sketch>
              <Type size={11.5} weight={700} color={i === 0 ? '#fff' : 'var(--ink)'}>{t}</Type>
              <Type size={9.5} color={i === 0 ? 'rgba(255,255,255,.85)' : 'var(--ink-soft)'}>{b}</Type>
            </div>
          ))}
        </div>
      </section>

      <SectionRule>06 — Confiance</SectionRule>

      {/* LOGOS — counted strip */}
      <section style={{ padding: '0 32px' }}>
        <div className="wf-box solid" style={{ padding: 20 }}>
          <div className="row" style={{ alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 14 }}>
            <Sketch size={28}>Ils nous font confiance</Sketch>
            <Sketch size={32} accent>35+</Sketch>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(8, 1fr)', gap: 8 }}>
            {LOGOS_REF.map((l) => (
              <div key={l} className="wf-box" style={{ height: 56, display: 'grid', placeItems: 'center', padding: 4, background: 'var(--paper)' }}>
                <Type size={9} color="var(--ink-soft)" style={{ textAlign: 'center', lineHeight: 1.1 }}>{l}</Type>
              </div>
            ))}
          </div>
          <Type size={10} color="var(--ink-faint)" italic style={{ marginTop: 10, textAlign: 'center' }}>
            + 27 autres organisations engagées sur la santé, le handicap, l'inclusion, l'environnement et le numérique
          </Type>
        </div>
      </section>

      <SectionRule>07 — Fondatrice</SectionRule>

      {/* FOUNDER — horizontal card */}
      <section style={{ padding: '0 32px' }}>
        <div className="wf-box" style={{ padding: 0, display: 'grid', gridTemplateColumns: '.4fr 1fr', overflow: 'hidden' }}>
          <div style={{ background: 'var(--paper-2)', borderRight: '1.5px solid var(--ink)', display: 'grid', placeItems: 'center', padding: 20 }}>
            <ImgBox h={200} label="Photo Nicole" style={{ borderRadius: '50%', aspectRatio: '1', width: '100%', maxWidth: 200 }} />
          </div>
          <div style={{ padding: 22 }}>
            <Tag variant="accent">Présidente & fondatrice</Tag>
            <div style={{ height: 10 }} />
            <Sketch size={32}>Nicole Tortello Duban</Sketch>
            <Type size={11} color="var(--ink-soft)" style={{ marginTop: 10 }}>
              Avocate, journaliste, déléguée générale d'organisation professionnelle : trois métiers exercés de l'intérieur pour construire des stratégies d'influence qui tiennent dans la vraie vie.
            </Type>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8, marginTop: 14 }}>
              {[['Avocate','Barreau Paris · CAPA'],['Journaliste','Rédactrice spécialisée'],['Déléguée gén.','Org. professionnelle']].map(([t,b])=>(
                <div key={t} className="wf-box solid" style={{ padding: 10 }}>
                  <Type size={11} weight={700}>{t}</Type>
                  <Type size={9.5} color="var(--ink-soft)">{b}</Type>
                </div>
              ))}
            </div>
            <div className="row gap-2" style={{ marginTop: 14 }}>
              <Btn variant="accent" size="sm">Voir le parcours complet</Btn>
              <Btn variant="ghost" size="sm">LinkedIn</Btn>
            </div>
          </div>
        </div>
      </section>

      <SectionRule>08 — Contact</SectionRule>

      {/* CONTACT — split */}
      <section style={{ padding: '0 32px 12px' }}>
        <div className="wf-box ink" style={{ padding: 24, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
          <div>
            <Sketch size={28} style={{ color: 'var(--paper)' }}>Transformons vos<br/>enjeux en politiques<br/>concrètes.</Sketch>
            <Type size={11} color="var(--accent-soft)" style={{ marginTop: 12 }}>Consultation gratuite — sans engagement.</Type>
            <Type size={10.5} color="rgba(255,255,255,.6)" style={{ marginTop: 10 }}>
              Expliquez-nous en une phrase la situation qui vous préoccupe.
            </Type>
          </div>
          <div className="wf-box" style={{ padding: 16, background: 'var(--paper)', color: 'var(--ink)' }}>
            {['Prénom & nom', 'Organisation'].map((l) => (
              <div key={l} style={{ marginBottom: 10 }}>
                <Type size={9} color="var(--ink-soft)" style={{ textTransform: 'uppercase', letterSpacing: '.15em' }}>{l}</Type>
                <div style={{ height: 22, borderBottom: '1.5px solid var(--ink)' }} />
              </div>
            ))}
            <Type size={9} color="var(--ink-soft)" style={{ textTransform: 'uppercase', letterSpacing: '.15em' }}>Votre enjeu en une phrase</Type>
            <div style={{ height: 50, border: '1.5px solid var(--ink)', borderRadius: 4, background: 'var(--paper-2)', marginTop: 4 }} />
            <div className="row gap-2" style={{ marginTop: 10, alignItems: 'center' }}>
              <div style={{ width: 12, height: 12, border: '1.5px solid var(--ink)' }} />
              <Type size={10} color="var(--ink-soft)">J'accepte d'être recontacté(e).</Type>
            </div>
            <div style={{ marginTop: 12 }}>
              <Btn variant="accent">Prendre RDV avec Nicole →</Btn>
            </div>
          </div>
        </div>
      </section>

      <div style={{ borderTop: '1.5px solid var(--ink)', padding: '14px 32px', display: 'flex', justifyContent: 'space-between' }}>
        <LogoMark size={14} />
        <Type size={9} color="var(--ink-faint)">© AleVia Conseil 2026</Type>
      </div>
    </div>
  );
}

window.VariantModular = VariantModular;
