import React, {createContext,useContext} from 'react'

enum UserStatus {  
  LoggedIn = "Logged In",
  LoggingIn = "Logging In",
  LoggedOut = "Logged Out",
  LogInError = "Log In Error",
  VerifyingLogIn = "Verifying Log In"
}

interface IAppContext {
  userStatus: UserStatus;
  setUserStatusTo: (status: UserStatus) => void;
}

interface IUserStatusProvider{
  children:any
}
const AppContext = createContext<IAppContext>(null);

export const UserStatusProvider: React.FC<IUserStatusProvider> = ({children})=>{

  const [userStatus, setUserStatusTo] = React.useState<UserStatus>(UserStatus.LoggedOut);


  return <AppContext.Provider value={{ userStatus, setUserStatusTo }}>
    {children}
  </AppContext.Provider>
 
}

export const UserStatusContext = () =>{
  return useContext(AppContext)
}

