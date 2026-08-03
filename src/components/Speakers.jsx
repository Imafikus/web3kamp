const speakers = [
  { name: 'Lazar Travica',         role: 'Technical Co-Founder @ Curvy',                   topic: 'Motivacija za Web3',                                 photo: '/images/speakers/lazar-travica.jpeg' },
  { name: 'Stefan Nožinić',       role: 'Co-Founder @ Web3 Kamp', topic: 'Uvod u Web3',                                          photo: '/images/speakers/stefan-nozinjic.jpg' },
  { name: 'Vuk Gavrilović',       role: 'Backend Engineer @ Spothopper',                                    topic: 'Algoritmi i strukture podataka u blockchain čvorovima', photo: '/images/speakers/vuk-gavrilovic.jpg' },
  { name: 'Branislav Milojković', role: 'Co-Founder @ Web3 Kamp',             topic: 'Pametni ugovori i virtuelne mašine',                   photo: '/images/speakers/branislav-milojkovic.jpg' },
  { name: 'Ivan Džambasanović',      role: 'R&D Engineer @ Decenter',                                topic: 'Ethereum workshop',                                photo: '/images/speakers/ivan-dzambasanovic.jpg' },
  { name: 'Miljan Tekić',        role: 'Co-Founder @ Tenderly',                                       topic: 'Bulding a bussiness in web3 & Agentic payments',                             photo: '/images/speakers/miljan-tekic.jpeg' },
  { name: 'Nebojša Urošević',       role: 'Co-Founder @ Tenderly',                                   topic: 'VNets and Simulations',                                          photo: '/images/speakers/nebojsa-urosevic.jpg' },
  { name: 'Ilija Rilaković',        role: 'Founder @ Law Decoded',                             topic: 'Bezbednost podataka i regulative vezane za finansijske instrumente',                    photo: '/images/speakers/ilija-rilakovic.jpg' },
  { name: 'Rajko Zagorac',        role: 'Solidity Engineer @ Decenter',           topic: 'Inovacije u DeFi',                  photo: '/images/speakers/rajko-zagorac.png' },
  { name: 'Branko Vitorović',        role: 'Backend Engineer @ Decenter',           topic: 'Inovacije u DeFi',                  photo: '/images/speakers/branko-vitorovic.png' },
  { name: 'Ognjen Aleksić',       role: 'Blockchain developer @ 4PTO',              topic: 'Solana Workshop',                                     photo: '/images/speakers/ognjen-aleksic.jpg' },
  { name: 'Dejan Karavla',       role: 'Co-Founder Cognios',              topic: 'Solana Workshop',                                     photo: '/images/speakers/dejan-karavla.jpeg' },
  { name: 'Đurađ Đurić',       role: 'Co-Founder Cognios',              topic: 'Solana Workshop',                                     photo: '/images/speakers/djuradj-djuric.jpeg' },
  { name: 'Darko Panić',       role: 'Senior Blockchain Engineer @ MetaWealth',              topic: 'Solana Workshop',                                     photo: '/images/speakers/darko-panic.jpeg' },
]

function initials(name) {
  return name.split(' ').map(w => w[0]).join('').slice(0, 2)
}

export default function Speakers() {
  return (
    <section className="bg-dark py-24 px-6">
      <div className="max-w-site mx-auto">

        <span className="block text-accent text-[0.72rem] font-bold tracking-[0.2em] uppercase mb-3">
          Predavači
        </span>
        <h2 className="font-heading text-3xl text-light mb-12">Potvrđeni Predavači</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {speakers.map(s => (
            <div
              key={s.name}
              className="flex gap-5 items-start bg-white/[0.04] border border-white/10 rounded p-7 transition-colors duration-200 hover:border-accent"
            >
              <div className="w-[68px] h-[68px] rounded-full bg-accent flex items-center justify-center flex-shrink-0 overflow-hidden">
                {s.photo
                  ? <img src={s.photo} alt={s.name} className="w-full h-full object-cover object-top" />
                  : <span className="font-heading font-bold text-dark text-[1.2rem]">{initials(s.name)}</span>
                }
              </div>
              <div>
                <h4 className="font-heading text-light text-[1rem] mb-1.5">{s.name}</h4>
                <span className="block text-accent text-[0.82rem] font-light mb-2">{s.role}</span>
                <p className="text-[#666] text-[0.82rem] italic">{s.topic}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
