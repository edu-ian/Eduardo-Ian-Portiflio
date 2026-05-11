import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden px-6">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-6 inline-block py-1 px-4 border border-white/10 rounded-full bg-white/5 backdrop-blur-sm"
        >
          <span className="text-xs font-medium tracking-[0.2em] uppercase opacity-70">Disponível para novos projetos</span>
        </motion.div>

       <motion.h1
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
  className="text-5xl md:text-8xl font-display font-bold tracking-tight mb-8 leading-[1.05]"
> Conectando pontos.<br />
  <span className="opacity-40 italic"> Criando </span> 
   <span className="text-white">caminhos</span>.
</motion.h1>

<motion.p
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
  className="max-w-2xl text-left md:text-center mx-auto text-lg md:text-xl opacity-60 mb-12 font-light leading-relaxed"
>
  Construo aplicações completas focando em arquitetura, performance e no valor prático do software.
</motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 bg-white text-black font-semibold rounded-full group transition-all"
          > Ver Projetos
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            className="px-10 py-4 border border-white/20 rounded-full hover:bg-white/5 transition-all font-medium"
          > Entrar em Contato
          </motion.a>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-30"
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
}
