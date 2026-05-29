import emailjs from "@emailjs/browser";
import { useRef } from "react";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qyj2chc",
        "template_gjfuzyl",
        form.current,
        "pkiIx8wVqVICb7KNU"
      )
      .then(
        () => {
          alert("Message sent successfully 🚀");
          form.current.reset();
        },
        () => {
          alert("Failed to send message. Try again.");
        }
      );
  };

  return (
    <section
      id="contact"
      className="relative px-8 md:px-20 py-32 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-violet-200/30 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-200/30 blur-3xl rounded-full"></div>

      <div className="max-w-6xl mx-auto relative z-10 bg-white/60 backdrop-blur-2xl border border-white/40 rounded-[3rem] p-10 md:p-16 shadow-[0_10px_50px_rgba(139,92,246,0.12)] overflow-hidden">
        
        <div className="grid md:grid-cols-2 gap-16 items-center relative z-10">

          {/* Left Content */}
          <div>
            <p className="uppercase tracking-[0.25em] text-sm text-violet-500 mb-4 font-semibold">
              Let’s Work Together
            </p>

            <h2 className="text-5xl md:text-6xl tracking-tight font-bold leading-tight mb-8">
              Have a project in mind?
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed mb-10 max-w-lg">
              Open to internships, freelance opportunities, and exciting UI/UX collaborations.
            </p>

            <a
              href="mailto:rana.bhoomi27@gmail.com"
              className="inline-block bg-black hover:bg-gray-900 hover:scale-105 active:scale-95 transition-all duration-300 text-white px-8 py-5 rounded-2xl shadow-2xl font-medium"
            >
              Contact Me
            </a>
          </div>

          {/* FORM (EmailJS WORKING) */}
          <form
            ref={form}
            onSubmit={sendEmail}
            className="bg-white/70 backdrop-blur-xl rounded-[2rem] p-8 shadow-xl border border-white/40 space-y-5"
          >
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="w-full p-5 rounded-2xl bg-white/80 border border-gray-100 outline-none focus:ring-2 focus:ring-violet-300 transition"
            />

            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="w-full p-5 rounded-2xl bg-white/80 border border-gray-100 outline-none focus:ring-2 focus:ring-violet-300 transition"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              required
              className="w-full p-5 rounded-2xl bg-white/80 border border-gray-100 outline-none focus:ring-2 focus:ring-violet-300 transition resize-none"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-violet-500 hover:bg-violet-600 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 text-white py-5 rounded-2xl font-semibold shadow-xl"
            >
              Send Message
            </button>
          </form>

        </div>
      </div>
    </section>
  );
}

export default Contact;