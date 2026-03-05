import { motion } from 'motion/react';

export default function Message() {
  return (
    <div className="py-20 px-4 relative z-10">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto glass p-8 md:p-12 rounded-[2.5rem] text-center"
      >
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-pink-400">
          Untuk Tuan Putri Risa Simanjuntak
        </h2>
        <div className="space-y-4 text-lg md:text-xl text-white/90 leading-relaxed font-light">
          <p>
            Selamat ulang tahun yang ke-21! 🎉
          </p>
          <p className="text-pink-300 italic">
            Maaf ya ucapannya baru sekarang karena ulang tahunnya kemarin. 
            Tapi doa dan harapan terbaik selalu menyertaimu setiap saat! 🙏✨
          </p>
          <p>
            Semoga di usia yang baru ini, setiap langkahmu selalu diiringi kebahagiaan, 
            kesehatan, dan kesuksesan. Teruslah bersinar dan menjadi inspirasi bagi 
            orang-orang di sekitarmu.
          </p>
          <p>
            Semoga semua impian dan harapanmu segera terwujud. 
            Have a wonderful belated birthday, Princess! 👑✨
          </p>
        </div>
      </motion.div>
    </div>
  );
}
