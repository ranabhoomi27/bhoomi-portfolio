import { motion } from "framer-motion";

function About() {
  return (
    <section
      id="about"
      className="px-8 md:px-20 py-28 bg-white relative overflow-hidden"
    >

      {/* BACKGROUND GLOWS */}
      <div className="absolute top-[-120px] left-[-100px] w-[320px] h-[320px] bg-violet-200 rounded-full blur-[120px] opacity-40" />
      <div className="absolute bottom-[-120px] right-[-100px] w-[320px] h-[320px] bg-pink-200 rounded-full blur-[120px] opacity-40" />

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center relative z-10">

        {/* LEFT CONTENT */}
        <div>

          <motion.p
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="uppercase tracking-[0.25em] text-sm text-violet-500 mb-4 font-semibold"
          >
            About Me
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold leading-[1.1] mb-7"
          >
            Creating digital experiences
            that feel simple, thoughtful,
            and visually engaging.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-gray-600 text-lg leading-relaxed mb-10 max-w-xl"
          >
            I enjoy designing interfaces that balance usability with modern visuals.
            My focus is on creating intuitive experiences through clean layouts,
            meaningful interactions, and user-focused thinking.
          </motion.p>

          {/* STATS */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-5"
          >

            <div className="bg-white border border-gray-100 shadow-xl rounded-3xl px-6 py-5 min-w-[150px]">
              <h3 className="text-3xl font-bold text-violet-600 mb-1">
                3+
              </h3>
              <p className="text-sm text-gray-500">
                UI/UX Projects
              </p>
            </div>

            <div className="bg-white border border-gray-100 shadow-xl rounded-3xl px-6 py-5 min-w-[150px]">
              <h3 className="text-3xl font-bold text-pink-500 mb-1">
                10+
              </h3>
              <p className="text-sm text-gray-500">
                Screens Designed
              </p>
            </div>

            <div className="bg-white border border-gray-100 shadow-xl rounded-3xl px-6 py-5 min-w-[150px]">
              <h3 className="text-3xl font-bold text-purple-500 mb-1">
                3+
              </h3>
              <p className="text-sm text-gray-500">
                UI/UX Case Studies
              </p>
            </div>

          </motion.div>

        </div>

        {/* RIGHT VISUAL SIDE */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative flex items-center justify-center min-h-[520px]"
        >

          {/* MAIN CARD */}
          <div className="relative w-full max-w-[500px] h-[480px] rounded-[2.5rem] bg-white/70 backdrop-blur-xl border border-white shadow-[0_20px_80px_rgba(139,92,246,0.12)] overflow-hidden">

            {/* INNER GLOWS */}
            <div className="absolute -top-20 -left-20 w-56 h-56 bg-violet-200 blur-3xl opacity-40 rounded-full" />
            <div className="absolute bottom-0 right-0 w-56 h-56 bg-pink-200 blur-3xl opacity-30 rounded-full" />

            {/* FLOATING CARDS */}
            <div className="relative h-full p-8">

              {/* CARD 1 */}
              <motion.div
                whileHover={{ y: -8 }}
                className="absolute top-8 left-8 w-[190px] bg-white rounded-3xl p-5 shadow-xl border border-gray-100"
              >

                <div className="w-12 h-12 rounded-2xl bg-violet-100 flex items-center justify-center text-xl mb-4">
                  ✨
                </div>

                <h3 className="font-semibold text-lg mb-2">
                  User-Centered
                </h3>

                <p className="text-sm text-gray-600 leading-relaxed">
                  Designing intuitive experiences focused on user needs.
                </p>

              </motion.div>

              {/* CARD 2 */}
              <motion.div
                whileHover={{ y: -8 }}
                className="absolute top-24 right-6 w-[220px] bg-gradient-to-br from-violet-500 to-purple-500 text-white rounded-3xl p-6 shadow-2xl"
              >

                <p className="text-sm text-white/80 mb-2">
                  Visual Design
                </p>

                <h3 className="text-2xl font-bold leading-tight mb-5">
                  Modern &
                  Clean Interfaces
                </h3>

                <div className="flex gap-2">
                  <div className="w-8 h-8 rounded-full bg-white/20" />
                  <div className="w-8 h-8 rounded-full bg-white/40" />
                  <div className="w-8 h-8 rounded-full bg-white" />
                </div>

              </motion.div>

              {/* CARD 3 */}
              <motion.div
                whileHover={{ y: -8 }}
                className="absolute bottom-10 left-14 right-14 bg-white rounded-3xl p-6 shadow-xl border border-gray-100"
              >

                <div className="flex items-center justify-between">

                  <div>
                    <p className="text-sm text-gray-500 mb-1">
                      Design Approach
                    </p>

                    <h3 className="font-semibold text-lg">
                      Simplicity + Clarity
                    </h3>
                  </div>

                  <div className="w-14 h-14 rounded-2xl bg-violet-100 flex items-center justify-center text-2xl">
                    🎨
                  </div>

                </div>

              </motion.div>

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}

export default About;