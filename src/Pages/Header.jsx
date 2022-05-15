import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
      {/* <!-- header section {hmtl and css combined } --> */}

      <header className="flex justify-between items-center py-8 px-12 shadow-lg shadow-slate-100">
        <a className="font-medium text-2xl text-secondary-100" href="/">
          <i className="fa fa-graduation-cap mx-2 text-main-100"></i>
          StudiesZone
        </a>
        <ul className="flex items-center space-x-4">
          <li className="hover:text-main-100">
            <Link to="/"> Home</Link>
          </li>
          <li className="hover:text-main-100">
            <Link to="/">About</Link>
          </li>
          <li className="hover:text-main-100">
            <Link to="/signup">Create account</Link>
          </li>
          <li className="hover:text-main-100">
            <Link to="/login"> Login</Link>
          </li>
        </ul>
      </header>
    </>
  )
}

export default Header
