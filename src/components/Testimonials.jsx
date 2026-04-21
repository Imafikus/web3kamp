const aftermovies = [
  { id: 'cVH_J6vp9jU', label: 'Aftermovie 2024' },
  { id: '4HT0mZ0GyLk', label: 'Aftermovie 2025' },
]

const testimonials = [
  { id: 'G4ttHvGA_ME', label: 'Testimonijali 2024' },
  { id: 'taqL8JLYq-4', label: 'Testimonijali 2025' },
]

const lectures = [
  { id: 'QVfjstr2y8g', label: 'Predavanja 2024' },
  { id: 'jR4RgdjtEu0', label: 'Predavanja 2025' },
]

function VideoGrid({ videos }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
      {videos.map(v => (
        <div key={v.id}>
          <div className="w-full aspect-video rounded overflow-hidden">
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${v.id}`}
              title={v.label}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
              className="w-full h-full border-0"
            />
          </div>
          <p className="mt-3 text-[0.88rem] font-light text-[#666]">{v.label}</p>
        </div>
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="bg-light py-24 px-6">
      <div className="max-w-site mx-auto">

        <span className="block text-accent text-[0.72rem] font-bold tracking-[0.2em] uppercase mb-3">
          Iskustva polaznika
        </span>
        <h2 className="font-heading text-3xl mb-16">Šta kažu bivši polaznici?</h2>

        <h3 className="font-heading text-xl mb-6">Aftermovies</h3>
        <VideoGrid videos={aftermovies} />

        <div className="my-16 border-t border-dark/10" />

        <h3 className="font-heading text-xl mb-6">Testimonijali</h3>
        <VideoGrid videos={testimonials} />
        
        <div className="my-16 border-t border-dark/10" />

        <h3 className="font-heading text-xl mb-6">Predavanja</h3>
        <VideoGrid videos={lectures} />
        
        

      </div>
    </section>
  )
}
