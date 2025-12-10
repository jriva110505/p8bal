import Image from "next/image";

export default function About() {
  return (
    <div className="relative w-full min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white overflow-hidden">

      {/* BACK BUTTON */}
      <a
        href="/"
        className="fixed top-6 right-6 px-5 py-2 border border-white/80 
        rounded-xl bg-white/10 backdrop-blur-md font-semibold hover:bg-white/20 
        transition z-50"
      >
        ← Back
      </a>

      {/* PAGE WRAPPER */}
      <div className="flex flex-col lg:flex-row gap-10 px-10 lg:px-20 py-20">

        {/* LEFT PANEL – PROFILE */}
        <div className="lg:w-1/3 flex flex-col items-center text-center">
          <div className="w-[260px] h-[260px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white/30">
            <Image src="/balote.jpg" alt="Profile" width={260} height={260} />
          </div>

          <h1 className="mt-6 text-4xl font-bold tracking-wide">
            Jan Ayale Balote
          </h1>

          <p className="opacity-80 mt-2 text-lg">BSIT Student • NCF</p>

          {/* SCHOOL LOGO */}
          <div className="mt-6 w-[120px] h-[120px] rounded-full overflow-hidden border-2 border-green-400 shadow-lg">
            <Image src="/ncf.webp" alt="NCF" width={120} height={120} />
          </div>

          <p className="mt-2 font-semibold text-green-300">Naga College Foundation</p>
        </div>

        {/* RIGHT PANEL – ABOUT ME */}
        <div className="lg:w-2/3 bg-white/10 backdrop-blur-md p-10 rounded-2xl shadow-xl border border-white/20">
          <h2 className="text-3xl font-bold mb-4">Hello! im JAN AYALE BALOTE:)</h2>

          <p className="text-lg leading-relaxed mb-6">
            I’m tall and full of energy, always ready to sing my heart out, 
            dance to any beat, and travel to new places. Music and adventure
             are the things that keep me alive and inspired.
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4">My pets</h3>

          {/* ACHIEVEMENTS PHOTOS */}
        <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { src: "/dog.jpg", alt: "Achievement 1" },
            { src: "/cat.jpg", alt: "Achievement 2" },
            { src: "/bird.jpg", alt: "Achievement 3" },
          ].map((photo, i) => (
            <div
              key={i}
              className="w-full h-[180px] rounded-xl overflow-hidden shadow-lg border border-white/10 hover:scale-105 transition-transform"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                width={500}
                height={180}
                className="object-cover w-full h-full"
              />
            </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
