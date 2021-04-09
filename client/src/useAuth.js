import { useEffect, useState } from "react";
import axios from "./axios";

export default function useAuth(code) {
  const [accessToken, setAccessToken] = useState();
  const [refreshToken, setRefreshToken] = useState();
  const [expiresIn, setExpiresIn] = useState();

  useEffect(() => {
    axios
      .post("/login", { code })
      .then((response) => {
        //   If success then cut the code string from the URL and execute the other thing
        window.history.pushState({}, null, "/");
        // console.log(response.data);
        setAccessToken(response.data.accessToken);
        setRefreshToken(response.data.refreshToken);
        setExpiresIn(response.data.expiresIn);
      })
      .catch(() => {
        //   If fail redirect to home page - Login page
        window.location = "/";
      });
  }, [code]);

  
  // Update 'accessToken' with the help of 'refreshToken' when 'expireIn' time expires
  // Because of this user doesnot have to reLogin after(in this case 3600s = 1hr) its accessToken expires because below code will updates accessToken
  useEffect(() => {
    if (!refreshToken || !expiresIn) {
      return;
    }

    let interval = setInterval(() => {
      
      axios
      .post("/refresh", { refreshToken })
      .then((response) => {
        // console.log(response.data);
        setAccessToken(response.data.accessToken);
        setExpiresIn(response.data.expiresIn);
      })
      .catch(() => {
        window.location = "/";
      });

    }, (expiresIn - 60) * 1000 );   // 1 min before expire Time and multiplying it with 1000 becoz to convert it in miliseconds

    // This will make sure that if for some reason our refreshtoken or expireTime changes before an actual Refresh then it will clear the interval so that we don't use the incorrect expireTime or refreshtoken
    return () => clearInterval(interval)

  }, [refreshToken, expiresIn]);

  return accessToken
}
