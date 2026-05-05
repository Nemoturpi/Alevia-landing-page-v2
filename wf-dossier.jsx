// Variant D — Dossier / Policy Paper
// Looks like an institutional document: numbered sections in margins, ruling lines,
// callouts in the gutter, sober and formal. Strong "report" vibe.

function VariantDossier() {
  const Margin = ({ num, label, children, gutter }) => (
    <div style={{
      display: 'grid', gridTemplateColumns: '90px 1fr', gap: 24,
      padding: '24px 0',
      borderTop: '1.5px solid var(--ink)',
    }}>
      <div className="col" style={{ gap: 6 }}>
        <Sketch size={42} accent>{num}</Sketch>
        <Type size={9} color="var(--ink-soft)" weight={700} style={{ letterSpacing: '.2em', textTransform: 'uppercase' }}>{label}</Type>
        {gutter}
      </div>
      <div>{children}</div>
    </div>
  );

  return (
    <div className="wf wf-frame" style={{ width: 980, padding: 0 }}>
      <div className="wf-meta">D · Dossier</div>

      <BrowserBar />

      {/* Document header */}
      <div style={{ padding: '20px 48px', borderBottom: '1.5px solid var(--ink)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <LogoMark size={20} />
        <Type size={9} color="var(--ink-soft)" style={{ letterSpacing: '.25em', textTransform: 'uppercase' }}>
          Dossier · Affaires publiques · Édition 2026
        </Type>
        <Btn size="sm" variant="primary">Contact</Btn>
      </div>
      <div style={{ padding: '0 48px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1.5px solid var(--ink)', height: 28 }}>
        <Type size={9} color="var(--ink-soft)" style={{ letterSpacing: '.2em', textTransform: 'uppercase' }}>Cabinet d'affaires publiques · Paris</Type>
        <Type size={9} color="var(--ink-soft)" style={{ letterSpacing: '.2em', textTransform: 'uppercase' }}>1 / 8</Type>
      </div>

      {/* HERO */}
      <section style={{ padding: '40px 48px 32px', display: 'grid', gridTemplateColumns: '90px 1fr .9fr', gap: 24, alignItems: 'flex-start' }}>
        <div className="col gap-3">
          <Sketch size={48} accent>00</Sketch>
          <Type size={9} color="var(--ink-soft)" weight={700} style={{ letterSpacing: '.2em' }}>PRÉAMBULE</Type>
          <div style={{ height: 1, background: 'var(--ink)', width: 30 }} />
          <Type size={9} color="var(--ink-soft)" italic>Lecture : 6 min</Type>
        </div>
        <div>
          <Type size={11} color="var(--accent)" weight={700} style={{ letterSpacing: '.2em', textTransform: 'uppercase', marginBottom: 16 }}>
            Santé globale · Handicap · Numérique responsable
          </Type>
          <Sketch size={42} weight={700}>
            Vos enjeux<br/>
            de santé et d'inclusion<br/>
            ne peuvent plus rester<br/>
            <span className="wf-underline">en dehors</span> des arbitrages publics.
          </Sketch>
          <Type size={12} color="var(--ink-soft)" style={{ marginTop: 18, maxWidth: 460, columnCount: 1 }}>
            AleVia est un cabinet d'affaires publiques spécialisé dans la santé globale (One Health), le handicap, le médico-social et le numérique responsable. Nous aidons les organisations engagées sur les biens communs à ne plus être oubliées des réformes et à peser sur les décisions publiques.
          </Type>
          <div className="row gap-3" style={{ marginTop: 18 }}>
            <Btn variant="primary">Prendre RDV avec Nicole →</Btn>
            <Btn variant="ghost">Voir comment on obtient des arbitrages</Btn>
          </div>
        </div>
        <div className="col gap-2" style={{ position: 'relative' }}>
          <ImgBox h={220} label="One Health · biens communs" />
          <Type size={9} color="var(--ink-faint)" italic>
            Fig. 1 — Les biens communs comme cadre d'analyse : santé humaine, animale et environnementale, inclusion, numérique.
          </Type>
        </div>
      </section>

      <section style={{ padding: '0 48px' }}>
        <Margin num="01" label="À qui" gutter={
          <Sticky rotate={-2} style={{ marginTop: 16, fontSize: 12 }}>
            8 secteurs · biens communs
          </Sticky>
        }>
          <Sketch size={32}>À qui nous nous adressons.</Sketch>
          <Type size={11} color="var(--ink-soft)" style={{ marginTop: 8, maxWidth: 540 }}>
            Aux organisations qui défendent des biens communs — santé, inclusion, numérique responsable, environnement, culture — et qui veulent être reconnues comme forces de proposition légitimes.
          </Type>
          <div className="col" style={{ marginTop: 16 }}>
            {SECTORS.map(([icon, title, body], i) => (
              <div key={title} style={{
                display: 'grid', gridTemplateColumns: '32px 220px 1fr',
                gap: 12, padding: '12px 0',
                borderTop: i === 0 ? '1px solid var(--ink)' : '1px dashed var(--ink-faint)',
                alignItems: 'baseline',
              }}>
                <span style={{ fontSize: 16 }}>{icon}</span>
                <Type size={12} weight={700}>{title}</Type>
                <Type size={11} color="var(--ink-soft)">{body}</Type>
              </div>
            ))}
            <div style={{ borderTop: '1px solid var(--ink)' }} />
          </div>
        </Margin>

        <Margin num="02" label="Constat" gutter={
          <Type size={10} color="var(--ink-soft)" italic>
            Cinq douleurs récurrentes
          </Type>
        }>
          <Sketch size={32}>Vous vivez peut-être<br/>l'une de ces situations.</Sketch>
          <div className="col" style={{ marginTop: 16, gap: 0 }}>
            {PAINS.map((p, i) => (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: '40px 1fr', gap: 12, padding: '14px 0', borderTop: '1px solid var(--ink)', alignItems: 'flex-start' }}>
                <Sketch size={26} accent>0{i+1}</Sketch>
                <Type size={13}>{p}</Type>
              </div>
            ))}
            <div style={{ borderTop: '1px solid var(--ink)' }} />
          </div>
        </Margin>

        <Margin num="03" label="Méthode" gutter={
          <div className="col gap-2">
            <Type size={10} color="var(--ink-soft)">Trois leviers articulés.</Type>
            <div style={{ height: 1, width: 30, background: 'var(--accent)' }} />
          </div>
        }>
          <Sketch size={32}>Ce que nous faisons concrètement.</Sketch>
          <Type size={11} color="var(--ink-soft)" style={{ marginTop: 8 }}>
            Par temps calme comme en période de crise, trois leviers d'influence pour vous donner une longueur d'avance.
          </Type>
          <div className="col" style={{ marginTop: 16, gap: 0 }}>
            {LEVERS.map(([n, title, body]) => (
              <div key={n} style={{
                display: 'grid', gridTemplateColumns: '60px 200px 1fr',
                gap: 16, padding: '16px 0', borderTop: '1px solid var(--ink)', alignItems: 'flex-start',
              }}>
                <Sketch size={32} accent>{n}</Sketch>
                <Type size={14} weight={700}>{title}</Type>
                <Type size={11} color="var(--ink-soft)">{body}</Type>
              </div>
            ))}
            <div style={{ borderTop: '1px solid var(--ink)' }} />
          </div>
        </Margin>

        <Margin num="04" label="Engagements" gutter={
          <Sticky rotate={1} style={{ marginTop: 16 }}>
            ne pas vendre<br/>une promesse,<br/>vendre des règles
          </Sticky>
        }>
          <Sketch size={32}>Pourquoi AleVia plutôt<br/>qu'un autre cabinet.</Sketch>
          <Type size={11} italic color="var(--ink-soft)" style={{ marginTop: 8 }}>
            Des engagements qui ne sont pas des arguments marketing.
          </Type>
          <div className="col" style={{ marginTop: 16, gap: 0 }}>
            {ENGAGEMENTS.map(([t, b], i) => (
              <div key={t} style={{
                display: 'grid', gridTemplateColumns: '40px 220px 1fr',
                gap: 16, padding: '14px 0', borderTop: '1px solid var(--ink)', alignItems: 'flex-start',
              }}>
                <Type size={11} weight={700} color="var(--accent)">§ 0{i+1}</Type>
                <Type size={13} weight={700}>{t}</Type>
                <Type size={11} color="var(--ink-soft)">{b}</Type>
              </div>
            ))}
            <div style={{ borderTop: '1px solid var(--ink)' }} />
          </div>
        </Margin>

        <Margin num="05" label="Références" gutter={
          <Sketch size={28} accent>+35</Sketch>
        }>
          <Sketch size={32}>Ils nous font déjà confiance.</Sketch>
          <Type size={11} color="var(--ink-soft)" style={{ marginTop: 8, maxWidth: 540 }}>
            Plus de 35 organisations engagées sur la santé, le handicap, l'inclusion, l'environnement et le numérique responsable nous font confiance.
          </Type>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0, marginTop: 16, border: '1.5px solid var(--ink)' }}>
            {LOGOS_REF.map((l, i) => (
              <div key={l} style={{
                height: 64, display: 'grid', placeItems: 'center', padding: 6,
                borderRight: (i+1) % 4 !== 0 ? '1px solid var(--ink)' : 'none',
                borderBottom: i < 4 ? '1px solid var(--ink)' : 'none',
              }}>
                <Type size={10} color="var(--ink-soft)" style={{ textAlign: 'center', lineHeight: 1.1 }}>{l}</Type>
              </div>
            ))}
          </div>
        </Margin>

        <Margin num="06" label="Fondatrice" gutter={
          <ImgBox h={90} label="Nicole" style={{ borderRadius: '50%', aspectRatio: '1', width: 90 }} />
        }>
          <Sketch size={32}>Nicole Tortello Duban</Sketch>
          <Type size={11} italic color="var(--accent)" style={{ marginTop: 4 }}>
            Présidente & fondatrice d'AleVia Conseil
          </Type>
          <Type size={12} color="var(--ink-soft)" style={{ marginTop: 12 }}>
            Avocate, journaliste, déléguée générale d'organisation professionnelle : trois métiers exercés <span className="wf-underline">de l'intérieur</span> pour construire des stratégies d'influence qui tiennent dans la vraie vie. Nicole accompagne fédérations, associations et opérateurs confrontés à des séquences institutionnelles complexes.
          </Type>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 0, marginTop: 16, border: '1.5px solid var(--ink)' }}>
            {[['Avocate','Barreau de Paris · titulaire du CAPA'],['Journaliste','Formation et expérience de rédactrice spécialisée'],['Déléguée gén.','Ancienne déléguée générale d\'organisation professionnelle']].map(([t,b], i)=>(
              <div key={t} style={{
                padding: 14,
                borderRight: i < 2 ? '1px solid var(--ink)' : 'none',
              }}>
                <Type size={12} weight={700}>{t}</Type>
                <Type size={10} color="var(--ink-soft)" style={{ marginTop: 4 }}>{b}</Type>
              </div>
            ))}
          </div>
        </Margin>

        <Margin num="07" label="Contact" gutter={
          <Type size={10} color="var(--accent)" weight={700}>Réponse 48h</Type>
        }>
          <Sketch size={36}>Transformons ensemble<br/>vos enjeux en politiques<br/>concrètes.</Sketch>
          <Type size={11} italic color="var(--ink-soft)" style={{ marginTop: 8 }}>
            Consultation gratuite — sans engagement.
          </Type>
          <Type size={12} color="var(--ink)" style={{ marginTop: 14, maxWidth: 520 }}>
            Expliquez-nous en une phrase la situation qui vous préoccupe. Nous vous dirons rapidement si AleVia est le bon cabinet pour vous accompagner.
          </Type>

          <div className="wf-box" style={{ padding: 18, marginTop: 16 }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
              {['Prénom & nom', 'Organisation'].map((l) => (
                <div key={l}>
                  <Type size={9} color="var(--ink-soft)" weight={700} style={{ textTransform: 'uppercase', letterSpacing: '.15em' }}>{l}</Type>
                  <div style={{ height: 22, borderBottom: '1.5px solid var(--ink)' }} />
                </div>
              ))}
            </div>
            <div style={{ height: 14 }} />
            <Type size={9} color="var(--ink-soft)" weight={700} style={{ textTransform: 'uppercase', letterSpacing: '.15em' }}>Votre enjeu en une phrase</Type>
            <div style={{ height: 50, border: '1.5px solid var(--ink)', borderRadius: 4, background: 'var(--paper-2)', marginTop: 4 }} />
            <div className="row gap-2" style={{ marginTop: 12, alignItems: 'center' }}>
              <div style={{ width: 12, height: 12, border: '1.5px solid var(--ink)' }} />
              <Type size={10} color="var(--ink-soft)">
                J'accepte que mes données soient utilisées pour me recontacter. <span style={{ textDecoration: 'underline' }}>Politique de confidentialité</span>
              </Type>
            </div>
            <div style={{ marginTop: 14 }}>
              <Btn variant="primary">Prendre RDV avec Nicole →</Btn>
            </div>
          </div>
        </Margin>
      </section>

      <div style={{ borderTop: '1.5px solid var(--ink)', padding: '12px 48px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'var(--paper-2)' }}>
        <Type size={9} color="var(--ink-soft)" style={{ letterSpacing: '.2em', textTransform: 'uppercase' }}>
          AleVia Conseil · Communication stratégique & représentation d'intérêts
        </Type>
        <Type size={9} color="var(--ink-faint)">© 2026 · Mentions légales</Type>
      </div>
    </div>
  );
}

window.VariantDossier = VariantDossier;
