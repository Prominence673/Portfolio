import { motion } from "framer-motion";
import { Clock, Users } from "lucide-react";

export default function Exp(){
    const experiences = [
        {
        title: "Desarrollador Frontend Jr",
        period: "2025 - Actualidad",
        desc: "Construcción de aplicaciones web modernas, modulares y escalables con React.",
        projects: "10+ proyectos completados",
        tech: ["React", "Tailwind", "JavaScript", "Typescript", "HTML", "CSS", "Git"]
        },
        {
        title: "Proyectos Personales",
        period: "2022 - 2025",
        desc: "Creo mis proyectos personales en github aplicando buenas prácticas de desarrollo y diseño.",
        projects: "10 repositorios",
        tech: ["JavaScript", "TypeScript", "Git"]
        }
    ];
    return(
        <>
        {/* EXPERIENCIA */}
        <section id="experience" className="min-h-screen flex flex-col justify-center items-center px-10 py-20 bg-gradient-to-br from-zinc-50 to-white">
            <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-100 border border-zinc-200 text-zinc-600 text-sm mb-4">
                <Clock className="w-4 h-4" />
                Trayectoria
            </div>
            <h2 className="text-5xl font-bold mb-4 text-zinc-900">Trayectoria en Desarrollo</h2>
            <p className="text-lg text-zinc-600 max-w-2xl">
                Un recorrido de crecimiento constante, aprendiendo y aplicando las mejores prácticas en cada proyecto.
            </p>
            </div>

            <div className="flex flex-col gap-12 max-w-4xl w-full relative">

            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-zinc-200"></div>
            
            {experiences.map((exp, index) => (
                <ExperienceItem key={index} {...exp} index={index} />
            ))}
            </div>

            <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            viewport={{ once: true }}
            className="mt-16 bg-white/80 backdrop-blur-md border border-zinc-200 rounded-2xl p-8 shadow-sm max-w-2xl"
            >
            <h3 className="text-2xl font-semibold mb-4 text-zinc-900">Metodología de Trabajo</h3>
            <p className="text-zinc-600 mb-4">
                Practico metodologías ágiles (Scrum/Kanban) con enfoque en:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-zinc-400 rounded-full"></div>
                <span className="text-zinc-600">Desarrollo iterativo</span>
                </div>
                <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-zinc-400 rounded-full"></div>
                <span className="text-zinc-600">Code reviews</span>
                </div>
                <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-zinc-400 rounded-full"></div>
                <span className="text-zinc-600">Testing continuo</span>
                </div>
                <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-zinc-400 rounded-full"></div>
                <span className="text-zinc-600">Deployment automatizado</span>
                </div>
            </div>
            </motion.div>
        </section>
        </>
    )
}
interface ExperienceItemProps {
  title: string;
  period: string;
  desc: string;
  projects: string;
  tech: string[];
  index: number;
}

function ExperienceItem({ title, period, desc, projects, tech, index }: ExperienceItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="relative flex items-start gap-6 group"
    >
      {/* Punto de la línea de tiempo */}
      <div className="absolute left-8 top-6 w-4 h-4 bg-zinc-900 rounded-full border-4 border-white z-10"></div>
      
      <div className="ml-16 flex-1">
        <div className="bg-white/80 backdrop-blur-md border border-zinc-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 group-hover:border-zinc-300">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
            <h4 className="text-xl font-semibold text-zinc-900">{title}</h4>
            <span className="text-sm text-zinc-500 bg-zinc-100 px-3 py-1 rounded-full mt-2 sm:mt-0">{period}</span>
          </div>
          
          <p className="text-zinc-600 mb-4 leading-relaxed">{desc}</p>
          
          <div className="flex items-center gap-2 text-sm text-zinc-500 mb-4">
            <Users className="w-4 h-4" />
            <span>{projects}</span>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {tech.map((techItem, i) => (
              <span 
                key={i}
                className="px-3 py-1 bg-zinc-100 text-zinc-700 rounded-full text-sm border border-zinc-200"
              >
                {techItem}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}