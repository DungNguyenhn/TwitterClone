import './App.css';
import React, { useState, useEffect , useRef } from 'react'
import ReactDOM from 'react-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUser,/*faRetweet*/} from '@fortawesome/free-solid-svg-icons'
import {faEdit, faTrashAlt /*, faComment, faHeart */} from '@fortawesome/free-regular-svg-icons'

function TextAreaSingle({handleChange,placeholder,value}){
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
function TextAreaInputPost(props){
  const {placeholder,handleChange,lengthInput,value}=props;
  const lengthInputData=250-lengthInput;
  return(
    <div className='textarea-wrap'>
      <TextAreaSingle
        handleChange={handleChange}
        placeholder={placeholder}
        value={value} 
      />
      <span className='count-number-text'>{lengthInputData}</span>
    </div>
  )
}
function Button({value,classname,disable,handleClick,type}){
  return(
    <div className='btn-wrap'>
      <button type={type} onClick={handleClick} className={classname} disabled={disable}>{value} </button>
    </div>
  )
}
function AddPostBlock({handleClick}){
  const [blockAddPost,setInputdata]=useState(
    {
      disableBtn:true,
      inputData:'',
    }
  )
  let inputDataLength = 0;
  const handleChangeInput=(e)=>{
    if((e.target.value)!==''){
      setInputdata({
        disableBtn:false,
        inputData:e.target.value,
      });
    }else{
      setInputdata({
        disableBtn:true,
        inputData:'',
      });
    }
  }
  const resetForm = (e)=>{
    setInputdata({
      disableBtn:true,
      inputData:'',
    })
  }
  
  const checkLengthPost = (e)=>{
    if(e.target.value.length>250){
      setInputdata({
        disableBtn: true,
        inputData: e.target.value,
      })
    }
  }
  if(blockAddPost.inputData!==undefined){
    inputDataLength=blockAddPost.inputData.length;
  }
  return(
      <div className='post-block'>
        <form onSubmit={(e)=>{handleClick(e,blockAddPost.inputData);resetForm()}}>
          <TextAreaInputPost 
            lengthInput={inputDataLength}
            handleChange={(e)=>{handleChangeInput(e);checkLengthPost(e)}} 
            placeholder='Tweet about 30 Days Of React...'
            value={blockAddPost.inputData}
          />
          <Button 
            disable={blockAddPost.disableBtn} 
            value='Add Post' 
            classname={`${blockAddPost.disableBtn ? 'btn btn-disabled btn-add-post' : 'btn btn-active btn-add-post'}`}
            type='submit'
          />
        </form>
      </div>
  );
}
function NameAndImgUser({username,tagname}){
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
function ContentPostBlock({post}){
  return(
    <div className='content-text-wrap'>
      <p className='content-text'>
        {post}
      </p>
    </div>
  );
}
function DetailPost({dayPost,handleDelete,handleEdit,index}){
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
function UserSingleBlock({username,tagname,post,dayPost,handleDelete,handleEdit,i}){
  const [editPost,setEditPost]=useState(false);
  const [editText,setEditText]=useState(post);
  const updatePost=()=>{
    setEditPost(true);
  }
  const cancelUpdatePost=(e)=>{
    setEditText(post);
    setEditPost(false);
  }
  const submitUpdatePost=(e)=>{
    setEditText(editText);
    setEditPost(false);
  }
  const handleChangeInputEdit=(e)=>{
    setEditText(e.target.value)
  }
  const editTextRemoveBlankSpace=(editText.replace(/\s\s\s+/g,''))
  if(editPost===false)
  {
    return(
      <div>
        <NameAndImgUser username={username} tagname={tagname} />
        <ContentPostBlock post={post} />
        <DetailPost dayPost={dayPost} handleDelete={handleDelete} handleEdit={updatePost} index={i}/>
      </div>
    );
  }
  else
  {
    return(
      <form /*onSubmit={()=>cancelUpdatePost()} */>
        <TextAreaSingle value={editTextRemoveBlankSpace} handleChange={handleChangeInputEdit}  />
        <div className='btn-edit-wrap '>
          <Button 
            value='Save' 
            classname='btn btn-small save-btn' 
            handleClick={
              (e)=>{handleEdit(i,e,editTextRemoveBlankSpace);submitUpdatePost()}
            }
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
function UserPostBlock({data,handleDelete,handleEdit}){
  const postList=data.map((postList,i)=>{
    const {username,tagname,post,dayPost}=postList;
    return(
      <div key={`${username} + ${i}`} className='user-post-block'>
        <UserSingleBlock 
          username={username}
          tagname={tagname}
          post={post}
          dayPost={dayPost}
          handleDelete={handleDelete}
          i={i}
          handleEdit={handleEdit}
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
function App() {
  const setDayPost=()=>{
    let options = {year: 'numeric', month: 'short', day: 'numeric',hour:'2-digit',minute:'2-digit'};
    let date = new Date();
    return date.toLocaleString('en-US', options);
  }
  const [post,setPost]=useState([
    {
      username:'user',
      tagname:'@user',
      post:
        `30 Days Of React challenge has been started on 1 October and still ongoing. 
        It will end the 30 October 2020. It was a real challenge for everyone. 
        Students learned quite a lot of concepts. I hope this will help lots of students.`,
      dayPost:setDayPost(),
    },
    {
      username:'user',
      tagname:'@user',
      post:
        `30 Days Of JavaScript challenge has been started on 1 January and ended on 30 January 2020. 
         It is of the best JavaScript material on the internet. Students learned quite a lot of concepts. 
         I hope this will help lots of students. JavaScript for Ever!`,
      dayPost:setDayPost(),
    },
    {
      username:'user',
      tagname:'@user',
      post:
        `30 Days Of Python challenge has been started on 22 November 2019 and ended on 22 December 2020.
         It is of the best references for Pythonistas, data scientists and aspiring ML.
        Students learned quite a lot of concepts. I hope this will help lots of students. Python is for best friend`,
      dayPost:setDayPost(),
    },
    {
      username:'user',
      tagname:'@user',
      post:
        `30 Days Of Python challenge has been started on 22 November 2019 and ended on 22 December 2020.
         It is of the best references for Pythonistas, data scientists and aspiring ML.
        Students learned quite a lot of concepts. I hope this will help lots of students. Python is for best friend`,
      dayPost:setDayPost(),
    },
    {
      username:'user',
      tagname:'@user',
      post:
        `I have no idea about the coming challenge. 
         It could be 30 days of HTML & CSS, ReactNative, Data Analysis or MERN.`,
      dayPost:setDayPost(),
    }
  ]);
  const submitForm=(e,inputData)=>{
    console.log('Submit xong')
    e.preventDefault();
    setPost([
      ...post,
      {
        username:'Anonymous User',
        tagname:'@Anonymous',
        post:inputData,
        dayPost:setDayPost(),
      }
    ])
  }
  const deletePost=(i)=>{
    let postCopy=[...post];
    postCopy.splice(i,1);
    setPost(postCopy);
  }
  const saveEdit=(i,e,data)=>{
    e.preventDefault();
    let copyPost=[...post];
    copyPost[i].post = data;
    setPost(copyPost);
  }
  console.log('render lai nay')
  return (
    <div className="App">
      <div className='main-wrap'>
        <AddPostBlock  handleClick={submitForm}/>
        <UserPostBlock data={post} handleDelete={deletePost}  handleEdit={saveEdit}/>
      </div>
    </div>
  );
}

export default App;
