'use client'

import React from "react";

interface Job {
  title: string;
  company: string;
  location: string;
  type: string;
  description: string;
  requirements: string;
}

interface JobCardProps {
  jobs: Job[];
}

const JobCard = ({jobs}: JobCardProps): React.ReactElement => {
return(
    <div className="job-div">
        {jobs?.map((job, index) => (
                <div key={index} className="job-card">
                    <h2 className="text-lg font-bold">{job.title}</h2>
                    <p className="job-company">{job.company}</p>
                    <p className="job-location">{job.location}</p>
                    <p className="job-type">{job.type}</p>
                    <p className="job-description">{job.description}</p>
                    <p className="job-requirements">{job.requirements}</p>
                </div>
            ))}
    </div>
)
}

export default JobCard;