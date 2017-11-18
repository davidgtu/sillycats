import React, { Component } from 'react';
import Giphy from './components/Giphy';
import KittyButton from './components/KittyButton';
import './App.css';


class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      imgUrl: ''
    }
  }

  getCats() {
    var url = encodeURI("https://api.giphy.com/v1/gifs/random?api_key=mHAOndSoRcw7PQ6PV7c44T12EPoOrQ6j&tag=silly cats&rating=PG-13")

    fetch(url).then(res => {
      res.json().then(pRes => {
        this.handleUrl(pRes.data.image_url)
      })
    })
  }

  handleUrl(newUrl) {
    this.setState({
      imgUrl: newUrl
    })
  }

  componentDidMount() {
    this.getCats()
  }

  render() {
    return (
      <div className="container">
        <KittyButton
        click={this.getCats.bind(this)}
        />
        <Giphy img={this.state.imgUrl}/>
      </div>
    );
  }
}

export default App;
