import { motion } from 'motion/react';

const colors = ['#FF2D55', '#FF9500', '#FFCC00', '#4CD964', '#5AC8FA', '#007AFF', '#5856D6'];

export default function Balloons() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {[...Array(15)].map((_, i) => {
        const color = colors[i % colors.length];
        const left = `${Math.random() * 100}%`;
        const delay = Math.random() * 5;
        const duration = 10 + Math.random() * 10;
        
        return (
          <motion.div
            key={i}
            className="absolute bottom-[-100px]"
            initial={{ y: '100vh', x: 0 }}
            animate={{ 
              y: '-120vh',
              x: Math.sin(i) * 100 
            }}
            transition={{
              duration: duration,
              repeat: Infinity,
              delay: delay,
              ease: "linear"
            }}
            style={{ left }}
          >
            <div className="relative flex flex-col items-center balloon-float">
              <div 
                className="w-16 h-20 rounded-[50%] shadow-lg"
                style={{ 
                  background: `radial-gradient(circle at 30% 30%, white 0%, ${color} 20%, ${color} 80%, black 100%)`,
                  opacity: 0.8
                }}
              />
              {/* Balloon tie */}
              <div 
                className="w-0 h-0 border-l-[6px] border-r-[6px] border-b-[8px] border-l-transparent border-r-transparent mt-[-2px]"
                style={{ borderBottomColor: color }}
              />
              {/* String */}
              <div className="w-[1px] h-24 bg-white/30" />
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
