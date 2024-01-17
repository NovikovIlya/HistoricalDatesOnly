import React from 'react';
import '../App.scss';

const MinMaxComponent = ({min,max,isPending}) => {
  return (
    <>
      <span className="span-3">
        <div className="mob">
          {isPending ? (
            <div className="mobileLoad">
              <div className="lds-facebook">
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
          ) : (
            <>
              <div className="div-9">
                <span className="color">{min} </span>
                <span>{max}</span>
              </div>
            </>
          )}
        </div>
      </span>
    </>
  );
};

export default MinMaxComponent;
