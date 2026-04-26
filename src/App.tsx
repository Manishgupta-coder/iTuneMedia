import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Login from './pages/Login';
import Categories from './pages/Categories';
import Songs from './pages/Songs';
import Movies from './pages/Movies';
import Webseries from './pages/Webseries';
import ContactUs from './pages/ContactUs';
import Background3D from './components/Background3D';

function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen text-slate-50 overflow-hidden relative">
      <Background3D />
      
      {/* Decorative background elements */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-900/20 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-purple-900/20 blur-[120px] pointer-events-none" />
      
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Login />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/songs" element={<Songs />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/webseries" element={<Webseries />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
