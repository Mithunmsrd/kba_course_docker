import logo from '../assets/images/kbalogo.png'

import Logout from './Logout'

const Navbar=()=>{
    return(
        <>
         <div className='bg-purple-100 text-purple-950 grid grid-cols-1 md:grid-cols-2 p-3 shadow-md'>
        <div className='flex items-center'>

            <a href="#" >
                <img className='m-1p-2 size-12' src={logo} alt="logo" />
            </a>
            
        </div>
        <div className='flex justify-center md:justify-end items-center mt-2 md:mt-0 space-x-5 md:space-x-10'>
            <a href="/home" className='ml-20'>Home</a>
            <a href="/courses" className='ml-20'>Courses</a>
            <a href="contact" className='ml-20'>Contact Us</a>
            <a href="/add_course" className='ml-20'>Add Course</a>
           <Logout/>
            
        </div>
        </div>
        
        </>
    )
}
export default Navbar