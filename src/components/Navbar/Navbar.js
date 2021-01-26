const Navbar = () => {
  return (
    <>
      <nav className='navbar navbar-expand-lg' id='navbar'>
        <div className='container'>
          <a href='#hero' className='navbar-brand font-weight-bold brand-color'>
            T-Shoes
          </a>
          <button
            className='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#main-nav'
            aria-controls='main-nav'
            aria-expanded='false'
            aria-label='toggle navigation'
          >
            <span className='menu'>Menu</span>
          </button>
          <div className='collapse navbar-collapse' id='main-nav'>
            <ul className='navbar-nav ml-auto'>
              <li className='nav-item'>
                <a href='#hero' className='nav-link'>
                  Beranda
                </a>
              </li>
              <li className='nav-item'>
                <a href='#featured' className='nav-link'>
                  Terpopuler
                </a>
              </li>
              <li className='nav-item'>
                <a href='#product' className='nav-link'>
                  Produk
                </a>
              </li>
              <li className='nav-item'>
                <a href='#contact' className='nav-link'>
                  Kontak
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
