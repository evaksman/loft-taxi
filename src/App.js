import React from 'react';
import { Login } from './Login';
import { Registration } from './Registration';
import { Map } from './Map';
import { Profile } from './Profile';
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
