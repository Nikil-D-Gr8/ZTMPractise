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
      <button onClick= {() =>{
        this.setState({name : "Whyyy??"})
      }}
      >Change Name </button>
    </div>
  );
}}

export default App;
