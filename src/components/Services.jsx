import { useState } from 'react'
import useInView from '../hooks/useInView'

const SERVICES = [
  {
    slug: 'medical-derm',
    name: 'Medical Dermatology',
    treatment: 'Medical Dermatology Consultation',
    icon: 'fa-solid fa-stethoscope',
    img: './services/acne-scar.jpg',
    desc: 'Diagnosis and evidence-based management of acne, psoriasis, eczema, vitiligo, fungal infections, skin allergies, and other skin diseases.',
    feats: ['Acne & Acne Scars', 'Psoriasis & Vitiligo', 'Eczema & Dermatitis', 'Fungal Infections'],
  },
  {
    slug: 'laser',
    name: 'Laser Treatments',
    treatment: 'Laser Treatment',
    icon: 'fa-solid fa-wand-magic-sparkles',
    img: './services/laser.jpg',
    desc: 'Medical-grade laser protocols for pigmentation, skin resurfacing, and long-term hair reduction with precise, measurable results.',
    feats: ['Laser Hair Removal', 'Laser Resurfacing', 'Laser Toning', 'Phototherapy'],
  },
  {
    slug: 'cosmetology',
    name: 'Cosmetic Dermatology',
    treatment: 'Cosmetic Dermatology',
    icon: 'fa-solid fa-spa',
    img: './services/anti-ageing.jpg',
    desc: 'Non-surgical aesthetic treatments including skin boosters, dermal fillers, microdermabrasion, and chemical peels for natural rejuvenation.',
    feats: ['Skin Boosters', 'Dermal Fillers', 'Chemical Peels', 'Microdermabrasion'],
  },
  {
    slug: 'trichology',
    name: 'Trichology & Hair',
    treatment: 'Hair & Scalp Treatment',
    icon: 'fa-solid fa-scissors',
    img: './services/hair.jpg',
    desc: 'Root-cause evaluation and advanced medical treatment for hair fall, alopecia, dandruff, and scalp disorders with personalised protocols.',
    feats: ['Hair Fall Evaluation', 'Scalp Analysis', 'Medical Hair Therapy', 'Scalp Disorders'],
  },
  {
    slug: 'pigmentation',
    name: 'Pigmentation & Acne Scars',
    treatment: 'Pigmentation & Scar Treatment',
    icon: 'fa-solid fa-sun',
    img: './services/pigmentation.jpg',
    desc: 'Melasma, post-inflammatory pigmentation, sun damage, and acne scars treated through layered laser, peel, and targeted topical protocols.',
    feats: ['Melasma Protocol', 'Post-Acne Marks', 'Chemical Peels', 'Scar Reduction'],
  },
  {
    slug: 'dermatosurgery',
    name: 'Dermatosurgery',
    treatment: 'Dermatosurgery',
    icon: 'fa-solid fa-scalpel',
    img: './services/facials.jpg',
    desc: 'Minor surgical procedures performed with precision in-clinic: skin biopsies, wart and mole removal, ear lobe repair, and more.',
    feats: ['Skin Biopsy', 'Wart & Mole Removal', 'Ear Lobe Repair', 'Skin Tag Removal'],
  },
]

function ServiceCard({ s, onBook }) {
  const [imgOk, setImgOk] = useState(true)
  return (
    <article className="svc-card">
      <div className="svc-card__media">
        {imgOk && (
          <img
            src={s.img}
            alt={s.name}
            width="800"
            height="600"
            loading="lazy"
            decoding="async"
            onError={() => setImgOk(false)}
          />
        )}
        <div className="svc-card__fallback" aria-hidden="true">
          <i className={s.icon} />
        </div>
      </div>
      <div className="svc-card__body">
        <h3 className="svc-card__title">{s.name}</h3>
        <p className="svc-card__desc">{s.desc}</p>
        <ul className="svc-card__feats">
          {s.feats.map(f => (
            <li key={f}><i className="fa-solid fa-check" /> {f}</li>
          ))}
        </ul>
        <button className="svc-card__cta" onClick={() => onBook(s.treatment)}>
          Book This Treatment
          <i className="fa-solid fa-arrow-right" />
        </button>
      </div>
    </article>
  )
}

export default function Services({ onBook }) {
  const [ref, inView] = useInView()

  return (
    <section id="services" className="services">
      <div className="wrap">
        <div className={`services__hd reveal${inView ? ' in' : ''}`} ref={ref}>
          <span className="label label-ink" style={{ marginBottom: '20px', display: 'inline-flex' }}>
            What We Offer
          </span>
          <h2 className="display display--lg">
            Treatments Backed<br /><em>by Science</em>
          </h2>
          <p className="services__intro">
            Every treatment at Dr. Saurabh Jaiswal Skin &amp; Hair Clinic is grounded in clinical
            evidence and personalised to your unique skin profile. Explore our core services below.
          </p>
        </div>

        <div className="svc-grid">
          {SERVICES.map(s => <ServiceCard key={s.slug} s={s} onBook={onBook} />)}
        </div>
      </div>
    </section>
  )
}
