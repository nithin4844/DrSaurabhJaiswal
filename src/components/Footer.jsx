import BrandLogo from './BrandLogo'

export default function Footer({ onBook }) {
  const year = new Date().getFullYear()

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })

  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer__top">
          <div className="footer__grid">
            <div>
              <div className="footer__logo">
                <div className="logo-bubble"><BrandLogo size={56} /></div>
                <div>
                  <span className="footer__logo-name">Dr. Saurabh Jaiswal</span>
                  <span className="footer__logo-sub">Skin &amp; Hair Clinic · Dermatology · Cosmetology · Trichology</span>
                </div>
              </div>
              <p className="footer__tagline">
                Evidence-based dermatology, cosmetology, trichology and dermatosurgery
                by Dr. Saurabh Jaiswal, MBBS, DNB (Dermatology), MNAMS, Ramdaspeth, Nagpur.
              </p>
              <div className="footer__socials">
                <a href="https://wa.me/918275757171" className="footer__soc" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                  <i className="fa-brands fa-whatsapp" />
                </a>
                <a href="https://www.instagram.com/skin_dr.saurabhjaiswal/" className="footer__soc" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <i className="fa-brands fa-instagram" />
                </a>
                <a href="https://www.facebook.com/DrSaurabhJaiswalSkinHairClinic" className="footer__soc" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <i className="fa-brands fa-facebook-f" />
                </a>
              </div>
            </div>

            <div className="footer__col">
              <h4>Navigate</h4>
              <ul>
                {[['about','About'],['services','Services'],['stories','Reviews'],['contact','Contact']].map(([id, label]) => (
                  <li key={id}>
                    <a role="button" style={{ cursor:'pointer' }} onClick={() => scrollTo(id)}>
                      <i className="fa-solid fa-circle-dot" /> {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer__col">
              <h4>Treatments</h4>
              <ul>
                {[
                  ['Medical Dermatology',   'Medical Dermatology Consultation'],
                  ['Laser Treatments',      'Laser Treatment'],
                  ['Acne & Scar Treatment', 'Acne & Acne Scar Treatment'],
                  ['Pigmentation',          'Pigmentation & Scar Treatment'],
                  ['Hair & Scalp',          'Hair & Scalp Treatment'],
                  ['Dermatosurgery',        'Dermatosurgery'],
                ].map(([label, treatment]) => (
                  <li key={label}>
                    <a onClick={() => onBook(treatment)} style={{ cursor:'pointer' }}>
                      <i className="fa-solid fa-circle-dot" /> {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer__col">
              <h4>Visit Us</h4>
              <ul className="footer__contact">
                <li>
                  <i className="fa-solid fa-location-dot" />
                  <span>
                    Mano-Laxmi Building, 1st Floor, Opp. Centre Point Hotel,
                    Above Namkeen Ghar, Central Bazar Road, Ramdaspeth, Nagpur 440010
                  </span>
                </li>
                <li>
                  <i className="fa-solid fa-phone" />
                  <span>
                    <a href="tel:+918275757171">+91 82757 57171</a>
                  </span>
                </li>
                <li>
                  <i className="fa-regular fa-clock" />
                  <span>Mon to Sat · 11 AM to 7 PM</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer__map">
            <div className="footer__map-embed">
              <iframe
                title="Dr. Saurabh Jaiswal Skin & Hair Clinic location on Google Maps"
                src="https://maps.google.com/maps?q=Dr+Saurabh+Jaiswal+Skin+Hair+Clinic+Ramdaspeth+Nagpur&t=&z=16&ie=UTF8&iwloc=&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen=""
              />
            </div>
            <a
              className="footer__directions"
              href="https://www.google.com/maps/dir/?api=1&destination=Mano+Laxmi+Building+Central+Bazar+Road+Ramdaspeth+Nagpur"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-solid fa-diamond-turn-right" />
              Get Directions to Clinic
            </a>
          </div>
        </div>


      </div>
    </footer>
  )
}
