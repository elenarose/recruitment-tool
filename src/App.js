import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.scss';
import Button from 'react-bootstrap/Button';
import { Image } from "react-bootstrap";
import { BrowserRouter as Router } from "react-router-dom";
import Navigation from "./components/Navigation";
import Routes from "./components/Routes";

function App() {
    const [loggedIn, setLoggedIn] = useState(false);
    const [GoogleAuth, setGoogleAuth] = useState(false);

    function login() {
        GoogleAuth.signIn({
            scope: 'profile email'
        })
        .then((response) => {
            console.log('logged in', response);
            setLoggedIn(true);
        })
    }

    const GoogleApiLoader = setInterval(() => {
        if (window.gapi) {
            window.gapi.load('auth2', async () => {
                let auth2 = await window.gapi.auth2.init({client_id: ''});
                setGoogleAuth(auth2);
            })
            clearInterval(GoogleApiLoader);
        }
    }, 100);

    useEffect(() => setLoggedIn(false), []);

    return (
        <Router>
        <div className="App">
            {loggedIn ?
                <header className="App-header">
                    <Image src={logo} className="App-logo" alt="logo"/>
                    <Button disabled={!GoogleAuth} onClick={login} className="Login-button">
                        Recruiters
                    </Button>
                </header>
                :
                (<>
                <Navigation/>
                <Routes/>
                </>)
            }
        </div>
        </Router>
    );
}

export default App;
