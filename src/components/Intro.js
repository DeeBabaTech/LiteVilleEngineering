import React from 'react'
import herobox from './../images/herobox3.png'
import curve2 from './../images/curve2.png'
import whatsApp from './../images/wa.png'
import gmail from './../images/mail.png'
import instagram from './../images/ins.png'
import linkedin from './../images/in.png'

function Intro() {
  return (
    <div>
      <div className='text-center text-white relative mb-10'>
        <img src={herobox} className='h-80 md:h-full brightness-50' alt='' />
        <div className='absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2'>
            <h1 className='text-3xl font-bold mb-2'> About </h1>
            <p>Main <i class="fa-sharp fa-solid fa-greater-than mx-2"></i> About <i class="fa-sharp fa-solid fa-greater-than mx-2"></i> Intro</p>
        </div> 
      </div>
      
      <div className='w-4/5 m-auto'>
        <p className='mb-5'>
          Liteville Engineering Company  Ltd. is a fast growing contracting firm  in the field of electrical and mechanical engineering.
        </p>
        <p className='mb-5'>
          The company was incorporated in 2013. Over the years, the company has undertaken a 
          number of projects and expressed expertise in design, installation, maintenance , 
          contracting & infrastructure with real estate development.
        </p>
        <p className='mb-5'>
          The company’s excellence stems from a team of  highly experienced  working directors 
          with 38 years combined experience in various disciplines; some of which holds degrees 
          from reputable institutions of higher learning and areregistered members of various 
          engineering societies.
        </p>
        <p className='mb-5'>
          Under the constant supervision of experienced engineers, our staffs perform their 
          task professionally and delivers best quality beyond expectation.  
        </p>
      </div>

        <div className='text-center text-white relative'>
            <img src={curve2} className='h-[55rem] md:h-full' alt='' />
            <div className='absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2'>
                <h1 className='text-lg mb-2'> LET'S CONSIDER IT </h1>
                <p className='mb-5'> Always here for you</p>
                <form action=''>
                    <input className='bg-[#056db7] outline-none border-b-2 mb-6 md:mb-0 md:mr-5 w-60' type='text' placeholder='*Full Name' />
                    <input className='bg-[#056db7] outline-none border-b-2 w-60' type='email' placeholder='*Email Address' /> <br /> <br/>
                    <input className='bg-[#056db7] outline-none border-b-2 mb-6 md:mb-0 md:mr-5 w-60' type='text' placeholder='*Phone Number' />
                    <input className='bg-[#056db7] outline-none border-b-2 w-60' type='text' placeholder='*Subject' />
                    <p className='text-left md:mt-5 mt-10'>*Required Fields</p>
                </form>
                <input type='submit' value='SEND >' className='outline outline-white outline-2 text-center w-fit m-auto md:mt-5 mt-10 px-3' />
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

export default Intro