import React, { useState, useEffect } from 'react';
import { Auth } from 'aws-amplify';
import { API, graphqlOperation } from 'aws-amplify';
import { response } from '../graphql/queries';

const Home = () => {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState('');

  const onTextChange = (data) => {
    setQuery(data);
  };

  const getUserInfo = async () => {
    await Auth.currentUserInfo().then((user) => {
      console.log('User Info: ', user);
    });
  };

  const getData = async () => {
    const result = await API.graphql(
      graphqlOperation(response, { input: query }),
    );
    console.log('AppSync API Data: ', JSON.stringify(result.data));
    setResult(result.data.response);
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <div className="Home">
      <header className="App-header">
        <a
          className="App-link"
          href="https://swapi.dev/api/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Search results from Star Wars API
        </a>
        <p>
          Search options: people | planets | films | species | vehicles |
          starships
        </p>
        <div className="search-component">
          <input onChange={(e) => onTextChange(e.target.value)} value={query} />
          <button type="button" onClick={getData}>
            Search
          </button>
        </div>

        <br />
        <h3>API Search Result: </h3>
        <div style={{ color: '#da70d6' }}>{result}</div>
        <br />
      </header>
    </div>
  );
};

export default Home;
