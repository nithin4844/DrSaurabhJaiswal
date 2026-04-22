import useInView from '../hooks/useInView'

const CHIPS = [
  'Clinical Dermatology',
  'Cosmetology & Lasers',
  'Trichology & Hair Loss',
  'Dermatosurgery',
  'Acne & Scar Treatment',
  'Pigmentation & Melasma',
]

const AWARDS = [
  'D J Patil Award, Best Paper by Faculty, CUTICON 2017, Mumbai',
  'Best Poster Award, Clinicohistopathological Study, Dermacon 2017, Kolkata',
  '2nd Prize, Best Paper (Rare Case Series), ISPD 2017, Delhi',
  'Promising Teacher Award, Somaiya Vidyavihar, Mumbai 2018',
]

export default function About({ onBook }) {
  const [ref, inView] = useInView()

  return (
    <section id="about" className="about">
      <div className="wrap">
        <div className={`about__grid reveal${inView ? ' in' : ''}`} ref={ref}>
          <div className="about__img-wrap">
            <div className="about__img-frame">
              <img
                src="./doctor1.jpg"
                alt="Dr. Saurabh Jaiswal, Dermatologist at Skin & Hair Clinic Nagpur"
                width="600"
                height="800"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>

          <div className="about__text">
            <span className="label label-ink" style={{ marginBottom: '20px', display: 'inline-flex' }}>
              Meet Your Doctor
            </span>

            <h2 className="about__name" style={{ marginBottom: '14px' }}>
              Dr. Saurabh Jaiswal
            </h2>

            <p className="about__creds">
              <i className="fa-solid fa-graduation-cap" />
              MBBS (GMC Nagpur) · DNB Dermatology &amp; Venereology · MNAMS
            </p>

            <p className="about__para">
              With over 13 years of experience, Dr. Saurabh Jaiswal brings academic rigour and
              clinical precision to every consultation. A trained dermatosurgeon and active
              researcher, he tailors evidence-based treatment plans to each patient's skin,
              hair, and lifestyle needs.
            </p>
            <p className="about__para">
              Formerly Senior Resident at K.J. Somaiya Medical College, Mumbai and Assistant
              Professor at IGGMC Nagpur, Dr. Jaiswal has authored 12 peer-reviewed publications
              and two book chapters in clinical dermatology.
            </p>

            <div className="about__chips">
              {CHIPS.map(c => (
                <span key={c} className="chip">
                  <i className="fa-solid fa-circle-dot" /> {c}
                </span>
              ))}
            </div>

             {/* <ul style={{ marginBottom: '24px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {AWARDS.map((text, i) => (
                <li key={i} style={{ fontSize: '.88rem', color: 'var(--on-cream-85)', lineHeight: 1.5 }}>
                  {text}
                </li>
              ))}
            </ul>*/}

            <div className="about__ctas">
              <button className="btn btn-outline-ink" onClick={onBook}>
                Book a Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
