import React from 'react';
import '../App.scss';

const CircleComponent = ({ sort, selected, events, death, birth, holiday, all }) => {
  return (
    <>
      <div className="circle">
        <div className="custom">
          <div className="custom-style"></div>
          <div className="custom-style3">
            <div
              onClick={holiday}
              title="Holidays"
              className={`circle-2 custom-style2 ${sort === 'holidays' && 'highlander'}`}>
              2 Holidays
            </div>
            <div
              onClick={birth}
              title="Birth"
              className={`circle-2 custom-style4 ${sort === 'births' && 'highlander'}`}>
              6 Birth
            </div>
            <div
              onClick={selected}
              title="selected"
              className={`circle-2 custom-style5 ${sort === 'selected' && 'highlander'}`}>
              1 Selected
            </div>
            <div
              onClick={events}
              title="events"
              className={`circle-2 custom-style6 ${sort === 'events' && 'highlander'}`}>
              3 Events
            </div>
            <div
              onClick={death}
              title="Death"
              className={`circle-2 custom-style7 ${sort === 'deaths' && 'highlander'}`}>
              4 Death
            </div>
            <div
              onClick={all}
              title="all"
              className={`circle-2 custom-style8 ${sort === 'all' && 'highlander'}`}>
              5 All
            </div>
          </div>
          <div className="pe .custom-style9"></div>
          <div className="style10"></div>
        </div>
      </div>
    </>
  );
};

export default CircleComponent;
