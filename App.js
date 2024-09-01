// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import RegisterCandidate from './pages/RegisterCandidate';
import ManageBatches from './pages/ManageBatches';

const App = () => {
  return (
    <Router>
      <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
        <header style={{ textAlign: 'center', marginBottom: '20px' }}>
          <h1 style={{ color: '#333', fontSize: '2.5em', margin: 0 }}>Skill Enhancement Application</h1>
        </header>
        <nav style={{
          backgroundColor: '#333',
          padding: '10px 20px',
          borderRadius: '5px',
          marginBottom: '20px',
          textAlign: 'center'
        }}>
          <ul style={{
            listStyle: 'none',
            padding: 0,
            margin: 0,
            display: 'flex',
            justifyContent: 'space-around',
          }}>
            <li><Link to="/register" style={{
              color: '#fff',
              textDecoration: 'none',
              padding: '10px 20px',
              backgroundColor: '#007bff',
              borderRadius: '5px',
              transition: 'background-color 0.3s',
            }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#0056b3'}
              onMouseLeave={(e) => e.target.style.backgroundColor = '#007bff'}
            >Register Candidate</Link></li>
            <li><Link to="/batches" style={{
              color: '#fff',
              textDecoration: 'none',
              padding: '10px 20px',
              backgroundColor: '#28a745',
              borderRadius: '5px',
              transition: 'background-color 0.3s',
            }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#218838'}
              onMouseLeave={(e) => e.target.style.backgroundColor = '#28a745'}
            >Manage Batches</Link></li>
          </ul>
        </nav>
        <div style={{
          backgroundColor: '#f8f9fa',
          padding: '20px',
          borderRadius: '5px',
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
          marginBottom: '20px',
        }}>
          <Routes>
            <Route path="/register" element={<RegisterCandidate />} />
            <Route path="/batches" element={<ManageBatches />} />
          </Routes>
        </div>
        <section style={{
          backgroundColor: '#e9ecef',
          padding: '15px',
          borderRadius: '5px',
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        }}>
          <h2 style={{ color: '#343a40', marginBottom: '10px' }}>Batch Allocation Criteria</h2>
          <p style={{ color: '#495057' }}>
            Candidates will be automatically allocated to training batches based on the following criteria:
          </p>
          <ul style={{ color: '#495057' }}>
            <li><strong>Java Batch:</strong> Candidates with AWS certification or any Java certification.</li>
            <li><strong>.NET Batch:</strong> Candidates with Azure certification or any .NET certification.</li>
            <li><strong>Data Engineering Batch:</strong> Candidates with Python certification.</li>
          </ul>
        </section>
      </div>
    </Router>
  );
};

export default App;
