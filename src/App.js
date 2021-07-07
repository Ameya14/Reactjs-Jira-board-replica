import Layout from './container/Layout';
import Login from './container/Login/Login';
import { useState } from 'react';
import { useSelector } from 'react-redux';

function App() {  
  const isLoggedIn = useSelector(state => state.taskReducer.isLoggedIn);
  return (
    <>
    {isLoggedIn }
      {
        (!isLoggedIn) ?
        <Login/>
        :
        <Layout />
      }
    </>
  );
}

export default App;
