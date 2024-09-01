// src/pages/ManageBatches.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ManageBatches = () => {
  const [candidates, setCandidates] = useState([]);
  const [batches, setBatches] = useState({
    javaBatch: [],
    dotNetBatch: [],
    dataEngineeringBatch: []
  });

  useEffect(() => {
    axios.get('/api/candidates')
      .then(response => {
        setCandidates(response.data);
        allocateToBatches(response.data);
      })
      .catch(error => console.error(error));
  }, []);

  const allocateToBatches = (candidates) => {
    const javaBatch = [];
    const dotNetBatch = [];
    const dataEngineeringBatch = [];

    candidates.forEach(candidate => {
      if (candidate.certifications.includes('AWS') || candidate.certifications.includes('Java')) {
        javaBatch.push(candidate);
      }
      if (candidate.certifications.includes('Azure') || candidate.certifications.includes('.NET')) {
        dotNetBatch.push(candidate);
      }
      if (candidate.certifications.includes('Python')) {
        dataEngineeringBatch.push(candidate);
      }
    });

    setBatches({ javaBatch, dotNetBatch, dataEngineeringBatch });
  };

  return (
    <div>
      <h1>Manage Batches</h1>

      <p>Java Batch</p>
      <ul>
        {batches.javaBatch.map(candidate => (
          <li key={candidate.id}>{candidate.name}</li>
        ))}
      </ul>

      <p>.NET Batch</p>
      <ul>
        {batches.dotNetBatch.map(candidate => (
          <li key={candidate.id}>{candidate.name}</li>
        ))}
      </ul>

      <p>Data Engineering Batch</p>
      <ul>
        {batches.dataEngineeringBatch.map(candidate => (
          <li key={candidate.id}>{candidate.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ManageBatches;
