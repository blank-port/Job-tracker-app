import './App.css';

import React, { useState, useEffect } from 'react';
import JobForm from './components/JobForm';
import JobList from './components/JobList';

function App() {
  const [jobs, setJobs] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  // Load jobs from localStorage
  useEffect(() => {
    const storedJobs = localStorage.getItem('myJobs');
    if (storedJobs) {
      setJobs(JSON.parse(storedJobs));
    }
  }, []);

  // Save jobs to localStorage
  useEffect(() => {
    localStorage.setItem('myJobs', JSON.stringify(jobs));
  }, [jobs]);

  const addOrUpdateJob = (job) => {
    if (editIndex !== null) {
      const updated = [...jobs];
      updated[editIndex] = job;
      setJobs(updated);
      setEditIndex(null);
    } else {
      setJobs([...jobs, job]);
    }
  };

  const deleteJob = (index) => {
    const filtered = jobs.filter((_, i) => i !== index);
    setJobs(filtered);
  };

  const editJob = (index) => {
    setEditIndex(index);
  };

  return (
    <div className="container">
      <h2>Job Tracker App</h2>
      <JobForm
        onSave={addOrUpdateJob}
        jobToEdit={editIndex !== null ? jobs[editIndex] : null}
      />
      <JobList
        jobs={jobs}
        onDelete={deleteJob}
        onEdit={editJob}
      />
    </div>
  );
}

export default App;
