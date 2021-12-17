import * as React from 'react';
import AppContent from '../components/AppContent';
import Header from '../components/Header';
import logo from '../logo.svg';
import './App.css';
import Oidc from "oidc-client";

class App extends React.Component {
  public render() {
    const  url_path = window.location.pathname;
    if(url_path.includes('callback')){
      console.log('We are at redirect url')
      new Oidc.UserManager({ response_mode: "query" }).signinRedirectCallback().then(function (user) {
            console.log('Login successful', user)
            // window.location.href = "index.html";
        }).catch(function (e:any) {
            console.log('Error during login')
            console.error(e);
        });
      return(<a href="/">go to homepage</a>)
    }
    return (
      <div className="App">
        <Header pageTitle="Welcome to React and oidc-client-js" logoSrc={logo} />
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <AppContent />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
