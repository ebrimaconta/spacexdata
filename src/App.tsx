// eslint-disable-next-line
import React, { Component, useState, useEffect } from 'react';

import Main from './domain/Main';
import AppContext from './context/context';

import './assets/dist/tailwind.css';
function App() {
  const [data, setData] = useState([]);

  let ajaxString = `https://api.spacexdata.com/v3/launches`;
  const requestOptions = {
    method: 'GET',
  };

  async function fetchBusinesses() {
    try {
      let response = await fetch(ajaxString, requestOptions);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      } else {
        const fetchresponse = await response.json();
        console.log(fetchresponse);
        setData(fetchresponse);
      }
    } catch (e) {
      console.log(e);
    }
  }
  useEffect(() => {
    fetchBusinesses();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <AppContext.Provider
      value={{
        lunches: data,
      }}
    >
      <div id='app' className='App'>
        <Main />
      </div>
    </AppContext.Provider>
  );
}

export default App;
