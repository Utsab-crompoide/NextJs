
import NavBar from '../section/navBar/NavBar'
import JobDescription from '@/components/JobDescription'

export default function LoginPage (): React.ReactNode {
  return (
    <div 
    className='flex flex-col min-h-screen w-full'
    >
      <NavBar showOnlyLogo></NavBar>
      <JobDescription></JobDescription>
    </div>
  )
}
