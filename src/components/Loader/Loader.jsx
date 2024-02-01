import React from 'react';
import Spinner from 'react-bootstrap/Spinner';

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="custom-spinner">
        <Spinner animation="grow" className="spinner-grow" />
      </div>
    </div>
  );
}

export default Loader;