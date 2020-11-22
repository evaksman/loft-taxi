/* eslint-disable */
import React from 'react';
import { Login } from './pages/Login';
import { Registration } from './pages/Registration';
import { Map } from './pages/Map';
import { Profile } from './pages/Profile';
import './App.css';

// const PAGES = {
//   login: <Login />,
//   registration: <Registration />,
//   map: <Map />,
//   profile: <Profile />
// };

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
          {/* <header>
            <nav>
              <ul>
                <li>
                  <button onClick={() => this.changePage("login")}>
                    login
                  </button>
                </li>
                <li>
                  <button onClick={() => this.changePage("registration")}>
                    registration
                  </button>
                </li>
                <li>
                  <button onClick={() => this.changePage("map")}>
                    map
                  </button>
                </li>
                <li>
                  <button onClick={() => this.changePage("profile")}>
                    profile
                  </button>
                </li>
              </ul>
            </nav>
          </header> */}
          <main>
            <section>
              {/* { PAGES[this.state.currentPage] } */}
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
