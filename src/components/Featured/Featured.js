import './Featured.css';
import Shoes1 from '../../Images/shoe-4.png';
import Shoes2 from '../../Images/shoe-5.png';
import Shoes3 from '../../Images/shoe-6.png';

const Featured = () => {
  return (
    <>
      <section className='featured' id='featured'>
        <div className='container'>
          <h2 className='section-title'>Produk Terpopuler</h2>
          <div className='split'>
            <a href='#hero' className='featured__item'>
              <img src={Shoes1} alt='' className='featured__img' />
              <p className='featured__details'>
                <span className='price'>1250K</span>Nike 250
              </p>
            </a>
            <a href='#hero' className='featured__item'>
              <img src={Shoes2} alt='' className='featured__img' />
              <p className='featured__details'>
                <span className='price'>1200K</span>Adidas 5A
              </p>
            </a>
            <a href='#hero' className='featured__item'>
              <img src={Shoes3} alt='' className='featured__img' />
              <p className='featured__details'>
                <span className='price'>990K</span>Nike Air
              </p>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Featured;
