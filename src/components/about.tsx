import { motion } from 'motion/react';

const skills = [
  'React', 'TypeScript',, 'Node.js', 
  'Tailwind CSS', 'Framer Motion', 'Firebase',
  'PostgreSQL','python','Typescript','UI/UX Design'
];

export function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-8 tracking-tight">
            Sobre <span className="opacity-40 italic">Mim</span>
          </h2>
          <div className="space-y-6 opacity-60 text-lg font-light leading-relaxed">
            <p>
              Estudante de ADS (último período) e cofundador da agência The Wavem. Desenvolvedor Full-Stack focado em Node.js, JavaScript, TypeScript, CSS, React e Python.
            </p>
            <p>
              Experiência na gestão ponta a ponta de projetos reais, unindo metodologias ágeis, prototipagem e análise técnica. Especializando-se em aplicações Back-End com Node.js. Perfil analítico com inglês avançado e foco na entrega de soluções eficientes.
            </p>
          </div>

          <div className="mt-12">
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] opacity 1 mb-6 font-display">Tech Stack</h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span 
                  key={skill}
                  className="px-4 py-2 bg-white/5 border border-white/5 rounded-xl text-xs font-semibold uppercase tracking-wider hover:bg-white/10 transition-all duration-300 hover:border-white/20"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative group"
        >
          <div className="absolute inset-0 bg-white/5 rounded-[2rem] -rotate-3 transition-transform group-hover:rotate-0 duration-700" />
          <div className="relative aspect-square rounded-[2rem] overflow-hidden grayscale contrast-125 hover:grayscale-0 transition-all duration-1000 border border-white/5">
            <img 
              src="https://i.imgur.com/SzvDiEo.jpeg" 
              alt="Profile" 
              className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
