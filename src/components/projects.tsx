import { motion } from 'motion/react';
import { ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import { Parallax, Thumbs, FreeMode, Navigation } from 'swiper/modules';
import { cn } from '@/src/lib/utils';

const projects = [
  {
    title: 'Foca Aqui',
    description: 'Sistema de produtividade minimalista focado na técnica Pomodoro com dashboards analíticos avançados e foco total em UX.',
    tags: ['React', 'TypeScript', 'Tailwind', 'Firebase'],
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=1200&auto=format&fit=crop',
    link: '#',
    github: '#'
  },
  {
    title: 'Elite Analytics',
    description: 'Dashboard financeiro premium com visualização de dados em tempo real e relatórios avançados de performance.',
    tags: ['Next.js', 'D3.js', 'PostgreSQL', 'Framer Motion'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
    link: '#',
    github: '#'
  },
  {
    title: 'Aura Marketplace',
    description: 'E-commerce de luxo com experiência de checkout otimizada e animações fluidas para marcas de alto padrão.',
    tags: ['React', 'Node.js', 'Stripe', 'AWS'],
    image: 'https://images.unsplash.com/photo-1533134486753-c833f0ed4866?q=80&w=1200&auto=format&fit=crop',
    link: '#',
    github: '#'
  },
  {
    title: 'Nexus VR',
    description: 'Landing page imersiva para equipamentos de realidade virtual com scroll interativo e modelos 3D.',
    tags: ['Three.js', 'React Three Fiber', 'GSAP', 'Vite'],
    image: 'https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?q=80&w=1200&auto=format&fit=crop',
    link: '#',
    github: '#'
  }
];

export function Projects() {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  return (
    <section id="projects" className="py-24 px-6 max-w-full overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16 max-w-7xl mx-auto"
      >
        <h2 className="text-3xl md:text-6xl font-display font-bold tracking-tight">
          Projetos <span className="opacity-40 italic">Premium</span>
        </h2>
        <p className="mt-4 opacity-50 font-light text-lg">Experiências digitais imersivas com tecnologia de ponta.</p>
      </motion.div>

      <div className="max-w-6xl mx-auto relative group/nav">
        {/* Main Swiper */}
        <Swiper
          speed={1000}
          parallax={true}
          loop={true}
          thumbs={{ swiper: thumbsSwiper }}
          navigation={{
            prevEl: '.project-prev',
            nextEl: '.project-next',
          }}
          modules={[Parallax, Thumbs, Navigation]}
          className="rounded-[2.5rem] overflow-hidden mb-8 h-[500px] md:h-[600px] glass border-white/5"
        >
          {projects.map((project) => (
            <SwiperSlide key={project.title} className="relative overflow-hidden">
              {/* Parallax Background */}
              <div 
                className="absolute inset-0 z-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${project.image})` }}
                data-swiper-parallax="40%"
              >
                <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px]" />
              </div>

              {/* Parallax Content */}
              <div className="relative z-10 h-full flex flex-col justify-center p-8 md:p-20 max-w-3xl">
                <div 
                  className="flex flex-wrap gap-3 mb-6"
                  data-swiper-parallax="-200"
                  data-swiper-parallax-opacity="0"
                >
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-bold uppercase tracking-[0.2em] bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/5">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 
                  className="text-4xl md:text-7xl font-display font-bold text-white mb-6 leading-tight"
                  data-swiper-parallax="-300"
                >
                  {project.title}
                </h3>

                <p 
                  className="text-lg opacity-60 font-light leading-relaxed mb-10 max-w-xl"
                  data-swiper-parallax="-400"
                  data-swiper-parallax-opacity="0"
                >
                  {project.description}
                </p>

                <div 
                  className="flex gap-4"
                  data-swiper-parallax="-500"
                  data-swiper-parallax-scale="0.8"
                >
                  <a 
                    href={project.link} 
                    className="flex items-center gap-2 px-8 py-4 bg-white text-black rounded-2xl font-bold transition-transform hover:scale-105"
                  >
                    Explorar Projeto <ExternalLink size={18} />
                  </a>
                  <a 
                    href={project.github} 
                    className="flex items-center gap-2 px-8 py-4 border border-white/20 rounded-2xl font-bold transition-all hover:bg-white/5"
                  >
                    GitHub <Github size={18} />
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}

          {/* Custom Navigation */}
          <button className="project-prev absolute left-8 top-1/2 -translate-y-1/2 z-20 p-4 rounded-full border border-white/10 bg-black/20 backdrop-blur-md opacity-0 group-hover/nav:opacity-100 transition-all hover:bg-white hover:text-black">
            <ChevronLeft size={24} />
          </button>
          <button className="project-next absolute right-8 top-1/2 -translate-y-1/2 z-20 p-4 rounded-full border border-white/10 bg-black/20 backdrop-blur-md opacity-0 group-hover/nav:opacity-100 transition-all hover:bg-white hover:text-black">
            <ChevronRight size={24} />
          </button>
        </Swiper>

        {/* Thumbs Swiper */}
        <Swiper
          onSwiper={setThumbsSwiper}
          loop={true}
          spaceBetween={20}
          slidesPerView={2}
          breakpoints={{
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 4 }
          }}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Thumbs]}
          className="thumbs-swiper !px-2"
        >
          {projects.map((project) => (
            <SwiperSlide key={project.title} className="cursor-pointer">
              <div className="group relative aspect-video rounded-2xl overflow-hidden border-2 border-transparent transition-all duration-300 swiper-slide-thumb-active:border-off-white">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover grayscale opacity-40 group-hover:opacity-100 transition-all group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="mt-20 text-center"
      >
        <motion.a
          href="#"
          whileHover={{ scale: 1.05 }}
          className="inline-block px-12 py-5 bg-white text-black font-bold rounded-2xl tracking-tighter uppercase text-xs hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] transition-all"
        >
          Ver portfólio completo
        </motion.a>
      </motion.div>

      <style dangerouslySetInnerHTML={{ __html: `
        .swiper-slide-thumb-active {
          opacity: 1 !important;
        }
        .swiper-slide-thumb-active img {
          grayscale: 0 !important;
          opacity: 1 !important;
        }
        .swiper-slide-thumb-active div {
          border-color: #F5F5F5 !important;
        }
      `}} />
    </section>
  );
}
