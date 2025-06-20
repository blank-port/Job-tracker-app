import './App.css';
import React, { useState, useEffect } from 'react';
import JobForm from './components/JobForm';
import JobList from './components/JobList';

function App() {
  // Get saved jobs from localStorage when app loads
  const [jobs, setJobs] = useState(() => {
    const saved = localStorage.getItem('jobs');
    return saved ? JSON.parse(saved) : [];
  });

  const [editIndex, setEditIndex] = useState(null);

  // Save jobs to localStorage whenever jobs change
  useEffect(() => {
    localStorage.setItem('jobs', JSON.stringify(jobs));
  }, [jobs]);

  // Add or update a job
  const addOrUpdateJob = (job) => {
    if (editIndex !== null) {
      const updatedJobs = [...jobs];
      updatedJobs[editIndex] = job;
      setJobs(updatedJobs);
      setEditIndex(null);
    } else {
      setJobs([...jobs, job]);
    }
  };

  // Delete a job
  const deleteJob = (index) => {
    const newJobs = jobs.filter((_, i) => i !== index);
    setJobs(newJobs);
  };

  // Edit a job
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
