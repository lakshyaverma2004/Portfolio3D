import Nav from "@/components/Nav";
import Reveal from "@/components/Reveal";
import Emph from "@/components/Emph";
import HeroCanvas from "@/components/HeroCanvas";
import Intro from "@/components/Intro";
import {
  profile,
  stats,
  projects,
  services,
  experience,
  education,
  about,
  contact,
} from "@/data/content";

export default function Home() {
  return (
    <>
      <Intro name={profile.name} />
      <Nav />
      <span id="top" />

      <main className="wrap">
        {/* ───────── 01 · HERO ───────── */}
        <header className="hero">
          <HeroCanvas />
          <Reveal className="hero-kicker">
            <span className="num">[01]</span>
            <span className="dot" />
            {profile.kicker}
          </Reveal>

          <Reveal delay={90} as="h1">
            <Emph text={profile.headline} />
          </Reveal>

          <Reveal delay={170} className="hero-intro">
            {profile.intro}
          </Reveal>

          <Reveal delay={250} className="hero-actions">
            <a className="cta" href={`mailto:${profile.email}`}>
              Start a project <span className="arrow">↗</span>
            </a>
            <a className="link-quiet" href="#work">
              Selected work
            </a>
          </Reveal>

          <Reveal delay={330} className="stats">
            {stats.map((s) => (
              <div className="stat" key={s.label}>
                <div className="stat-v">{s.value}</div>
                <div className="stat-l">{s.label}</div>
              </div>
            ))}
          </Reveal>
        </header>

        {/* ───────── 02 · SELECTED WORK ───────── */}
        <section className="section" id="work">
          <Reveal className="label">
            <span className="br">[02]</span> Selected Work / 2025
          </Reveal>
          <Reveal as="h2" className="h2 work-head">
            <Emph text="What I've *built*." />
          </Reveal>

          <div>
            {projects.map((p, i) => (
              <Reveal key={p.title} delay={i * 50}>
                <article className="project">
                  <div className="project-row">
                    <div className="project-n">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <div>
                      <h3 className="project-title">{p.title}</h3>
                      <div className="project-type">{p.type}</div>
                      <p className="project-desc">{p.description}</p>
                      <div className="project-links">
                        {p.link ? (
                          <a href={p.link} target="_blank" rel="noopener noreferrer">
                            Live ↗
                          </a>
                        ) : null}
                        {p.repo ? (
                          <a href={p.repo} target="_blank" rel="noopener noreferrer">
                            Code ↗
                          </a>
                        ) : null}
                      </div>
                    </div>
                    <div className="project-meta">
                      <span className="project-year">{p.year}</span>
                      <div className="project-tags">
                        {p.tags.map((t) => (
                          <span key={t}>{t}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ───────── 03 · SERVICES ───────── */}
        <section className="section" id="services">
          <Reveal className="label">
            <span className="br">[03]</span> Services / What I do
          </Reveal>
          <Reveal as="h2" className="h2 svc-head">
            <Emph text="Four *disciplines.* One person." />
          </Reveal>

          <div className="svc-grid">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={(i % 2) * 80}>
                <div className="svc">
                  <div className="svc-n">{String(i + 1).padStart(2, "0")}</div>
                  <h3 className="svc-title">{s.title}</h3>
                  <p className="svc-blurb">{s.blurb}</p>
                  <div className="svc-items">
                    {s.items.map((it) => (
                      <span key={it}>{it}</span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ───────── 04 · EXPERIENCE ───────── */}
        <section className="section" id="experience">
          <Reveal className="label">
            <span className="br">[04]</span> Experience / Education
          </Reveal>
          <Reveal as="h2" className="h2" style={{ marginBottom: 52 }}>
            <Emph text="Where I've *worked*." />
          </Reveal>

          <div>
            {experience.map((e, i) => (
              <Reveal key={i} delay={i * 50}>
                <div className="entry">
                  <div className="entry-meta">
                    <span className="entry-period">{e.period}</span>
                    <span className="entry-loc">{e.location}</span>
                  </div>
                  <div>
                    <div className="entry-role">{e.role}</div>
                    <div className="entry-company">{e.company}</div>
                    <ul>
                      {e.points.map((pt, j) => (
                        <li key={j}>{pt}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="sub-label">Education</Reveal>
          {education.map((ed, i) => (
            <Reveal key={i}>
              <div className="entry">
                <div className="entry-meta">
                  <span className="entry-period">{ed.period}</span>
                </div>
                <div>
                  <div className="edu-degree">{ed.degree}</div>
                  <div className="edu-school">{ed.school}</div>
                  <div className="edu-note">{ed.note}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </section>

        {/* ───────── 05 · ABOUT ───────── */}
        <section className="section" id="about">
          <Reveal className="label">
            <span className="br">[05]</span> Profile / Mind behind
          </Reveal>
          <div className="about-grid">
            <Reveal>
              <div className="about-meta">{about.meta}</div>
              <h2 className="about-name">
                {(() => {
                  const parts = profile.name.split(" ");
                  return (
                    <>
                      {parts[0]} <em>{parts.slice(1).join(" ")}.</em>
                    </>
                  );
                })()}
              </h2>
              <div className="about-roles">
                {about.roles.map((r) => (
                  <span key={r}>{r}</span>
                ))}
              </div>
              <div className="about-body">
                {about.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="facts">
                {about.facts.map((f) => (
                  <div className="fact" key={f.k}>
                    <div className="fact-k">{f.k}</div>
                    <div className="fact-v">{f.v}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* ───────── 06 · CONTACT ───────── */}
        <section className="section contact" id="contact">
          <Reveal className="label">
            <span className="br">[06]</span> Contact
          </Reveal>
          <Reveal as="h2">
            <Emph text={contact.heading} />
          </Reveal>
          <Reveal className="contact-blurb">{contact.blurb}</Reveal>

          <Reveal className="contact-grid">
            <span>
              <span className="k">Email</span>
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </span>
            <span>
              <span className="k">Phone</span>
              <a href={`tel:${profile.phoneHref}`}>{profile.phone}</a>
            </span>
            {profile.socials.map((s) => (
              <span key={s.label}>
                <span className="k">{s.label}</span>
                <a href={s.url} target="_blank" rel="noopener noreferrer">
                  ↗
                </a>
              </span>
            ))}
          </Reveal>

          <Reveal className="contact-actions">
            <a className="cta" href={`mailto:${profile.email}`}>
              Send a message <span className="arrow">↗</span>
            </a>
            {contact.resumeUrl ? (
              <a
                className="link-quiet"
                href={contact.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Download résumé ↓
              </a>
            ) : null}
          </Reveal>
        </section>
      </main>

      <footer className="footer">
        <div className="wrap footer-inner">
          <span>
            © {new Date().getFullYear()} {profile.name}
          </span>
          <span>{profile.location} · Built with Next.js</span>
        </div>
      </footer>
    </>
  );
}
