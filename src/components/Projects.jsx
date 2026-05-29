import projects from "../data/projects";
import { useNavigate } from "react-router-dom";

function Projects() {
  const navigate = useNavigate();

  return (
    <section
      id="projects"
      className="relative px-8 md:px-20 py-32 bg-white overflow-hidden"
    >
      {/* Background Blur Effects */}
      <div className="absolute top-20 left-0 w-80 h-80 bg-violet-200/40 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-200/30 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        <div className="flex items-center justify-between mb-20">
          <div>
            <p className="uppercase tracking-[0.25em] text-sm text-violet-500 mb-4 font-semibold">
              Featured Work
            </p>

            <h2 className="text-5xl md:text-6xl tracking-tight font-bold leading-tight">
              Selected Case Studies
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group bg-white/70 backdrop-blur-xl rounded-[2rem] overflow-hidden border border-white/40 shadow-[0_10px_40px_rgba(139,92,246,0.12)] hover:-translate-y-4 hover:shadow-[0_20px_60px_rgba(139,92,246,0.18)] transition-all duration-500"
            >

              {/* Project Image */}
              <div className="relative h-72 overflow-hidden rounded-t-[2rem]">

                {/* BACKGROUND */}
                <div className={`absolute inset-0 ${project.heroBg}`}></div>

                {/* BLURS */}
                <div className="absolute top-0 left-0 w-40 h-40 bg-white/10 blur-3xl rounded-full"></div>
                <div className="absolute bottom-0 right-0 w-40 h-40 bg-white/10 blur-3xl rounded-full"></div>

                {/* MOCKUPS */}
                <div className="absolute inset-0 flex items-center justify-center">

                  {/* LEFT PHONE */}
                  <div className="absolute left-6 bottom-2 w-[95px] rotate-[-16deg] z-10">

                    <div className="bg-black rounded-[1.4rem] p-[4px] shadow-2xl">

                      <div className="relative overflow-hidden rounded-[1rem]">

                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-2 bg-black rounded-b-xl z-20"></div>

                        <img
                          src={project.heroImages[0]}
                          alt=""
                          className="w-full"
                        />

                      </div>

                    </div>

                  </div>

                  {/* CENTER PHONE */}
                  <div className="relative z-30 w-[120px]">

                    <div className="bg-black rounded-[1.6rem] p-[5px] shadow-[0_20px_60px_rgba(0,0,0,0.35)]">

                      <div className="relative overflow-hidden rounded-[1.2rem]">

                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-10 h-3 bg-black rounded-b-xl z-20"></div>

                        <img
                          src={project.heroImages[1]}
                          alt=""
                          className="w-full"
                        />

                      </div>

                    </div>

                  </div>

                  {/* RIGHT PHONE */}
                  <div className="absolute right-6 bottom-2 w-[95px] rotate-[16deg] z-10">

                    <div className="bg-black rounded-[1.4rem] p-[4px] shadow-2xl">

                      <div className="relative overflow-hidden rounded-[1rem]">

                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-2 bg-black rounded-b-xl z-20"></div>

                        <img
                          src={project.heroImages[2]}
                          alt=""
                          className="w-full"
                        />

                      </div>

                    </div>

                  </div>

                </div>

              </div>

              {/* Content */}
              <div className="p-8">
                <p className="text-sm text-violet-500 font-semibold mb-3 tracking-wide uppercase">
                  {project.category}
                </p>

                <h3 className="text-3xl font-bold mb-5 leading-tight tracking-tight">
                  {project.title}
                </h3>

                <p className="text-gray-600 leading-relaxed mb-8 text-[15px]">
                  {project.description}
                </p>

                <button
                  onClick={() => navigate(`/case-study/${project.slug}`)}
                  className="group-hover:translate-x-2 transition-all duration-300 font-semibold text-violet-600 flex items-center gap-2"
                >
                  View Case Study
                  <span>→</span>
                </button>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;