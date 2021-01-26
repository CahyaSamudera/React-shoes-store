import './Subscribe.css';

const Subscribe = () => {
  return (
    <>
      <footer id='footer'>
        <div className='footer-top'>
          <div className='container'>
            <div className='row justify-content-center'>
              <div className='col-lg-6'>
                <h3>T-Shoes</h3>
                <p>
                  Et aut eum quis fuga eos sunt ipsa nihil. Labore corporis
                  magni eligendi fuga maxime saepe commodi placeat.
                </p>
              </div>
            </div>
            <div className='row footer-newsletter justify-content-center'>
              <div className='col-lg-6'>
                <form>
                  <input type='email' name='email' placeholder='Email' />
                  <input type='submit' value='Subscribe' />
                </form>
              </div>
            </div>
            <div className='social-links'>
              <a href='#hero' className='twitter'>
                <i className='fab fa-twitter'></i>
              </a>
              <a href='#hero' className='facebook'>
                <i className='fab fa-facebook'></i>
              </a>
              <a href='#hero' className='instagram'>
                <i className='fab fa-instagram'></i>
              </a>
            </div>
            <div className='copyright'>
              <p>&copy; Copyright 2021 | T-Shoes </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Subscribe;
