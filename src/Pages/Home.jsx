import React from 'react'
import Footer from './Footer'
import Header from './Header'

const Home = () => {
  return (
    <>
      
<Header/>
      {/* <!-- banner section --> */}

      <div className="flex justify-center items-center flex-col md:flex-row md:p-8 lg:p-12">
        {/* <!-- content div  --> */}
        <div className="w-full md:w-[50%] py-10 px-8 order-4 md:order-1 md:px-4">
          <h2 className="text-4xl font-bold">Welcome to StudiesZone</h2>
          <p className="text-slate-800 text-md my-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            aut fugit aspernatur debitis ad veniam consequatur dolorem molestiae
            ratione, voluptatem exercitationem molestias animi sed incidunt.
            Ullam, earum. Perspiciatis necessitatibus ab provident repudiandae,
            et quisquam, praesentium iure minus repellendus aliquam velit!
          </p>
          <button className="px-8 py-3 bg-main-100 text-white rounded-sm">
            Explore more !
          </button>
        </div>

        {/* <!-- banner here  --> */}
        <img
          src="/assets/images/hero.png"
          alt="banner "
          className="order-2 md:w-[50%] p-8"
        />
      </div>
      {/* <!-- simple footer component  --> */}
      <Footer/>
    </>
  )
}

export default Home
