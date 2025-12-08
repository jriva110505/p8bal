import Image from "next/image";

export default function Education() {
  return (
    <div className="relative w-full min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white overflow-hidden p-10">

      {/* BACK BUTTON */}
      <a
        href="/"
        className="fixed top-6 right-6 px-5 py-2 border border-white/80 
        rounded-xl bg-white/10 backdrop-blur-md font-semibold hover:bg-white/20 
        transition z-50"
      >
        ← Back
      </a>

      {/* TITLE */}
      <h1 className="text-center text-5xl font-extrabold tracking-wider mb-16">
        My Education Journey
      </h1>

      {/* TIMELINE */}
      <div className="relative max-w-4xl mx-auto">

        {/* Vertical line */}
        <div className="absolute left-1/2 top-0 w-[4px] h-full bg-white/20 rounded-full" />

        {/* --- COLLEGE --- */}
        <div className="relative flex items-center mb-24">
          {/* Dot */}
          <div className="absolute left-1/2 -translate-x-1/2 w-6 h-6 bg-green-400 rounded-full shadow-lg shadow-green-500/50" />

          {/* CARD */}
          <div className="ml-auto w-[70%] bg-white/10 border border-white/20 
            backdrop-blur-xl p-8 rounded-2xl shadow-xl hover:bg-white/20 transition">
            
            <div className="flex items-center gap-6">
              <div className="w-[110px] h-[110px] rounded-xl overflow-hidden border-2 border-green-400 shadow-green-400 shadow-md">
                <Image src="/ncf.webp" alt="NCF Logo" width={110} height={110} />
              </div>

              <div>
                <h2 className="text-2xl font-bold">Bachelor of Science in Information Technology</h2>
                <p className="text-lg opacity-80">Naga College Foundation (NCF)</p>
                <p className="mt-1 text-green-300 font-semibold">Present</p>
              </div>
            </div>
          </div>
        </div>

        {/* --- HIGH SCHOOL --- */}
        <div className="relative flex items-center mb-24">
          {/* Dot */}
          <div className="absolute left-1/2 -translate-x-1/2 w-6 h-6 bg-blue-500 rounded-full shadow-lg shadow-blue-700/50" />

          {/* CARD */}
          <div className="mr-auto w-[70%] bg-white/10 border border-white/20 
            backdrop-blur-xl p-8 rounded-2xl shadow-xl hover:bg-white/20 transition">
            
            <div className="flex items-center gap-6">
              <div className="w-[110px] h-[110px] rounded-xl overflow-hidden border-2 border-blue-500 shadow-blue-400 shadow-md">
                <Image src="/cararayan.jpg" alt="CSNHS Logo" width={110} height={110} />
              </div>

              <div>
                <h2 className="text-2xl font-bold">Senior High School</h2>
                <p className="text-lg opacity-80">
                  Cararayan national high school (CNHS)
                </p>
                <p className="mt-1 text-blue-300 font-semibold">Completed</p>
              </div>
            </div>
          </div>
        </div>

 
        
        
        <div className="relative flex items-center mb-24">
          <div className="absolute left-1/2 -translate-x-1/2 w-6 h-6 bg-yellow-500 rounded-full shadow-lg shadow-yellow-700/50" />

          <div className="ml-auto w-[70%] bg-white/10 border border-white/20 
            backdrop-blur-xl p-8 rounded-2xl shadow-xl hover:bg-white/20 transition">
            
            <div className="flex items-center gap-6">
              <div className="w-[110px] h-[110px] rounded-xl overflow-hidden border-2 border-yellow-400 shadow-yellow-400 shadow-md">
                <Image src="/elem.png" alt="Elementary" width={110} height={110} />
              </div>

              <div>
                <h2 className="text-2xl font-bold">Elementary</h2>
                <p className="text-lg opacity-80">Salogon elementary school San Jose camarines sur</p>
                <p className="mt-1 text-yellow-300 font-semibold">Completed</p>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}
