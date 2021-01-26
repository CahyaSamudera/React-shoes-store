import './Service.css';

const Service = () => {
  return (
    <>
      <section className='service-intro m-3'>
        <div className='container'>
          <div className='row no-gutters'>
            <div className='col-md-4 d-flex'>
              <div className='intro d-lg-flex'>
                <div className='icon'>
                  <i className='fas fa-phone-volume'></i>
                </div>
                <div className='text'>
                  <h2>Layanan Selalu Tersedia</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Placeat deleniti vitae nesciunt.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-md-4 d-flex'>
              <div className='intro color-1 d-lg-flex'>
                <div className='icon'>
                  <i className='fas fa-wallet'></i>
                </div>
                <div className='text'>
                  <h2>Garansi Uang Kembali</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                    tempore rerum animi.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-md-4 d-flex'>
              <div className='intro color-2 d-lg-flex'>
                <div className='icon'>
                  <i className='fas fa-truck'></i>
                </div>
                <div className='text'>
                  <h2>Gratis Pengiriman &amp; Return</h2>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Porro ea officiis quas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Service;
