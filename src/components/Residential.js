import React from 'react'
import herobox from './../images/herobox5.png'
import curve2 from './../images/curve2.png'
import whatsApp from './../images/wa.png'
import gmail from './../images/mail.png'
import instagram from './../images/ins.png'
import linkedin from './../images/in.png'
import img3 from './../images/img3.png'
import img1 from './../images/img1.png'
import img2 from './../images/img2.png'
import img6 from './../images/img6.png'
import img7 from './../images/img7.png'
import img8 from './../images/img8.png'
import img9 from './../images/img9.png'
import img10 from './../images/img10.png'
import { Link } from 'react-router-dom'

function Residential() {
  return (
    <div>
        <div className='text-center text-white relative mb-10'>
          <img src={herobox} className='h-80 md:h-full brightness-50' alt='' />
          <div className='absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2'>
              <h1 className='text-3xl font-bold mb-2'> Residential </h1>
              <p>Main <i class="fa-sharp fa-solid fa-greater-than mx-2"></i>Projects <i class="fa-sharp fa-solid fa-greater-than mx-2"></i> Residential </p>
          </div> 
        </div>
      
        <div className='w-[90%] m-auto'>
            <div className='md:flex text-white flex-wrap justify-center items-center'>
                <Link to='/pro1' >
                    <div className='w-72 md:w-[95%] m-auto mb-5 relative'>
                        <img src={img3} alt=''/>
                        <p className='absolute bottom-0 bg-blue-500 text-center py-2 mt-5 w-full text-sm md:text-base m-auto'>Libra engineering,Electrical, ELV...</p>
                    </div>
                </Link>
                <Link to='/pro2'>
                    <div className='w-72 md:w-[95%] m-auto mb-5 relative'>
                        <img src={img1} alt=''/>
                        <p className='absolute bottom-0 bg-blue-500 text-center py-2 mt-5 w-full text-sm md:text-base m-auto'> Ikate lekki M&E Facility Maintenance </p>
                    </div>
                </Link>
                <Link to='/pro3'>
                    <div className='w-72 md:w-[95%] m-auto mb-5 relative'>
                        <img src={img2} alt=''/>
                        <p className='absolute bottom-0 bg-blue-500 text-center py-2 mt-5 w-full text-sm md:text-base m-auto'> Ikate lekki, plumbing and Air Conditioning</p>
                    </div>
                </Link>
                <Link to='/pro4'>
                    <div className='w-72 md:w-[95%] m-auto mb-5 relative'>
                        <img src={img10} alt=''/>
                        <p className='absolute bottom-0 bg-blue-500 text-center py-2 mt-5 w-full text-sm md:text-base m-auto'>Lafiaji Town, Lekki, Lagos, Fosal consult...</p>
                    </div>
                </Link>
                <Link to='/pro5'>
                    <div className='w-72 md:w-[95%] m-auto mb-5 relative'>
                        <img src={img6} alt=''/>
                        <p className='absolute bottom-0 bg-blue-500 text-center py-2 mt-5 w-full text-sm md:text-base m-auto'> Lagos VI, Kennings homes...</p>
                    </div>
                </Link>
                <Link to='/pro6'>
                    <div className='w-72 md:w-[95%] m-auto mb-5 relative'>
                        <img src={img7} alt=''/>
                        <p className='absolute bottom-0 bg-blue-500 text-center py-2 mt-5 w-full text-sm md:text-base m-auto'>Ridge park estate, Abraham Adesanya</p>
                    </div>
                </Link>
                <Link to='/pro7'>
                    <div className='w-72 md:w-[95%] m-auto mb-5 relative'>
                        <img src={img8} alt=''/>
                        <p className='absolute bottom-0 bg-blue-500 text-center py-2 mt-5 w-full text-sm md:text-base m-auto'>Lekki, Lagos. Fosal consulting</p>
                    </div>
                </Link>
                <Link to='/pro8'>
                    <div className='w-72 md:w-[95%] m-auto mb-5 relative'>
                        <img src={img9} alt=''/>
                        <p className='absolute bottom-0 bg-blue-500 text-center py-2 mt-5 w-full text-sm md:text-base m-auto'>King’s court estate, Abijo GRA.</p>
                    </div>
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

export default Residential