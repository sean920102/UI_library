import React from 'react'
import { UserStatusContext } from "../../context/userStatus";

enum UserStatus {
  LoggedIn = "Logged In",
  LoggingIn = "Logging In",
  LoggedOut = "Logged Out",
  LogInError = "Log In Error",
  VerifyingLogIn = "Verifying Log In",
}

interface IUserStatusButton {
  icon: string;
  id: string;
  userStatus: UserStatus;
}

export const UserStatusBtn: React.FC<IUserStatusButton> = (
  props: IUserStatusButton
) => {
  const { userStatus, setUserStatusTo } = UserStatusContext();

  const handleOnClick = (): void => {
    setUserStatusTo(props.userStatus);
  };

  return (
    <button
      id={props.id}
      className="user-status-button clear-button"
      disabled={userStatus === props.userStatus}
      type="button"
      onClick={handleOnClick}
    >
      <i className={props.icon} />
    </button>
  );
};