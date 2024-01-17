import React from 'react';
import '../App.scss';

const TitleComponent = ({ sort }) => {
  return (
    <>
      <img
        alt=""
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/8869a92f8982822b4a540d7d7d43d66b07ebb12e9c64b9a917f28dbea8f96078?"
        className="img"
      />
      <div className="div-4">
        <span className="span span-left">
          <img
            alt=""
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f306cb1bcc5fdd4daa8946823eaba8bc052a5c9d32ab9531849bb45fd5e2d139?"
            className="img-2"
          />
          <div className="div-5">
            Historical
            <br />
            dates
          </div>
        </span>
        <span className="span-2"></span>
        
      </div>
    </>
  );
};

export default TitleComponent;
