import React from 'react';

const Footer = ({ theme }) => {
  const isDark = theme === 'dark';
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{
      padding: '20px',
      textAlign: 'center',
      backgroundColor: isDark ? '#121212' : '#0f172a',
      color: isDark ? '#888888' : '#ffffff',
      borderTop: `1px solid ${isDark ? '#222' : '#eaeaea'}`,
      fontSize: '14px',
      transition: 'all 0.3s ease'
    }}>
       <div className="flex justify-center   gap-6 mb-4 text-sm font-medium">
        <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-pink-400">GitHub</a>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-emerald-400">LinkedIn</a>
        <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-purple-400">Twitter</a>
      </div>
      <p className="text-xs tracking-wide">
        &copy; {new Date().getFullYear()} Narges Yousufzada. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
