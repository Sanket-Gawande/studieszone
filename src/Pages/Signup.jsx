import React, { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from './Header'


const Signup = () => {
  const buttonSignup = useRef()
  const navigate = useNavigate()
  const obj = JSON.parse(localStorage.getItem('profile'))
  const user = obj?.user
  useEffect(() => {
    if (user) {
      navigate('/dashboard')
    }
  })
  async function checkFile(e) {
    const filename = e.target.files[0].name
    const arr = filename.split('.')
    const ext = arr.pop()
    if (ext !== 'pdf') {
      alert("Invalid file type , please upload  resume in '.pdf' format .")
      e.target.value = null
    }
  }
  //   signup code
  const base_url = import.meta.env.VITE_SERVER_BASE_URL

  async function submitACC(e) {
    e.preventDefault()
buttonSignup.current.innerHTML = "Please wait ..."
    const raw = await fetch(`${base_url}/signup`, {
      method: 'post',
      body: new FormData(e.target),
    })
    const result = await raw.json()

    if (result.msg) {
      buttonSignup.current.innerHTML = "Create account"
      alert(result.msg)
    } else {
      localStorage.setItem('profile', JSON.stringify(result))
      navigate('/dashboard')
    }
  }

  return (
    <>
      <Header />
      <p className="py-4 px-4 bg-slate-200  text-sm font-thin ">
        Home &gt; Signup
      </p>
      {/* <!-- signup form starts here  --> */}
      <div className="bg-slate-100 h-[calc(100vh-160px)] grid place-items-center">
        <form
          method="post"
          onSubmit={submitACC}
          className="bg-white shadow-sm p-8 w-[400px]"
        >
          <h2 className="mb-8 font-semibold">Register here !</h2>
          <input
            required
            type="text"
            placeholder="Name"
            className="rounded-md outline-0 my-4 block mx-auto text-secondary-100 px-2 py-1 border w-[90%]"
            name="name"
          />
          <input
            required
            type="date"
            name="dob"
            className="rounded-md outline-0 my-6 block mx-auto text-secondary-100 px-2 py-1 border w-[90%]"
          />
          <input
            required
            type="number"
            name="age"
            placeholder="Age"
            className="rounded-md outline-0 my-6 block mx-auto text-secondary-100 px-2 py-1 border w-[90%]"
          />
          <input
            required
            type="email"
            placeholder="email"
            className="rounded-md outline-0 my-4 block mx-auto text-secondary-100 px-2 py-1 border w-[90%]"
            name="email"
          />
          <h4 className="rounded-md outline-0 mt-4 mb-1 block mx-auto text-secondary-100 px-2 w-[90%] text-sm">
            Upload your resume in stanard pdf formdat.
          </h4>
          <input
            required
            type="file"
            name="resume"
            onChange={checkFile}
            className="fileInput rounded-md outline-0 mt-0 mb-4 block mx-auto text-secondary-100 px-2 py-1 border w-[90%]"
          />
          <input
            required
            type="password"
            placeholder="password"
            className="rounded-md outline-0 my-6 block mx-auto text-secondary-100 px-2 py-1 border w-[90%]"
            name="password"
          />
          <input
            required
            type="password"
            placeholder="confirm password"
            className="rounded-md outline-0 my-6 block mx-auto text-secondary-100 px-2 py-1 border w-[90%]"
            name="cpassword"
          />
          <button
          ref={buttonSignup}
            type="submit"
            className="rounded-md mx-[5%] bg-main-100 py-2 px-4 text-sm text-white"
          >
            Create account
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

export default Signup
