import React, { useState } from 'react';

const FeedbackWall = ({ theme }) => {
  const isDark = theme === 'dark';
  const [feedbacks, setFeedbacks] = useState([
    { id: 1, user: "Alex", text: "Amazing developer! Highly recommended." },
    { id: 2, user: "Sam", text: "Beautiful portfolio and clean layout." }
  ]);
  const [newFeedback, setNewFeedback] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newFeedback.trim()) return;
    setFeedbacks([...feedbacks, { id: Date.now(), user: "Guest", text: newFeedback }]);
    setNewFeedback('');
  };

  return (
    <section style={{
      padding: '40px 20px',
      backgroundColor: isDark ? '#1a1a1a' : '#f9f9f9',
      color: isDark ? '#ffffff' : '#333333',
      borderTop: `1px solid ${isDark ? '#333' : '#eee'}`
    }}>
      <h2>Feedback Wall</h2>
      
      {/* Wall Postings */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '15px', margin: '20px 0' }}>
        {feedbacks.map(fb => (
          <div key={fb.id} style={{
            padding: '15px',
            borderRadius: '8px',
            backgroundColor: isDark ? '#2d2d2d' : '#ffffff',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
          }}>
            <p style={{ fontStyle: 'italic' }}>"{fb.text}"</p>
            <small style={{ color: '#888' }}>- {fb.user}</small>
          </div>
        ))}
      </div>

      {/* Leave Feedback Form */}
      <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '10px' }}>
        <input 
          type="text" 
          placeholder="Leave a quick note on my wall..." 
          value={newFeedback}
          onChange={(e) => setNewFeedback(e.target.value)}
          style={{ flex: 1, padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
        />
        <button type="submit" style={{ padding: '8px 15px', background: '#22c55e', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Post</button>
      </form>
    </section>
  );
};

export default FeedbackWall;
