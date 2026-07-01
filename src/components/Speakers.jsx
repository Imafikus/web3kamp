const speakers = [
  { name: 'Lazar Travica',         role: 'Technical Co-Founder @ Curvy',                   topic: 'Motivacija za Web3',                                 photo: '/images/speakers/lazar-travica.jpeg' },
  { name: 'Stefan Nožinić',       role: 'Co-Head of Computer Science @ Petnica Science Center', topic: 'Uvod u Web3',                                          photo: '/images/speakers/stefan-nozinjic.jpg' },
  { name: 'Vuk Gavrilović',       role: 'Protocol Engineer',                                    topic: 'Algoritmi i strukture podataka u blockchain čvorovima', photo: '/images/speakers/vuk-gavrilovic.jpg' },
  { name: 'Branislav Milojković', role: 'Education Content Specialist @ Eduterium',             topic: 'Pametni ugovori i virtuelne mašine',                   photo: '/images/speakers/branislav-milojkovic.jpg' },
  { name: 'Ivan Džambasanović',      role: 'Web3 R&D Engineer @ Decenter',                                topic: 'Ethereum workshop',                                photo: '/images/speakers/ivan-dzambasanovic.jpg' },
  { name: 'Miljan Tekić',        role: 'Co-Founder @ Tenderly',                                       topic: 'Bulding a bussiness in web3 & Agentic payments',                             photo: '/images/speakers/miljan-tekic.jpeg' },
  { name: 'Nebojša Urošević',       role: 'Co-Founder @ Tenderly',                                   topic: 'VNets and Simulations',                                          photo: '/images/speakers/nebojsa-urosevic.jpg' },
  { name: 'Ilija Rilaković',        role: 'Founder @ Law Decoded',                             topic: 'Bezbednost podataka i regulative vezane za finansijske instrumente',                    photo: '/images/speakers/ilija-rilakovic.jpg' },
  // { name: 'Marko Vukolić',        role: 'Co-Founder and CEO @ Bitcoin Scaling Labs',           topic: 'Bitcoin i blockchain: kako i zašto?',                  photo: '/images/speakers/marko-vukolic.jpg' },
  // { name: 'Luka Ćirić',           role: 'City Lead Novi Sad @ Superteam Balkan',              topic: 'Solana: Zero to Hero',                                photo: '/images/speakers/luka-ciric.jpg' },
  // { name: 'Ognjen Aleksić',       role: 'Blockchain developer @ Ceres Solutions',              topic: 'Rust meets DeFi',                                     photo: '/images/speakers/ognjen-aleksic.jpg' },
  // { name: 'Lav Hudak',            role: 'DevRel @ Gno.land',                                   topic: 'DAOs',                                                photo: '/images/speakers/lav-hudak.jpg' },
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
