import { SiFigma, SiMiro, SiHtml5, SiPython } from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa";
import { MdOutlineDesignServices, MdDevices, MdOutlineAutoFixHigh } from "react-icons/md";

const skills = [
  {
    name: "Figma",
    icon: <SiFigma className="w-10 h-10 text-[#F24E1E]" aria-label="Figma icon" />,
  },
  {
    name: "Miro",
    icon: <SiMiro className="w-10 h-10 text-[#FF5A5F]" aria-label="Miro icon" />,
  },
  {
    name: "Wireframing",
    icon: <MdOutlineDesignServices className="w-10 h-10 text-violet-500" aria-label="Wireframing icon" />,
  },
  {
    name: "Prototyping",
    icon: <MdOutlineAutoFixHigh className="w-10 h-10 text-orange-500" aria-label="Prototyping icon" />,
  },
  {
    name: "Responsive Design",
    icon: <MdDevices className="w-10 h-10 text-sky-500" aria-label="Responsive Design icon" />,
  },
  {
    name: "HTML",
    icon: <SiHtml5 className="w-10 h-10 text-[#E34F26]" aria-label="HTML5 icon" />,
  },
  {
    name: "CSS",
    icon: <FaCss3Alt className="w-10 h-10 text-[#1572B6]" aria-label="CSS3 icon" />,
  },
  {
    name: "Python",
    icon: <SiPython className="w-10 h-10 text-[#306998]" aria-label="Python icon" />,
  },
];

function Skills() {
  return (
    <section className="px-8 md:px-20 py-20">
      <div className="max-w-7xl mx-auto">
        <p className="uppercase tracking-[0.2em] text-sm text-violet-500 mb-4 font-semibold text-center">
          Skills
        </p>

        <h2 className="text-4xl font-bold text-center mb-14">
          Tools & Technologies
        </h2>

        <div className="grid md:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="bg-white p-6 rounded-3xl text-center shadow-sm border border-gray-100 hover:-translate-y-1 transition"
            >
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-3xl bg-violet-50">
                {skill.icon}
              </div>
              <p className="font-medium">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;

