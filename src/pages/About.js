import Hero from '../assets/12.jpg';
const About = () => {
  return (
    <main>
       <div className='hero'>
        <img src={Hero} alt='Hero image' className='hero_img' />
      </div>
      <div className='overlaya'>
    <div className="hi"> 
     <center><h2 className="hlo">ABOUT</h2></center> 
      <p className="hru">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur,
        vero obcaecati accusantium quaerat, tenetur,quibusdam quo id hic minima
        quisquam ut sint ipsam ad voluptatem laboriosam aliquid molestias
        deserunt. Illo. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Quae ducimus ab ut dolor accusamus incidunt aliquid recusandae sunt modi
        quia odio earum iure, optio, nihil fugiat magni, accusantium consequatur
        esse.
      </p>
      </div>
    </div>
    
    </main>
  );
};

export default About;
