function SolanaIcon() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" aria-hidden="true">
      <rect x="8" y="10" width="28" height="5" rx="2.5" fill="#4ae3b4" />
      <rect x="8" y="19.5" width="28" height="5" rx="2.5" fill="#4ae3b4" />
      <rect x="8" y="29" width="28" height="5" rx="2.5" fill="#4ae3b4" />
      <rect x="18" y="10" width="18" height="5" rx="2.5" fill="#4ae3b4" transform="skewX(-12)" />
      <rect x="18" y="19.5" width="18" height="5" rx="2.5" fill="#171b1a" opacity="0.4" transform="skewX(-12)" />
      <rect x="8" y="29" width="18" height="5" rx="2.5" fill="#171b1a" opacity="0.4" transform="skewX(-12)" />
    </svg>
  )
}

function EthereumIcon() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" aria-hidden="true">
      <polygon points="22,5 35,22 22,28 9,22" fill="#4ae3b4" opacity="0.9" />
      <polygon points="22,31 35,24 22,39 9,24" fill="#4ae3b4" opacity="0.55" />
    </svg>
  )
}

function DeepTechIcon() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" stroke="#4ae3b4" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 4 L36 10 L36 22 C36 30 22 40 22 40 C22 40 8 30 8 22 L8 10 Z" />
      <circle cx="22" cy="21" r="4.5" />
      <line x1="22" y1="16.5" x2="22" y2="13" />
      <line x1="22" y1="25.5" x2="22" y2="29" />
      <line x1="17.5" y1="21" x2="14" y2="21" />
      <line x1="26.5" y1="21" x2="30" y2="21" />
    </svg>
  )
}

const tracks = [
  {
    Icon: SolanaIcon,
    tag: 'Solana',
    desc: 'Brzi pametni ugovori i Rust.',
  },
  {
    Icon: EthereumIcon,
    tag: 'Ethereum',
    desc: 'Solidity, DeFi protokoli i L2 skaliranje.',
  },
  {
    Icon: DeepTechIcon,
    tag: 'Web3 Deep Tech',
    desc: 'Kriptografija, Primena AI, privatnost i bezbednost pametnih ugovora.',
  },
]

export default function Hakatoni() {
  return (
    <section className="bg-dark py-24 px-6">
      <div className="max-w-site mx-auto">

        <div className="text-center mb-14">
          <h2 className="font-heading text-[clamp(1.8rem,4vw,2.8rem)] text-light leading-[1.15] mb-4">
            Hakatoni
          </h2>
          <p className="text-white/65 text-[0.97rem] font-light max-w-[520px] mx-auto leading-relaxed">
            Tokom kampa organizujemo tri hakatona - po jedan za svaku celinu koju pokrivamo. Radite timski i rešavajte stvarne probleme uz pomoć mentora iz akademije i industrije.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tracks.map(({ Icon, tag, desc }) => (
            <div
              key={tag}
              className="bg-white/5 border border-white/10 rounded-lg p-8 flex flex-col gap-5 hover:border-accent/40 hover:bg-white/[0.07] transition-colors duration-200"
            >
              <Icon />
              <div>
                <span className="inline-block text-accent text-[0.68rem] font-bold tracking-[0.18em] uppercase mb-3">
                  {tag}
                </span>
                <p className="text-white/60 text-[0.88rem] font-light leading-relaxed">
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
