import React, { useEffect, useState } from 'react';
import { SliderImages } from '../Data';
import './style.scss';

const Slider = () => {
  const [people, setPeople] = useState(SliderImages);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);
  return (
    <>
      <div className='slider-container'>
        {people.map((data, personIndex) => {
          const { id, image } = data;
          let position = 'next-slide';
          if (personIndex === index) {
            position = 'active-slide';
          }
          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === people.length - 1)
          ) {
            position = 'last-slide';
          }
          return (
            <article className={`image-article ${position}`} key={id}>
              <img src={image} alt='' />
            </article>
          );
        })}
      </div>
      <div className='btn-container'>
        <button className='prev' onClick={() => setIndex(index - 1)}>
          prev
        </button>
        <button className='next' onClick={() => setIndex(index + 1)}>
          next
        </button>
      </div>
    </>
  );
};

export default Slider;
