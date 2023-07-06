import React, { useReducer } from 'react';
import { animated, useSpring } from '@react-spring/web';

import { useState } from 'react';
import { FaMotorcycle } from 'react-icons/fa';
import { HiLocationMarker } from 'react-icons/hi';
import { BsFillPersonFill, BsFillTelephoneFill } from 'react-icons/bs';
import FolderIcon from './Enquery-form-icons/Folder-icon/FolderIcon';
import FormOutput from './Enquery-form-icons/Form-output/FormOutput';
import Modal from './Enquery-form-icons/pop-modal/Modal';

// reducer function
const reducer = (state, action) => {
  if (action.type === 'DATA_ADDED') {
    const newPerson = [...state.peopleArray, action.payload];
    return {
      ...state,
      peopleArray: newPerson,
      modalContent: 'data added successful',
      isModalShow: true,
      modalColor: 'bg-green-400',
    };
  }
  if (action.type === 'NO_VALUE') {
    return {
      ...state,
      isModalShow: true,
      modalContent: 'please fill the form correctly',
      modalColor: 'bg-red-400',
    };
  }
  if (action.type === 'CLOSE_MODAL') {
    return {
      ...state,
      isModalShow: false,
    };
  }
};
// default State of out function
const defaultState = {
  // its is a object
  isModalShow: false,
  modalContent: '',
  modalColor: '',
  peopleArray: [],
};

function Form() {
  const [output, setOutput] = useState(false);
  const [folderIcon, setFolderIcon] = useState(false);
  const [outputAnimation, setoutputAnimation] = useSpring(() => ({
    opacity: 0,
  }));
  const [state, dispatch] = useReducer(reducer, defaultState);
  const [person, setPerson] = useState({
    bikeName: 'pulsar RS 200',
    bikeAbs: 'Dual channel abs',
    userName: '',
    userPhone: '',
    pinCode: '',
  });
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const id = new Date().getTime().toString();
    setPerson({ ...person, [name]: value, id });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      person.bikeName &&
      person.bikeAbs &&
      person.userName &&
      person.userPhone &&
      person.pinCode
    ) {
      const newPerson = { ...person };
      dispatch({ type: 'DATA_ADDED', payload: newPerson });
      setPerson({
        bikeName: 'pulsar RS 200',
        bikeAbs: 'Dual channel abs',
        userName: '',
        userPhone: '',
        pinCode: '',
      });
      setFolderIcon(true);
    } else {
      dispatch({ type: 'NO_VALUE' });
    }
  };
  const closeModal = () => {
    dispatch({ type: 'CLOSE_MODAL' });
  };

  return (
    <>
      <form className='w-4/5 h-fit mx-auto mt-10 mb-60 '>
        {state.isModalShow && (
          <Modal
            modalContent={state.modalContent}
            closeModal={closeModal}
            modalColor={state.modalColor}
          />
        )}

        <h1 className='text-4xl font-semibold capitalize'>enquire now</h1>
        {output && (
          <FormOutput
            data={state.peopleArray}
            setOutput={setOutput}
            setFolderIcon={setFolderIcon}
            outputAnimation={outputAnimation}
            setoutputAnimation={setoutputAnimation}
          />
        )}
        <div className=' my-5 grid grid-cols-1 duration-1000  md:grid-cols-4 md:gap-4  '>
          <div className='enquire-grid my-6 gap-3'>
            <label
              htmlFor=''
              className=' text-blue-600 text-center text-2xl ss:text-3xl'
            >
              <FaMotorcycle />
            </label>

            <input
              type='text'
              className='border-b-2 color-black font-bold w-full text-black text-xs p-2 capitalize outline-noneborder-blue-600 capitalize outline-none'
              placeholder='pulsar'
              name='bikeName'
              value={person.bikeName}
              onChange={handleChange}
            />
          </div>

          <div className='enquire-grid my-6 gap-3'>
            <label
              htmlFor=''
              className=' text-blue-600 text-center text-2xl ss:text-3xl'
            >
              <FaMotorcycle />
            </label>

            <input
              type='text'
              className='border-b-2 color-black font-bold w-full text-black text-xs p-2 capitalize outline-none'
              placeholder='abs'
              name='bikeAbs'
              value={person.bikeAbs}
              onChange={handleChange}
            />
          </div>

          <div className='enquire-grid my-6 gap-3'>
            <label
              htmlFor=''
              className=' text-blue-600 text-center text-2xl ss:text-3xl'
            >
              <BsFillPersonFill />
            </label>

            <input
              type='text'
              className='border-b-2 color-black font-bold w-full text-black text-xs p-2 capitalize outline-none'
              placeholder='name'
              name='userName'
              value={person.userName}
              onChange={handleChange}
            />
          </div>

          <div className='enquire-grid my-6 gap-3'>
            <label
              htmlFor=''
              className=' text-blue-600 text-center text-2xl ss:text-3xl'
            >
              <BsFillTelephoneFill />
            </label>

            <input
              type='text'
              className='border-b-2 color-black font-bold w-full text-black text-xs p-2 capitalize outline-none'
              placeholder='phone'
              name='userPhone'
              value={person.userPhone}
              onChange={handleChange}
            />
          </div>

          <div className='enquire-grid my-6 gap-3'>
            <label
              htmlFor=''
              className=' text-blue-600 text-center text-2xl ss:text-3xl'
            >
              <HiLocationMarker />
            </label>

            <input
              type='text'
              className='border-b-2 color-black font-bold w-full text-black text-xs p-2 capitalize outline-none'
              placeholder='pincode'
              name='pinCode'
              value={person.pinCode}
              onChange={handleChange}
            />
          </div>
        </div>
        <button
          onClick={handleSubmit}
          type='submit'
          className='capitalize hover:bg-blue-900 duration-500 bg-blue-600 w-full p-2 rounded-full text-white shadow-xl my-5 md:w-40  '
        >
          submit
        </button>

        {folderIcon && (
          <FolderIcon
            showOutput={setOutput}
            setFolderIcon={setFolderIcon}
            setoutputAnimation={setoutputAnimation}
          />
        )}
      </form>
      {/* // testing */}
      {/* <div>
        {state.peopleArray.map((items) => {
          const { bikeName, bikeAbs, userName, userPhone, pinCode } = items;
          return (
            <>
              {' '}
              <h2>{bikeName}</h2>
              <h2>{bikeAbs}</h2>
              <h2>{userName}</h2>
              <h2>{userPhone}</h2>
              <h2>{pinCode}</h2>
            </>
          );
        })}
      </div> */}
    </>
  );
}

export default Form;
