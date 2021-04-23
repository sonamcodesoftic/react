import React from 'react'
/*import{route, Router} from 'react-router-dom';*/
/*import Route from 'react-router-dom';*/
/*import Router from 'react-router-dom';*/
/*import Switch from 'react-router-dom';*/
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from '../component/About';
import Aboutuscontent from '../component/Aboutuscontent';
import Contactus from '../component/Contactus';
import HomePage from '../component/home';
import Product from '../component/Product';
import Termaconditions from '../component/Termaconditions';

const Routes = () => {
    return (
        <div>
            <Switch>
                    <Route exact="true" path="/">
                        <HomePage />
                    </Route>
                    <Route exact path="/Product">
                        <Product />
                    </Route>
                    <Route exact path="/About">
                        <About />
                    </Route>
                    <Route exact path="/Contactus">
                        <Contactus />
                    </Route>
                    <Route exact path="/Termaconditions">
                        <Termaconditions />
                    </Route>
            </Switch>
        </div>
    )
}
export default Routes;