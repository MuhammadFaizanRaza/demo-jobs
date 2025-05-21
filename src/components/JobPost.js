import React from 'react';

const JobPost = ({ job }) => {
  return (
    <div className='job-details-card'>
      <div className='job-header'>
        <img src={job.logo} alt={job.jobTitle + ' logo'} className='job-logo' />
        <div>
          <h2 className='job-title'>{job.jobTitle}</h2>
          <p className='job-location'>{job.location}</p>
        </div>
      </div>

      <div className='job-meta'>
        <p>
          <strong>Address :</strong> {job.address.replace('Address :', '')}
        </p>
        {job.salary && (
          <p>
            <strong>Salary :</strong> {job.salary.replace('Salary :', '')}
          </p>
        )}

        {job.contractLength && (
          <p>
            <strong>Contract Length :</strong>{' '}
            {job.contractLength.replace('Contract length :', '')}
          </p>
        )}
        {job.closingDate && (
          <p>
            <strong>Closing Date:</strong>{' '}
            {job.closingDate.replace('Closing date :', '')}
          </p>
        )}
      </div>

      <div className='job-contact'>
        {job.email && (
          <p>
            <strong>Email:</strong>{' '}
            <a href={`mailto:${job.email}`}>{job.email}</a>
          </p>
        )}

        {job.website && (
          <p>
            <strong>Website:</strong>{' '}
            <a href={job.website} target='_blank' rel='noreferrer'>
              {job.website}
            </a>
          </p>
        )}

        {job.contactNumber && (
          <p>
            <strong>Contact Number:</strong>{' '}
            <a href={`tel:${job.contactNumber}`}>{job.contactNumber}</a>
          </p>
        )}
      </div>

      <div className='job-description'>
        <h3>Job Description</h3>
        <div
          dangerouslySetInnerHTML={{
            __html: `${job.description}`,
          }}
        />
      </div>
    </div>
  );
};

export default JobPost;
