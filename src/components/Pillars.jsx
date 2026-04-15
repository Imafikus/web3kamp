const pillars = [
  {
    image: '/images/pillars/pillar-lectures.jpg',
    title: 'Tehnička predavanja',
    desc: 'Daće ti jake osnove za razumevanje, dizajniranje, implementaciju, i interakciju sa distribuiranim sistemima koji čine Web3',
  },
  {
    image: '/images/pillars/pillar-mentorship.jpg',
    title: 'Ekspertsko mentorstvo',
    desc: 'Više od deset eksperata sa iskustvom u radu u različitim oblastima daće ti savete i odgovore na pitanja i time ubrzati usvajanje znanja',
  },
  {
    image: '/images/pillars/pillar-projects.jpg',
    title: 'Praktični rad',
    desc: 'Timski projekti daće ti samopouzdanje i slobodu da stečeno znanje implementiraš na smislen, efikasan i koristan način',
  },
]

export default function Pillars() {
  return (
    <section className="bg-light py-20">
      <div className="max-w-site mx-auto grid grid-cols-1 md:grid-cols-3 gap-[3px]">
        {pillars.map(p => (
          <div key={p.title} className="bg-white overflow-hidden group">
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={p.image}
                alt={p.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-8">
              <h3 className="font-heading text-xl text-dark mb-3">{p.title}</h3>
              <p className="text-[0.88rem] font-light leading-[1.75] text-[#555]">{p.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
