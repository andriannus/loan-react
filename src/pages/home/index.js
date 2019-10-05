import React from 'react';

import { Container } from 'pages/home/home-content';
import HomeContext from 'pages/home/modules/services/home.context';

const Home = ({ history, location }) => {
  return (
    <HomeContext.Provider
      value={{
        history,
        location,
      }}
    >
      <Container />
    </HomeContext.Provider>
  )
}

export default Home;
