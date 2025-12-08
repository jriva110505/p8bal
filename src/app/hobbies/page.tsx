import Image from "next/image";

export default function Hobbies() {
  return (
    <div className="relative min-h-screen w-full bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white p-10 overflow-hidden">

      {/* BACK BUTTON */}
      <a
        href="/"
        className="fixed top-6 right-6 px-5 py-2 border border-white/90
        rounded-xl bg-white/10 backdrop-blur-md font-semibold hover:bg-white/20 
        transition z-50"
      >
        ← Back
      </a>

      {/* PAGE TITLE */}
      <h1 className="text-center text-5xl font-extrabold tracking-widest mb-14">
        My Hobbies
      </h1>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">

       
        </div>

        {/* PHOTOGRAPHY */}
        <div className="relative group bg-white/10 rounded-2xl p-6 
          border border-yellow-300/40 backdrop-blur-xl shadow-lg 
          hover:scale-105 transition-transform duration-300">

          <div className="absolute inset-0 bg-[url('/bmotor.jpg')] bg-cover bg-center opacity-20 rounded-2xl" />

          <div className="w-28 h-28 mx-auto rounded-full overflow-hidden border-4 border-yellow-300 shadow-md shadow-yellow-200">
            <Image src="/ride.jpg" alt="Photography" width={200} height={200} />
          </div>

          <h2 className="text-center text-2xl font-bold mt-4">RIDING MOTORCYCLE</h2>

          <p className="text-center opacity-90 mt-2 px-2">
            RIDING moments and turning them into lasting memories is my passion.
          </p>
        </div>

        {/* MUSIC */}
        <div className="relative group bg-white/10 rounded-2xl p-6 
          border border-cyan-300/40 backdrop-blur-xl shadow-lg 
          hover:scale-105 transition-transform duration-300">

          <div className="absolute inset-0 bg-[url('/music.jpg')] bg-cover bg-center opacity-20 rounded-2xl" />

          <div className="w-28 h-28 mx-auto rounded-full overflow-hidden border-4 border-cyan-300 shadow-md shadow-cyan-200">
            <Image src="/music.jpg" alt="Music" width={200} height={200} />
          </div>

          <h2 className="text-center text-2xl font-bold mt-4">Listening to Music</h2>

          <p className="text-center opacity-90 mt-2 px-3">
            Music relaxes my mind and keeps me motivated every day.
          </p>
        </div>
      
    </div>
  );
}
