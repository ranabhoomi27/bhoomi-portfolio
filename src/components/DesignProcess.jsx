import { motion } from "framer-motion";

function DesignProcess() {
  const steps = [
    {
      number: "01",
      title: "Research",
      description:
        "Understanding user needs, business goals, and identifying pain points through research.",
    },
    {
      number: "02",
      title: "Wireframing",
      description:
        "Creating structured layouts and user flows to define the overall experience.",
    },
    {
      number: "03",
      title: "UI Design",
      description:
        "Designing clean and modern interfaces with visual consistency and usability.",
    },
    {
      number: "04",
      title: "Prototype & Testing",
      description:
        "Building interactive prototypes and refining experiences through feedback.",
    },
  ];

  return (
    <section className="relative px-8 md:px-20 py-28 bg-[#faf9ff] overflow-hidden">

      {/* BLUR BACKGROUNDS */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-violet-200/30 blur-3xl rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-pink-200/30 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* SECTION HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >

          <p className="uppercase tracking-[0.25em] text-sm text-violet-500 font-semibold mb-4">
            Design Process
          </p>

          <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
            How I Approach Design
          </h2>

          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            A structured workflow focused on creating intuitive, meaningful,
            and user-centered digital experiences.
          </p>

        </motion.div>

        {/* PROCESS GRID */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="relative bg-white rounded-[2rem] p-8 border border-gray-100 shadow-[0_10px_40px_rgba(139,92,246,0.08)] overflow-hidden"
            >

              {/* NUMBER */}
              <div className="text-6xl font-bold text-violet-100 mb-6">
                {step.number}
              </div>

              {/* CONTENT */}
              <h3 className="text-2xl font-bold mb-4">
                {step.title}
              </h3>

              <p className="text-gray-600 leading-relaxed text-[15px]">
                {step.description}
              </p>

              {/* GLOW */}
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-violet-100 rounded-full blur-3xl opacity-30"></div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default DesignProcess;