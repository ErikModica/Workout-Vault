import React from 'react';

export default function Home(props) {
  return (
    <>
      <main>
        <div className="app-drawer">
          <a href="#exercises" className="tile-container">
            <div className="bg-app-tile"></div>
            <div className="app-tile">
              <div className="tile-title">
                <h2>BROWSE EXERCISES</h2>
              </div>
              <div className="icon">
                <i className="fas fa-search"></i>
              </div>
            </div>
          </a>
          <a href="#exercises" className="tile-container">
            <div className="bg-app-tile"></div>
            <div className="app-tile">
              <div className="tile-title">
                <h2>SAVED EXERCISES</h2>
              </div>
              <div className="icon">
                <i className="fas fa-search"></i>
              </div>
            </div>
          </a>
        </div>
      </main>
    </>
  );
}
