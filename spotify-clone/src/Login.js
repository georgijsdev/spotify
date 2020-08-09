// React Components
import React from 'react'

import {loginUrl} from './spotify'

//CSS
import './Login.css';

const Login = () => {
    return (
        <div className="login">
            <img
            src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
            alt="Spotify"
            />
            <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
        </div>
    )
}

export default Login
