import React from 'react';
import Items from './components/Items';
import data from './menu.json';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      menu: data.items
    }
  }
  render() {
    return (
      <div className="App">
        <div className="title">
          <h1>Our menu</h1>
        </div>
        <div className="navbar">
          <ul>
            <li>All</li>
            <li>Breakfast</li>
            <li>Lunch</li>
            <li>Shakes</li>
          </ul>
        </div>
        <Items data={this.state.menu} />
      </div>
    );
  }
}

export default App;
