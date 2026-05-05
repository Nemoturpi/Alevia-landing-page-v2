// Variant A — Classic Editorial
// Sober, institutional, generous whitespace, left-aligned hero with illustration right.
// The "by-the-book" institutional landing page.

function VariantClassic() {
  return (
    <div className="wf wf-frame" style={{ width: 980 }}>
      <div className="wf-meta">A · Classic Editorial</div>

      <BrowserBar />
      <div style={{ padding: '24px 36px 0' }}>
        <TopNav variant="classic" />
      </div>

      {/* HERO */}
      <section style={{ padding: '8px 36px 40px', display: 'grid', gridTemplateColumns: '1.1fr .9fr', gap: 36, alignItems: 'center' }}>
        <div className="col gap-4">
          <Tag>Santé globale · Handicap · Numérique responsable</Tag>
          <Sketch size={42} weight={700}>
            Vos enjeux de santé<br/>et d'inclusion ne peuvent<br/>plus rester <span style={{color:'var(--accent)'}}>en dehors</span><br/>des arbitrages publics.
          </Sketch>
          <Type size={12} color="var(--ink-soft)" style={{ maxWidth: 460 }}>
            AleVia est un cabinet d'affaires publiques spécialisé dans la santé globale (One Health), le handicap, le médico-social et le numérique responsable. Nous aidons les organisations engagées sur les biens communs à ne plus être oubliées des réformes.
          </Type>
          <div className="row gap-3" style={{ marginTop: 8 }}>
            <Btn variant="primary">Prendre RDV avec Nicole →</Btn>
            <Btn variant="ghost">Voir comment on obtient des arbitrages</Btn>
          </div>
        </div>
        <div style={{ position: 'relative' }}>
          <ImgBox h={300} label="Illustration One Health" />
          <div className="wf-note" style={{ top: -18, right: 8 }}>illustration vectorielle, 3 cercles enrelacés</div>
        </div>
      </section>

      <SectionRule>02 — À qui nous nous adressons</SectionRule>

      {/* SECTORS */}
      <section style={{ padding: '0 36px' }}>
        <div className="row" style={{ alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 16 }}>
          <Sketch size={32}>À qui nous nous adressons</Sketch>
          <Type size={11} color="var(--ink-soft)" style={{ maxWidth: 360, textAlign: 'right' }}>
            Nous travaillons avec des fédérations, syndicats, associations, mutuelles et opérateurs qui défendent des biens communs et souhaitent s'imposer comme forces de proposition légitimes.
          </Type>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12 }}>
          {SECTORS.map(([icon, title, body]) => (
            <div key={title} className="wf-box" style={{ padding: 12, minHeight: 130 }}>
              <div style={{ fontSize: 18, marginBottom: 6 }}>{icon}</div>
              <Type size={11} weight={700}>{title}</Type>
              <div style={{ height: 6 }} />
              <Type size={10} color="var(--ink-soft)">{body}</Type>
            </div>
          ))}
        </div>
      </section>

      <SectionRule>03 — Ce qui fait mal</SectionRule>

      {/* PAINS */}
      <section style={{ padding: '0 36px', display: 'grid', gridTemplateColumns: '.9fr 1.1fr', gap: 36 }}>
        <div className="col gap-3">
          <Sketch size={28}>Vous vivez<br/>peut-être l'une<br/>de ces situations.</Sketch>
          <Squiggle w="60%" />
          <Type size={11} color="var(--ink-soft)">5 douleurs récurrentes des organisations qui découvrent les arbitrages trop tard.</Type>
        </div>
        <div className="col gap-3">
          {PAINS.map((p, i) => (
            <div key={i} className="row gap-3" style={{ alignItems: 'flex-start', borderTop: '1px dashed var(--ink)', paddingTop: 8 }}>
              <span style={{ fontFamily: "'Caveat', cursive", color: 'var(--accent)', fontSize: 22, lineHeight: 1, minWidth: 26 }}>0{i+1}</span>
              <Type size={11.5}>{p}</Type>
            </div>
          ))}
        </div>
      </section>

      <SectionRule>04 — Trois leviers</SectionRule>

      {/* LEVERS */}
      <section style={{ padding: '0 36px' }}>
        <Sketch size={32}>Ce que nous faisons concrètement</Sketch>
        <Type size={11} color="var(--ink-soft)" style={{ marginTop: 6, maxWidth: 500 }}>
          Trois leviers d'influence articulés pour donner une longueur d'avance.
        </Type>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, marginTop: 18 }}>
          {LEVERS.map(([n, title, body]) => (
            <div key={n} className="wf-box" style={{ padding: 16, minHeight: 170 }}>
              <Sketch size={36} accent>{n}</Sketch>
              <div style={{ height: 8 }} />
              <Type size={12} weight={700}>{title}</Type>
              <div style={{ height: 6 }} />
              <Type size={10.5} color="var(--ink-soft)">{body}</Type>
            </div>
          ))}
        </div>
      </section>

      <SectionRule>05 — Pourquoi AleVia</SectionRule>

      {/* WHY */}
      <section style={{ padding: '0 36px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
        <div>
          <Sketch size={30}>Pourquoi AleVia<br/>plutôt qu'un autre cabinet</Sketch>
          <Type size={11} italic color="var(--ink-soft)" style={{ marginTop: 8 }}>
            Des engagements qui ne sont pas des arguments marketing.
          </Type>
          <Sticky style={{ marginTop: 18, maxWidth: 220 }} rotate={-2}>
            note → choisir 5 engagements qui s'opposent franchement aux pratiques d'agence
          </Sticky>
        </div>
        <div className="col gap-3">
          {ENGAGEMENTS.map(([t, b], i) => (
            <div key={t} className="row gap-3" style={{ alignItems: 'flex-start' }}>
              <div className="wf-box accent" style={{ width: 22, height: 22, display: 'grid', placeItems: 'center', fontFamily: "'Kalam',sans-serif", fontSize: 11, fontWeight: 700, flexShrink: 0 }}>{i+1}</div>
              <div className="col" style={{ gap: 2 }}>
                <Type size={12} weight={700}>{t}</Type>
                <Type size={10.5} color="var(--ink-soft)">{b}</Type>
              </div>
            </div>
          ))}
        </div>
      </section>

      <SectionRule>06 — Confiance</SectionRule>

      {/* LOGOS */}
      <section style={{ padding: '0 36px' }}>
        <div className="row" style={{ justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <Sketch size={28}>Ils nous font déjà confiance</Sketch>
          <Type size={11} color="var(--accent)">+ de 35 organisations</Type>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(8, 1fr)', gap: 8, marginTop: 14 }}>
          {LOGOS_REF.map((l) => (
            <div key={l} className="wf-box" style={{ height: 56, display: 'grid', placeItems: 'center', padding: 4 }}>
              <Type size={9} color="var(--ink-soft)" style={{ textAlign: 'center', lineHeight: 1.1 }}>{l}</Type>
            </div>
          ))}
        </div>
      </section>

      <SectionRule>07 — La fondatrice</SectionRule>

      {/* FOUNDER */}
      <section style={{ padding: '0 36px', display: 'grid', gridTemplateColumns: '.5fr 1fr', gap: 28, alignItems: 'flex-start' }}>
        <div>
          <ImgBox h={200} label="Photo Nicole" style={{ borderRadius: '50%', aspectRatio: '1' }} />
          <Type size={10} color="var(--ink-soft)" style={{ textAlign: 'center', marginTop: 8 }}>
            photo ronde, fond clair
          </Type>
        </div>
        <div className="col gap-3">
          <Sketch size={28}>Nicole Tortello Duban</Sketch>
          <Type size={11} italic color="var(--accent)">Présidente & fondatrice d'AleVia Conseil</Type>
          <Type size={11.5} color="var(--ink-soft)">
            Avocate, journaliste, déléguée générale d'organisation professionnelle : trois métiers exercés de l'intérieur pour construire des stratégies qui tiennent dans la vraie vie.
          </Type>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10, marginTop: 6 }}>
            {[['Avocate','Barreau de Paris · CAPA'],['Journaliste','Rédactrice spécialisée'],['Déléguée générale','Organisation professionnelle']].map(([t,b])=>(
              <div key={t} className="wf-box solid" style={{ padding: 10 }}>
                <Type size={11} weight={700}>{t}</Type>
                <Type size={9.5} color="var(--ink-soft)">{b}</Type>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionRule>08 — Contact</SectionRule>

      {/* CONTACT */}
      <section style={{ padding: '0 36px 12px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 28 }}>
        <div>
          <Sketch size={32}>Transformons vos<br/>enjeux en politiques<br/>concrètes.</Sketch>
          <Type size={11} color="var(--accent)" style={{ marginTop: 10 }}>Consultation gratuite — sans engagement.</Type>
          <Type size={11} color="var(--ink-soft)" style={{ marginTop: 10, maxWidth: 360 }}>
            Expliquez-nous en une phrase la situation qui vous préoccupe. Nous vous dirons rapidement si AleVia est le bon cabinet.
          </Type>
        </div>
        <div className="wf-box" style={{ padding: 16 }}>
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
            <Type size={10} color="var(--ink-soft)">J'accepte que mes données soient utilisées pour me recontacter.</Type>
          </div>
          <div style={{ marginTop: 14 }}>
            <Btn variant="primary">Prendre RDV avec Nicole →</Btn>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <div style={{ borderTop: '1.5px solid var(--ink)', padding: '14px 36px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <LogoMark size={14} />
        <Type size={9} color="var(--ink-faint)">© AleVia Conseil 2026 · Mentions légales · Politique de confidentialité</Type>
      </div>
    </div>
  );
}

window.VariantClassic = VariantClassic;
