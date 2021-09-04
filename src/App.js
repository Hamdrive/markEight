import './App.css';

function App(){
  return (
    <div>
      <div className="navbar">
        <h1>Know your Flag Emojis!</h1>
      </div>
      <div className="main">
        <div className="desc">
          Enter your flag emoji to know which country it belongs to!
          <br/> Else choose one of the popular flags below
        </div>
        <div className="emoji-input">
          <input></input>
        </div>
        <div className="premade-list"></div>
      </div>
    </div>
  )
}

export default App;
