import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div style={{
      textAlign: 'center',
      padding: '60px 20px'
    }}>
      
      <h1 style={{ fontSize: '3rem', color: '#333' }}>404</h1>
      <h2 style={{ marginBottom: '20px' }}>Page Not Found</h2>

      <p style={{ marginBottom: '30px' }}>
        The page you are looking for doesn't exist or has been moved.
      </p>

      <Link 
        to="/" 
        style={{
          padding: '10px 20px',
          backgroundColor: '#2874f0',
          color: 'white',
          textDecoration: 'none',
          borderRadius: '4px'
        }}
      >
        Go Back Home
      </Link>
    </div>
  );
}
