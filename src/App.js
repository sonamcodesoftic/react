import logo from './logo.svg';
import './App.css';
import HomePage from './component/home';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
         <nav class="navbar navbar-expand-md  navbar-dark">
           <a class="navbar-brand" href="#">
             <img src={logo} className="App-logo" alt="logo" />
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
              <span class="navbar-toggler-icon"></span>
           </button>
           <div class="collapse navbar-collapse" id="collapsibleNavbar">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link" href="#">HOME</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">ABOUT US</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">CONTACT US</a>
               </li> 
               <li class="nav-item">
                  <a class="nav-link" href="#">TERMS & CONDITIONS</a>
               </li> 
                  
             </ul>
             <ul class="navbar-nav">
               <li class="nav-item">
                 <a class="nav-link" href="#">LOGIN</a>
               </li>
               <li class="nav-item">
                 <a class="nav-link" href="#">/&nbsp; REGISTER</a>
               </li>
             </ul>
           </div>   
         </nav>
  </header> */}
     <HomePage />


    </div> 
  );
}
export default App;
