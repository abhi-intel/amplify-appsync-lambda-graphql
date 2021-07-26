import React, { useEffect } from 'react';
import { Auth } from 'aws-amplify';
import logo from '../logo.svg';

const Home = () => {
  const getUserInfo = async () => {
    await Auth.currentUserInfo().then((user) => {
      console.log('User Info: ', user);
    });
  };

  useEffect(() => {
    getUserInfo();

    // return () => {
    //   cleanup
    // }
  }, []);

  return (
    <div className="Home">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default Home;
