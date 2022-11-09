import React from 'react'
import herobox from './../images/herobox.png'
import ellip1 from './../images/ellip1.png'
import ellip2 from './../images/ellip2.png'
import ellip3 from './../images/ellip3.png'
import img1 from './../images/img1.png'
import img2 from './../images/img2.png'
import img3 from './../images/img3.png'
import curve from './../images/curve.png'
import curve2 from './../images/curve2.png'
import whatsApp from './../images/wa.png'
import gmail from './../images/mail.png'
import instagram from './../images/ins.png'
import linkedin from './../images/in.png'
import { Link } from 'react-router-dom'

function Home() {

  return (
    <div>
        <img src={herobox} className='h-52 z-0 md:h-full w-full' alt='' />
        
        <div className='w-[90%] m-auto'>
            <h2 className='text-xl font-bold text-center py-5 md:py-12'>Activities</h2>
            <div className='md:flex justify-between items-center'>
                <div className='md:w-[40%]'>
                    <img className='md:w-[60%] w-[50%] m-auto duration-700 hover:scale-110' src={ellip1} alt='' />
                    <div className='text-center mt-5 font-bold'> Maintenance </div>
                    <p className='text-center mt-2'>
                        One of our pride assets is in our after-sales service. We are  always eager to
                        <Link to='/maintenance' >
                        <span className='text-slate-400 hover:text-blue-700'> ...Read More</span>
                        </Link>
                    </p>
                    
                </div>
                <div className='md:w-[40%] pt-10 md:pt-0'>
                    <img className='md:w-[60%] w-[50%] m-auto duration-700 hover:scale-110' src={ellip3} alt='' />
                    <div className='text-center mt-5 font-bold'> Procurement </div>
                    <p className='text-center mt-2'>
                        Liteville  procures most of her materials and equipment primarily from
                        <Link to='/procurement' >
                        <span className='text-slate-400 hover:text-blue-700'> ...Read More</span>
                        </Link> 
                    </p>
                </div>
                <div className='md:w-[40%] pt-10 md:pt-0'>
                    <img className='md:w-[60%] w-[50%] m-auto duration-700 hover:scale-110' src={ellip2} alt='' />
                    <div className='text-center mt-5 font-bold'> M & E Installation </div>
                    <p className='text-center mt-2'>Our installations are carried out by experienced and trained profession</p>
                </div>
            </div>
            <h2 className='text-xl text-blue-500 outline outline-blue-500 outline-2 font-bold text-center w-fit m-auto md:my-20 my-10 px-5'>Activities <i class="fa-sharp fa-solid fa-greater-than ml-2 align-middle"></i></h2>
        </div>

        <div className='relative text-white'>
            <img src={curve} className='h-[57rem] md:h-full' alt='' />
            <div className='md:flex justify-between w-[90%] m-auto absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2'>
                <Link to='/pro1' >
                    <div className='w-56 md:w-full m-auto mb-5 relative'>
                        <div className='overflow-hidden'>
                            <img className='duration-700 hover:scale-110' src={img3} alt=''/>
                        </div>
                        <p className='absolute bottom-0 bg-blue-500 text-center py-2 mt-5 w-full text-sm md:text-base m-auto'>Libra engineering,Electrical, ELV...</p>
                    </div>
                </Link>
                <Link to='/pro2'>
                    <div className='w-56 md:w-full m-auto mb-5 relative'>
                        <div className='overflow-hidden'>
                            <img className='duration-700 hover:scale-110' src={img1} alt=''/>
                        </div>
                        <p className='absolute bottom-0 bg-blue-500 text-center py-2 mt-5 w-full text-sm md:text-base m-auto'> Ikate lekki M&E Facility maintenance</p>
                    </div>
                </Link>
                <Link to='/pro3'>
                    <div className='w-56 md:w-full m-auto mb-5 relative'>
                        <div className='overflow-hidden'>
                            <img className='duration-700 hover:scale-110' src={img2} alt=''/>
                        </div>
                        <p className='absolute bottom-0 bg-blue-500 text-center py-2 mt-5 w-full text-sm md:text-base m-auto'> Ikate lekki, plumbing and air conditioning</p>
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
                <input type='submit' value='SEND >' className='outline outline-white outline-2 text-center w-fit m-auto md:mt-5 mt-10 px-3' />
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

export default Home