import FormContainer from '@/components/FormContainer'
import { RegisterForm } from './RegisterForm'
import Footer from '../footer'

const RegisterPage = (): React.ReactNode => {
  return (
    <div className='min-h-screen w-full'>
      <FormContainer>
        <RegisterForm />
      </FormContainer>
    </div>
  )
}

export default RegisterPage
