import { motion } from 'motion/react';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { ExternalLink, Award } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const certificates = [
  {
    title: 'Análise e Desenvolvimento de Sistemas',
    institution: 'Unicesumar',
    date: 'JUL 2026',
    icon: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=400&auto=format&fit=crop',
    techs: ['Arquitetura', 'Algoritmos', ],
    link: '#'
  },
  {
    title: 'Soft Skills na era da IA: Como fortalecer metacompetências',
    institution: 'Alura',
    date: 'MAR 2026',
    icon: 'https://i.imgur.com/a1wJInF.png',
    techs: ['React', 'Node.js', 'TypeScript', 'Clean Code'],
    link: 'https://cursos.alura.com.br/certificate/9ce3420f-9a7a-4d10-96a8-614ad89b75c4?lang=pt_BR'
  },
  {
    title: 'Praticando Figma: auto layout',
    institution: 'Alura',
    date: 'NOV 2025',
    icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH9bEsGzdGdvTeSOOOrM7jG_NJv0PGpGmOmg&s',
    techs: ['UX/UX Research', 'Design'],
    link: 'https://cursos.alura.com.br/user/eduianbf/course/praticando-figma-auto-layout/certificate'
  },
  {
    title: 'JavaScript: aprendendo a programar',
    institution: 'Alura',
    date: 'MAI 2026',
    icon: 'data:image/png;base64,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',
    techs: ['JavaScript'],
    link: 'https://cursos.alura.com.br/user/eduianbf/course/javascript-aprendendo-programar/certificate'
  },
   {
    title: 'LINGUAGEM DE PROGRAMAÇÃO PYTHON - BÁSICO',
    institution: 'Alura',
    date: 'AGO 2025',
    icon: 'https://freepngimg.com/thumb/categories/1402.png',
    techs: ['UX/UX Research', 'Design'],
    link: 'https://lms.ev.org.br/mpls/Web/Lms/Student/PrintCertificateDownload.ashx?uid=10428692&p=L3ZWRSWd%252bBy2BRXsaOvladQUZ2ECeft%252b'
  },
  
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
