import { motion } from 'motion/react';
import { Github, Linkedin, Mail, Send, MessageCircle } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight mb-8">
            Vamos <span className="opacity-40 italic">Conversar?</span>
          </h2>
          <p className="text-xl font-light opacity-50 mb-12 max-w-md leading-relaxed">
            Tem um projeto interessante ou apenas quer trocar ideias sobre design e código? Fique à vontade.
          </p>

          <div className="space-y-8">
            <motion.div 
              whileHover={{ x: 10 }}
              className="flex items-center gap-6 group cursor-pointer"
            >
              <div className="p-4 bg-white/5 rounded-2xl border border-white/5 transition-colors group-hover:border-white/20 group-hover:bg-white/10">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-30 mb-1">E-mail</p>
                <a href="mailto:eduianbf@gmail.com" className="text-lg font-medium hover:opacity-100 opacity-80 transition-opacity">eduianbf@gmail.com</a>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ x: 10 }}
              className="flex items-center gap-6 group cursor-pointer"
            >
              <div className="p-4 bg-white/5 rounded-2xl border border-white/5 transition-colors group-hover:border-white/20 group-hover:bg-white/10">
                <MessageCircle size={24} />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-30 mb-1">WhatsApp</p>
              
                <a 
                  href="https://wa.me/5541992516118?text=Fala%20Eduardo!%20Vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar." 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-lg font-medium hover:opacity-100 opacity-80 transition-opacity"
                >
                  (41) 99251-6118
                </a>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ x: 10 }}
              className="flex items-center gap-6 group cursor-pointer"
            >
              <div className="p-4 bg-white/5 rounded-2xl border border-white/5 transition-colors group-hover:border-white/20 group-hover:bg-white/10">
                <Linkedin size={24} />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-30 mb-1">LinkedIn</p>
                <a 
                  href="https://www.linkedin.com/in/eduardo-ian-22a3bb397/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-lg font-medium hover:opacity-100 opacity-80 transition-opacity"
                >
                  linkedin.com/in/eduardo-ian
                </a>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ x: 10 }}
              className="flex items-center gap-6 group cursor-pointer"
            >
              <div className="p-4 bg-white/5 rounded-2xl border border-white/5 transition-colors group-hover:border-white/20 group-hover:bg-white/10">
                <Github size={24} />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-30 mb-1">GitHub</p>
                <a 
                  href="https://github.com/edu-ian" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-lg font-medium hover:opacity-100 opacity-80 transition-opacity"
                >
                  github.com/edu-ian
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, scale: 0.95, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass p-8 md:p-12 rounded-[2rem] border-white/5 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2" />
          
          <div className="space-y-8 relative z-10">
            <div className="group">
              <label htmlFor="name" className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-30 block mb-3 group-focus-within:opacity-100 transition-opacity">Seu Nome</label>
              <input 
                type="text" 
                id="name" 
                placeholder="Ex. João Silva"
                className="w-full bg-transparent border-b border-white/10 py-4 focus:outline-none focus:border-white transition-colors font-light placeholder:opacity-10 text-lg"
              />
            </div>
            <div className="group">
              <label htmlFor="email" className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-30 block mb-3 group-focus-within:opacity-100 transition-opacity">Seu E-mail</label>
              <input 
                type="email" 
                id="email" 
                placeholder="Ex. joao@email.com"
                className="w-full bg-transparent border-b border-white/10 py-4 focus:outline-none focus:border-white transition-colors font-light placeholder:opacity-10 text-lg"
              />
            </div>
            <div className="group">
              <label htmlFor="message" className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-30 block mb-3 group-focus-within:opacity-100 transition-opacity">Sua Mensagem</label>
              <textarea 
                id="message" 
                rows={4} 
                placeholder="Como posso te ajudar?"
                className="w-full bg-transparent border-b border-white/10 py-4 focus:outline-none focus:border-white transition-colors font-light placeholder:opacity-10 resize-none text-lg"
              />
            </div>
            
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-6 bg-white text-black font-bold rounded-2xl flex items-center justify-center gap-3 group transition-all mt-4"
            >
              Enviar Mensagem
              <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </motion.button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-white/5 mt-24">
      <div className="max-w-7xl mx-auto flex justify-center items-center opacity-40 text-center">
        <p className="text-sm">Por Eduardo Ian, feito com paixão e código.</p>
      </div>
    </footer>
  );
}