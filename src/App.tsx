import React, { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Data } from './types';

import './App.scss';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

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
    console.log('data', data[sort]);
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
    if(day==='1'){
      setDay('30');
      setMouth((prev) => String(Number(prev) - 1));
      return
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
                <div className="sortStyle">{sort.toUpperCase()}</div>
              </div>
              <div className="circle">
                <div className="custom">
                  <div className="custom-style"></div>
                  <div className="custom-style3">
                    <div onClick={holiday} title="Holiday" className="circle-2 custom-style2">
                      2 Holiday
                    </div>
                    <div onClick={birth} title="Birth" className="circle-2 custom-style4">
                      6 Birth
                    </div>
                    <div onClick={selected} title="selected" className="circle-2 custom-style5">
                      1 Selected
                    </div>
                    <div onClick={events} title="events" className="circle-2 custom-style6">
                      3 Events
                    </div>
                    <div onClick={death} title="Death" className="circle-2 custom-style7">
                      4 Death
                    </div>
                    <div onClick={all} title="all" className="circle-2 custom-style8">
                      5 All
                    </div>
                  </div>
                  <div className="pe .custom-style9"></div>
                  <div className="style10"></div>
                </div>
              </div>
              <span className="span-3">
                <div className="mob">
                  {isPending ? (
                    <div className='mobileLoad'>
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
            </div>
          </div>
        </div>
        <div className="footer">
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
          <div className="diiv-2">
            <Swiper
              className="swip"
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              watchOverflow={true}
              navigation
              spaceBetween={50}
              slidesPerView={3}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}>
              {isPending ? (
                <div className='pending'>
                  <div>
                    <div className="lds-facebook">
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                  </div>
                </div>
              ) : (
                data &&
                data.map((item) => {
                  return (
                    <SwiperSlide className="swwiiip" key={item.text}>
                      <div className="yearStyle">{item.year}</div>
                      <div className="textStyle">{item.text}</div>
                    </SwiperSlide>
                  );
                })
              )}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
