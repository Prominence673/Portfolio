export default function Footer(){
    return(
        <>
        <footer className="w-full py-8 text-center bg-zinc-900 text-zinc-400 border-t border-zinc-700">
            <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-center mb-6">
                <p className="text-xl font-semibold text-white mb-4 md:mb-0">Lautaro Souza</p>
                <div className="flex gap-6">
                <a href="#" className="hover:text-white transition-colors duration-300">Inicio</a>
                <a href="#about" className="hover:text-white transition-colors duration-300">Sobre mí</a>
                <a href="#projects" className="hover:text-white transition-colors duration-300">Proyectos</a>
                <a href="#contact" className="hover:text-white transition-colors duration-300">Contacto</a>
                </div>
            </div>
            <p>© {new Date().getFullYear()} Lautaro Souza — Todos los derechos reservados.</p>
            </div>
        </footer>
        </>
    );
}