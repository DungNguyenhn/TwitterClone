import React from 'react';

export default function Button({value,classname,disable,handleClick,type}){
    return(
      <div className='btn-wrap'>
        <button type={type} onClick={handleClick} className={classname} disabled={disable}>{value} </button>
      </div>
    )
  }