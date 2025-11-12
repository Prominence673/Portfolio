import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { Code, Database, Palette, Server } from "lucide-react";


export default function Skills() {
    const skillCategories = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Frontend",
      skills: ["React", "TypeScript", "Tailwind CSS", "HTML5", "CSS3", "JavaScript ES6+"]
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "Backend",
      skills: ["ASP.NET", "Node.js", "API REST", "C#"]
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Bases de Datos",
      skills: ["SQL Server", "MySQL"]
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Design & Tools",
      skills: ["Figma", "Git", "Docker", "AWS", "Agile", "Clean Architecture"]
    }
  ];
  return (
    <>
    {/* HABILIDADES */}
      <section id="skills" className="relative min-h-screen flex flex-col items-center px-10 py-20 bg-zinc-50/80 overflow-hidden">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-zinc-200 text-zinc-600 text-sm mb-4">
            <Code className="w-4 h-4" />
            Tecnologías y Herramientas
          </div>
          <h2 className="text-5xl font-bold mb-4 text-zinc-900">Stack Tecnológico</h2>
          <p className="text-lg text-zinc-600 max-w-2xl">
            Domino un stack moderno y diverso que me permite abordar proyectos desde el diseño hasta el deployment.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-7xl mb-16"
        >
          {skillCategories.map((category, index) => (
            <Tilt key={index}>
              <motion.div
                whileHover={{ scale: 1.02, y: -4 }}
                className="bg-white/80 backdrop-blur-md border border-zinc-200 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 h-full"
              >
                <div className="w-14 h-14 bg-zinc-100 rounded-xl flex items-center justify-center border border-zinc-200 mb-4 text-zinc-600">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-zinc-900">{category.title}</h3>
                <div className="space-y-3">
                  {category.skills.map((skill, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-zinc-400 rounded-full"></div>
                      <span className="text-zinc-600">{skill}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </Tilt>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-4xl"
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-zinc-900 mb-2">15+</div>
            <div className="text-zinc-600">Proyectos Entregados</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-zinc-900 mb-2">80%</div>
            <div className="text-zinc-600">Satisfacción Clientes</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-zinc-900 mb-2">3+</div>
            <div className="text-zinc-600">Años Experiencia</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-zinc-900 mb-2">10+</div>
            <div className="text-zinc-600">Tecnologías</div>
          </div>
        </motion.div>

        <div className="absolute top-1/4 -left-20 w-64 h-64 bg-zinc-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-zinc-300/20 rounded-full blur-3xl"></div>
      </section>
    </>
    );
}