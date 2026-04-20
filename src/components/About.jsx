export default function About() {
  return (
    <section
      className="relative py-24 px-6 bg-cover bg-center"
      style={{ backgroundImage: 'url(/images/events/program-bg.jpg)' }}
    >
      <div className="absolute inset-0 bg-dark/80" />
      <div className="relative z-10 max-w-site mx-auto">

        <span className="block text-accent text-[0.72rem] font-bold tracking-[0.2em] uppercase mb-3">
          O kampu
        </span>

        <h2 className="font-heading text-[clamp(1.8rem,4vw,3rem)] leading-[1.15] text-light mb-7">
          Kome je kamp namenjen?
        </h2>

        <div className="max-w-[720px] space-y-4">
          <p className="text-[0.97rem] font-light leading-[1.85] text-white/85">
            Kamp je namenjen pre svega studentima tehničkih nauka koji imaju iskustva sa programiranjem.
          </p>
          <p className="text-[0.97rem] font-light leading-[1.85] text-white/85">
            Web3 je već podstakao inovacije u poljima finansijskih tehnologija, organizovanju poslovanja, video igrama i društvenim medijima. A tek je na svom početku. Ukoliko si zaljubljenik u nove tehnologije, ovo je idealno vreme da uskočiš u Web3 svet, unaprediš svoje veštine i počneš da transformišeš budućnost.
          </p>
        </div>

      </div>
    </section>
  )
}
