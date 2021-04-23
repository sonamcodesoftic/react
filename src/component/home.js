import react from 'react';

import Header from '../component/Header';
import Footer from '../component/Footer';
import Slider from '../component/Slider';
import Welcome from '../component/Welcome';
import Product from '../component/Product';
import Aboutuscontent from '../component/Aboutuscontent';
import Termaconditions from '../component/Termaconditions';
import Contactus from '../component/Contactus';
const HomePage =() => {
    return (
      <div>
        {/*  For Contact Us Page*/}
        {/*
           <Header />
       <Contactus />
       <Footer />
        */}
       

        {/* For Terms & Conditions Page */}
        
        {/* 
        <Header />
        <Termaconditions />
        <Footer />
        */}

         {/* For About US */}
        {/* 
        <Header />
        <Slider />
        <Aboutuscontent />
        <Footer />
        */}

        {/* For Home Page */}

        {/* git URL https://github.com/sonamcodesoftic/react.git */}
        
        
          
           <Slider />
          <Welcome />
          <Product />
          
      </div>  
    );
}

export default HomePage;
