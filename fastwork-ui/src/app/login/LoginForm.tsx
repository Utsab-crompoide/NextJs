'use client'
import Button from '@/components/Button'
import Link from 'next/link'
import Form from '@/components/Form'
import InputField from '@/components/InputField'
import * as Yup from 'yup'

interface LoginFormValues {
  email: string
  password: string
}

const initialValues: LoginFormValues = {
  email: '',
  password: ''
}

const validationSchema = Yup.object().shape({
  email: Yup.string().email().required().label('Email'),
  password: Yup.string().required().label('Password')
})

export const LoginForm = (): React.ReactNode => {

  const onSubmit = async (
    values: { [key: string]: any }
  ): Promise<void> => {
    try {
        console.log('Log in form submitted:', values)
    } catch (error: any) {
      console.log('Error logging in:', error.message)
    }
  }

  return (
    <>
      <h1 className='text-black font-bold text-lg text-center pb-6'>Log in</h1>
      <Form
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <div className='mb-6'>
          <InputField label='Email Address' name='email' type='email' placeholder='Your Email' />
        </div>
        <div className='mb-6'>
          <InputField label='Password' name='password' type='password' placeholder='Your Password' />
        </div>
        <Button type='submit' variant='btn-primary text-white w-full'>Login</Button>
        <div className='text-center mb-4 mt-3'>
          <Link className='inline-block text-black hover:text-green-600 hover:underline pl-1 text-sm' href='/forgot-password'>Forgot your password?</Link>
        </div>
        <div className='mt-4 mx-9 text-black'>
          New to website?
          <Link
            href='/register'
            className='text-green-600 hover:text-green-800 underline pl-2'
          >
            Create a new account
          </Link>
        </div>
      </Form>
      </>
  )
}
