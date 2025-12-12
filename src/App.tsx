import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/common/ScrollToTop';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Academic from './pages/Academic';
import Admissions from './pages/Admissions';
import About from './pages/About';
import Contact from './pages/Contact';
import ScholarshipDetail from './pages/ScholarshipDetail';
import News from './pages/News';

// Placeholder components for routes we haven't built yet
const Placeholder = ({ title }: { title: string }) => (
  <div className="min-h-screen pt-24 text-center">
    <h1 className="text-3xl font-bold text-gray-800">{title}</h1>
    <p className="text-gray-500 mt-4">Coming Soon</p>
  </div>
);

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <ScrollToTop />
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/academic" element={<Academic />} />
            <Route path="/admission" element={<Admissions />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/e-learning" element={<Placeholder title="E-Learning" />} />
            <Route path="/news/melissa-ndip-memorial-scholarship-2025-2026" element={<ScholarshipDetail />} />
            <Route path="/news" element={<News />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
