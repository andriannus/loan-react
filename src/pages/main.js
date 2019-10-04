import React from 'react';

import MainRoutes from 'pages/main.routes';

const Main = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="columns">
          <div className="column is-half is-offset-one-quarter">
            <MainRoutes />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Main;
