import React, { useEffect } from 'react';
import { Auth } from 'aws-amplify';
import { API, graphqlOperation } from 'aws-amplify';
import { echo } from '../graphql/queries';
import logo from '../logo.svg';

const Home = () => {
  const getUserInfo = async () => {
    await Auth.currentUserInfo().then((user) => {
      console.log('User Info: ', user);
    });
  };

  const getData = async () => {
    const result = await API.graphql(
      graphqlOperation(echo, { msg: 'planets' }),
    );

    console.log('AppSync API Data: ', JSON.stringify(result.data));
  };

  useEffect(() => {
    getUserInfo();
    getData();

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
