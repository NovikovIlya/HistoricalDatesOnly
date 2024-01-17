import React from 'react';
import '../App.scss';

const ArrowComponent = ({ changeDatePlus, changeDateMinus, day, mouth }) => {
  return (
    <>
      <div className="divY swip">
        <div className="dayMouth">
          <span>{day.padStart(2, '0')}/</span>
          <span>{mouth.padStart(2, '0')}</span>
        </div>
        <div>
          <img
            onClick={changeDateMinus}
            alt=""
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/c0e48d09248dfe5e485a5cb7e725cb9cea0adcb91a2bb94189b516dfa346fd1f?"
            className="imgY"
          />
          <img
            onClick={changeDatePlus}
            alt=""
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/c0e48d09248dfe5e485a5cb7e725cb9cea0adcb91a2bb94189b516dfa346fd1f?"
            className="imgY imgY2"
          />
        </div>
      </div>
    </>
  );
};

export default ArrowComponent;
