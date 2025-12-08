import Image from "next/image";

export default function Contact() {
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
        Contact Me
      </h1>

      {/* CONTACT CARD */}
      <div className="relative max-w-2xl mx-auto bg-white/10 backdrop-blur-xl
        rounded-2xl p-10 shadow-lg border-l-8 border-cyan-400/50">

        {/* PHONE */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-2">Phone</h2>
          <p className="text-lg opacity-90">0912 345 6789</p>
        </div>

        {/* EMAIL */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-2">Email</h2>
          <p className="text-lg opacity-90">QWERTYUIOP@example.com</p>
        </div>

        {/* SOCIAL LINKS */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Social Media</h2>
          <div className="flex flex-wrap gap-6">
            <a
              href="DWDWQDQWD"
              target="_blank"
              className="text-blue-400 hover:text-blue-500 transition font-semibold"
            >
              Facebook
            </a>
            
          </div>
        </div>
      </div>
    </div>
  );
}
