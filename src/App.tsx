/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import Balloons from './components/Balloons';
import Cake from './components/Cake';
import Gallery from './components/Gallery';
import Message from './components/Message';

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-pink-500/30">
      <Balloons />
      
      <main className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col items-center justify-center px-4 pt-20 pb-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center mb-16"
          >
            <motion.h1 
              className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-4"
              style={{
                background: 'linear-gradient(135deg, #fff 0%, #a5a5a5 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              Happy Birthday
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="text-2xl md:text-4xl font-light text-pink-400 tracking-wide"
            >
              Tuan Putri Risa Simanjuntak
            </motion.p>
          </motion.div>

          <Cake />
        </section>

        <Message />
        <Gallery />
        
        {/* Footer */}
        <footer className="py-8 text-center text-white/40 text-sm">
          <p>Dibuat dengan ❤️ untuk hari spesialmu</p>
        </footer>
      </main>
    </div>
  );
}
