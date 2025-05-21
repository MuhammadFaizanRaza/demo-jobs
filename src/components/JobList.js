import React, { useState } from 'react';
import JobPost from './JobPost';

const JobList = ({ jobs }) => {
  const [selectedJob, setSelectedJob] = useState(null);

  const handleJobClick = (job) => {
    setSelectedJob(job.id === selectedJob ? null : job.id);
  };

  return (
    <div className='job-list'>
      <h1>Available Job Postings</h1>

      {jobs.map((job) => (
        <div key={job.id} className='job-list-item'>
          <div className='job-summary' onClick={() => handleJobClick(job)}>
            <h3 className='job-heading'>
              <img
                src={job.logo}
                alt={job.jobTitle + ' logo'}
                className='job-logo'
                width='50'
                height='50'
              />
              <span className='job-title'>{job.jobTitle}</span>
            </h3>
            <div className='job-summary-details'>
              <span>{job.location}</span> |<span>{job.contractLength}</span> |
              <span>{job.salary}</span>
            </div>
          </div>

          {selectedJob === job.id && <JobPost job={job} />}
        </div>
      ))}
    </div>
  );
};

export default JobList;
