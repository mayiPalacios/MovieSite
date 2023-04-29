"use client";

import { AuthContext } from "lastHomework/contexts/AuthContext";
import Router from "next/router";
import { Isession } from "lastHomework/interfaces/Interfaceslog";
import {
  getAccount_id,
  getRequestToken,
  getSession,
  validateToken,
} from "lastHomework/utils/fetchService";

import { useContext, useEffect, useState } from "react";

export interface IrequestTokenResponse {
  success: boolean;
  expires_at: string;
  request_token: string;
}

export interface IvalidateToken {
  success: boolean;
  status_code: number;
  status_message: string;
}
let funciono = false;
const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [username2, setUsername2] = useState("");
  const [password2, setPassword2] = useState("");
  const [prueba, setPrueba] = useState();
  const [fail, setFail] = useState("");
  const [loading, setLoading] = useState<boolean>();

  const { setLoggedIn } = useContext(AuthContext);

  const handleSubmit = async () => {
    try {
      const requestTokenResponse: IrequestTokenResponse =
        await getRequestToken();
      console.log(requestTokenResponse);
      console.log(username);
      const validateUser: IvalidateToken = await validateToken(
        requestTokenResponse.request_token,
        username,
        password
      );
      console.log(validateUser);

      if (validateUser.success) {
        const getSessionID: Isession = await getSession(
          requestTokenResponse.request_token,
          username,
          password
        );
        console.log(getSessionID);
        console.log("arriba");
        if (getSessionID.success == true) {
          localStorage.removeItem("sessionId");
          const account_id = await getAccount_id(getSessionID.session_id);
          console.log(account_id);
          localStorage.setItem("sessionId", getSessionID.session_id);
          localStorage.setItem("boolSessionId", "true");
          localStorage.setItem("account_id", account_id);

          funciono = true;
        } else {
          setFail("sorry fail to login");
        }
      } else {
        setFail(validateUser.status_message);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleBtn = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleSubmit();
    /* console.log("Antes de la redirección");
    if (typeof window !== "undefined") {
      Router.push("/movie");
    }
    console.log("Después de la redirección");*/
  };

  return (
    <div className="container__login">
      <div className="showcase-content " style={{ marginTop: "10vh" }}>
        <div className="formm">
          <form>
            <h1>Sign In</h1>
            <div className="info">
              <input
                className="email"
                placeholder="Email or phone number"
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />
              <br />
              <input
                className="email"
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="btn">
              <button className="btn-primary" type="submit" onClick={handleBtn}>
                Sign In
              </button>
            </div>
            <div className="help">
              <div>
                <input value="true" type="checkbox" />
                <label>Remember me</label>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
