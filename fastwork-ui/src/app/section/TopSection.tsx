import Link from "next/link"
import Header from "@/components/Header"

const TopSection = (): React.ReactNode => {
    return(
      <section className="text-white py-16 px-4 md:px-0 flex flex-col md:flex-row items-center">
          <Header className="mt-[-256px]"></Header>
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Find Your Dream Job</h1>
          <p className="text-lg md:text-xl mb-8">Discover thousands of job opportunities.</p>
          <div className="flex flex-col md:flex-row justify-center items-center">
          <Link href='/login' className='btn bg-green-500 text-white w-48 rounded-lg h-12 mb-4 md:mr-4 md:mb-0 flex items-center justify-center'>Get Started</Link>
          </div>
        </div>
      </section>
    )
}

export default TopSection;