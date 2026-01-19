import { Palette, X, Github, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Projects() {
  const [showDetails, setShowDetails] = useState(false);
  const projects = [
    {
      title: "Sistema de Gestión Empresarial (Academico)",
      desc: "Aplicación ASP.NET + SQL Server para administrar clientes, ventas y inventario con reportes en tiempo real.",
      tech: ["ASP.NET", "SQL Server", "React", "Tailwind"],
      status: "Completado",
      image: "/dashboard.png",
      images: ["/dashboard.png", "/dashboard2.png"],
    },
  ];
  return (
    <>
      {/* PROYECTOS */}
      <section
        id="projects"
        className="relative min-h-screen flex flex-col items-center px-10 py-20 bg-white"
      >
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-100 border border-zinc-200 text-zinc-600 text-sm mb-4">
            <Palette className="w-4 h-4" />
            Portfolio
          </div>
          <h2 className="text-5xl font-bold mb-4 text-zinc-900">
            Proyectos Destacados
          </h2>
          <p className="text-lg text-zinc-600 max-w-2xl">
            Cada proyecto representa un desafío único, combinando arquitectura
            sólida con interfaces que cautivan.
          </p>
        </div>

        <motion.div
          initial="visible"
          whileInView="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
          }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl mb-16"
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              {...project}
              state={showDetails}
              setState={setShowDetails}
            />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-center"
        ></motion.div>
      </section>
    </>
  );
}

interface ProjectCardProps {
  title: string;
  desc: string;
  tech: string[];
  status: string;
  image: string;
  images: string[];
  state: boolean;
  setState: (value: boolean) => void;
}

function ProjectCard({
  title,
  desc,
  tech,
  status,
  image,
  images,
  state,
  setState,
}: ProjectCardProps) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [showDetails, setShowDetails] = useState(false);

  return (
    <>
      <motion.div
        whileHover={{ y: -8 }}
        className="relative flex flex-col group bg-white border border-zinc-200 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500"
      >
        <div className="relative h-48 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/30 to-transparent"></div>
          <div className="absolute top-4 right-4">
            <span
              className={`px-3 py-1 rounded-full text-xs font-medium ${
                status === "Completado"
                  ? "bg-green-100 text-green-700"
                  : "bg-yellow-100 text-yellow-700"
              }`}
            >
              {status}
            </span>
          </div>
        </div>

        <div className="flex flex-col justify-between p-6 flex-1">
          <div>
            <h3 className="text-xl font-semibold mb-3 text-zinc-900">
              {title}
            </h3>
            <p className="text-zinc-600 mb-4 leading-relaxed">{desc}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {tech.map((techItem, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-zinc-100 text-zinc-700 rounded-full text-sm border border-zinc-200"
                >
                  {techItem}
                </span>
              ))}
            </div>
          </div>

          <button
            onClick={() => {
              setState(!state);
              setShowDetails(false);
              setSelectedImage(0);
            }}
            className="w-full py-3 bg-zinc-100 text-zinc-700 rounded-lg font-medium hover:bg-zinc-900 hover:text-white transition-all duration-300 mt-4"
          >
            Ver Detalles
          </button>
        </div>
      </motion.div>
      <AnimatePresence>
        {state && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed top-0 left-0 w-full h-full bg-black/50 z-9000"
              onClick={() => {
                setState(!state);
              }}
            ></motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="fixed z-9999 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-6 bg-white rounded-lg shadow-lg
            w-[90vw] md:w-[85vw] lg:w-[75vw] h-[60vh] md:h-[50vh] lg:h-[50vh]
            max-w-6xl
            max-h-[90vh] overflow-y-auto"
            >
              <span className="absolute top-2 right-2">
                <X
                  className="w-5 h-5 hover:cursor-pointer transition-all duration-300 hover:scale-120"
                  onClick={() => setState(!state)}
                />
              </span>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
                <div className="flex flex-col h-full relative group">
                  <img
                    src={images[selectedImage]}
                    onClick={() => setShowDetails(!showDetails)}
                    className="w-full h-full object-center rounded-lg group-hover:scale-[103%] transition-transform duration-500"
                    alt={`Project ${title} Image ${selectedImage + 1}`}
                  />
                  <div className="flex flex-row absolute w-full top-[50%] items-center justify-between">
                    <motion.button
                      whileHover={{ scale: 1.1, x: -10 }}
                      whileTap={{ scale: 1.1, x: -16 }}
                      transition={{ type: "spring" }}
                      onClick={() => setSelectedImage(selectedImage - 1)}
                      disabled={selectedImage === 0}
                      className="px-1 py-1 bg-zinc-100 text-zinc-700 rounded-full text-sm border border-zinc-200"
                    >
                      <ChevronLeft />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1, x: 10 }}
                      whileTap={{ scale: 1.1, x: 16 }}
                      transition={{ type: "spring" }}
                      onClick={() => setSelectedImage(selectedImage + 1)}
                      disabled={selectedImage === images.length - 1}
                      className="px-1 py-1 bg-zinc-100 text-zinc-700 rounded-full text-sm border border-zinc-200"
                    >
                      <ChevronRight />
                    </motion.button>
                  </div>
                </div>
                <div className="flex flex-col h-full">
                  <h3 className="text-xl font-semibold mb-4 text-zinc-900">
                    {title}
                  </h3>
                  <p className="text-zinc-600 mb-4 leading-relaxed">{desc}</p>
                  <div className="flex flex-row mb-4">
                    <a
                      target="_blank"
                      href="https://github.com/Prominence673"
                      className="flex items-center text-zinc-900 hover:text-zinc-700 transition-all duration-300"
                    >
                      <Github className="inline-block mr-2" />
                      GitHub
                    </a>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {tech.map((techItem, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-zinc-100 text-zinc-700 rounded-full text-sm border border-zinc-200"
                      >
                        {techItem}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
            {showDetails && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center z-9999
            w-[90vw] md:w-[90vw] lg:w-[80vw] h-[90vh] md:h-[70vh] lg:h-[80vh]
            max-w-6xl
            max-h-[90vh] border border-black rounded-xl overflow-y-auto"
              >
                <span className="absolute top-2 right-2">
                  <X
                    className="text-red-500 w-10 h-10 hover:cursor-pointer transition-all duration-300 hover:scale-120"
                    onClick={() => setShowDetails(!showDetails)}
                  />
                </span>
                <img
                  className="w-full h-full object-center rounded-lg"
                  src={images[selectedImage]}
                  alt={title}
                />
              </motion.div>
            )}
          </>
        )}
      </AnimatePresence>
    </>
  );
}
