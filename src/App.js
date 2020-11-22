/* eslint-disable */
import React from 'react';
import { Login } from './pages/Login';
import { Registration } from './pages/Registration';
import { Map } from './pages/Map';
import { Profile } from './pages/Profile';
import './App.css';

class App extends React.Component {
  state = { currentPage: "login" };

  changePage = (e, page) => {
    e.preventDefault();
    this.setState({ currentPage: page });
  };

  render() {
    return (
      <div className="wrapper">
        <div className="container">
          <main>
            <section>
              { this.state.currentPage === 'map' && <Map changePage={this.changePage} /> }
              { this.state.currentPage === 'profile' && <Profile changePage={this.changePage} /> }
              { this.state.currentPage === 'login' && <Login changePage={this.changePage} /> }
              { this.state.currentPage === 'registration' && <Registration changePage={this.changePage} /> }
            </section>
          </main>
        </div>
      </div>
    );
  }
}

export default App;
