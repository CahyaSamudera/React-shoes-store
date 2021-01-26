import Product1 from '../../Images/shoe-3.png';
import Product2 from '../../Images/sneaker-1.jpg';
import Product3 from '../../Images/sneaker-2.jpg';
import Product4 from '../../Images/shoe-5.png';
import Product5 from '../../Images/heels-1.jpg';
import Product6 from '../../Images/heels-2.jpg';
import Product7 from '../../Images/heels-3.jpg';
import Product8 from '../../Images/heels-5.jpg';

const Product = () => {
  return (
    <>
      <section id='product'>
        <div className='product-panel'>
          <div className='container'>
            <div className='row'>
              <div className='col-12'>
                <div className='section-title'>
                  <h2 className='text-center'>Produk Terlaris</h2>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-12'>
                <div className='product-detail'>
                  <div className='nav-main'>
                    <ul className='nav nav-tabs' id='myTab' role='tablist'>
                      <li className='nav-item'>
                        <a
                          className='nav-link active'
                          data-toggle='tab'
                          href='#sneakers'
                          role='tab'
                        >
                          Sneakers
                        </a>
                      </li>
                      <li className='nav-item'>
                        <a
                          className='nav-link'
                          data-toggle='tab'
                          href='#heels'
                          role='tab'
                        >
                          Heels
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className='tab-content' id='myTabContent'>
                    <div
                      className='tab-pane fade show active'
                      id='sneakers'
                      role='tabpanel'
                    >
                      <div className='tab-single'>
                        <div className='row'>
                          <div className='col-xl-3 col-lg-4 col-md-4 col-12'>
                            <div className='single-product'>
                              <div className='product-img'>
                                <a href='#hero'>
                                  {' '}
                                  <img
                                    src={Product1}
                                    className='main-img'
                                    alt=''
                                  />
                                </a>
                                <div className='button-head'>
                                  <div className='action-button'>
                                    <a
                                      data-toggle='modal'
                                      data-target='#exampleModal'
                                      title='Quick view'
                                      href='#hero'
                                    >
                                      {' '}
                                      <i className='far fa-eye'></i>
                                      <span>Beli</span>
                                    </a>
                                    {/* <a title='Wishlist' href='#'>
                                      <i className='far fa-heart'></i>
                                      <span>Add to Wishlist</span>
                                    </a>
                                    <a title='shopping' href='#'>
                                      <i className='fas fa-shopping-bag'></i>
                                      <span>Buy Now</span>
                                    </a> */}
                                  </div>
                                  <div className='button-low'>
                                    <a title='Add to cart' href='#hero'>
                                      Beli Sekarang
                                    </a>
                                  </div>
                                </div>
                              </div>
                              <div className='product-title'>
                                <h3>
                                  <a href='#hero'>Nike 12A</a>
                                </h3>
                                <div className='product-price'>
                                  <span>1125K</span>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className='col-xl-3 col-lg-4 col-md-4 col-12'>
                            <div className='single-product'>
                              <div className='product-img'>
                                <a href='#hero'>
                                  <img
                                    src={Product2}
                                    className='main-img'
                                    alt=''
                                  />
                                </a>
                                <div className='button-head'>
                                  <div className='action-button'>
                                    <a
                                      data-toggle='modal'
                                      data-target='#exampleModal'
                                      title='Quick view'
                                      href='#hero'
                                    >
                                      <i className='far fa-eye'></i>
                                      <span>Beli</span>
                                    </a>
                                  </div>
                                  <div className='button-low'>
                                    <a title='Add to cart' href='#hero'>
                                      Beli Sekarang
                                    </a>
                                  </div>
                                </div>
                              </div>
                              <div className='product-title'>
                                <h3>
                                  <a href='#hero'>Nike 12B</a>
                                </h3>
                                <div className='product-price'>
                                  <span>1200K</span>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className='col-xl-3 col-lg-4 col-md-4 col-12'>
                            <div className='single-product'>
                              <div className='product-img'>
                                <a href='#hero'>
                                  <img
                                    src={Product3}
                                    className='main-img'
                                    alt=''
                                  />
                                </a>
                                <div className='button-head'>
                                  <div className='action-button'>
                                    <a
                                      data-toggle='modal'
                                      data-target='#exampleModal'
                                      title='Quick view'
                                      href='#hero'
                                    >
                                      <i className='far fa-eye'></i>
                                      <span>Beli</span>
                                    </a>
                                  </div>
                                  <div className='button-low'>
                                    <a title='Add to cart' href='#hero'>
                                      Beli Sekarang
                                    </a>
                                  </div>
                                </div>
                              </div>
                              <div className='product-title'>
                                <h3 className='old'>
                                  <a href='#hero'>Nike Air</a>
                                </h3>
                                <div className='product-price'>
                                  <span>$2000K</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className='col-xl-3 col-lg-4 col-md-4 col-12'>
                            <div className='single-product'>
                              <div className='product-img'>
                                <a href='#hero'>
                                  <img
                                    src={Product4}
                                    className='main-img'
                                    alt=''
                                  />
                                </a>
                                <div className='button-head'>
                                  <div className='action-button'>
                                    <a
                                      data-toggle='modal'
                                      data-target='#exampleModal'
                                      title='Quick view'
                                      href='#hero'
                                    >
                                      <i className='far fa-eye'></i>
                                      <span>Beli</span>
                                    </a>
                                  </div>
                                  <div className='button-low'>
                                    <a title='Add to cart' href='#hero'>
                                      Beli Sekarang
                                    </a>
                                  </div>
                                </div>
                              </div>
                              <div className='product-title'>
                                <h3>
                                  <a href='#hero'>Adidas X</a>
                                </h3>
                                <div className='product-price'>
                                  <span>2100K</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='tab-pane fade' id='heels' role='tabpanel'>
                      <div className='tab-single'>
                        <div className='row'>
                          <div className='col-xl-3 col-lg-4 col-md-4 col-12'>
                            <div className='single-product'>
                              <div className='product-img'>
                                <a href='#hero'>
                                  <img
                                    src={Product5}
                                    className='main-img'
                                    alt=''
                                  />
                                </a>
                                <div className='button-head'>
                                  <div className='action-button'>
                                    <a
                                      data-toggle='modal'
                                      data-target='#exampleModal'
                                      title='Quick view'
                                      href='#hero'
                                    >
                                      <i className='far fa-eye'></i>
                                      <span>Beli</span>
                                    </a>
                                  </div>
                                  <div className='button-low'>
                                    <a title='Add to cart' href='#hero'>
                                      Beli Sekarang
                                    </a>
                                  </div>
                                </div>
                              </div>
                              <div className='product-title'>
                                <h3>
                                  <a href='#hero'>Lorem Ipsum</a>
                                </h3>
                                <div className='product-price'>
                                  <span>2300K</span>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className='col-xl-3 col-lg-4 col-md-4 col-12'>
                            <div className='single-product'>
                              <div className='product-img'>
                                <a href='#hero'>
                                  <img
                                    src={Product6}
                                    className='main-img'
                                    alt=''
                                  />
                                </a>
                                <div className='button-head'>
                                  <div className='action-button'>
                                    <a
                                      data-toggle='modal'
                                      data-target='#exampleModal'
                                      title='Quick view'
                                      href='#hero'
                                    >
                                      <i className='far fa-eye'></i>
                                      <span>Beli</span>
                                    </a>
                                  </div>
                                  <div className='button-low'>
                                    <a title='Add to cart' href='#hero'>
                                      Beli Sekarang
                                    </a>
                                  </div>
                                </div>
                              </div>
                              <div className='product-title'>
                                <h3>
                                  <a href='#hero'>Lorem Ipsum</a>
                                </h3>
                                <div className='product-price'>
                                  <span>2500K</span>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className='col-xl-3 col-lg-4 col-md-4 col-12'>
                            <div className='single-product'>
                              <div className='product-img'>
                                <a href='#hero'>
                                  <img
                                    src={Product7}
                                    className='main-img'
                                    alt=''
                                  />
                                </a>
                                <div className='button-head'>
                                  <div className='action-button'>
                                    <a
                                      data-toggle='modal'
                                      data-target='#exampleModal'
                                      title='Quick view'
                                      href='#hero'
                                    >
                                      <i className='far fa-eye'></i>
                                      <span>Beli</span>
                                    </a>
                                  </div>
                                  <div className='button-low'>
                                    <a title='Add to cart' href='#hero'>
                                      Beli Sekarang
                                    </a>
                                  </div>
                                </div>
                              </div>
                              <div className='product-title'>
                                <h3>
                                  <a href='#hero'>Lorem Ipsum</a>
                                </h3>
                                <div className='product-price'>
                                  <span>3000K</span>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className='col-xl-3 col-lg-4 col-md-4 col-12'>
                            <div className='single-product'>
                              <div className='product-img'>
                                <a href='#hero'>
                                  <img
                                    src={Product8}
                                    className='main-img'
                                    alt=''
                                  />
                                </a>
                                <div className='button-head'>
                                  <div className='action-button'>
                                    <a
                                      data-toggle='modal'
                                      data-target='#exampleModal'
                                      title='Quick view'
                                      href='#hero'
                                    >
                                      <i className='far fa-eye'></i>
                                      <span>Beli</span>
                                    </a>
                                  </div>
                                  <div className='button-low'>
                                    <a title='Add to cart' href='#hero'>
                                      Beli Sekarang
                                    </a>
                                  </div>
                                </div>
                              </div>
                              <div className='product-title'>
                                <h3>
                                  <a href='#hero'>Lorem Ipsum</a>
                                </h3>
                                <div className='product-price'>
                                  <span>2000K</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Product;
