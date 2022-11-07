import React from 'react'
import herobox2 from './../images/herobox2.png'
import about1 from './../images/about1.png'
import about2 from './../images/about2.png'
import about3 from './../images/about3.png'
import curve2 from './../images/curve2.png'
import whatsApp from './../images/wa.png'
import gmail from './../images/mail.png'
import instagram from './../images/ins.png'
import linkedin from './../images/in.png'
import { Link } from 'react-router-dom'

function About() {
  return (
    <div>
      <div className='text-center text-white relative mb-10'>
        <img src={herobox2} className='h-80 md:h-full brightness-50' alt='' />
        <div className='absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2'>
            <h1 className='text-3xl font-bold mb-2'> About </h1>
            <p>Main <i class="fa-sharp fa-solid fa-greater-than mx-2"></i> About</p>
        </div> 
      </div>
      <div className='text-white relative'>
        <img src={about2} className='h-[30rem] md:h-full brightness-50' alt='' />
        <div className='absolute top-[50%] md:left-[40%] left-[5%] md:-translate-x-1/2 -translate-x-[0%] -translate-y-1/2'>
            <h1 className='text-3xl text-red-600 font-bold mb-2'> Intro </h1>
            <p className='text-xl mb-5'> 
              Liteville Engineering Company  Ltd. is a fast growing contracting firm  in the field of electrical and mechanical engineering.
              The company was incorporated in 2013. Over the years, the company has undertaken a number of projects and expressed expertise in 
              design, installation, maintenance , contracting & infrastructure with real estate development.
            </p>
            <Link to='/intro' className='text-2xl text-red-600 font-semibold'>
              Read More
            </Link>
        </div>
      </div>
      <div className='text-white relative'>
        <img src={about3} className='h-80 md:h-full brightness-50' alt='' />
        <div className='absolute top-[50%] md:left-[50%] left-[5%] -translate-y-1/2'>
            <h1 className='text-3xl text-red-600 font-bold mb-2'> Profile </h1>
            <p className='text-xl mb-5'> 
              Liteville Engineering Company Limited is an indigenous engineering contracting firm
              registered with the Corporate Affairs Commission. 
            </p>
            <Link to='/profile' className='text-2xl text-red-600 font-semibold'>
              Read More
            </Link>
        </div>
      </div>
      <div className='text-white relative'>
        <img src={about1} className='h-80 md:h-full brightness-50' alt='' />
        <div className='absolute top-[50%] md:left-[50%] left-[5%] -translate-y-1/2'>
            <h1 className='text-3xl text-red-600 font-bold mb-2'> Customer </h1>
            <p className='text-xl'> 
              Liteville Engineering Company Limited is an indigenous engineering contracting firm
              registered with the Corporate Affairs Commission. 
            </p>
            <h1 className='text-2xl text-red-600 font-semibold mt-5'> Read More </h1>
        </div>
      </div>
      <div className='text-center text-white relative'>
            <img src={curve2} className='h-[55rem] md:h-full' alt='' />
            <div className='absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2'>
                <h1 className='text-lg mb-2'> LET'S CONSIDER IT </h1>
                <p className='mb-5'> Always here for you</p>
                <div className=''>
                    <input className='bg-[#056db7] outline-none border-b-2 mb-6 md:mb-0 md:mr-5 w-72' type='text' placeholder='*Full Name' />
                    <input className='bg-[#056db7] outline-none border-b-2 w-72' type='email' placeholder='*Email Address' /> <br /> <br/>
                    <input className='bg-[#056db7] outline-none border-b-2 mb-6 md:mb-0 md:mr-5 w-72' type='text' placeholder='*Phone Number' />
                    <input className='bg-[#056db7] outline-none border-b-2 w-72' type='text' placeholder='*Subject' />
                    <p className='text-left md:mt-5 mt-10'>*Required Fields</p>
                </div>
                <h2 type='submit' value='Submit' className='outline outline-white outline-2 text-center w-fit m-auto md:mt-5 mt-10 px-3'>SEND <i class="fa-sharp fa-solid fa-greater-than ml-2"></i></h2>
            </div> 
        </div>

        <div className='text-center mb-10'>
            <div className='flex justify-center mb-10'>
                <a href='/' className='mr-2'> <img src={whatsApp} alt ='whatsApp link' /> </a>
                <a href='/' className='mr-2'> <img src={gmail} alt ='whatsApp link' /> </a>
                <a href='/' className='mr-2'> <img src={instagram} alt ='whatsApp link' /> </a>
                <a href='/'> <img src={linkedin} alt ='whatsApp link' /> </a>
            </div>
            <div className='md:flex justify-center mt-5 text-sm'>
                <p className='mr-5 md:mr-0'>LITEVILLE ENGINEERING COMPANY  &#169;  2022. </p> 
                <p>Copyright All Right Reserved</p>
            </div>
        </div>

    </div>
  )
}

export default About