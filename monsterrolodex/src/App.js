import './App.css';
import {Component} from 'react';

class App extends Component {
  
  constructor(){

    super();
    this.state = {
      name:"Nikil Paul",
    }

  }

  render(){
  return (
    <div className="App">
      <p>Hello {this.state.name} !</p>
    </div>
  );
}}

export default App;
