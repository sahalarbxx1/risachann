import { useState } from 'react';
import { motion } from 'motion/react';
import confetti from 'canvas-confetti';

export default function Cake() {
  const [isBlown, setIsBlown] = useState(false);

  const blowCandle = () => {
    if (!isBlown) {
      setIsBlown(true);
      confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#FF2D55', '#FFCC00', '#5AC8FA', '#ffffff']
      });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center py-12 relative z-10">
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="relative cursor-pointer group"
        onClick={blowCandle}
      >
        {/* Tooltip */}
        {!isBlown && (
          <motion.div 
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ repeat: Infinity, repeatType: 'reverse', duration: 1 }}
            className="absolute -top-16 left-1/2 -translate-x-1/2 whitespace-nowrap bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-sm font-medium text-white"
          >
            Tiup Lilinnya! (Klik)
          </motion.div>
        )}

        {/* Candle */}
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 flex flex-col items-center">
          {/* Flame */}
          {!isBlown && (
            <div className="w-4 h-6 bg-gradient-to-b from-yellow-200 via-orange-400 to-red-500 rounded-[50%_50%_20%_20%] flame shadow-[0_0_20px_#ff9500]" />
          )}
          {/* Smoke (when blown) */}
          {isBlown && (
            <motion.div 
              initial={{ opacity: 1, y: 0, scale: 1 }}
              animate={{ opacity: 0, y: -50, scale: 2 }}
              transition={{ duration: 2 }}
              className="w-2 h-2 bg-gray-300 rounded-full blur-sm absolute -top-4"
            />
          )}
          {/* Candle Body */}
          <div className="w-3 h-12 bg-gradient-to-r from-pink-100 to-pink-300 rounded-sm border-b-2 border-pink-400 relative overflow-hidden">
             {/* Stripes */}
             <div className="absolute inset-0" style={{ background: 'repeating-linear-gradient(45deg, transparent, transparent 5px, rgba(255,45,85,0.5) 5px, rgba(255,45,85,0.5) 10px)' }} />
          </div>
        </div>

        {/* Cake Layers */}
        <div className="relative mt-12">
          {/* Top Layer */}
          <div className="w-48 h-16 bg-pink-400 rounded-[50%] absolute -top-8 left-1/2 -translate-x-1/2 border-4 border-pink-300 shadow-inner z-20 flex items-center justify-center">
             <span className="text-pink-100 font-bold text-lg rotate-x-60">21</span>
          </div>
          
          {/* Middle Layer */}
          <div className="w-56 h-20 bg-pink-500 rounded-[50%] absolute -top-4 left-1/2 -translate-x-1/2 border-4 border-pink-400 z-10" />
          
          {/* Bottom Layer */}
          <div className="w-64 h-24 bg-pink-600 rounded-[50%] border-4 border-pink-500 relative z-0 flex items-end justify-center pb-2 shadow-2xl">
             <div className="w-72 h-32 bg-white/10 rounded-[50%] absolute -bottom-4 blur-md -z-10" />
          </div>
          
          {/* Drips */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-full z-20 pointer-events-none">
            <div className="absolute top-4 left-4 w-3 h-8 bg-pink-300 rounded-full" />
            <div className="absolute top-6 left-12 w-3 h-12 bg-pink-300 rounded-full" />
            <div className="absolute top-2 right-16 w-3 h-10 bg-pink-300 rounded-full" />
            <div className="absolute top-5 right-6 w-3 h-6 bg-pink-300 rounded-full" />
          </div>
        </div>
      </motion.div>
      
      {isBlown && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-12 text-center"
        >
          <h2 className="text-3xl font-bold bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent">
            Make a Wish! ✨
          </h2>
        </motion.div>
      )}
    </div>
  );
}
