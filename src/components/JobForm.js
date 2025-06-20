import React, { useState, useEffect } from 'react';

function JobForm({ onSave, jobToEdit }) {
  const [title, setTitle] = useState('');
  const [company, setCompany] = useState('');
  const [status, setStatus] = useState('Applied');

  useEffect(() => {
    if (jobToEdit) {
      setTitle(jobToEdit.title);
      setCompany(jobToEdit.company);
      setStatus(jobToEdit.status);
    }
  }, [jobToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const job = { title, company, status };
    onSave(job);
    setTitle('');
    setCompany('');
    setStatus('Applied');
  };
   

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Job Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Company"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
        required
      />
      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option>Applied</option>
        <option>Interviewing</option>
        <option>Rejected</option>
        <option>Hired</option>
      </select>
      <button type="submit">{jobToEdit ? 'Update Job' : 'Add Job'}</button>
    </form>
  );
}

export default JobForm;
