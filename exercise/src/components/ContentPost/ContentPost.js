import React from 'react';

export default function ContentPostBlock({post}) {
    return(
        <div className='content-text-wrap'>
          <p className='content-text'>
            {post}
          </p>
        </div>
    );
}
