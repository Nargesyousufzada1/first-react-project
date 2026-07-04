import React, { useState } from 'react';

const ContactContainer = ({ theme }) => {
  const [formData, setFormData] = useState({ name: '', message: '' });
  const isDark = theme === 'dark';

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section style={{
      padding: '40px 20px',
      backgroundColor: isDark ? '#121212' : '#ffffff',
      color: isDark ? '#ffffff' : '#333333',
      borderTop: `1px solid ${isDark ? '#333' : '#eee'}`
    }}>
      <h2>Contact Me</h2>
      <div style={{ display: 'flex', gap: '40px', marginTop: '20px', flexWrap: 'wrap' }}>
        
        <div style={{ flex: 1, minWidth: '300px' }}>
          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '5px' }}>Name:</label>
            <input 
              type="text" 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
            />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '5px' }}>Message:</label>
            <textarea 
              name="message" 
              value={formData.message} 
              onChange={handleChange} 
              style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc', height: '100px' }}
            />
          </div>
          <button style={{ padding: '10px 20px', cursor: 'pointer', background: '#0070f3', color: '#fff', border: 'none', borderRadius: '4px' }}>Send</button>
        </div>

        
        <div style={{ 
          flex: 1, 
          minWidth: '300px', 
          padding: '20px', 
          borderRadius: '8px', 
          backgroundColor: isDark ? '#1e1e1e' : '#f0f0f0',
          border: `2px dashed ${isDark ? '#444' : '#ccc'}`
        }}>
          <h3>Live Preview</h3>
          <p><strong>From:</strong> {formData.name || 'Your Name'}</p>
          <p><strong>Message:</strong> {formData.message || 'Your message will appear here live...'}</p>
        </div>
      </div>
    </section>
  );
};

export default ContactContainer;
