import react from 'react';
import ReactDOM from 'react-dom';
/*import { BrowseRouter as Router,Route,Link } from 'react-router-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";*/
import { BrowserRouter as Router  ,Link } from 'react-router-dom';
import Routes from '../Routes/RoutesPage';
import Footer from './Footer';


const Header =() => {
    return (
      <>
      <Router>
      <header className="App-header">
            <nav class="navbar navbar-expand-md  navbar-dark">
        
     
       <a class="navbar-brand" href="#">
                {/*<img src={logo} className="App-logo" alt="logo" />*/}
                <img src="https://lokalkw.com/images/logo.png" className="" alt="logo" height="50" />
               </a>
               <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                 <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="collapsibleNavbar">
                 <ul class="navbar-nav">
                   <li class="nav-item">
                   <Link class="nav-link" to="/">Home</Link>
                   </li>
                   <li class="nav-item">
                   <Link class="nav-link" to="/About">AboutUs</Link>
                   </li>
                   <li class="nav-item">
                   <Link class="nav-link" to="/Contactus">Contact US</Link>
                   </li>
                   <li class="nav-item">
                   <Link class="nav-link" to="/Termaconditions">Terms & Conditions</Link>
                   </li>
                 
         
                </ul>
         </div>   
              </nav>
     </header> 
         <Routes />
      </Router>
            <Footer />  
</>
    );
}
  
export default Header;