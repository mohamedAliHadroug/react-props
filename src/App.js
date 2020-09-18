import React from 'react';
import './App.css';
import Profile from './profile/profile components/Profile'
import me from './me.jpg'

function App() {
  return (
    <div className="App">
      <Profile> <img src={me} alt="" style={{borderRadius: "50%"}} /></Profile>
    </div>
  );
}

export default App;
