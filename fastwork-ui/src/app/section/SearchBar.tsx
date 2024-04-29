'use client'

import Button from "@/components/Button"

const SearchBar = (): React.ReactNode => {
    return(
        <section className="py-16 px-4 md:px-0 bg-gray-100">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-8 text-black">Search for Jobs</h2>
          <input type="text" placeholder="Search for jobs..." className="w-full md:w-96 rounded-lg py-3 px-4 border border-gray-300 focus:outline-none focus:border-blue-500 mb-6 text-black" />
          <Button variant="btn btn-primary text-white md:w-40 rounded-lg h-12">Search</Button>
        </div>
      </section>
    )
}

export default SearchBar