"use client";
import Image from "next/image";

export default function Home() {

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <div
      style={{
        position: "relative",
        minHeight: "100vh",
        width: "100%",
        overflow: "hidden",
        color: "white",
        fontFamily: "Arial, sans-serif",
      }}
    >

      {/* Navigation Menu */}
      <nav
        style={{
          position: "fixed",
          top: 20,
          right: 30,
          display: "flex",
          gap: "1rem",
          zIndex: 10,
        }}
      >
        {["About", "Education", "Hobbies", "Contact"].map((item) => (
          <a
            key={item}
            href={`/${item.toLowerCase()}`}
            style={{
              color: "white",
              textDecoration: "none",
              fontWeight: "700",
              padding: "10px 18px",
              borderRadius: "12px",
              border: "2px solid rgba(255,255,255,0.7)",
              backdropFilter: "blur(5px)",
              transition: "all 0.3s ease",
              backgroundColor: "rgba(0,0,0,0.35)",
            }}
          >
            {item}
          </a>
        ))}

        {/* 🔥 Logout Button */}
        <button
          onClick={handleLogout}
          style={{
            color: "white",
            fontWeight: "700",
            padding: "10px 18px",
            borderRadius: "12px",
            border: "2px solid rgba(255,255,255,0.7)",
            backgroundColor: "rgba(255,0,0,0.45)",
            backdropFilter: "blur(5px)",
            cursor: "pointer",
            transition: "0.3s",
          }}
        >
          Logout
        </button>
      </nav>

{/* Background Image */}
      <Image
        src="/qqq.jpg"
        alt="Background"
        fill
        style={{ objectFit: "cover" }}
        quality={80}
        priority
      />


      {/* Content Container */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          padding: "2rem",
          gap: "3rem",
          backgroundColor: "rgba(0, 0, 0, 0.45)",
        }}
      >
        {/* Profile Picture */}
        <div
          style={{
            borderRadius: "50%",
            overflow: "hidden",
            width: "450px",
            height: "450px",
            boxShadow: "0 0 20px rgba(255, 255, 255, 0.4)",
            flexShrink: 0,
          }}
        >
          <Image src="/1.webp" alt="Jerome Riva" width={450} height={450} />
        </div>

        {/* Text Section */}
        <div style={{ maxWidth: "600px", textAlign: "left" }}>
          <h1 style={{ fontSize: "3rem", fontWeight: "bold", marginBottom: "1rem" }}>
            Mr. Jerome Riva
          </h1>
          <p style={{ fontSize: "1.25rem", marginBottom: "2rem" }}>
            Hi! I’m Jerome E. Riva, a BSIT student from Naga College Foundation, Inc. 
            Welcome to my personal page!
          </p>

          <div style={{ display: "flex", gap: "1.5rem", fontSize: "1.1rem" }}>
            <a
              href="https://web.facebook.com/Jerome.Riva.009"
              target="_blank"
              style={{
                color: "#0A66C2",
                textDecoration: "none",
                padding: "8px 16px",
                borderRadius: "8px",
                border: "2px solid #0A66C2",
                backdropFilter: "blur(3px)",
              }}
            >
              Facebook
            </a>
            <a
              href="mailto:rivajerome00@gmail.com"
              style={{
                color: "#ff4c4c",
                textDecoration: "none",
                padding: "8px 16px",
                borderRadius: "8px",
                border: "2px solid #ff4c4c",
                backdropFilter: "blur(3px)",
              }}
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
