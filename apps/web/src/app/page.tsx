const pillars = ['Conexiones con intención', 'Experiencias que unen', 'Tu espacio, con seguridad'];

export default function HomePage() {
  return (
    <main>
      <nav><span className="brand">DUORA</span><a href="#waitlist">Crear cuenta</a></nav>
      <section className="hero">
        <p className="eyebrow">CITAS CON PROPÓSITO</p>
        <h1>Conecta.<br />Vive. Comparte.</h1>
        <p className="lead">Descubre personas compatibles a través de experiencias que te apetece vivir.</p>
        <a className="button" href="#waitlist">Descubrir DUORA</a>
      </section>
      <section className="pillars" aria-label="Valores de DUORA">
        {pillars.map((pillar, index) => <article key={pillar}><span>0{index + 1}</span><h2>{pillar}</h2></article>)}
      </section>
      <section id="waitlist" className="coming-soon"><p>PRÓXIMAMENTE</p><h2>Una nueva forma de quedar.</h2></section>
    </main>
  );
}
