import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUser,/*faRetweet*/} from '@fortawesome/free-solid-svg-icons';

export default function NameAndImgUser({username,tagname}) {
    return(
        <div className='top-user-block'>
            <div className='img-user-wrap'>
                <div className='img-circle-wrap'>
                    <FontAwesomeIcon icon={faUser}/>
                </div>
            </div>
            <div className='user-name-wrap'>
                <span>{username}</span>
                <span>{tagname}</span>
            </div>
        </div>
    );
}
