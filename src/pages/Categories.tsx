import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Music, Film, Tv, Phone } from 'lucide-react';

const categories = [
  { id: 1, title: 'Songs', image: '/4.jpg', path: '/songs', icon: Music, color: 'from-blue-500/80 to-blue-900/80' },
  { id: 2, title: 'Movies', image: '/5.webp', path: '/movies', icon: Film, color: 'from-purple-500/80 to-purple-900/80' },
  { id: 3, title: 'Webseries', image: '/6.jpg', path: '/webseries', icon: Tv, color: 'from-pink-500/80 to-pink-900/80' },
  { id: 4, title: 'Contact Us', image: '/8.webp', path: '/contact', icon: Phone, color: 'from-emerald-500/80 to-emerald-900/80' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 50, rotateY: 30, scale: 0.9 },
  visible: { 
    opacity: 1, 
    y: 0, 
    rotateY: 0, 
    scale: 1,
    transition: { type: "spring" as const, stiffness: 100, damping: 15 }
  }
};

export default function Categories() {
  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0 }}
      className="min-h-screen p-8 flex flex-col items-center justify-center"
    >
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12 text-center"
      >
        <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60 mb-4">
          Choose Your Entertainment
        </h1>
        <p className="text-slate-400 max-w-lg mx-auto">
          Explore our vast collection of music, cinematic experiences, and exclusive web series tailored just for you.
        </p>
      </motion.div>

      <motion.div 
        variants={containerVariants}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl w-full perspective-1000"
      >
        {categories.map((cat) => (
          <Link to={cat.path} key={cat.id}>
            <motion.div 
              variants={itemVariants}
              whileHover={{ 
                y: -10, 
                scale: 1.02,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.5), 0 10px 10px -5px rgba(0, 0, 0, 0.1)"
              }}
              whileTap={{ scale: 0.98 }}
              className="relative rounded-3xl overflow-hidden aspect-[3/4] group cursor-pointer border border-white/10"
            >
              <div className="absolute inset-0 bg-zinc-900 animate-pulse" /> {/* Placeholder while loading */}
              <img 
                src={cat.image} 
                alt={cat.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop';
                }}
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${cat.color} mix-blend-multiply opacity-60 group-hover:opacity-80 transition-opacity duration-300`} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
              
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center mb-4 border border-white/30">
                    <cat.icon className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-white mb-2">{cat.title}</h2>
                  <div className="h-1 w-12 bg-white/50 rounded-full transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                </div>
              </div>
            </motion.div>
          </Link>
        ))}
      </motion.div>
    </motion.div>
  );
}
