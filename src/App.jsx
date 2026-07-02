import React, { useState } from 'react';
import theaterImg from "./assets/theater-p.png";
import schoolImage from "./assets/School-p.png";
import invoicesImage from "./assets/Invoices-p.png";

function Navbar() {
  return (
    <nav className="flex flex-col sm:flex-row justify-between items-center px-8 py-4 bg-slate-900 text-white shadow-md sticky top-0 z-50 gap-4 sm:gap-0">
      <div className="text-xl font-extrabold tracking-wide bg-gradient-to-r from-pink-500 via-purple-500 to-emerald-400 bg-clip-text text-transparent">
        MyPortfolio
      </div>
      <ul className="flex list-none gap-6 m-0 p-0">
        <li><a href="#home" className="text-sm font-medium hover:text-pink-400 transition-colors">Home</a></li>
        <li><a href="#about" className="text-sm font-medium hover:text-emerald-400 transition-colors">About</a></li>
        <li><a href="#projects" className="text-sm font-medium hover:text-purple-400 transition-colors">Projects</a></li>
      </ul>
    </nav>
  );
}


function Header({ welcomeMessage }) {
  const name = "Narges Yousufzada";
  const quotes = [
    "The best way to predict the future is to invent it.",
    "Code is like humor. When you have to explain it, it is bad.",
    "Simplicity is the soul of efficiency.",
    "Make it work, make it right, make it fast."
  ];

  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  return (
    <header id="home" className="text-center px-6 py-20 bg-gradient-to-b from-pink-50 via-purple-50 to-white text-slate-800 border-b border-slate-100">
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

  const hobbies = [
    "Building web interfaces with React & Tailwind CSS",
    "Exploring sustainable, open-source automation tools",
    "Designing colorful, interactive UI micro-animations",
    "Basic Knowledge of AI, Machin Learning and Python",
    "Comfortable working with HTML, CSS and JavaScript",
    "Basic understanding of Data Science"
  ];

  return (
    <section id="about" className="max-w-4xl mx-auto my-16 px-6 py-12 bg-gradient-to-br from-emerald-50/50 to-teal-50/30 rounded-3xl border border-emerald-100/50 shadow-sm">
      <h2 className="text-3xl font-black text-slate-950 border-b-4 border-emerald-400 inline-block pb-1">
        About Me & Goals
      </h2>
      <p className="mt-6 text-slate-700 leading-relaxed text-base md:text-lg">
        Hello! I am an aspiring software engineering student focused on building clean, colorful, and accessible interfaces. 
        My short-term goal is to master dynamic web rendering structures, component state modularity, and cross-platform layouts.
      </p>
      <div className="mt-8">
        <button 
          onClick={() => setShowMore(!showMore)}
          className="px-6 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 rounded-xl shadow-md transition-all duration-200"
        >
          {showMore ? "Hide Extra Hobbies" : "Reveal My Hobbies"}
        </button>
      </div>
      {showMore && (
        <div className="mt-6 p-6 bg-white border border-emerald-100 rounded-2xl shadow-sm">
          <h3 className="font-bold text-slate-900 mb-4 text-xs tracking-wider uppercase">Passions Outside of Coding:</h3>
          <ul className="space-y-3 pl-1 text-slate-600">
            {hobbies.map((hobby, index) => (
              <li key={index} className="flex items-center gap-3 text-sm md:text-base">
                <span className="w-2 h-2 rounded-full bg-pink-500 shrink-0"></span>
                <span>{hobby}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}


function ProjectsSection() {
  const projects = [
    {
      id: 1,
      name: "Movie-theater-project",
      image: theaterImg,
      description: "Its a site of previewing Movies in trend. It is focusing on flex, padding and easier view of sites in small screens.",
      link: "https://github.com/Nargesyousufzada1/movie-theater-project",
      techStack: ["HTML tags", "CSS Modules"],
      featured: true
    },
    {
      id: 2,
      name: "Interactive Markdown Canvas",
      image: invoicesImage,
      description: "This project is for clients and invoices management. It focuses on JavaScript Functions.  ",
      link: "https://github.com/Nargesyousufzada1/freelance-project",
      techStack: ["CSS Modules", "LocalStorage"],
      featured: false
    },
    {
      id: 3,
      name: "Task Orchestrator Board",
      image: schoolImage,
      description: "this app facilitates students access to new courses and parents engagement.",
      link: "https://github.com/Nargesyousufzada1/School-Portal",
      techStack: ["HTML", "CSS", "JavaScript"],
      featured: true
    }
  ];

  return (
    <section id="projects" className="max-w-4xl mx-auto my-16 px-6 pb-16">
      <h2 className="text-3xl font-black text-slate-950 border-b-4 border-purple-400 inline-block pb-1 mb-10">
        Featured Projects
      </h2>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div key={project.id} className="relative flex flex-col justify-between bg-white border border-slate-100 shadow-sm rounded-2xl overflow-hidden">
            <div className="h-44 w-full bg-slate-100">
              <img src={project.image} alt={project.name} className="w-full h-full object-cover" />
            </div>
            {project.featured && (
              <span className="absolute top-3 right-3 px-2.5 py-1 text-[10px] font-black tracking-widest uppercase text-white bg-pink-500 rounded-full shadow-sm">
                Featured
              </span>
            )}
            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{project.name}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">{project.description}</p>
              </div>
              <div>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.techStack.map((tech, idx) => (
                    <span key={idx} className="text-[11px] px-2 py-0.5 font-semibold rounded bg-purple-50 text-purple-600 border border-purple-100">
                      {tech}
                    </span>
                  ))}
                </div>
                <a href={project.link} target="_blank" rel="noreferrer" className="text-xs font-bold text-pink-600 hover:underline">
                  View Code Repository →
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}


function Footer() {
  return (
    <footer className="w-full mt-auto py-10 bg-slate-900 text-slate-400 text-center px-6">
      <div className="flex justify-center gap-6 mb-4 text-sm font-medium">
        <a href="https://github.com/Nargesyousufzada1" target="_blank" rel="noreferrer" className="hover:text-pink-400">GitHub</a>
        <a href="https://www.linkedin.com/in/narges-yousufzada-0571a4366?utm_sourse=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noreferrer" className="hover:text-emerald-400">LinkedIn</a>
        <a href="narges.yousofzada1@gmail.com" target="_blank" rel="noreferrer" className="hover:text-purple-400">Email</a>
      </div>
      <p className="text-xs tracking-wide">
        &copy; {new Date().getFullYear()} Narges Yousufzada. All rights reserved.
      </p>
    </footer>
  );
}


export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white font-sans antialiased">
      <Navbar />
      <Header welcomeMessage="Welcome to my developer portfolio!" />
      <main className="flex-1">
        <About />
        <ProjectsSection />
      </main>
      <Footer />
    </div>
  );
}

