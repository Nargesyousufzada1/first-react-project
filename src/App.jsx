import React, { useState, useEffect } from 'react';
import theaterImg from "./assets/theater-p.png";
import schoolImage from "./assets/School-p.png";
import invoicesImage from "./assets/Invoices-p.png";
import ProjectsSection from './ProjectsSection';
import ContactContainer from './ContactContainer';
import FeedbackWall from './FeedbackWall';
import Footer from './Footer';






export default function App() {
  
  const [theme, setTheme] = useState(() => localStorage.getItem('portfolio-theme') || 'light');

  
  const [scrollProgress, setScrollProgress] = useState(0);


  const [liveUpdates, setLiveUpdates] = useState([]);

  
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) setScrollProgress((window.scrollY / totalScroll) * 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

 
  useEffect(() => {
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomMsg = LIVE_PORTFOLIO_UPDATES[Math.floor(Math.random() * LIVE_PORTFOLIO_UPDATES.length)];
      const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
      setLiveUpdates(prev => [{ id: Date.now(), text: `[${timestamp}] ${randomMsg}` }, ...prev.slice(0, 1)]);
    }, 15000);

    return () => clearInterval(interval);
  }, []);

 
  const themeClasses = theme === 'light' 
    ? "bg-slate-50 text-slate-800" 
    : theme === 'dark' 
    ? "bg-slate-950 text-slate-100" 
    : "bg-sky-950 text-sky-100";

  return (
    <div className={`min-h-screen flex flex-col font-sans transition-colors duration-300 ${themeClasses}`}>
     
      <div 
        className="fixed top-0 left-0 h-1 z-50 transition-all duration-100 bg-gradient-to-r from-pink-500 via-purple-500 to-emerald-400" 
        style={{ width: `${scrollProgress}%` }}
      />

      <Navbar theme={theme} setTheme={setTheme} />

     
      <Header welcomeMessage="Hello! I am an aspiring software engineering student focused on building clean, colorful, and accessible interfaces. My short-term goal is to master dynamic web rendering structures, component state modularity, and cross-platform layouts." theme={theme} />
      
      <main className="flex-1 w-full max-w-5xl mx-auto px-4 sm:px-6">
       
        <About />

      
        <ProjectsSection theme={theme} />
        
       
        <ContactContainer theme={theme} />
        
        {/* Feedback Wall Module */}
        <FeedbackWall theme={theme} />
      </main>

      <Footer />
    </div>
  );
}


function Navbar({ theme, setTheme }) {
  return (
    <nav className="flex flex-col sm:flex-row justify-between items-center px-8 py-4 bg-slate-900 text-white shadow-md sticky top-0 z-50 gap-4 sm:gap-0">
      <div className="text-xl font-extrabold tracking-wide bg-gradient-to-r from-pink-500 via-purple-500 to-emerald-400 bg-clip-text text-transparent">
        MyPortfolio
      </div>
      <ul className="flex list-none gap-6 m-0 p-0 items-center">
        <li><a href="#home" className="text-sm font-medium hover:text-pink-400 transition-colors">Home</a></li>
        <li><a href="#about" className="text-sm font-medium hover:text-emerald-400 transition-colors">About</a></li>
        <li><a href="#projects" className="text-sm font-medium hover:text-purple-400 transition-colors">Projects</a></li>
        <li><a href="#contact" className="text-sm font-medium hover:text-pink-400 transition-colors">Contact</a></li>
        
        
        <div className="ml-2 flex items-center bg-slate-800 p-1 rounded-xl gap-1 border border-slate-700">
          <button onClick={() => setTheme('light')} className={`px-2 py-1 text-xs rounded-lg font-bold transition-all ${theme === 'light' ? 'bg-white text-slate-900 shadow' : 'text-slate-400'}`}>☀️</button>
          <button onClick={() => setTheme('dark')} className={`px-2 py-1 text-xs rounded-lg font-bold transition-all ${theme === 'dark' ? 'bg-purple-600 text-white shadow' : 'text-slate-400'}`}>🌙</button>
          <button onClick={() => setTheme('ocean')} className={`px-2 py-1 text-xs rounded-lg font-bold transition-all ${theme === 'ocean' ? 'bg-sky-500 text-white shadow' : 'text-slate-400'}`}>🌊</button>
        </div>
      </ul>
    </nav>
  );
}


function Header({ welcomeMessage, theme }) {
  
  const name = "Narges Yousufzada";
  const quotes = [
    "The best way to predict the future is to invent it.",
    "Code is like humor. When you have to explain it, it is bad.",
    "Simplicity is the soul of efficiency.",
    "Make it work, make it right, make it fast."
  ];

  const [randomQuote, setRandomQuote] = useState("");
  useEffect(() => {
    setRandomQuote(quotes[Math.floor(Math.random() * quotes.length)]);
  }, []);

  const headerBg = theme === 'light' 
    ? 'bg-gradient-to-b from-pink-50 via-purple-50 to-white text-slate-800 border-slate-100' 
    : theme === 'dark' 
    ? 'bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 text-slate-100 border-slate-800'
    : 'bg-gradient-to-b from-sky-900 via-sky-950 to-sky-950 text-sky-100 border-sky-900';

  return (
    <header id="home" className={`text-center px-6 py-20 border-b transition-colors duration-300 ${headerBg}`}>
      <h1 className="text-4xl font-black tracking-tight text-slate-900 md:text-6xl bg-gradient-to-r from-pink-600 to-indigo-600 bg-clip-text text-transparent">
        {name}
      </h1>
      <p className="mt-6 text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed font-medium">
        {welcomeMessage}
      </p>
      <div className="mt-10 inline-block text-left p-6 border-l-4 border-emerald-500 bg-white shadow-md rounded-r-xl max-w-md">
        <span className="block text-xs font-bold uppercase tracking-wider text-emerald-600">Daily Inspiration</span>
        <p className="mt-2 text-slate-700 italic font-medium">"{randomQuote}"</p>
      </div>
    </header>
  );
}


function About() {
  const [showMore, setShowMore] = useState(false);
  
  const [avatarReact, setAvatarReact] = useState("👋 Click my face!");

 
  const hobbies = [
    "Building web interfaces with React & Tailwind CSS",
    "Exploring sustainable, open-source automation tools",
    "Designing colorful, interactive UI micro-animations",
    "Basic Knowledge of AI, Machin Learning and Python",
    "Comfortable working with HTML, CSS and JavaScript",
    "Basic understanding of Data Science"
  ];

  
  const skillMetrics = [
    { name: "React Framework", level: 85, fact: "Enjoys structural hooks and custom rendering pipelines!" },
    { name: "Tailwind Engineering", level: 90, fact: "Obsessed with utility classes, grids, and rapid layout design." },
    { name: "Core JavaScript", level: 80, fact: "Loves asynchronous manipulation and map state array reducers." }
  ];

  const handleAvatarInteraction = () => {
    const moods = [" Let's code!", "React with Tailwind CSS styling!", " Designing Websites", "⭐ Fulfilling requirements!"];
    setAvatarReact(moods[Math.floor(Math.random() * moods.length)]);
  };

  return (
    <section id="about" className="max-w-4xl mx-auto my-16 px-6 py-12 bg-gradient-to-br from-emerald-50/50 to-teal-50/30 rounded-3xl border border-emerald-100/50 shadow-sm">
      <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
        
        
        <div onClick={handleAvatarInteraction} className="relative group cursor-pointer select-none shrink-0">
          <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-pink-500 via-purple-500 to-emerald-400 flex items-center justify-center text-4xl shadow-md transform group-hover:rotate-12 transition-transform duration-300">
            👩‍💻
          </div>
          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 px-2.5 py-1 text-[10px] font-bold text-white bg-pink-600 rounded-lg whitespace-nowrap shadow-md group-hover:scale-110 transition-transform">
            {avatarReact}
          </div>
        </div>

        <div className="w-full">
          <h2 className="text-3xl font-black text-slate-950 border-b-4 border-emerald-400 inline-block pb-1">
            About Me & Goals
          </h2>
          
          <p className="mt-4 text-slate-700 leading-relaxed text-base md:text-lg">
            Here are some of the areas I specialize in and love to explore:
          </p>

          
          <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 list-none p-0">
            {hobbies.map((hobby, index) => (
              <li key={index} className="flex items-center gap-2 text-slate-700 bg-white/60 px-4 py-2.5 rounded-xl border border-emerald-100 shadow-sm text-sm font-medium">
                <span className="text-emerald-500"></span>
                {hobby}
              </li>
            ))}
          </ul>
          

        </div>
      </div>
    </section>
  );      
}
