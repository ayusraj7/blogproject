import {createContext,useState} from 'react';

export const AppContext=createContext();

export default function AppContextProvider({children}){
  const[user,setUser]=useState(JSON.parse(localStorage.getItem('user')) || null);
  const[fetch,setFetched]=useState(false);
  const[error,setError]=useState(false);


  function loginstart(){
    setUser(null);
    setFetched(true);
    setError(false);
  }
  function loginsuccess()
    {
      setUser(JSON.parse(localStorage.getItem('user')));
      setFetched(false);
      setError(false);
    }
  function loginfailure(){
    setUser(null),
    setFetched(false),
    setError(true)
  }
  function logout(){
    localStorage.removeItem('user');
    setUser(false);
    setFetched(false);
    setError(true);
  }
  const value={
    user,setUser,
    error,setError,
    fetch,setFetched,
    loginstart,
    loginsuccess,
    loginfailure,
    logout
   
  };

  return  <AppContext.Provider value={value}>
    {children}
    </AppContext.Provider>
}