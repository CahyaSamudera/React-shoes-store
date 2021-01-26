import './About.css';
import Sepatu1 from '../../src/Images/shoe-1.png';
import Sepatu2 from '../../src/Images/shoe-2.png';

const About = () => {
  return (
    <>
      <section className='m-3 about'>
        <div className='about-area section-padding 30'>
          <div className='container'>
            <div className='row align-items-center justify-content-between padding-130'>
              <div className='col-lg-5 col-md-6'>
                <div className='about-details mb-40'>
                  <h2>Lorem Ipsum</h2>
                  <p>
                    Enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                    irure dolor in reprehenderit in voluptate velit esse.
                  </p>
                  <a href='#hero' className='btn btn-about'>
                    Belanja
                  </a>
                </div>
              </div>
              <div className='col-lg-6 col-md-6 col-sm-10'>
                <div className='about-img mb-40'>
                  <img src={Sepatu1} className='img-fluid' alt='' />
                </div>
              </div>
            </div>
            <div className='row align-items-center justify-content-between'>
              <div className='col-lg-6 col-md-6 col-sm-10'>
                <div className='about-img mb-40'>
                  <img src={Sepatu2} className='img-fluid' alt='' />
                </div>
              </div>
              <div className='col-lg-5 col-md-6'>
                <div className='about-details mb-40'>
                  <h2>Lorem Ipsum</h2>
                  <p>
                    Enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                    irure dolor in reprehenderit in voluptate velit esse.
                  </p>
                  <a href='#hero' className='btn btn-about'>
                    Belanja
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
