import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    
    <header className='bg-white fixed top-0 w-full shadow-md '>
      <div className='flex justify-between w-[90%] mx-auto py-3 items-center h-[65px] '>
        <Link to={"/"}>
          <img src="/logo.png" className='md:w-36 w-28 object-contain' alt="logo" />
        </Link>
        <ul className='md:space-x-4 flex absolute md:relative md:top-auto top-[100%] border-t md:border-none bg-white w-full justify-center space-x-4 left-0 md:w-max'>
          {
            ["Home", "About", "Courses"].map(item =>
              <li><Link to={item.toLowerCase()}>{item}</Link></li>
            )
          }
        </ul>
        <div>
          <Link className='text-green' to={"login "}> Login</Link>
          <Link to={"register"} className="bg-green py-2 px-5 text-white mx-4">Register</Link>
        </div>
      </div>
    </header>
  )
}

export default Header