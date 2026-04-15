const mentors = [
  { name: 'Bojan Antunović',     role: 'R&D Researcher',    company: 'Decenter',            photo: '/images/mentors/bojan-antunovic.png' },
  { name: 'Todor Todorović',     role: 'Software Engineer', company: '',                    photo: '/images/mentors/todor-todorovic.jpg' },
  { name: 'Stefan Mitrović',     role: 'Protocol Engineer', company: 'Curvy',               photo: '/images/mentors/stefan-mitrovic.jpg' },
  { name: 'Ivan Džambasanović',  role: 'R&D Engineer',      company: 'Decenter',            photo: '/images/mentors/ivan-dzambasanovic.jpg' },
  { name: 'Stefan Nikolić',      role: 'Software Engineer', company: 'gno.land',            photo: '/images/mentors/stefan-nikolic.jpg' },
  { name: 'Nemanja Divljaković', role: 'Software Engineer', company: 'Polynomial Protocol', photo: '/images/mentors/nemanja-divljakovic.jpg' },
  { name: 'Amar Mujezinović',    role: 'Protocol Engineer', company: 'Curvy',               photo: '/images/mentors/amar-mujezinovic.jpg' },
]

function initials(name) {
  return name.split(' ').map(w => w[0]).join('').slice(0, 2)
}

export default function Mentors() {
  return (
    <section className="bg-light py-24 px-6">
      <div className="max-w-site mx-auto">

        <span className="block text-accent text-[0.72rem] font-bold tracking-[0.2em] uppercase mb-3">
          Mentori
        </span>
        <h2 className="font-heading text-3xl mb-12">Mentori programa</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
          {mentors.map(m => (
            <div key={m.name} className="text-center">
              <div className="w-[90px] h-[90px] rounded-full bg-dark flex items-center justify-center mx-auto mb-4 overflow-hidden">
                {m.photo
                  ? <img src={m.photo} alt={m.name} className="w-full h-full object-cover object-top" />
                  : <span className="font-heading font-bold text-accent text-[1.4rem]">{initials(m.name)}</span>
                }
              </div>
              <h4 className="font-heading text-[0.92rem] mb-1">{m.name}</h4>
              <p className="text-[0.78rem] text-[#777] font-light">
                {m.role}{m.company ? ` @ ${m.company}` : ''}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
