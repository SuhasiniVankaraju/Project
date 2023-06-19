import { useState } from 'react';
import { data } from '../data';
import { useNavigate } from 'react-router-dom';

const allCategories = ['all', ...new Set(data.map((item) => item.category))];

const Plants = () => {
  const n=useNavigate()
  const Gobuynowform=()=>{
    n('/buynowform')
  }
  const [items, setItems] = useState(data);
  const [categories, setCategories] = useState(allCategories);

  const filteredItems = (category) => {
    if (category === 'all') {
      setItems(data);
      return;
    }
    setItems(data);
    const newItems = data.filter((item) => item.category === category);
    setItems(newItems);
  };
  return (
    <div>
      <ul className='menu-item'>
        {categories.map((category, index) => {
          return (
            <li key={index}>
              <button
                onClick={() => filteredItems(category)}
                className='filter-btn'
              >
                {category}
              </button>
            </li>
          );
        })}
      </ul>
      <hr />

      <div className='items'>
        {items.map((item) => {
          const { id, plantName, price, img } = item;
          return (
            <section key={id} className='img_section'>
              <img src={img} alt={plantName} />
              <div>
                <h5>{plantName}</h5>
                <p>$ {price}</p>
                <button className='btn' onClick={Gobuynowform} >BUY NOW</button>
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
};

export default Plants;
