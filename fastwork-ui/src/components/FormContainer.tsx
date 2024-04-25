import React from 'react'

const FormContainer = ({ children }: { children: React.ReactNode }): React.ReactNode => {
  return (
    <section className='bg-blue-900 flex-grow bg-gray-2'>
      <div className=' bg-blue-900 container mx-auto px-4 sm:px-6 py-12 h-full flex justify-center items-center'>
        <div className=' bg-white px-4 sm:px-10 py-10 rounded-lg mt-32 my-2.5'>
          {children}
        </div>
      </div>
    </section>
  )
}

export default FormContainer
