import { motion } from "framer-motion";
import {
  Sparkles,
  ShieldCheck,
  LayoutGrid,
  Lightbulb,
} from "lucide-react";

function DesignPhilosophy() {
  return (
    <section className="relative overflow-hidden bg-white px-8 md:px-20 py-28">

      {/* BACKGROUND GLOWS */}
      <div className="absolute top-[-120px] left-[-100px] w-[320px] h-[320px] bg-violet-200 blur-[120px] opacity-40 rounded-full" />

      <div className="absolute bottom-[-120px] right-[-100px] w-[320px] h-[320px] bg-pink-200 blur-[120px] opacity-40 rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* SECTION HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >

          <p className="uppercase tracking-[0.25em] text-sm text-violet-500 font-semibold mb-4">
            Design Philosophy
          </p>

          <h2 className="text-4xl md:text-6xl font-bold leading-tight max-w-4xl mx-auto">
            Designing experiences that feel
            simple, intuitive, and meaningful.
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto mt-8">
            I believe great design is not only visually appealing but also
            functional, accessible, and centered around real user needs.
          </p>

        </motion.div>

        {/* MAIN CONTENT */}
        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >

            <div className="relative rounded-[2.5rem] bg-gradient-to-br from-violet-500 to-purple-500 p-10 text-white overflow-hidden shadow-[0_20px_80px_rgba(139,92,246,0.25)]">

              {/* glow */}
              <div className="absolute top-[-60px] right-[-60px] w-56 h-56 bg-white/10 rounded-full blur-3xl" />

              <p className="uppercase tracking-[0.2em] text-sm text-white/70 mb-6">
                Core Belief
              </p>

              <h3 className="text-3xl md:text-4xl font-bold leading-tight mb-8">
                Good design should feel effortless.
              </h3>

              <p className="text-white/80 leading-relaxed text-lg">
                My approach combines usability, structure, and modern visual
                systems to create digital products that are both functional
                and engaging across web and mobile experiences.
              </p>

              {/* TAGS */}
              <div className="flex flex-wrap gap-3 mt-10">

                {[
                  "User Research",
                  "Wireframing",
                  "Prototyping",
                  "Visual Design",
                ].map((item, i) => (

                  <div
                    key={i}
                    className="px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm"
                  >
                    {item}
                  </div>

                ))}

              </div>

            </div>

          </motion.div>

        {/* RIGHT SIDE */}
        <div className="grid grid-cols-2 gap-6">

        {[
            {
            title: "Simplicity",
            text: "Clean layouts and clear hierarchy for better usability.",
            bg: "bg-violet-50",
            icon: <Sparkles className="w-6 h-6 text-violet-600" />,
            },
            {
            title: "Accessibility",
            text: "Inclusive experiences designed for all users.",
            bg: "bg-pink-50",
            icon: <ShieldCheck className="w-6 h-6 text-pink-600" />,
            },
            {
            title: "Consistency",
            text: "Balanced interfaces with scalable visual systems.",
            bg: "bg-purple-50",
            icon: <LayoutGrid className="w-6 h-6 text-purple-600" />,
            },
            {
            title: "Problem Solving",
            text: "Design decisions driven by user needs and goals.",
            bg: "bg-gray-100",
            icon: <Lightbulb className="w-6 h-6 text-gray-700" />,
            },
        ].map((item, i) => (

            <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            className={`${item.bg} p-8 rounded-[2rem] border border-white shadow-xl`}
            >

            <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-md mb-5">
                {item.icon}
            </div>

            <h4 className="text-xl font-semibold mb-3">
                {item.title}
            </h4>

            <p className="text-gray-600 leading-relaxed text-sm">
                {item.text}
            </p>

            </motion.div>

        ))}

        </div>

        </div>

      </div>
    </section>
  );
}

export default DesignPhilosophy;