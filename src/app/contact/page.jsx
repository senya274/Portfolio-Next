import React from 'react'
import Navbar from "../components/Navbar";
import Link from 'next/link';
const ContactPage = () => {
  return (
    <div className='w-screen h-screen bg-dark-blue'>
       <Navbar></Navbar>
      <div className="py-24 text-center">
      <h1 className='text-title-color text-center uppercase text-4xl   md:text-5xl md: mb-12'>Let's get in touch</h1>
      <div className="flex flex-col gap-12 text-4xl text-white ">
      <div className="">
        <Link href="https://t.me/senya_s24" target='_blank' className='uppercase px-4 w-full text-white text-center text-4xl transition-all duration-100 ease-in-out rounded-xl border-b-2 hover:border-t-2 border-title-color'>Telegram</Link>
      </div>
      <div className="">
      <Link href="mailto:senya2470@gmail.com" target='_blank' className='uppercase px-4 w-full text-white text-center text-4xl transition-all duration-100 ease-in-out rounded-xl border-b-2 hover:border-t-2 border-title-color'>E-mail</Link>
      </div>
      <div className="">
        <Link href="https://www.linkedin.com/in/synbohdan/" target='_blank' className='uppercase px-4 w-full text-white text-center text-4xl transition-all duration-100 ease-in-out rounded-xl border-b-2 hover:border-t-2 border-title-color'>LinkedIn</Link>
      </div>
      <div className="">
      <Link href="https://github.com/senya274" target='_blank' className='uppercase px-4 w-full text-white text-center text-4xl transition-all duration-100 ease-in-out rounded-xl border-b-2 hover:border-t-2 border-title-color'>Github</Link>
      </div>
      <div className="">
      <Link href="https://www.work.ua/resumes/8680822/" target='_blank' className='uppercase px-4 w-full text-white text-center text-4xl transition-all duration-100 ease-in-out rounded-xl border-b-2 hover:border-t-2 border-title-color'>Resume</Link>
      </div>
      </div>
      
      </div>
    </div>
  )
}

export default ContactPage