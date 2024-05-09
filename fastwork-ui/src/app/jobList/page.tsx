
import SearchBar from '../section/SearchBar';
import NavBar from '../section/navBar/NavBar'
import JobCard from '@/components/JobCard'

export default function JobPage (): React.ReactNode {

  const categories = [
    "Development and IT",
    "AI Services",
    "HR and Training",
    "Graphic and Design",
    "Marketing and Advertising",
    "Write and Translate"
  ];

    const jobDataList = [ // Sample list of job data
    {
      title: 'Software Engineer',
      company: 'ABC Tech',
      location: 'New York',
      type: 'Full-time',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      requirements: 'Minimum 3 years of experience in software development.'
    },
    {
      title: 'Data Scientist',
      company: 'XYZ Corp',
      location: 'San Francisco',
      type: 'Remote',
      description: 'Pellentesque nec neque eu quam tempus ultrices.',
      requirements: 'Proficiency in Python, R, and machine learning algorithms.'
    },
  ];
    
  return (
    <div 
    className='flex flex-col min-h-screen w-full'
    style={{
        background: 'linear-gradient( 89.5deg,  rgba(66,144,251,1) 0.4%, rgba(131,204,255,1) 100.3% )',
      }}
    >
      <NavBar showOnlyLogo></NavBar>
     <SearchBar></SearchBar>
      <div className="flex">
        <div className="job-category">
          <h2 className='font-semibold text-center'>Work Category</h2>
          {categories.map((category, index) => (
            <div key={index} className="py-2 border-b border-gray-400">{category}</div>
          ))}
        </div>
          <JobCard jobs={jobDataList} />
      </div>
    </div>
  )
}
