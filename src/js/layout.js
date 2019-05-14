import React, { Component } from 'react';  
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';  
  
/** Layouts **/  
import LoginLayoutRoute from "./LoginLayout";  
import DashboardLayoutRoute from "./DashboardLayout";  
  
/** Components **/  
import UserPage from './UserPage';  
import LoginPage from './LoginPage'  
  
/* 
   App 
 */  
class App extends Component {  
  render() {  
    return (  
      <Router>  
        <Switch>  
          <Route exact path="/">  
            <Redirect to="/layout1" />  
          </Route>  
          <LoginLayoutRoute path="/layout1" component={LoginPage} />  
          <DashboardRoute path="/layout2" component={UserPage} />  
        </Switch>  
      </Router>  
    );  
  }  
}  
  
export default App;   
