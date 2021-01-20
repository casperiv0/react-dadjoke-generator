import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
const api = "https://icanhazdadjoke.com/slack";

const App = () => {
  const [dadJoke, setDadJoke] = useState("");
  const [loading, setLoading] = useState(false);
  const jokeRef = useRef();

  useEffect(() => {
    generateNew();
  }, []);

  async function generateNew() {
    setLoading(true);

    await axios.get(api).then((res) => {
      setDadJoke(res.data.attachments[0].fallback);
    });

    setLoading(false);
  }

  function copyToClipboard() {
    const joke = jokeRef.current?.textContent;
    const copyBtn = document.getElementById("copy");

    if (!navigator.clipboard) {
      return alert("navigator is not supported in this browser");
    }

    // Thanks to https://codepen.io/flaviocopes/pen/yLBPaVY
    try {
      navigator.clipboard
        .writeText(joke)
        .then((copyBtn.innerText = "Copied!"))
        .then(
          setTimeout(() => {
            copyBtn.innerText = "Copy";
          }, 3000)
        );
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div>
      <h1>DadJoke Generator</h1>
      <a
        href="https://github.com/dev-caspertheghost/react-dadjoke-generator"
        target="_blank"
        rel="noopener noreferrer"
      >
        View Source Code
      </a>
      <div className="card">
        <div className="card-header">
          <span ref={jokeRef}>{loading ? "Loading..." : dadJoke}</span>
        </div>
        <div className="card-footer">
          <button onClick={generateNew}>New Joke</button>
          <button id="copy" onClick={copyToClipboard}>
            Copy Joke
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
