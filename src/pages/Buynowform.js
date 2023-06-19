import React,{useState} from 'react'
//import FormRow from './FormRow';
import { useNavigate } from 'react-router-dom';
import Hero from '../assets/4164095.jpg';
import '../assets/loginform.css';
import SelectTextFields from '../components/Textfields';
import axios from 'axios';
const Buynowform = () => {
      let[sname, setName]=useState(''); 
      let[semail, setEmail] = useState('');
      let [spassword, setPassword] = useState('');
      let [smobileno, setMobileno] = useState('');
      let[saddress, setAddress] = useState('');
      
    const n=useNavigate()
    let Gobook = ()=>{
    n('/bookde')
    }
       let book = async(e)=> {
        e.preventDefault();
        let mydata={name:sname,email:semail,password:spassword,mobilenumber:smobileno,address:saddress}
         let res=await axios.post("http://localhost:8080/regdata/regpost",mydata) 
         alert(res.data); 
         
        }
        
        
        /*if(password==" " || email==" "){
    
        alert("fill the empty fields")
      }*/
      
    
  return (
    <main>
         <div className='hero'>
        <img src={Hero} alt='Hero image' className='hero_img' />
      </div>
      <div className='overlay1'>
      <div className='back'>
      <form class="form"  action=" " style={{borderWidth:'2mm',backgroundColor:'lightgray', border: '1px solid #ccc', padding: '20px', borderRadius: '5px' }}>
         <h2>Booking Order Form</h2><hr></hr>
         <div class="div3" style={{paddingBottom:'20px'}}>
          <label style={{backgroundColor:'lightgrey'}}>Name:</label><br></br>
          <input  required  class="c5" type="name"  color='white' placeholder='enter name' value={sname} onChange={(e) => setName(e.target.value)}/><br></br>
        </div >
        <div class="div2"style={{paddingBottom:'10px'}}>
          <label style={{backgroundColor:'lightgrey'}}>Email:</label><br></br>
          <input   required  class="c4"   type="email"  color='white' placeholder='enter email' value={semail}  onChange={(e)=>setEmail(e.target.value)}/><br></br>
        </div>
        <div class="div3" style={{paddingBottom:'20px'}}>
          <label style={{backgroundColor:'lightgrey'}}>Password:</label><br></br>
          <input  required  class="c5" type="password"  color='white' placeholder='enter password' value={spassword} onChange={(e) => setPassword(e.target.value)}/><br></br>
        </div >
        <div class="div3" style={{paddingBottom:'20px'}}>
          <label style={{backgroundColor:'lightgrey'}}>Mobile no:</label><br></br>
          <input  required  class="c5" type="mobile no"  color='white' placeholder='enter mobile no' value={smobileno} onChange={(e) => setMobileno(e.target.value)}/><br></br>
        </div >
        <div class="div3" style={{paddingBottom:'20px'}}>
          <label style={{backgroundColor:'lightgrey'}}>Address:</label><br></br>
          <input  required  class="c5" type="address"  color='white' placeholder='enter address' value={saddress} onChange={(e) => setAddress(e.target.value)}/><br></br>
        </div >
        <SelectTextFields/>
        <button class="btn" type="submit"  onClick={book}>Continue</button>
        
      </form>
     </div>
        </div>
        </main>
  )
}
export default Buynowform;