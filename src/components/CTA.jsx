// const FORM_URL = 'https://forms.gle/i1hjmfggLZQHiQh49'

export default function CTA() {
  return (
    <section
      className="relative py-28 px-6 text-center bg-cover bg-center"
      style={{ backgroundImage: 'url(/images/events/venue.jpg)' }}
    >
      <div className="absolute inset-0 bg-dark/80" />
      <div className="relative z-10 max-w-site mx-auto">
        <h2 className="font-heading text-[clamp(1.8rem,4vw,3rem)] text-light mb-4">
          Prijavi se na Web3 Kamp 2026
        </h2>
        <p className="text-white/75 text-[1rem] font-light mb-14 max-w-[520px] mx-auto">
          Pridruži se kampu koji otvara vrata u svet web3 tehnologija.
        </p>
        <span className="inline-block bg-accent text-dark px-14 py-5 font-heading font-bold text-[1rem] tracking-[0.06em] rounded-sm opacity-70 cursor-default select-none">
          Prijave kreću uskoro!
        </span>
      </div>
    </section>
  )
}
