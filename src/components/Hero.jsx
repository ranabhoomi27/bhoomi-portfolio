function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden px-8 md:px-20 py-20 md:py-28 bg-[#faf9ff]"
    >
      {/* BACKGROUND BLURS */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-violet-200/40 blur-3xl rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-pink-200/30 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center relative z-10">

        {/* LEFT CONTENT */}
        <div>

          <p className="uppercase tracking-[0.25em] text-sm text-violet-500 mb-5 font-semibold">
            UI/UX Designer
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight">

            Hi, I’m <br />

            <span className="text-violet-500">
              Bhoomi Rana
            </span>

          </h1>

          <p className="text-lg text-gray-600 leading-relaxed mt-8 mb-10 max-w-xl">
            I design modern, user-centered digital experiences focused on
            usability, simplicity, and intuitive interfaces across web and mobile products.
          </p>

          {/* CTA */}
          <div className="flex flex-wrap gap-4 mb-10">

            <a
              href="#projects"
              className="bg-violet-500 hover:bg-violet-600 hover:scale-105 active:scale-95 transition-all duration-300 text-white px-7 py-4 rounded-2xl shadow-xl font-medium inline-block"
            >
              View My Work
            </a>

            <a
              href="/resume.pdf"
              download="Bhoomi_Rana_Resume.pdf"
              className="bg-white border border-gray-200 px-7 py-4 rounded-2xl font-medium shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 inline-block"
            >
              Download Resume
            </a>

          </div>

          {/* SOCIALS */}
          <div className="flex gap-5 text-gray-600 font-medium flex-wrap">

            <a
              href="https://www.linkedin.com/in/bhoomirana27"
              target="_blank"
              rel="noreferrer"
              className="hover:text-violet-500 transition duration-300"
            >
              LinkedIn
            </a>

            <a
              href="https://www.behance.net/bhoomirana27"
              target="_blank"
              rel="noreferrer"
              className="hover:text-violet-500 transition duration-300"
            >
              Behance
            </a>

            <a
              href="mailto:rana.bhoomi27@gmail.com"
              className="hover:text-violet-500 transition duration-300"
            >
              Email
            </a>

          </div>

        </div>

        {/* RIGHT VISUAL */}
        <div className="relative flex items-center justify-center min-h-[650px]">

          {/* MAIN GLOW */}
          <div className="absolute w-[500px] h-[500px] bg-violet-200/40 blur-3xl rounded-full"></div>

          {/* LEFT BACK PHONE */}
          <div className="absolute left-10 top-24 z-10 w-[220px] rotate-[-14deg] opacity-95">

            <div className="bg-black rounded-[2.2rem] p-[7px] shadow-[0_20px_70px_rgba(0,0,0,0.18)]">

              <div className="relative overflow-hidden rounded-[1.7rem] bg-black">

                <div className="absolute top-[2px] left-1/2 -translate-x-1/2 z-20 w-[72px] h-[18px] bg-black rounded-b-3xl"></div>

                <img
                  src="/gamingstore/high-fidelity/Product Details Page.png"
                  alt="Game Vault"
                  className="w-full"
                />

              </div>

            </div>

          </div>

          {/* RIGHT BACK PHONE */}
          <div className="absolute right-10 top-28 z-10 w-[220px] rotate-[14deg] opacity-95">

            <div className="bg-black rounded-[2.2rem] p-[7px] shadow-[0_20px_70px_rgba(0,0,0,0.18)]">

              <div className="relative overflow-hidden rounded-[1.7rem] bg-black">

                <div className="absolute top-[2px] left-1/2 -translate-x-1/2 z-20 w-[72px] h-[18px] bg-black rounded-b-3xl"></div>

                <img
                  src="/communityapp/high-fidelity/Home Page.png"
                  alt="Community App"
                  className="w-full"
                />

              </div>

            </div>

          </div>

          {/* CENTER MAIN PHONE */}
          <div className="relative z-30 w-[280px]">

            <div className="bg-black rounded-[2.6rem] p-[8px] shadow-[0_35px_120px_rgba(0,0,0,0.24)]">

              <div className="relative overflow-hidden rounded-[2rem] bg-black">

                <div className="absolute top-[2px] left-1/2 -translate-x-1/2 z-20 w-[82px] h-[22px] bg-black rounded-b-3xl"></div>

                <img
                  src="/campushire/mobile/Student Dashboard.png"
                  alt="CampusHire"
                  className="w-full"
                />

              </div>

            </div>

          </div>

          {/* SMALL LABEL */}
          <div className="absolute bottom-10 bg-white/90 backdrop-blur-md border border-white rounded-2xl px-6 py-4 shadow-xl">

            <p className="text-sm text-gray-500 mb-1">
              Selected UI/UX Work
            </p>

            <h4 className="text-lg font-bold text-violet-600">
              Web & Mobile Experiences
            </h4>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;