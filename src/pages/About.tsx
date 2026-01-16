import Balancer from "react-wrap-balancer";
import { motion } from "framer-motion";
import { Clock, Users, Target } from "lucide-react";

export default function About() {
  return (
    <>
      {/* SOBRE MÍ */}
      <section
        id="about"
        className="relative min-h-screen flex flex-col md:flex-row items-center justify-center gap-16 px-10 py-20 overflow-hidden bg-gradient-to-br from-white to-zinc-50"
      >
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="md:w-1/2 z-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-100 border border-zinc-200 text-zinc-600 text-sm mb-6">
            <Target className="w-4 h-4" />
            Sobre mí
          </div>
          <h2 className="text-5xl font-bold mb-6 text-zinc-900">
            Creando soluciones digitales
          </h2>
          <Balancer>
            <p className="text-lg leading-relaxed text-zinc-600 mb-6">
              Soy <strong className="text-zinc-900">Lautaro Souza</strong>,
              desarrollador Full Stack con más de
              <strong className="text-zinc-900">
                {" "}
                3 años aprendiendo y programando{" "}
              </strong>
              a través de proyectos personales. Me gusta construir aplicaciones web claras, funcionales y fáciles de mantener, transformando ideas en soluciones simples y efectivas.
            </p>
            <p className="text-lg leading-relaxed text-zinc-600 mb-8">
              Creo en el{" "}
              <strong className="text-zinc-900">
                diseño y experiencia centrado en el usuario
              </strong>{" "}
              con <strong className="text-zinc-900">arquitectura limpia</strong>{" "}
              como pilares necesarios para construir productos funcionales y{" "}
              <strong className="text-zinc-900">durables</strong>.
            </p>
          </Balancer>

          <div className="grid grid-cols-2 gap-6 mb-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-zinc-100 rounded-xl flex items-center justify-center border border-zinc-200">
                <Clock className="w-6 h-6 text-zinc-600" />
              </div>
              <div>
                <p className="font-semibold text-zinc-900">1+ año</p>
                <p className="text-sm text-zinc-500">Experiencia práctica</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-zinc-100 rounded-xl flex items-center justify-center border border-zinc-200">
                <Users className="w-6 h-6 text-zinc-600" />
              </div>
              <div>
                <p className="font-semibold text-zinc-900">+10 proyectos</p>
                <p className="text-sm text-zinc-500">Personales y académicos</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-zinc-100/80 to-zinc-200/60 border border-zinc-300/30 backdrop-blur-md rounded-2xl p-6 shadow-sm">
            <p className="text-zinc-600 italic text-lg">
              "Un buen código funciona, se entiende y no se rompe con cada
              cambio."
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="md:w-2/5 relative flex justify-center"
        >
          <div className="absolute w-80 h-80 bg-gradient-to-tr from-zinc-300/40 to-white/30 blur-3xl rounded-full animate-pulse"></div>
          <div className="relative flex rounded-full items-center justify-center h-200 overflow-hidden shadow-2xl border border-zinc-300/50 backdrop-blur-sm">
            <img
              src="imagen.jpg"
              alt="Perfil"
              className="w-full h-auto object-cover position-center rounded-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/20 to-transparent"></div>
          </div>

          <div className="absolute -top-4 -right-4 w-24 h-24 bg-zinc-200/50 rounded-full blur-xl animate-float"></div>
          <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-zinc-300/30 rounded-full blur-xl animate-float-delayed"></div>
        </motion.div>
      </section>
    </>
  );
}
