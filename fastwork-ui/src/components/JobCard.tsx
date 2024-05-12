'use client'

import React from "react";
import Image from 'next/image'
import location from "@/../public/location-pin.svg"

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
  const handleJobClick = () => {
    console.log('Job card clicked');
    window.location.href = '/description'
  }

return(
  <div className="job-div">
      <h2 className='font-bold text-xl m-4'> All Jobs</h2>
        {jobs?.map((job, index) => (
                <div key={index} className="job-card" onClick={handleJobClick}>
                    <h2 className="text-lg font-bold">{job.title}</h2>
                    <div className="flex flex-row justify-between">
                    <p className="font-semibold">{job.company}</p>
                    <div className="flex flex-row">
                    <Image className="w-5 h-5" src={location} alt='' style={{ filter: 'grayscale(100%)' }}/> 
                    <p className="text-sm">{job.location}</p>
                    </div>
                    </div>
                    <p className="job-type">{job.type}</p>
                    <p className="job-description">{job.description}</p>
                    <p className="job-requirements">{job.requirements}</p>
                </div>
            ))}
    </div>
)
}

export default JobCard;