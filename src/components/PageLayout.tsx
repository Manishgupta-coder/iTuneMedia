import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import ContentCard from '../components/ContentCard';

interface PageLayoutProps {
  title: string;
  items: { title: string; description: string; image?: string }[];
}

export default function PageLayout({ title, items }: PageLayoutProps) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen p-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center mb-12">
          <Link 
            to="/categories" 
            className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors mr-6"
          >
            <ArrowLeft className="w-6 h-6" />
          </Link>
          <motion.h1 
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60"
          >
            {title}
          </motion.h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <ContentCard 
              key={index}
              index={index}
              title={item.title}
              description={item.description}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
