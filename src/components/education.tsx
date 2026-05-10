import { motion } from 'motion/react';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { ExternalLink, Award } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const certificates = [
  {
    title: 'Análise e Desenvolvimento de Sistemas',
    institution: 'FIAP',
    date: 'Dez 2024',
    icon: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=400&auto=format&fit=crop',
    techs: ['Arquitetura', 'Algoritmos', 'Java', 'SQL'],
    link: '#'
  },
  {
    title: 'Full Stack JavaScript',
    institution: 'Rocketseat',
    date: 'Jul 2023',
    icon: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=400&auto=format&fit=crop',
    techs: ['React', 'Node.js', 'TypeScript', 'Clean Code'],
    link: '#'
  },
  {
    title: 'UI Industrial Design',
    institution: 'Google / Coursera',
    date: 'Mar 2023',
    icon: 'https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?q=80&w=400&auto=format&fit=crop',
    techs: ['UX Research', 'Design Systems', 'Acessibilidade'],
    link: '#'
  },
  {
    title: 'Especialista em React',
    institution: 'Alura',
    date: 'Jan 2023',
    icon: 'https://images.unsplash.com/photo-1593720213428-28a5b9e94613?q=80&w=400&auto=format&fit=crop',
    techs: ['Redux', 'Context API', 'Performance'],
    link: '#'
  }
];

function CertificateCard({ cert }: { cert: typeof certificates[0] }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="relative w-[300px] h-[400px] perspective-1000 cursor-pointer mx-auto"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        className="w-full h-full relative preserve-3d duration-700 transition-all"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      >
        {/* Front */}
        <div className="absolute inset-0 backface-hidden rounded-[2rem] glass border-white/10 overflow-hidden flex flex-col">
          <div className="h-2/5 relative overflow-hidden">
            <img src={cert.icon} alt={cert.title} className="w-full h-full object-cover grayscale opacity-50 transition-all duration-500 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black-piano" />
            <div className="absolute top-4 right-4 p-2 bg-white/10 backdrop-blur-md rounded-full border border-white/10">
              <Award size={20} className="text-white opacity-80" />
            </div>
          </div>
          <div className="p-8 flex flex-col flex-1 justify-between">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-40 mb-2">{cert.date}</p>
              <h3 className="text-xl font-display font-bold leading-tight line-clamp-2">{cert.title}</h3>
              <p className="text-sm opacity-60 mt-1">{cert.institution}</p>
            </div>
            <p className="text-[10px] text-center opacity-30 italic">Tocar para ver detalhes</p>
          </div>
        </div>

        {/* Back */}
        <div className="absolute inset-0 backface-hidden rounded-[2rem] glass p-8 flex flex-col justify-center items-center text-center rotate-y-180 bg-black/95 border-white/20">
          <h3 className="text-lg font-bold mb-6 font-display">Competências</h3>
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {cert.techs.map(tech => (
              <span key={tech} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-medium tracking-wide">
                {tech}
              </span>
            ))}
          </div>
          <a 
            href={cert.link} 
            className="flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full font-bold text-xs hover:scale-105 transition-transform"
            onClick={(e) => e.stopPropagation()}
          >
            Ver Certificado <ExternalLink size={14} />
          </a>
        </div>
      </motion.div>
    </div>
  );
}

export function Education() {
  return (
    <section id="education" className="py-24 px-6 max-w-full overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight mb-4">
          Certificações <span className="opacity-40 italic">& Especializações</span>
        </h2>
        <p className="opacity-50 font-light max-w-lg mx-auto">Um registro da minha busca contínua pela excelência técnica através de cursos e formações de alto nível.</p>
      </motion.div>

      <div className="max-w-7xl mx-auto py-10">
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 35,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          pagination={{ clickable: true }}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper !pb-12"
        >
          {certificates.map((cert) => (
            <SwiperSlide key={cert.title} className="!w-[300px]">
              <CertificateCard cert={cert} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .swiper-pagination-bullet {
          background: white !important;
          opacity: 0.2;
        }
        .swiper-pagination-bullet-active {
          opacity: 1;
        }
      `}} />
    </section>
  );
}
