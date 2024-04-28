import FormContainer from '@/components/FormContainer'
import { LoginForm } from '@/app/login/LoginForm'
import Footer from '../footer'
import Header from '@/components/Header'

export default function LoginPage (): React.ReactNode {
  return (
    <div 
    className='flex flex-col min-h-screen w-full'
    >
      <FormContainer className='pt-20'>
        <LoginForm />
      </FormContainer>
    </div>
  )
}
