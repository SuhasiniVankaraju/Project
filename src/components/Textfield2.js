import React,{useState} from 'react'
import FormRow from './FormRow';
//import Hero from '../assets/111213.jpg';
import { useNavigate } from 'react-router-dom';
import Hero from '../assets/4164095.jpg';
import SelectTextFields from './Textfields';
const initialState = {
  name:'',
  email: '',
  password: '',
  mobilenumber:'',
  address:'',

};
const UseFormControl = () => {
  const n=useNavigate()
  const Gosuccess=()=>{
    n('/success')
  }
  const [values, setValues] = useState(initialState);
 const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  }
// { type, name, value, handleChange, labelText }
     return(
    <main className='order'>
         <div className='hero'>
        <img src={Hero} alt='Hero image' className='hero_img' />
      </div>
      <div className='overlay3'>
    <div className='oback'>
        <form class="form" onSubmit={handleSubmit} style={{borderWidth:'2mm',backgroundColor:'lightgray', border: '1px solid #ccc', padding: '20px', borderRadius: '5px' }}>
         <h3>GROW green Order form</h3>
         <FormRow  type='Name' name='name' value={values.name} handleChange={handleChange}/>
        <FormRow  type='Email' name='email' value={values.email} handleChange={handleChange}/>
        <FormRow  type='Password' name='password' value={values.password} handleChange={handleChange}/>
        <FormRow  type='Mobile number' name='mobile number' value={values.mobilenumber} handleChange={handleChange}/>
        <SelectTextFields/>
        <FormRow  type='Address' name='address' value={values.address} handleChange={handleChange}/>
        <button class="btn" type="submit"  onClick={Gosuccess}>Continue</button> 
      </form>
    </div>
    </div>
    </main>
    
  )
}

export default UseFormControl;


