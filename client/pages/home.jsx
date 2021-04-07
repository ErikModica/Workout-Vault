import React from 'react';

export default function Home(props) {
  return (
    <>
      <header>
        <div className="navbar">
          <i className="fas fa-home"></i>
          <div>WORKOUT VAULT</div>
        </div>
      </header>
      <main>
        <div className="app-drawer">
          <div className="tile-container">
            <div className="bg-app-tile"></div>
            <div className="app-tile">
              <div className="tile-title">
                <h2>BROWSE EXERCISES</h2>
              </div>
              <div className="icon">
                <i className="fas fa-search"></i>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
