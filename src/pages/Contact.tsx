import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";

export default function Contact(){
    return(
        <>
        {/* CONTACTO  */}
        <section id="contact" className="min-h-screen flex flex-col justify-center items-center px-10 py-20 bg-zinc-50/50">
            <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
            >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-zinc-200 text-zinc-600 text-sm mb-4">
                <Mail className="w-4 h-4" />
                Contacto
            </div>
            <h2 className="text-5xl font-bold mb-4 text-zinc-900">Trabajemos Juntos</h2>
            <p className="text-lg text-zinc-600 max-w-md">
                ¿Tienes un proyecto en mente? Hablemos sobre cómo puedo ayudarte a hacerlo realidad.
            </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 w-full max-w-6xl">
            <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="space-y-8"
            >
                <div>
                <h3 className="text-2xl font-semibold mb-6 text-zinc-900">Mis Redes</h3>
                <div className="space-y-4">
                    <a href="mailto:lautarosouza58@gmail.com" className="flex items-center gap-4 p-4 bg-white rounded-xl border border-zinc-200 shadow-sm hover:shadow-md transition-all duration-300 group">
                    <div className="w-12 h-12 bg-zinc-100 rounded-lg flex items-center justify-center group-hover:bg-zinc-900 group-hover:text-white transition-colors duration-300">
                        <Mail className="w-6 h-6" />
                    </div>
                    <div className="text-left">
                        <p className="font-medium text-zinc-900">Email</p>
                        <p className="text-zinc-600">lautarosouza58@gmail.com</p>
                    </div>
                    </a>
                    
                    <a href="https://github.com/Prominence673" target="_blank" className="flex items-center gap-4 p-4 bg-white rounded-xl border border-zinc-200 shadow-sm hover:shadow-md transition-all duration-300 group">
                    <div className="w-12 h-12 bg-zinc-100 rounded-lg flex items-center justify-center group-hover:bg-zinc-900 group-hover:text-white transition-colors duration-300">
                        <Github className="w-6 h-6" />
                    </div>
                    <div className="text-left" >
                        <p className="font-medium text-zinc-900">GitHub</p>
                        <p className="text-zinc-600">github.com/Prominence673</p>
                    </div>
                    </a>
                    
                    <a href="https://www.linkedin.com/in/lautaro-souza-3069a5398/" target="_blank" className="flex items-center gap-4 p-4 bg-white rounded-xl border border-zinc-200 shadow-sm hover:shadow-md transition-all duration-300 group">
                    <div className="w-12 h-12 bg-zinc-100 rounded-lg flex items-center justify-center group-hover:bg-zinc-900 group-hover:text-white transition-colors duration-300">
                        <Linkedin className="w-6 h-6" />
                    </div>
                    <div className="text-left">
                        <p className="font-medium text-zinc-900">LinkedIn</p>
                        <p className="text-zinc-600">www.linkedin.com/in/lautaro-souza-3069a5398/</p>
                    </div>
                    </a>
                </div>
                </div>

                <div className="bg-white/80 backdrop-blur-md border border-zinc-200 rounded-2xl p-6">
                <h4 className="font-semibold text-zinc-900 mb-3">Disponibilidad</h4>
                <p className="text-zinc-600 text-sm">
                    Actualmente disponible para proyectos freelance y colaboraciones a largo plazo. 
                    Respuesta en menos de 24 horas.
                </p>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-white rounded-2xl p-8 shadow-sm border border-zinc-200"
            >
                <h3 className="text-2xl font-semibold mb-6 text-zinc-900">Enviar Mensaje</h3>
                <form className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                    <div>
                    <label className="block text-sm font-medium text-zinc-700 mb-2">Nombre</label>
                    <input type="text" className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-lg focus:ring-2 focus:ring-zinc-900 focus:border-transparent transition-all duration-300" />
                    </div>
                    <div>
                    <label className="block text-sm font-medium text-zinc-700 mb-2">Email</label>
                    <input type="email" className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-lg focus:ring-2 focus:ring-zinc-900 focus:border-transparent transition-all duration-300" />
                    </div>
                </div>
                <div>
                    <label className="block text-sm font-medium text-zinc-700 mb-2">Asunto</label>
                    <input type="text" className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-lg focus:ring-2 focus:ring-zinc-900 focus:border-transparent transition-all duration-300" />
                </div>
                <div>
                    <label className="block text-sm font-medium text-zinc-700 mb-2">Mensaje</label>
                    <textarea rows={5} className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-lg resize-none focus:ring-2 focus:ring-zinc-900 focus:border-transparent transition-all duration-300"></textarea>
                </div>
                <button type="submit" className="w-full px-8 py-4 bg-zinc-900 text-white font-medium rounded-lg shadow-md hover:scale-105 hover:shadow-lg transition-all duration-300">
                    Enviar Mensaje
                </button>
                </form>
            </motion.div>
            </div>
        </section>
        </>
    );
}