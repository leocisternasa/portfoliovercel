import Image from 'next/image'

export default function Home() {
  return (
    <main className="lg:left-[250px] top-0 lg:absolute lg:h-full lg:w-[calc(100%-250px)] border-amber-300 border-2 bg-[#0f0f19]">
      <section className="overflow-auto bg-[#10101a]">
        <div className="overflow-hidden relative">
          <div className="relative w-full px-4 mx-auto ">
            <div className="py-[100px] border-2 border-green-500 min-h-[100vh]">
              hola2
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
