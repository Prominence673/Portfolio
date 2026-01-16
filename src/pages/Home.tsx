

export default function Home() {
  const skills = [
    "React", "Tailwind", "ASP.NET", "API REST", "Clean Code", "UI Design",
    "SQL Server", "MySQL", "Git Flow", "Scalability", "Minimal UI",
    "Performance", "Cloud", "Security", "Teamwork", "Agile",
    "React", "Tailwind", "ASP.NET", "API REST", "Clean Code", "UI Design",
    "SQL Server", "MySQL", "Git Flow", "Scalability", "Minimal UI",
    "Performance", "Cloud", "Security", "Teamwork", "Agile"
  ];
  return (
    <>
    {/* HOME */}
    <div className="flex flex-col w-full min-h-screen text-zinc-800 font-sans bg-white scroll-smooth">
      <section
        id="home"
        className="flex flex-col justify-center items-center min-h-screen text-center 
                   bg-gradient-to-b from-zinc-100 via-white to-zinc-200"
      >
        <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900 drop-shadow-sm">Frontend/Backend developer</h1>
        <h1 className="text-[10rem] leading-none p-0 m-0 font-extrabold tracking-tight text-zinc-900 drop-shadow-sm tracking-wide">
          Portfolio
        </h1>
        <section className="flex flex-col overflow-hidden gap-2 py-6 max-w-full">
          <div className="flex gap-4 text-2xl font-light text-zinc-600 animate-scroll px-6">
            {skills.map((skill, i) => (
              <p
                key={i}
                className="rounded-full border border-zinc-200 px-4 py-2 whitespace-nowrap shadow-sm hover:scale-105 transition-transform duration-300"
              >
                {skill}
              </p>
            ))}
          </div>
          <div className="flex gap-4 text-2xl font-light text-zinc-600 animate-scroll-reverse px-6">
            {skills.map((skill, i) => (
              <p
                key={i}
                className="rounded-full border border-zinc-200 px-4 py-2 whitespace-nowrap shadow-sm hover:scale-105 transition-transform duration-300"
              >
                {skill}
              </p>
            ))}
          </div>
        </section>

        <a
          href="#about"
          className="mt-8 px-8 py-3 bg-zinc-900 text-white 
                     font-medium rounded-full shadow-md hover:scale-105 hover:shadow-lg 
                     transition-all duration-300"
        >
          Get Started
        </a>
      </section>
    </div>
    </>
  );
}



