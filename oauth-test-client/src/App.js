

import React, { useState } from "react";
import GoogleLogin from "react-google-login";

function App() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [profilePic, setProfilePic] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const responseGoogle = (response) => {
    console.log(response);
    /*
    response설명
    {
      Ba: ?
      Ju: {
        AN: 유저 프로필 이미지 주소
        SW: google 아이디 인덱스
        hY: First name
        sf: Full name
        vW: Last name
        zv: 이메일주소
        외 메소드 많음.
      },
      googleId: 구글 아이디인덱스
      profileObj: {
        email: "catalyst8849@gmail.com"
        familyName: Last name
        givenName: Frist name
        googleId: "113718820470317241621"
        imageUrl: 유저 프로필 이미지 주소
        name: Full name
      },
      tokenId: 토큰 string(구글에서 받은 CLIENT_ID로 verify가능)
      tokenObj: {
        token_type: 토큰타입
        access_token: 토큰 string
        등등 토큰 정보
      }
    }
    */
    const {
      profileObj: { name, email, imageUrl },
    } = response;
    setName(name);
    setEmail(email);
    setProfilePic(imageUrl);
    setIsLoggedIn(true);
  };
  return (
    <div className="container">
      <GoogleLogin
        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
        buttonText="Continuar com o Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
      />
      {isLoggedIn ? (
        <div style={{ textAlign: "center" }}>
          <h1>User Information</h1>
          <img className="profile" src={profilePic} alt="Profile" />
          <p>Name: {name}</p>
          <p>Email: {email}</p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default App;