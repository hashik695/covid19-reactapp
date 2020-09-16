import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router ,Route,Switch} from 'react-router-dom'
import Header from "./component/Header"
import India from "./component/India"
import World from "./component/World"




function App() {
  return (
    <div className="App">
      
     <Router>
     <Header/>
       <Switch>
         <Route  exact path="/" > <India/></Route>
         <Route path="/india" > <India/></Route>
         <Route path="/world"  ><World/></Route>
       </Switch>
     </Router>
    </div>
  );
}

export default App;
