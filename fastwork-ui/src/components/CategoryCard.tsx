'use client'

import Image from 'next/image'
import ai from "@/../public/ai.svg";
import hr from "@/../public/hr.svg";
import design from "@/../public/design.svg";
import marketing from "@/../public/marketing.svg";
import prog from "@/../public/prog.svg";
import translate from "@/../public/translate.svg";

const CategoryCard = (): React.ReactElement => {
    return(
        <section className="bg-gray-200 py-16 px-4 md:px-0">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-8 text-black">Job Category</h2>
          {/* Replace the following with actual job listings */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-lg font-bold mb-2 text-black">Development and IT</h3>
              <div className="ml-4">
              <Image src={prog} alt='Development' priority className='lg:w-60 max-w-full h-auto hidden sm:block sm:w-20' />
              </div>
              <p className="text-sm text-gray-700 mt-2">Empower innovation in Development and IT.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-lg font-bold mb-2 text-black">AI Services</h3>
              <div className="ml-4">
              <Image src={ai} alt='AI Services' priority className='lg:w-60 max-w-full h-auto hidden sm:block sm:w-20' />
              </div>
              <p className="text-sm text-gray-700 mt-2">Explore exciting opportunities in AI services.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-lg font-bold mb-2 text-black">HR and Training</h3>
              <div className="ml-4">
              <Image src={hr} alt='HR Training' priority className='lg:w-60 max-w-full h-auto hidden sm:block sm:w-20' />
              </div>
              <p className="text-sm text-gray-700 mt-2">Transform organizations through HR and Training.</p>
            </div>
          </div>
        </div>
        <div className="max-w-5xl mx-auto text-center mt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-lg font-bold mb-2 text-black">Graphic and Design</h3>
              <div className="ml-4">
              <Image src={design} alt='Graphic Design' priority className='lg:w-60 max-w-full h-auto hidden sm:block sm:w-20' />
              </div>
              <p className="text-sm text-gray-700 mt-2">Unlock your creative potential in Graphic Design.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-lg font-bold mb-2 text-black">Marketing and advertising</h3>
              <div className="ml-4">
              <Image src={marketing} alt='Marketing' priority className='lg:w-60 max-w-full h-auto hidden sm:block sm:w-20' />
              </div>
              <p className="text-sm text-gray-700 mt-2">Dive into the dynamic world of Marketing and Advertising.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-lg font-bold mb-2 text-black">Write and translate</h3>
              <div className="ml-4">
              <Image src={translate} alt='Translate' priority className='lg:w-60 max-w-full h-auto hidden sm:block sm:w-20' />
              </div>
              <p className="text-sm text-gray-700 mt-2">Unlock your linguistic talents in Writing and Translation.</p>
            </div>
          </div>
        </div>
      </section> 
    )
}

export default CategoryCard;