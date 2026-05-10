import { motion } from 'motion/react';

const skills = [
  'React', 'TypeScript', 'Next.js', 'Node.js', 
  'Tailwind CSS', 'Framer Motion', 'GraphQL', 'Firebase',
  'PostgreSQL', 'Docker', 'AWS', 'UI/UX Design'
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
              Com foco absoluto no ecossistema JavaScript/TypeScript, meu objetivo é fundir design disruptivo com arquitetura resiliente. Acredito que a interface é a ponte emocional entre o usuário e o produto.
            </p>
            <p>
              Minha trajetória é impulsionada pela busca do "Premium Feel" — aquela sensação de fluidez e polimento que separa os sites comuns das experiências memoráveis.
            </p>
          </div>

          <div className="mt-12">
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] opacity-40 mb-6 font-display">Tech Stack</h3>
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
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop" 
              alt="Profile" 
              className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
