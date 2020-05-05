import React, { Component } from 'react';
import axios from 'axios';
const api = 'https://icanhazdadjoke.com/slack';

class App extends Component {
  constructor() {
    super();

    this.state = {
      dadJoke: '',
      loading: true,
    };
  }

  generateNew = () => {
    this.setState({ loading: true });
    axios.get(api).then((res) => {
      this.setState({
        dadJoke: res.data.attachments[0].fallback,
        loading: false,
      });
    });
  };

  copyToClipboard = async (event) => {
    const joke = document.getElementById('joke').innerText;
    const copyBtn = document.getElementById('copy');

    if (!navigator.clipboard) {
      return alert('navigator is not supported in this browser');
    }

    // Thanks to https://codepen.io/flaviocopes/pen/yLBPaVY
    try {
      navigator.clipboard
        .writeText(joke)
        .then((copyBtn.innerText = 'Copied'))
        .then(
          setTimeout(() => {
            copyBtn.innerText = 'Copy';
          }, 3000)
        );
    } catch (err) {
      console.error(err);
    }
  };

  componentDidMount() {
    this.generateNew();
  }

  render() {
    const { dadJoke, loading } = this.state;
    return (
      <div>
        <h1>DadJoke Generator</h1>
        <a
          href='https://github.com/dev-caspertheghost/react-dadjoke-generator'
          target='_blank'
          rel='noopener noreferrer'>
          View Source Code
        </a>
        <div className='card'>
          <div className='card-header'>
            <span id='joke'>{loading ? 'Loading...' : dadJoke}</span>
          </div>
          <div className='card-footer'>
            <button onClick={this.generateNew}>New Joke</button>
            <button id='copy' onClick={this.copyToClipboard}>
              Copy Joke
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
