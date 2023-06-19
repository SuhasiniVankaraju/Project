import { contactData } from '../data';

const Contact = () => {
  return (
    <div className=' contact'>
      <ul className='contact_list_outer'>
        {contactData.map((item) => {
          return (
            <li key={item.label}>
              {item.label}
              <hr />
              <ul className='contact_list_inner'>
                {item.items.map((list) => (
                  <li key={list}>{list}</li>
                ))}
              </ul>
            </li>
          );
        })}
      </ul>
      <div className='contact_address'>
        <h5>Contact Address</h5>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor debitis
          fugiat, tempore ullam molestias minima ratione illum tenetur aliquam
          odio reiciendis perspiciatis alias id sit nisi dignissimos quam, nemo
          quia?
        </p>
      </div>
    </div>
  );
};

export default Contact;
