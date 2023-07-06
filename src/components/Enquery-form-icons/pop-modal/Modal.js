import React, { useState } from 'react';
import { useEffect } from 'react';

const Modal = ({ modalContent, closeModal, modalColor }) => {
  useEffect(() => {
    setTimeout(() => {
      closeModal();
    }, 3000);
  });
  return (
    <div
      className={`modal ${modalColor} text-black font-sans text-center my-8
    rounded-full md:w-80 md:mx-auto md:p-2 md:text-xl`}
    >
      <p className='font-semibold capitalize'>{modalContent}</p>
    </div>
  );
};

export default Modal;
