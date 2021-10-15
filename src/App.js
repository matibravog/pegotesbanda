import {React, Fragment} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Header from './components/Header'
import Home from './components/Home'
import Observar from './components/Observar'

import './assets/styles/App.scss'

const App = () =>{

  return (
    <Fragment>

      <Router>
        
        <Header/>

        <Switch>
          
          
          <Route exact path='/'>
            <Home/>
          </Route>

          <Route path='/observar'>
            <Observar/>
          </Route>

          <Route path='/conocenos'>
            <Observar/>
          </Route>

          <Route path='/shows'>
            <Observar/>
          </Route>

          <Route path='/discos'>
            <Observar/>
          </Route>

          <Route path='/videos'>
            <Observar/>
          </Route>
          
          <Route path='/contacto'>
            <Observar/>
          </Route>
          


        </Switch>

      </Router>

    </Fragment>
  );
}

export default App;