import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Mail, Phone, MapPin, Send } from 'lucide-react';

export default function ContactUs() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen p-8 flex items-center justify-center relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534536281715-e28d76689b4d?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center opacity-10" />
      
      <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10 bg-zinc-900/50 backdrop-blur-2xl rounded-3xl border border-white/10 shadow-2xl overflow-hidden p-8">
        
        <div className="flex flex-col justify-between">
          <div>
            <Link 
              to="/categories" 
              className="inline-flex items-center space-x-2 text-slate-400 hover:text-white transition-colors mb-8"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Categories</span>
            </Link>
            
            <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400 mb-4">
              Get in Touch
            </h1>
            <p className="text-slate-400 mb-8">
              We'd love to hear from you. Our friendly team is always here to chat.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 border border-emerald-500/30">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold text-white">Email</h3>
                <p className="text-slate-400 text-sm">hello@itunemedia.com</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 border border-cyan-500/30">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold text-white">Office</h3>
                <p className="text-slate-400 text-sm">123 Media Blvd, Creativity City</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 border border-blue-500/30">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold text-white">Phone</h3>
                <p className="text-slate-400 text-sm">+1 (555) 123-4567</p>
              </div>
            </div>
          </div>
        </div>

        <motion.div 
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, type: "spring" as const, stiffness: 100 }}
          className="bg-black/40 rounded-2xl p-8 border border-white/5"
        >
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-sm font-medium text-slate-400 mb-1">First Name</label>
              <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all" placeholder="John" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-400 mb-1">Email</label>
              <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all" placeholder="john@example.com" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-400 mb-1">Message</label>
              <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all resize-none" placeholder="How can we help?"></textarea>
            </div>
            <button className="w-full bg-gradient-to-r from-emerald-500 to-cyan-600 text-white font-semibold py-3 px-4 rounded-xl flex items-center justify-center space-x-2 hover:shadow-lg hover:shadow-emerald-500/25 transition-all group">
              <span>Send Message</span>
              <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </motion.div>
      </div>
    </motion.div>
  );
}
