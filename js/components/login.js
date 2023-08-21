import { GoogleLogin} from 'react-google-login';

const clientId="549879950356-2ahk2mr5uguudv7llciv7pc8ruu9jshc.apps.googleusercontent.com";

function login() {
    const onSuccess =(res) => {
        console.log("LOGIN SUCCESS! Current user:", res.profileObj);
    }
    const onFailure =(res) => {
        console.log("LOGIN FAILED! res:", res);
}
}
return(
    <div id="signInButton">
        <GoogleLogin
            clientId={clientId}
            buttonText="login"
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={'single_host_origin'}
            isSignedIn={true}
            />
    </div>
    )
export default login;