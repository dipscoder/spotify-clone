import { useEffect, useState } from "react";
import axios from "axios";

export default function useAuth(code) {
  const [accessToken, setAccessToken] = useState();
  const [refreshToken, setRefreshToken] = useState();
  const [expireIn, setExpireIn] = useState();

  useEffect(() => {
    axios
      .post("http://localhost:9000/login", { code })
      .then((response) => {
        //   If success then cut the code string from the URL and execute the other thing
        window.history.pushState({}, null, "/");
        console.log(response.data);
      })
      .catch(() => {
        //   If fail redirect to home page - Login page
        window.location = "/";
      });
  }, [code]);
}
