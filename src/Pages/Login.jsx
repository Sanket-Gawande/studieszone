import React, { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from './Header'
const Login = () => {
  const buttonLogin= useRef();
  const navigate = useNavigate()
  const obj = JSON.parse(localStorage.getItem('profile'))
  const user = obj?.user
  useEffect(() => {
    if (user) {
      navigate('/dashboard')
    }
  })
  const base_url =import.meta.env.VITE_SERVER_BASE_URL
  async function submitLogin(e) {
    e.preventDefault()
buttonLogin.current.innerHTML = "Please wait..."
    const raw = await fetch(`${base_url}/login`, {
      method: 'post',
      body: new FormData(e.target),
    })
    const result = await raw.json()
    console.log({ result })
    if (result.msg) {
      buttonLogin.current.innerHTML = "Login"
      alert(result.msg)
    } else {
      localStorage.setItem('profile', JSON.stringify(result))
      navigate('/dashboard')
    }
  }
  return (
    <>
    <Header/>
      {/* <!-- login form starts here  --> */}
      <p className="py-4 px-4 bg-slate-200  text-sm font-thin ">
        Home &gt; Login
      </p>
      <div className="bg-slate-100 h-[calc(100vh-160px)] grid place-items-center">
        <form
          onSubmit={submitLogin}
          className="bg-white shadow-sm p-8 w-[400px]"
        >
          <h2 className="mb-8 font-semibold">Login here !</h2>
          <input
            required
            type="text"
            placeholder="email"
            className="rounded-md outline-0 my-4 block mx-auto text-secondary-100 px-2 py-1 border w-[90%]"
            name="email"
          />
          <input
            required
            type="password"
            placeholder="password"
            className="rounded-md outline-0 my-6 block mx-auto text-secondary-100 px-2 py-1 border w-[90%]"
            name="password"
          />
          <button
          ref={buttonLogin}
            type="submit"
            className="rounded-md mx-[5%] bg-main-100 py-2 px-4 text-sm text-white"
          >
            Login !
          </button>
        </form>
      </div>
      {/* <!-- simple footer component  --> */}
      <footer className="sticky top-[100%] bottom-0 py-4 bg-slate-800 border-t-4 border-main-100 h-[80px]">
        <div className="flex justify-between px-16 py-2">
          <a className="font-medium text-md text-zinc-200" href="/">
            <i className="fa fa-graduation-cap mx-2 text-main-100"></i>
            StudiesZone
          </a>

          <ul className="flex items-center space-x-4">
            <li className="hover:text-main-100 text-white">
              <a href="./signup.html">Create account</a>
            </li>
            <li className="px-6 py-2 rounded-md bg-main-100 text-white">
              <a href="./login.html">Login</a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  )
}

export default Login
