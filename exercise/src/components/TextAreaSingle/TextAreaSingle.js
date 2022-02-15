import React from 'react';

export default function TextAreaSingle({handleChange,placeholder,value}){
    return(
      <textarea 
        onChange={handleChange} 
        className='textarea-post' 
        placeholder={placeholder}
        value={value}
      >
      </textarea>
    );
  }
