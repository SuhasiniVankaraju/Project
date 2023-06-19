import { Link } from 'react-router-dom';
import Hero from '../assets/4164095.jpg';

const Home = () => {
  return (
    <main>
       <div className='hero'>
        <img src={Hero} alt='Hero image' className='hero_img' />
      </div>
      <div className='overlay'>
        <h1>
          Plant seeds of happiness,
          <br />
          nurture them with care, <br />
          and watch your home blossom with joy
        </h1>
        <Link className='btn'>Buy & Grow Now</Link>
      </div>
    </main>
  );
};

export default Home;
