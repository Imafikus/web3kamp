import { useState, useEffect } from 'react'

function LinkedInIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setMenuOpen(false)

  const linkClass = 'text-light text-sm hover:text-accent transition-colors duration-200'

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 bg-dark transition-shadow duration-300 ${scrolled ? 'shadow-[0_2px_24px_rgba(0,0,0,0.35)]' : ''}`}>
      <div className="max-w-site mx-auto px-6 h-[68px] flex items-center justify-between">

        <a href="#" onClick={close} className="flex-shrink-0">
          <img src="/images/logo/logo.png" alt="Web3 Kamp" className="h-[34px] w-auto" />
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-9">
          <a href="#faq" onClick={close} className={linkClass}>FAQ</a>
          <a href="#predavanja" onClick={close} className={linkClass}>Predavanja</a>
          <a href="#samostalnirad" onClick={close} className={linkClass}>Samostalni rad</a>
          <a
            href="https://www.linkedin.com/company/web3kamp/"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
            aria-label="LinkedIn"
          >
            <LinkedInIcon />
          </a>
          <a href="https://forms.gle/aY5JiAL6A7AtX23E6" target="_blank" rel="noopener noreferrer" className="inline-block bg-accent text-dark px-6 py-2 font-heading font-bold text-xs tracking-[0.06em] rounded-sm hover:opacity-80 transition-opacity">
            Prijavi se
          </a>
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-1 bg-transparent border-none cursor-pointer"
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Otvori meni"
          aria-expanded={menuOpen}
        >
          <span className="block w-6 h-[2px] bg-light" />
          <span className="block w-6 h-[2px] bg-light" />
          <span className="block w-6 h-[2px] bg-light" />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-[68px] left-0 right-0 bg-dark border-t border-white/10 px-6 py-6 flex flex-col gap-5">
          <a href="#faq" onClick={close} className={linkClass}>FAQ</a>
          <a href="#predavanja" onClick={close} className={linkClass}>Predavanja</a>
          <a href="#samostalnirad" onClick={close} className={linkClass}>Samostalni rad</a>
          <a
            href="https://www.linkedin.com/company/web3kamp/"
            target="_blank"
            rel="noopener noreferrer"
            className={`${linkClass} flex items-center gap-2`}
          >
            <LinkedInIcon /> LinkedIn
          </a>
          <a href="https://forms.gle/aY5JiAL6A7AtX23E6" target="_blank" rel="noopener noreferrer" className="inline-block bg-accent text-dark px-6 py-2 font-heading font-bold text-xs tracking-[0.06em] rounded-sm hover:opacity-80 transition-opacity">
            Prijavi se
          </a>
        </div>
      )}
    </nav>
  )
}
