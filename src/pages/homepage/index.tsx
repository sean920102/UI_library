import React from "react";
import Info from "./components/info/indes";
import { Pin } from "./components/pin";
import Background from "./components/background/background";
import { UserStatusBtn } from "./components/userStatusBtn/userStatusBtn";
import { UserStatusProvider, UserStatusContext } from "./context/userStatus";
import { Menu } from "./components/menu/menu";
import "./style.scss";
enum UserStatus {
  LoggedIn = "Logged In",
  LoggingIn = "Logging In",
  LoggedOut = "Logged Out",
  LogInError = "Log In Error",
  VerifyingLogIn = "Verifying Log In",
}

const Main: React.FC = () => {
  const { userStatus } = UserStatusContext();

  const getStatusClass = (): string => {
    return userStatus.replace(/\s+/g, "-").toLowerCase();
  };

  return (
    <>
      <div id="app" className={getStatusClass()}>
        <Info id="app-info" />
        <Pin />
        <Menu />
        <Background />
        <div id="sign-in-button-wrapper">
          <UserStatusBtn
            icon="fa-solid fa-arrow-right-to-arc"
            id="sign-in-button"
            userStatus={UserStatus.LoggingIn}
          />
        </div>
        {/* <Loading /> */}
      </div>
    </>
  );
};

const Homepage: React.FC = () => {
  return (
    <UserStatusProvider>
      <Main></Main>
    </UserStatusProvider>
  );
};

export default Homepage;
// ReactDOM.render(<App/>, document.getElementById("root"));
