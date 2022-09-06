import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  const data = [
    {
      name: "HTML/CSS/Js",
      title: "Learn building modern websites with html5 , css3 and js",
      price: "55",
      icon: "https://cdn-icons-png.flaticon.com/512/1253/1253466.png",
      slug: "html-css-js",
      view: "93k",
      content: "53 videos"
    },
    {
      name: "React developer",
      title: "Learn building modern websites with html5 , css3 and js",
      price: "55",
      icon: "https://cdn-icons-png.flaticon.com/512/1125/1125761.png",
      slug: "react-developer",
      view: "32k",
      content: "21 videos"
    },
    {
      name: "HTML/CSS/Js",
      title: "Learn building modern websites with html5 , css3 and js",
      price: "55",
      icon: "https://cdn-icons-png.flaticon.com/512/1253/1253466.png",
      slug: "html-css-js",
      view: "93k",
      content: "53 videos"
    },
    {
      name: "React developer",
      title: "Learn building modern websites with html5 , css3 and js",
      price: "55",
      icon: "https://cdn-icons-png.flaticon.com/512/1125/1125761.png",
      slug: "react-developer",
      view: "32k",
      content: "21 videos"
    }, {
      name: "HTML/CSS/Js",
      title: "Learn building modern websites with html5 , css3 and js",
      price: "55",
      icon: "https://cdn-icons-png.flaticon.com/512/1253/1253466.png",
      slug: "html-css-js",
      view: "93k",
      content: "53 videos"
    },
    {
      name: "React developer",
      title: "Learn building modern websites with html5 , css3 and js",
      price: "55",
      icon: "https://cdn-icons-png.flaticon.com/512/1125/1125761.png",
      slug: "react-developer",
      view: "32k",
      content: "21 videos"
    }, {
      name: "HTML/CSS/Js",
      title: "Learn building modern websites with html5 , css3 and js",
      price: "55",
      icon: "https://cdn-icons-png.flaticon.com/512/1253/1253466.png",
      slug: "html-css-js",
      view: "93k",
      content: "53 videos"
    },
    {
      name: "React developer",
      title: "Learn building modern websites with html5 , css3 and js",
      price: "55",
      icon: "https://cdn-icons-png.flaticon.com/512/1125/1125761.png",
      slug: "react-developer",
      view: "32k",
      content: "21 videos"
    }
  ]
  return (
    <section className='bg-gray-50 min-h-screen w-full'>
      <div className="h-[65px]"></div>
      <div className='md:w-[90%] mx-auto flex items-center justify-center flex-wrap p-4'>
        {/* content */}
        <div className='w-[90%] md:w-[50%] order-2 md:order-1'>
          <h1 className=' text-2xl md:text-5xl font-bold'>Never stop learning , stay connected with world of knowledge - <span className='text-purple'>studieszone</span></h1>
          <p className='my-6 text-md'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi tenetur fugit enim, deserunt veniam laborios</p>
          <Link className="py-3 block my-2 w-max bg-green text-white px-5" to="courses"> Explore courses</Link>
        </div>
        {/* hero image */}
        <img src="/hero.webp" alt="edtech" className='w-[90%] md:w-[50%] order-1 md:order-2' />
      </div>
      <section className='w-full border-t border-b mx-auto py-4 bg-slate-200'>
        <h4 className='text-center font-semibold text-xl py-4 '>Services we provide</h4>
        <div className='flex items-center justify-center flex-wrap'>
          {

            ["Live classes", "Dedicted mentor", "Dought sessions", "Weekly tests", "Placement preparation"].map(item =>
              <span className='py-2 rounded-md px-4 cursor-pointer hover:bg-green hover:text-white transition-all bg-white shadow-xl text-slate-700 mx-4 my-2'>{item}</span>
            )
          }

        </div>
      </section>
      {/* popular courses section */}
      <section className='py-6 bg-gray-100'>
        <h4 className='py-2 px-6 w-max rounded-2xl  bg-green/30 mx-auto text-xl font-semibold'>Popular course</h4>
        <section className='w-[90%] mx-auto flex items-center flex-wrap justify-center my-4'>
          {
            data.map((obj, index) =>
              <div key={index} className='shadow-sm rounded-lg transition-all group hover:bg-green  p-4 px-6 mx-2 my-2 w-[300px] bg-white '>
                <img src={obj.icon} className="w-16 h-16" alt="" />
                <h4 className='text-green  group-hover:text-white my-3 font-semibold'>{obj.name}</h4>
                <p className='text-slate-600  py-2 text-sm font-medium'> {obj.title}</p>

                <div className='flex py-2 items-center space-x-4'>

                  <p> <i className="group-hover:text-white fa fa-video mr-1 text-green"></i> {obj.content}</p>
                  <p> <i className="group-hover:text-white fa fa-eye mr-1 text-green"></i> {obj.view}</p>
                </div>
                <hr />
                <Link className='bg-green text-white group-hover:bg-white group-hover:text-green py-2 px-5 mt-4 block w-max text-sm font-semibold mx-auto rounded-md' to={`course/${obj.slug}`}>Join at only ${obj.price} <i className="fa fa-chevron-right"></i> </Link>
              </div>
            )
          }
        </section>

      </section>
      <section className='py-6 bg-gray-100'>
        <h4 className='py-2 px-6 w-max rounded-2xl  bg-green/30 mx-auto text-xl font-semibold'>What peoples says about us</h4>
        <section className='w-[90%] mx-auto flex items-center flex-wrap justify-center my-4'>
          <div className='bg-white overflow-hidden shadow-md mx-4 my-4 w-[420px] h-[200px] rounded-md flex items-center'>
            <img src="https://images.unsplash.com/photo-1603617902802-1a72cc4a50c8" className='w-[40%] h-full object-cover' alt="" />
            <div className='flex-1 h-full px-4 py-4'>
              <span className='space-x-1 text-sm text-green'>
                <i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i>
              </span>
              <h4 className='font-medium py-2 '>Rakesh Roy</h4>
              <p  className='text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, repellendus? Modi t nisi eum.</p>
              <p className='text-[8px] text-right text-slate-400 mt-4'>21/jan/2022</p>
            </div>
          </div>
        </section>

      </section>


    </section>
  )
}

export default Home