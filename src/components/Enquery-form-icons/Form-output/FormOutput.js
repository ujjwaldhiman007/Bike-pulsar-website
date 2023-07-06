import React from 'react';
import './style.scss';
import { animated, useSpring } from '@react-spring/web';
import { AiFillCloseCircle } from 'react-icons/ai';

const FormOutput = ({
  data,
  setOutput,
  setFolderIcon,
  outputAnimation,
  setoutputAnimation,
}) => {
  const handleShow = () => {
    setOutput(false);
    setFolderIcon(true);
    setoutputAnimation.start({
      from: {
        opacity: 1,
      },
      to: {
        opacity: 0,
      },
    });
  };
  return (
    <>
      <animated.div style={outputAnimation} className='output-container'>
        <div className='output-inner'>
          <div className='close'>
            <button className='close-icon animate-pulse' onClick={handleShow}>
              <AiFillCloseCircle />
            </button>
          </div>
          {data.map((allitems) => {
            const { id, bikeName, bikeAbs, userName, userPhone, pinCode } =
              allitems;
            return (
              <div>
                <h4>{bikeName}</h4>
                <h4>{bikeAbs}</h4>
                <h4>{userName}</h4>
                <h4>{userPhone}</h4>
                <h4>{pinCode}</h4>
              </div>
            );
          })}
        </div>
      </animated.div>
    </>
  );
};

export default FormOutput;
