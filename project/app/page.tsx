'use client';

import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Certificates from '@/components/Certificates';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';
import LoadingScreen from '@/components/LoadingScreen';
import ThemeToggle from '@/components/ThemeToggle';
import DownloadCV from '@/components/DownloadCV';
import DraggableLanyard from '@/components/DraggableLanyard';
import FloatingElements from '@/components/FloatingElements';
import ScrollProgress from '@/components/ScrollProgress';
import ParticleSystem from '@/components/ParticleSystem';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('light-mode');
  };

  return (
    <main className={`portfolio-wrapper ${isDarkMode ? 'dark' : 'light'}`}>
      {isLoading && <LoadingScreen />}
      <CustomCursor />
      <ScrollProgress />
      <ParticleSystem />
      <FloatingElements />
      <DraggableLanyard />
      
      <ThemeToggle isDarkMode={isDarkMode} onToggle={toggleTheme} />
      <DownloadCV />
      
      <div className="bg-animation" />
      
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Certificates />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}