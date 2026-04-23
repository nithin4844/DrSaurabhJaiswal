import { useState, useEffect, useRef } from 'react'
import useInView from '../hooks/useInView'

const GOOGLE_REVIEWS_URL = 'https://www.google.com/maps/search/Dr+Saurabh+Jaiswal+Skin+Hair+Clinic+Ramdaspeth+Nagpur'

// Replace the quotes below with actual text copied from the clinic's Google Maps listing.
// Open the listing, click Reviews, copy the reviewer's name (or initials), their review text,
// and the star count. Keep only 4 and 5-star reviews here.
const REVIEWS = [
  {
    quote: "Dr. Saurabh is extremely knowledgeable and thorough. He diagnosed my chronic skin condition accurately after years of ineffective treatment elsewhere. The clinic is clean and well-maintained.",
    name: 'Ananya S.',
    treatment: 'Skin Consultation',
    initial: 'A',
    stars: 5,
  },
  {
    quote: "Visited for hair fall and was impressed by how carefully he examined everything before suggesting a treatment plan. Results have been good and the staff are always helpful and courteous.",
    name: 'Rohit M.',
    treatment: 'Hair Loss Treatment',
    initial: 'R',
    stars: 5,
  },
  {
    quote: "Took my daughter for a skin allergy issue. Dr. Saurabh was patient, explained everything clearly and the treatment worked well. Would definitely recommend to anyone looking for a reliable dermatologist in Nagpur.",
    name: 'Sunita P.',
    treatment: 'Skin Allergy',
    initial: 'S',
    stars: 5,
  },
  {
    quote: "Excellent doctor. My acne and pigmentation improved significantly over two months of treatment. The approach is very systematic and he adjusts the plan based on how your skin responds.",
    name: 'Kartik D.',
    treatment: 'Acne & Pigmentation',
    initial: 'K',
    stars: 5,
  },
]

function StarRating({ count = 5 }) {
  return (
    <div style={{ display: 'flex', gap: '3px' }}>
      {Array.from({ length: count }, (_, i) => (
        <i key={i} className="fa-solid fa-star" style={{ color: '#FBBC04', fontSize: '.85rem' }} />
      ))}
    </div>
  )
}

function GoogleBadge() {
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: '5px',
      fontSize: '.7rem', fontWeight: 600, color: '#5f6368',
      letterSpacing: '.04em', textTransform: 'uppercase',
    }}>
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
      </svg>
      Google Review
    </span>
  )
}

export default function Testimonials() {
  const [cur, setCur] = useState(0)
  const [ref, inView] = useInView()
  const startX = useRef(null)

  const prev = () => setCur(c => (c - 1 + REVIEWS.length) % REVIEWS.length)
  const next = () => setCur(c => (c + 1) % REVIEWS.length)

  useEffect(() => {
    let timer
    const start = () => { timer = setInterval(next, 6500) }
    const stop  = () => { clearInterval(timer) }
    const onVis = () => (document.hidden ? stop() : start())
    start()
    document.addEventListener('visibilitychange', onVis)
    return () => { stop(); document.removeEventListener('visibilitychange', onVis) }
  }, [])

  const onTouchStart = e => { startX.current = e.touches[0].clientX }
  const onTouchEnd = e => {
    if (startX.current === null) return
    const diff = startX.current - e.changedTouches[0].clientX
    if (Math.abs(diff) > 40) diff > 0 ? next() : prev()
    startX.current = null
  }

  return (
    <section id="stories" className="stories">
      <div className="wrap">
        <div className={`reveal${inView ? ' in' : ''}`} ref={ref} style={{ maxWidth: '880px', margin: '0 auto', textAlign: 'center' }}>
          <div className="stories__testi">
            <span className="label label-ink" style={{ marginBottom: '18px', display: 'inline-flex' }}>
              Patient Stories
            </span>
            <h2 className="display display--md" style={{ marginBottom: '8px' }}>
              Real Results. <em>Real Confidence.</em>
            </h2>

            <div
              className="testi__slider"
              onTouchStart={onTouchStart}
              onTouchEnd={onTouchEnd}
            >
              <div
                className="testi__track"
                style={{ transform: `translateX(-${cur * 100}%)` }}
              >
                {REVIEWS.map((r, i) => (
                  <div key={i} className="testi__slide">
                    <div className="testi__card">
                      <div className="testi__card-hd">
                        <GoogleBadge />
                        <StarRating count={r.stars} />
                      </div>
                      <i className="fa-solid fa-quote-left testi__quote-icon" aria-hidden="true" />
                      <p className="testi__text">{r.quote}</p>
                      <div className="testi__author">
                        <div className="testi__avatar">{r.initial}</div>
                        <div>
                          <p className="testi__author-n">{r.name}</p>
                          <p className="testi__author-s">{r.treatment}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="testi__controls">
              <button className="testi__nav" onClick={prev} aria-label="Previous">
                <i className="fa-solid fa-arrow-left" />
              </button>
              <div className="testi__dots">
                {REVIEWS.map((_, i) => (
                  <button
                    key={i}
                    className={`testi__dot${i === cur ? ' on' : ''}`}
                    onClick={() => setCur(i)}
                    aria-label={`Slide ${i + 1}`}
                  />
                ))}
              </div>
              <button className="testi__nav" onClick={next} aria-label="Next">
                <i className="fa-solid fa-arrow-right" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
