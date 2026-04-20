import { useState } from 'react'

const faqs = [
  {
    q: 'Šta ulazi u troškove kampa?',
    a: 'Kamp je besplatan za učesnike',
  },
  {
    q: 'Da li postoji selekcija?',
    a: 'Postojaće selekcija učesnika, tako da obratite pažnju da što bolje motivišete vaše učešće na kampu.',
  },
  {
    q: 'Da li mogu da ispratim deo kampa online?',
    a: 'Ne, kamp se održava isključivo uživo i potrebno je skoro celodnevno angažovanje u toku trajanja kampa.',
  },
  {
    q: 'Da li mogu da se prijavim na kamp ako sam zaposlen?',
    a: 'Da, cilj nam je da učinimo što veći broj IT profesionalaca \'Web3 pismenim\'. Imaj u vidu da, ako te pozovemo na kamp, očekujemo celodnevno angažovanje, stoga planiraj svoje poslovne obaveze prema tome.',
  },
  {
    q: 'Do kada mogu da se prijavim?',
    a: 'Prijave traju do 15. juna.',
  },
  {
    q: 'Da li je u troškove uračunat prevoz?',
    a: 'Ne. Naš predlog je da dođete vozom ili autobusom lokalnog prevoznika do Valjeva. Od Valjeva do Petnice možete stići gradskim prevozom, taksijem ili pešaka.',
  },
  {
    q: 'Za koga je ovaj kamp namenjen?',
    a: 'Kamp je orjentisan prvenstveno ka studentima tehničkih nauka koji su zainteresovani za web3 tehnologiju i imaju prethodnog iskustva sa programiranjem.',
  },
  {
    q: 'Da li se dobija sertifikat na kraju kampa?',
    a: 'Na kraju kampa dobija se POAP, odnosno Web3 token koji predstavlja \'Proof of Attendance\'.',
  },
  {
    q: 'Da li je potrebno poznavanje nekog programskog jezika?',
    a: 'Potrebno bar osnovno poznavanje bilo kog general purpose programskog jezika.',
  },
  {
    q: 'Šta je cilj kampa?',
    a: 'Cilj je da što većem broju (budućih) IT stručnjaka pružimo kvalitetan i efikasan način da se suštinski upoznaju sa Web3 tehnologijama i njihovim primenama.',
  },
  {
    q: 'Koliko dugo traje kamp?',
    a: 'Kamp će trajati od 31. jula do 10. avgusta 2026. Smeštaj i hrana tokom kampa biće obezbeđeni u IS Petnica.',
  },
  {
    q: 'Gde se nalazi IS Petnica?',
    a: 'IS Petnica se nalazi na oko 5km od centra Valjeva.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState(null)

  return (
    <section className="bg-white py-24 px-6" id="faq">
      <div className="max-w-[800px] mx-auto">

        <span className="block text-accent text-[0.72rem] font-bold tracking-[0.2em] uppercase mb-3">
          Česta pitanja
        </span>
        <h2 className="font-heading text-[2.5rem] mb-12">FAQ</h2>

        <div>
          {faqs.map((item, i) => (
            <div key={i} className="border-b border-dark/10">
              <button
                className="w-full flex justify-between items-center gap-4 py-5 text-left font-heading font-bold text-[0.98rem] text-dark hover:text-accent transition-colors duration-200 bg-transparent border-none cursor-pointer"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span>{item.q}</span>
                <span className="text-accent text-[1.4rem] font-light leading-none flex-shrink-0">
                  {open === i ? '−' : '+'}
                </span>
              </button>
              {open === i && (
                <div className="pb-6 pr-8">
                  <p className="text-[0.92rem] font-light text-[#666] leading-[1.75]">{item.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
