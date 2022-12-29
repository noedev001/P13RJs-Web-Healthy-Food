import { GlobalStyled, ScrollTop } from "./components/Globald.styled";
import About from "./components/sections/about/About";
import Contact from "./components/sections/contact/Contact";
import Footer from "./components/sections/footer/Footer";
import Header from "./components/sections/header/Header";
import Home from "./components/sections/home/Home";
import Product from "./components/sections/products/Product";
import Review from "./components/sections/review/Review";
import Service from "./components/sections/service/Service";

import { FaArrowUp } from 'react-icons/fa';


function App() {
  return (
    <>
      <GlobalStyled />
      <Header />
      <Home />
      <Product />
      <About />
      <Service />
      <Review />
      <Contact />
      <Footer />

      <ScrollTop href='#home' >
        <FaArrowUp />
      </ScrollTop>
    </>
  );
}

export default App;
