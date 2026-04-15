const sponsors = [
  { name: 'Ethereum Foundation', url: 'https://ethereum.foundation', logo: '/images/sponsors/sponsor-ethereum.png' },
  { name: 'Tenderly',            url: 'https://tenderly.co',          logo: '/images/sponsors/sponsor-tenderly.png' },
  { name: 'Superteam',           url: 'https://superteam.fun',        logo: '/images/sponsors/sponsor-superteam.png' },
  { name: 'Decenter',            url: 'https://decenter.org',         logo: '/images/sponsors/sponsor-decenter.png', logoClass: 'w-[185px] h-[70px]' },
  { name: '0xcurvy',             url: 'https://0xcurvy.io',           logo: '/images/sponsors/sponsor-curvy.png' },
  { name: 'Gno.land',            url: 'https://gno.land',             logo: '/images/sponsors/sponsor-gnoland.png' },
]

const friends = [
  { name: 'Finspot',     url: '#', logo: '/images/friends/friend-finspot.png' },
  { name: 'Attic42',    url: '#', logo: '/images/friends/friend-attic42.png' },
  { name: 'Law Decoded', url: '#', logo: '/images/friends/friend-lawdecoded.png' },
  { name: '3327',        url: '#', logo: '/images/friends/friend-3327.png' },
]

export default function Sponsors() {
  return (
    <section className="bg-light py-20 px-6">
      <div className="max-w-site mx-auto">

        <span className="block text-accent text-[0.72rem] font-bold tracking-[0.2em] uppercase mb-3">
          Učešće
        </span>
        <h2 className="font-heading text-[clamp(1.8rem,3vw,2.4rem)] mb-4">
          Kako da postaneš polaznik programa?
        </h2>
        <p className="text-[0.97rem] font-light text-[#555] leading-relaxed max-w-[680px] mb-12">
          Učešće na seminaru je besplatno. Kako smatramo da finansije ne smeju biti prepreka obrazovanju, sponzori seminara će pokriti troškove održavanja seminara.
        </p>

        <span className="block text-accent text-[0.72rem] font-bold tracking-[0.2em] uppercase mb-3">
          Sponzori seminara
        </span>

        <div className="flex flex-wrap gap-4">
          {sponsors.map(s => (
            <a
              key={s.name}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              title={s.name}
              className="flex items-center justify-center bg-white rounded-sm w-[210px] h-[110px] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
            >
              <img src={s.logo} alt={s.name} className={`${s.logoClass ?? 'w-[150px] h-[54px]'} object-contain`} />
            </a>
          ))}
        </div>

        {/* Prijatelji seminara — commented out
        <span className="block text-accent text-[0.72rem] font-bold tracking-[0.2em] uppercase mb-3">
          Prijatelji seminara
        </span>
        <div className="flex flex-wrap gap-3">
          {friends.map(f => (
            <a
              key={f.name}
              href={f.url}
              target="_blank"
              rel="noopener noreferrer"
              title={f.name}
              className="flex items-center justify-center border border-dark/20 rounded-sm w-[170px] h-[75px] transition-colors duration-200 hover:border-accent"
            >
              <img src={f.logo} alt={f.name} className="w-[130px] h-[40px] object-contain" />
            </a>
          ))}
        </div>
        */}

      </div>
    </section>
  )
}
