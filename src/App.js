import { BrowserRouter, Route, Routes } from 'react-router-dom';
//npm install react-router-dom
import { Home, About, Plants, Error, Contact } from './pages';
import Navbar from './components/Navbar';
import Login1 from './pages/Login1';
import Logout from './components/Logout';
//import Orderform from './pages/Orderform';
import SelectTextFields from './components/Textfields';
import UseFormControl from './components/Textfield2';
import Success  from './pages/Orderd';
import CreateSvgIcon from './components/Hlogo';
import Signup1 from './pages/Signup1';
import Buynowform from './pages/Buynowform';
import { TextFields } from '@mui/icons-material';
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='plants' element={<Plants />} />
        <Route path='login1' element={<Login1/>} />
        <Route path='logout' element={<Logout />} />
        <Route path='signup1' element={<Signup1/>}/>
       <Route path='buynowform' element={<Buynowform/>}/>
       <Route path='selecttextfields' element={<SelectTextFields/>}/>
       <Route path='useformcontrol' element={<TextFields/>}/>
       <Route path='success' element={<Success/>}/>
       <Route path='icon' element={<CreateSvgIcon/>}/>
        <Route path='*' element={<Error />} />
        
      </Routes>
      <Contact />
    </BrowserRouter>
  );
};

export default App;
