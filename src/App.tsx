import { useState, useEffect } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollAnimation } from './hooks/useScrollAnimation';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const sections = [
    { id: 'hero', component: Hero },
    { id: 'about', component: About },
    { id: 'skills', component: Skills },
    { id: 'experience', component: Experience },
    { id: 'projects', component: Projects },
    { id: 'education', component: Education },
    { id: 'contact', component: Contact }
  ];

  useEffect(() => {
    // Simulate loading time for better UX
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const navigateToSection = (sectionId: string) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setActiveSection(sectionId);
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const nextSection = () => {
    if (isTransitioning) return;
    const currentIndex = sections.findIndex(s => s.id === activeSection);
    if (currentIndex < sections.length - 1) {
      navigateToSection(sections[currentIndex + 1].id);
    }
  };

  const prevSection = () => {
    if (isTransitioning) return;
    const currentIndex = sections.findIndex(s => s.id === activeSection);
    if (currentIndex > 0) {
      navigateToSection(sections[currentIndex - 1].id);
    }
  };

  // Use the touch gesture hook
  useScrollAnimation({
    onNext: nextSection,
    onPrev: prevSection,
    isTransitioning
  });

  const CurrentComponent = sections.find(s => s.id === activeSection)?.component || Hero;

  if (isLoading) {
    return (
      <ThemeProvider>
        <div className="h-screen bg-white dark:bg-gray-900 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-maroon-600 to-maroon-700 dark:from-gold-400 dark:to-gold-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white dark:text-gray-900 font-bold text-lg sm:text-xl">SK</span>
            </div>
            <motion.div
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-gray-600 dark:text-gray-300 text-sm sm:text-base"
            >
              Loading...
            </motion.div>
          </motion.div>
        </div>
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider>
      <div className="h-screen overflow-hidden bg-white dark:bg-gray-900 transition-colors">
        <Header activeSection={activeSection} onNavigate={navigateToSection} />
        
        {/* Section Indicators */}
        <div className="fixed right-4 md:right-6 top-1/2 transform -translate-y-1/2 z-40 flex flex-col space-y-2 md:space-y-3 hidden sm:flex">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => navigateToSection(section.id)}
              className={`w-1.5 h-1.5 rounded-full border transition-all duration-300 ${
                activeSection === section.id
                  ? 'bg-maroon-600 border-maroon-600 dark:bg-gold-400 dark:border-gold-400'
                  : 'bg-transparent border-gray-400 hover:border-maroon-600 dark:hover:border-gold-400'
              }`}
              aria-label={`Go to ${section.id} section`}
            />
          ))}
        </div>
        
        {/* Mobile Section Indicator */}
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-40 flex space-x-2 sm:hidden">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => navigateToSection(section.id)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                activeSection === section.id
                  ? 'bg-maroon-600 dark:bg-gold-400'
                  : 'bg-gray-300 dark:bg-gray-600'
              }`}
              aria-label={`Go to ${section.id} section`}
            />
          ))}
        </div>
        
        <main className="h-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="h-full"
            >
              <CurrentComponent />
            </motion.div>
          </AnimatePresence>
        </main>
        {activeSection === 'contact' && <Footer />}
      </div>
    </ThemeProvider>
  );
}

export default App;