import React from 'react';
import theaterImg from "./assets/theater-p.png";
import schoolImage from "./assets/School-p.png";
import invoicesImage from "./assets/Invoices-p.png";

const ProjectsSection = ({ theme }) => {
  
  const projects = [
    { 
      id: 1, 
      name: "School Management System", 
      image: schoolImage, 
      description: "A Comprehensive data control of students and courses", 
      link: "https://github.com/Nargesyousufzada1/School-Portal", 
      techStack: ["React", "Tailwind CSS", "Recharts"], 
      featured: true 
    },
    { 
      id: 2, 
      name: "Invoice app", 
      image: invoicesImage, 
      description: "An app empowering bussines for storage of clients and invoices data", 
      link: "https://github.com/Nargesyousufzada1/freelance-project", 
      techStack: ["ReactJS", "CSS Modules", "LocalStorage"], 
      featured: false 
    },
    { 
      id: 3, 
      name: "Theater Project", 
      image: theaterImg, 
      description: "A site showing on trend movies", 
      link: "https://github.com/Nargesyousufzada1/movie-theater-project", 
      techStack: ["React", "Tailwind CSS", "Context API"], 
      featured: true 
    }
  ];

  const isDark = theme === 'dark';

  return (
    <section style={{ 
      padding: '40px 20px', 
      backgroundColor: isDark ? '#1a1a1a' : '#f9f9f9', 
      color: isDark ? '#ffffff' : '#333333', 
      transition: 'all 0.3s ease' 
    }}>
      <h2>My Projects</h2>
      
      <div style={{ 
        display: 'flex', 
        gap: '20px', 
        marginTop: '20px',
        flexWrap: 'wrap' 
      }}>
        {projects.map(proj => (
          <div key={proj.id} style={{ 
            border: `1px solid ${isDark ? '#444' : '#ccc'}`, 
            padding: '20px', 
            borderRadius: '8px', 
            flex: '1 1 calc(33.333% - 20px)', 
            minWidth: '280px',
            backgroundColor: isDark ? '#2d2d2d' : '#ffffff',
            boxSizing: 'border-box',
            display: 'flex',          
            flexDirection: 'column'  
          }}>
            
            <img 
              src={proj.image} 
              alt={proj.name} 
              style={{ 
                width: '100%', 
                height: '200px', 
                objectFit: 'cover', 
                borderRadius: '6px', 
                marginBottom: '15px' 
              }} 
            />
            
            <h3 style={{ margin: '0 0 10px 0' }}>{proj.name}</h3>
            <p style={{ margin: '0 0 15px 0', fontSize: '14px', lineHeight: '1.5' }}>{proj.description}</p>
            
            
            <a 
              href={proj.link} 
              target="_blank" 
              rel="noreferrer" 
              style={{ 
                marginTop: 'auto', 
                color: isDark ? '#4da6ff' : '#0066cc', 
                textDecoration: 'none', 
                fontWeight: '500',
                fontSize: '14px',
                display: 'inline-block'
              }}
            >
              View Repository →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;

