import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Mail, Lock } from 'lucide-react';

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/categories');
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="min-h-screen flex items-center justify-center p-4"
    >
      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, type: "spring" as const, stiffness: 100 }}
        className="w-full max-w-md backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 shadow-2xl relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />
        
        <div className="text-center mb-8">
          <motion.img 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring" as const, bounce: 0.5, delay: 0.4 }}
            src="/Imageslogin/logo.png" 
            alt="Logo" 
            className="w-24 h-24 mx-auto mb-6 object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]" 
            onError={(e) => {
              // fallback if logo.png doesn't exist or failed to load
              (e.target as HTMLImageElement).src = 'https://cdn-icons-png.flaticon.com/512/3669/3669986.png';
            }}
          />
          <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            Sign Into Account
          </h1>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-4">
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-slate-400 group-focus-within:text-blue-400 transition-colors" />
              </div>
              <input 
                type="email" 
                placeholder="E-Mail" 
                required
                className="w-full pl-12 pr-4 py-3 bg-zinc-900/50 border border-zinc-700/50 rounded-xl focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 outline-none transition-all text-slate-200 placeholder-slate-500"
              />
            </div>
            
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-slate-400 group-focus-within:text-blue-400 transition-colors" />
              </div>
              <input 
                type="password" 
                placeholder="Password" 
                required
                className="w-full pl-12 pr-4 py-3 bg-zinc-900/50 border border-zinc-700/50 rounded-xl focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 outline-none transition-all text-slate-200 placeholder-slate-500"
              />
            </div>
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center space-x-2 cursor-pointer group">
              <input 
                type="checkbox" 
                defaultChecked 
                className="w-4 h-4 rounded border-zinc-700 text-blue-500 focus:ring-blue-500/50 focus:ring-offset-0 bg-zinc-900/50"
              />
              <span className="text-slate-400 group-hover:text-slate-200 transition-colors">Keep Me Logged In</span>
            </label>
            <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors">Forgot Password?</a>
          </div>

          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit" 
            className="w-full py-3.5 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all"
          >
            Go !
          </motion.button>
        </form>
      </motion.div>
    </motion.div>
  );
}
