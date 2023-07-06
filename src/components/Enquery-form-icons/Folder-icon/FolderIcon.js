import React from 'react';
import { animated, useSpring } from '@react-spring/web';
import { AiOutlineForm } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import './style.scss';

const FolderIcon = ({ showOutput, setFolderIcon, setoutputAnimation }) => {
  const handleShowOutput = () => {
    showOutput(true);
    setFolderIcon(false);
    setoutputAnimation.start({
      from: {
        opacity: 0,
      },
      to: {
        opacity: 1,
      },
    });
  };
  return (
    <div className='folder-icon'>
      <AiOutlineForm
        className='icon animate-bounce'
        onClick={handleShowOutput}
      />
    </div>
  );
};

export default FolderIcon;
