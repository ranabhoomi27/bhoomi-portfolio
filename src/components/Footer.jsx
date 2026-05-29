function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 px-8 md:px-20 py-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        <div>
          <h2 className="text-2xl font-bold mb-2">BR.</h2>
          
          <p className="text-gray-500 text-sm">
            Designing modern and user-friendly digital experiences.
          </p>
        </div>

        <div className="flex gap-6 text-gray-600 font-medium">
          <a
            href="https://www.linkedin.com/in/bhoomirana27"
            target="_blank"
            rel="noreferrer"
            className="hover:text-violet-500 transition"
          >
            LinkedIn
          </a>

          <a
            href="https://www.behance.net/bhoomirana27"
            target="_blank"
            rel="noreferrer"
            className="hover:text-violet-500 transition"
          >
            Behance
          </a>

          <a
            href="mailto:rana.bhoomi27@gmail.com"
            className="hover:text-violet-500 transition"
          >
            Email
          </a>
        </div>
      </div>

      <div className="text-center text-gray-400 text-sm mt-10">
        © 2026 Bhoomi Rana. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;