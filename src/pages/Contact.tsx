import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="
        min-h-screen
        flex flex-col justify-center items-center
        px-4 sm:px-8 lg:px-10
        py-16 sm:py-20
        bg-zinc-50/50
      "
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-100 border border-zinc-200 text-zinc-600 text-sm mb-6">
          <Mail className="w-4 h-4" />
          Contacto
        </div>

        <h2
          className="
            text-3xl
            sm:text-4xl
            md:text-5xl
            font-bold
            mb-4
            text-zinc-900
          "
        >
          Trabajemos Juntos
        </h2>

        <p className="text-base sm:text-lg text-zinc-600 max-w-md mx-auto">
          ¿Tienes un proyecto en mente? Hablemos sobre cómo puedo ayudarte a
          hacerlo realidad.
        </p>
      </motion.div>

      {/* Content */}
      <div className="w-full max-w-4xl">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="space-y-10"
        >
          {/* Socials */}
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold mb-6 text-zinc-900 text-center sm:text-left">
              Mis Redes
            </h3>

            <div className="space-y-4">
              {/* Email */}
              <a
                href="mailto:lautarosouza58@gmail.com"
                className="
                  flex items-center gap-4
                  p-4
                  bg-white
                  rounded-xl
                  border border-zinc-200
                  shadow-sm
                  hover:shadow-md
                  transition-all duration-300
                  group
                "
              >
                <div className="w-12 h-12 bg-zinc-100 rounded-lg flex items-center justify-center group-hover:bg-zinc-900 group-hover:text-white transition-colors duration-300">
                  <Mail className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <p className="font-medium text-zinc-900">Email</p>
                  <p className="text-zinc-600 text-sm sm:text-base break-all">
                    lautarosouza58@gmail.com
                  </p>
                </div>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/Prominence673"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex items-center gap-4
                  p-4
                  bg-white
                  rounded-xl
                  border border-zinc-200
                  shadow-sm
                  hover:shadow-md
                  transition-all duration-300
                  group
                "
              >
                <div className="w-12 h-12 bg-zinc-100 rounded-lg flex items-center justify-center group-hover:bg-zinc-900 group-hover:text-white transition-colors duration-300">
                  <Github className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <p className="font-medium text-zinc-900">GitHub</p>
                  <p className="text-zinc-600 text-sm sm:text-base break-all">
                    github.com/Prominence673
                  </p>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/lautaro-souza-3069a5398/"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex items-center gap-4
                  p-4
                  bg-white
                  rounded-xl
                  border border-zinc-200
                  shadow-sm
                  hover:shadow-md
                  transition-all duration-300
                  group
                "
              >
                <div className="w-12 h-12 bg-zinc-100 rounded-lg flex items-center justify-center group-hover:bg-zinc-900 group-hover:text-white transition-colors duration-300">
                  <Linkedin className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <p className="font-medium text-zinc-900">LinkedIn</p>
                  <p className="text-zinc-600 text-sm sm:text-base break-all">
                    linkedin.com/in/lautaro-souza-3069a5398
                  </p>
                </div>
              </a>
            </div>
          </div>

          {/* Availability */}
          <div className="bg-white/80 backdrop-blur-md border border-zinc-200 rounded-2xl p-6">
            <h4 className="font-semibold text-zinc-900 mb-3">
              Disponibilidad
            </h4>
            <p className="text-zinc-600 text-sm leading-relaxed">
              Actualmente disponible para proyectos freelance y colaboraciones
              a largo plazo. Respuesta en menos de 24 horas.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
