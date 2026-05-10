/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from './components/navbar';
import { Hero } from './components/hero';
import { About } from './components/about';
import { Projects } from './components/projects';
import { Education } from './components/education';
import { Contact, Footer } from './components/contact';
import { motion, useScroll, useSpring } from 'motion/react';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <main className="bg-black-piano selection:bg-white/20">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-white z-[60] origin-left"
        style={{ scaleX }}
      />

      <Navbar />
      
      <div className="relative">
        <Hero />
        
        <div className="space-y-40 pb-20">
          <About />
          <Projects />
          <Education />
          <Contact />
        </div>
        
        <Footer />
      </div>

      {/* Subtle Grain Overlay for texture */}
      <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.03] contrast-150 brightness-150">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <filter id="noiseFilter">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch"/>
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter)"/>
        </svg>
      </div>
    </main>
  );
}

