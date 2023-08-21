import { GoogleLogin} from 'react-google-login';

const clientId="549879950356-2ahk2mr5uguudv7llciv7pc8ruu9jshc.apps.googleusercontent.com";

function Logout(){

    return(
        <div id="signoutbutton">
            <GoogleLogout
                clientId={clientId}
                buttonText={"Logout"}
                onLogoutsuccess={onsuccess}
                />
        </div>


    )
}
export default Logout;