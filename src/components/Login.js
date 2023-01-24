import React from 'react';
import { GoogleOutlined, FacebookOutlined } from '@ant-design/icons';
import "firebase/app";

import { auth } from '../firebase';
import firebase from 'firebase/app';

const Login = () => {
     return (
          <div id="login-page">
               <div id="login-card">
                    <h2>Chat!</h2>

                    <div
                         className="login-button google"
                         onClick={() => auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}
                    >
                         <GoogleOutlined /> 구글로 로그인 / 회원가입
                    </div>

                    <br /> <br />
                    <div
                         className="login-button facebook"
                         onClick={() => auth.signInWithRedirect(new firebase.auth.FacebookAuthProvider())}
                    >
                         <FacebookOutlined /> 페이스북으로 로그인 / 회원가입
                    </div>
               </div>
          </div>
     );
}

export default Login;