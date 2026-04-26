import { motion } from 'framer-motion';

interface ContentCardProps {
  title: string;
  description: string;
  image?: string;
  index: number;
}

export default function ContentCard({ title, description, image, index }: ContentCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -10 }}
      className="relative group rounded-2xl overflow-hidden shadow-lg h-[400px] border border-white/5"
    >
      <div className="absolute inset-0 bg-zinc-800">
        <img 
          src={image || `https://picsum.photos/seed/${title}/600/800`} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
      
      <div className="absolute inset-0 p-6 flex flex-col justify-end transform translate-y-16 group-hover:translate-y-0 transition-transform duration-300">
        <h2 className="text-2xl font-bold text-white mb-2">{title}</h2>
        <p className="text-slate-300 text-sm mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
          {description}
        </p>
        <button className="bg-white/20 hover:bg-white/30 backdrop-blur-md text-white py-2 px-4 rounded-lg font-medium transition-colors opacity-0 group-hover:opacity-100 duration-300 delay-200">
          Play Now
        </button>
      </div>
    </motion.div>
  );
}
