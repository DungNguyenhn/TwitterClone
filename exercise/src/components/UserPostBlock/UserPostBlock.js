import React from 'react';
import UserSinglePost from '../UserSinglePost/UserSinglePost'

export default function UserPostBlock({data,handleDelete,handleSubmit}){
    const postList=data.map((postList,i)=>{
      const {username,tagname,post,dayPost}=postList;
      return(
        <div key={`${username} + ${i}`} className='user-post-block'>
          <UserSinglePost
            username={username}
            tagname={tagname}
            post={post}
            dayPost={dayPost}
            handleDelete={handleDelete}
            i={i}
            handleSubmit = {handleSubmit}
          />
        </div>
      );
    })
    return(
      <div>
        {postList}
      </div>
    )
  }