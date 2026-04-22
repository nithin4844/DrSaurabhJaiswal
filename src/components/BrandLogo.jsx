import { useState } from 'react'
import Logo from './Logo'

export default function BrandLogo({ size = 44, src = './brand-logo.jpg', alt = 'Dr. Saurabh Jaiswal Skin & Hair Clinic' }) {
  const [ok, setOk] = useState(true)

  if (!ok) return <Logo size={size} />

  return (
    <img
      src={src}
      alt={alt}
      width={size * 2.8}
      height={size}
      className="brand-logo-img"
      onError={() => setOk(false)}
      loading="eager"
      style={{ objectFit: 'contain', objectPosition: 'left center' }}
    />
  )
}
