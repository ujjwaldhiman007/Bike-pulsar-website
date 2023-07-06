import React from 'react';
import { highlights } from './Data';
import { logo } from './Data';

function Gallery() {
  return (
    <>
      <div className=' w-10/12 mx-auto my-20 '>
        <div className='pulsar-logo-box'>
          <img src={logo} className=' pulsar-logo  mx-auto' alt='' />
        </div>
        {highlights.map((fetchItems) => {
          const {
            id,
            img1,
            img2,
            heading1,
            heading2,
            subHeading1,
            subHeading2,
            desc1,
            desc2,
          } = fetchItems;
          return (
            <>
              <div className='flex flex-col md:flex-row' key={id}>
                <div className='basis-1/2 md:basis-2/3'>
                  <img
                    className=' right-clip h-full w-full'
                    src={img1}
                    alt=''
                  />
                </div>
                <div className='py-2 px-8 grid gap-4 basis-1/2'>
                  <h1 className='text-blue-600 capitalize font-semibold text-2xl'>
                    {heading1}
                  </h1>
                  <h2 className='text-white capitalize text-5xl font-bold'>
                    {subHeading1}
                  </h2>
                  <p className='text-xl tracking-wide'>{desc1}</p>
                </div>
              </div>
              <div className='flex flex-col sm:bg-gray-200 sm:flex-row md:flex-row-reverse md:bg-white '>
                {/* second sectopm */}
                <div className='basis-1/2 md:basis-2/3'>
                  <img className='left-clip h-full w-full' src={img2} alt='' />
                </div>
                <div className='py-2 px-8 grid gap-4 basis-1/2 text-white sm:bg-gray-200 md:block sm:bg-white md:text-black md:bg-black '>
                  <h1 className='text-blue-600 capitalize font-semibold text-2xl'>
                    {heading2}
                  </h1>
                  <h2 className='text-white text-5xl font-bold sm:text-black md:text-white'>
                    {subHeading2}
                  </h2>
                  <p className='capitalize font-semibold text-xl tracking-wide sm:text-black md:text-white'>
                    {desc2}
                  </p>
                </div>
              </div>
              ;
            </>
          );
        })}
      </div>
    </>
  );
}

export default Gallery;
