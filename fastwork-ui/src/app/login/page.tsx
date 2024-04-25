import FormContainer from '@/components/FormContainer'
import { LoginForm } from '@/app/login/LoginForm'
import Footer from '../footer'

export default function LoginPage (): React.ReactNode {
  return (
    <div className='flex flex-col min-h-screen w-full'>
      <FormContainer>
        <LoginForm />
      </FormContainer>
      <div className='flex items-end'>
        <Footer />
      </div>
    </div>
  )
}
