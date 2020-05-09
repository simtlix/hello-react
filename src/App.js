import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AlbumCardList from './components/album-card-list'
import AlbumPhotoList from './components/album-photo-list'
import Clock from './Clock'
import NameForm from './NameForm'



class App extends Component {

  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};
    this.handleClick = this.handleClick.bind(this);

  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          
          <h1 className="App-title">Welcome {this.props.name}</h1>
         
        </header>
        <Clock />
        <NameForm />
        
        <AlbumPhotoList />

        
      </div>
    );
  }
}

export default App;
