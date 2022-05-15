import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="sticky top-[100%] bottom-0 py-4 bg-slate-800 border-t-4 border-main-100">
      <div className="flex justify-between px-4 md:px-16 py-2">
        <a className="font-medium text-md  text-zinc-200" href="/">
          <i className="fa fa-graduation-cap mx-2 text-main-100"></i>
          StudiesZone
        </a>

        <ul className="flex items-center space-x-4">
          <li className="hover:text-main-100 text-white hidden md:inline-block">
            <Link to="/signup">Create account</Link>
          </li>
          <li className=" px-6 py-2 rounded-md bg-main-100 text-white">
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </div>
      <p className="text-slate-200 text-center">
        All rights are reserved @2022
      </p>
    </footer>
  )
}

export default Footer
