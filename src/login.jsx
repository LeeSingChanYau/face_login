import React from 'react';
import GoogleLogin from 'react-google-login';

const Login = (props) => {

    const responseGoogle = (response) => {
        console.log(response);
    }

    return(
        <div>
            <GoogleLogin
                clientId="951065931313-6hr9bv57l35gaemtjthdnds6iob15939.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={() => props.setLoggedIn(true)}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}
            />
        </div>
    );
}

export default Login;