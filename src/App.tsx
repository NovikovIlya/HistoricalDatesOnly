import React, { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { Data } from './types';
import './App.scss';

import MinMaxComponent from './components/MinMaxComponent';
import SwiperComponents from './components/SwiperComponents';
import TitleComponent from './components/TitleComponent';
import CircleComponent from './components/CircleComponent';
import ArrowComponent from './components/ArrowComponent';

function App() {
  const [day, setDay] = useState('1');
  const [mouth, setMouth] = useState('1');
  const [sort, setSort] = useState('births');
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(0);

  //hooks
  const { isPending, data = [] } = useQuery<Data[]>({
    queryKey: ['data', day, sort],
    queryFn: () => fetchDate(mouth, day, sort),
  });

  useEffect(() => {
    if (data) {
      const array = data?.sort((a, b) => (a.year > b.year ? 1 : -1));
      setMin(array[0] ? array[0].year : 0);
      setMax(array[array.length - 1] ? array[array.length - 1].year : 0);
    }
  }, [data, sort]);

  //functions
  const fetchDate = async (mouth, day, sort) => {
    const res = await fetch(
      `https://api.wikimedia.org/feed/v1/wikipedia/en/onthisday/${sort}/${mouth.padStart(
        2,
        0,
      )}/${day.padStart(2, 0)}`,
    );
    const data = await res.json();
    return data[sort].reverse();
  };
  const changeDatePlus = () => {
    if (day === '30') {
      setDay('1');
      setMouth((prev) => String(Number(prev) + 1));
      return;
    }
    setDay((prev) => String(Number(prev) + 1));
  };
  const changeDateMinus = () => {
    if (day === '1' && mouth === '1') {
      return;
    }
    if (day === '1') {
      setDay('30');
      setMouth((prev) => String(Number(prev) - 1));
      return;
    }
    setDay((prev) => String(Number(prev) - 1));
  };
  const birth = () => {
    setSort('births');
  };
  const death = () => {
    setSort('deaths');
  };
  const selected = () => {
    setSort('selected');
  };
  const holiday = () => {
    setSort('holidays');
  };
  const events = () => {
    setSort('events');
  };
  const all = () => {
    setSort('events');
  };

  return (
    <>
      <div className="App">
        <div className="div">
          <div className="div-2">
            <div className="div-3">
              <TitleComponent sort={sort} />
              <CircleComponent
                sort={sort}
                selected={selected}
                events={events}
                death={death}
                birth={birth}
                holiday={holiday}
                all={all}
              />
              <MinMaxComponent min={min} max={max} isPending={isPending} />
            </div>
          </div>
        </div>
        <div className="footer">
          <ArrowComponent
            changeDatePlus={changeDatePlus}
            changeDateMinus={changeDateMinus}
            day={day}
            mouth={mouth}
          />
          <SwiperComponents isPending={isPending} data={data} />
        </div>
      </div>
    </>
  );
}

export default App;
