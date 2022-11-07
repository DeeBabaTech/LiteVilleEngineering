import React from 'react'
import herobox from './../images/herobox4.png'
import curve2 from './../images/curve2.png'
import whatsApp from './../images/wa.png'
import gmail from './../images/mail.png'
import instagram from './../images/ins.png'
import linkedin from './../images/in.png'
import ellip4 from './../images/ellip4.png'
import ellip1 from './../images/ellip1.png'
import ellip2 from './../images/ellip2.png'
import ellip3 from './../images/ellip3.png'
import { Link } from 'react-router-dom'

function Activities() {
  return (
    <div>
        <div className='text-center text-white relative mb-10'>
          <img src={herobox} className='h-80 md:h-full brightness-50' alt='' />
          <div className='absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2'>
              <h1 className='text-3xl font-bold mb-2'> Activities </h1>
              <p>Main <i class="fa-sharp fa-solid fa-greater-than mx-2"></i> Activities </p>
          </div> 
        </div>
      
        <div className='w-4/5 m-auto md:text-center mb-24'>
            Liteville Engineering's areas of expertise are: engineering design, supply & M&E installation 
            (electrical, ELV, air conditioning, fire prevention & fighting system and plumbing systems),  
            procurement and maintenance to meet client need.
        </div>

        <div className='w-[90%] m-auto'>
            <div className='md:flex flex-wrap justify-between items-center'>
                <div className='md:w-[33%]'>
                    <img className='w-[60%] m-auto' src={ellip4} alt='' />
                    <div className='text-center md:my-5 my-3'> M&E Design </div>
                    <p className='text-center w-[90%] m-auto'>Our design department consists of professionals whose expertise  </p>
                </div>
                <div className='md:w-[33%] mt-5 md:mt-0'>
                    <img className='w-[60%] m-auto' src={ellip2} alt='' />
                    <div className='text-center md:my-5 my-3'> M&E Installation </div>
                    <p className='text-center w-[90%] m-auto'> Our installations are carried out by experienced and trained profession  </p>
                </div>
                <Link to='/procurement' className='md:w-[33%]'>
                    <img className='w-[60%] m-auto mt-5 md:mt-0' src={ellip3} alt='' />
                    <div className='text-center md:my-5 my-3'> Procurement </div>
                    <p className='text-center w-[90%] m-auto'> Liteville  procures most of her materials and equipment primarily from </p>
                </Link>
                <Link to='/maintenance' className='w-full m-auto'>
                   <img className='md:w-[20%] w-[60%] m-auto mt-5' src={ellip1} alt='' />
                   <div className='text-center md:my-5 my-3'> Maintenace </div>
                   <p className='text-center md:w-[30%] w-[90%] m-auto'> One of our pride assets is in our after-sales service. We are  always eager to  </p>
                </Link>
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

export default Activities