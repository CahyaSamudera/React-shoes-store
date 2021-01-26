import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Featured from './components/Featured/Featured';
import Banner from './components/Banner/Banner';
import Service from './components/Service/Service';
import About from './About/About';
import Subscribe from './components/Subscribe/Subscribe';
import Contact from './components/Contact/Contact';
import Product from './components/Product/Product';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Featured />
      <Banner />
      <Service />
      <Product />
      <About />
      <Contact />
      <Subscribe />
    </>
  );
}

export default App;
