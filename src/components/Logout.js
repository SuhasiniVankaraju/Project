import React from "react";
import Hero from '../assets/4164095.jpg';
//import PlantOrderForm from './components/Pageformorder';
const Logout=()=>{
  return(
      <main>
      <div className='hero'>
        <img src={Hero} alt='Hero image' className='hero_img' />
        </div>
        <div className='overlay'>
   <center><h2 className="logout">You are logout successfully...</h2></center> 
   </div>
   </main>
  )
}
export default Logout