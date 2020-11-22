import React from 'react';
import { Login } from './pages/Login';
import { Registration } from './pages/Registration';
import { Map } from './pages/Map';
import { Profile } from './pages/Profile';
import './App.css';

const PAGES = {
  login: <Login />,
  registration: <Registration />,
  map: <Map />,
  profile: <Profile />
};

class App extends React.Component {
  state = { currentPage: "login" };

  navigateTo = (page) => {
    this.setState({ currentPage: page });
  }

  render() {
    return (
      <>
        <header>
          <nav>
            <ul>
              <li>
                <button onClick={() => this.navigateTo("login")}>
                  login
                </button>
              </li>
              <li>
                <button onClick={() => this.navigateTo("registration")}>
                  registration
                </button>
              </li>
              <li>
                <button onClick={() => this.navigateTo("map")}>
                  map
                </button>
              </li>
              <li>
                <button onClick={() => this.navigateTo("profile")}>
                  profile
                </button>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <section>
            { PAGES[this.state.currentPage] }
          </section>
        </main>
      </>
    );
  }
}

export default App;
