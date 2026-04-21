const topics = [
  'Uvod u Web3',
  'Algoritmi i strukture podataka u blockchain čvorovima',
  'Pametni ugovori i decentralizovane virtuelne mašine',
  'Ethereum workshop',
  'Solana workshop',
  'Primena AI u blockhainu',
  'Kriptografija i privatnost',
]

export default function Curriculum() {
  return (
    <section className="bg-white py-24 px-6" id="predavanja">
      <div className="max-w-site mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">

          <div>
            <img src="/images/curriculum/curriculum.jpg" alt="10 dana predavanja" loading="lazy" className="w-full rounded" />
          </div>

          <div>
            <span className="block text-accent text-[0.72rem] font-bold tracking-[0.2em] uppercase mb-3">
              Kamp
            </span>
            <h2 className="font-heading text-[clamp(1.8rem,3vw,2.4rem)] leading-[1.2] mb-4">
              11 dana predavanja, radionica i boravka u IS Petnica
            </h2>
            <p className="text-[0.9rem] font-light text-[#555] leading-relaxed mb-8">
              Kamp traje od 31. jula do 10. avgusta. Tokom kampa, imaćeš priliku da pohađaš više od 50 sati predavanja fokusiranih na najbitnije aspekte novih tehnologija koje zbirno nose naziv Web3.
            </p>
            <ul>
              {topics.map((t, i) => (
                <li key={i} className="flex items-baseline gap-3.5 py-3.5 border-b border-dark/[0.08] text-[0.9rem] leading-snug first:border-t first:border-dark/[0.08]">
                  <span className="text-accent font-heading font-bold text-[0.78rem] min-w-[26px] tracking-wide">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  )
}
