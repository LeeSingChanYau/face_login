import logo from './wedges.svg';
import Login from './login';
import Logout from './logout';
import FaceDetection from './facedetection';
import { useEffect, useState } from 'react';
import { gapi } from 'gapi-script';
import './App.css';

const App = () => {

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: '951065931313-6hr9bv57l35gaemtjthdnds6iob15939.apps.googleusercontent.com',
        scope: ''
      })
    };

    gapi.load('client:auth2', start);
  })

  const [loggedIn, setLoggedIn] = useState(false);
  const [file, setFile] = useState("https://i.imgur.com/QhzGovY.jpeg");

  const handleChange = (e) => {
    setFile(URL.createObjectURL(e.target.files[0]));
  }

  return (
    <div className="App">
      <header className="App-header">
        {loggedIn ? 
          <div>
            <FaceDetection file={file}/>
            <h2>Add image</h2>
            <input type="file" onChange={handleChange}/>
            <Logout setLoggedIn={setLoggedIn}/> 
          </div>
          :
          <div>
            <img src={logo} className="App-logo" alt="logo" />
            <Login setLoggedIn={setLoggedIn}/>
          </div>
          }
        <a
          className="App-link"
          href="https://alanleechan.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Created by Alan Chan
        </a>
      </header>
    </div>
  );
}

export default App;
