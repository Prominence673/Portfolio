import {Palette} from "lucide-react";
import { motion } from "framer-motion";

export default function Projects(){
    const projects = [
    {
      title: "Sistema de Gestión Empresarial",
      desc: "Aplicación ASP.NET + SQL Server para administrar clientes, ventas y inventario con reportes en tiempo real.",
      tech: ["ASP.NET", "SQL Server", "React", "Tailwind"],
      status: "Completado",
      image: "/gestion-sistem.png"
    },
    {
      title: "E-commerce React Moderno",
      desc: "Plataforma de comercio electrónico con carrito de compras, pasarela de pago y panel administrativo.",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      status: "En desarrollo",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop"
    },
    {
      title: "Dashboard Analytics",
      desc: "Panel de control con métricas en tiempo real, gráficos interactivos y sistema de roles avanzado.",
      tech: ["TypeScript", "D3.js", "Firebase", "Material-UI"],
      status: "Completado",
      image: "/dashboard.png"
    }
  ];
    return (
        <>
         {/* PROYECTOS */}
      <section id="projects" className="relative min-h-screen flex flex-col items-center px-10 py-20 bg-white">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-100 border border-zinc-200 text-zinc-600 text-sm mb-4">
            <Palette className="w-4 h-4" />
            Portfolio
          </div>
          <h2 className="text-5xl font-bold mb-4 text-zinc-900">Proyectos Destacados</h2>
          <p className="text-lg text-zinc-600 max-w-2xl">
            Cada proyecto representa un desafío único, combinando arquitectura sólida con interfaces que cautivan.
          </p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
          }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl mb-16"
        >
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-center"
        >
        </motion.div>
      </section>
        </>
    )
}

interface ProjectCardProps {
  title: string;
  desc: string;
  tech: string[];
  status: string;
  image: string;
}

function ProjectCard({ title, desc, tech, status, image }: ProjectCardProps) {
  return (
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
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
            status === 'Completado' 
              ? 'bg-green-100 text-green-700' 
              : 'bg-yellow-100 text-yellow-700'
          }`}>
            {status}
          </span>
        </div>
      </div>
    
      <div className="flex flex-col justify-between p-6 flex-1">
        <div>
          <h3 className="text-xl font-semibold mb-3 text-zinc-900">{title}</h3>
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

        <button className="w-full py-3 bg-zinc-100 text-zinc-700 rounded-lg font-medium hover:bg-zinc-900 hover:text-white transition-all duration-300 mt-4">
          Ver Detalles
        </button>
      </div>
    </motion.div>
  );
}
