import React from 'react';
import { GoogleLogout } from 'react-google-login';

const Logout = (props) => {
    return (
        <div>
            <GoogleLogout 
                clientId='951065931313-6hr9bv57l35gaemtjthdnds6iob15939.apps.googleusercontent.com'
                buttonText={'Log out'}
                onLogoutSuccess={() => props.setLoggedIn(false)}
            />
        </div>
    )
}

export default Logout;