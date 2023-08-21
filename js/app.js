import logo from './logo.svg';
import'./App.css';
import loginButton from './components/login';
import logoutButton from './components/login';
import { useEffect } from 'react';
import {gapi} from 'gapi-react';

const clientId="549879950356-2ahk2mr5uguudv7llciv7pc8ruu9jshc.apps.googleusercontent.com";

function App(){

    useEffect(() => {
        function start(){
            gapi.client.init({
                clientId:clientId,
                scope:" "
            })
        };
        gapi.load('client:auth2',start);
    });

    return(
        <div className="App">
            <loginButton />
            <logoutButton />

        </div>
    );
}
export default App;