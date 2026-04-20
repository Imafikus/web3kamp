function CalendarIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  )
}

function PinIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

// const FORM_URL = 'https://forms.gle/i1hjmfggLZQHiQh49'

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center text-center pt-[68px] bg-cover bg-center"
      style={{ backgroundImage: 'url(/images/hero/hero.png)' }}
    >
      <div className="absolute inset-0 bg-dark/75" />

      <div className="relative z-10 max-w-[820px] mx-auto px-6 text-light">

        <span className="inline-block text-accent text-[0.75rem] font-bold font-heading tracking-[0.25em] uppercase mb-5">
          Web3 Kamp 2026
        </span>

        <h1 className="text-[clamp(2.4rem,6vw,4.4rem)] leading-[1.1] font-heading font-bold text-white mb-6">
          Web3 Kamp ponovo<br />
          <span className="text-accent relative inline-block">
            u Petnici!
            <svg viewBox="0 0 260 14" height="14" className="absolute bottom-[-6px] left-0 w-full overflow-visible pointer-events-none animate-draw" aria-hidden="true">
              <path d="M4,10 Q30,2 65,8 Q100,14 130,6 Q160,0 200,8 Q230,13 256,6" stroke="#4ae3b4" strokeWidth="3" fill="none" strokeLinecap="round" />
            </svg>
          </span>
        </h1>

        <p className="text-[1.05rem] font-light text-[#ccc] leading-relaxed mb-9">
          Četrvrtu godinu za redom organizujemo kamp posvećen web3 tehnologiji. Eksperti iz akademije i industrije će tokom 11 intenzivnih dana u Istraživačkoj Stanici Petnica raditi sa vama kako bi vam približili primenu web3 tehnologija.
        </p>

        <div className="flex justify-center gap-10 mb-11 flex-wrap">
          <div className="flex items-center gap-2 text-[0.95rem] font-light">
            <span className="text-accent"><CalendarIcon /></span>
            <span>31. jul – 10. avgust 2026.</span>
          </div>
          <div className="flex items-center gap-2 text-[0.95rem] font-light">
            <span className="text-accent"><PinIcon /></span>
            <span>Istraživačka stanica Petnica</span>
          </div>
        </div>

        <span className="inline-block bg-accent text-dark px-11 py-4 font-heading font-bold text-[0.95rem] tracking-[0.06em] rounded-sm opacity-70 cursor-default select-none">
          Prijave kreću uskoro!
        </span>
      </div>
    </section>
  )
}
