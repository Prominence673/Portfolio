import type { ReactNode } from "react";
import {
  Home,
  UserRound,
  Code2,
  FolderGit2,
  Briefcase,
  GraduationCap,
  Mail,
} from "lucide-react";

export default function Navbar() {
  return (
    <nav className="bg-white flex flex-row fixed w-[35%] left-[32.5%] rounded-full top-2 z-200 h-14 overflow-hidden shadow-md backdrop-blur-md bg-opacity-80">
      <ul className="w-full flex gap-3 text-xl text-black justify-center items-center z-1000">
        <Navlink to="#home" label="Inicio"><Home /></Navlink>
        <Navlink to="#about" label="Sobre mí"><UserRound /></Navlink>
        <Navlink to="#skills" label="Habilidades"><Code2 /></Navlink>
        <Navlink to="#projects" label="Proyectos"><FolderGit2 /></Navlink>
        <Navlink to="#experience" label="Experiencia"><Briefcase /></Navlink>
        <Navlink to="#education" label="Educación"><GraduationCap /></Navlink>
        <Navlink to="#contact" label="Contacto"><Mail /></Navlink>
      </ul>
    </nav>
  );
}

function Navlink({
  to,
  children,
  label,
  style,
}: {
  to: string;
  children: ReactNode;
  label: string;
  style?: string;
}) {
  return (
    <li
      className={`group relative flex items-center gap-2 rounded-full shadow-md px-3 py-2 
      transition-all duration-500 ease-in-out hover:bg-gray-100 hover:-translate-y-1 ${style}`}
    >
      <a href={to} className="flex items-center justify-center">
        <span className="transition-transform duration-500 ease-in-out group-hover:scale-110">
          {children}
        </span>
        <span
          className="text-sm font-medium opacity-0 w-0 m-0 p-0 overflow-hidden 
          group-hover:opacity-100 group-hover:w-auto group-hover:ml-2 whitespace-nowrap 
          transition-all duration-500 ease-in-out"
        >
          {label}
        </span>
      </a>
    </li>
  );
}
