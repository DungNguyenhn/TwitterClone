import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEdit, faTrashAlt /*, faComment, faHeart */} from '@fortawesome/free-regular-svg-icons';

export default function DetailPost({dayPost,handleDelete,handleEdit,index}) {
    return(
        <div className='post-detail-wrap'>
          <div className='post-icon-left'>
            <FontAwesomeIcon icon={faEdit} onClick={()=>handleEdit(index)} />
            <FontAwesomeIcon icon={faTrashAlt} onClick={()=>handleDelete(index)}/>
          </div>
          {/* <div className='post-icon-center'>
            <FontAwesomeIcon icon={faComment} />
            <FontAwesomeIcon icon={faHeart} />
            <FontAwesomeIcon icon={faRetweet} />
          </div> */}
          <div className='date-posted'>
            {dayPost}
          </div>
        </div>
    )
}
