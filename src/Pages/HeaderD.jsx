import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
const Header = () => {
  const navigate = useNavigate()
  const logout = () => {
    localStorage.setItem('profile', null)
    navigate('/login')
  }
  return (
    <>
      {/* <!-- header section {hmtl and css combined } --> */}

      <header className="flex justify-between items-center py-8 md:px-12 px-8 shadow-lg shadow-slate-100">
        <a className="font-medium text-lg  md:text-2xl text-secondary-100" href="/">
          <i className="fa fa-graduation-cap mx-2 text-main-100"></i>
          StudiesZone
        </a>
        <ul className="flex items-center space-x-4">
        

          <li className=" bg-main-100 py-2 px-6 text-white rounded-md ">
            <button onClick={logout}>Logout</button>
          </li>
        </ul>
      </header>
    </>
  )
}

export default Header
