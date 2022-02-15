import React, { useState } from 'react';
import NameAndImgUser from '../NameAndImgUser/NameAndImgUser'
import ContentPost from '../ContentPost/ContentPost'
import DetailPost from '../DetailPost/DetailPost'
import TextAreaSingle from '../TextAreaSingle/TextAreaSingle'
import Button from '../Button/Button'

export default function UserSingleBlock({username,tagname,post,dayPost,handleDelete,handleSubmit,i}){
    
    const [editPost,setEditPost]=useState(false);
    const [editText,setEditText]=useState(post);
    const editTextRemoveBlankSpace=(editText.replace(/\s\s\s+/g,''))

    const updatePost=()=>{
        setEditPost(true);
    }
    const cancelUpdatePost=(e)=>{
        setEditText(post);
        setEditPost(false);
    }
    const setStatePost=(e)=>{
        setEditText(editText);
        setEditPost(false);
    }
    const handleChange=(e)=>{
        setEditText(e.target.value)
    }

    if(editPost===false){
        return(
            <div>
                <NameAndImgUser username={username} tagname={tagname} />
                <ContentPost post={post} />
                <DetailPost 
                    dayPost={dayPost} 
                    handleDelete={handleDelete} 
                    handleEdit={updatePost} 
                    index={i}
                />
            </div>
        );
    }else{
        return(
            <form onSubmit={(e)=>{
                    handleSubmit(i,e,editTextRemoveBlankSpace);
                    setStatePost()
                }
            }>
                <TextAreaSingle value={editTextRemoveBlankSpace} handleChange={handleChange}  />
                <div className='btn-edit-wrap '>
                    <Button 
                        value='Save' 
                        classname='btn btn-small save-btn' 
                        type='submit'
                    />
                    <Button 
                        value='Cancel' 
                        classname='btn btn-small cancel-btn' 
                        handleClick={cancelUpdatePost} 
                        type='button'
                    />
                </div>
            </form>
        );
    }
}
