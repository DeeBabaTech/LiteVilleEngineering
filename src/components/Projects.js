import React from 'react'
import herobox from './../images/herobox5.png'
import curve2 from './../images/curve2.png'
import whatsApp from './../images/wa.png'
import gmail from './../images/mail.png'
import instagram from './../images/ins.png'
import linkedin from './../images/in.png'
import img5 from './../images/img5.png'
import img4 from './../images/img4.png'
import { Link } from 'react-router-dom'

function Projects() {
  return (
    <div>
        <div className='text-center text-white relative mb-10'>
          <img src={herobox} className='h-80 md:h-full w-full brightness-50' alt='' />
          <div className='absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2'>
              <h1 className='text-3xl font-bold mb-2'> Projects </h1>
              <p>Main <i class="fa-sharp fa-solid fa-greater-than mx-2"></i> Projects </p>
          </div> 
        </div>
      
        <div className='w-[90%] m-auto'>
            <div className='md:flex flex-wrap justify-center items-center'>
                <Link to='/residential' className='md:w-[33%]'>
                    <img className='w-[60%] m-auto mt-5 md:mt-0' src={img5} alt='' />
                    <div className='text-center md:my-5 my-3'> Residential </div>
                </Link>
                <Link to='/church' className='md:w-[33%]'>
                    <img className='w-[60%] m-auto mt-5 md:mt-0' src={img4} alt='' />
                    <div className='text-center md:my-5 my-3'> Church </div>
                </Link>
            </div>
        </div>

        <div className='text-center text-white relative'>
            <img src={curve2} className='h-[55rem] md:h-full w-full' alt='' />
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
                <a href='https://wa.link/hred3l' className='mr-2'> <img src={whatsApp} alt ='whatsApp link' /> </a>
                <a href='mailto:info@litevilleengineering.com' className='mr-2'> <img src={gmail} alt ='gmail' /> </a>
                <a href='/' className='mr-2'> <img src={instagram} alt ='instagram link' /> </a>
                <a href='https://linkedin.com/KolawoleOyelade'> <img src={linkedin} alt ='linkedIn link' /> </a>
            </div>
            <div className='md:flex justify-center mt-5 text-sm'>
                <p className='mr-5 md:mr-0'>LITEVILLE ENGINEERING COMPANY  &#169;  2022. </p> 
                <p>Copyright All Right Reserved</p>
            </div>
        </div>

    </div>
  )
}

export default Projects