import React, { Component } from 'react';

import logo from './logo.svg';
import DogList from './DogList';
import './App.css';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      dogs: []
    }
  }

  componentDidMount(){
    //fetch("https://random.dog/woof.json")
    fetch("https://dog.ceo/api/breeds/image/random/6")
    .then((res)=> res.json())
    .then((data)=>{
      console.log(data);
      //this.setState({dogs: data.url})
      this.setState({dogs: data.message})
    })
  }

  render(){
    return (
      <div className="App">    
     <h1 style={{textAlign: 'center'}}>Dogs</h1>
     <DogList dogs={this.state.dogs} />
    </div>
  );
}
}

export default App;
