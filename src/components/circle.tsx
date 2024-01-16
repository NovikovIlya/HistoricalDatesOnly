import React, { useEffect } from 'react';
import './App.css';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
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
  const { refetch, isPending, error, data } = useQuery({
    queryKey: ['data', day, sort],
    queryFn: () => fetchDate(mouth, day, sort),
  });

  useEffect(() => {
    if (data) {
      const array = data?.sort((a, b) => (a.year > b.year ? 1 : -1));
      setMin(array[0].year);
      setMax(array[array.length - 1].year);
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
    setDay((prev) => String(Number(prev) + 1));
  };
  const changeDateMinus = () => {
    if (day === '1') return;
    setDay((prev) => String(Number(prev) - 1));
  };
  const birth = () => {
    setSort('births');
    console.log('bbiirth');
  };
  const death = () => {
    setSort('deaths');
    console.log('death');
  };
  const selected = () => {
    setSort('selected');
    console.log('seele');
  };
  const holiday = () => {
    console.log('holii');
    setSort('holidays');
  };
  const events = () => {
    setSort('events');
  };
  const all = () => {
    setSort('all');
  };

  

  return (
    <>
    
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
                <div className="sortStyle">{sort}</div>
              </div>
              <div className="circle">
                <div style={{ width: '100%', height: '100%', position: 'relative' }}>
                  <div
                    style={{
                      width: '530px',
                      height: '530px',
                      left: '31%',
                      top: '-54px',
                      position: 'absolute',
                      opacity: '0.20',
                      borderRadius: '9999px',
                      border: '1px solid #42567A',
                    }}></div>
                  <div
                    style={{
                      width: '530px',
                      height: '530px',
                      left: '31%',
                      top: '-23px',
                      position: 'absolute',
                      opacity: '0.20',
                    }}>
                    <div
                      onClick={holiday}
                      title="Holiday"
                      className="circle-2"
                      style={{
                        width: '6px',
                        height: '6px',
                        left: '530px',
                        top: '231px',
                        position: 'absolute',
                        background: '#42567A',
                        borderRadius: '9999px',
                      }}>
                      2 Holiday
                    </div>
                    <div
                      onClick={birth}
                      title="Birth"
                      className="circle-2"
                      style={{
                        width: '6px',
                        height: '6px',
                        left: '135px',
                        top: '0px',
                        position: 'absolute',
                        background: '#42567A',
                        borderRadius: '9999px',
                      }}>
                      6 Birth
                    </div>
                    <div
                      onClick={selected}
                      title="selected"
                      className="circle-2"
                      style={{
                        width: '6px',
                        height: '6px',
                        left: '395px',
                        top: '0px',
                        position: 'absolute',
                        background: '#42567A',
                        borderRadius: '9999px',
                      }}>
                      1 Selected
                    </div>
                    <div
                      onClick={events}
                      title="events"
                      className="circle-2"
                      style={{
                        width: '6px',
                        height: '6px',
                        left: '399px',
                        top: '458px',
                        position: 'absolute',
                        background: '#42567A',
                        borderRadius: '9999px',
                      }}>
                      3 Events
                    </div>
                    <div
                      onClick={death}
                      title="Death"
                      className="circle-2"
                      style={{
                        width: '6px',
                        height: '6px',
                        left: '123px',
                        top: '455px',
                        position: 'absolute',
                        background: '#42567A',
                        borderRadius: '9999px',
                      }}>
                      4 Death
                    </div>
                    <div
                      onClick={all}
                      title="all"
                      className="circle-2"
                      style={{
                        width: '6px',
                        height: '6px',
                        left: '0px',
                        top: '231px',
                        position: 'absolute',
                        background: '#42567A',
                        borderRadius: '9999px',
                      }}>
                      5 All
                    </div>
                  </div>
                  <div
                    className="pe"
                    style={{
                      width: '530px',
                      height: '530px',
                      left: '3px',
                      top: '0px',
                      position: 'absolute',
                      borderRadius: '9999px',
                    }}></div>
                  <div
                    style={{
                      width: '0px',
                      height: '530px',
                      left: '268px',
                      top: '0px',
                      position: 'absolute',
                      opacity: '0.20',
                      border: '1px solid white',
                    }}></div>
                </div>
              </div>
              <span className="span-3">
                <div className="div-9">
                  {isPending ? (
                    <div>...</div>
                  ) : (
                    <>
                      <span className="color">{min} </span>
                      <span>{max}</span>
                    </>
                  )}
                </div>
              </span>
            </div>
          </div>
        </div>
    
     
    </>
  );
}

export default App;
