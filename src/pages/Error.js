import { Link } from 'react-router-dom';
import Error404 from '../assets/6325254.jpg';

const Error = () => {
  return (
    <div className='page'>
      <img src={Error404} alt='error404' className='error' />
      <Link to='/' className='btn'>
        Back to Home
      </Link>
    </div>
  );
};

export default Error;
