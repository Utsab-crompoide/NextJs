import React from 'react'
import Header from './Header'

interface FormContainerProps {
  children: React.ReactNode,
  className?: string
}

const FormContainer = ({ children, className = ' ' }: FormContainerProps): React.ReactNode => {
  return (
    <section
      className='flex-grow'
      style={{
        background: 'linear-gradient(to right, #009245, #FCEE21)',
      }}
    >
      <div className='w-full'>
        <Header></Header>
      </div>
      <div className={`${className} container mx-auto px-4 sm:px-6 pb-24 h-full flex justify-center items-center`}>
        <div className='bg-gray-100 px-4 sm:px-10 py-10 rounded-lg mt-20 my-2.5'>
          {children}
        </div>
      </div>
    </section>
  )
}

export default FormContainer
