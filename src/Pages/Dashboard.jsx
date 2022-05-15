import React, { useEffect, useState } from 'react'
import Footer from './Footer'
import HeaderD from './HeaderD'
import Header from './Header'
import axios from 'axios'
import json from './data.json'

const Dashboard = () => {
  const data = json

  const base_url = import.meta.env.VITE_SERVER_BASE_URL
  const obj = JSON.parse(localStorage.getItem('profile'))
  const user = obj?.user
  if (!user) {
    return (
      <>
        <Header />
        <div className="grid min-h-[calc(100vh-180px)] place-items-center">
          <h2 className="bg-yellow-400 py-4 px-8">
            <i class="fa-solid fa-circle-exclamation mr-4"></i>
            Something went wrong , please login to your account !
          </h2>
        </div>
        <Footer />
      </>
    )
  }
  return (
    <>
      <HeaderD />
      <p className="py-4 px-4 bg-slate-200  text-sm font-thin ">
        Home &gt; Dashboard
      </p>
      <div className="flex justify-between flex-col md:flex-row items-center bg-slate-100 h-[calc(100vh-180px)] p-4 md:p-8 lg:px-40">
        {/* user card div  */}

        <div className="p-8 bg-white shadow-md shadow-slate-300 w-[90%] md:w-auto">
          <h2 className="text-main-100 text-3xl font-semibold">{user.name}</h2>
          <p className="text-md text-slate-400 my-4">{user.email}</p>
          <p className="inline-block font-medium text-[12px] text-slate-800">
            <b> DOB : </b> {user.dob}
          </p>{' '}
          |{' '}
          <p className="inline-block font-medium text-[12px] text-slate-800">
            <b> Age : </b>
            {user.age} years
          </p>
          <a
            href={`${base_url}/${user.resume}`}
            target="_blank"
            className="block mt-4 text-center bg-main-100 rounded-md text-white py-2 px-4 w-full"
          >
            Show resume
          </a>
        </div>

        <div className="mx-4 min-w-[450px] p-4 md:p-8 h-full overflow-y-scroll w-[90%] md:w-auto my-4">
          {data?.map((obj) => {
            return (
              <div className="bg-white  shadow-sm p-8 my-4 w-full md:w-[450px]">
                <h4 className="text-main-100 text-lg font-semibold my-2">
                  Company name : {obj.companyName}
                </h4>
                <h4 className="text-slate-800 mb-2">
                  Department : {obj.companyDepartment}
                </h4>
                <p className="text-sm text-slate-900 my-1">
                  Email : {obj.email}
                </p>
                <p className="text-sm text-slate-900 my-1">
                  Phone :{obj.phone}
                </p>
                <p className="text-slate-700 my-2 text-[12px] text-right">
                  Posted on : {obj.dateToday}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Dashboard
