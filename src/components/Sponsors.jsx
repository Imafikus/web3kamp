const goldSponsors = [
  { name: '0xcurvy', url: 'https://0xcurvy.io', logo: '/images/sponsors/sponsor-curvy.png' },
  { name: 'Superteam', url: 'https://stblkn.notion.site/', logo: '/images/sponsors/sponsor-superteam.png' },
]

const silverSponsors = [
  { name: 'Tenderly', url: 'https://tenderly.co', logo: '/images/sponsors/sponsor-tenderly.png' },
]

const bronzeSponsors = [
  { name: 'Decenter', url: 'https://decenter.org', logo: '/images/sponsors/sponsor-decenter.png' },
]


const friends = [
  { name: 'Netokracija',      url: 'https://www.netokracija.rs/', logo: '/images/friends/friend-netokracija.png' },
  { name: 'Fondacija Petlja',      url: 'https://www.petlja.org/', logo: '/images/friends/friend-petlja.svg' },
  { name: 'Garaža',      url: 'https://garaza.org/', logo: '/images/friends/friend-garaza.svg' },
  { name: 'Law Decoded',      url: 'https://lawdecoded.io/', logo: '/images/friends/friend-lawdecoded.png' },
]

export default function Sponsors() {
  return (
    <>
      <section className="bg-light py-20 px-6">
        <div className="max-w-site mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="block text-accent text-[0.72rem] font-bold tracking-[0.2em] uppercase mb-3">
                Učešće
              </span>
              <h2 className="font-heading text-[clamp(1.8rem,3vw,2.4rem)] mb-4">
                Kako da postaneš polaznik kampa?
              </h2>
              <p className="text-[0.97rem] font-light text-[#555] leading-relaxed max-w-170">
                Učešće na kampu je besplatno. Kako smatramo da finansije ne smeju biti prepreka obrazovanju, sponzori kampa će pokriti troškove održavanja.
              </p>
            </div>

            <div>
              <img
                src="/images/sponsors/header.jpg"
                alt="Atmosfera sa Web3 kampa"
                loading="lazy"
                className="w-full rounded"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 px-6">
        <div className="max-w-site mx-auto text-center">
          <span className="block text-accent text-[0.72rem] font-bold tracking-[0.2em] uppercase mb-3">
            Podržavaju nas
          </span>

          <div className="space-y-14 text-left">
            <div>
              <h3 className="font-heading text-[clamp(1.35rem,2.3vw,1.8rem)] mb-6 text-center">
                Zlatni Sponzori
              </h3>
              <div className="flex flex-wrap justify-center gap-4">
                {goldSponsors.map(sponsor => (
                  <a
                    key={sponsor.name}
                    href={sponsor.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={sponsor.name}
                    className="flex items-center justify-center bg-light rounded-sm w-47.5 h-24.5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
                  >
                    <img src={sponsor.logo} alt={sponsor.name} className={`${sponsor.logoClass ?? 'w-43 h-12'} object-contain`} />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-heading text-[clamp(1.35rem,2.3vw,1.8rem)] mb-6 text-center">
                Srebrni Sponzori
              </h3>
              <div className="flex flex-wrap justify-center gap-4">
                {silverSponsors.map(sponsor => (
                  <a
                    key={sponsor.name}
                    href={sponsor.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={sponsor.name}
                    className="flex items-center justify-center bg-light rounded-sm w-40.5 h-17.5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
                  >
                    <img src={sponsor.logo} alt={sponsor.name} className={`${sponsor.logoClass ?? 'w-25 h-12'} object-contain`} />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-heading text-[clamp(1.35rem,2.3vw,1.8rem)] mb-6 text-center">
                Bronzani Sponzori
              </h3>
              <div className="flex flex-wrap justify-center gap-4">
                {bronzeSponsors.map(sponsor => (
                  <a
                    key={sponsor.name}
                    href={sponsor.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={sponsor.name}
                    className="flex items-center justify-center bg-light rounded-sm w-35.5 h-14.5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
                  >
                    <img src={sponsor.logo} alt={sponsor.name} className={`${sponsor.logoClass ?? 'w-24 h-24'} object-contain`} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-16">
            <span className="block text-accent text-[0.72rem] font-bold tracking-[0.2em] uppercase mb-3">
              Zajednica
            </span>
            <h3 className="font-heading text-[clamp(1.35rem,2.3vw,1.8rem)] mb-8">
              Prijatelji seminara
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {friends.map(partner => (
                <a
                  key={partner.name}
                  href={partner.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={partner.name}
                  className="flex items-center justify-center border border-[#dcdcdc] rounded-sm w-40 h-20 bg-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
                >
                    <img src={partner.logo} alt={partner.name} className="w-26 h-9 object-contain" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
