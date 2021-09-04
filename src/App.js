import React, { useState } from 'react';
import './App.css';

var sportsDictionary = {
  "⚾" : "baseball",
  "🏐" : "volleyball",
  "🏏" : "cricket",
  "🎾" : "tennis",
  "🏸" : "badminton",
  "🎱" : "pool",
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
    console.log(emojiInput)
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
    <div>
      <div className="navbar">
        <h1>Know your sports emoji!</h1>
      </div>
      <div className="main">
        <div className="desc">
          Enter your sport emoji to know which sport it is!
          <br/> Else choose one of the popular sports below.
        </div>
        <div className="emoji-input">
          <input onChange={handleEmojiInput}></input>
        </div>
        <div className="emoji-output">
          <h1>{emojiMeaning}</h1>
        </div>
        <div className="premade-list">
          {sportsArray.map( item => 
            <span 
              key={item} 
              onClick={() => handleEmojiClick(item)} 
              style={{cursor: "pointer", fontSize: "3rem"}
            }>
              {item}
            </span>
          )}
        </div>
      </div>
    </div>
  )
}

export default App;
