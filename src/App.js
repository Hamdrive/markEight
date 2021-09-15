import React, { useState } from 'react';
import './App.css';

var sportsDictionary = {
  "⚾" : "baseball",
  "🏐" : "volleyball",
  "⚽" : "football",
  "🏉" : "rugby",
  "🏏" : "cricket",
  "🎾" : "tennis",
  "🏸" : "badminton",
  "🎱" : "pool",
  "🎳" : "bowling",
  "🏑" : "field hockey",
  "🏒" : "ice hockey",
  "🎿" : "skiing",
  "🥊" : "boxing",
  "🏓" : "ping-pong",
  
}

var sportsArray = Object.keys(sportsDictionary);

function App(){
  const [emojiMeaning, setEmojiMeaning] = useState("The meaning will popup here")
  
  function handleEmojiInput(e){
    var emojiInput = e.target.value;
    if(emojiInput === ""){
      setEmojiMeaning("The meaning will popup here")
      return;
    }

    var meaning = sportsDictionary[emojiInput];
    if(meaning === undefined){
      setEmojiMeaning("We dont have this sport in our database")
    }else{
      setEmojiMeaning(meaning)
    }
  }

  function handleEmojiClick(emoji){
    var meaning = sportsDictionary[emoji];
    setEmojiMeaning(meaning);
  }

  return (
    <div className="App">
      <div className="navbar">
        <h1 style={{fontSize: "45px"}}>Flag Emoji Library!</h1>
      </div>
      <div className="main">
        <div className="desc">
          <p style={{fontSize: "35px", fontWeight: "normal", lineHeight: "1.5"}}>
            Enter your sport emoji to know which sport it is!
            <br/> Else choose one of the popular sports below.
          </p>
        </div>
        <div className="emoji-input">
          <input 
            onChange={handleEmojiInput}
            style={{width: "500px", height: "100%", fontSize: "28px", paddingLeft: "10px"}}
            >
            </input>
        </div>
        <div className="premade-list">
          {sportsArray.map( item => 
            <span 
              key={item} 
              onClick={() => handleEmojiClick(item)} 
              style={{cursor: "pointer", fontSize: "2.5rem", margin: "5px"}
            }>
              {item}
            </span>
          )}
        </div>
        <div className="emoji-output">
          <h1>{emojiMeaning}</h1>
        </div>
      </div>
      <div class="bottom-container">
      <div class="icons">
        <a class="footer-link" rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/hamza-husein/"><i
            class="fab fa-linkedin fa-2x"></i></a>
        <a class="footer-link" rel="noreferrer" target="_blank" href="https://github.com/Hamdrive"><i
            class="fab fa-github fa-2x"></i></a>
        <a class="footer-link" rel="noreferrer" target="_blank" href="https://hamzahusein.netlify.app"><i 
        class="fas fa-user fa-2x"></i></a>
        <a class="footer-link" rel="noreferrer" target="_blank" href="https://twitter.com/itsHamhere"><i
            class="fab fa-twitter-square fa-2x"></i></a>
      </div>
      <p class="copyright">© 2021 Hamza Husein</p>
    </div>
    </div>
  )
}

export default App;
