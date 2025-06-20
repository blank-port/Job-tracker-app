import React from 'react';

function JobList({ jobs, onDelete, onEdit }) {
  return (
    <div>
      <h3>Saved Jobs</h3>
      {jobs.length === 0 ? (
        <p>No jobs added yet.</p>
      ) : (
        <ul>
          {jobs.map((job, index) => (
            <li key={index}>
              <strong>{job.title}</strong> at {job.company} - {job.status}
              <div>
                <button onClick={() => onEdit(index)}>Edit</button>
                <button onClick={() => onDelete(index)}>Delete</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default JobList;
