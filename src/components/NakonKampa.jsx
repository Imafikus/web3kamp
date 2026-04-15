const stats = [
  {
    value: '35%',
    label: 'polaznika ostaje aktivno uključeno u web3 zajednicu',
  },
  {
    value: '25%',
    label: 'polaznika odlazi na praksu ili posao u jednoj od naših sponzorskih kompanija',
  },
]

export default function NakonKampa() {
  return (
    <section className="bg-dark py-24 px-6">
      <div className="max-w-site mx-auto">

        <div className="text-center mb-16">
          <span className="block text-accent text-[0.72rem] font-bold tracking-[0.2em] uppercase mb-3">
            Alumni
          </span>
          <h2 className="font-heading text-[clamp(1.8rem,4vw,2.8rem)] text-light leading-[1.15]">
            Šta se desi nakon kampa?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 rounded-lg overflow-hidden">
          {stats.map(({ value, label }) => (
            <div key={value} className="bg-dark px-12 py-14 flex flex-col items-center text-center gap-4">
              <span className="font-heading text-[4.5rem] leading-none text-accent font-bold">
                {value}
              </span>
              <p className="text-white/70 text-[1rem] font-light leading-relaxed max-w-[260px]">
                {label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
