import React from 'react';
import Items from './components/Items';
import data from './menu.json';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      menu: data.items
    }

    this.showAll = this.showAll.bind(this);
    this.showBreakfast = this.showBreakfast.bind(this);
    this.showLunch = this.showLunch.bind(this);
    this.showShakes = this.showShakes.bind(this);
  }

  showAll(){
    this.setState({
      menu: data.items
    });
  }

  showBreakfast(){
    this.setState({
      menu: data.items.filter(item => item.category === "breakfast")
    });
  }

  showLunch(){
    this.setState({
      menu: data.items.filter(item => item.category === "lunch")
    });
  }

  showShakes(){
    this.setState({
      menu: data.items.filter(item => item.category === "shake")
    });
  }

  render() {
    return (
      <div className="App">
        <div className="title">
          <h1>Our menu</h1>
        </div>
        <div className="navbar">
          <button onClick={this.showAll} className="nav-button">All</button>
          <button onClick={this.showBreakfast} className="nav-button">Breakfast</button>
          <button onClick={this.showLunch} className="nav-button">Lunch</button>
          <button onClick={this.showShakes} className="nav-button">Shakes</button>
        </div>
        <Items data={this.state.menu} />
      </div>
    );
  }
}

export default App;
