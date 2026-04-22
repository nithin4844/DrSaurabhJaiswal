export default function Hero({ onBook }) {
  return (
    <section className="hero" aria-label="Hero">
      <div className="hero__left">
        <div className="hero__content">
          <h1 className="hero__headline">
            Expert Skin Care,<br />
            <em>Right Here in Nagpur.</em>
          </h1>

          <p className="hero__sub">
            Evidence-based dermatology, cosmetology, trichology and dermatosurgery
            under the care of Dr. Saurabh Jaiswal, MBBS, DNB (Dermatology), MNAMS,
            at Ramdaspeth, Nagpur.
          </p>

          <div className="hero__ctas">
            <button className="btn btn-sage btn-lg" onClick={onBook}>
              <i className="fa-regular fa-calendar-check" /> Book Consultation
            </button>
            <a href="#services" className="hero__link">
              Explore Treatments
              <i className="fa-solid fa-arrow-right" />
            </a>
          </div>

          <div className="hero__meta">
            <div className="hero__meta-item">
              <i className="fa-regular fa-clock" />
              <span>Mon to Sat<br /><em>11 AM to 7 PM</em></span>
            </div>
            <div className="hero__meta-sep" />
            <div className="hero__meta-item">
              <i className="fa-solid fa-location-dot" />
              <span>Ramdaspeth<br /><em>Nagpur 440010</em></span>
            </div>
            <div className="hero__meta-sep" />
            <a href="tel:+918275757171" className="hero__meta-item hero__meta-item--link">
              <i className="fa-solid fa-phone" />
              <span>Call Clinic<br /><em>+91 82757 57171</em></span>
            </a>
          </div>
        </div>
      </div>

      <div className="hero__right">
        <img
          src="./doctor.jpg"
          alt="Dr. Saurabh Jaiswal, Dermatologist at Skin & Hair Clinic Nagpur"
          className="hero__photo"
          width="900"
          height="1200"
          loading="eager"
          fetchpriority="high"
          decoding="async"
        />
        <div className="hero__veil" />
      </div>

      <a href="#about" className="hero__scroll" aria-label="Scroll down">
        <span>Scroll</span>
        <i className="fa-solid fa-chevron-down" />
      </a>
    </section>
  )
}
