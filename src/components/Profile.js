import React from 'react'
import herobox from './../images/herobox3.png'
import curve2 from './../images/curve2.png'
import whatsApp from './../images/wa.png'
import gmail from './../images/mail.png'
import instagram from './../images/ins.png'
import linkedin from './../images/in.png'

function Profile() {
  return (
    <div>
      <div className='text-center text-white relative mb-10'>
        <img src={herobox} className='h-80 md:h-full brightness-50' alt='' />
        <div className='absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2'>
            <h1 className='text-3xl font-bold mb-2'> About </h1>
            <p>Main <i class="fa-sharp fa-solid fa-greater-than mx-2"></i> About <i class="fa-sharp fa-solid fa-greater-than mx-2"></i> Profile</p>
        </div> 
      </div>
      
      <div className='w-4/5 m-auto'>
        <p className='mb-5'>
          Liteville Engineering Company Limited is an indigenous engineering contracting firm 
          registered with the Corporate Affairs Commission. Over the years, the company has undertaken 
          quite a number of projects and accumulated skills, know - how and expertise in design, 
          installations and project management services in related engineering works
        </p>
        <h3 className='font-bold mb-2'> Our Objective: </h3>
        <p className='mb-5'>
          At Liteville is to execute projects with highest quality, on schedule and within budget while 
          adhering to global standard practices. <br /> Our emphasis on clear communication and follow 
          through procedures ensures that client’s objectives are top priority in the planning and execution 
          of all our processes
        </p>
        <h3 className='font-bold mb-2'> Our project management and execution philosophy </h3>
        <p className='mb-5'>
          To Create detail schedule and resources plan to meet client’s project objective, communicate clearly
          with all project stakeholders, Track project progress and fine tune deviations, Supervise closely 
          on quality of work done, Complete and commission the project on time. <br /> We take pride in our delivery,
          thus our clients can always be assured that only the most experienced and qualified people are 
          serving them, all the time.
        </p>
        <h3 className='font-bold mb-2'> Our Vision: </h3>
        <p className='mb-5'>
          To provide quality services for our clients delivering beyond expectation always  
        </p>
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

export default Profile