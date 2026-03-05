import { motion } from 'motion/react';

const photos = [
  {
    url: 'https://picsum.photos/seed/risa1/600/800',
    caption: 'Momen Indah 1'
  },
  {
    url: 'https://picsum.photos/seed/risa2/600/800',
    caption: 'Momen Indah 2'
  },
  {
    url: 'https://picsum.photos/seed/risa3/600/800',
    caption: 'Momen Indah 3'
  }
];

export default function Gallery() {
  return (
    <div className="py-16 px-4 max-w-6xl mx-auto relative z-10">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-center mb-12 tracking-tight"
      >
        Kenangan Manis
      </motion.h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {photos.map((photo, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            whileHover={{ y: -10, scale: 1.02 }}
            className="glass rounded-3xl overflow-hidden shadow-2xl p-4"
          >
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-4">
              <img 
                src={photo.url} 
                alt={`Foto ${index + 1}`} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
            <p className="text-center text-white/80 font-medium">{photo.caption}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
