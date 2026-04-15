export default function SamostalniRad() {
  return (
    <section className="bg-dark py-24 px-6" id="samostalnirad">
      <div className="max-w-site mx-auto">

        <span className="block text-accent text-[0.72rem] font-bold tracking-[0.2em] uppercase mb-3">
          Projekti
        </span>
        <h2 className="font-heading text-[clamp(1.8rem,3.5vw,2.6rem)] text-light leading-snug mb-10">
          Samostalan rad na Web3 projektima uz podršku mentora
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div>
            <p className="text-[0.97rem] font-light text-[#aaa] leading-[1.85]">
              Tokom predavanja i radionica imaćeš priliku da uz našu pomoć oformiš tim, i uz pomoć naših mentora radiš na projektu koji treba da utvrdi i demonstrira novo stečena znanja. Na kraju završenog timskog projekta, svi polaznici dobiće Proof of Attendance tokene na Ethereum mreži i smernice za dalji rad na sopstvenoj ideji.
            </p>
          </div>
          <div>
            <img src="/images/events/independent-work.png" alt="Samostalni rad" className="w-full rounded" />
          </div>
        </div>

      </div>
    </section>
  )
}
