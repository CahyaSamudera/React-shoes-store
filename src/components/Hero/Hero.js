import Sepatu from '../../Images/sepatu-2.png';

const Hero = () => {
  return (
    <>
      <div>
        <div className='banner' id='hero'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-6 ml-auto order-md-2 align-self-start'>
                <div className='banner-content'>
                  <h2 className='first-title'>Selamat Datang di</h2>
                  <h1>T-Shoes</h1>
                  <p>Toko Sepatu Terlengkap, Termurah, dan Terbaik</p>
                  <a href='#product'>
                    <button className='btn btn-dark btn-hero'>Belanja</button>
                  </a>
                </div>
              </div>
              <div className='col-md-6 order-1 align-self-end'>
                <img src={Sepatu} alt='' className='img-fluid banner-image' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
